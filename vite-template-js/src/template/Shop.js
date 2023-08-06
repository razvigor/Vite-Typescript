import Title from '../module/TitleModule';
import MetaTagsModule from '../module/MetatagsModule';

export default class Shop {
	constructor(_data) {
		this._data = _data;
	}

	render() {
		const titleHead = new Title('Mex Santos - Shop');
		titleHead.init();
		const meta = new MetaTagsModule(
			'A wide selection of food from Mexican cuisine',
			'./img/arrozcontortillas_tn.jpg',
			'Mex Santos -  Shop',
			location.href
		);
		meta.init();

		const container = document.createElement('div');
		container.className = 'container mx-auto';
		const title = document.createElement('h1');
		title.className = 'text-3xl';
		title.textContent = 'Shop';
		container.append(title);
		const app = document.getElementById('app');
		app.prepend(container);
	}
}
