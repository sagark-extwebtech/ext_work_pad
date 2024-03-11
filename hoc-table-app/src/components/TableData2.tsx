import React from "react";
import withTableContainer from "./hoc/withTableContainer";

const tableData2 = [
  { id: 101, name: "Alice", age: 22, gender: "male", mob: 9898787856 },
  { id: 102, name: "Bob", age: 28, gender: "male", mob: 9898787856 },
  { id: 103, name: "Charlie", age: 35, gender: "female", mob: 9898787856 },
  { id: 104, name: "David", age: 30, gender: "male", mob: 9898787856 },
  { id: 105, name: "Eva", age: 27, gender: "female", mob: 9898787856 },
  { id: 106, name: "Frank", age: 34, gender: "male", mob: 9898787856 },
  { id: 107, name: "Grace", age: 29, gender: "female", mob: 9898787856 },
  { id: 108, name: "Helen", age: 26, gender: "female", mob: 9898787856 },
  { id: 109, name: "Isaac", age: 31, gender: "male", mob: 9898787856 },
  { id: 110, name: "Jack", age: 33, gender: "male", mob: 9898787856 },
];

const TableData2 = (props:any) => {
    const { showTable } = props;
  return (
    <>
      <h1>Table Data-2</h1>
      {showTable()}
    </>
  );
};

export default withTableContainer(TableData2, tableData2);
