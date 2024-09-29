'use client';

import Link from 'next/link';
import { useApiResult } from '../../context/ApiResultContext';
import Card from '../../components/Card';

export default function TestSubpage() {
  const { apiResult } = useApiResult();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Test Subpage</h1>
      <Card
        title="Subpage Information"
        content="This is a subpage under the /test route."
        footer="Info"
      />
      {apiResult && (
        <div className="mt-8">
          <Card
            title="Saved API Result"
            content={`Message: ${apiResult.message}\nCount: ${apiResult.count}`}
            footer="API Response"
          />
        </div>
      )}
      <div className="mt-8 flex space-x-4">
        <Link href="/test" className="text-blue-500 hover:underline">
          Back to Test Page
        </Link>
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </main>
  );
}