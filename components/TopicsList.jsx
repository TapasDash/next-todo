import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      // next: { revalidate: 10 }, // - At most once every 10 seconds
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Not be able to fetch topics!");
    }

    return res.json(); //will return all the topics
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
        <main className="p-4 border border-slate-300 flex justify-between my-3 gap-5">
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
