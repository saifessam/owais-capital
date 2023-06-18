import { ReactNode } from 'react';
import './styles.css';

type Props = {
	type?: "button" | "submit";
	className?: string;
	style?: "primary" | "secondary" | "tertiary";
	bordered?: boolean;
	content: ReactNode;
	onClick?: () => void;
};

export default function Button({ type = "button", className, style, bordered, content, onClick }: Props) {
	function getClassNames(): string[] {
		const classNames: string[] = [style!];
		if (className) classNames.push(className);
		if (bordered) classNames.push("bordered");
		return classNames;
	}

	return (
		<button type={type} className={getClassNames().join(" ")} onClick={onClick}>{content}</button>
	);
}
