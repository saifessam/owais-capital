import Button from '@/components/button';
import { Dispatch, SetStateAction } from 'react';
import './styles.css';

type Props = {
	name: string;
	options: { title: string, selected: boolean; }[];
	setData: Dispatch<SetStateAction<any>>;
};

export default function SwitchInput({ name, options, setData }: Props) {
	function handleChange(value: string): void {
		setData((prev: any) => ({ ...prev, [name]: value }));
	}

	return (
		<div className="switch-input">
			{options.map((option, index) => <Button style={option.selected ? "primary" : "secondary"} content={option.title} key={index} onClick={() => handleChange(option.title)} />)}
		</div>
	);
}
