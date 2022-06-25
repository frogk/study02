import React from 'react';
import HotTopicItem from './HotTopicItem';
import { useState } from 'react';

function HotTopicList(data) {
  const data = data
  const [num,setNum] = useState(0);
  const [liData, setLiData] = useState([]);
  const code = data.filter((data,index)=>index === num)
  const fncLi = (e,index) => {
    e.preventDefault();
    setNum(index);
  }
  return (
    <div>
      <ul>
        {
          Object.entries(data.item).map((li,index)=>{
            return(
            <HotTopicItem key={index} li={li}/>
            )
          })
        }
      </ul>
    </div>
    
  );
};

export default HotTopicList;