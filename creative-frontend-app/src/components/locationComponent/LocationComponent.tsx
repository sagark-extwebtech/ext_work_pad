import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { withStyles } from "@mui/styles";
import { style } from "./LocationComponent.style";
import countriList from "../../utils/countryData";
import ReactCountryFlag from "react-country-flag";
import { MapContainer, TileLayer, TileLayerProps, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LocationComponent = (props: any) => {
  const { classes } = props;
  const center = [13.084622, 80.248357] as [number, number];
  const zoom = 10 as number;

  return (
    <Stack component={Paper} direction="row" columnGap={3} rowGap={3} p={2} mb={3} height={420} className={classes.locationCompo}>
      <Box flex={1}>
        <Box pb={2}>
          <Box>
            <Typography fontSize={25} align="left">
              Global Sales by Top Locations
            </Typography>
            <Typography fontSize={15} color={"gray"}>
              All products that were shipped
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {countriList.map((ele) => (
                <TableRow
                  key={ele.countryCode}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <ReactCountryFlag countryCode={ele.countryCode} svg />
                    {/* {ele.countryCode} */}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {ele.countryName}
                  </TableCell>
                  <TableCell align="right">{ele.value}</TableCell>
                  <TableCell align="right">{ele.percentage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
      <Box flex={1} height={400}>
        {/* @ts-ignore */}
        <MapContainer
            className={classes.mapContainer}
          style={{ width: "100%", height: "380px" }}
          // @ts-ignore
          zoom={zoom}
          // @ts-ignore
          center={center}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=fwdEPnkRYclqe0zKVFJP"
            // @ts-ignore
            attribution="© OpenStreetMap contributors"
          />
        </MapContainer>
      </Box>
    </Stack>
  );
};

export default withStyles(style)(LocationComponent);
