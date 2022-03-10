import { toast } from "react-toastify";

const Table = ({ columns, addColumn, setColumns, rows, addRow, setRows }) => {
  const handleColumnChange = (value, index) => {
    setColumns((prevColumns) =>
      prevColumns.map((col, id) => (index === id ? value : col))
    );
  };

  const handleRowChange = (value, index, columnIndex) => {
    setRows((prevRows) =>
      prevRows.map((row, id) =>
        index === id
          ? row.map((col, colId) => (columnIndex === colId ? value : col))
          : row
      )
    );
  };

  const deleteColumn = (index) => {
    if (columns.length > 1) {
      setColumns((prevColumns) =>
        prevColumns.filter((col, id) => index !== id)
      );
      if (rows.length > 0) {
        setRows((prevRows) =>
          prevRows.map((row) => row.filter((col, id) => index !== id))
        );
      }
    } else {
      toast.dark("Minimum 1 column allowed");
    }
  };

  const deleteRow = (index) => {
    setRows((prevRows) => prevRows.filter((row, id) => index !== id));
  };

  return (
    <div className="row">
      <div className="col-md-10 mx-auto mt-5">
        <table className="table table-responsive">
          <thead>
            <tr className="bg-white">
              <th></th>
              {columns.map((column, index) => (
                <th scope="col" key={index * 4653215} className="text-center ">
                  <button
                    type="button"
                    onClick={() => deleteColumn(index)}
                    className="btn btn-block form-control btn-outline-danger btn-sm"
                  >
                    Delete
                  </button>
                </th>
              ))}
              <th></th>
            </tr>
            <tr className="bg-dark text-white">
              <th scope="col" className="bg-dark text-center">
                Sno.
              </th>
              {columns.map((column, index) => (
                <th
                  scope="col"
                  key={index * 455465}
                  className="bg-dark text-center"
                >
                  <input
                    type="text"
                    className="form-control text-center text-white bg-transparent border-0"
                    value={column}
                    onChange={(e) => handleColumnChange(e.target.value, index)}
                    style={{ boxShadow: "none" }}
                  />
                </th>
              ))}
              <th scope="col" className="bg-dark text-center">
                <button
                  className="btn btn-outline-light btn-sm"
                  onClick={() => addColumn()}
                  type="button"
                >
                  Add Column
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.length < 1 ? (
              <tr>
                <th
                  scope="row"
                  colSpan={columns.length + 2}
                  className="text-center py-3"
                >
                  Please click on Add Row Button to add a row
                </th>
              </tr>
            ) : (
              rows.map((row, index) => (
                <tr key={index * 4532134586532}>
                  <td className="text-center">{index + 1}</td>
                  {row.map((rowColumn, rowColumnIndex) => (
                    <td key={rowColumnIndex / 56465} className="text-center">
                      <input
                        type="text"
                        value={rowColumn}
                        onChange={(e) =>
                          handleRowChange(e.target.value, index, rowColumnIndex)
                        }
                        className="form-control text-center"
                        placeholder="Enter your value"
                      />
                    </td>
                  ))}
                  <td className="text-center">
                    <button
                      type="button"
                      onClick={() => deleteRow(index)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <button
          type="button"
          onClick={() => addRow()}
          className="form-control btn btn-outline-dark btn-block mt-2"
        >
          Add Row
        </button>
      </div>
    </div>
  );
};

export default Table;
