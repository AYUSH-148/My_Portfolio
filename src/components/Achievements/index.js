import React from 'react'
import styled from 'styled-components'
import { leetcodeStats, certifications } from '../../data/constants'
import LeetCodeCard from '../Cards/LeetCodeCard'
import CertificationCard from '../Cards/CertificationCard'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 40px 0px 60px 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 0px 16px;
    gap: 12px;
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    gap: 24px;
    margin-top: 30px;
`;

const Achievements = () => {
    return (
        <Container id="achievements">
            <Wrapper>
                <Title>Achievements</Title>
                <Desc>
                    A snapshot of my competitive programming standing and recognitions earned along the way.
                </Desc>
                <CardWrapper>
                    <LeetCodeCard stats={leetcodeStats} />
                    {certifications.map((certification) => (
                        <CertificationCard key={certification.id} certification={certification} />
                    ))}
                </CardWrapper>
            </Wrapper>
        </Container>
    )
}

export default Achievements
