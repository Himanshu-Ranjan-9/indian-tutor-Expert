import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import { SidebarProvider } from './context/sidebarContext';
import "../../App.css"
import ContentMain from './AdminContentMain/ContentMain';

function DashBoardContainer() {
  return (
    <>
      <div className='app'>
      <SidebarProvider >
        <Content />
<div className='Lower-Component flex mt-5'>
         <Sidebar />
         <ContentMain/>

</div>
      </SidebarProvider>
       
      </div>
    </>
  )
}

export default DashBoardContainer
