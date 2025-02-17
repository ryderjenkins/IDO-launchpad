"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import TrackCursor from '../../../public/assets/icon/sidebarclaim.png';

interface MousePosition {
    x: number;
    y: number;
}

const MouseTrack: React.FC = () => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const imageRef = useRef<HTMLImageElement>(null);
    const [rotation, setRotation] = useState<number>(0);

    // Motion values for smooth tracking
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring values for smoother movement
    const smoothX = useSpring(x, { stiffness: 50, damping: 50 });
    const smoothY = useSpring(y, { stiffness: 50, damping: 50 });

    // Handle mouse movement
    const handleMouseMove = useCallback((event: MouseEvent) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleMouseMove]);

    useEffect(() => {
        x.set(mousePosition.x);
        y.set(mousePosition.y);

        if (imageRef.current) {
            const imageElement: HTMLImageElement = imageRef.current;
            const rect = imageElement.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate rotation angle
            const angle = 90 + Math.atan2(mousePosition.y - centerY, mousePosition.x - centerX) * (180 / Math.PI);

            // Update rotation
            setRotation(angle);
        }
    }, [mousePosition, x, y]);

    return (
        <div className='h-[100vh] w-[100vw] fixed left-0 top-0 pointer-events-none'>
            <motion.div
                style={{
                    x: smoothX, // Offset X
                    y: smoothY, // Offset Y
                    position: 'fixed',
                    pointerEvents: 'none',
                    rotate: rotation,
                }}
            >
                <Image
                    ref={imageRef}
                    src={TrackCursor}
                    alt="Tracking Image"
                    width={50}
                    height={50}
                    style={{
                        display: 'block',
                    }}
                />
            </motion.div>
        </div>
    );

};
export default MouseTrack;
