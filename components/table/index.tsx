"use client";

import DownloadIcon from '@/public/assets/svgs/download.svg';
import EyeIcon from '@/public/assets/svgs/eye.svg';
import PenIcon from '@/public/assets/svgs/pen.svg';
import Form from '@/types/form';
import capitalizeText from '@/utilities/capitalize-text';
import { useEffect, useState } from 'react';
import Button from '../button';
import SwitchInput from '../inputs/switch';
import './styles.css';

type Props = {
	formsData: Form[];
};

export default function Table({ formsData }: Props) {
	const [data, setData] = useState({ get: "approved" });
	const [forms, setForms] = useState<Form[]>([]);

	useEffect(() => {
		const allForms = formsData.filter((form) => data.get === "approved" ? form.status === "approved" : form.status !== "approved");
		setForms(allForms.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()));
	}, [formsData]);

	if (forms.length === 0) return <span>Loading forms...</span>;

	return (
		<table>
			<thead>
				<SwitchInput name='get' options={[{ title: "approved", selected: data.get === "approved" }, { title: "pending", selected: data.get === "pending" }]} setData={setData} />
				<tr>
					<th>ID</th>
					<th>Form Title</th>
					{data.get === "approved" ? <th>Date</th> : <th>Generated on</th>}
					{data.get === "pending" && <th>Status</th>}
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{forms.map((form, index) => <TableRow key={index} form={form} downloadable={data.get === "pending"} />)}
			</tbody>
		</table>
	);
}

function TableRow({ form, downloadable }: { form: Form; downloadable: boolean; }) {
	return (
		<tr>
			<td>{form.id < 10 ? `0${form.id}` : form.id}</td>
			<td>{capitalizeText(form.title).toTitleCase()}</td>
			<td>{form.date.toString()}</td>
			{downloadable && <td id='status' data-color={form.status === "pending" ? "green" : "yellow"}><span>{capitalizeText(form.status).toTitleCase()}</span></td>}
			<td id='actions'>
				<Button style='primary' content={<PenIcon />} />
				<Button style='secondary' content={<EyeIcon />} />
				{downloadable && <Button style='tertiary' content={<DownloadIcon />} />}
			</td>
		</tr>
	);
}