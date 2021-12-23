window.onload = () => {
  console.log("window的load事件触发了");
};
const img = document.querySelector(".normal");
img.onload = () => {
  console.log("图片加载了");
};
