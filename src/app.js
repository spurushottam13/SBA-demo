const { default: browser } = require("./browser-log");
// SBA => SharedArrayBuffer

const iframe = document.createElement("iframe");
iframe.src = "./iframe.html";
iframe.setAttribute("width", "400px");
iframe.setAttribute("height", "400px");

iframe.onload = () => {
  browser.log("Iframe Loaded");
  iframe.contentWindow.postMessage(JSON.stringify({ type: "@sp13/getSBA" }));
};

let SBA;

window.addEventListener("message", (event) => {
  browser.log("POST_MESSAGE: ", event.data);
  const { type, value } = event.data;
  if (type === "@sp13/SBA") {
    browser.log("ShareArrayBuffer initiated : ", value);
    SBA = value;
  }
});

function logCurrentTimeUsingSBA() {
  if (!SBA) return browser.log("NOt Ready");
  const state = new Uint32Array(SBA);
  const ct = state[0];
  document.querySelector("#ct-data").innerHTML = ct;
}

document.querySelector("button").onclick = logCurrentTimeUsingSBA;

document.querySelector("#iframe-container").prepend(iframe);
