export async function onRequestPost(context: any): Promise<Response> {
  const formData = await context.request.formData();
  const username = formData.get('user-name-1') as string;
  const email = formData.get('email-2') as string;

  if (username && email) {
    await context.env.USER_DATA_STORE1.put(username, email);
    return new Response(`${username} - ${email}`);
  } else {
    return new Response('Invalid form data', { status: 400 });
  }
}
