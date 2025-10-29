import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex flex-1">
        {/* <Sidebar /> */}
        <main className="flex-grow max-w-4xl w-full mx-auto px-0 sm:px-6 lg:px-8 py-4 lg:py-8">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;