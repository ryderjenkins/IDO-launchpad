'use client'
import React from 'react';
import { Jost } from 'next/font/google'

const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',

})

export default function Button2({ name, width, height }: { name: string, width?: string, height?: string }) {
    return (
        <button
            className="rounded-[10px] bg-[#27B17D]"
            style={{ width, height }}
        >
            <span className={`text-[24px] font-medium ${jost.className}`}>{name}</span>
        </button>
    );
};