import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex justify-center space-x-6 p-4 text-sm bg-white shadow">
      <Link href="/" className="text-gray-700 hover:text-black font-semibold">Home</Link>
      <Link href="/subscribe" className="text-gray-700 hover:text-black">Subscribe</Link>
      <Link href="/privacy-policy" className="text-gray-700 hover:text-black">Privacy</Link>
      <Link href="/terms-of-service" className="text-gray-700 hover:text-black">Terms</Link>
    </nav>
  );
}
