"use client";

import useWindowSize from '@/hooks/window-size';
import BellIcon from '@/public/assets/svgs/bell.svg';
import CaretDownIcon from '@/public/assets/svgs/caret-down.svg';
import CloseIcon from '@/public/assets/svgs/close.svg';
import MenuIcon from '@/public/assets/svgs/menu.svg';
import MoonIcon from '@/public/assets/svgs/moon.svg';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from '../button';
import SwitchInput from '../inputs/switch';
import './styles.css';

export default function Header() {
	const [showMenu, setShowMenu] = useState(false);
	const [data, setData] = useState({ locale: "EN" });
	const router = useRouter();
	const windowSize = useWindowSize();

	useEffect(() => {
		showMenu ? document.body.style.overflow = "hidden" : document.body.removeAttribute("style");
	}, [showMenu]);

	return (
		<header className={showMenu ? "active" : undefined}>
			<Button style='primary' content={"Individual Investor"} onClick={() => router.push('/custodian')} />
			{windowSize.width! < 767 && <Button style='primary' className='menu-button' content={showMenu ? <CloseIcon /> : <MenuIcon />} onClick={() => setShowMenu((prev) => prev = !prev)} />}
			<nav>
				<div className="actions">
					<Button content={<MoonIcon />} />
					<Button content={<BellIcon />} />
					<SwitchInput name='locale' options={[{ title: "EN", selected: data.locale === "EN" }, { title: "AR", selected: data.locale === "AR" }]} setData={setData} />
				</div>
				<div className="dropdown">
					<div className="image">BA</div>
					<div className="greetings">
						<small>Welcome!</small>
						<span>Bader Alobaidi</span>
					</div>
					<Button style='secondary' content={<CaretDownIcon />} />
				</div>
			</nav>
		</header>
	);
}
