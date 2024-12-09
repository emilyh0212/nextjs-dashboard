'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

export default function LoginForm() {
  const [error, setError] = useState(null); // State to handle form errors
  const { pending } = useFormStatus(); // React hook for form pending state

  const handleSubmit = async (formData) => {
    setError(null); // Reset error state
    try {
      const result = await authenticate(null, formData); // Call server action
      if (result) {
        setError(result); // Display error if authentication fails
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <form
      className="flex flex-col space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        handleSubmit(formData);
      }}
    >
      {error && (
        <div className="text-sm text-red-500">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:opacity-50"
      >
        {pending ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  );
}

