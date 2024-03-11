import "./App.css";
import DisplayTable from "./components/DisplayTable";
import TableData1 from "./components/TableData1";
import TableData2 from "./components/TableData2";
import withTable from "./components/hoc/withTable";
import { tableData1, tableData2 } from "./utils/data";

const TableWithTableData1 = withTable(DisplayTable, tableData1);
const TableWithTableData2 = withTable(DisplayTable, tableData2);

function App() {
  return (
    <div className="App">
      <h1>Table with HOC</h1>

      {/* <TableWithTableData1 title="Table-1"/>
      <br />
      <hr />
      <TableWithTableData2 title="Table-2"/> */}

      {/* Another way */}

      <TableData1 />
      <hr />
      <TableData2 />
    </div>
  );
}

export default App;
