import Header from "@/components/Header";
import AccountInfo from "@/components/AccountInfo";
import SignIn from "@/components/Sign-in";

export default function SignInPage() {
  return (
    <main>
      <Header />
      <AccountInfo />
      <div className="mt-[-12rem] flex h-screen flex-col items-center justify-center">
        <SignIn />
      </div>
    </main>
  );
}
