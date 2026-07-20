import React from 'react'
import styled from 'styled-components'
import { SiLeetcode } from 'react-icons/si'
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
    gap: 18px;
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
    justify-content: space-between;
`

const TitleGroup = styled.div`
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
    background: ${({ theme }) => theme.primary + 20};
    color: ${({ theme }) => theme.primary};
    font-size: 22px;
`

const Name = styled.div`
    font-size: 19px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
`

const Badge = styled.div`
    font-size: 12px;
    font-weight: 600;
    color: #FFD700;
    background: #FFD70022;
    border: 1px solid #FFD70055;
    padding: 4px 12px;
    border-radius: 20px;
    white-space: nowrap;
`

const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
`

const Stat = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`

const StatValue = styled.div`
    font-size: 22px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 768px){
        font-size: 18px;
    }
`

const StatLabel = styled.div`
    font-size: 12.5px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
`

const ViewProfile = styled.a`
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

const LeetCodeCard = ({ stats }) => {
    return (
        <Card>
            <Top>
                <TitleGroup>
                    <IconWrapper>
                        <SiLeetcode />
                    </IconWrapper>
                    <Name>LeetCode</Name>
                </TitleGroup>
                <Badge>{stats.badge}</Badge>
            </Top>
            <StatsGrid>
                <Stat>
                    <StatValue>{stats.rating}</StatValue>
                    <StatLabel>Contest Rating</StatLabel>
                </Stat>
                <Stat>
                    <StatValue>{stats.contestsAttended}</StatValue>
                    <StatLabel>Contests Attended</StatLabel>
                </Stat>
                <Stat>
                    <StatValue>{stats.globalRanking}</StatValue>
                    <StatLabel>Global Rank (of {stats.totalUsers})</StatLabel>
                </Stat>
            </StatsGrid>
            <ViewProfile href={stats.profile} target="_blank" rel="noopener noreferrer">
                View Profile <HiOutlineExternalLink />
            </ViewProfile>
        </Card>
    )
}

export default LeetCodeCard
