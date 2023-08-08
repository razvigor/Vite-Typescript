import Title from '../module/TitleModule';
import MetaTagsModule from '../module/MetatagsModule';
import CartItemsModule from '../module/cartItemsModule';

export default class Cart extends CartItemsModule {
	constructor(data, subtotal, shipping, total) {
		super(data, subtotal, shipping, total);
		this.data = data;
		this.subtotal = subtotal;
		this.sipping = shipping;
		this.total = total;
	}

	render() {
		const titleHead = new Title('Mex Santos - Cart');
		titleHead.init();
		this.initData();

		const meta = new MetaTagsModule(
			'A wide selection of food from Mexican cuisine',
			'./img/arrozcontortillas_tn.jpg',
			'Mex Santos -  Cart',
			location.href
		);
		meta.init();

		const main = document.createElement('main');
		main.className = 'order-1';

		const section = document.createElement('section');
		section.className = 'min-h-screen bg-gray-100 py-12 sm:py-16 lg:py-20';
		main.append(section);

		const container = document.createElement('div');
		container.className = 'container mx-auto px-4 sm:px-6 lg:px-8';
		section.append(container);

		const flex = document.createElement('div');
		flex.className = 'flex items-center justify-center';
		container.append(flex);

		const h1 = document.createElement('h1');
		h1.className = 'text-3xl lg:text-4xl text-gray-900';
		h1.textContent = 'Your Cart';
		flex.append(h1);

		const cartContainer = document.createElement('div');
		cartContainer.className = 'mx-auto mt-8 max-w-lg md:mt-12';
		container.append(cartContainer);

		const cart = document.createElement('div');
		cart.className = 'rounded-3xl bg-white shadow-lg';
		cartContainer.append(cart);

		if (this.data.length) {
			const cartItemContainer = document.createElement('div');
			cartItemContainer.className = 'px-4 py-6 sm:px-8 sm:py-10';
			const cartList = document.createElement('ul');
			cartList.className = 'w-full';
			cart.append(cartItemContainer);
			cartItemContainer.append(cartList);
			this.data.forEach((item) => {
				console.log(item);
				const listItem = document.createElement('li');
				listItem.className =
					'flex justify-between relative w-full flex-col pb-6 text-left sm:flex-row';
				cartList.append(listItem);

				const listFlex = document.createElement('div');
				listFlex.className = 'flex gap-x-2';
				listItem.append(listFlex);

				const imageContainer = document.createElement('div');
				imageContainer.className = 'shrink-0 relative';
				imageContainer.innerHTML = `
				<span class="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">${item.quantity}</span>
				<img class="h-24 w-24 max-w-full rounded-lg object-cover" src="${item.img}_tn.jpg" alt="${item.title}" />
				`;
				listFlex.append(imageContainer);

				const contentContainer = document.createElement('div');
				contentContainer.className = 'pr-8 sm:pr-5';
				contentContainer.innerHTML = `
				<p class="text-base font-semibold text-gray-900">${item.title}</p>
				<p class="mx-0 mt-1 mb-0 text-sm text-gray-400">$${item.price.toFixed(2)}</p>
				`;
				listFlex.append(contentContainer);

				const rightSide = document.createElement('div');
				rightSide.className =
					'flex flex-col justify-between pb-4 items-end gap-y-1';
				listItem.append(rightSide);
				const totalContainer = document.createElement('div');
				totalContainer.className =
					'mt-4 flex flex-col items-end justify-between sm:mt-0 sm:items-start sm:justify-end';
				totalContainer.innerHTML = `
				<p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">$${item.total.toFixed(
					2
				)}
				</p>
				`;
				rightSide.append(totalContainer);

				const quantityContainer = document.createElement('div');
				quantityContainer.className =
					'flex justify-between border border-gray-600 dark:border-gray-200 h-[42px] w-[115px]';
				rightSide.append(quantityContainer);

				const btnDecrise = document.createElement('button');
				btnDecrise.type = 'button';
				btnDecrise.className =
					'bg-orange-400 hover:bg-orange-600 text-gray-900 text-2xl p-1 flex-1 text-center flex justify-center items-center';
				btnDecrise.innerHTML = `
				<svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11 8H4V7H11V8Z" fill="currentColor"/> </svg>
				`;
				btnDecrise.addEventListener('click', () => {
					console.log('decrise');
				});
				quantityContainer.append(btnDecrise);

				const input = document.createElement('input');
				input.type = 'text';
				input.name = 'quantity';
				input.value = item.quantity;
				input.className =
					'bg-gray-100 text-gray-900 width w-[35px] text-center text-xl';
				input.addEventListener('change', () => {
					console.log(input.value);
				});
				quantityContainer.append(input);

				const btnIncrese = document.createElement('button');
				btnIncrese.type = 'button';
				btnIncrese.className =
					'bg-orange-400 hover:bg-orange-600 text-gray-900 text-2xl p-1 flex-1 text-center flex justify-center items-center';
				btnIncrese.innerHTML = `
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>
				`;
				btnIncrese.addEventListener('click', () => {
					console.log('increse');
				});
				quantityContainer.append(btnIncrese);

				const removeContainer = document.createElement('div');
				removeContainer.className = 'flex';
				rightSide.append(removeContainer);

				const removeButton = document.createElement('button');
				removeButton.type = 'button';
				removeButton.className =
					'flex rounded p-2 text-center bg-blue-400 hover:bg-blue-600 text-gray-100 hover:text-red-400';
				removeButton.innerHTML = `<svg class="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" class=""></path>
				</svg>`;
				removeButton.addEventListener('click', () => {
					console.log('remove item');
				});
				removeContainer.append(removeButton);
			});

			const infoContainer = document.createElement('div');
			infoContainer.className = 'space-y-3 border-t border-b py-8 px-4';
			infoContainer.innerHTML = `
			<div class="flex items-center justify-between">
					<p class="text-gray-400">Subtotal</p>
					<p class="text-lg font-semibold text-gray-900">$${this.subtotal?.toFixed(2)}</p>
				</div>
				<div class="flex items-center justify-between">
					<p class="text-gray-400">Shipping</p>
					<p class="text-lg font-semibold text-gray-900">$${this.shipping?.toFixed(2)}</p>
				</div>
			`;
			cart.append(infoContainer);

			const infoTotalContainer = document.createElement('div');
			infoTotalContainer.className =
				'mt-6 flex items-center justify-between px-4';
			infoTotalContainer.innerHTML = `
			<p class="text-sm font-medium text-gray-900">Total</p>
				<p class="text-2xl font-semibold text-gray-900"><span class="text-xs font-normal text-gray-400">USD </span>${this.total?.toFixed(
					2
				)}</p>
			`;
			cart.append(infoTotalContainer);

			const btnBuyContainer = document.createElement('div');
			btnBuyContainer.className = 'mt-6 text-center';
			cart.append(btnBuyContainer);

			const btnBuy = document.createElement('button');
			btnBuy.type = 'button';
			btnBuy.className =
				'group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800';
			btnBuy.innerHTML = `
			Place Order <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
			</svg>
			`;
			btnBuy.addEventListener('click', () => {
				console.log('Food is ordered');
			});
			btnBuyContainer.append(btnBuy);
		} else {
			const nothingToShow = document.createElement('div');
			nothingToShow.className = 'px-4 py-6 sm:px-8 sm:py-10';
			nothingToShow.innerHTML = `
			<p class='text-2xl font-semibold text-red-600'>There are no items in the cart</p>
			`;
			cart.append(nothingToShow);
		}

		const app = document.getElementById('app');
		app.prepend(main);
	}
}
