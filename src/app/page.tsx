
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const supabase = createServerComponentClient({ cookies });
  
  // Check if a user session exists
  const { data: { session } } = await supabase.auth.getSession();

  // Redirect based on session
  if (session) {
    redirect('/dashboard'); // If logged in, go to the dashboard
  } else {
    redirect('/login'); // If not logged in, go to the login page
  }
}