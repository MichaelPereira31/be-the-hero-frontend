import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-width: 345px;
  min-height: 421px;

  padding: var(--spacing-4);

  border-radius: 19px;
  background: var(--white-50);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  position: relative;
`

export const Image = styled.img`
  width: 300px;
  height: 182px;

  border-radius: 19px 19px 0px 0px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  margin-bottom: var(--spacing-2);
`

export const OngName = styled.p`
  border-radius: 34px;
  background: #1592e3;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  color: var(--white);
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: var(--fontsize-10);
  font-weight: var(--fw-bold);

  position: absolute;
  top: 25px;
  right: 30px;

  padding: var(--spacing-2) var(--spacing-1);
`

export const Title = styled.h2`
  color: var(--black);
  font-size: var(--fontsize-20);
  font-weight: var(--fw-bold);
`

export const SubTitle = styled.h3`
  color: #555;
  font-size: var(--fontsize-14);

  margin-bottom: 14px;
`

export const Description = styled.p`
  color: var(--black);
  font-size: var(--fontsize-12);
  text-align: justify;
`
