/**
 * @description 服务端异步获取数据的模拟函数
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-06 15:45:54
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
export default () => {
  return new Promise((resolve) => {
    setTimeout(() =>
      resolve([
        {
          title: "2021年为什么经济在恢复，我却越来越焦虑？",
          id: 0,
          author: "mangwu",
          url: "https://www.zhihu.com/question/451778275",
        },
      ])
    , 2000);
  });
};
