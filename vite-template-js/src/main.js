import './css/style.css';
import Footer from './template/Footer';
import Navbar from './template/Navbar';
import data from './data/data.json';

const navbar = new Navbar({
	home: '/',
	about: '/about',
	shop: '/shop',
	cart: '/cart',
});
navbar.render();

const path = window.location.pathname;
const id = path.split('/').slice(-1)[0];
switch (path) {
	case '/':
		import('./template/Home')
			.then((HomeModule) => {
				const HomePage = HomeModule.default;
				const home = new HomePage(data);
				home.render();
			})
			.catch((err) => console.log(err));
		break;

	case '/about':
		import('./template/About')
			.then((AboutModule) => {
				const AboutPage = AboutModule.default;
				const about = new AboutPage();
				about.render();
			})
			.catch((err) => console.log(err));
		break;

	case '/shop':
		import('./template/Shop')
			.then((ShopModule) => {
				const ShopPage = ShopModule.default;
				const shop = new ShopPage();
				shop.render();
			})
			.catch((err) => console.log(err));
		break;
	case `/shop/${id}`:
		import('./template/ShopItem')
			.then((ShopItemModule) => {
				const ShopItemPage = ShopItemModule.default;
				const shopItem = new ShopItemPage();
				shopItem.render();
			})
			.catch((err) => console.log(err));
		break;
	case '/cart':
		import('./template/Cart')
			.then((CartModule) => {
				const CartPage = CartModule.default;
				const cart = new CartPage();
				cart.render();
			})
			.catch((err) => console.log(err));
		break;

	default: {
		import('./template/Error')
			.then((ErrorModule) => {
				const ErrorPage = ErrorModule.default;
				const error = new ErrorPage();
				error.render();
			})
			.catch((err) => console.log(err));
		break;
	}
}

const footer = new Footer(new Date().getFullYear());
footer.render();
