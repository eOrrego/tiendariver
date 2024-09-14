'use client';

import { Suspense } from 'react';
import { useAuthStore } from '@/store/authStore';
import { NewsletterSubscription, ProfileDetails, UserWelcome } from '@/components';
import ProfileLoading from './loading';

const UserProfilePage = () => {
    const { user, role } = useAuthStore();

    return (
        <Suspense fallback={<ProfileLoading />}>
            <div className="flex flex-col gap-6">
                <UserWelcome name={user?.firstName ?? 'Guest'} role={role} />
                <ProfileDetails user={{
                    firstName: user?.firstName ?? '',
                    lastName: user?.lastName ?? '',
                    email: user?.email ?? '',
                    birthDate: user?.birthDate ?? ''
                }} />
                <NewsletterSubscription />
            </div>
        </Suspense>

    );
};

export default UserProfilePage;
