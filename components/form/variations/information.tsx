import Form from "@/components/form";
import RadioInput from '@/components/inputs/radio';
import TextInput from '@/components/inputs/text';
import { FormEvent, useState } from "react";

export default function InformationForm() {
	const [data, setData] = useState({ certificates: "client", income: "client", outcome: "client", other: "" });

	async function onSubmit(e: FormEvent<HTMLFormElement>): Promise<void> { }

	return (
		<Form title="Other Information" subTitle='Where do you want to send the following:'>
			<div className="row radio-inputs">
				<RadioInput label='Certificates' name='certificates' options={["client", "custodian", "other entity"]} selected={data.certificates} setData={setData} />
				<RadioInput label='Profits or any other Income' name='income' options={["client", "custodian", "other entity"]} selected={data.income} setData={setData} />
				<RadioInput label='Sales Outcomes' name='outcome' options={["client", "custodian", "other entity"]} selected={data.outcome} setData={setData} />
			</div>
			<TextInput name='other' placeholder='Other Entity' setData={setData} />
		</Form>
	);
}