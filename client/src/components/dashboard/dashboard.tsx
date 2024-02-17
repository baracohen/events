import React from 'react';
import styled from 'styled-components';
import DailyTask from './dailyTask';
import UpcomingEvent from './upcomingEvents';
import GuestList from './guestList';
import Header from '../componentsHeader/header';
import Countdown from './Countdown';
import Budget from './budget';
import { Stack } from '@mui/material';

interface DashboardProps {
  // Define any props you want to pass to the Dashboard component here
}

const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 24px;

  & > * {
    flex: 1;
    margin-right: 16px;
    margin-bottom: 16px;
  }

  & > *:last-child {
    margin-right: 0;
  }
`;
const Dashboard: React.FC<DashboardProps> = () => {
  let tomorrow =  new Date()
  type Guest = {
    id: number;
    name: string;
    mobileNumber: string;
    status: string;
  };
  const guests: Guest[] = [
    { id: 1, name: 'John Doe', mobileNumber: '123-456-7890', status: 'Attending' },
    { id: 2, name: 'cds', mobileNumber: '234-567-8901', status: 'Not attending' },
    { id: 3, name: 'bgr', mobileNumber: '234-567-8901', status: 'Attending' },
    { id: 4, name: ' gfre', mobileNumber: '234-567-8901', status: 'Maybe' },

    // Add more guests as needed
  ];
  const data = [{name:"budget1", number:100}, {name:"budget2", number:100}, {name:"budget3", number:3000}, {name:"budget4", number:400}, {name:"budget7", number:1000}, {name:"budget8", number:200}, {name:"dfsafdsa", number:100}, {name:"dfsafdsa", number:600}, {name:"item 2", number:1000}, {name:"dfsafdsa", number:100}, {name:"dfsafdsa", number:800}, {name:"dfsafdsa", number:500}];

  const tasks = [
    {
      id: 1,
      title: 'Task 1',
      assignTo: 'John',
      status: 'In Progress',
      priority: 'High',
      estimate: 3,
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 2,
      title: 'Task 2',
      assignTo: 'Jane',
      status: 'Done',
      priority: 'Low',
      estimate: 1,
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 3,
      title: 'Task 3',
      assignTo: 'Bob',
      status: 'Open',
      priority: 'Medium',
      estimate: 2 ,
      startDate: new Date(),
      endDate: new Date(),
    },
  ];
  return (
    <>
    <Header name='Dashboard' />
    <DashboardContainer>
      <GuestList guests={guests} />
      <DailyTask tasks={tasks} />
      <UpcomingEvent />
      <Budget data={data} />

    </DashboardContainer>
    {/* <Stack sx={{padding:3}}> */}
    {/* </Stack> */}
    </>
  );
};

export default Dashboard;
