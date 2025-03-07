"use client"
import { Button } from '@/components/ui/button'
import { AuthContext } from '@/context/AuthContext';
import { api } from '@/convex/_generated/api';
import { GetAuthUserData } from '@/services/GlobalApi';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useMutation } from 'convex/react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'

function SignIn() {
  
  const CreateUser=useMutation(api.users.CreateUser);
  const {user, setUser} = useContext(AuthContext);
  const router = useRouter();
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);

      if (typeof window !== undefined) {
        localStorage.setItem('user_token',tokenResponse.access_token)
      }
      const user = await GetAuthUserData(tokenResponse.access_token);
      // Save User Info
      const result = await CreateUser({
        name:user?.name,
        email:user?.email,
        picture:user?.picture
      });
      console.log("--", result);
      setUser(result);
      router.replace('/ai-assistant')
    },
    onError: errorResponse => console.log(errorResponse),
  });
    return (
      <div className='flex items-center flex-col justify-center h-screen'>
          <div className='flex flex-col items-center
          gap-3 border rounded-2xl p-10 shadow-md'>
              <Image src={'/logo.svg'} alt='logo'
                  width={100}
                  height={100}
              />
              <h2 className='text-2xl'>Sign In To honemyskills Website</h2>
              <Button onClick={()=>googleLogin()}>Sign In With Gmail</Button>
          </div>
      </div>
    )
}

export default SignIn