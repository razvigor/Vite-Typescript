import Title from '../module/TitleModule';
import MetaTagsModule from '../module/MetatagsModule';

export default class ShopItem {
	constructor(_data = null) {
		this._data = _data;
	}
	get data() {
		return this._data;
	}
	render() {
		const titleHead = new Title('Mex Santos - Shop');
		titleHead.init();
		const meta = new MetaTagsModule(
			'A wide selection of food from Mexican cuisine',
			`./img/arrozcontortillas_tn.jpg`,
			'Mex Santos -  Shop',
			location.href
		);
		meta.init();

		const main = document.createElement('main');
		const container = document.createElement('div');
		container.className = 'container mx-auto';

		main.append(container);
		const app = document.getElementById('app');
		app.prepend(main);

		container.innerHTML = `
    <h1 class='text-3xl lg:text-4xl mt-8 mb-12'>Shop</h1>
    `;
	}
}
