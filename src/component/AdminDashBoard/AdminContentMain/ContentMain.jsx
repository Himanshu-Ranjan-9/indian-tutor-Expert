import "./ContentMain.css";
import Cards from "./GridOneContents/Cards/Cards";
import TutorLeads from "./GridTwoContents/TutorLeads/TutorLeads";
// import Transactions from "./GridOneContents/Transactions/Transactions";
// import Report from "./GridOneContents/Report/Report";

const ContentMain = () => {
  return (
    <div className="main-content-holder mx-auto w-full justify-center overflow-scroll sticky h-[500px]">
        <div className="content-grid-one w-full justify-center w-full">
            <Cards />
        </div>
        <div className="cards-container w-full ">
          <TutorLeads/>
          <TutorLeads/>
          <TutorLeads/>
          <TutorLeads/>
        </div>
    </div>
  )
}

export default ContentMain
