# js-value-noise
*1.0.3*

2D/3D Value Noise in Javascript!

# Installation
From npm:
```bash
npm install js-value-noise
```

In browser:
```html
<script src="./jsvaluenoise.min.js"></script>
```

In NodeJS project:
```javascript
const vnoise = require("js-value-noise");
```

# Usage
[Live Demo!](https://codepen.io/_bm/full/EXEPpO/)

Using fractal noise (6+ octaves for pleasant result):
```javascript
//Seed can be any number
vnoise.seed = 0;

//Fractal noise returns a value between -2 and 2, depending on # octaves
value = vnoise.fractal2d(x, y, octaves);
value = vnoise.fractal3d(x, y, z, octaves);
```
