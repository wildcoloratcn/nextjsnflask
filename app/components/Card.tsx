import React from 'react';

interface CardProps {
  title: string;
  content: string;
  footer?: string;
}

const Card: React.FC<CardProps> = ({ title, content, footer }) => {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2 text-yellow-300 text-shadow">{title}</div>
        <p className="text-white text-base">{content}</p>
      </div>
      {footer && (
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2 shadow">
            {footer}
          </span>
        </div>
      )}
    </div>
  );
};

export default Card;
