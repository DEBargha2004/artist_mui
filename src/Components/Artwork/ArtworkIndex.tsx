import { Container } from '@mui/material'
import React from 'react'
import ArtworkMedia from './ArtworkComponents/ArtworkMedia'
import ArtworkInfo from './ArtworkComponents/ArtworkInfo'
import styles from "@/styles/modules/Artwork.module.scss";

const ArtworkIndex = () => {
  return (
    <Container maxWidth={false} disableGutters className={styles.artworkWrapper}>
        <ArtworkMedia />
        <ArtworkInfo />
    </Container>
  )
}

export default ArtworkIndex