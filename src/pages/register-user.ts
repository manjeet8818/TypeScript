
import { Context } from './custom-cloudflare-worker-types'; // assuming you have a custom type declaration file


export async function onRequestPost(context: Context): Promise<Response> {
  const formData = await context.request.formData();
  const username = formData.get('user-name-1') as string;
  const email = formData.get('email-2') as string;

  if (username && email) {
    await context.env.USER_DATA_STORE.put(username, email);
    return new Response(`${username} - ${email}`);
  } else {
    return new Response('Invalid form data', { status: 400 });
  }
}