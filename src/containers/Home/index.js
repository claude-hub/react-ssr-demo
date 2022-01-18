import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';
import styles from './style.css';

const HomeComp = (props) => {
  // 标识为服务器端渲染
  if (props.staticContext) {
    console.log(styles);
    props.staticContext.css.push(styles._getCss());
  }
  const { homeStore, getList } = props;
  const { name, list } = homeStore;
  useEffect(() => {
    if (list.length === 0) {
      getList();
    }
  }, [list]);
  return (
    <div>
      <p>{name}</p>
      <button onClick={() => console.log('click')}>点击</button>

      <p>
        <Link to='/login'>跳转到登录</Link>
      </p>

      <p>以下是请求接口获取到的数据</p>
      {list.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    homeStore: state.home,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getList() {
    dispatch(getHomeList());
  },
});

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComp);

Home.loadData = (store) => {
  return store.dispatch(getHomeList());
};

export default Home;
