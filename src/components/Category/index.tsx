import { FC } from 'react';
import { Anchor, Image } from './styles';

const DEFAULT_IMAGE =
	'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg';

interface Props {
	cover?: string;
	path?: string;
	emoji?: string;
}

export const Category: FC<Props> = ({ cover = DEFAULT_IMAGE, path = '', emoji = '?' }) => {
	return (
		<Anchor href={path}>
			<Image src={cover} />
			{emoji}
		</Anchor>
	);
};
