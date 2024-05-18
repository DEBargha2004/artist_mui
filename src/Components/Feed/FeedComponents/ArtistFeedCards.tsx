import { Container } from "@mui/material";
import styles from "@/styles/modules/Feed.module.scss";
import Image from "next/image";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const ArtistFeedCards = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      className={styles.feedCardContainer}
    >
      {/* Card 1 */}
      <div className={styles.singleCardWrapper}>
        <div className={styles.singleCardHeader}>
          <div>
            <Image
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                border: "2px solid white",
                textAlign: "center",
              }}
              src="https://cdnb.artstation.com/p/users/avatars/000/134/037/medium/908f5d41849c485f4498c15c2f0b8556.jpg?1464187107"
              alt="post"
              width={42}
              height={42}
              //   layout="responsive"
            />
          </div>
          <div>
            <p>Dao Trong Le</p>
            <span>Founder and Art Director at Bubble Cat</span>
          </div>
        </div>

        <div className={styles.singleCardImage}>
          <Image
            src="https://cdna.artstation.com/p/assets/images/images/064/949/234/4k/dao-trong-le-8.jpg?1689145173"
            alt="thumbnail"
            width={300}
            height={300}
            layout="responsive"
          />
        </div>

        <div className={styles.singleCardDetails}>
          <div>
            <div>
              <p>
                <FavoriteBorderOutlinedIcon />
                <span>12</span>
              </p>
              <p>
                <ChatBubbleOutlineOutlinedIcon />
                <span>9</span>
              </p>
              <p>
                <SendRoundedIcon />
                <span>52</span>
              </p>
            </div>
            <div>
              <BookmarkBorderOutlinedIcon />
            </div>
          </div>
          <div>
            <p>Lead Character Artist</p>
            <span>Texture Artist</span>
          </div>
        </div>
      </div>

      {/* Card 2 */}

      <div className={styles.singleCardWrapper}>
        <div className={styles.singleCardHeader}>
          <div>
            <Image
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                border: "2px solid white",
                textAlign: "center",
              }}
              src="https://cdnb.artstation.com/p/users/avatars/009/299/813/medium/b3230595ea736c73ac59f4f9cf5b5b16.jpg?1699585643"
              alt="post"
              width={42}
              height={42}
              //   layout="responsive"
            />
          </div>
          <div>
            <p>Cat</p>
            <span>Digital Artist</span>
          </div>
        </div>

        <div>
          <Image
            src="https://cdnb.artstation.com/p/assets/images/images/073/734/513/large/cat-newspaperrainsqwm1.jpg?1710349382"
            alt="thumbnail"
            width={300}
            height={300}
            layout="responsive"
          />
        </div>

        <div className={styles.singleCardDetails}>
          <div>
            <div>
              <p>
                <FavoriteBorderOutlinedIcon />
                <span>12</span>
              </p>
              <p>
                <ChatBubbleOutlineOutlinedIcon />
                <span>9</span>
              </p>
              <p>
                <SendRoundedIcon />
                <span>52</span>
              </p>
            </div>
            <div>
              <BookmarkBorderOutlinedIcon />
            </div>
          </div>
          <div>
            <p>Newspaper Rain</p>
            <span>Chronicles of Light in Urban Canvas</span>
          </div>
        </div>
      </div>

      {/* Card 3  */}

      <div className={styles.singleCardWrapper}>
        <div className={styles.singleCardHeader}>
          <div>
            <Image
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                border: "2px solid white",
                textAlign: "center",
              }}
              src="https://cdna.artstation.com/p/users/avatars/000/016/704/medium/19d6188ebf1db0f7c63ea93821a81d51.jpg?1514803418"
              alt="post"
              width={42}
              height={42}
              //   layout="responsive"
            />
          </div>
          <div>
            <p>Pengzhen Zhang</p>
            <span>Senior concept artist@Ubisoft Montreal</span>
          </div>
        </div>

        <div>
          <Image
            src="https://cdna.artstation.com/p/assets/images/images/075/170/028/4k/pengzhen-zhang-2024-4-15.jpg?1713910831"
            alt="thumbnail"
            width={300}
            height={300}
            layout="responsive"
          />
        </div>

        <div className={styles.singleCardDetails}>
          <div>
            <div>
              <p>
                <FavoriteBorderOutlinedIcon />
                <span>12</span>
              </p>
              <p>
                <ChatBubbleOutlineOutlinedIcon />
                <span>9</span>
              </p>
              <p>
                <SendRoundedIcon />
                <span>52</span>
              </p>
            </div>
            <div>
              <BookmarkBorderOutlinedIcon />
            </div>
          </div>
          <div>
            <p>Waterfall</p>
            <span>3D assets collaborated with @Liang Yao.</span>
          </div>
        </div>
      </div>

      {/* Card 4 */}

      <div className={styles.singleCardWrapper}>
        <div className={styles.singleCardHeader}>
          <div>
            <Image
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                border: "2px solid white",
                textAlign: "center",
              }}
              src="https://cdna.artstation.com/p/users/avatars/000/012/248/medium/39569017f3c38ac8ba713961afea6fa5.jpg?1479554485"
              alt="post"
              width={42}
              height={42}
              //   layout="responsive"
            />
          </div>
          <div>
            <p>lok du</p>
            <span>Lore Art Studios Founder
</span>
          </div>
        </div>

        <div>
          <Image
            src="https://cdnb.artstation.com/p/assets/images/images/075/140/491/large/lok-du-1.jpg?1713857494"
            alt="thumbnail"
            width={300}
            height={300}
            layout="responsive"
          />
        </div>

        <div className={styles.singleCardDetails}>
          <div>
            <div>
              <p>
                <FavoriteBorderOutlinedIcon />
                <span>12</span>
              </p>
              <p>
                <ChatBubbleOutlineOutlinedIcon />
                <span>9</span>
              </p>
              <p>
                <SendRoundedIcon />
                <span>52</span>
              </p>
            </div>
            <div>
              <BookmarkBorderOutlinedIcon />
            </div>
          </div>
          <div>
            <p>Lead Character Artist</p>
            <span>Texture Artist</span>
          </div>
        </div>
      </div>

      {/* Card 5  */}

      <div className={styles.singleCardWrapper}>
        <div className={styles.singleCardHeader}>
          <div>
            <Image
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                border: "2px solid white",
                textAlign: "center",
              }}
              src="https://cdna.artstation.com/p/users/avatars/000/684/064/medium/d91d374144daf7c48f60fe5d198c637a.jpg?1521494418"
              alt="post"
              width={42}
              height={42}
              //   layout="responsive"
            />
          </div>
          <div>
            <p>John Park</p>
            <span>Brainstorm School</span>
          </div>
        </div>

        <div>
          <Image
            src="https://cdna.artstation.com/p/assets/images/images/075/210/412/large/john-park-medici-train-a.jpg?1713996592"
            alt="thumbnail"
            width={300}
            height={300}
            layout="responsive"
          />
        </div>

        <div className={styles.singleCardDetails}>
          <div>
            <div>
              <p>
                <FavoriteBorderOutlinedIcon />
                <span>12</span>
              </p>
              <p>
                <ChatBubbleOutlineOutlinedIcon />
                <span>9</span>
              </p>
              <p>
                <SendRoundedIcon />
                <span>52</span>
              </p>
            </div>
            <div>
              <BookmarkBorderOutlinedIcon />
            </div>
          </div>
          <div>
            <p>Lead Character Artist</p>
            <span>Texture Artist</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ArtistFeedCards;
