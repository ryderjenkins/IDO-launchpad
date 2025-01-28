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
            details: 'Lorem ipsum dolor sit amet consectetur. Suspendisse tempus congue orci semper consectetur bibendum mi. Arcu dignissim porttitor pretium diam nec faucibus. Consectetur donec phasellus vitae eros enim ut sed et tortor. At sed diam tristique sit mi ante sit. Egestas adipiscing tincidunt fermentum cras eu massa convallis lectus aliquet. Potenti purus nullam nec nunc risus ut rhoncus. Augue in nam quisque massa est. Tincidunt a diam sed magnis sed egestas vel nibh scelerisque. Rhoncus aliquam vel pharetra curabitur euismod.',
        },
        {
            title: 'What is an IDO?',
            details: 'Lorem ipsum dolor sit amet consectetur. Suspendisse tempus congue orci semper consectetur bibendum mi. Arcu dignissim porttitor pretium diam nec faucibus. Consectetur donec phasellus vitae eros enim ut sed et tortor. At sed diam tristique sit mi ante sit. Egestas adipiscing tincidunt fermentum cras eu massa convallis lectus aliquet. Potenti purus nullam nec nunc risus ut rhoncus. Augue in nam quisque massa est. Tincidunt a diam sed magnis sed egestas vel nibh scelerisque. Rhoncus aliquam vel pharetra curabitur euismod.',
        },
        {
            title: 'How can I get back the purchased on an IDO?',
            details: 'Lorem ipsum dolor sit amet consectetur. Suspendisse tempus congue orci semper consectetur bibendum mi. Arcu dignissim porttitor pretium diam nec faucibus. Consectetur donec phasellus vitae eros enim ut sed et tortor. At sed diam tristique sit mi ante sit. Egestas adipiscing tincidunt fermentum cras eu massa convallis lectus aliquet. Potenti purus nullam nec nunc risus ut rhoncus. Augue in nam quisque massa est. Tincidunt a diam sed magnis sed egestas vel nibh scelerisque. Rhoncus aliquam vel pharetra curabitur euismod.',
        },
        {
            title: 'How does Astromove work?',
            details: 'Lorem ipsum dolor sit amet consectetur. Suspendisse tempus congue orci semper consectetur bibendum mi. Arcu dignissim porttitor pretium diam nec faucibus. Consectetur donec phasellus vitae eros enim ut sed et tortor. At sed diam tristique sit mi ante sit. Egestas adipiscing tincidunt fermentum cras eu massa convallis lectus aliquet. Potenti purus nullam nec nunc risus ut rhoncus. Augue in nam quisque massa est. Tincidunt a diam sed magnis sed egestas vel nibh scelerisque. Rhoncus aliquam vel pharetra curabitur euismod.',
        },
        {
            title: 'What is the cost of Astromove?',
            details: 'Lorem ipsum dolor sit amet consectetur. Suspendisse tempus congue orci semper consectetur bibendum mi. Arcu dignissim porttitor pretium diam nec faucibus. Consectetur donec phasellus vitae eros enim ut sed et tortor. At sed diam tristique sit mi ante sit. Egestas adipiscing tincidunt fermentum cras eu massa convallis lectus aliquet. Potenti purus nullam nec nunc risus ut rhoncus. Augue in nam quisque massa est. Tincidunt a diam sed magnis sed egestas vel nibh scelerisque. Rhoncus aliquam vel pharetra curabitur euismod.',
        },
        {
            title: 'How do I get started with Astromove?',
            details: 'Lorem ipsum dolor sit amet consectetur. Suspendisse tempus congue orci semper consectetur bibendum mi. Arcu dignissim porttitor pretium diam nec faucibus. Consectetur donec phasellus vitae eros enim ut sed et tortor. At sed diam tristique sit mi ante sit. Egestas adipiscing tincidunt fermentum cras eu massa convallis lectus aliquet. Potenti purus nullam nec nunc risus ut rhoncus. Augue in nam quisque massa est. Tincidunt a diam sed magnis sed egestas vel nibh scelerisque. Rhoncus aliquam vel pharetra curabitur euismod.',
        },
        {
            title: 'What is the refund policy?',
            details: 'Lorem ipsum dolor sit amet consectetur. Suspendisse tempus congue orci semper consectetur bibendum mi. Arcu dignissim porttitor pretium diam nec faucibus. Consectetur donec phasellus vitae eros enim ut sed et tortor. At sed diam tristique sit mi ante sit. Egestas adipiscing tincidunt fermentum cras eu massa convallis lectus aliquet. Potenti purus nullam nec nunc risus ut rhoncus. Augue in nam quisque massa est. Tincidunt a diam sed magnis sed egestas vel nibh scelerisque. Rhoncus aliquam vel pharetra curabitur euismod.',
        },
        {
            title: 'What is the cost of Astromove?',
            details: 'Lorem ipsum dolor sit amet consectetur. Suspendisse tempus congue orci semper consectetur bibendum mi. Arcu dignissim porttitor pretium diam nec faucibus. Consectetur donec phasellus vitae eros enim ut sed et tortor. At sed diam tristique sit mi ante sit. Egestas adipiscing tincidunt fermentum cras eu massa convallis lectus aliquet. Potenti purus nullam nec nunc risus ut rhoncus. Augue in nam quisque massa est. Tincidunt a diam sed magnis sed egestas vel nibh scelerisque. Rhoncus aliquam vel pharetra curabitur euismod.',
        }


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
