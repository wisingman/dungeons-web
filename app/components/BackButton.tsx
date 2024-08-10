'use client';

import { useRouter, usePathname } from 'next/navigation';
import React from 'react';

const BackButton: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleBackClick = () => {
        router.back(); // Navigate back to the previous page
    };

    if (pathname === '/') {
        return (
            ""
        );
    }

    return (
        <button 
            onClick={handleBackClick} 
            className="fixed top-8 left-8 bg-gray-900 text-white outline outline-1 outline-gray-50 py-2 px-4 rounded hover:bg-gray-700 transition-colors z-50">
            Previous Page
        </button>
    );
};

export default BackButton;