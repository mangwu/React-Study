let targetWin = {};
let window;
if (window !== undefined) targetWin = window;
var proxyWindow = new Proxy(targetWin, {
  get: function(target, key, receiver) {
    if (!targetWin) {
      return Reflect.get({ nothing: function() {} }, "nothing", receiver);
    }
    return Reflect.get(target, key, receiver);
  },
});

export default proxyWindow;
