export default class ShopItemsModule {
	constructor(_data = [], _shopItem, _categories, _category) {
		this._data = _data;
		this._shopItem = _shopItem;
		this._categories = _categories;
		this._category = _category;
	}

	get data() {
		return this._data;
	}
	set data(data) {
		this._data = data;
	}
	get shopItem() {
		return this._shopItem;
	}
	set shopItem(shopItem) {
		this._shopItem = shopItem;
	}
	get categories() {
		return this._categories;
	}
	set categories(categories) {
		this._categories = categories;
	}
	get category() {
		return this._category;
	}
	set category(category) {
		this._category = category;
	}
	getCategories() {
		const categores = this.data.map((item) => ({
			name: item.name,
			id: item.id,
		}));
		this.categories = categores;
	}
	getCategory(id) {
		const category = this.data.filter((item) => item.id === id);
		this.category = category;
		this.categories = category;
		console.log(this.categories);
	}
}
