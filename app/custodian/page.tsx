"use client";

import Button from '@/components/button';
import CertificationForm from '@/components/form/variations/certification';
import CustodianForm from '@/components/form/variations/custodian-details';
import InformationForm from '@/components/form/variations/information';
import SideMenu from "@/components/side-menu";
import Forms from '@/public/assets/svgs/forms.svg';
import InfoIcon from '@/public/assets/svgs/info.svg';
import VerifiedIcon from '@/public/assets/svgs/seal-check.svg';
import UserIcon from '@/public/assets/svgs/user.svg';
import { useState } from 'react';
import styles from './page.module.css';

export default function Custodian() {
	const [active, setActive] = useState(0);

	const buttons = [
		{ icon: <UserIcon />, label: "Custodian Details" },
		{ icon: <InfoIcon />, label: "Other Information" },
		{ icon: <VerifiedIcon />, label: "Certification" },
	];

	const forms = [<CustodianForm />, <InformationForm />, <CertificationForm />];

	return (
		<section className={styles["wrapper"]}>
			<div className={styles["title"]}>
				<div className={styles["icon"]}><Forms /></div>
				<div className={styles["labels"]}>
					<span>Custodian Form</span>
					<small>Let’s make managing</small>
				</div>
			</div>
			<div className={styles["wrapper-row"]}>
				<SideMenu>
					{buttons.map((button, index) => {
						return <Button style={index === active ? "primary" : "secondary"} content={<>{button.icon} {button.label}</>} key={index} onClick={() => setActive(index)} />;
					})}
				</SideMenu>
				{forms[active]}
			</div>
		</section>
	);
}