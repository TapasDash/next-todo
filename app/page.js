import TopicsList from "@/components/TopicsList";
import { headers } from "next/headers";
import Image from "next/image";

export default function Home() {
  // console.log(header_url);
  return (
    <>
      <TopicsList />
    </>
  );
}
