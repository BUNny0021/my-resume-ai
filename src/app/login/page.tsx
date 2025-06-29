
'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Github, LogIn } from 'lucide-react'; // Using GitHub for simplicity

export default function LoginPage() {
  const supabase = createClientComponentClient();

  const handleGitHubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome to MyResume.ai</h1>
      <button
        onClick={handleGitHubLogin}
        className="flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
      >
        <Github className="mr-2 h-5 w-5" />
        Sign In with GitHub
      </button>
    </div>
  );
}