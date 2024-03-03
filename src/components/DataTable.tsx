import { FC } from 'react';

// Define the structure of each column and row in your table data
interface Column {
  Header: string;
  accessor: string; // Unique identifier for the column
}

interface Row {
  [key: string]: string; // Dynamic key-value pairs for each row
}

// Update the Props interface to include the table structure
interface Props {
  table: {
    columns: Column[];
    data: Row[];
  };
}

const DataTable: FC<Props> = ({ table }): JSX.Element => {
  return (
    <table className="table w-full border-collapse border border-gray-200">
      {/* head */}
      <thead className="bg-base-200">
        <tr>
          {table.columns.map((column) => (
            <th key={column.accessor} className="border border-gray-300 p-4">
              {column.Header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={rowIndex % 2 === 0 ? 'bg-base-100' : 'bg-base-200'}
          >
            {table.columns.map((column) => (
              <td key={column.accessor} className="border border-gray-300 p-4">
                {row[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
