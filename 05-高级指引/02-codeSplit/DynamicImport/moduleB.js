export default (isDynamic) => {
  let phrase = "moduleB.js";
  if (isDynamic) {
    phrase += " is invoked dynamically"
  }
  console.log(phrase);
}