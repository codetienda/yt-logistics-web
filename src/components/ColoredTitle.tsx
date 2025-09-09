import React from 'react';

type ColoredTitleProps = {
  title: string;
  highlightWords: string[];       
  highlightColor: string; 
  className?: string;             
};

const ColoredTitle: React.FC<ColoredTitleProps> = ({
  title,
  highlightWords,
  highlightColor,
  className = '',
}) => {
  const words = title.split(/(\s+|\b)/);

  return (
    <h2 className={`${className}`}>
      {words.map((word, index) => {
        const normalizedWord = word.toLowerCase();
        const isHighlighted = highlightWords.some(
          (w) => w.toLowerCase() === normalizedWord
        );

        return (
          <span key={index} className={isHighlighted ? highlightColor : ''}>
            {word}
          </span>
        );
      })}
    </h2>
  );
};

export default ColoredTitle;
