# js-value-noise
2D/3D Value Noise in Javascript!

# Installation
From npm:
`npm install js-value-noise`

Into project:
`const vnoise = require("js-value-noise");`

# Usage
[Live Demo!](https://codepen.io/_bm/debug/EXEPpO)

Using fractal noise (6+ octaves for pleasant result):
```
//Returns value between -1 and 1
var value = vnoise.fractal2d(x, y, octaves)
```
