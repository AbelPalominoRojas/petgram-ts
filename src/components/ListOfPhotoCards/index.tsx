import { FC } from 'react';
import { PhotoCard } from '../PhotoCard';

export const ListOfPhotoCards: FC = () => {
	return (
		<ul>
			{[1, 2, 3].map(photo => (
				<li key={photo}>
					<PhotoCard id={0} userId={0} likes={0} />
				</li>
			))}
		</ul>
	);
};
