import Title from '../module/TitleModule';
import MetaTagsModule from '../module/MetatagsModule';
import CartItemModule from '../module/CartItemModule';

export default class Cart {
	constructor(data) {
		this.data = data;
	}

	render() {
		const titleHead = new Title('Mex Santos - Cart');
		titleHead.init();

		const meta = new MetaTagsModule(
			'A wide selection of food from Mexican cuisine',
			'./img/arrozcontortillas_tn.jpg',
			'Mex Santos -  Cart',
			location.href
		);
		meta.init();

		const main = document.createElement('main');
		main.innerHTML = `
		<section class="min-h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
  		<div class="mx-auto px-4 sm:px-6 lg:px-8">
   			<div class="flex items-center justify-center">
      		<h1 class="text-3xl lg:text-4xl text-gray-900">Your Cart</h1>
    		</div>
    		<div class="mx-auto mt-8 max-w-md md:mt-12">
      		<div class="rounded-3xl bg-white shadow-lg">
					${
						this.data
							? `<div class="px-4 py-6 sm:px-8 sm:py-10">
							<ul class="w-full">${this.data?.items
								?.map(
									(
										item
									) => `<li class="flex justify-between relative w-full flex-col pb-6 text-left sm:flex-row">
						<div className="flex">
								<div class="shrink-0 relative">
									<span class="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">${
										item.quantity
									}</span>
									<img class="h-24 w-24 max-w-full rounded-lg object-cover" src="${
										item.img
									}" alt="${item.title}" />
							</div>
							<div class="pr-8 sm:pr-5">
								<p class="text-base font-semibold text-gray-900">${item.title}</p>
								<p class="mx-0 mt-1 mb-0 text-sm text-gray-400">$${item.price.toFixed(2)}</p>
							</div>
						</div>
						<div class="flex flex-col justify-between pb-4 items-end">
							<div class="mt-4 flex flex-col items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
								<p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">$${item.total.toFixed(
									2
								)}</p>
							</div>
							<div class='flex justify-between border border-gray-600 dark:border-gray-200 h-[42px] w-[115px]'>
								<button
									class='bg-orange-400 hover:bg-orange-600 text-gray-900 text-2xl p-1 flex-1 text-center flex justify-center items-center'>
									<svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11 8H4V7H11V8Z" fill="currentColor"/> </svg>
								</button>
								<input
									type='text'
									name='quantity'
									value='${item.quantity}'
									class='bg-gray-100 text-gray-900 width w-[35px] text-center text-xl' />
								<button
									class='bg-orange-400 hover:bg-orange-600 text-gray-800 text-2xl p-1 flex-1 text-center flex justify-center items-center'>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>
								</button>
							</div>
							<div class="flex sm:bottom-0 sm:top-auto">
							<button type="button" class="flex rounded p-2 text-center bg-blue-400 hover:bg-blue-600 text-gray-100 hover:text-red-400">
								<svg class="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" class=""></path>
								</svg>
							</button>
						</div>
						</div>
					</li>`
								)
								.join('')}</ul>
			<div class="mt-6 space-y-3 border-t border-b py-8">
				<div class="flex items-center justify-between">
					<p class="text-gray-400">Subtotal</p>
					<p class="text-lg font-semibold text-gray-900">$${this.data.subtotal.toFixed(
						2
					)}</p>
				</div>
				<div class="flex items-center justify-between">
					<p class="text-gray-400">Shipping</p>
					<p class="text-lg font-semibold text-gray-900">$${this.data.shipping.toFixed(
						2
					)}</p>
				</div>
			</div>
			<div class="mt-6 flex items-center justify-between">
				<p class="text-sm font-medium text-gray-900">Total</p>
				<p class="text-2xl font-semibold text-gray-900"><span class="text-xs font-normal text-gray-400">USD </span>${this.data.total.toFixed(
					2
				)}</p>
			</div>
			<div class="mt-6 text-center">
				<button type="button" class="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
					Place Order
						<svg xmlns="http://www.w3.org/2000/svg" class="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
						</svg>
					</button>
				</div>
			</div>`
							: `
			<div class="px-4 py-6 sm:px-8 sm:py-10">
				<p class='text-2xl font-semibold text-red-600'>There are no items in the cart</p>
			</div>`
					}		
      	</div>
    	</div>
  	</div>
		</section>
		`;

		const app = document.getElementById('app');
		app.prepend(main);
	}
}
