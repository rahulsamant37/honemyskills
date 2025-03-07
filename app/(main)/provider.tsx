"use client"
import React, { useContext, useEffect } from 'react'
import Header from './_components/Header';
import { GetAuthUserData } from '@/services/GlobalApi';
import { useRouter } from 'next/navigation';
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { AuthContext } from '@/context/AuthContext';

function Provider({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const router = useRouter();
    const convex = useConvex();
    const {user, setUser} = useContext(AuthContext);
    useEffect(()=>{
        CheckUseAuth();
    }, [])
    const CheckUseAuth= async () => {
        const token = localStorage.getItem('user_token');
        // Get New Access Token
        const user = token && await GetAuthUserData(token);
        if (!user?.email)
        {
            router.replace('/sign-in');
            return ;
        }
        // Get User Info From Database
        try{
            const result = await convex.query(api.users.GetUser,{
                email:user?.email 
            });
            setUser(result);
        }catch(e)
        {

        }
    }
    return (
      <div>
          <Header/>
          {children}
      </div>
    )
}

export default Provider