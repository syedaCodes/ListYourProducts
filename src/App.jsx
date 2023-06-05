import Categories from "./components/categories";

const App = () => {

	const categories = [
		{
			id: '1',
			title: 'Hats'
		},
		{
			id: '2',
			title: 'Jackets'
		},
		{
			id: '3',
			title: 'Sneakers'
		},
		{
			id: '4',
			title: 'Womens'
		},
		{
			id: '5',
			title: 'Mens'
		}
	];
	
	return <Categories categories={categories}/>
}

export default App;
