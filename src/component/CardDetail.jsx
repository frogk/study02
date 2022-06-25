import React from 'react';
import { useLocation } from 'react-router-dom';

const CardDetail = () => {
  const { state } = useLocation();
  console.log(state)
  return (
    <div className='detail'>
      <h1>{state.title}</h1>
    </div>
  );
};

export default CardDetail;