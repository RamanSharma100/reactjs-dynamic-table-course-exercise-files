import SaveToExcel from "./Components/SaveToExcel";
import SaveToJSON from "./Components/SaveToJSON";

const Header = ({ columns, addColumn, rows, addRow }) => {
  return (
    <div className="row mb-5">
      <div className="col-md-10 mt-5 mx-auto d-flex align-items-center justify-content-between">
        <a href="/" className="ms-5 text-decoration-none text-dark fw-bold">
          Reactjs Dynamic Table
        </a>

        <div className="d-flex align-items-center justify-content-end gap-1">
          <p className="my-0">Columns : {columns.length}</p>
          <p className="my-0">Rows : {rows.length}</p>

          <button
            type="button"
            onClick={() => addColumn()}
            className="ms-1 btn btn-outline-dark"
          >
            Add Column
          </button>
          <button
            type="button"
            onClick={() => addRow()}
            className="btn btn-outline-dark"
          >
            Add Row
          </button>

          <SaveToJSON rows={rows} columns={columns} />
          <SaveToExcel rows={rows} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Header;
