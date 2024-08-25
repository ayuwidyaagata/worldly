import Head from "next/head";
import CountryList from "./components/CountryList";

export default function CountryPage() {
  return (
    <>
      <Head>
        <title>Country List</title>
      </Head>
      <CountryList />
    </>
  );
}
