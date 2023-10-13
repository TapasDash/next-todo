"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  const { BASE_URL } = process.env;
  try {
    const res = await axios.get(`/api/topics`, {
      // next: { revalidate: 10 }, // - At most once every 10 seconds
      cache: "no-store",
    });
    return res.data.topics;
  } catch (error) {
    console.error("Error in loading topics:", error);
  }
};

const TopicsList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <>
      {topics.length &&
        topics.map(({ title, description, _id }) => (
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
