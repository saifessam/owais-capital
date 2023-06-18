"use client";

import SquareCheckedIcon from '@/public/assets/svgs/square-checked.svg';
import SquareIcon from '@/public/assets/svgs/square.svg';
import { Dispatch, SetStateAction, useState } from 'react';
import './styles.css';

type Props = {
	label: string;
	name: string;
	isChecked: boolean;
	setData: Dispatch<SetStateAction<any>>;
};

export default function CheckboxInput({ label, name, isChecked, setData }: Props) {
	const [checked, setChecked] = useState(isChecked);

	function handleChange() {
		setChecked((prev) => prev = !prev);
		setData((prev: any) => ({ ...prev, [name]: checked }));
	}

	return (
		<div className='checkbox-input' onClick={handleChange}>
			{checked ? <SquareCheckedIcon /> : <SquareIcon />}
			{label}
		</div>
	);
}
