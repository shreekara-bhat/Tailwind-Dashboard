import React from "react";
export default function GridBox() {
  return (
    <div className="flex-1 mt-[5em] flex items-center justify-center border border-black p-4">
      <div className="flex flex-row gap-3 w-full max-w-screen-lg h-[80vh] max-h-screen p-4">
        <div className="w-[23em] my-4 bg-gray-300 flex items-center justify-center">
          grid-1
        </div>
        <div className="w-[23em] my-4 bg-red-300 flex items-center justify-center">
          grid-2
        </div>
        <div className="flex flex-col bg-green-300 my-4 items-center w-[23em]">
          <div className="w-[calc(100%-10%)] mt-4 mb-4 p-6 bg-white">1</div>
          <div className="w-[calc(100%-10%)] mt-2 mb-4 p-6 bg-white">
            <input type="text" />
          </div>
          <div className="w-[calc(100%-10%)] mt-2 mb-4 p-6 bg-white">3</div>
        </div>
      </div>
    </div>
  );
}
