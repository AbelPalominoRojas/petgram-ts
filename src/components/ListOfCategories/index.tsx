import { FC, useEffect, useState } from 'react';
import { CategoryModel } from '../../types';
import { Category } from '../Category';
import { List, Item } from './styles';

export const ListOfCategories: FC = () => {
	// Attibutes
	const [categories, setCategories] = useState<CategoryModel[]>([]);

	// Effect
	useEffect(() => {
		void fetchCategories();
	}, []);

	// Methods
	const fetchCategories = async (): Promise<void> => {
		const response = await fetch('http://localhost:3004/categories');
		const data: CategoryModel[] = await response.json();

		console.log('data', data);
		setCategories(data);
	};

	return (
		<List>
			{categories.map(category => (
				<Item key={category.id}>
					<Category cover={category.cover} path={category.path} emoji={category.emoji} />
				</Item>
			))}
		</List>
	);
};
