import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';

const HomeComp = (props) => {
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
      <div>
        {list.map(item => <p key={item.id}>{item.title}</p>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  homeStore: state.home,
});

const mapDispatchToProps = (dispatch) => ({
  getList() {
    dispatch(getHomeList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComp);
