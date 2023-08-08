import Title from '../module/TitleModule';
import MetaTagsModule from '../module/MetatagsModule';

export default class Error {
	constructor(_data) {
		this._data = _data;
	}

	render() {
		const titleHead = new Title('Mex Santos - Error 404');
		titleHead.init();
		const meta = new MetaTagsModule(
			'A wide selection of food from Mexican cuisine',
			'./img/arrozcontortillas_tn.jpg',
			'Mex Santos -  Error 404',
			location.href
		);
		meta.init();
		const main = document.createElement('main');
		main.className = 'my-8 flex order-1';
		main.style.minHeight = 'calc(100vh - 180px)';
		main.innerHTML = `
    <div class="container flex items-center justify-center px-6 py-12 mx-auto">
        <div class='text-center'>
            <p class="text-xl font-medium text-red-500">404 error</p>
            <h1 class="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">We can’t find that page</h1>
            <p class="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn't exist or has been moved.</p>
            <div class="flex items-center justify-center mt-6 gap-x-3">
                <a href='/' class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                    Take me home
                </a>
            </div>
        </div>
    </div>
    `;
		const app = document.getElementById('app');
		app.prepend(main);
	}
}
