import React, { useState } from "react";
import { Box, Typography, FormControlLabel, Checkbox, FormGroup } from "@mui/material";

function Availability() {
  const [showAvailability, setShowAvailability] = useState(true);

  const [showStream, setShowStream] = useState(true);
  const [showFree, setShowFree] = useState(true);
  const [showAds, setShowAds] = useState(true);
  const [showRent, setShowRent] = useState(true);
  const [showBuy, setShowBuy] = useState(true);

  return (
    <Box className="filter">
      <Typography variant="h6" className="availibility-heading">
        Availabilities
      </Typography>

      {/* Checkbox "Search all availabilities?" */}
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              id="availability"
              checked={showAvailability}
              onChange={() => setShowAvailability(!showAvailability)}
              className="availability-input"
            />
          }
          label="Search all availabilities?"
          htmlFor="availability"
        />
      </FormGroup>

      {/* Availability Wrapper starts */}
      {!showAvailability && (
        <Box className="availability-wrapper">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  id="ott_monetization_type_stream"
                  checked={showStream}
                  onChange={() => setShowStream(!showStream)}
                  className="availability-input"
                />
              }
              label="Stream"
              htmlFor="ott_monetization_type_stream"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="ott_monetization_type_free"
                  checked={showFree}
                  onChange={() => setShowFree(!showFree)}
                  className="availability-input"
                />
              }
              label="Free"
              htmlFor="ott_monetization_type_free"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="ott_monetization_type_ads"
                  checked={showAds}
                  onChange={() => setShowAds(!showAds)}
                  className="availability-input"
                />
              }
              label="Ads"
              htmlFor="ott_monetization_type_ads"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="ott_monetization_type_rent"
                  checked={showRent}
                  onChange={() => setShowRent(!showRent)}
                  className="availability-input"
                />
              }
              label="Rent"
              htmlFor="ott_monetization_type_rent"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="ott_monetization_type_buy"
                  checked={showBuy}
                  onChange={() => setShowBuy(!showBuy)}
                  className="availability-input"
                />
              }
              label="Buy"
              htmlFor="ott_monetization_type_buy"
            />
          </FormGroup>
        </Box>
      )}
      {/* Availability Wrapper ends */}
    </Box>
  );
}

export default Availability;
