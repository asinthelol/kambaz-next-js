"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import * as client from "../client";

interface Credentials {
  username?: string;
  password?: string;
}

export default function Signin() {
 const [credentials, setCredentials] = useState<Credentials>({});
 const dispatch = useDispatch();
 const router = useRouter();
 const signin = async () => {
   const user = await client.signin(credentials);
   if (!user) return;
   dispatch(setCurrentUser(user));
   router.push("/Dashboard");
 };


 return (
   <div id="wd-signin-screen">
    <h1>Sign in</h1>
      <FormControl defaultValue={credentials.username}
             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
             className="mb-2" placeholder="username" id="wd-username" />
      <FormControl defaultValue={credentials.password}
             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
             placeholder="password" type="password"
             className="mb-2"/>
      <Button id="wd-signin-btn"
            onClick={signin}
            className="btn btn-primary w-100 mb-2">
            Sign in </Button>
      <Link id="wd-signup-link" href="/Account/Signup">Sign up</Link>
    </div>
);}
