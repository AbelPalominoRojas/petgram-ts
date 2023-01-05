import { FC } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { ListOfCategories } from './components/ListOfCategories';

const App: FC = () => {
	return (
		<>
			<GlobalStyle />
			<ListOfCategories />
		</>
	);
};

export default App;
