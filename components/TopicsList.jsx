import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { headers } from "next/headers";
import axios from "axios";

const headersList = headers();
// read the custom x-url header
// const header_url = headersList.get("x-url") || "";

// console.log({ header_url });

const getTopics = async () => {
  try {
    const { BASE_URL } = process.env;
    const res = await axios(`${BASE_URL}/api/topics`, {
      // next: { revalidate: 10 }, // - At most once every 10 seconds
      cache: "no-store",
    });

    if (!res) {
      throw new Error("Not be able to fetch topics!");
    }

    return res.data; //will return all the topics
  } catch (error) {
    console.error("Error in loading topics:", error);
  }
};

const TopicsList = async () => {
  const { topics } = await getTopics();
  console.log(topics);
  return (
    <>
      {topics.map(({ title, description, _id }) => (
        <main
          key={_id}
          className="p-4 border border-slate-300 flex justify-between my-3 gap-5"
        >
          <div>
            <h2 className="font-bold text-2xl">{title}</h2>
            <div>{description}</div>
          </div>
          <div className="flex gap-2 items-start">
            <RemoveBtn />
            <Link href={`/editTopic/${_id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </main>
      ))}
    </>
  );
};

export default TopicsList;
