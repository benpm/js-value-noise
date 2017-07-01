obj = function () {
	function fract(n) {
		return n - Math.floor(n);
	}
	function lerp(a, b, t) {
		return (1 - t) * a + t * b;
	}
	return {
		seed: Math.random() * 100,
		hash2d: function (x, y) {
			x = 50 * fract(x * 0.3183099 + 0.71);
			y = 50 * fract(y * 0.3183099 + 0.113);
			return -1 + 2 * fract(1.375986 * seed + x * y * (x + y));
		},
		hash3d: function (x, y, z) {
			x = 50 * fract(x * 0.3183099 + 0.71);
			y = 50 * fract(y * 0.3183099 + 0.113);
			z = 50 * fract(z * 0.3183099 + 0.33);
			return -1 + 2 * fract(1.375986 * seed + x * y * z * (x + y + z));
		},
		noise2d: function (x, y) {
			let ix = Math.floor(x);
			let iy = Math.floor(y);
			let fx = fract(x);
			let fy = fract(y);
			let ux = fx * fx * (3 - 2 * fx);
			return lerp(
				lerp(hash2d(ix, iy), hash2d(ix + 1, iy), ux),
				lerp(hash2d(ix, iy + 1), hash2d(ix + 1, iy + 1), ux),
				fy * fy * (3 - 2 * fy)
			);
		},
		noise3d: function (x, y, z) {
			let ix = Math.floor(x);
			let iy = Math.floor(y);
			let iz = Math.floor(z);
			let fx = fract(x);
			let fy = fract(y);
			let fz = fract(z);
			let ux = fx * fx * (3 - 2 * fx);
			let uy = fy * fy * (3 - 2 * fy);
			return lerp(
				lerp(
					lerp(hash3d(ix + 0, iy + 0, iz + 0), hash3d(ix + 1, iy + 0, iz + 0), ux),
					lerp(hash3d(ix + 0, iy + 1, iz + 0), hash3d(ix + 1, iy + 1, iz + 0), ux),
					uy
				),
				lerp(
					lerp(hash3d(ix + 0, iy + 0, iz + 1), hash3d(ix + 1, iy + 0, iz + 1), ux),
					lerp(hash3d(ix + 0, iy + 1, iz + 1), hash3d(ix + 1, iy + 1, iz + 1), ux),
					uy
				),
				fz * fz * (3 - 2 * fz)
			);
		},
		fractal2d: function (x, y, octaves) {
			var val = 0;
			for (let i = 0; i < octaves; i++) {
				val += noise2d(x, y) / Math.pow(2, 0.5 + i - 0.5 * i);
				x -= i * 19;
				y += i * 7;
				x *= 1.4;
				y *= 1.4;
			}
			return val;
		},
		fractal3d: function (x, y, z, octaves) {
			var val = 0;
			for (let i = 0; i < octaves; i++) {
				val += noise3d(x, y, z) / Math.pow(2, 0.5 + i - 0.5 * i);
				x -= i * 7;
				y += i * 13;
				z -= i * 23;
				x *= 1.4;
				y *= 1.4;
				z *= 1.4;
			}
			return val;
		}
	};
}();
module.exports = obj;