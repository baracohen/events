import React from 'react';
import styled from 'styled-components';

interface UpcomingEventProps {
  // Define any props you want to pass to the UpcomingEvent component here
}

const UpcomingEventContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #ffffff;
`;

const UpcomingEventHeader = styled.h2`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
`;

const UpcomingEventBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UpcomingEventBox = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #ffffff;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  border-radius: 8px;
`;

const UpcomingEventBoxImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-right: 16px;
`;

const UpcomingEventBoxTitle = styled.h3`
  font-size: 18px;
`;

const UpcomingEvent: React.FC<UpcomingEventProps> = () => {
  return (
    <UpcomingEventContainer>
      <UpcomingEventHeader>Upcoming events</UpcomingEventHeader>
      <UpcomingEventBoxContainer>
        <UpcomingEventBox>
          <UpcomingEventBoxImage src="https://example.com/image1.jpg" />
          <UpcomingEventBoxTitle>Event 1</UpcomingEventBoxTitle>
        </UpcomingEventBox>
        <UpcomingEventBox>
          <UpcomingEventBoxImage src="https://example.com/image2.jpg" />
          <UpcomingEventBoxTitle>Event 2</UpcomingEventBoxTitle>
        </UpcomingEventBox>
        <UpcomingEventBox>
          <UpcomingEventBoxImage src="https://example.com/image3.jpg" />
          <UpcomingEventBoxTitle>Event 3</UpcomingEventBoxTitle>
        </UpcomingEventBox>
      </UpcomingEventBoxContainer>
    </UpcomingEventContainer>
  );
};

export default UpcomingEvent;
