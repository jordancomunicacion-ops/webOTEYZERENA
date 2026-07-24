"use client";

import { useState } from 'react';
import Modal from './Modal';
import Contact from './Contact';

interface ContactModalButtonProps {
    className?: string;
    children: React.ReactNode;
}

export default function ContactModalButton({ className, children }: ContactModalButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                className={className}
                onClick={() => setIsModalOpen(true)}
            >
                {children}
            </button>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Contact inModal={true} />
            </Modal>
        </>
    );
}
