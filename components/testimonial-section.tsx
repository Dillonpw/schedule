"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    name: "Anonymous",
    role: "911 Dispatcher",
    fallback: "JD",
    content:
      "Sched Track has been a game-changer for me. It's so easy to create and view my work schedule, before finding Sched Track I would have to sit down and count the days to try to figure out my days off now it's just there anytime I need it. Highly recommend!",
  },
  {
    name: "Mike Johnson",
    role: "Fire Captain",
    fallback: "MJ",
    content:
      "As a fire captain, managing shifts for my team used to be a nightmare. This app has streamlined the entire process. It's intuitive, reliable, and has significantly reduced scheduling conflicts.",
  },
  {
    name: "Sarah Lee",
    role: "ER Doctor",
    fallback: "SL",
    content:
      "In the fast-paced environment of the ER, having a clear view of my rotating schedule is crucial. This app has made it so much easier to balance my work life with personal commitments. It's a must-have for any healthcare professional.",
  },
  {
    name: "Jane Smith",
    role: "Nursing Supervisor",
    fallback: "JS",
    content:
      "I've been using this rotating schedule app for months and it's been a lifesaver. I've gotten my whole team involved. The ability to create and manage rotating schedules has made planning our lives so much easier.",
  },
  {
    name: "Tom Wilson",
    role: "Police Sergeant",
    fallback: "TW",
    content:
      "I've tried several scheduling apps, but this one takes the cake. It's particularly useful for our department's complex rotating shifts. The ability to sync with my personal calendar is a game-changer.",
  },
  {
    name: "Emily Chen",
    role: "Air Traffic Controller",
    fallback: "EC",
    content:
      "Managing rotating shifts in air traffic control is critical. This app has not only made scheduling easier but has also helped improve our team's work-life balance. It's an essential tool in our high-stress environment.",
  },
];

export default function TestimonialsSection() {
  // Define Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = (index: number) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 }, // Left for even, right for odd
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  });

  return (
    <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              What Our Users Say
            </h2>
            <p className="max-w-[900px] text-blue-700 dark:text-red-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our satisfied users about how our rotating schedule
              builder has simplified their day to day.
            </p>
          </div>
        </div>

        <motion.div
          className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants(index)}>
              <Card className="group h-full min-h-[300px] overflow-hidden border bg-card transition-all duration-300 hover:shadow-lg dark:bg-gray-600">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary">
                      <AvatarImage alt={`${testimonial.name} Avatar`} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.fallback}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-bold text-card-foreground">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm font-semibold text-blue-700 dark:text-red-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <Separator className="my-4 bg-primary/20" />
                  <p className="text-sm text-card-foreground/90 transition-all duration-300 group-hover:text-card-foreground">
                    "{testimonial.content}"
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
