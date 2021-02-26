const docgen = require("react-docgen-typescript");

module.exports = {
	require: ["tabler-icons-react"],
	components: "src/components/**/[A-Z]*.tsx",
	getExampleFilename(componentPath) {
		return componentPath.replace(/\.tsx?$/, ".examples.md");
	},
	propsParser: docgen.withCustomConfig("./tsconfig.json").parse,
	styleguideDir: "./example/public/documentation",
	template: {
		head: {
			links: [
				{
					rel: "stylesheet",
					href:
						"https://unpkg.com/@tabler/core@1.0.0-beta/dist/css/tabler.min.css",
				},
				{
					rel: "stylesheet",
					href:
						"https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,500,500i,600,600i,700,700i&amp;subset=latin-ext",
				},
			],
		},
	},
	theme: {
		fontFamily: {
			base:
				'"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
		},
	},
	sections: [
		{
			name: "Introduction",
			content: "docs/Introduction.md",
		},
		{
			name: "Components",
			sections: [
				{
					name: "Alert",
					components: "src/components/Alert/**/*.tsx",
				},
			],
		},
	],
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/,
					loader: "awesome-typescript-loader",
				},
				// Babel loader will use your project’s babel.config.js
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: "babel-loader",
				},
				// Other loaders that are needed for your components
				{
					test: /\.css$/,
					use: ["style-loader", "css-loader"],
				},
			],
		},
	},
};
