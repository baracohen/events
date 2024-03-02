import { Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Login from './components/login/login';
import theme from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/landingPage/landingPage';
import Features from './components/landingPage/features/features';
import Contact from './components/landingPage/contact/contact';
import { Extension } from '@mui/icons-material';
import Register from './components/register/register';
import Dashboard from './components/dashboard/dashboard';
import GuestList from './components/guests/guests';
import EventManagment from './components/eventManagment/eventManagment';
import { GlobalStyles } from './GlobalStyles.style';
import SidebarMenu from './components/sideBar/sideBar';
import { useProSidebar } from 'react-pro-sidebar';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Guest } from './interfaces/guest.interface';
import { GuestStatus } from './enums/guestStatus.enum';

function App() {
  const { collapsed } = useProSidebar();
  const [isCollapsed, setIsCollapsed] = useState(collapsed);
  const location = useLocation();

  useEffect(() => {
    setIsCollapsed(collapsed);
  }, [collapsed]);

  
  const guests: Guest[] = [
    { id: 1, name: 'John Doe', side: 'Groom', mobileNumber: '123-456-7890', attendingStatus: GuestStatus.Attending },
    { id: 2, name: 'cds', side: 'Bride', mobileNumber: '234-567-8901', attendingStatus: GuestStatus.NotAttending },
    { id: 3, name: 'bgr', side: 'Groom', mobileNumber: '234-567-8901', attendingStatus: GuestStatus.Maybe },
    { id: 4, name: 'gfre', side: 'Bride', mobileNumber: '234-567-8901', attendingStatus: GuestStatus.Maybe },
    { id: 5, name: 'hylt', side: 'Groom', mobileNumber: '234-567-8901', attendingStatus: GuestStatus.Maybe },
    { id: 6, name: 'hyret,l', side: 'Bride', mobileNumber: '234-567-8901', attendingStatus: GuestStatus.Maybe },
    { id: 7, name: 'v,el', side: 'Groom', mobileNumber: '234-567-8901', attendingStatus: GuestStatus.NotAttending },
    { id: 8, name: 'l;yt', side: 'Bride', mobileNumber: '234-567-8901', attendingStatus: GuestStatus.NotAttending },
    { id: 9, name: 'mklrye', side: 'Groom', mobileNumber: '234-567-8901', attendingStatus: GuestStatus.NotAttending },
    { id: 10, name: 'mbklr', side: 'Bride', mobileNumber: '234-567-8901', attendingStatus: GuestStatus.NotAttending },
    { id: 11, name: 'vmfkel', side: 'Groom', mobileNumber: '234-567-8901', attendingStatus: GuestStatus.NotAttending },
    { id: 12, name: 'dcmsakl', side: 'Bride', mobileNumber: '234-567-8901', attendingStatus: GuestStatus.NotAttending },
    { id: 13, name: 'vfd Doe', side: 'Groom', mobileNumber: '234-567-8901', attendingStatus: GuestStatus.NotAttending },
    { id: 14, name: 'vfds Doe', side: 'Bride', mobileNumber: '234-567-8901', attendingStatus: GuestStatus.NotAttending },
    { id: 15, name: 'brt Doe', side: 'Groom', mobileNumber: '234-567-8901', attendingStatus: GuestStatus.NotAttending },
    { id: 16, name: 're Doe', side: 'Bride', mobileNumber: '234-567-8901', attendingStatus: GuestStatus.NotAttending },
    { id: 17, name: 'ewc Doe', side: 'Groom', mobileNumber: '234-567-8901', attendingStatus: GuestStatus.NotAttending },
    // Add more guests as needed
  ];
  
  const showSidebar = location.pathname === '/Dashboard' ||
                      location.pathname === '/Guests' ||
                      location.pathname === '/EventManagment' ||
                      location.pathname === '/Budget';

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Grid container >
      {showSidebar && (
        <Grid
          item
          xs={12}
          sm={isCollapsed ? 1 : 2}
          sx={{
            transition: 'all 0.3s',
          }}
        >
          <SidebarMenu />
        </Grid>
      )}
        <Grid
          item
          xs={12}
          sm={isCollapsed || !showSidebar ? 12 : 11}
          sx={{
            transition: 'all 0.3s',
            marginLeft: !showSidebar? 0 : isCollapsed ? '6rem' : '16rem',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/extension" element={<Extension />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Guests" element={<GuestList guests={guests} />} />
            <Route path="/EventManagment" element={<EventManagment />} />
          </Routes>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
