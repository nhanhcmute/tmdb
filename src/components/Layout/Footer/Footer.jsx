import React from "react";
import { Box, Typography, Link, List, ListItem } from "@mui/material";
import footerLogo from "../../../assets/images/footer_logo.svg";

function Footer() {
  return (
    <Box className="footer" display="flex" flexWrap="wrap">
      <Box className="logo-div mr" mr={4}>
        <img src={footerLogo} alt="TMDB Logo" className="tmdb-footer-logo" />
        <Link href="#" underline="none" sx={{ display: 'block', mt: 1 }}>
          JOIN THE COMMUNITY
        </Link>
      </Box>

      <Box className="info-div mr" mr={4}>
        <Typography component="h3" sx={{
          fontSize: '17px !important',
          fontWeight: 700,
          whiteSpace: 'nowrap',
          color: '#ffffff'
        }} >
          THE BASICS
        </Typography>
        <List dense sx={{ paddingLeft: 0 }}>
          <ListItem sx={{ paddingLeft: 0 }}><Link href="#" underline="none">About TMDB</Link></ListItem>
          <ListItem sx={{ paddingLeft: 0 }}><Link href="#" underline="none">Contact Us</Link></ListItem>
          <ListItem sx={{ paddingLeft: 0 }}><Link href="#" underline="none">Support Forums</Link></ListItem>
          <ListItem sx={{ paddingLeft: 0 }}><Link href="#" underline="none">API Documentation</Link></ListItem>
          <ListItem sx={{ paddingLeft: 0 }}><Link href="#" underline="none">System Status</Link></ListItem>
        </List>
      </Box>

      <Box className="info-div mr" mr={4}>
        <Typography component="h3" sx={{
          fontSize: '17px !important',
          fontWeight: 700,
          whiteSpace: 'nowrap',
          color: '#ffffff'
        }}  >
          GET INVOLVED
        </Typography>
        <List dense sx={{ paddingLeft: 0 }}>
          <ListItem sx={{ paddingLeft: 0 }}>
            <Link href="#" underline="none">Contribution Bible</Link>
          </ListItem>
          <ListItem sx={{ paddingLeft: 0 }}>
            <Link href="#" underline="none">Add New Movie</Link>
          </ListItem>
          <ListItem sx={{ paddingLeft: 0 }}>
            <Link href="#" underline="none">Add New TV Show</Link>
          </ListItem>
        </List>
      </Box>

      <Box className="info-div mr" mr={4}>
        <Typography component="h3" sx={{
          fontSize: '17px !important',
          fontWeight: 700,
          whiteSpace: 'nowrap',
          color: '#ffffff'
        }} >
          COMMUNITY
        </Typography>
        <List dense sx={{ paddingLeft: 0 }}>
          <ListItem sx={{ paddingLeft: 0 }}><Link href="#" underline="none">Guidelines</Link></ListItem>
          <ListItem sx={{ paddingLeft: 0 }}><Link href="#" underline="none">Discussions</Link></ListItem>
          <ListItem sx={{ paddingLeft: 0 }}><Link href="#" underline="none">Leaderboard</Link></ListItem>
          <ListItem sx={{ paddingLeft: 0 }}><Link href="#" underline="none">Twitter</Link></ListItem>
        </List>
      </Box>

      <Box className="info-div">
        <Typography component="h3" sx={{
          fontSize: '17px !important',
          fontWeight: 700,
          whiteSpace: 'nowrap',
          color: '#ffffff'
        }}  >
          LEGAL
        </Typography>
        <List dense sx={{ paddingLeft: 0 }}>
          <ListItem sx={{ paddingLeft: 0 }}><Link href="#" underline="none">Terms of Use</Link></ListItem>
          <ListItem sx={{ paddingLeft: 0 }}><Link href="#" underline="none">API Terms of Use</Link></ListItem>
          <ListItem sx={{ paddingLeft: 0 }}><Link href="#" underline="none">Privacy Policy</Link></ListItem>
          <ListItem sx={{ paddingLeft: 0 }}><Link href="#" underline="none">DMCA Policy</Link></ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Footer;
