import { Alert } from "@mui/material";
import React from "react";

export default function Success({ success }) {
  return (
    <div>
      <Alert variant="filled" severity="success">
        {success}
      </Alert>
    </div>
  );
}
