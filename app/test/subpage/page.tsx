'use client';

import Link from 'next/link';

export default function TestSubpage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Test Subpage</h1>
      <p className="mb-8">This is a subpage under the /test route.</p>
      <div className="flex space-x-4">
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