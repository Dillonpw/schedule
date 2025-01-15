import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Pricing() {
  return (
    <div className="container mx-auto bg-muted px-4 py-16 lg:py-24">
      <div
        data-test-id="pricing"
        id="pricing"
        className="flex w-full flex-col items-stretch justify-center gap-8 lg:flex-row"
      >
        {/* Guest Users Features */}
        <div className="mx-auto w-full max-w-md lg:w-1/2">
          <Card className="group h-full overflow-hidden border bg-card transition-all duration-300 hover:shadow-lg dark:bg-gray-600">
            <CardHeader className="bg-card p-6 text-center dark:bg-gray-600">
              <CardTitle className="text-2xl font-bold text-card-foreground md:text-3xl">
                Guest
              </CardTitle>
              <p className="mt-2 text-sm text-blue-700 dark:text-red-500">
                Get To Know Our Platform
              </p>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <ul className="space-y-4 text-sm">
                {[
                  "Limited access to our custom schedule generating technology",
                  "Unlimited schedule adjustments and redos",
                  "schedule up to 90 days into the future",
                  "Schedules are not stored and are lost after closing the window",
                  "Download and add your schedule to your calendar of choice",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-card-foreground/90 transition-all duration-300 group-hover:text-card-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto flex items-center justify-between gap-4 border-t p-6">
              <div className="text-2xl font-bold text-card-foreground md:text-3xl">
                FREE
              </div>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/90"
              >
                <Link href="/generate" prefetch={false}>
                  Get Started
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Free Account Pricing */}
        <div className="mx-auto w-full max-w-md lg:w-1/2">
          <Card className="group h-full overflow-hidden border bg-card transition-all duration-300 hover:shadow-lg dark:bg-gray-600">
            <CardHeader className="bg-card p-6 text-center dark:bg-gray-600">
              <CardTitle className="text-2xl font-bold text-card-foreground md:text-3xl">
                Free Account
              </CardTitle>
              <p className="mt-2 text-sm text-blue-700 dark:text-red-500">
                Start Scheduling
              </p>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <ul className="space-y-4 text-sm">
                {[
                  "Full access to our custom schedule generating technology",
                  "Unlimited schedule adjustments and redos",
                  "Schedule up to 2 years into the future",
                  "Your most recent schedule will always be a few clicks away",
                  "Download and add your schedule to your calendar of choice",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-card-foreground/90 transition-all duration-300 group-hover:text-card-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto flex items-center justify-between gap-4 border-t p-6">
              <div className="text-2xl font-bold text-card-foreground md:text-3xl">
                FREE
              </div>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/90"
              >
                <Link href="/signin" prefetch={false}>
                  Get Started
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
