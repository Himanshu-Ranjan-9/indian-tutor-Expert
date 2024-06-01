import "./TutorCards.css";

const TutorCards = () => {
    return (
        <div class="ag-format-container sticky">
      <div class="Tutor-ag-courses_box flex sticky flex-col w-full">

        <div class="ag-courses_item">
          <a href="#" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>
    
            <div class="ag-courses-item_title">
            <h2>39</h2>   
            </div >
            <div class="Tutor-ag-courses-item_date-box flex items-center justify-between">
              <span class="text-[33px] ag-courses-item_date text">
              Remaining Class</span>
              <img className="w-8 h-8"
              src="https://img.icons8.com/?size=100&id=AefXIkx4A693&format=png&color=000000"  alt="" />
            </div>

          </a>
        </div>
    
    
        <div class="ag-courses_item">
          <a href="#" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>
    
            <div class="ag-courses-item_title">
              {/* Motion Design */}
              15
            </div>
    
            <div class="Tutor-ag-courses-item_date-box flex items-center justify-between">
              
              <span class="text-[33px] ag-courses-item_date">
                Classes seen
              </span>
              <img className="w-8 h-8"
              src="https://img.icons8.com/?size=100&id=Ui4bo9aRrief&format=png&color=000000"  alt="" />
            </div>
          </a>
        </div>
    
    
      </div>
    </div>
      )
    
}

export default TutorCards
