import React from 'react';
import {Link,NavLink} from 'react-router-dom';

const Nav = () => {
  const navList =[
    {content: 'Hot topic',href:'/'},
    {content: 'CardList', href:'cardList'}
  ]
  return (
    <div id='nav'>
      <h2 className='blind'>메인메뉴</h2>
      <ul>
        {
          navList.map((ele,index)=>{
            return(
              <li key={index}><NavLink to={ele.href}>{ele.content}</NavLink></li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Nav;