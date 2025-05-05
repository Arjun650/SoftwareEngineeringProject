import { getResume } from '@/actions/resume'
import React from 'react'
import ResumeBuilder from './_component/resumeBuilder';

const page = async() => {
    const resume = await getResume(); 
  return (
    <div className='container mx-auto py-6'>
      <ResumeBuilder initialContent={resume?.content} initialJsonContent={resume?.jsonContent} /> 
    </div>
  )
}

export default page
