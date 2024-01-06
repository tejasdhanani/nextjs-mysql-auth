"use client";
import Link from "next/link";
import { useState } from "react";

export const RegisterForm = () => {
    const [user, setUser] = useState({ name: "", email: "", country_residency: "united States", country_living: "united States", password: "", phone: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("submitting");
    }

    return (
        <div>
            <h1 className="text-xl">Register User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input className="m-2 border-4" type="text" name="name" value={user.name} placeholder="enter your name"
                        onChange={e => setUser(p => ({
                            ...p,
                            name: e.target.value
                        }))} />
                </div>
                <div>
                    <label>Email</label>
                    <input className="m-2 border-4" type="email" name="email" value={user.email} onChange={e => setUser(p => ({ ...p, email: e.target.value }))} required placeholder="enter your email" />
                </div>
                <div>
                    <label>Password</label>
                    <input className="m-2 border-4" type="password" name="password" value={user.password} onChange={e => setUser(p => ({ ...p, password: e.target.value }))} required placeholder="enter your password" />
                </div>
                <div>
                    <button className="p-2 mb-5 bg-black text-red-50 rounded-full" type="submit">Submit</button>
                </div>
                <Link href="/login" className="underline">Already have an account? LOG IN</Link>
            </form>
        </div>
    )
}