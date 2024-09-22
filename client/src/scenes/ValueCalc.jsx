import React, { useState } from "react";
export default function ValueCalc() {
  const [count, setCount] = useState("");

  const AddTextBox = (e) => {
    const value = e.target.value;

    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setCount(value);
    }
  };

  return (
    <div className="mt-[12em] z-10 relative">
      <div className="flex flex-row gap-10 items-center mt-[5em] ml-[20em] mr-[30em] ">
        <input
          placeholder="Enter a value"
          className="py-2 px-3 ml-2 border-zinc-200"
        />
        <input
          placeholder="Enter a value"
          className="py-2 px-3 ml-2 border-gray-500"
        />
        <input
          placeholder="Enter a value"
          className="py-2 px-3 ml-2 border-gray-500"
        />
      </div>

      <div className="mt-[3em] mr-[40em] ml-[38em]">
        <input
          type="text"
          value={count}
          onChange={AddTextBox}
          className="py-2 px-3 ml-2 rounded-none"
        />
        <div className="mt-4">
          {Array.from({ length: parseInt(count) || 0 }, (_, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Floor ${index + 1}`}
              className="py-2 px-3 ml-2 mt-2 border-gray-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
