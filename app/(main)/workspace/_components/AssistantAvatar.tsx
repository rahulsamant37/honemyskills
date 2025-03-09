import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"  
import AiAssistantsList from '@/services/AiAssistantsList'
import Image from 'next/image'

function AssistantAvatar({children,selectedImage}:any) {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        <div className='grid grid-cols-5 gap-2'>
            {AiAssistantsList.map((assistant,index)=>(
                <Image src={assistant.image} alt={assistant.name}
                key={index}
                width={80}
                height={80}
                className='w-[30px] h-[30px] rounded-lg 
                cursor-pointer object-cover'
                onClick={()=>selectedImage(assistant.image)}
                />
            ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default AssistantAvatar