'use client';  // Indicates that this is a client-side component in a Next.js application

import { useRouter, usePathname } from 'next/navigation';  // Importing hooks for navigation and pathname handling
import React from 'react';  // Importing React

const BackButton: React.FC = () => {
    const router = useRouter();  // Initializes the router to handle navigation
    const pathname = usePathname();  // Retrieves the current pathname of the URL

    const handleBackClick = () => {
        router.back();  // Navigates the user to the previous page in the history stack
    };

    // Conditionally render nothing if the current pathname is '/'
    if (pathname === '/') {
        return (
            ""
        );
    }

    return (
        <button
            onClick={handleBackClick}  // Trigger navigation to the previous page when the button is clicked
            className="fixed top-8 left-8 bg-gray-900 text-white outline outline-1 outline-gray-50 py-2 px-4 rounded hover:bg-gray-700 transition-colors z-50">
            Previous Page
        </button>
    );
};

export default BackButton;