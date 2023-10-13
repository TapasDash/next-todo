import React from "react";

const Page = () => {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Topic Title"
        className="border border-slate-500 px-8 py-2 rounded"
      />
      <input
        type="text"
        placeholder="Topic Description"
        className="border border-slate-500 px-8 py-2 rounded"
      />
      {/* w-fit i.e width: fit-content; property is used to make an element's width automatically adjust to the content it contains.
   This means the element will be as wide as its content, and it won't expand beyond that width. */}
      <buttton className="bg-green-600 font-bold text-white py-3 px-6 w-fit rounded">
        Edit Topic
      </buttton>
    </form>
  );
};

export default Page;
