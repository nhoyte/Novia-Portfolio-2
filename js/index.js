// new Typewriter("#welcome-text", {
//   strings: "Welcome to my site!",
//   autoStart: true,
//   delay: 150,
//   changeCursor: "✒️",
// });
const typewriter = new Typewriter("#welcome-text", {
  autoStart: true,
  delay: 150,
});
typewriter
  .changeCursor("✍🏽")
  .typeString("Welcome to my site!")
  .pauseFor(5)
  .start();

//Construct contact me email address for obscurity
let username = "noviahoyte";
let domain = "@gmail.com";
let contactEmail = document.querySelector("#contact-email");
contactEmail.innerHTML = `✉️ <a href="mailto:${username}${domain}" class="footer">Send an E-mail</a>`;

$("body").scrollspy({ target: "#navbar-navigation" });
