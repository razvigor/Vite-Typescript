export default class ShopItemsModule {
	constructor(
		_data = [],
		_shopItem,
		_categories,
		_category,
		_isDisabled = false
	) {
		this._data = _data;
		this._shopItem = _shopItem;
		this._categories = _categories;
		this._category = _category;
		this._isDisabled = _isDisabled;
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
	get isDisabled() {
		return this._isDisabled;
	}
	set isDisabled(isDisabled) {
		this._isDisabled = isDisabled;
	}
	getCategories() {
		const categores = this.data.map((item) => ({
			name: item.name,
			id: item.id,
		}));
		this.categories = categores;
	}
	getFromStorage(key) {
		const storage = localStorage.getItem(key);
		if (storage === null) {
			return [];
		}
		return JSON.parse(storage);
	}
	addItemToCart(id) {
		const list = this.data.map((item) => item.items).flat(1);
		//console.log(list);
		const shopItem = list.find((item) => item.id === id);
		this.shopItem = shopItem;
		const storage = this.getFromStorage('cart');
		storage.forEach((storageItem) => {
			if (storageItem.id === id) {
				this.isDisabled = true;
			} else {
				this.isDisabled = false;
			}
		});
		if (this.isDisabled) {
			return;
		}
		storage.push({ ...this.shopItem, quantity: 1, total: this.shopItem.price });
		localStorage.setItem('cart', JSON.stringify(storage));
	}
}
