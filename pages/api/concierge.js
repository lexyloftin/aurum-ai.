export default function handler(req, res) {
  if (req.method !== 'POST')
    return res.status(405).json({ message: 'Method not allowed' });
  const { prompt } = req.body;
  if (!prompt)
    return res.status(400).json({ message: 'Prompt is required' });
  res.status(200).json({
    result: `AurumAI Suggestion: For "${prompt}", here's an elite recommendation…`,
  });
}