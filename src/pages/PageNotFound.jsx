import Typography from "@mui/material/Typography";

export default function PageNotFound() {
  console.log('Not Found');
  return (
    <div id="wrapper">
        <Typography component="h1" variant="h5" sx={{ position: 'absolute'}}>
          404, Page Not Found
        </Typography>
    </div>
  );
}
