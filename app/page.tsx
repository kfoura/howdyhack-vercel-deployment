import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 text-white">
      <h1 className="text-5xl font-bold mb-6">
        Welcome to my Hackathon!
      </h1>

      <Link
        href="/about"
        className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        About Us
      </Link>
    </main>
  );
}