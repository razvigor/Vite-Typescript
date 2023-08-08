import CartItemModule from './CartItemModule';
import ShopItemsModule from './ShopItemsModule';

export default class CartItemsModule {
	constructor(_data = [], _subtotal = 0, _shipping = 8, _total = 0) {
		this._data = _data;
		this._subtotal = _subtotal;
		this._shipping = _shipping;
		this._total = _total;
	}
	get data() {
		return this._data;
	}
	set data(data) {
		this._data = data;
	}
	get subtotal() {
		return this._subtotal;
	}
	set subtotal(subtotal) {
		this._subtotal = subtotal;
	}
	get shipping() {
		return this._shipping;
	}
	set shipping(shipping) {
		this._shipping = shipping;
	}
	get total() {
		return this._total;
	}
	set total(total) {
		this._total = total;
	}

	initData() {
		const shop = new ShopItemsModule();
		const storage = shop.getFromStorage('cart');
		this.data = storage.map((item) => {
			const cart = {
				id: item.id,
				img: item.img,
				title: item.title,
				quantity: 1,
				price: item.price,
				total: item.price,
			};

			return cart;
		});
		this.subtotal =
			this.data.length &&
			this.data.map((item) => item.total).reduce((acc, item) => (acc += item));
		this.shipping = 8;
		this.total = this.data.length && this.subtotal + this.shipping;
	}
}
