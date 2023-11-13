import { Button, Grid, Link } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', pb: 2 }}>
            Company
          </Typography>

          <div>
            <Button variant="body2" sx={{ pb: 2 }}>
              About
            </Button>
          </div>

          <div>
            <Button variant="body2" sx={{ pb: 2 }}>
              Blogs
            </Button>
          </div>

          <div>
            <Button variant="body2" sx={{ pb: 2 }}>
              Jobs
            </Button>
          </div>

          <div>
            <Button variant="body2" sx={{ pb: 2 }}>
              Partners
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', pb: 2 }}>
            Solution
          </Typography>
          <div>
            <Button variant="body2" sx={{ pb: 2 }}>
              Marketing
            </Button>
          </div>

          <div>
            <Button variant="body2" sx={{ pb: 2 }}>
              Commerce
            </Button>
          </div>

          <div>
            <Button variant="body2" sx={{ pb: 2 }}>
              Insights
            </Button>
          </div>

          <div>
            <Button variant="body2" sx={{ pb: 2 }}>
              Support
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', pb: 2 }}>
            Documentation
          </Typography>
          <div>
            <Button variant="body2" sx={{ pb: 2 }}>
              API Integration
            </Button>
          </div>

          <div>
            <Button variant="body2" sx={{ pb: 2 }}>
              API Status
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', pb: 2 }}>
            Legal
          </Typography>
          <div>
            <Button variant="body2" sx={{ pb: 2 }}>
              Claim
            </Button>
          </div>

          <div>
            <Button variant="body2" sx={{ pb: 2 }}>
              Privacy
            </Button>
          </div>

          <div>
            <Button variant="body2" sx={{ pb: 2 }}>
              Terms & Conditions
            </Button>
          </div>
        </Grid>

        <Grid className="pt-10" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 Shubham. All rights reserved.
          </Typography>

          <Typography variant="body2" component="p" align="center">
            Made with ❤️ by Shubham
          </Typography>

          <Typography variant="body2" component="p" align="center">
            Icons made by{" "}
            <Link href="#" color="inherit" underline="always">
              Freepik
            </Link>{" "}
            from{" "}
            <Link href="#" color="inherit" underline="always">
              Freepik
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
