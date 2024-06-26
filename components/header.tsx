import Link from "next/link";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <>
      <header className="h-20 w-full border-b-2 border-slate-200 px-4">
        <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
          <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
            <h1 className="text-2xl font-extrabold tracking-wide">Header</h1>
          </div>
          <Button size="lg" variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </header>
    </>
  );
};
