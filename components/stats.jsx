import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Stats = () => {
    const [startCount, setStartCount] = useState(false);

    return (
        <section className="w-full py-12 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }} // Re-triggers when 30% is in view
                    onViewportEnter={() => setStartCount(true)}
                    onViewportLeave={() => setStartCount(false)}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } },
                    }}
                    className="flex flex-wrap justify-center md:justify-between max-w-[1450px] mx-auto text-center gap-10"
                >
                    {[
                        { value: 50, label: "Industries Covered", suffix: "+" },
                        { value: 999, label: "Interview Questions", suffix: "+" },
                        { value: 95, label: "Success Rate", suffix: "%" },
                        { value: "24/7", label: "AI Support", suffix: "" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group flex flex-col items-center justify-center space-y-2 md:space-y-6 flex-1 min-w-[150px]"
                        >
                            <h3 className="text-4xl md:text-[4vw] font-bold transition-all duration-300">
                                <span className="text-orange-600 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                    {typeof item.value === "number" ? (
                                        <CountUp
                                            start={startCount ? 0 : null}
                                            end={item.value}
                                            suffix={item.suffix}
                                            duration={2.5}
                                            redraw={true}
                                        />
                                    ) : (
                                        item.value
                                    )}
                                </span>
                            </h3>
                            <p className="text-muted-foreground">{item.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
