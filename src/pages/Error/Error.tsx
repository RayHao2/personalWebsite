import { useRouteError } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box id="error-page">
      <Typography variant="h1">Oops!</Typography>
      <Typography>Sorry, an unexpected error has occurred.</Typography>     
    </Box>
  );
}
