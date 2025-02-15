import React from 'react'
import { ModeToggle } from './toggle'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <nav>
                <Link href='/'>LOGO</Link>
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