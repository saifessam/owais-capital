import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import './styles.css';

type Props = {
	name: string;
	placeholder: string;
	setData: Dispatch<SetStateAction<any>>;
};

export default function TextInput({ name, placeholder, setData }: Props) {
	function handleChange(e: ChangeEvent<HTMLInputElement>): void {
		setData((prev: any) => ({ ...prev, [name]: e.target.value }));
	}

	return (
		<input type='text' className='text-input' name={name} placeholder={placeholder} onChange={handleChange} />
	);
}
