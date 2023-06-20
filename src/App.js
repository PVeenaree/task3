import React from 'react';
import ColorPicker from './colorpicker';

const App = () => {
  const colors = ['Black', 'White', 'Blue', 'Green', 'Yellow', 'Orange', 'Red','Grey','Brown','Navy','Aqua','Aquamarine'];

  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;