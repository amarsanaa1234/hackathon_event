import React from "react";
import { AiFillCodeSandboxCircle, AiFillHome } from "react-icons/ai";
import { BsFillCalendarDateFill, BsYoutube, BsDiscord } from "react-icons/bs";
import {
  RiQuestionAnswerFill,
  RiTeamFill,
  RiInstagramFill,
} from "react-icons/ri";
import { SiWebmoney } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

import "./header.css";

function Header() {
  return (
    <>
      <div class="wrapper">
        <div class="navbar">
          <div class="navbar__item -blue">
            <a href="#">
              <span class="navbar__icon">
                <AiFillHome />
                <span class="tooltiptext">Нүүр</span>
              </span>
            </a>
          </div>
          <div class="navbar__item -orange">
            <a href="#hutulbur">
              <span class="navbar__icon">
                <BsFillCalendarDateFill />
                <span class="tooltiptext">Хөтөлбөр</span>
              </span>
            </a>
          </div>
          <div class="navbar__item -yellow">
            <a href="#sponser">
              <span class="navbar__icon">
                <AiFillCodeSandboxCircle />
                <span class="tooltiptext">Sponser</span>
              </span>
            </a>
          </div>
          <div class="navbar__item -navy-blue">
            <a href="#mentor">
              <span class="navbar__icon">
                <RiTeamFill />
                <span class="tooltiptext">Mentor</span>
              </span>
            </a>
          </div>
          <div class="navbar__item -purple">
            <a href="#footer">
              <span class="navbar__icon">
                <RiQuestionAnswerFill />
                <span class="tooltiptext">FAQ</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="wrapper-contact">
        <div class="navbar">
          <div class="navbar__item__contact -white">
            <a href="https://www.facebook.com/SysAndCoTech">
              <span class="navbar__icon">
                <FaFacebook />
                <span class="tooltiptext_contact">Facebook</span>
              </span>
            </a>
          </div>
          <div class="navbar__item__contact -white">
            <a href="https://www.instagram.com/syscotechclub_/">
              <span class="navbar__icon">
                <RiInstagramFill />
                <span class="tooltiptext_contact">Instagram</span>
              </span>
            </a>
          </div>
          <div class="navbar__item__contact -white">
            <a href="https://discord.gg/">
              <span class="navbar__icon">
                <BsDiscord />
                <span class="tooltiptext_contact">Discord</span>
              </span>
            </a>
          </div>
          <div class="navbar__item__contact -white">
            <a href="https://syscotech.club/">
              <span class="navbar__icon">
                <SiWebmoney />
                <span class="tooltiptext_contact">Website</span>
              </span>
            </a>
          </div>
          <div class="navbar__item__contact -white">
            <a href="https://www.youtube.com/@syscotechclub6784">
              <span class="navbar__icon">
                <BsYoutube />
                <span class="tooltiptext_contact">Youtube</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
