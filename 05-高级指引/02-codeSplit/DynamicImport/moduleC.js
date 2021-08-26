const c = (isDynamic) => {
  let phrase = "moduleC.js";
  if (isDynamic) {
    phrase += " is invoked dynamically";
  }
  console.log(phrase);
}

export {c};