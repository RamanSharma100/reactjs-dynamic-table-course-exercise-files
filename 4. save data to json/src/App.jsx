import { useState } from "react";
import { Header, Table } from "./components";

import "./App.css";

const App = () => {
  const [columns, setColumns] = useState(["Column 1"]);
  const [rows, setRows] = useState([]);

  const addColumn = () => {
    if (columns.length < 9) {
      setColumns((prevColumns) => [
        ...prevColumns,
        `Column ${prevColumns.length + 1}`,
      ]);
      if (rows.length > 0) {
        setRows((prevRows) => prevRows.map((row) => [...row, ""]));
      }
    } else {
      alert("Maximum 9 columns allowed");
    }
  };

  const addRow = () => {
    setRows((prevRows) => [...prevRows, columns.map((col) => "")]);
  };

  return (
    <div className="container-fluid">
      <Header
        columns={columns}
        rows={rows}
        addColumn={addColumn}
        addRow={addRow}
      />

      <Table
        columns={columns}
        rows={rows}
        addRow={addRow}
        addColumn={addColumn}
        setColumns={setColumns}
        setRows={setRows}
      />
    </div>
  );
};

export default App;
