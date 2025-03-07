"use client"
import { BlurFade } from '@/components/magicui/blur-fade'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { AuthContext } from '@/context/AuthContext'
import { api } from '@/convex/_generated/api'
import AiAssistantsList from '@/services/AiAssistantsList'
import { useConvex, useMutation } from 'convex/react'
import { Loader2Icon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

export type ASSISTANT = {
    id: number,
    name: string,
    title: string,
    image: string,
    instruction: string,
    userInstruction: string,
    sampleQuestions: string[]
}

function AIAssistants() {
    const [selectedAssistant,setSelectedAssistant] = useState<ASSISTANT[]>([]);
    const insertAssistant = useMutation(api.userAiAssistants.InsertSelectedAssistants);
    const {user} = useContext(AuthContext);
    const [loading,setLoading] = useState(false);
    const convex = useConvex();
    const router = useRouter();

    useEffect(()=>{
        user&&GetUserAssistants();
    },[user])

    const GetUserAssistants = async() => {
        const result = await convex.query(api.userAiAssistants.GetAllUseAssistants,{
            uid:user._id
        });
        console.log(result)
        if (result.length>0)
        {
            //Navigate to New Screen
            router.replace('/workspace')
            return ;
        }
    }

    const onSelect = (assistant: ASSISTANT)=>
    {
        const item = selectedAssistant.find((item:ASSISTANT)=>item.id==assistant.id);
        if (item){
            setSelectedAssistant(selectedAssistant.filter((item:ASSISTANT)=>item.id!==assistant.id))
            return ;
        }
        setSelectedAssistant(prev=>[...prev,assistant]);
    }
    const IsAssistantSelected=(assistant:any)=>{
        const item = selectedAssistant.find((item:ASSISTANT)=>item.id==assistant.id);
        return item?true:false
    }

    const OnClickContinue = async() => {
        setLoading(true);
        	const result =  await insertAssistant({
                records:selectedAssistant,
                uid:user?._id
            });
            setLoading(false);
            console.log(result);
    }

    return (
      <div className='px-10 mt-15 md:px-16 ls:px-36 xl:px-48'>
          <div className='flex justify-between items-center'>
                <div>
                    <BlurFade delay={0.25} inView>
                        <h2 className='text-3xl font-bold'>Welcome to World of AI Assistants🤖</h2>
                    </BlurFade>
                    <BlurFade delay={0.25 * 2} inView>
                        <p className='text-xl mt-2'>Choose your AI Campanion to Simplify Your Task 🚀</p>
                    </BlurFade>
                </div>
              <Button disabled={selectedAssistant?.length == 0||loading} className='cursor-pointer'
              onClick={OnClickContinue}
              > {loading&&<Loader2Icon className='animate-spin'/>} Continue</Button>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5'>
              {AiAssistantsList.map((assistant, index)=>(
                <BlurFade key={assistant.image} delay={0.25 + index * 0.05} inView>
                    <div key={index} className='hover:border p-3 rounded-xl hover:scale-105 
                    transition-all ease-in-out cursor-pointer relative' onClick={()=>onSelect(assistant)}>
                        <Checkbox className='absolute m-2' checked={IsAssistantSelected(assistant)} />
                        <Image src={assistant.image} alt={assistant.title}
                            width={600}
                            height={600}
                            className='rounded-xl w-full h-[200px] object-cover'
                        />
                        <h2 className='text-center font-bold text-lg'>{assistant.name}</h2>
                        <h2 className='text-center text-gray-600 dark:text-gray-300'>{assistant.title}</h2>
                    </div>
                </BlurFade>
              ))}
          </div>
      </div>
    )
}

export default AIAssistants