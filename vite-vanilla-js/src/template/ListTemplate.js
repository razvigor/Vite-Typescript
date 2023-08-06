import FullList from '../model/FullList';

export default class ListTemplate {
	constructor() {
		this.ul = document.getElementById('listItems');
	}
	clear() {
		this.ul.innerHTML = '';
	}
	render(fullList) {
		this.clear();

		fullList.list?.forEach((item) => {
			const li = document.createElement('li');
			li.className = 'item';

			const check = document.createElement('input');
			check.type = 'checkbox';
			check.id = item.id;
			check.tabIndex = 0;
			check.checked = item.checked;
			check.addEventListener('change', () => {
				item.checked = !item.checked;
				fullList.save();
			});
			li.append(check);

			const label = document.createElement('label');
			label.htmlFor = item.id;
			label.textContent = item.item;
			li.append(label);

			const button = document.createElement('button');
			button.className = 'button';
			button.textContent = 'X';
			button.addEventListener('click', () => {
				fullList.removeItem(item.id);
				this.render(fullList);
			});
			li.append(button);

			this.ul.append(li);
		});
	}
}
