type KVNamespace = {
    get: (key: string) => Promise<string | null>;
    put: (key: string, value: string) => Promise<void>;
    delete: (key: string) => Promise<void>;
  };
  
  const handleOptions = () => {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  };
  
  export async function onRequest(context: {
    request: Request;
    env: { USER_DATA_STORE: KVNamespace };
  }) {
    if (context.request.method === 'OPTIONS') {
      return handleOptions();
    } else if (context.request.method === 'POST' && new URL(context.request.url).pathname === '/api/register-user') {
      return onRequestPost(context);
    } else {
      return new Response('Method Not Allowed', { status: 405 });
    }
  }
  
  async function onRequestPost(context: {
    request: Request;
    env: { USER_DATA_STORE: KVNamespace };
  }) {
    try {
      const formData = await context.request.json();
      const { username, email } = formData;
  
      if (!username || !email) {
        return new Response('Invalid input', { status: 400 });
      }
  
      await context.env.USER_DATA_STORE.put(username, email);
      return new Response(`${username} - ${email}`, { status: 200 });
    } catch (error) {
      return new Response('Error processing request', { status: 500 });
    }
  }
  