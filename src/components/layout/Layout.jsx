import React from 'react';
import { Link } from "react-router-dom";

const Layout = ({children}) => {
    return (
        <div>
            <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-md">
                <Link
                    to="/"
                    className="text-3xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
                >
                    ERMA
                </Link>
            </header>
            <main>
                {children}
            </main>
            <footer className="bg-gray-800 text-white py-6 px-4 text-center">
                <p>
                    footer
                </p>
            </footer>
        </div>
    );
};

export default Layout;