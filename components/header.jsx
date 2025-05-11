import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { CircleDollarSign, LayoutDashboard, PenBox } from "lucide-react";
import { Button } from "@/components/ui/button";




const Header = () => {
  

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50">
      <nav
        className={
          "container mx-auto px-4 py-4 flex justify-between items-center"
        }
      >
        <Link href="/">
          <CircleDollarSign className="cursor-hover w-8 h-8" />
        </Link>
        <div className="flex items-center space-x-2">
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button variant="outline">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>

            <Link
              href="/transaction/create"
              className="flex items-center gap-2"
            >
              <Button>
                <PenBox size={18} />
                <span className="hidden md:inline">transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8",
                },
              }}
            />
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Header;
