export async function onRequestPost(context: {
    request: Request;
    env: { USER_DATA_STORE: { put: (key: string, value: string) => Promise<void> } };
  }) {
    try {
      const formData = await context.request.formData();
      const username = formData.get('user-name-1') as string;
      const email = formData.get('email-2') as string;
  
      if (!username || !email) {
        return new Response('Invalid input', { status: 400 });
      }
  
      await context.env.USER_DATA_STORE.put(username, email);
      return new Response(`${username} - ${email}`, { status: 200 });
    } catch (error) {
      return new Response('Error processing request', { status: 500 });
    }
  }
  