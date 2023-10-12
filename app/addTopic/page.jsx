"use client";

import { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      window.alert("Title and description are required!");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Topic Title"
        className="border border-slate-500 px-8 py-2 rounded"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="Topic Description"
        className="border border-slate-500 px-8 py-2 rounded"
      />
      {/* w-fit i.e width: fit-content; property is used to make an element's width
      automatically adjust to the content it contains. This means the element
      will be as wide as its content, and it won't expand beyond that width. */}
      <buttton
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit cursor-pointer rounded"
      >
        Add Topic
      </buttton>
    </form>
  );
};

export default page;
