"use client"
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
    const [user, setUser] = useState({ email: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitting login")
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input className="m-2 border-4" type="email" name="email" value={user.email} onChange={e => setUser(p => ({ ...p, email: e.target.value }))} required placeholder="enter your email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input className="m-2 border-4" type="password" name="password" value={user.password} onChange={e => setUser(p => ({ ...p, password: e.target.value }))} required placeholder="enter your password" />
                </div>
                <div>
                    <button className="p-2 mb-5 bg-black text-red-50 rounded-full" type="submit">Submit</button>
                </div>
                <Link href="/register" className="underline">Don't have an account? SIGN UP</Link>
            </form>
        </div>
    )
}