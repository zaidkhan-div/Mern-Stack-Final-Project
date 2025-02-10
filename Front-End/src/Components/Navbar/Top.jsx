import React, { useEffect, useState } from 'react';
import './Top.css';

const Top = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY === 0); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="top-bar" style={{ display: visible ? 'block' : 'none' }}>
      <div className="scroll">
        <div className="tab">Free Shipping on Orders over $50</div>
        <div className="tab">One Day Delivery Available in US</div>
        <div className="tab">25% OFF Store Wide Use Code : DISB</div>
      </div>
    </div>
  );
};

export default Top;
