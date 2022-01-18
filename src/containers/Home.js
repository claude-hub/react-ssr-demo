import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <p>首页</p>
      <button onClick={() => console.log('click')}>点击</button>

      <p>
        <Link to='/login'>跳转到登录</Link>
      </p>
    </div>
  )
}

export default Home;
