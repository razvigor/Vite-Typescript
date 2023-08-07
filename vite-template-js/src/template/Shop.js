import Title from '../module/TitleModule';
import MetaTagsModule from '../module/MetatagsModule';
import ShopItemsModule from '../module/ShopItemsModule';
import Data from '../data/data.json';

export default class Shop extends ShopItemsModule {
	constructor(_data) {
		super(_data);
	}
	initData() {
		this.data = Data;
	}
	render() {
		this.initData();
		this.getCategories();
		const titleHead = new Title('Mex Santos - Shop');
		titleHead.init();
		const meta = new MetaTagsModule(
			'A wide selection of food from Mexican cuisine',
			'./img/arrozcontortillas_tn.jpg',
			'Mex Santos -  Shop',
			location.href
		);
		meta.init();

		const main = document.createElement('main');
		const container = document.createElement('div');
		container.className = 'container mx-auto';

		const h1 = document.createElement('h1');
		h1.className = 'text-3xl lg:text-4xl mt-8 mb-12';
		h1.textContent = 'Shop';
		container.append(h1);

		// Shop Container
		const shopContainer = document.createElement('div');
		shopContainer.className =
			'flex flex-wrap justify-between items-start mb-12';
		container.append(shopContainer);

		// Aside with category menu
		const aside = document.createElement('aside');
		aside.className = 'w-[100%] md:w-[20%] p-4 bg-gray-100 rounded-md';
		shopContainer.append(aside);

		const asideTitle = document.createElement('h2');
		asideTitle.className = 'pb-2 border-b border-gray-900 text-xl lg:text-2xl';
		asideTitle.textContent = 'Categories';
		aside.append(asideTitle);

		const asideList = document.createElement('ul');
		aside.append(asideList);

		const firstItem = document.createElement('li');
		asideList.append(firstItem);

		const firsItemBtn = document.createElement('button');
		firsItemBtn.type = 'button';
		firsItemBtn.className = 'text-md py-2 text-gray-800 hover:text-green-400';
		firsItemBtn.textContent = 'All';
		firsItemBtn.addEventListener('click', () => {
			console.log('All');
		});
		firstItem.append(firsItemBtn);
		//List items for categories
		this.categories.forEach((item) => {
			const listItems = document.createElement('li');
			asideList.append(listItems);
			const buttons = document.createElement('button');
			buttons.type = 'button';
			buttons.className = 'text-md py-2 text-gray-800 hover:text-green-400';
			buttons.textContent = item.name;
			buttons.addEventListener('click', () => {
				console.log(item.id);
			});
			listItems.append(buttons);
		});

		// Section with product carts

		const section = document.createElement('section');
		section.className =
			'w-100 md:w-[75%] p-4 flex flex-col gap-y-12 bg-gray-100 rounded-md';
		shopContainer.append(section);

		// List data and create shop elements

		this.data.forEach((item) => {
			const shopContainer = document.createElement('article');
			shopContainer.className = 'w-full';
			section.append(shopContainer);

			const shopTitle = document.createElement('h2');
			shopTitle.className = 'text-xl lg:text-2xl mb-4';
			shopTitle.textContent = item.name;
			shopContainer.append(shopTitle);

			const shopDesription = document.createElement('p');
			shopDesription.textContent = item.description;
			shopContainer.append(shopDesription);

			const shopCartsContainer = document.createElement('div');
			shopCartsContainer.className = 'grid grid-cols-1 md:grid-cols-4';
			shopContainer.append(shopCartsContainer);

			// List all shopItems and create elements

			item.items.forEach((item) => {
				const shopItemContainer = document.createElement('div');
				shopItemContainer.className = 'p-3 col-span-1';
				shopCartsContainer.append(shopItemContainer);

				const shopItem = document.createElement('div');
				shopItem.className =
					'flex flex-col gap-y-2 shadow  bg-white rounded-md';
				shopItemContainer.append(shopItem);

				const imgContainer = document.createElement('div');
				imgContainer.className = 'rounded-md overflow-hidden';
				imgContainer.innerHTML = `<img src='${item.img}_tn.jpg' alt="${item.title}" />`;
				shopItem.append(imgContainer);

				const contentContainer = document.createElement('div');
				contentContainer.className = 'flex flex-col p-2';
				shopItem.append(contentContainer);

				const h3 = document.createElement('h3');
				h3.className = 'text-md font-semibold';
				h3.textContent = item.title;
				contentContainer.append(h3);

				const price = document.createElement('p');
				price.textContent = `$${item.price}`;
				contentContainer.append(price);

				const buttonContainer = document.createElement('div');
				buttonContainer.className = 'flex justify-between mt-2';
				contentContainer.append(buttonContainer);

				const a = document.createElement('a');
				a.href = `/shop/${item.id}`;
				a.className =
					'text-sm rounded-md bg-orange-400 px-2 py-1 hover:bg-orange-600';
				a.textContent = 'See More';
				buttonContainer.append(a);

				const button = document.createElement('button');
				button.type = 'button';
				button.className =
					'text-sm rounded-md bg-green-400 px-2 py-1 hover:bg-green-600';
				button.textContent = 'Add to Cart';
				button.addEventListener('click', () => {
					console.log(item.id);
				});
				buttonContainer.append(button);
			});
		});

		main.append(container);
		const app = document.getElementById('app');
		app.prepend(main);
	}
}
