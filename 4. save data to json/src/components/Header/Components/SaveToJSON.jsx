const SaveToJSON = ({ columns, rows }) => {
  const convertToJSON = () => {
    let data = [];
    rows.map((row, index) => {
      let obj = { Sno: index + 1 };

      columns.map((col, colId) => {
        obj[col] = row[colId];
      });

      data.push(obj);
    });

    // create and download blob file with .json extension and given data

    const fileData = JSON.stringify(data);
    const fileBlob = new Blob([fileData], { type: "text/plain" });

    const fileURL = URL.createObjectURL(fileBlob);

    const a = document.createElement("a");
    a.href = fileURL;
    a.download = `data.json`;
    a.click();
  };

  return (
    <button
      type="button"
      onClick={() => convertToJSON()}
      className="btn btn-success"
    >
      Save as JSON
    </button>
  );
};

export default SaveToJSON;
