
'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import GoogleIcon from '@/components/GoogleIcon'; // Import our new icon

export default function LoginPage() {
  const supabase = createClientComponentClient();

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google', // This is the only line that truly matters for the logic
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="p-8 bg-white shadow-md rounded-lg text-center w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">MyResume.ai</h1>
        <p className="text-gray-600 mb-6">Build your professional resume in minutes.</p>
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
        >
          <GoogleIcon />
          Sign In with Google
        </button>
        <p className="text-xs text-gray-500 mt-4">
          We'll set up your account automatically.
        </p>
      </div>
    </div>
  );
}