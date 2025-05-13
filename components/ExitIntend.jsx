"use client"
import { submitFeedback } from '@/actions/submitFeedback';
import useFetch from '@/hooks/use-fetch';
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';

const ExitIntentForm = () => {
    const [showModal, setShowModal] = useState(false);
    const [formShownOnce, setFormShownOnce] = useState(false);



    useEffect(() => {
        const handleMouseOut = (e) => {
            if (e.clientY < 0 && !formShownOnce) {
                setShowModal(true);
                setFormShownOnce(true);
            }
        };

        document.addEventListener('mouseout', handleMouseOut);
        return () => document.removeEventListener('mouseout', handleMouseOut);
    }, [formShownOnce]);

    const handleClose = () => {
        setShowModal(false);
    };

    const {
        loading,
        fn: submitFeedbackFn,
        data,
    } = useFetch(submitFeedback);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Collect form data
        const feedbackData = {
            name: e.target.name.value,
            helpful: e.target.helpful.value,
            improvement: e.target.improvement.value,
            reason: e.target.reason.value
        };


        // Send the data to the backend
        try {
            // await fetch('http://localhost:5000/submit-feedback', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(feedbackData),
            // });
            console.log(feedbackData)
            await submitFeedbackFn(feedbackData); 
            
            toast.success("Thanks for your valuable feedback! We're constantly improving.");
            setShowModal(false);
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };



    return (
        <>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[1000]">
                    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl shadow-lg w-11/12 sm:w-[600px] lg:w-[700px] p-8 relative animate-fadeIn">
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-4 text-3xl text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white"
                        >
                            ×
                        </button>
                        <h2 className="text-2xl font-bold mb-4">Before You Leave...</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Help us make <strong>AI Career Coach</strong> better. We’d love to know what worked, what didn’t, and how we can improve your experience.
                        </p>
                        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                            <div>
                                <label className="block font-medium mb-1">Your Name (optional)</label>
                                <input
                                    name="name"
                                    type="text"
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block font-medium mb-1">What did you find helpful?</label>
                                <textarea
                                    name="helpful"
                                    required
                                    rows={3}
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                                    placeholder="e.g. Resume tips, interview guidance, etc."
                                ></textarea>
                            </div>

                            <div>
                                <label className="block font-medium mb-1">What can we do better?</label>
                                <textarea
                                    name="improvement"
                                    required
                                    rows={3}
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                                    placeholder="e.g. More career paths, better UI, etc."
                                ></textarea>
                            </div>

                            <div>
                                <label className="block font-medium mb-1">Why are you leaving?</label>
                                <select
                                    name='reason'
                                    required
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">-- Select an option --</option>
                                    <option value="found-what-i-needed">I found what I needed</option>
                                    <option value="confusing-interface">Interface was confusing</option>
                                    <option value="not-useful">Content wasn’t useful</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200 text-lg"
                            >
                                Submit Feedback
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ExitIntentForm;
