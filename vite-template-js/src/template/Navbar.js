import Logo from '../img/logo.png';

export default class Navbar {
	constructor(navLinksObj) {
		this.navLinksObj = navLinksObj;
	}

	render() {
		const nav = document.createElement('nav');
		nav.className = 'w-full fixed top-0 left-0 py-8 bg-gray-900 flex order-0';
		const container = document.createElement('div');
		container.className = `container mx-auto flex justify-between items-center px-3 md:px-0`;
		nav.append(container);
		const logoContainer = document.createElement('div');
		logoContainer.className = 'max-w-[150px]';
		const logoAnchor = document.createElement('a');
		logoAnchor.href = '/';
		logoContainer.append(logoAnchor);
		const image = document.createElement('img');
		image.src = Logo;
		image.alt = 'Logo';
		image.className = 'w-full';
		logoAnchor.append(image);
		container.append(logoContainer);

		const mobButton = document.createElement('button');
		mobButton.className =
			'-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200 flex md:hidden w-[48px] h-[49px]';
		mobButton.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" stroke="currentColor" fill="currentColor">
		<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
		`;
		mobButton.addEventListener('click', () => {
			ul.classList.remove('right-[-100%]');
			ul.classList.add('right-0');
			close.classList.remove('hidden');
			close.classList.add('flex');
		});
		container.append(mobButton);

		const ul = document.createElement('ul');
		ul.className = `flex flex-col md:flex-row fixed top-0 md:relative md:right-0 h-screen w-screen right-[-100%] justify-start md:h-auto md:w-auto md:justify-between md:items-center gap-y-4 md:gap-x-2 z-40 bg-gray-900 p-4 pt-24 md:pt-0 md:p-0`;
		container.append(ul);

		const close = document.createElement('button');
		close.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512" stroke="currentColor" fill="currentColor">><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
		`;
		close.className =
			'absolute md:hidden right-3 hidden top-3 z-50 text-gray-200 hover:text-red-500 justify-center items-center w-[48px] h-[49px]';
		close.addEventListener('click', () => {
			ul.classList.remove('right-0');
			ul.classList.add('right-[-100%]');
			close.classList.remove('flex');
			close.classList.add('hidden');
		});
		container.append(close);

		const objKeys = Object.keys(this.navLinksObj);
		const listitems = objKeys
			.map(
				(item) => `
          <li><a href='${this.navLinksObj[item]}' class='uppercase px-2 py-1 ${
					this.navLinksObj[item] === window.location.pathname
						? 'text-orange-500'
						: 'text-white'
				} hover:text-orange-500 '>${item}</a></li>
    `
			)
			.join('');

		ul.innerHTML = listitems;
		const app = document.getElementById('app');
		app.prepend(nav);
	}
}
