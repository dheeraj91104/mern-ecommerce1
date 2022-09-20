import { CircularProgress } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

export default function Loader() {
  return (
    <div>
      <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
        <LinearProgress color="success" />
      </Stack>
      <div className="text-center mt-5">
        <CircularProgress
          color="success"
          style={{ width: "100px", height: "100px" }}
        />
      </div>
    </div>
  );
}
