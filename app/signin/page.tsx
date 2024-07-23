import Header from "@/components/Header";
import SignIn from "@/components/Sign-in";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main>
      <Header />
      <div className="flex h-screen flex-col items-center justify-center">
        <Link
          href="/"
          className="absolute left-10 top-20 text-2xl hover:underline"
        >
          {" "}
          Back
        </Link>
        <SignIn />
      </div>
    </main>
  );
}
