import { Container } from "@mui/material";
import styles from "@/styles/modules/Search.module.scss";
import Image from "next/image";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import data from "../../../../public/data/artists.json";

const SearchArtists = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={styles.artworkContainer}
    >
      <p>{data?.total_count} Results</p>
      <div className={styles.artistWrapper}>
        {/* Mapping each artist card  */}

        {data?.data?.map((data) => (
          <div key={data?.id} className={styles.artistCard}>
            {/* Artist Details  */}
            <div className={styles.artistInfo}>
              {/* Avatar  */}
              <div>
                {/* <Image /> */}
                <Image
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    border: "2px solid white",
                    // backgroundColor: "lavender",
                    // backgroundColor: "burlywood",
                    // position: "relative",
                    // bottom: "5rem",ss
                    textAlign: "center",
                  }}
                  src={data?.large_avatar_url}
                  alt="artist"
                  layout="responsive"
                  width={72}
                  height={72}
                />
              </div>
              {/* Details  */}
              <div className={styles.artistDetails}>
                {/* Details  */}
                <p>{data?.full_name}</p>
                <span>{data?.headline}</span>
                <small>{data?.location}</small>
                <button>
                  <PersonAddIcon />
                  Follow
                </button>
              </div>
            </div>

            {/* Artist Posts  */}
            <div className={styles.artistPosts}>
              {/* mapping of images */}
              {data?.sample_projects?.slice(0, 3)?.map((post) => (
                <div key={post?.id}>
                  <Image
                    src={post?.smaller_square_cover_url}
                    alt="posts"
                    layout="responsive"
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <div className={styles.artworkWrapper}>
      {data?.data?.map((image) => (
        <div key={image.id}>
          <Image
            src={image?.smaller_square_cover_url}
            alt={image?.title}
            width={240}
            height={240}
            style={{
              objectFit: "cover",
              margin: "0px",
              padding: "0px",
              borderRadius: "0.5rem",
              paddingInline: "4px",
              // maxHeight: '240px',
              // maxWidth: '240px'
            }}
            layout="responsive"
          />
        </div>
      ))}
    </div> */}
    </Container>
  );
};

export default SearchArtists;
