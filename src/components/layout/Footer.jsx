import React from 'react';
import TimelessPhrase from '../common/TimelessPhrase.jsx';

const Footer = () => {
    return (
    <>
        <TimelessPhrase 
          phrase="Sé un full-stack human: tanto front-end emocional como back-end espiritual"
        />

        <footer className="mt-4 py-4 border-t border-gray-200 text-center bg-white">
          <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Kevin Cisnero
          </p>
        </footer>
    </>
    );
};

export default Footer;