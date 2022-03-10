import SaveToExcel from "./Components/SaveToExcel";
import SaveToJSON from "./Components/SaveToJSON";

const Header = () => {
  return (
    <div className="row mb-5">
      <div className="col-md-10 mt-5 mx-auto d-flex align-items-center justify-content-between">
        <a href="/" className="ms-5 text-decoration-none text-dark fw-bold">
          Reactjs Dynamic Table
        </a>

        <div className="d-flex align-items-center justify-content-end gap-1">
          <p className="my-0">Columns : 0</p>
          <p className="my-0">Rows : 0</p>

          <button type="button" className="ms-1 btn btn-outline-dark">
            Add Column
          </button>
          <button type="button" className="btn btn-outline-dark">
            Add Row
          </button>

          <SaveToJSON />
          <SaveToExcel />
        </div>
      </div>
    </div>
  );
};

export default Header;
