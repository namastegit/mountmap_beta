"use client"

import { signIn } from 'next-auth/react';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function SigningIn() {
    const router = useRouter();
    const [name, setName] = useState(" ");
    const [username, setUsername] = useState(" ");
    const [password, setPassword] = useState(" ");

    return (
        <div className='h-screen flex justify-center items-center bg-white dark:bg-black'>
            <div className='flex flex-col justify-center items-center space-y-4 border-2 p-6 rounded-2xl shadow-xl dark:shadow-black w-[340px] shadow-zinc-800'>
                <div className='flex flex-col space-y-3 justify-center items-center'>
                    <p className='text-4xl font-sans font-bold flex flex-col justify-center items-center'>
                        <img src="/camp.svg" alt="" className='w-20' />
                        Join Now
                    </p>
                </div>
                <div className='flex flex-col space-y-1 justify-center items-center w-96'>
                    <p className='px-3  w-80'>Name</p>
                    <input className='px-2 py-2  pl-3 w-80 rounded-full' type='text' placeholder='Akshay Chaudhary' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='flex flex-col space-y-1 justify-center items-center w-96'>
                    <p className='px-3  w-80'>Username</p>
                    <input className='px-2 py-2  pl-3 w-80 rounded-full' type='text' placeholder='abc123@gmail.com' onChange={(e) => setUsername(e.target.value)} />
                </div>               <div className='flex flex-col space-y-1 justify-center items-center w-96'>
                    <p className='px-3  w-80'>Password</p>
                    <input className='px-2 py-2  pl-3 w-80 rounded-full' type='password' placeholder='abc123' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='w-full'>
                    <button className='bg-zinc-800 w-full text-white p-2 rounded-xl' onClick={async () => {
                        if(username !== " " && password !== " "){
                            const res = await signIn("credentials", {
                                name: name,
                                username: username,
                                password: password,
                                redirect: false
                            });
                            if (res) {
                                router.push("/mountmap");
                            }
                        }
                        
                    }}>Sign In</button>
                </div>
                <div className='w-full'>
                    <button className='bg-zinc-800 w-full text-white p-2 rounded-xl' onClick={async () => {
                        const res = await signIn("google", { callbackUrl: "/mountmap" });
                        if (res) {
                            router.push("/mountmap");
                        }
                    }}>Google</button>
                </div>
            </div>
        </div>
    );
}
