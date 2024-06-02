
// export async function onRequestPost(context) {
// const formdata = await context.request.formData();
// const username = formdata.get('user-name-1');
// const email = formdata.get('email-2');
// await context.env.USER_DATA_STORE1.put(username, email);
// return new Response(`${username} - ${email}`);
// }

// src/functions/api/register-user.js
export async function onRequestPost(context) {
    const formData = await context.request.formData();
    const username = formData.get('user-name-1');
    const email = formData.get('email-2');
  
    // Assuming USER_DATA_STORE1 is a key-value storage (like Workers KV or a similar service)
    await context.env.USER_DATA_STORE1.put(username, email);
  
    return new Response(`${username} - ${email}`, {
      headers: { 'Content-Type': 'text/plain' },
    });
  }
  


// const express = require('express');
// const bodyParser = require('body-parser');
// const FormData = require('form-data');
// const app = express();
// const port = 3001;

// const USER_DATA_STORE1 = new Map();

// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/register-user', async (req, res) => {
//     const username = req.body['user-name-17'];
//     const email = req.body['email-2'];
//     USER_DATA_STORE1.set(username, email);
//     res.send(`${username} - ${email}`);
// });

// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });
