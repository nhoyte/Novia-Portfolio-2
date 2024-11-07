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
