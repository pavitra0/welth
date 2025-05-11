import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
      <img className="pl-10" src={`https://media.tenor.com/eYHTpej7VecAAAAi/john-travolta-lost.gif`} alt="notfound" />
      <h1 className="text-6xl pt-6 font-bold gradient gradient-title mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}