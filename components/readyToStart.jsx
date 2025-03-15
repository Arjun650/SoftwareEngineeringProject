import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const ReadyToStart = () => {
    return (
        <section className="w-full">
            <div className="mx-auto py-24 gradient rounded-lg">
                <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-5xl md:text-[4vw] font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animated-gradient">
                        Ready to Accelerate Your Career?
                    </h2>
                    <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
                        Join thousands of professionals who are advancing their careers
                        with AI-powered guidance.
                    </p>
                    <Link href="/dashboard" passHref>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-11 mt-5 animate-bounce"
                        >
                            Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ReadyToStart
