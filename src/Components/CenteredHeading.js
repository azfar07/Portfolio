import React from 'react';

function CenteredHeading({ text,textHighlight }) {
    // Split the text into parts, assuming "Green" is the word you want to make green.
    
    return (
      <div className="flex items-center justify-center h-32">
        <h1 className="text-2xl font-bold">
        {text}
          <span className="text-green-500">{textHighlight}</span> 
        </h1>
      </div>
    );
  }
  export default CenteredHeading;