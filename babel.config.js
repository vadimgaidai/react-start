module.exports = {
	presets: [
		['@babel/preset-react'],
		[
			'@babel/preset-env',
			{
				exclude: ['transform-async-to-generator', 'transform-regenerator'],
			},
		],
	],
	plugins: [
		'@babel/plugin-transform-runtime',
		['module:fast-async', { spec: true }],
	],
}
