'use client'
import Image from 'next/image';
import Help from '../../../public/assets/icon/Wallet/help.png';
import Close from '../../../public/assets/icon/Close.png';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#030409',
    border: '1px solid #E3E3E3',
    boxShadow: 24,
    borderRadius: '10px',
    py: '20px',
    px: '23px',
};

import { Jost } from 'next/font/google';
const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',

});

export default function NestedModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {

    return (
        <div className={`${jost.className}`}>
            <Modal
                open={isOpen}
                onClose={onClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                className='backdrop-blur-sm'
            >
                <Box sx={{ ...style, width: 360, height: 420 }}>
                    <div className='flex justify-between items-center'>
                        <a href="">
                            <Image
                                alt='help'
                                src={Help}
                            />
                        </a>
                        <h1 className={`text-[20px] font-medium ${jost.className}`}>Connect Wallet</h1>
                        <a href="">
                            <Image
                                alt='close'
                                src={Close}
                            />
                        </a>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
