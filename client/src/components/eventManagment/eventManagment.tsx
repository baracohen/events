
  import React from 'react';
  import styled from 'styled-components';
  import Header from '../componentsHeader/header';
  import TaskTable from './taskstable';
  
  export default function EventManagment() {
    const EventManagementContainer = styled.div`
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

  const data = [
    {
      id: 1,
      title: 'Task 1',
      assignTo: 'John',
      status: 'In Progress',
      priority: 'High',
      description: " this is a description of the task",
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 2,
      title: 'Task 2',
      assignTo: 'Jane',
      status: 'Done',
      priority: 'Low',
      description: " this is a description of the task",
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 3,
      title: 'Task 3',
      assignTo: 'Bob',
      status: 'Open',
      priority: 'Medium',
      description: " this is a description of the task",

      startDate: new Date(),
      endDate: new Date(),
    },
  ];
  
    return (
        <>
        <Header name='Event Management' />
        <EventManagementContainer>
          <TaskTable tasks={data}/>
        </EventManagementContainer>
        </>
    );
  }