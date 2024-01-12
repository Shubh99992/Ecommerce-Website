import { Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/base";
import { Box } from "@mui/system";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import "./DeliveryForm.css";
const DeleveryForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const details = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      StreetAddress: data.get("address"),
      state: data.get("state"),
      city: data.get("city"),
      zipCode: data.get("zip"),
      Mobile: data.get("phoneNumber"),
    };
    console.log("Address", details);
  };
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className="billu p-5 shadow-lg rounded-s-md border "
          style={{ borderRadius: "0.5rem", marginTop: "2rem" }}
        >
          {/*overflow-y-scroll     for scroll bar on y axis*/}
          <div
            style={{ margin: " 2px 95px 2px 65px" }}
            className="billu2 p-5 shadow-lg rounded-s-md border "
          >
            <AddressCard />
            <Button
              type="submit"
              className="mt-10 flex  items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              DELIVER HERE
            </Button>
          </div>
          
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border  shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid contained spacing={3}>
                <div className="flex">
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>
                  <Grid style={{ marginLeft: 5 }} item xs={12} sm={6}>
                    <TextField
                      required
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>
                </div>

                <Grid style={{ marginTop: 10 }} item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    multiline
                    rows={4}
                    autoComplete="given-name"
                  />
                </Grid>

                <div style={{ marginTop: 10 }} className="flex">
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="city"
                      name="city"
                      label="City"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>
                  <Grid style={{ marginLeft: 5 }} item xs={12} sm={6}>
                    <TextField
                      required
                      id="state"
                      name="state"
                      label="State/Province/Rigion"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>
                </div>

                <div style={{ marginTop: 10 }} className="flex">
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="zip"
                      name="zip"
                      label="Zip / Postal Code"
                      fullWidth
                      autoComplete="shipping postal-code"
                    />
                  </Grid>
                  <Grid style={{ marginLeft: 5 }} item xs={12} sm={6}>
                    <TextField
                      required
                      id="phoneNumber"
                      name="phoneNumber"
                      label="Phone Number "
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>
                </div>
                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    className="mt-10 flex  items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Ready To Go &nbsp; <ShoppingCartCheckoutIcon />
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeleveryForm;
