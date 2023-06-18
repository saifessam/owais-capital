import { ReactNode } from 'react';
import './styles.css';

type Props = {
	children: ReactNode;
};

export default function SideMenu({ children }: Props) {
	return (
		<aside>{children}</aside>
	);
}
