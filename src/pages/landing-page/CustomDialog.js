import * as React from "react";
import PropTypes from "prop-types";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import './CustomDialog.css';

const BootstrapDialog = styled(Dialog)(() => ({
  "& .MuiDialogContent-root": {
    padding: "24px !important" ,
    width: "368px"
  }
}));

function BootstrapDialogTitle(props) {
  const { onClose } = props;

  return (
    <DialogTitle sx={{height:"48px"}}>
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            left: 8,
            top: 8,
            color: "black"
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default function CustomDialog(props) {


  return (
      <BootstrapDialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={props.handleClose}
        >
          Modal title
        </BootstrapDialogTitle>
        <DialogContent>
          <Typography variant="h4" sx={{ mb: "24px" }}>
            Pick a time
          </Typography>
          <Box className="datePickerDiv">
          <select className="datePicker" style={{borderRight:"16px solid transparent", border:"16px solid transparent",  boxSizing:"border-box", height:"48px",width:"100%",backgroundColor:"rgb(238, 238, 238)"}}>
            <option value="10">something</option>
            <option value="10">something</option>
            <option value="10">something</option>
          </select>
          </Box>

          <Box sx={{height:"12px"}}/>
          <Box className="datePickerDiv">
          <select className="datePicker" style={{ borderRight:"16px solid transparent", border:"16px solid transparent", height:"48px",width:"100%",backgroundColor:"rgb(238, 238, 238)"}}>
            <option value="10">something</option>
            <option value="10">something</option>
            <option value="10">something</option>

          </select>
          </Box>
         
          <Button
            disableElevation
            variant="contained"
            size="large"
            sx={{
              "&:hover": { background: "rgb(51,51,51)" },
              mt: "24px",
              backgroundColor: "black",
              color:"white",
              height: "100%",
              width: "100%"              
            }}
          >
            Schedule
          </Button>
          <Button
            disableElevation
            variant="contained"
            size="large"
            sx={{
              "&:hover": { background: "rgb(226,226,226)" },
              mt: "12px",
              backgroundColor: "rgb(238, 238, 238)",
              color: "black",
              height: "100%",
              width: "100%"
            }}
          >
            Deliver now
          </Button>
        </DialogContent>
      </BootstrapDialog>
  );
}
