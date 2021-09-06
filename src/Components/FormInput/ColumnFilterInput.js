import React from "react";

const ColumnFilterInput = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <input
      placeholder="search"
      value={filterValue || ""}
      onChange={({ target }) => setFilter(target.value)}
    />
  );
};

export default ColumnFilterInput;
