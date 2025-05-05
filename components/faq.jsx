import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

const FactsAndQueries = () => {
    const faqs = [
        {
          question: "What makes Prepuccino unique as a career development tool?",
          answer:
            "Prepuccino combines AI-powered career tools with industry-specific insights to help you advance your career. Our platform offers three main features: an intelligent resume builder, a cover letter generator, and an adaptive interview preparation system. Each tool is tailored to your industry and skills, providing personalized guidance for your professional journey.",
        },
        {
          question: "How does Prepuccino create tailored content?",
          answer:
            " learns about your industry, experience, and skills during onboarding. It then uses this information to generate customized resumes, cover letters, and interview questions. The content is specifically aligned with your professional background and industry standards, making it highly rPrepuccinoant and effective.",
        },
        {
          question: "How accurate and up-to-date are Prepuccino's industry insights?",
          answer:
            "We update our industry insights weekly using advanced AI analysis of current market trends. This includes salary data, in-demand skills, and industry growth patterns. Our system constantly evolves to ensure you have the most rPrepuccinoant information for your career decisions.",
        },
        {
          question: "Is my data secure with Prepuccino?",
          answer:
            "Absolutely. We prioritize the security of your professional information. All data is encrypted and securely stored using industry-standard practices. We use Clerk for authentication and never share your personal information with third parties.",
        },
        {
          question: "How can I track my interview preparation progress?",
          answer:
            "Prepuccino tracks your performance across multiple practice interviews, providing detailed analytics and improvement suggestions. You can view your progress over time, identify areas for improvement, and receive AI-generated tips to enhance your interview skills based on your responses.",
        },
        {
          question: "Can I edit the AI-generated content?",
          answer:
            "Yes! While Prepuccino generates high-quality initial content, you have full control to edit and customize all generated resumes, cover letters, and other content. Our markdown editor makes it easy to refine the content to perfectly match your needs.",
        },
      ];
    return (
        <section className="w-full py-12 md:py-24" id='faq'>
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground">
                        Find answers to common questions about our platform
                    </p>
                </div>

                <div className="max-w-3xl mx-auto ">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-md">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
            
        </section>
    )
}

export default FactsAndQueries
