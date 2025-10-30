import React from "react";

const Card = ({ 
    children, 
    title = "Título por defecto", 
    width = 'w-full', 
    headerColor = 'bg-transparent' 
}) => {
    return (
        <>
        <div className={`block rounded-lg bg-white text-surface shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-surface-dark dark:text-white ${width}`}>
            <div className={`border-b-2 border-neutral-100 rounded-t-lg px-6 py-3 dark:border-white/10 font-bold text-gray-800 ${headerColor}`}>
                {title}
            </div>
            <div className="p-6">
                {children}
            </div>
            {/* <div
                className="border-t-2 border-neutral-100 px-6 py-3 text-surface/75 dark:border-white/10 dark:text-neutral-300">
                2 days ago
            </div> */}
        </div>
    </>
    );
};

export default Card;