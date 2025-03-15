"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileUser,  ArrowRight, MessageSquare, BrainCircuit, LineChart } from "lucide-react";

const Services = () => {
    const services = [
        {
            name: "AI Powered Career Guidance",
            href: "#contact",
            icon: BrainCircuit,
            desc: "Get personalized career advice lorem test and insights powered by advanced AI technology.",
        },
        {
            name: "Industry Insights",
            href: "#",
            icon: LineChart,
            desc: "Get the latest industry trends, insights, and expert opinions to stay ahead in your career.",
        },
        {
            name: "AI Resume Builder",
            href: "#about",
            icon: FileUser,
            desc: "Generate professional, ATS-friendly resumes with AI-powered suggestions and formatting.",
        },
        {
            name: "AI Mock Interviews",
            href: "#contact",
            icon: MessageSquare,
            desc: "Practice real-time AI-driven mock interviews with instant feedback to improve your performance.",
        },
        
    ];


    return (
        <section className="w-full flex flex-col justify-center sm:px-16 md:px-[5%] max-w-[1640px] mx-auto min-h-screen">
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-3xl sm:text-5xl md:text-[5vw] font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animated-gradient">
                    Powerful Features
                </div>
                <h3 className="text-gray-700 dark:text-gray-400 text-lg mt-2">
                    Seamless learning through smart scheduling and expert connections.
                </h3>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8 mt-12">
                {services.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.2 }}
                        whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                        className="group flex flex-col mx-2 md:mx-0 justify-between  p-6 shadow-lg rounded-lg w-full sm:w-[400px] md:w-[22%] hover:shadow-xl bg-orange-10 dark:bg-black dark:hover:bg-black/30 transition-all duration-400 hover:cursor-pointer hover:border-2 hover:border-orange-500 dark:hover:border-gray-300 min-h-[250px] md:min-h-[350px] h-auto"     
                    >
                        {/* Icon & Title */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="p-2 rounded-lg bg-orange-500  dark:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:bg-gradient-to-r group-hover:dark:group-hover:bg-gray-800">
                                <item.icon size={30} className="text-white dark:text-white " />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 text-center dark:text-white">{item.name}</h3>
                        </div>

                        {/* Description */}
                        <p className="text-sm mt-5 flex-1 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100">
                            {item.desc}
                        </p>

                        {/* Call-to-Action */}
                        <div className="flex items-center justify-between font-medium mt-4 text-orange-600 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white">
                            <p className="text-orange-600 dark:bg-gradient-to-r dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 dark:bg-clip-text dark:text-transparent">
                                Learn More
                            </p>



                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="text-orange-600 dark:text-transparent">
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#3b82f6" />  {/* blue-500 */}
                                        <stop offset="50%" stopColor="#8b5cf6" /> {/* purple-500 */}
                                        <stop offset="100%" stopColor="#ec4899" /> {/* pink-500 */}
                                    </linearGradient>
                                </defs>
                                <ArrowRight stroke="url(#gradient)" />
                            </svg>

                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;