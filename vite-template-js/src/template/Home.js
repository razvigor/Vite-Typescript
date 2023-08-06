export default class Home {
	constructor(_data) {
		this._data = _data;
	}

	render() {
		const main = document.createElement('main');
		main.className = 'my-8';
		main.innerHTML = `<div class="container mx-auto px-6">
				<div class="h-96 rounded-md overflow-hidden bg-cover bg-center" style="background-image: url('${
					this._data[0].items[1].img
				}.jpg')">
						<div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
								<div class="px-10 max-w-xl">
										<h2 class="text-2xl text-white font-semibold">${this._data[0].name}</h2>
										<p class="mt-2 text-gray-200">${this._data[0].description}</p>
										<a href='/shop' class="inline-flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
												<span>Shop Now</span>
												<svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
										</a>
								</div>
						</div>
				</div>
				<div class="md:flex mt-8 md:-mx-4">
						<div class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" style="background-image: url('${
							this._data[1].items[1].img
						}.jpg')">
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
						<div class="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" style="background-image: url('${
							this._data[2].items[1].img
						}.jpg')">
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
				</div>
				<div class="mt-16">
						<h3 class="text-gray-600 text-2xl font-medium">${this._data[0].name}</h3>
						<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
						${this._data[0].items
							.map(
								(item) =>
									`<div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
										<div class="flex items-end justify-end h-56 w-full bg-cover" style="background-image: url('${item.img}_tn.jpg')">
												<button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
														<svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
												</button>
										</div>
										<div class="px-5 py-3">
										<h3 class="text-gray-700 uppercase">${item.title}</h3>
										<span class="text-gray-500 mt-2">$${item.price}</span>
										</div>
								</div>`
							)
							.join('')}	
				</div>
				<div class="mt-16">
						<h3 class="text-gray-600 text-2xl font-medium">${this._data[1].name}</h3>
						<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
						${this._data[1].items
							.map(
								(item) =>
									`<div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
										<div class="flex items-end justify-end h-56 w-full bg-cover" style="background-image: url('${item.img}_tn.jpg')">
												<button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
														<svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
												</button>
										</div>
										<div class="px-5 py-3">
												<h3 class="text-gray-700 uppercase">${item.title}</h3>
												<span class="text-gray-500 mt-2">$${item.price}</span>
										</div>
								</div>`
							)
							.join('')}
						</div>
				</div>
				<div class="mt-16">
						<h3 class="text-gray-600 text-2xl font-medium">${this._data[2].name}</h3>
						<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
						${this._data[2].items
							.map(
								(item) =>
									`<div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
										<div class="flex items-end justify-end h-56 w-full bg-cover" style="background-image: url('${item.img}_tn.jpg')">
												<button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
														<svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
												</button>
										</div>
										<div class="px-5 py-3">
												<h3 class="text-gray-700 uppercase">${item.title}</h3>
												<span class="text-gray-500 mt-2">$${item.price}</span>
										</div>
								</div>`
							)
							.join('')}
						</div>
				</div>
		</div>`;
		const app = document.getElementById('app');
		app.prepend(main);
	}
}
