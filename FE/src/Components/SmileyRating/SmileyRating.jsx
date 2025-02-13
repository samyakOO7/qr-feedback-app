import React, { useState } from 'react';
import smiley1 from '../../assets/angry.png';
import smiley2 from '../../assets/sad.png';
import smiley3 from '../../assets/confused.png';
import smiley4 from '../../assets/happy.png';
import smiley5 from '../../assets/smile.png';
import './SmileyRating.css'; // Import CSS file for styling

const smileyIcons = [smiley1, smiley2, smiley3, smiley4, smiley5];

const SmileyRating = () => {
  const [rating, setRating] = useState(0);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const handleClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="smiley-rating">
      {smileyIcons.map((icon, index) => (
        <img
          key={index}
          src={icon}
          alt={`Smiley ${index + 1}`}
          className={`smiley-icon ${rating === index +1 ? 'active' : ''} ${hoveredIndex === index ? 'hovered' : ''}`}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default SmileyRating;
