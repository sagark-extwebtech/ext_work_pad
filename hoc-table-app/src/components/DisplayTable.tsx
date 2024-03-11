import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const DisplayTable = (props: any) => {
  const { tableData, keys, title } = props;

  return (
    <TableContainer component={Paper} sx={{ width: "60%", margin:"auto"}}>
      <h1>{title}</h1>
      <Table sx={{ width: "100%", }}>
        <TableHead>
          <TableRow>
            {keys.map((ele: any) => (
              <TableCell sx={{fontWeight: 600, textTransform:"capitalize"}}>{ele}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((item:any) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
             {keys.map((ele: any) => (
              <TableCell>{item[ele]}</TableCell>
            ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DisplayTable;
// export default withTable(DisplayTable, tableData2);
