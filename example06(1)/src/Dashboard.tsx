import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CircularProgress,
  Box,
  Grid,
  Avatar,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { authProvider } from "./authProvider";

export const Dashboard = () => {
  const [authStatus, setAuthStatus] = useState("Not Authenticated");

  useEffect(() => {
    authProvider
      .checkAuth()
      .then(() => setAuthStatus("Authenticated"))
      .catch(() => setAuthStatus("Not Authenticated"));
  }, []);

  return (
    <Grid container justifyContent="center" sx={{ marginTop: 5 }}>
      <Grid item xs={12} md={8} lg={6}>
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            background: `linear-gradient(135deg, ${blue[500]} 30%, ${blue[300]} 90%)`,
            color: "white",
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: "white",
                  color: blue[500],
                }}
              >
                A
              </Avatar>
            }
            title="Welcome to the Administration"
            titleTypographyProps={{ variant: "h5", fontWeight: "bold" }}
          />
          <CardContent>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              Welcome to the administration panel. Here, you can manage content,
              monitor activities, and customize settings to ensure the system
              runs efficiently.
            </Typography>
          </CardContent>
          <CardContent>
            {authStatus === null ? (
              <Box display="flex" alignItems="center">
                <CircularProgress
                  size={24}
                  sx={{ color: "white", marginRight: 2 }}
                />
                <Typography variant="body2">
                  Checking authentication...
                </Typography>
              </Box>
            ) : (
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {authStatus}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
