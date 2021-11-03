const browser = (function () {
  const ul = document.createElement("ul");
  document.querySelector("#browser-log").append(ul);
  return {
    log: (...rest) => {
      const message = rest.map((argument) => {
        if (typeof argument !== "string") {
          return JSON.stringify(argument);
        } else {
          return argument;
        }
      });
      const li = document.createElement("li");
      li.innerText = message.join(" ");
      ul.appendChild(li);
    },
  };
})();

export default browser;
