import styled from 'styled-components'

import { device } from '@/utils/device'
import TopImage from '@/assets/img/top-image.png'
import { SecondaryButton } from '@/components/Buttons'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;

  width: 100%;
  padding: var(--spacing-8);

  gap: var(--spacing-4);
`

export const TopContainer = styled.section`
  width: 100%;
  height: 400px;

  background-image: url('${TopImage.src}');
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: var(--spacing-6);

  p:nth-child(1) {
    margin-left: 10%;
  }

  p:nth-child(2) {
    margin-left: 20%;
  }

  p:nth-child(3) {
    margin-left: 30%;
  }

  button:nth-child(4) {
    margin-left: 60%;
  }

  @media ${device.tablet} {
    height: 500px;
  }

  @media ${device.laptop} {
    height: 600px;
  }
`

export const CallToAction = styled.p`
  color: var(--white);
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 4.5vw;
  font-weight: var(--fw-bold);
  text-transform: uppercase;
`

export const LetsGoButton = styled(SecondaryButton)`
  width: 100%;
  max-width: 30vw;
  min-height: 63px;

  border-radius: 34px;
  background: #002b9b;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  color: var(--white);
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 2.5vw;
  font-weight: var(--fw-bold);
  text-transform: uppercase;

  @media ${device.tablet} {
    min-height: 83px;
  }

  @media ${device.laptop} {
    min-height: 103px;
  }
`

export const VacancyList = styled.section`
  width: 100%;
`

export const Title = styled.h1<{ asFinal?: boolean }>`
  --color: ${(props) => (props.asFinal ? '#FA4F4F' : '#1592e3')};

  color: var(--color);
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  font-size: var(--fontsize-24);

  @media ${device.mobileXL} {
    font-size: var(--fontsize-32);
  }

  @media ${device.tablet} {
    font-size: var(--fontsize-48);
  }
`

export const Line = styled.hr`
  display: block;

  width: 30%;
  height: 4px;

  background-color: var(--black);

  margin-bottom: var(--spacing-4);
`

export const VacancyContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--spacing-3);

  width: 100%;
  padding: var(--spacing-4);

  overflow-x: auto;
  scrollbar-width: none;
`
