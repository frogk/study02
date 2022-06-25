import React from 'react';
import { useState } from 'react';

function HotTopicItem({data}) {
  const [isHovering, setIsHovering] = useState(0)
  return (
    <li>
      <div className="box" 
        onMouseOver={()=>setIsHovering(1)}
        onMouseOut={()=>setIsHovering(0)}>
        <div className='image'>
          <img src={data.thumbnail} alt="" />
        </div>
        <div className="dimmed">
            {
              isHovering === 0 ? 
              <span className='copy'>{data.copy}</span> :
              <div>
                <img src={data.profilepic} alt="" />
                <p>{data.nickname}</p>
                <span>{data.contents}</span>
              </div>
            }
        </div>
      </div>
    </li>
  );
};

export default HotTopicItem;