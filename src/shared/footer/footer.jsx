import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center p-4 bg-blue-dark2">
            <p className="text-sm text-left font-primary text-white">
                © {currentYear} - Beaconhouse - All Rights Reserved
            </p>
        </footer>
    )
}

export default Footer

