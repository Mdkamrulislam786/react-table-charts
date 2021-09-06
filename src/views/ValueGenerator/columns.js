import { Box, Button, Typography } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";

export const columnData = () => {
  return [
    {
      Header: "User ID",
      Footer: "User ID",
      accessor: "id",
      Cell: ({ value }) => (
        <Typography variant="body2" color="textSecondary">
          {value.split("-").join("")}
        </Typography>
      ),
    },
    {
      Header: "Name",
      Footer: "Name",
      accessor: "name",
      Cell: ({ value }) => (
        <Typography variant="body2" color="textSecondary">
          {value}
        </Typography>
      ),
    },
    {
      Header: "Ongoing Projects",
      Footer: "Ongoing Projects",
      accessor: "projects",
      Cell: ({ value }) => (
        <Typography align="center" variant="body2" color="textSecondary">
          {value}
        </Typography>
      ),
    },
    {
      Header: "Profile Created",
      Footer: "Profile Created",
      accessor: "created",
      Cell: ({ value }) => (
        <Typography variant="body2" color="textSecondary">
          {format(parseISO(value), "MM/dd/yyyy")}
        </Typography>
      ),
    },
    {
      Header: "Account Status",
      Footer: "Account Status",
      accessor: "active",
      Cell: ({ value }) => {
        return (
          <Box className="flex">
            <FiberManualRecordIcon
              color={`${value ? "secondary" : "error"}`}
              fontSize="small"
              className="mr-1"
            />
            <Typography
              variant="body2"
              color={`${value ? "secondary" : "error"}`}
            >
              {value ? "Active" : "Inactive"}
            </Typography>
          </Box>
        );
      },
    },
    {
      Header: "Total Value Generated",
      Footer: "Total Value Generated",
      accessor: "value",
      Cell: ({ value }) => (
        <Typography align="center" variant="body2" color="secondary">
          {value} $
        </Typography>
      ),
    },

    {
      Header: "Actions",
      Footer: "Actions",
      accessor: "actions",
      Cell: ({ value }) => (
        <Box className="flex-between w-100 ">
          <Button
            color="inherit"
            variant="contained"
            style={{
              backgroundColor: "#EF621C",
              borderRadius: "30px",
              color: "#fff",
              fontSize: "12px",
              width: "80px",
              "&:hover": { backgroundColor: "#EF621C" },
            }}
            size="small"
          >
            Ban User
          </Button>
          <Link to="/charts">
            <Button
              color="inherit"
              variant="contained"
              style={{
                backgroundColor: "#155475",
                borderRadius: "30px",
                color: "#fff",
                fontSize: "12px",
                width: "80px",
                "&:hover": { backgroundColor: "#155475" },
              }}
              size="small"
            >
              View Info
            </Button>
          </Link>
        </Box>
      ),
    },
  ];
};
