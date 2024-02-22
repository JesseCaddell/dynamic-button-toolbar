import React from 'react';

const AlertButton = ({ message, children }) => {
  const handleClick = () => {
    alert(message);
  };

  return <button onClick={handleClick}>{children}</button>;
};

const Toolbar = () => {
  
    const buttons = [
      { message: 'Downloading!', children: 'Download File' },
      { message: 'Sharing!', children: 'Share Document' },
      { message: 'Deleting!', children: 'Delet Item' },
    ];
  return (
    buttons.map(button => 
      <AlertButton
          message={button.message}
          children={button.message}
          />)
  )
};

export default Toolbar;