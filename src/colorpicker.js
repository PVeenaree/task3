import { useState } from 'react';
import './color.css';
const ColorPicker = ({ colors }) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setShowColors(!showColors);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div>
      <button button className = "color-btn"
        style={{ backgroundColor: selectedColor }}
        onClick={handleButtonClick}
      >
        Select a color
      </button>
      {showColors && (
              <div className="colordiv">
                  <ul className="color-list">
          {colors.map((color, index) => (
            <li
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></li>
          ))}
        </ul>
        </div>
      )}
      {selectedColor && (
        <div className="colorName">
          <p>You selected: {selectedColor}</p>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;