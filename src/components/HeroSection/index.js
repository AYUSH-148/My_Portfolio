import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialLinks, SocialLink, ResumeButton } from './HeroStyle'
import MyImg from '../../images/MyImg4.jpeg'
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <SocialLinks>
                            <SocialLink href={Bio.github} target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></SocialLink>
                            <SocialLink href={Bio.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></SocialLink>
                            <SocialLink href={Bio.leetcode} target="_blank" rel="noopener noreferrer" title="LeetCode"><SiLeetcode /></SocialLink>
                            <SocialLink href={Bio.medium} target="_blank" rel="noopener noreferrer" title="Medium"><FaMedium /></SocialLink>
                        </SocialLinks>
                        <ResumeButton href={Bio.resume} target='_blank' rel="noopener noreferrer">Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={MyImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection