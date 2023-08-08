export default class CartItemModule {
	constructor(id, img, title, _quantity = 1, price, _total = 0) {
		this.id = id;
		this.img = img;
		this.title = title;
		this._quantity = _quantity;
		this.price = price;
		this._total = _total;
	}
	get quantity() {
		return this.quantity;
	}
	set quantity(qty) {
		this._quantity = qty;
	}
	get total() {
		return this.total;
	}
	set total(total) {
		this.total = total;
	}

	calculateTotal() {
		this.total = this.quantity * this.price;
	}

	increasQty() {
		this.quantity = ++this.quantity;
		this.calculateTota();
	}
	decreaseQty() {
		if (this.quantity > 0) {
			this.quantity = --this.quantity;
			this.calculateTotal();
		} else {
			return;
		}
	}
	inputQty(value) {
		this.quantity = value;
		this.calculateTota();
	}
}
