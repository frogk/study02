import React, { useEffect } from 'react';
import hotTopicData from '../db/hotTopicData.json';
import '../css/HotTopic.css'
import { useState } from 'react';
import HotTopicItem from './HotTopicItem';

function HotTopic() {
  const postData = hotTopicData;
  const [num,setNum] = useState(0);
  const handleTab = (e,index) => {
    e.preventDefault();
    setNum(index);
  }
  const ulData = postData.filter((data,index)=>index === num);
  const fncClassAdd = () => {
    const btn = document.querySelector('button')
    return(btn.classList.add('on'))
  }/* on ???????????? 넣는법 모르겠음... ㅠ */
  console.log(ulData)
  return (
    <div className='wrapper'>
      <div className="topic-top">
        <div className="title">
          <span>핫토픽 </span>
            {
              ulData.map((data,index)=><span> > {data.title}</span>)
            }
        </div>
        <div className="nav-button">
          {
            postData.map((data,index)=><button onClick={(e)=>{handleTab(e,index)}}>{data.id}</button>)
          }
        </div>
      </div>
      <div className="topic-bottom">
        <ul>
        {
          ulData[0].item.map((data,index)=><HotTopicItem key={data.nickname} data={data}/>)
        }
        </ul>
       
      </div>
    </div>
  );
};

export default HotTopic;