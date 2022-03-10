import { convertDataToJSON } from "../../../methods";

const SaveToJSON = ({ columns, rows }) => {
  const downloadJSONFile = () => {
    const data = convertDataToJSON({ columns, rows });

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
      onClick={() => downloadJSONFile()}
      className="btn btn-success"
    >
      Save as JSON
    </button>
  );
};

export default SaveToJSON;
