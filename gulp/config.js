module.exports = {
	port: 4000,
	projectName: "Project TP",
	watch: {
		js: "**/*.js",
		css: "css/*.css",
		html: "**/*.html",
		options: { cwd:"app",ignoreInitial: false },
		event: "change"
	},
	src: {
		js:"",
		css:"./app/css/**/*.css",
		html:"./app/js/modules/**/*.html"
	},
	clean: [
      'dist/index.js',
      'dist/index-min.js',
   ],
	dest: {
		js: "dist",
		css: "dist/css",
		template: "dist/views/",
	},
	fileNames: {
		js: "index.js",
		css: "index.css"
	},
	fonts: {
		path: "node_modules/font-awesome/fonts/*",
		dest: "dist/fonts"
	},
	environment: "development",
	destination: "./dist/"
}
