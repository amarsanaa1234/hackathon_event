import React from "react";
import { AiFillCodeSandboxCircle, AiFillHome } from "react-icons/ai";
import { BsFillCalendarDateFill, BsYoutube, BsDiscord } from "react-icons/bs";
import { RiQuestionAnswerFill, RiTeamFill, RiInstagramFill } from "react-icons/ri";
import { SiWebmoney } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

import './header.css'

function Header (){
    return(
        <>
            <div class="wrapper">
                <div class="navbar">
                    <div class="navbar__item -blue">
                        <span class="navbar__icon">
                            <AiFillHome />
                            <span class="tooltiptext">Нүүр</span>
                        </span>
                    </div>
                    <div class="navbar__item -orange">
                        <span class="navbar__icon">
                            <BsFillCalendarDateFill />
                            <span class="tooltiptext">Хөтөлбөр</span>
                        </span>
                    </div>
                    <div class="navbar__item -yellow">
                        <span class="navbar__icon">
                            <AiFillCodeSandboxCircle />
                            <span class="tooltiptext">Sponser</span>
                        </span>
                    </div>
                    <div class="navbar__item -navy-blue">
                        <span class="navbar__icon">
                            <RiTeamFill />
                            <span class="tooltiptext">Mentor</span>
                        </span>
                    </div>
                    <div class="navbar__item -purple">
                        <span class="navbar__icon">
                            <RiQuestionAnswerFill />
                            <span class="tooltiptext">FAQ</span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="wrapper-contact">
                <div class="navbar">
                    <div class="navbar__item__contact -white">
                        <span class="navbar__icon">
                        <FaFacebook />
                            <span class="tooltiptext_contact">Facebook</span>
                        </span>
                    </div>
                    <div class="navbar__item__contact -white">
                        <span class="navbar__icon">
                            <RiInstagramFill />
                            <span class="tooltiptext_contact">Instagram</span>
                        </span>
                    </div>
                    <div class="navbar__item__contact -white">
                        <span class="navbar__icon">
                            <BsDiscord />
                            <span class="tooltiptext_contact">Discord</span>
                        </span>
                    </div>
                    <div class="navbar__item__contact -white">
                        <span class="navbar__icon">
                            <SiWebmoney />
                            <span class="tooltiptext_contact">Website</span>
                        </span>
                    </div>
                    <div class="navbar__item__contact -white">
                        <span class="navbar__icon">
                            <BsYoutube />
                            <span class="tooltiptext_contact">Youtube</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;