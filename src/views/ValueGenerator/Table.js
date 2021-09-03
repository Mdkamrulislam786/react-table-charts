import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
// import * as UserData from "../../MOCK_DATA.json";

function createData(
  userID,
  name,
  profileCreated,
  profileUpdated,
  profileStatus
) {
  return { userID, name, profileCreated, profileUpdated, profileStatus };
}

const rows = [
  createData(
    452372513,
    "John Smith",
    new Date().toLocaleDateString(),
    "4",
    "active"
  ),
  createData(
    452372523,
    "John Smith",
    new Date().toLocaleDateString(),
    "5",
    "deactive"
  ),
  createData(
    452372543,
    "John Smith",
    new Date().toLocaleDateString(),
    "4",
    "active"
  ),
  createData(
    452372535,
    "John Smith",
    new Date().toLocaleDateString(),
    "4",
    "active"
  ),
  createData(
    452372573,
    "John Smith",
    new Date().toLocaleDateString(),
    "4",
    "active"
  ),
];

export default function BasicTable() {
  const classes = useStyles();
  const columns = useMemo(
    () => [
      {
        Header: "User ID",
        accessor: "userid", // accessor is the "key" in the data
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Ongoing Projects",
        accessor: "projecta",
      },
      {
        Header: "Profile Created",
        accessor: "created",
      },
      {
        Header: "Total Value Generated",
        accessor: "value",
      },
      {
        Header: "Account Status",
        accessor: "active",
      },
      {
        Header: "Actions",
        accessor: "actions",
      },
    ],
    []
  );

  console.log("columns", columns);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell align="left">User ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Ongoing Projects</TableCell>

            <TableCell align="center">Profile Created</TableCell>
            <TableCell align="center">Total Value Generated</TableCell>
            <TableCell align="center">Account Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.userID}>
              <TableCell align="left">
                <Typography className={classes.regularData}>
                  {row.userID}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography className={classes.regularData}>
                  {row.name}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography className={classes.updateStatus}>
                  {row.profileUpdated}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography className={classes.regularData}>
                  {row.profileCreated}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography className={classes.updateStatus}>5428 $</Typography>
              </TableCell>

              <TableCell align="center">
                <Box className="center">
                  <Box className={classes.activeDot} mr={1} />
                  <Typography className={classes.activeStatus}>
                    {row.profileStatus}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="right">
                <Box className="flex-around w-100 ">
                  <Button
                    color="inherit"
                    variant="contained"
                    className={classes.btn3}
                    size="small"
                  >
                    Ban User
                  </Button>
                  <Link to="/charts">
                    <Button
                      color="inherit"
                      variant="contained"
                      className={classes.btn1}
                      size="small"
                    >
                      View Info
                    </Button>
                  </Link>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// const StyledRating = withStyles({
//   iconFilled: {
//     color: "#000",
//   },
//   iconHover: {
//     color: "gold",
//   },
// })(Rating);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  btn1: {
    backgroundColor: "#155475",
    borderRadius: "30px",
    color: "#fff",
    fontSize: "12px",
    width: "80px",
    "&:hover": { backgroundColor: "#155475" },
  },
  btn3: {
    backgroundColor: "#EF621C",
    borderRadius: "30px",
    color: "#fff",
    fontSize: "12px",
    width: "80px",
    "&:hover": { backgroundColor: "#EF621C" },
  },
  tableHead: {
    backgroundColor: "#F2F2F2",
  },
  updateStatus: {
    color: "#529C16",
    fontSize: "12px",
    fontWeight: 500,
  },
  activeStatus: {
    fontSize: "12px",
    display: "inline-block",
    fontWeight: 500,
    borderRadius: "20px",
    color: "#529C16",
  },
  regularData: {
    fontSize: "12px",
    fontWeight: 500,
  },
  activeDot: {
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    backgroundColor: "#529C16",
  },
});
