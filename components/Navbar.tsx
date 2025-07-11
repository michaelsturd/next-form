import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Seanmizzy App</h1>
      <div className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  );
}
