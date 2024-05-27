
export async function onRequestPost(context) {
const formdata = await context.request.formData();
const username = formdata.get('user-name-1');
const email = formdata.get('email-2');
await context.env.USER_DATA_STORE1.put(username, email);
return new Response(`${username} - ${email}`);
}
