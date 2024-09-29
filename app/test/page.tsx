'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';

export default function TestPage() {
  const [apiResult, setApiResult] = useState<{ count: number; message: string } | null>(null);

  const handleApiCall = useCallback(async () => {
    try {
      const response = await fetch('/api/test');
      const data = await response.json();
      setApiResult(data);
    } catch (error) {
      console.error('Error calling API:', error);
      setApiResult(null);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Test API Page</h1>
      <div className="mb-8">
        <button
          onClick={handleApiCall}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Call Test API
        </button>
      </div>
      {apiResult && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="font-bold">API Result:</h3>
          <p>Message: {apiResult.message}</p>
          <p>Count: {apiResult.count}</p>
        </div>
      )}
      <div className="mt-8 flex space-x-4">
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
        <Link href="/test/subpage" className="text-blue-500 hover:underline">
          Go to Subpage
        </Link>
      </div>
    </main>
  );
}