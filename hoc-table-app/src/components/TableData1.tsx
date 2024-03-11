import React from "react";
import withTableContainer from "./hoc/withTableContainer";

const tableData1 = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 28 },
  { id: 4, name: "Alice", age: 35 },
  { id: 5, name: "Charlie", age: 22 },
  { id: 6, name: "Eva", age: 27 },
  { id: 7, name: "David", age: 32 },
  { id: 8, name: "Grace", age: 29 },
  { id: 9, name: "Frank", age: 34 },
  { id: 10, name: "Helen", age: 26 },
];

const TableData1 = (props: any) => {
  const { showTable } = props;
  return (
    <>
      <h1>Table Data-1</h1>
      {showTable()}
    </>
  );
};

export default withTableContainer(TableData1, tableData1);
