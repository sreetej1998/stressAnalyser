import React from 'react';
import AppBar from './components/AppBar';
import SideBar from './components/SIdeBar';
function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
  <div style={{background:'#C0C0C0'}}>
    <AppBar handleDrawerOpen={handleDrawerOpen} />
    <SideBar handleDrawerClose={handleDrawerClose} open={open}/>
  </div>
  );
}
export default App;