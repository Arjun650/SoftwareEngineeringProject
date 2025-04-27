import React from 'react'
import { ModeToggle } from './toggle'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from './ui/button'
import { BriefcaseBusiness, ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import Image from 'next/image'
import { checkUser } from '@/lib/checkUser'

const Header = async() => {
    
    await checkUser(); 


    return (
        <header className="fixed top-0 w-full border-b dark:bg-background/80 backdrop-blur-md z-50 dark:supports-[backdrop-filter]:bg-background/60">
            <nav className="container px-4 h-16 flex max-w-[1650px] mx-auto items-center justify-between">
                {/* Centering the logo */}
                <div className="h-16 flex-1 flex items-center">
                    <Link className="flex items-center h-full object-contain" href="/">
                        <Image src="/logo4.png" alt="ELEV" width={300} height={80} className=" h-16 md:h-20 w-auto object-contain " />
                    </Link>
                </div>
                <div className='flex items-center space-x-2 md:space-x-4'>
                    <SignedIn>
                        <Link href={"/dashboard"}>
                            <Button variant='outline'>
                                <LayoutDashboard className='h-4 w-4' />
                                <span className='hidden md:block'>
                                    Industry Insights
                                </span>
                            </Button>
                        </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button>
                                <StarsIcon className='h-4 w-4' />
                                <span className='hidden md:block'>
                                    Growth Tools
                                </span>
                                <ChevronDown />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link href={'/resume'} className='flex items-center gap-2'>
                                    <FileText className='h-4 w-4' />
                                    <span>Build Resume</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={'/ai-cover-letter'} className='flex items-center gap-2'>
                                    <PenBox className='h-4 w-4' />
                                    <span>Cover Letter</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={'/interview'} className='flex items-center gap-2'>
                                    <GraduationCap className='h-4 w-4' />
                                    <span>Interview Prep</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={'/job-posting'} className='flex items-center gap-2'>
                                    <BriefcaseBusiness  className='h-4 w-4' />
                                    <span>Explore jobs</span>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </SignedIn>
                    <ModeToggle />
                    <SignedOut>
                        <SignInButton>
                            <Button>Sign in</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton appearance={{
                            elements:{
                                avatarBox:"w-9 h-9",
                                userButtonPopoverCard:"shadow-xl",
                                userPreviewMainIdentifier:"font-semibold"
                            },
                        }}
                        afterSignOutUrl='/'
                        /> 
                    </SignedIn>
                </div>
            </nav>
            <div>
            </div>
        </header>
    )
}

export default Header