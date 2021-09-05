import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box, TableFooter } from "@material-ui/core";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default function BasicTable(props) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = props.tableInstance;
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        aria-label="simple table"
        {...getTableProps()}
      >
        <TableHead className={classes.tableHead}>
          {headerGroups.map((headerGroup, i) => (
            <TableRow key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <TableCell
                  key={i}
                  align="left"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <Box className={classes.headerWidth}>
                    <strong className={classes.regularData}>
                      {column.render("Header")}
                    </strong>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ArrowDropUpIcon color="action" fontSize="small" />
                      ) : (
                        <ArrowDropDownIcon color="action" fontSize="small" />
                      )
                    ) : (
                      ""
                    )}
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>

        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow key={row.id} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <TableCell align="left" {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          {footerGroups.map((footerGroup, i) => (
            <TableRow key={i} {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <TableCell align="center" {...column.getFooterProps()}>
                  {column.render("Footer")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

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
  regularData: {
    fontSize: "12px",
  },
  headerWidth: {
    display: "flex",
    alignItems: "center",
  },
});
