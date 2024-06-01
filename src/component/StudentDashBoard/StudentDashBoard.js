import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import { SidebarProvider } from './context/sidebarContext';
import "../../App"
import StudentContentMain from './StudentContentMain/StudentContentMain';

function StudentDashBoard() {
  return (
    <>
      <div className='app'>
      <SidebarProvider >
        <Content />
<div className='Lower-Component flex mt-5'>
         <Sidebar />
         <StudentContentMain/>

</div>
      </SidebarProvider>
       
      </div>
    </>
  )
}

export default StudentDashBoard
