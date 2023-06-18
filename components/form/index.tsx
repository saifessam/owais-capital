import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import Button from '../button';
import './styles.css';

type Props = {
	title: string;
	subTitle?: string;
	children: ReactNode;
	onSubmit?: () => void;
};

export default function Form({ title, subTitle, children, onSubmit }: Props) {
	const router = useRouter();

	return (
		<form onSubmit={onSubmit}>
			<div className="header">
				<h4>{title}</h4>
				{subTitle && <span>{subTitle}</span>}
			</div>
			<div className="body">
				{children}
			</div>
			<div className="footer">
				<Button style='secondary' bordered content={"Cancel"} onClick={() => router.push("/")} />
				<Button style='primary' type='submit' content={"Save"} />
			</div>
		</form>
	);
}
