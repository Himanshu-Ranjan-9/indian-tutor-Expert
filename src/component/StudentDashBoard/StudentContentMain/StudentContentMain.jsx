import "./StudentContentMain.css";
import Cards from "./GridOneContents/Cards/Cards";
import StudentLeads from "./GridTwoContents/StudentLeads/StudentLeads";

const StudentContentMain = () => {
  return (
    <div className="Student-main-content-holder flex  mx-auto w-full justify-center overflow-scroll sticky h-[500px]">
        <div className="cards-container w-full ">
          <StudentLeads/>
          <StudentLeads/>
          <StudentLeads/>
        </div>
        <div className="content-grid-one w-full justify-center">
            <Cards />
        </div>

    </div>
  )
}

export default StudentContentMain
