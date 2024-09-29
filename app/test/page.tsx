'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { useApiResult } from '../context/ApiResultContext';
import Card from '../components/Card';

export default function TestPage() {
  const { apiResult, setApiResult } = useApiResult();

  const handleApiCall = useCallback(async () => {
    try {
      const response = await fetch('/api/test');
      const data = await response.json();
      setApiResult(data);
    } catch (error) {
      console.error('Error calling API:', error);
      setApiResult(null);
    }
  }, [setApiResult]);

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
        <Card
          title="API Result"
          content={`Message: ${apiResult.message}\nCount: ${apiResult.count}`}
          footer="API Response"
        />
      )}
      <div className="mt-8">
        <Card
          title="Navigation"
          content="Use these links to navigate between pages."
          footer="Links"
        />
      </div>
      <div className="mt-4 flex space-x-4">
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