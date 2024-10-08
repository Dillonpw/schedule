import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex max-h-8 w-full shrink-0 flex-col items-center gap-2 border-t bg-background px-4 py-6 sm:flex-row md:px-6">
      <p className="text-xs text-muted-foreground">
        &copy; 2024 Sched Track. All rights reserved.
      </p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6">
        <Link
          href="/privacy"
          className="text-xs underline-offset-4 hover:underline"
          prefetch={false}
        >
          Privacy Policy
        </Link>
        <Link
          href="/contact"
          className="text-xs underline-offset-4 hover:underline"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
