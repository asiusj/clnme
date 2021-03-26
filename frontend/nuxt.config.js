export default {
	modules: ["@nuxtjs/axios"],
	buildModules: ["@nuxtjs/pwa", "@nuxtjs/dotenv"],
	components: true,
	plugins: ["~/plugins/bootstrap-vue.js"],
	env: {
		API_HOST: process.env.API_HOST || "localhost",
		API_PORT: process.env.API_PORT || "1337",
	},
};
