import Search from "@/components/search";
import Table from "@/components/table";
import { headers } from "next/headers";

async function getForms(host: string) {
  const response = await fetch(`http://${host}/api/forms`);
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json();
}

export default async function Home() {
  const host = headers().get("host");
  const forms = await getForms(host!);

  return (
    <>
      <Search />
      <Table formsData={forms} />
    </>
  );
}
