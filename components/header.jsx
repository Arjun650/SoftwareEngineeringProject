import React from 'react'
import { ModeToggle } from './toggle'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from './ui/button'
import { LayoutDashboard } from 'lucide-react'

const Header = () => {
    return (
        <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
            <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
                <Link className='h-12 py-1 w-auto object-contain' href='/'>LOGO</Link>
                <div>
                    <SignedIn>
                        <Link href={"/dashboard"}>
                            <Button>
                                <LayoutDashboard className='h-4 w-4'/>
                                Industry Insights
                            </Button>
                        </Link>
                    </SignedIn>
                </div>
            </nav>


        <div>
            <ModeToggle />
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
        </header>
    )
}

export default Header