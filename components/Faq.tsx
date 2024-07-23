import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div className="flex w-full flex-col gap-6 bg-muted py-12 md:py-24 lg:py-32 xl:py-48">
      <h2 className="text-center text-3xl font-bold sm:text-5xl">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex w-full justify-center text-2xl">
            What are the benefits of using Rotating Schedule Builder?
          </AccordionTrigger>
          <AccordionContent className="px-20 text-center text-lg">
            Rotating Schedule Builder helps professionals manage their schedules
            more efficiently.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="flex w-full justify-center text-2xl">
            How does Rotating Schedule Builder work?
          </AccordionTrigger>
          <AccordionContent className="px-20 text-center text-lg">
            Rotating Schedule Builder allows professionals to create
            personalized schedules that fit their unique shift patterns and
            preferences.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="flex w-full justify-center text-2xl">
            Is this app cluttered with features I won't use?
          </AccordionTrigger>
          <AccordionContent className="px-20 text-center text-lg">
            Rotating Schedule Builder has one job, and it does it well.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="flex w-full justify-center text-2xl">
            Does it cost am arm and a leg?
          </AccordionTrigger>
          <AccordionContent className="px-20 text-center text-lg">
            Rotating Schedule Builder costs nothing. it's completely free for
            now!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}