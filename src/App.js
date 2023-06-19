import React from 'react';
import ColorPicker from './components/colorpicker';

const App = () => {
  const colors = ['Violet', 'Indigo', 'Blue', 'Green', 'Yellow', 'Orange', 'Red','Aqua','Salmon','Lime','Magenta','Midnightblue'];

  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;