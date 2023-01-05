import { FC } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';

const App: FC = () => {
	return (
		<>
			<GlobalStyle />
			<ListOfCategories />
			<ListOfPhotoCards />
		</>
	);
};

export default App;
