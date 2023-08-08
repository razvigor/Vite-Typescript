import Title from '../module/TitleModule';
import MetaTagsModule from '../module/MetatagsModule';

export default class Home {
	constructor(_data) {
		this._data = _data;
	}

	render() {
		const title = new Title('Mex Santos');
		title.init();
		const meta = new MetaTagsModule(
			'A wide selection of food from Mexican cuisine',
			'./img/arrozcontortillas_tn.jpg',
			'Mex Santos',
			location.href
		);
		meta.init();
		const main = document.createElement('main');
		main.className = 'my-8 order-1';

		const container = document.createElement('div');
		container.className = 'container mx-auto px-6';

		const h1 = document.createElement('h1');
		h1.className = 'text-3xl lg:text-4xl mt-8 mb-12';
		h1.textContent = 'Mex Santos';
		container.append(h1);

		const divBg = document.createElement('div');
		divBg.className = 'h-96 rounded-md overflow-hidden bg-cover bg-center';
		divBg.style.backgroundImage = `url('${this._data[0].items[1].img}.jpg')`;
		container.append(divBg);

		const bgDivInner = document.createElement('div');
		bgDivInner.className = 'bg-gray-900 bg-opacity-50 flex items-center h-full';
		divBg.append(bgDivInner);

		bgDivInner.innerHTML = `<div class="px-10 max-w-xl">
			<h2 class="text-2xl text-white font-semibold">${this._data[0].name}</h2>
			<p class="mt-2 text-gray-200">${this._data[0].description}</p>
			<a href='/shop' class="inline-flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
					<span>Shop Now</span>
					<svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
			</a>
		</div>`;

		const twoSection = document.createElement('div');
		twoSection.className = 'md:flex mt-8 md:-mx-4';
		container.append(twoSection);
		twoSection.innerHTML = `
		<div class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" style="background-image: url('${this._data[1].items[1].img}.jpg')">
				<div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
						<div class="px-10 max-w-xl">
								<h2 class="text-2xl text-white font-semibold">${this._data[1].name}</h2>
								<p class="mt-2 text-gray-200">${this._data[1].description}</p>
								<a href='/shop' class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
										<span>Shop Now</span>
										<svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
								</a>
						</div>
				</div>
		</div>
		<div class="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" style="background-image: url('${this._data[2].items[1].img}.jpg')">
				<div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
						<div class="px-10 max-w-xl">
								<h2 class="text-2xl text-white font-semibold">${this._data[2].name}</h2>
								<p class="mt-2 text-gray-200">${this._data[2].description}</p>
								<a href='/shop' class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
										<span>Shop Now</span>
										<svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
								</a>
						</div>
				</div>
		</div>
		`;
		this._data.forEach((item) => {
			const shopItems = document.createElement('div');
			shopItems.className = 'mt-16';
			container.append(shopItems);

			const h3 = document.createElement('h3');
			h3.className = 'text-gray-600 text-2xl font-medium';
			h3.textContent = item.name;
			shopItems.append(h3);

			const grid = document.createElement('div');
			grid.className =
				'grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6';
			shopItems.append(grid);

			item.items.forEach((item) => {
				const shopItem = document.createElement('div');
				shopItem.className =
					'w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden';
				grid.append(shopItem);
				const bgContainer = document.createElement('div');
				bgContainer.className =
					'flex items-end justify-end h-56 w-full bg-cover';
				bgContainer.style.backgroundImage = `url('${item.img}_tn.jpg')`;
				shopItem.append(bgContainer);

				const button = document.createElement('button');
				button.type = 'button';
				button.className =
					'p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500';
				button.addEventListener('click', () => {
					console.log(item.id);
				});
				button.innerHTML = `
				<svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
				`;
				bgContainer.append(button);
				const content = document.createElement('div');
				content.className = 'px-5 py-3';
				content.innerHTML = `
			<h3 class="text-gray-700 uppercase">${item.title}</h3>
			<span class="text-gray-500 mt-2">$${item.price}</span>
			`;
				shopItem.append(content);
			});
		});

		main.append(container);
		const app = document.getElementById('app');
		app.prepend(main);
	}
}
