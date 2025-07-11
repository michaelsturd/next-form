export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6 px-4 text-center mt-10">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Seanmizzy. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a href="https://twitter.com/blackscofieldd" className="hover:underline text-blue-400">Twitter</a>
          <a href="https://github.com/michaelsturd" className="hover:underline text-blue-400">GitHub</a>
          <a href="/contact" className="hover:underline text-blue-400">Contact</a>
        </div>
      </footer>
    );
  }
  