export const convertDataToJSON = (data) => {
  const { rows, columns } = data;

  let convertedData = [];
  rows.map((row, index) => {
    let obj = { Sno: index + 1 };

    columns.map((col, colId) => {
      obj[col] = row[colId];
    });

    convertedData.push(obj);
  });

  return convertedData;
};
