import("./a.js").then(() => {
  console.log("a.js is loaded dynamically");
});

import("./moduleB.js").then((module) => {
  const b = module.default;
  b("isDynamic");
});

import("./moduleC.js").then(({ c }) => {
  c("isDynamic");
});
