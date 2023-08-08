import Title from '../module/TitleModule';
import MetaTagsModule from '../module/MetatagsModule';

export default class About {
	constructor(_data) {
		this._data = _data;
	}

	render() {
		const title = new Title('Mex Santos -  About Us');
		title.init();
		const meta = new MetaTagsModule(
			'A wide selection of food from Mexican cuisine',
			'./img/arrozcontortillas_tn.jpg',
			'Mex Santos -  About Us',
			location.href
		);
		meta.init();
		const main = document.createElement('main');
		main.className = 'my-8 flex order-1';
		main.style.minHeight = 'calc(100vh - 180px)';
		main.innerHTML = `
    <div class="flex items-center w-full">  
      <div class="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <h1 class='text-center text-3xl lg:text-4xl mb-12'>About Us</h1>
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div class="md:5/12 lg:w-5/12">
          <img src='./img/taquitos.jpg' alt="image" loading="lazy">
          </div>
          <div class="md:7/12 lg:w-6/12">
            <h2 class="text-2xl text-gray-900 lg:text-3xl">Mex Santos is taking care of you</h2>
            <p class="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
            <p class="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
          </div>
        </div>
      </div>
    </div>
    `;
		const app = document.getElementById('app');
		app.prepend(main);
	}
}
