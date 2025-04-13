import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Quiz from '../_component/quiz'

const MockInterviewPage = () => {
  return (
    <div className='container mx-auto space-y-4 py-6'>
      <div className='flex flex-col space-y-2 mx-2'>
        <Link href="/interview" className="flex items-center gap-2 text-sm hover:underline">
          <ArrowLeft className='h-4 w-4' />
          Back to Interview Preparation
        </Link>

        <div className='flex flex-col items-center'>
          <h1 className='text-3xl sm:text-5xl md:text-[4vw] font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animated-gradient'>Mock Interview</h1>
          <p className='text-muted-foreground'>Test your knowledge with industry specific questions</p>
        </div>
      </div>
      <Quiz/>
    </div>
  )
}

export default MockInterviewPage
