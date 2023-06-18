import Search from "@/components/search";
import Table from "@/components/table";
import { getForms } from "./api/forms/route";

export default async function Home() {
  const forms = await getForms();

  return (
    <>
      <Search />
      <Table formsData={forms} />
    </>
  );
}
