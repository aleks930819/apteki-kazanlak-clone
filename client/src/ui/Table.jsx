const Table = ({ columns, data }) => {
  return (
    <div className="h-[calc(100vh-100px)] w-[calc(100vw-300px)] overflow-y-auto">
      <div className="relative overflow-x-auto">
        <table className="w-full text-left text-sm text-white">
          <thead className="bg-primary text-xs uppercase">
            <tr>
              {columns.map((column, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((rowData, index) => (
              <tr
                key={index}
                className="border-b border-t border-black bg-green-700"
              >
                {columns.map((column, columnIndex) => (
                  <td key={columnIndex} className="px-6 py-4">
                    {column.render
                      ? column.render(rowData)
                      : rowData[column.dataKey]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
