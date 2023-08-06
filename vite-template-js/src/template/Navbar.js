import Logo from '../img/logo.png';

export default class Navbar {
	constructor(navLinksObj) {
		this.navLinksObj = navLinksObj;
	}

	render() {
		const nav = document.createElement('nav');
		nav.className = 'w-full fixed top-0 left-0 py-8 bg-gray-900 flex';
		const container = document.createElement('div');
		container.className = 'container mx-auto flex justify-between items-center';
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
		const ul = document.createElement('ul');
		ul.className = 'flex justify-between items-center gap-x-2';
		container.append(ul);
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
