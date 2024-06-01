import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import { SidebarProvider } from './context/sidebarContext';
import "../../App.css"
import ContentMain from './TutorContentMain/TutorContentMain';
import { useState } from 'react';
import TutorContentMain from './TutorContentMain/TutorContentMain';

function TutorDashBoard() {
  return (
    <>
      <div className='app'>
      <SidebarProvider >
        <Content />
<div className='Lower-Component flex mt-5'>
         <Sidebar />
         <TutorContentMain/>

</div>
      </SidebarProvider>
       
      </div>
    </>
  )
}

export default TutorDashBoard
