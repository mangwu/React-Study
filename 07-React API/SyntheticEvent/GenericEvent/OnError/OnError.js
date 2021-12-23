const log = document.querySelector("#log > ol");
// 记录错误
window.onerror = (message, source, lineno, colno, error) => {
  console.log(message);
  let str = message.toLowerCase();
  let msg = [
    "Message: " + str,
    "URL: " + source,
    "Line: " + lineno,
    "Column: " + colno,
    "Error object: " + JSON.stringify(error),
  ].join(" - ");
  if (log.textContent === "") {
    log.innerHTML = `<li>${msg}</li>`;
  } else {
    log.innerHTML += `<li>${msg}</li>`;
  }
};

// 模拟脚本错误

console.log(5 / a);
