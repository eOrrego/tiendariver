'use client';

import { CheckoutSummary, DeliveryForm, PaymentForm, PersonalDataForm } from '@/components';
import React, { useState } from 'react';


const CheckoutPage = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setStep((prev) => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <div className="flex flex-col lg:flex-row justify-between p-6">
            <div className="lg:w-2/3">
                {step === 1 && <PersonalDataForm onNext={nextStep} />}
                {step === 2 && <DeliveryForm onNext={nextStep} onBack={prevStep} />}
                {step === 3 && <PaymentForm onBack={prevStep} />}
            </div>
            <div className="lg:w-1/3 lg:ml-6">
                <CheckoutSummary />
            </div>
        </div>
    );
};

export default CheckoutPage;
