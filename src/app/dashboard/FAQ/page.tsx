import { Jost } from 'next/font/google';
import FAQcard from '@/app/components/FAQcard';
const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',

})


export default function FAQ() {
    return (
        <div className={`w-full mt-[240px] ${jost.className}`}>
            <h1 className='font-bold mb-[60px] text-[40px]'>Frequently Asked Questions</h1>
            <FAQcard />
            <FAQcard />
            <FAQcard />
        </div>
    );
};
