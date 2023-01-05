import { FC } from 'react';
import { CategoryModel } from '../../types';
import { Anchor, Image } from './styles';

const DEFAULT_IMAGE =
	'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg';

export const Category: FC<CategoryModel> = ({ cover = DEFAULT_IMAGE, path = '', emoji = '?' }) => {
	return (
		<Anchor href={path}>
			<Image src={cover} />
			{emoji}
		</Anchor>
	);
};
