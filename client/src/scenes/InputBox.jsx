import React, { useState } from "react";

export default function InputBox() {
  const [values, setValues] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const firstValueChange = (e) => {
    const firstValue = e.target.value;
    const secondValue = firstValue * 1.2;
    const thirdValue = (firstValue / 10.764).toFixed(3);
    const fourthValue = (secondValue / 10.764).toFixed(3);

    setValues({
      first: firstValue,
      second: secondValue,
      third: thirdValue,
      fourth: fourthValue,
    });
  };

  const secondValueChange = (e) => {
    const secondValue = e.target.value;
    const firstValue = secondValue / 1.2;
    const thirdValue = (firstValue / 10.764).toFixed(3);
    const fourthValue = (secondValue / 10.764).toFixed(3);

    setValues({
      first: firstValue,
      second: secondValue,
      third: thirdValue,
      fourth: fourthValue,
    });
  };

  const thirdValueChange = (e) => {
    const thirdValue = e.target.value;
    const firstValue = Math.round(thirdValue * 10.764);
    const secondValue = firstValue * 1.2;
    const fourthValue = (thirdValue * 1.2).toFixed(3);

    setValues({
      first: firstValue,
      second: secondValue,
      third: thirdValue,
      fourth: fourthValue,
    });
  };
  const fourthValueChange = (e) => {
    const fourthValue = e.target.value;
    const firstValue = Math.round(fourthValue * 8.97);
    const secondValue = Math.round(fourthValue * 10.764);
    const thirdValue = (fourthValue / 1.2).toFixed(3);
    setValues({
      first: firstValue,
      second: secondValue,
      third: thirdValue,
      fourth: fourthValue,
    });
  };

  return (
    <div className="mt-[10em] bg-green-500 h-[20em] w-[70em] z-10 relative">
      <div className="flex gap-1">
        <div>
          <input
            type="text"
            value={values.first}
            onChange={firstValueChange}
            placeholder="Enter a Value 1"
          />
        </div>
        <div>
          <input
            type="text"
            value={values.second}
            onChange={secondValueChange}
            placeholder="Enter a Value"
          />
        </div>
        <div>
          <input
            type="text"
            value={values.third}
            onChange={thirdValueChange}
            placeholder="Enter a Value"
          />
        </div>
        <div>
          <input
            type="text"
            value={values.fourth}
            onChange={fourthValueChange}
            placeholder="Enter a Value"
          />
        </div>
      </div>
    </div>
  );
}
