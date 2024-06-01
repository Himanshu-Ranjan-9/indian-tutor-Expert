import "./TutorContentMain.css";
import Cards from "./GridOneContents/Cards/TutorCards";
import TutorLeads from "./GridTwoContents/TutorLeads/TutorLeads";

const TutorContentMain = () => {
  return (
    <div className="Tutor-main-content-holder mx-auto w-full flex justify-between overflow-scroll sticky h-[500px]">
        <div className="cards-container w-full sticky ">
          <TutorLeads/>
          <TutorLeads/>
          <TutorLeads/>
          <TutorLeads/>
       
     

        </div>

        <div className="content-grid-one w-full ">
            <Cards />
        </div>
    </div>
  )
}

export default TutorContentMain
