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
          zIndex: 10,
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
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: 24, sm: 26, md: 28, lg: 30 },
              m: 1,
              textAlign: "center",
            }}
          >
            Contact Information
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },
            }}
          >
            <SiWhatsapp size={24} />
            <Typography>+94 76 570 8684</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },
            }}
          >
            <SiLinkedin size={24} />
            <Typography>Nuwin Vinwath</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },
            }}
          >
            <SiFacebook size={24} />
            <Typography>Nuwin Vinwath</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },
            }}
          >
            <SiGithub size={24} />
            <Typography>nuwin2003</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },
            }}
          >
            <SiInstagram size={24} />
            <Typography>nuwin.__</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },
            }}
          >
            <SiTiktok size={24} />
            <Typography>@nuwin_vinwath</Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ContactMe;
