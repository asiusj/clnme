import axios from "axios";

const axiosSettings = {
	baseURL: `${process.env.API_HOST ? "http://" + process.env.API_HOST : document.location.hostname}:${process.env.API_PORT || "1337"}`,
};

export const state = () => ({
	serverError: { status: false, error: undefined, wasCachedAt: undefined },
	productList: { title: "Category title", products: [] },
});

export const mutations = {
	SERVER_ERROR(state, error) {
		state.serverError = { status: true, error, wasCachedAt: error.wasCachedAt };
	},
	PRODUCTS(state, products) {
		state.productList = { ...state.productList, products };
	},
	CATEGORY_TITLE(state, title) {
		state.productList = { ...state.productList, title };
	},
};

export const getters = {
	SERVER_ERROR(state) {
		return state.serverError;
	},
	ERROR_STATUS(state) {
		return state.serverError.status;
	},
	PRODUCT_LIST(state) {
		return state.productList;
	},
	PRODUCTS(state) {
		return state.productList.products;
	},
	CATEGORY_TITLE(state) {
		return state.productList.title;
	},
};

export const actions = {
	PRODUCT_LIST: async ({ commit }) => {
		await axios
			.get("/product-list", axiosSettings)
			.then(({ data }) => {
				commit("PRODUCTS", data.products);
				commit("CATEGORY_TITLE", data.Title);
			})
			.catch((e) => {
				console.log(e);
				e.wasCachedAt = "store index.js actions PRODUCT_LIST";
				commit("SERVER_ERROR", e);
			});
	},
};
