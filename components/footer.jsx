import Image from 'next/image'
import { useEffect, useState } from 'react';

const Footer = () => {
    const [year, setYear] = useState(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);
    return (
        <footer className="bg-orange-400 text-neutral-800 z-20 relative dark:bg-neutral-950 dark:text-neutral-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    <div className="col-span-2">
                        <div className="flex items-center space-x-2 mb-4">

                            <span className="text-xl font-bold  text-neutral-600 dark:text-white">
                                <Image src={"/logo4.png"} width={120} height={120} alt='logo' />
                            </span>
                        </div>
                        <p className="text-netutral-600 mb-4 -mt-4 dark:text-neutral-500">
                            Brew Your Carreer Success
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-neutral-800 mb-4 dark:text-white">
                            Product
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white ">
                                    Features
                                </a>
                            </li>
                            {/* <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors cursor-none">
                                    Pricing
                                </a>
                            </li> */}
                            <li>
                                <a
                                    href="#testimoinals"
                                    className="hover:text-white transition-colors ">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                    className="hover:text-white transition-colors ">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-neutral-800 mb-4 dark:text-white">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#about"
                                    className="hover:text-white transition-colors ">
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#career"
                                    className="hover:text-white transition-colors ">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#blog"
                                    className="hover:text-white transition-colors ">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="hover:text-white transition-colors ">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-neutral-800 mb-4 dark:text-white">
                            Resources
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors ">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors ">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors ">
                                    Community
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors ">
                                    API
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-neutral-800 mb-4 dark:text-white">
                            Legal
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors ">
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors ">
                                    Terms
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors ">
                                    Security
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors ">
                                    Cookies
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-800 text-center text-neutral-800 dark:text-white dark:border-white/[0.2]">
                    <p>
                        &copy; {year ?? "2024"} Prepuccino. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
