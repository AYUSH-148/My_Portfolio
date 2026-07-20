import React from 'react'
import styled from 'styled-components'
import { FaTrophy } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'

const Card = styled.div`
    width: 380px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.card};
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    border: 0.1px solid #854CE6;
    padding: 22px 24px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        width: 100%;
        padding: 18px 16px;
    }
`

const Top = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
`

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: #FFD70022;
    color: #FFD700;
    font-size: 20px;
    flex-shrink: 0;
`

const TitleBlock = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    font-size: 17px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
`

const Issuer = styled.div`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
`

const Description = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
`

const PreviewFrame = styled.iframe`
    width: 100%;
    height: 200px;
    border: none;
    border-radius: 8px;
    background: ${({ theme }) => theme.white};
`

const ViewButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
    }
`

const toPreviewLink = (link) => link.replace('/view', '/preview').split('?')[0]

const CertificationCard = ({ certification }) => {
    return (
        <Card>
            <Top>
                <IconWrapper>
                    <FaTrophy />
                </IconWrapper>
                <TitleBlock>
                    <Title>{certification.title}</Title>
                    <Issuer>{certification.issuer}</Issuer>
                </TitleBlock>
            </Top>
            <Description>{certification.desc}</Description>
            <PreviewFrame src={toPreviewLink(certification.link)} title={certification.title} allow="autoplay" />
            <ViewButton href={certification.link} target="_blank" rel="noopener noreferrer">
                View Full Certificate <HiOutlineExternalLink />
            </ViewButton>
        </Card>
    )
}

export default CertificationCard
