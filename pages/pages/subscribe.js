import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

export default function Subscribe() {
  const handleSubscribe = async (priceId) => {
    const stripe = await stripePromise;

    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId }),
    });

    const session = await res.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Choose Your Aurum AI Plan</h1>
      <div className="space-y-4">
        <button
          className="bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-500"
          onClick={() => handleSubscribe('price_1Rj0BtQsCfrl8XOHo5tyfttj')}
        >
          Weekly – $29/week
        </button>
        <button
          className="bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-500"
          onClick={() => handleSubscribe('price_1Rj0CdQsCfrl8XOHveau5G2S')}
        >
          Monthly – $99/month
        </button>
        <button
          className="bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-500"
          onClick={() => handleSubscribe('price_1Rj0D5QsCfrl8XOHSgjQqGSz')}
        >
          Yearly – $999/year
        </button>
      </div>
    </div>
  );
}
