import React from 'react';
import { motion } from 'framer-motion'

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <motion.button
            className="w-full lg:w-auto text-xl px-8 py-6 rounded-lg border-2 border-green-500 text-green-500 hover:bg-[#09d609] hover:text-black transition duration-400 cursor-pointer"
            onClick={onClick}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
        >
            {text}
        </motion.button>
    );
};

export default Button;