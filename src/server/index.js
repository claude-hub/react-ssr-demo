import express from 'express';
import { matchRoutes } from 'react-router-config';
import { getServerStore } from '../store';
import getHtml from './template';
import routers from '../Routes';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = getServerStore();
  // 调用 matchRoutes 用来匹配当前路由(支持多级路由), 来往store里面加数据
  const matchedRoutes = matchRoutes(routers, req.path);
  // promise 对象数组
  const promises = [];
  matchedRoutes.forEach((item) => {
    // 如果这个路由对应的组件有 loadData 方法
    if (item.route.loadData) {
      // 那么就执行一次,并将store传进去
      // 注意loadData函数调用后需要返回Promise对象
      promises.push(item.route.loadData(store));
    }
  });

  Promise.all(promises).then(() => {
    // 此时该有的数据都已经到store里面去了
    // 执行渲染的过程(res.send操作)
    res.send(getHtml(store, req));
  });
});

app.listen(3001, () => {
  console.log('listen:3001');
});
