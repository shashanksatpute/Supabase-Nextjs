import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg-supabase-1.png"
export default function Home() {
  return (
    <main className="mt-24">
    

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to Supabase demo.
        </h1>
        <Link
          href="/products"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore Nextjs and Supabase
        </Link>
      </div>
    </main>
  );
}
