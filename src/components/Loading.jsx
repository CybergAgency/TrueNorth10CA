// Loading.js
import React from 'react';

const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="spinner">
        {/* Simple CSS spinner */}
        <div className="loading-circle"></div>
      </div>
    </div>
  );
};

export default Loading;
