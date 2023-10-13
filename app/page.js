import TopicsList from "@/components/TopicsList";
import { headers } from "next/headers";
import Image from "next/image";

export default function Home() {
  const headersList = headers();
  // read the custom x-url header
  console.log({ headersList });
  // console.log(header_url);
  return (
    <>
      <TopicsList />
    </>
  );
}
