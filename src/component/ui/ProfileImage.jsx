import React from "react";
import { useState, useRef } from "react";
import { Avatar } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import Button from '@mui/material/Button';



function ProfileImage(props) {
  const [open, setOpen] = useState(false);

  const [Image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const fileInput = useRef(null);

  const onChange = (e) => {
    if (e.target.files[0]) {
      //setFile(e.target.files[0])
    } else {
      //업로드 취소할 시
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
      return;
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div>
      <Avatar
        src={Image}
        style={{ margin: "1vw", width: "20vw", height: "20vw" }}
        onClick={() => {
          setOpen(true);
        }}
      />
      <Dialog open={open}>
        <DialogTitle>Profile Image</DialogTitle>

        <DialogActions>
          <Button variant="outlined" > 크게 보기 </Button>

          <Button variant="outlined"> 변경하기 </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setOpen(false);
            }}
          >
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProfileImage;
