import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-[6vw] font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animated-gradient">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="gext-gray-600 mb-8">Oops! The you&apos; re looking for doesn&apos;t exist or has been moved</p>
        <Link href="/">
            <Button>Return Home</Button>
        </Link>
    </div>
  )}

  export default NotFound