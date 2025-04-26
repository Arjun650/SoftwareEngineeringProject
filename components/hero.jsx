"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";


const AnimatedText = ({ text, className = "" }) => {
    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
            className={className}
        >
            {text.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={`${wordIndex}-${charIndex}`}
                            variants={letterVariants}
                            className="inline-block "
                        >
                            {char}
                        </motion.span>
                    ))}
                    {/* Add a non-breaking space between words */}
                    <span className="inline-block">&nbsp;</span>
                </span>
            ))}
        </motion.span>

    );
};

const HeroSection = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center w-full pb-10 text-center max-w-[1650px] mx-auto ">
            <div className="space-y-6 mx-auto text-center ">
                <h1 className="text-5xl text-center md:text-[5vw] font-bold leading-tight text-gray-900 dark:text-white whitespace-normal">
                    <AnimatedText text="Your AI Career Coach for" />
                    <br />
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animated-gradient">
                        <AnimatedText text="Professional Success" />
                    </span>

                </h1>
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl ">
                    Advance your career with personalized guidance, interview prep, and AI-powered tools for Job Success.
                </p>
                <div className="flex justify-center space-x-4">
                    <Button size="lg" className="px-8">
                        <a href={"/dashboard"} >
                            Get Started
                        </a>
                    </Button>
                    <Link href="https://arjunkdas.vercel.app">
                        <Button size="lg" variant="outline" className="px-8">
                            Watch Demo
                        </Button>
                    </Link>
                </div>
            </div>

            {/* <div className="hero-image-wrapper flex flex-col min-h-screen justify-center items-center ">
                <div className="hero-image">
                    <Image
                        src="/banner.webp"
                        width={1180}
                        height={720}
                        alt="AI Career Coach dashboard preview"
                        className="rounded-lg shadow-2xl border mx-auto"
                        priority
                    />
                </div>
            </div> */}

        </section>
    );
};

export default HeroSection;
