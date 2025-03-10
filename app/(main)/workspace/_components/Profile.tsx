import React, { useContext, useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { AuthContext } from '@/context/AuthContext'
import Image from 'next/image';
import { Progress } from "@/components/ui/progress"
import { Button } from '@/components/ui/button';
import { WalletCardsIcon } from 'lucide-react';
  

function Profile({openDialog,setOpenDialog}:any) {
    const {user} = useContext(AuthContext);

    const [maxToken,setMaxToken]=useState<number>(0);

    useEffect(()=>{
        if(user?.orderId)
        {
            setMaxToken(500000)
        }
        else{
            setMaxToken(10000)
        }
    })

    return (
      <div>
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            {/* <DialogTrigger>Open</DialogTrigger> */}
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{}</DialogTitle>
                    <DialogDescription asChild>
                        <div>
                            <div className='flex gap-4 items-center'>
                                <Image src={user?.picture} alt='user'
                                width={150}
                                height={150}
                                className='w-[60px] h-[60px] rounded-full'
                                />
                                <div>
                                    <h2 className='font-bold text-lg'>{user?.name}</h2>
                                    <h2 className='text-gray-500'>{user?.email}</h2>
                                </div>
                            </div>
                            <hr className='my-3'></hr>
                            <div className='flex flex-col gap-3'>
                                <h2 className='font-bold'>Token Usage</h2>
                                <h2>{user?.credits}/{maxToken}</h2>
                                <Progress value={(user?.credits/maxToken)*100} />
                                <h2 className='flex justify-between font-bold mt-3 text-lg'>Current Plan 
                                    <span className='p-1 bg-gray-100 dark:bg-gray-700 rounded-md px-2 font-normal'>{!user?.orderId?'Free Plan':'Pro Plan'}</span></h2>
                            </div>
                            <div className='p-4 border rounded-xl'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h2 className='font-bold text-lg'>Pro Plan</h2>
                                        <h2>500,00 Tokens</h2>
                                    </div>
                                    <h2 className='font-bold text-lg'>$10/month</h2>
                                </div>
                                <hr className='my-3' />
                                <Button className='w-full'> <WalletCardsIcon /> Upgrade (10$)</Button>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
          </Dialog>
      </div>
    )
}

export default Profile