const { API } = require('pr-lerna-core');
const axios = require('axios');
const getPopularImg = () => axios.get(API)

module.exports = getPopularImg;

getPopularImg().then((res) => {
  console.log('响应数据长度：',res.data.length);
}).catch(err => {
  console.log('获取数据失败');
})