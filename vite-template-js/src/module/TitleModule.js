export default class Title {
	constructor(title) {
		this.title = title;
	}
	init() {
		document.title = this.title;
	}
}
