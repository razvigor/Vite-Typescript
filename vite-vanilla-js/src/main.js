import './css/style.css';
import FullList from './model/FullList';
import Listitem from './model/ListItem';
import ListTemplate from './template/ListTemplate';

const initApp = () => {
	const fullList = new FullList();
	const template = new ListTemplate();

	console.log(fullList, template);

	const itemEntryForm = document.getElementById('itemEntryForm');

	itemEntryForm.addEventListener('submit', (event) => {
		event.preventDefault();

		const input = document.getElementById('newItem');

		const newEntryText = input.value.trim();
		console.log(newEntryText);
		if (!newEntryText.length) return;

		const itemId = fullList.list.length
			? parseInt(fullList.list[fullList.list.length - 1].id) + 1
			: 1;

		console.log(itemId);

		const newItem = new Listitem(itemId.toString(), newEntryText);

		fullList.addItem(newItem);

		template.render(fullList);
		input.value = '';
	});

	const clearItems = document.getElementById('clearItemsButton');

	clearItems.addEventListener('click', () => {
		fullList.clearList();
		template.clear();
	});
	fullList.load();
	template.render(fullList);
};

document.addEventListener('DOMContentLoaded', initApp);
