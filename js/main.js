import Darkmode from "darkmode-js";

var options = {
  bottom: "64px", // default: '32px'
  right: "unset", // default: '32px'
  left: "32px", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: false, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();

document.querySelector(".js-change-theme").addEventListener("click", () => {
  const body = document.querySelector("body");

  if (body.classList.contains("t--light")) {
    body.classList.remove("t--light");
    body.classList.add("t--dark");
  } else {
    body.classList.remove("t--dark");
    body.classList.add("t--light");
  }
});
