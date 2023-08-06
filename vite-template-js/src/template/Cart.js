export default class Cart {
	constructor() {}

	render() {
		const container = document.createElement('div');
		container.className = 'container mx-auto';
		const title = document.createElement('h1');
		title.className = 'text-3xl';
		title.textContent = 'Cart';
		container.append(title);
		const app = document.getElementById('app');
		app.prepend(container);
	}
}
