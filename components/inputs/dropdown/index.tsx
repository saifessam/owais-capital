"use client";

import Button from '@/components/button';
import CaretDownIcon from '@/public/assets/svgs/caret-down.svg';
import { useState } from 'react';
import './styles.css';

type Props = {
	name: string;
	placeholder: string;
	options: string[];
};

export default function DropdownInput({ name, placeholder, options }: Props) {
	const [opened, setOpened] = useState(false);
	const [selected, setSelected] = useState("");

	function handleChange(value: string): void {
		setSelected(value);
		setOpened(false);
	}

	return (
		<div className="dropdown-input">
			<div className="value" onClick={() => setOpened((prev) => !prev)}>
				<span>{selected === "" ? placeholder : selected}</span>
				<Button className={opened ? "rotate" : undefined} content={<CaretDownIcon />} />
			</div>
			<ul className={opened ? "options open" : "options"}>
				<li onClick={() => handleChange("")} className={selected === "" ? "selected" : undefined}>{placeholder}</li>
				{options.map((option, index) => <li key={index} onClick={() => handleChange(option)} className={selected === option ? "selected" : undefined}>{option}</li>)}
			</ul>
		</div>
	);
}
