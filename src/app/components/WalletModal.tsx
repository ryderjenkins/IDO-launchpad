
import React from 'react';
import { useEffect } from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {

    useEffect(() => {
        if (isOpen) {
            // Prevent body from scrolling while keeping scrollbar visible
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%'; // Prevent layout shift

            return () => {
                document.body.style.position = '';
                document.body.style.top = '';
                window.scrollTo(0, scrollY); // Restore scroll position
            };
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-100 overflow-hidden"
            onClick={onClose}
        >
            <div className="bg-white rounded-lg p-6 w-80">
                <h2 className="text-lg font-semibold mb-4">Connect Your Wallet</h2>
                <p>Please select your wallet provider.</p>
                {/* Add wallet connection options here */}
                <button
                    onClick={onClose}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Close
                </button>
            </div>
        </div>
    );
};
export default Modal;
