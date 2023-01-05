import { FC } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';

const App: FC = () => {
	return (
		<>
			<GlobalStyle />
			<Logo />
			<ListOfCategories />
			<ListOfPhotoCards />
		</>
	);
};

export default App;
