import Form from "@/components/form";
import TextInput from '@/components/inputs/text';
import { FormEvent, useState } from "react";

export default function CustodianForm() {
	const [data, setData] = useState({ name: "", address: "", accountName: "", accountNumber: "" });

	async function onSubmit(e: FormEvent<HTMLFormElement>): Promise<void> { }

	return (
		<Form title="Custodian Details">
			<div className="row">
				<TextInput name='name' placeholder='Name *' setData={setData} />
				<TextInput name='address' placeholder='Address of Correspondence *' setData={setData} />
			</div>
			<div className="row">
				<TextInput name='accountName' placeholder='Account Name *' setData={setData} />
				<TextInput name='accountNumber' placeholder='Account Number *' setData={setData} />
			</div>
		</Form>
	);
}