//js-value-noise node.js test

const vnoise = require("../index.js");

//Set seed
vnoise.seed = 10;

//Fractal noise
console.log(vnoise.fractal2d(0, 0, 5));
console.log(vnoise.fractal3d(0, 0, 0, 5));

//Value noise
console.log(vnoise.noise2d(0, 0));
console.log(vnoise.noise3d(0, 0, 0));
