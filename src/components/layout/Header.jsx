import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-start items-center h-16 gap-6">
                {/* Logo en el menú */}
                <img 
                src="/src/assets/kevindev-logo-dark.png" 
                alt="KevinDev Logo"
                className="h-6 w-auto md:h-8" 
                />
                {/* Texto en el menú */}
                <span className="text-lg md:text-2xl font-extrabold text-indigo-700 flex items-center">
                    WebApps 
                </span>

            </div>
        </header>
    );
};

export default Header;