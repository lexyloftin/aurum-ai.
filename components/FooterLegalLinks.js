import Link from 'next/link';

export default function FooterLegalLinks() {
  return (
    <footer className="text-center text-sm mt-12">
      <Link href="/privacy-policy" className="underline">Privacy</Link>
      <span className="mx-2">|</span>
      <Link href="/terms-of-service" className="underline">Terms</Link>
    </footer>
  );
}