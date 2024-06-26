import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

export async function onRequestPost(context) {
    const formdata = await context.request.formData();
    const email1 = formdata.get('user-name-1');
    const password1 = formdata.get('email-2');
    await context.env.USER_DATA_STORE1.put(email1, password1);
    return new Response(`${email1} - ${password1}`);
    }
function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("https://typescript-43q.pages.dev/",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data==="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="submit" onClick={submit} />

            </form>

            <form action="/signup" method="POST">
            <input type="text" name="user-name-1" id=""/>
            <input type="text" name="email-2" id=""/>
           <input type="submit" value="submit"/>
            </form>

            <br />
            <p>OR</p>
            <br />

            <form action="/api/register-user" method="POST">
        <input type="text" name="user-name-1" id=""/>
        <input type="text" name="email-2" id=""/>
        <input type="submit" value="submit"/>
    </form>
            <Link to="/signup">Signup Page</Link>

        </div>
    )
}

export default Login



