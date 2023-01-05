import { css, FlattenSimpleInterpolation, keyframes } from 'styled-components';

interface Props {
	time?: string;
	type?: string;
}

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`;

export const fadeIn = ({ time = '1s', type = 'ease' }: Props = {}): FlattenSimpleInterpolation =>
	css`
		animation: ${time} ${fadeInKeyFrames} ${type};
	`;
