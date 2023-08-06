export default class Footer {
	constructor(year) {
		this.year = year;
	}

	render() {
		const footer = document.createElement('footer');
		footer.className = 'w-full bg-gray-900 text-white py-8';
		const p = document.createElement('p');
		p.className = 'text-center';
		p.innerHTML = `&copy;Copyright ${this.year} All rights reserved`;
		footer.append(p);
		const app = document.getElementById('app');
		app.append(footer);
	}
}
