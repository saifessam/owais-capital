import CircleCheckedIcon from '@/public/assets/svgs/circle-checked.svg';
import CircleIcon from '@/public/assets/svgs/circle.svg';
import { Dispatch, SetStateAction } from 'react';
import './styles.css';

type Props = {
	label: string;
	name: string;
	options: string[];
	selected: string;
	setData: Dispatch<SetStateAction<any>>;
};

export default function RadioInput({ label, name, options, selected, setData }: Props) {
	function handleChange(value: string): void {
		setData((prev: any) => ({ ...prev, [name]: value }));
	}

	return (
		<div className='radio-input'>
			<span>{label}</span>
			<ul>
				{options.map((option, index) => {
					return (
						<li key={index} onClick={() => handleChange(option)}>
							{option === selected ? <CircleCheckedIcon /> : <CircleIcon />} {option}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
