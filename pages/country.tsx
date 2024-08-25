import Head from "next/head";
import CountryList from "./components/CountryList";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function CountryPage() {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
    return null;
  }

  return (
    <>
      <Head>
        <title>Country List</title>
      </Head>
      <CountryList />
    </>
  );
}
