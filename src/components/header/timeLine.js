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
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0", fontSize: "1.5rem" }}
          align="right"
          variant="body2"
          color="gray"
        >
          4.2 - 4.24 April 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success" sx={{ width: 52, height: 52 }}>
            <HowToRegTwoToneIcon sx={{ fontSize: 40 }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span" sx={{ fontSize: "2rem" }}>
            Бүртгэлийн хугацаа
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontFamily: "Podkova" }}>
            Бүртгэл нээгдэж байгаа бөгөөд оюутнууд өөр өөрсдийн<br></br> баг
            болон Hackathon-ийн төслийн санааг бүртгүүлэх <br></br>боломжтой.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0", fontSize: "1.5rem" }}
          variant="body2"
          color="gray"
        >
          4.25 April 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" sx={{ width: 52, height: 52 }}>
            <LaptopMacIcon sx={{ fontSize: 40 }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span" sx={{ fontSize: "2rem" }}>
            Техникийн зөвлөгөөн
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontFamily: "Podkova" }}>
            Because it&apos;s awesome!
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0", fontSize: "1.5rem" }}
          variant="body2"
          color="gray"
        >
          4.26 April 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            color="primary"
            variant="outlined"
            sx={{ width: 52, height: 52 }}
          >
            <EmojiPeopleIcon sx={{ fontSize: 40 }} />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "white" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span" sx={{ fontSize: "2rem" }}>
            Hackathon үйл ажиллагаа
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontFamily: "Podkova" }}>
            Hackathon нь төрөл бүрийн зочдын лекц, семинар, төслийн<br></br>{" "}
            үнэлгээнээс бүрдэх хоёр өдрийн арга хэмжээ болно.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {/* <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0", fontSize: "1.5rem" }}
          variant="body2"
          color="gray"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary" sx={{ width: 52, height: 52 }}>
            <RepeatIcon sx={{ fontSize: 40 }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span" sx={{ fontSize: "2rem" }}>
            Repeat
          </Typography>
          <Typography sx={{ fontSize: "1.7rem" }}>
            Because this is the life you love!
          </Typography>
        </TimelineContent>
      </TimelineItem> */}
    </Timeline>
  );
}
