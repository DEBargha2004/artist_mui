"use client";

import { Container, FormControlLabel, Switch, TextField } from "@mui/material";
import styles from "@/styles/modules/Artwork.module.scss";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import Image from "next/image";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const GalleryIndex = () => {
  const theme = useTheme();
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Container maxWidth={false} disableGutters className={styles.formContainer}>
      <div className={styles.formDetails}>
        <h3>Add New Project</h3>
        <div className={styles.formWrapper}>
          {/* Title  */}
          <div>
            <h4>Title</h4>
            <div className={styles.projectTitle}>
              <TextField
                id="outlined-basic"
                label="Project Title"
                variant="outlined"
              />
            </div>
          </div>

          {/* Description  */}
          <div>
            <h4>Description</h4>
            <div>
              <TextField
                sx={{ backgroundColor: "#1C1C1C", borderRadius: "4px" }}
                fullWidth
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={10}
              />
            </div>
          </div>

          {/* Media Content  */}
          <div>
            <h4>Media</h4>
            <div className={styles.mediaOptions}>
              <div>
                <p>
                  <span>
                    <PhotoSizeSelectActualOutlinedIcon />
                  </span>
                  <span>Artwork</span>
                </p>
              </div>
              <div>
                <p>
                  <span>
                    <SmartDisplayOutlinedIcon />
                  </span>
                  <span>Video Link</span>
                </p>
              </div>
            </div>
            <div className={styles.mediaContainer}>
              <div className={styles.singleMedia}>
                <div className={styles.mediaBar}>
                  <p>Image</p>
                  <CloseOutlinedIcon />
                </div>
                <div>
                  <Image
                    src="https://cdna.artstation.com/p/assets/images/images/073/734/536/large/cat-newspaperrainlandwm2.jpg?1710349411"
                    alt="artwork"
                    width={800}
                    height={450}
                    layout="responsive"
                  />
                </div>
              </div>
              <div className={styles.singleMedia}>
                <div className={styles.mediaBar}>
                  <p>Video Link</p>
                  <CloseOutlinedIcon />
                </div>
                <TextField
                  id="inputField"
                  // label="Video Link"
                  variant="outlined"
                  defaultValue="https://www.youtube.com/watch?v=cen0rBKLuYE"
                />
              </div>

              {/* <div className={styles.mediaOptions}>
                <div>
                  <p>
                    <span>
                      <PhotoSizeSelectActualOutlinedIcon />
                    </span>
                    <span>Artwork</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span>
                      <SmartDisplayOutlinedIcon />
                    </span>
                    <span>Video Link</span>
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Subject Matter  */}

          <div>
            <h4>Subject Matter</h4>
            <div>
              {/* <InputLabel id="demo-multiple-chip-label">Subject Matter</InputLabel> */}
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                sx={{ width: "100%" }}
                placeholder="Subject Matter"
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>
          {/* Adult & Ai  */}
          <div className={styles.matureAi}>
            <h4>Adult & AI</h4>
            <div>
              <FormControlLabel
                control={<Switch defaultChecked={false} />}
                labelPlacement="start"
                label="Mature Content"
              />
              <FormControlLabel
                control={<Switch defaultChecked={false} />}
                labelPlacement="start"
                label="Created using AI"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.formActions}>
        <div className={styles.actionThumbnail}>
          <button>Add Thumbnail</button>
        </div>
        <div className={styles.actionButtons}>
          <button>Publish</button>
          <button>Delete</button>
        </div>
      </div>
    </Container>
  );
};

export default GalleryIndex;
