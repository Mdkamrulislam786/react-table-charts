import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box, Button } from "@material-ui/core";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default function BasicTable(props) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows,
    prepareRow,
    // footerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
  } = props.tableInstance;
  const { pageIndex, pageSize } = state;
  const classes = useStyles();

  return (
    <>
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
                      {/* <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>{" "} */}
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>

          <TableBody {...getTableBodyProps()}>
            {page.map((row) => {
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
          {/* <TableFooter>
          {footerGroups.map((footerGroup, i) => (
            <TableRow key={i} {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <TableCell align="center" {...column.getFooterProps()}>
                  {column.render("Footer")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableFooter> */}
        </Table>
      </TableContainer>
      <Box m={2} className="center w-100">
        <span>
          Page {pageIndex + 1} of {pageOptions.length}
        </span>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </Button>
        <span>
          | Go to page {""}
          <input
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
          />
        </span>
        <span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 20, 30].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </span>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </Button>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {">>"}
        </Button>
      </Box>
    </>
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
    fontSize: "13px",
  },
  headerWidth: {
    display: "flex",
    alignItems: "center",
  },
});
