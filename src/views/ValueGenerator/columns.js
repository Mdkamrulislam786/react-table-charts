import { Box, Button, Typography } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { format, parseISO } from "date-fns";
import TransitionsModal from "../../Components/Modal/Modal";

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
      Cell: ({ row }) => (
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
            onClick={() => alert("Are you sure you want to ban this user?")}
          >
            Ban User
          </Button>

          <TransitionsModal btnText="View Info">
            <Typography gutterBottom variant="h6" color="textSecondary">
              {row.original.name} Details :
            </Typography>
            <pre>
              <code>{JSON.stringify(row.original, null, 2)}</code>
            </pre>
          </TransitionsModal>
        </Box>
      ),
    },
  ];
};
