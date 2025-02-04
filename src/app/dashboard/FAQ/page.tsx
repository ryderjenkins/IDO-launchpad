'use client'
import React, { useState } from 'react';
import FAQcard from '@/app/components/FAQcard';
import { Jost } from 'next/font/google';
const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',

});

interface DataItem {
    title: string;
    details: string;
}


export default function FAQ() {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const data: DataItem[] = [
        {
            title: 'What is Astromove?',
            details: 'Astromove is a launchpad platform that offers the best new tokens on the Sui and Aptos networks to users with a refund guarantee before they are listed on exchanges.',
        },
        {
            title: '⁠How can I participate in IDOs?',
            details: 'Astromove is a launchpad platform that offers the best new tokens on the Sui and Aptos networks to users with a refund guarantee before they are listed on exchanges.',
        },
        {
            title: '⁠Why only Sui and Aptos?',
            details: 'Astromove is a launchpad platform that offers the best new tokens on the Sui and Aptos networks to users with a refund guarantee before they are listed on exchanges.',
        },
        {
            title: 'How can I get information about IDO projects?',
            details: 'Astromove is a launchpad platform that offers the best new tokens on the Sui and Aptos networks to users with a refund guarantee before they are listed on exchanges.',
        },
        {
            title: '⁠Where can I withdraw the tokens I received from the IDO to my wallet?',
            details: 'Astromove is a launchpad platform that offers the best new tokens on the Sui and Aptos networks to users with a refund guarantee before they are listed on exchanges.',
        },
        {
            title: '⁠What should I pay attention to when investing?',
            details: 'Astromove is a launchpad platform that offers the best new tokens on the Sui and Aptos networks to users with a refund guarantee before they are listed on exchanges.',
        },
        {
            title: 'Do I need KYC to participate in IDOs?',
            details: 'Astromove is a launchpad platform that offers the best new tokens on the Sui and Aptos networks to users with a refund guarantee before they are listed on exchanges.',
        },
        {
            title: 'What is the refund policy and how does it work?',
            details: 'Astromove is a launchpad platform that offers the best new tokens on the Sui and Aptos networks to users with a refund guarantee before they are listed on exchanges.',
        },

    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`w-full 2xl:mt-[200px] mt-mainmargin p-2 ${jost.className}`}>
            <h1 className='font-bold mb-[60px] 2xl:text-[40px] text-center lg2:text-left text-maintitle'>Frequently Asked Questions</h1>

            {data.map((item, index) => (
                <FAQcard
                    key={index}
                    faqtitle={item.title}
                    description={item.details}
                    isOpen={openIndex === index} // Check if this dropdown is open
                    onToggle={() => handleToggle(index)} // Pass toggle function
                />
            ))}

        </div>
    );
};
