import React from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import {
  SiWhatsapp,
  SiFacebook,
  SiTiktok,
  SiGithub,
  SiInstagram,
  SiLinkedin,
} from "react-icons/si";
import "aos/dist/aos.css";
import DialogClose from "../../assets/DialogClose.png";

const ContactMe = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      data-aos="flip-down"
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
        }}
      >
        <img src={DialogClose} alt="Close" style={{ height: 20, width: 20 }} />
      </IconButton>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: 30, m: 1 }}>
            Contact Information
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <SiWhatsapp size={24} /> +94 76 570 8684
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <SiLinkedin size={24} /> Nuwin Vinwath
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <SiFacebook size={24} /> Nuwin Vinwath
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <SiGithub size={24} /> nuwin2003
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <SiInstagram size={24} /> nuwin.__
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <SiTiktok size={24} /> @nuwin_vinwath
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ContactMe;
