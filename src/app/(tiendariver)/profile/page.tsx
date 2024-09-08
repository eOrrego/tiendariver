'use client';

import React from 'react';
import { useAuthStore } from '@/store/authStore';
import { NewsletterSubscription, ProfileDetails, Sidebar, UserWelcome } from '@/components';


const UserProfilePage = () => {
    const { user, role } = useAuthStore();

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white p-4 shadow-md">
                <h1 className="text-2xl font-bold text-center">Mi cuenta</h1>
            </header>
            <div className="container mx-auto flex">
                <Sidebar role={role} />
                <main className="flex-1 p-6">
                    <UserWelcome name={user?.firstName} role={role} />
                    <ProfileDetails user={user} />
                    <NewsletterSubscription />
                </main>
            </div>
        </div>
    );
};

export default UserProfilePage;
