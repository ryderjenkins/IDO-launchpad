import React from 'react';
import { Jost } from 'next/font/google'

const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',

})

export default function Button1({ name, width, height }: { name: string, width?: string, height?: string }) {
    return (
        <button
            className="text-white border-[1px] border-[#646769] rounded-[10px] backdrop-blur-md bg-gradient-to-l from-[#e3e3e30c] "
            style={{ width, height }}
        >
            <span className={`text-white text-[20px] font-medium ${jost.className}`}>{name}</span>
        </button>
    );
};