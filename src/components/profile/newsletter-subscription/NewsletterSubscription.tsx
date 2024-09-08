'use client';

import React, { useState } from 'react';

export const NewsletterSubscription = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);

    return (
        <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-md font-bold mb-2">Boletín informativo</h3>
            <label className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    checked={isSubscribed}
                    onChange={(e) => setIsSubscribed(e.target.checked)}
                    className="form-checkbox"
                />
                <span>Quiero recibir el boletín informativo con promociones.</span>
            </label>
        </div>
    );
};