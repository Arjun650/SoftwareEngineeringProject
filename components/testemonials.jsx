import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image';

const Testemonials = () => {
    const testimonial = [
        {
          quote:
            "The AI-powered interview prep was a game-changer. Landed my dream job at a top tech company!",
          author: "Sarah Chen",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
          role: "Software Engineer",
          company: "Tech Giant Co.",
        },
        {
          quote:
            "The industry insights helped me pivot my career successfully. The salary data was spot-on!",
          author: "Michael Rodriguez",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          role: "Product Manager",
          company: "StartUp Inc.",
        },
        {
          quote:
            "My resume's ATS score improved significantly. Got more interviews in two weeks than in six months!",
          author: "Priya Patel",
          image: "https://randomuser.me/api/portraits/women/74.jpg",
          role: "Marketing Director",
          company: "Global Corp",
        },
      ];
  return (
    <div>
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-2 md:px-6">
          <h2 className="leading-tight text-3xl sm:text-5xl md:text-[5vw] font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animated-gradient text-center">
            What Our Users Say
          </h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto mt-10">
            {testimonial.map((testimonial, index) => (
              <Card key={index} className="bg-orange-50 dark:bg-background w-full md:w-[30%] flex-shrink-0">
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                          width={40}
                          height={40}
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="rounded-full object-cover border-2 border-primary/20"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-primary">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-muted-foreground italic relative">
                        <span className="text-3xl text-primary absolute -top-4 -left-2">
                          &quot;
                        </span>
                        {testimonial.quote}
                        <span className="text-3xl text-primary absolute -bottom-4">
                          &quot;
                        </span>
                      </p>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testemonials
