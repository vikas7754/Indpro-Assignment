import { GalleryVerticalEnd } from "lucide-react";

import { SignupForm } from "@/components/signup-form";
import Link from "next/link";

export const metadata = {
  title: "Signup",
  description: "Signup to Task Manager",
};

export default function SignupPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 self-center font-medium"
        >
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Task Manager
        </Link>
        <SignupForm />
      </div>
    </div>
  );
}
