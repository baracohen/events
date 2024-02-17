import React from 'react';
import styled from 'styled-components';
import { Grid, Chip, Typography, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import HourglassBottomRoundedIcon from '@mui/icons-material/HourglassBottomRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
interface DailyTaskProps {
  tasks:Task[]
  // Define any props you want to pass to the DailyTask component here
}
type Task = {
  id: number;
  title: string;
  assignTo: string;
  status: string;
  priority: string;
  estimate: number;
  startDate: Date | null;
  endDate: Date | null;
};
const DailyTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #ffffff;
`;

const DailyTaskHeader = styled.h2`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
`;

const DailyTaskBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DailyTaskBox = styled.a`
  display: flex;
  align-items: unset;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #ffffff;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const DailyTaskBoxImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-right: 16px;
`;

const DailyTaskBoxTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
`;

const DailyTaskBoxDate = styled.p`
  font-size: 14px;
  color: #bfbfbf;
  margin-top: auto;
`;
interface DailyTaskBoxStatusProps {
  status: string;
}
const DailyTaskBoxStatus = styled.span<DailyTaskBoxStatusProps>`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: ${({ status }) => {
    switch (status) {
      case 'Open':
        return '#007bff';
      case 'Done':
        return '#28a745';
      case 'In Progress':
        return '#ffc107';
      default:
        return '#6c757d';
    }
  }};
`;


const DailyTask: React.FC<DailyTaskProps> = ({tasks}) => {
  const navigate = useNavigate();
  const getIconForStatus = (status:string)=>{

    switch (status) {
      case 'Open':
        return <CalendarTodayRoundedIcon sx={{mr:1}} color='info' />;
      case 'In Progress':
        return <AccessTimeRoundedIcon sx={{mr:1}} color='warning' />;
      case 'Done':
        return <CheckCircleIcon sx={{mr:1}} color='success' />;
      default:
        return null;
    }

  }
  const renderTask = (task: Task)=>{
    
    return(
      <DailyTaskBox href="#">
          {getIconForStatus(task.status)}

        <Grid container sx={{display:'block'}}>

          <Grid item sx={{display:'flex', justifyContent:'space-between', alignContent:'center', mb:1}}>
            <Grid sx={{display:'flex', alignItems:'center'}}>
              <DailyTaskBoxTitle>{task.title}</DailyTaskBoxTitle>
            </Grid>
              <DailyTaskBoxStatus status={task.status}>{task.status}</DailyTaskBoxStatus>
          </Grid>
          <Grid>
            <DailyTaskBoxDate>{task.assignTo}</DailyTaskBoxDate>
            <DailyTaskBoxDate>
              {task.endDate && `should done until: ${task.endDate.toLocaleDateString()}`}
            </DailyTaskBoxDate>
          </Grid>
        </Grid>
      </DailyTaskBox>
    )
  }

  return (
    <DailyTaskContainer>
      <Grid sx={{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
        <DailyTaskHeader>Daily tasks</DailyTaskHeader>
        <Button onClick={()=>{navigate("/EventManagment")}} size='small' variant='text'>See all</Button>
      </Grid>
      <DailyTaskBoxContainer>
        {tasks.map((task) => renderTask(task))}
      </DailyTaskBoxContainer>
    </DailyTaskContainer>
  );
};

export default DailyTask;
