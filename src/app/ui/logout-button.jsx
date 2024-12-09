'use client';

import { signOut } from 'next-auth/react';
import { Button } from '@/app/ui/button';

export default function LogoutButton() {
  const handleLogout = () => {
    signOut({ callbackUrl: '/login' }); // Redirect to login page after sign-out
  };

  return (
    <Button onClick={handleLogout} className="mt-4 w-full">
      Log out
    </Button>
  );
}
