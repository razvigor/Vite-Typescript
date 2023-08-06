export default class MetaTagsModule {
	constructor(description, image, title, url) {
		this.description = description;
		this.image = image;
		this.title = title;
		this.url = url;
	}
	init() {
		const metaDesc = document.createElement('meta');
		metaDesc.name = 'desription';
		metaDesc.content = this.description;

		const metaUrl = document.createElement('meta');
		metaUrl.setAttribute('property', 'og:url');
		metaUrl.content = this.url;

		const metaTitle = document.createElement('meta');
		metaTitle.setAttribute('property', 'og:title');
		metaTitle.content = this.title;

		const metaDescFb = document.createElement('meta');
		metaDescFb.setAttribute('property', 'og:description');
		metaDescFb.content = this.description;

		const metaImg = document.createElement('meta');
		metaImg.setAttribute('property', 'og:image');
		metaImg.content = this.image;

		const metaType = document.createElement('meta');
		metaType.setAttribute('property', 'og:type');
		metaType.content = 'website';

		const head = document.querySelector('head');
		head.append(metaDesc, metaUrl, metaTitle, metaDescFb, metaImg, metaType);
	}
}
