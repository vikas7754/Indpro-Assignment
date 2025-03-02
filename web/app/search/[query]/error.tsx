"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-6 w-full h-svh flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold mb-4">Something went wrong!</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="text-blue-600 underline mt-4 cursor-pointer"
      >
        Try again
      </button>
      <Link href="/" className="text-blue-600 underline mt-4">
        Go back home
      </Link>
    </div>
  );
}
