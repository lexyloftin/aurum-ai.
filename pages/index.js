import FooterLegalLinks from '../components/FooterLegalLinks';
export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-5xl font-bold text-yellow-400">Aurum AI</h1>
      <p className="mt-2 text-xl">Your Luxury AI Lifestyle Concierge</p>
      <FooterLegalLinks />
    </div>
  );
}