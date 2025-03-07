"use client"
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import AiAssistantsList from '@/services/AiAssistantsList'
import Image from 'next/image'
import React, { useState } from 'react'

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
    const [selectedAssistant,setSelectedAssistant]=useState<ASSISTANT[]>([]);

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

    return (
      <div className='px-10 mt-15 md:px-16 ls:px-36 xl:px-48'>
          <div className='flex justify-between items-center'>
              <div>
                  <h2 className='text-3xl font-bold'>Welcome to World of AI Assistants🤖</h2>
                  <p className='text-xl mt-2'>Choose your AI Campanion to Simplify Your Task 🚀</p>
              </div>
              <Button className='cursor-pointer'>Continue</Button>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5'>
              {AiAssistantsList.map((assistant, index)=>(
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
              ))}
          </div>
      </div>
    )
}

export default AIAssistants