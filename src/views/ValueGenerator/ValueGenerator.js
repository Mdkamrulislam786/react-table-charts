import React, { useMemo, useState } from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import BasicTable from "./Table";
import FormInput from "../../Components/FormInput/FormInput";
import { SearchOutlined } from "@material-ui/icons";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import UserData from "../../MOCK_DATA.json";
import { columnData } from "./columns";

const ValueGenerator = () => {
  const [resultStatus, setResultStatus] = useState("All");
  const classes = useStyles();

  const data = useMemo(() => [...UserData], []);
  const columns = useMemo(columnData, [classes.btn1, classes.btn3]);
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  const { state, setGlobalFilter } = tableInstance;
  const { globalFilter } = state;

  return (
    <>
      {/* search input feilds */}
      <Box mb={1}>
        <Grid spacing={4} container>
          <Grid item>
            <FormInput
              icon={<SearchOutlined fontSize="small" />}
              type="text"
              placeholder="Search by any parameter"
              bgc="#f8f8f8"
              filter={globalFilter}
              setFilter={setGlobalFilter}
            />
          </Grid>
          <Grid item>
            <FormInput type="text" placeholder="Name" bgc="#f8f8f8" />
          </Grid>
          <Grid item>
            <FormInput type="number" placeholder="User ID" bgc="#f8f8f8" />
          </Grid>
          <Grid item>
            <FormInput type="number" placeholder="Task ID" bgc="#f8f8f8" />
          </Grid>
        </Grid>
      </Box>

      <Typography gutterBottom variant="subtitle1">
        Showing Results
      </Typography>
      <Button size="small" className={classes.btn1} variant="contained">
        {resultStatus}
      </Button>
      <BasicTable tableInstance={tableInstance} />
    </>
  );
};

export default ValueGenerator;

const useStyles = makeStyles({
  btn1: {
    backgroundColor: "#155475",
    borderRadius: "15px",
    color: "#fff",
    width: "80px",
    "&:hover": { backgroundColor: "#155475" },
    marginBottom: "1rem",
  },
});
