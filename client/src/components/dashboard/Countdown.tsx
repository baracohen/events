import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface CountdownProps {
  date: Date;
}
const FlipCountdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #fff;
`;

const FlipContainer = styled.div`
  perspective: 1000px;
  position: relative;
  width: 40px;
  height: 50px;
`;



const FlipFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  transform: rotateX(0deg);
  z-index: ${(props: { isFlipped: boolean }) => (props.isFlipped ? '0' : '1')};
`;

const FlipBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #555;
  transform: rotateX(180deg);
  z-index: ${(props: { isFlipped: boolean }) => (props.isFlipped ? '1' : '0')};
`;

const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease-in-out;
  transform: ${(props: { isFlipped: boolean }) =>
    props.isFlipped ? 'rotateX(180deg)' : 'none'};
`;

const FlipContent = styled.div`
  font-size: 40px;
`;

const FlipLabel = styled.div`
  font-size: 14px;
  margin-top: 5px;
`;

const FlipSeparator = styled.div`
  font-size: 36px;
`;

const Countdown: React.FC<CountdownProps> = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [isFlippedSec, setIsFlippedSec] = useState(false);
  const [isFlippedMin, setIsFlippedMin] = useState(false);
  const [isFlippedHours, setIsFlippedHours] = useState(false);

  function getTimeLeft(): number {
    return Math.floor((date.getTime() - new Date().getTime()) / 1000);
  }

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = Math.floor(timeLeft % 60);

  const [prevDays, setPrevDays] = useState(days);
  const [prevHours, setPrevHours] = useState(hours);
  const [prevMinutes, setPrevMinutes] = useState(minutes);
  const [prevSeconds, setPrevSeconds] = useState(seconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  
  useEffect(() => {
    if (seconds !== prevSeconds) {
      setIsFlippedSec(true);
      setPrevSeconds(seconds);
    } else {
      setIsFlippedSec(false);
    }
  }, [prevSeconds]);

  // useEffect(() => {
  //   if (days !== prevDays) {
  //     setIsFlippedDays(true);
  //     setPrevDays(days);
  //   } else {
  //     setIsFlippedDays(false);
  //   }
  // }, [days]);

  // useEffect(() => {
  //   if (days !== prevDays) {
  //     setIsFlippedDays(true);
  //     setPrevDays(days);
  //   } else {
  //     setIsFlippedDays(false);
  //   }
  // }, [days]);

  const padZero = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <FlipCountdownWrapper>
      <FlipContainer>
        <Card isFlipped={days !== prevDays}>
          <FlipFront isFlipped={days !== prevDays}>
            <FlipContent>{padZero(days)}</FlipContent>
            <FlipLabel>DD</FlipLabel>
          </FlipFront>
          <FlipBack isFlipped={days !== prevDays}>
            <FlipContent>{padZero(days - 1)}</FlipContent>
            <FlipLabel>DD</FlipLabel>
          </FlipBack>
        </Card>
      </FlipContainer>
      <FlipSeparator>:</FlipSeparator>
      <FlipContainer>
        <Card isFlipped={hours !== prevHours}>
          <FlipFront isFlipped={hours !== prevHours}>
            <FlipContent>{padZero(hours)}</FlipContent>
            <FlipLabel>HH</FlipLabel>
          </FlipFront>
          <FlipBack isFlipped={hours !== prevHours}>
            <FlipContent>{padZero(hours - 1)}</FlipContent>
            <FlipLabel>HH</FlipLabel>
          </FlipBack>
        </Card>
      </FlipContainer>
      <FlipSeparator>:</FlipSeparator>
      <FlipContainer>
        <Card isFlipped={minutes !== prevMinutes}>
          <FlipFront isFlipped={minutes !== prevMinutes}>
            <FlipContent>{padZero(minutes)}</FlipContent>
            <FlipLabel>MIN</FlipLabel>
          </FlipFront>
          <FlipBack isFlipped={minutes !== prevMinutes}>
            <FlipContent>{padZero(minutes - 1)}</FlipContent>
            <FlipLabel>MIN</FlipLabel>
          </FlipBack>
        </Card>
      </FlipContainer>
      <FlipSeparator>:</FlipSeparator>
      <FlipContainer>
        <Card isFlipped={isFlippedSec}>
          <FlipFront isFlipped={isFlippedSec}>
            <FlipContent>{padZero(seconds)}</FlipContent>
            <FlipLabel>SEC</FlipLabel>
          </FlipFront>
          <FlipBack isFlipped={isFlippedSec}>
            <FlipContent>{padZero(seconds - 1)}</FlipContent>
            <FlipLabel>SEC</FlipLabel>
          </FlipBack>
        </Card>
      </FlipContainer>
    </FlipCountdownWrapper>
  );
};

export default Countdown;