// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Job", "Employed", ""];

const TABLE_ROWS = [
  { name: "John Michael", job: "Manager", date: "23/04/18" },
  { name: "Alexa Liras", job: "Developer", date: "23/04/18" },
  { name: "Laurent Perrier", job: "Executive", date: "19/09/17" },
  { name: "Michael Levi", job: "Developer", date: "24/12/08" },
  { name: "Richard Gran", job: "Manager", date: "04/10/21" },
];

export default function EditableTableCells() {
  const [bgColors, setBgColors] = useState(
    TABLE_ROWS.map(() => ["bg-white", "bg-white", "bg-white"])
  );
  const [lastClicked, setLastClicked] = useState(null);

  const handleDoubleClick = (rowIndex, colIndex) => {
    const newBgColors = [...bgColors];

    if (lastClicked) {
      const [lastRow, lastCol] = lastClicked;
      newBgColors[lastRow][lastCol] = "bg-green-300";
    }

    newBgColors[rowIndex][colIndex] = "bg-red-500";

    setBgColors(newBgColors);
    setLastClicked([rowIndex, colIndex]);
  };

  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }, rowIndex) => {
            const isLast = rowIndex === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={name}>
                <td className={classes}>
                  <input
                    type="text"
                    className={`${bgColors[rowIndex][0]} rounded-none border-none px-2 w-full`}
                    defaultValue={name}
                    onDoubleClick={() => handleDoubleClick(rowIndex, 0)}
                  />
                </td>
                <td className={classes}>
                  <input
                    type="text"
                    className={`${bgColors[rowIndex][1]} rounded-none border-none px-2 w-full`}
                    defaultValue={job}
                    onDoubleClick={() => handleDoubleClick(rowIndex, 1)}
                  />
                </td>
                <td className={classes}>
                  <input
                    type="text"
                    className={`${bgColors[rowIndex][2]} rounded-none border-none px-2 w-full`}
                    defaultValue={date}
                    onDoubleClick={() => handleDoubleClick(rowIndex, 2)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
