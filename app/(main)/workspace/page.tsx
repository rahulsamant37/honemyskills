import React from 'react'
import AssistantList from './_components/AssistantList'

function Workspace() {
  return (
    <div className='h-screen fixed w-full'>
        <div className='grid grid-cols-5'>
            <div className='hidden md:block'>
                {/*Assistant List */}
                <AssistantList />
            </div>
            <div className=' md:col-span-4 lg:col-span-3'>
                {/*Chat UI */}
                CHAT UI
            </div>
            <div className='hidden lg:block'>
                {/*Settings */}
                SETTING
            </div>
        </div>
    </div>
  )
}

export default Workspace