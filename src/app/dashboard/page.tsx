
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login'); // Protect this page
  }

  // Fetch the user's profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name, avatar_url')
    .eq('id', session.user.id)
    .single();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome to your Dashboard</h1>
      {profile && (
        <div className="mt-4 flex items-center space-x-4">
          <img src={profile.avatar_url || ''} alt="User avatar" className="w-16 h-16 rounded-full" />
          <p className="text-xl">Hello, {profile.full_name || session.user.email}!</p>
        </div>
      )}
      <p className="mt-4">Your resume builder is ready. More features coming soon!</p>
    </div>
  );
}