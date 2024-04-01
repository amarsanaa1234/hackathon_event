import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import HowToRegTwoToneIcon from "@mui/icons-material/HowToRegTwoTone";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function CustomizedTimeline() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Timeline position={isSmallScreen ? "left" : "alternate"}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            m: "auto 0",
            fontSize: "1.5rem",
            textAlign: isSmallScreen ? "left" : "right",
          }}
          align={isSmallScreen ? "left" : "right"}
          variant="body2"
          color="gray"
        >
          4.2 - 4.24 April 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success">
            <HowToRegTwoToneIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "20px", px: 2 }}>
          <Typography variant="h6" component="span" sx={{ fontWeight: "bold" }}>
            Бүртгэлийн хугацаа
          </Typography>
          <Typography sx={{ fontFamily: "Podkova", fontSize: "1.1rem" }}>
            Бүртгэл нээгдэж байгаа бөгөөд оюутнууд өөр өөрсдийн<br></br> баг
            болон Hackathon-ийн төслийн санааг бүртгүүлэх боломжтой.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            m: "auto 0",
            fontSize: "1.5rem",
            textAlign: isSmallScreen ? "left" : "right",
          }}
          variant="body2"
          color="gray"
        >
          4.25 April 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "20px", px: 2 }}>
          <Typography variant="h6" component="span" sx={{ fontWeight: "bold" }}>
            Техникийн зөвлөгөөн
          </Typography>
          <Typography sx={{ fontFamily: "Podkova", fontSize: "1.2rem" }}>
            Because it&apos;s awesome!
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            m: "auto 0",
            fontSize: "1.5rem",
            textAlign: isSmallScreen ? "left" : "right",
          }}
          variant="body2"
          color="gray"
        >
          4.26 April 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <EmojiPeopleIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "20px", px: 2 }}>
          <Typography variant="h6" component="span" sx={{ fontWeight: "bold" }}>
            Үйл ажиллагаа
          </Typography>
          <Typography sx={{ fontFamily: "Podkova", fontSize: "1.2rem" }}>
            Hackathon нь төрөл бүрийн зочдын лекц, семинар, төслийн<br></br>{" "}
            үнэлгээнээс бүрдэх хоёр өдрийн арга хэмжээ болно.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
