import Button from "@/components/button";
import Form from "@/components/form";
import CheckboxInput from '@/components/inputs/checkbox';
import TextsJSON from '@/public/data/texts.json';
import { FormEvent, useState } from 'react';

export default function CertificationForm() {
	const [data, setData] = useState({ certified: false });

	async function onSubmit(e: FormEvent<HTMLFormElement>): Promise<void> { }

	return (
		<Form title="Certification">
			<div className='paragraph'>{TextsJSON.certifications.map((certification) => <p>{certification}</p>)}</div>
			<CheckboxInput label='Please tick the box to certify.' name='certified' isChecked={data.certified} setData={setData} />
			<div className="digitally-certify">
				<h4>Digitally Certify Document</h4>
				<p>You can click on the below button it will redirect to a platform where you can E-Sign the document to certify the details and the contract with XYZ.Capital</p>
				<Button style="primary" content={"E-Sign Document"} />
			</div>
		</Form>
	);
}