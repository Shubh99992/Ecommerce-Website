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
        <Grid item sx={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {""}
            Company
          </Typography>

          <div>
            <Button className="pb-5" variant="h6">
              {""}
              About
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              {""}
              Blogs
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              {""}
              Jobs
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              {""}
              Partners
            </Button>
          </div>
        </Grid>

        <Grid item sx={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {""}
            Sulution
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {""}
              Markiting
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {""}
              Commerce
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {""}
              Insights
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {""}
              Support
            </Button>
          </div>
        </Grid>

        <Grid item sx={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {""}
            Documentaion
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {""}
              API Integration
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {""}
              API Status
            </Button>
          </div>
        </Grid>

        <Grid item sx={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {""}
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {""}
              Claim
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {""}
              Privacy
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {""}
              Term & Condition
            </Button>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 My Company. All rights reserved.{""}
          </Typography>

          <Typography variant="body2" component="p" align="center">
            Made with me {""}
          </Typography>

          <Typography variant="body2" component="p" align="center">
            Icons made by {""}
            <Link href="#" color="inherit" underline="always">
              Freepik
            </Link>
            {""} from {""}
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
