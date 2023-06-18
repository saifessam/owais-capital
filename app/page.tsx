import Search from "@/components/search";
import Table from "@/components/table";

async function getForms() {
  const response = await fetch('http://localhost:3000/api/forms');
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json();
}

export default async function Home() {
  const forms = await getForms();

  return (
    <>
      <Search />
      <Table formsData={forms} />
    </>
  );
}
