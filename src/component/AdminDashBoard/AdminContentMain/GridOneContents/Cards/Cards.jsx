import "./Cards.css";

const Cards = () => {
    return (
        <div class="ag-format-container">
      <div class="ag-courses_box">
        {/* <div class="ag-courses_item">
          <a href="#" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>
    
            <div class="ag-courses-item_title">
              UI/Web&amp;Graph design for teenagers 11-17&#160;years old
            </div>
    
            <div class="ag-courses-item_date-box">
              Start:
              <span class="ag-courses-item_date">
                04.11.2022
              </span>
            </div>
          </a>
        </div>
     */}
        <div class="ag-courses_item">
          <a href="#" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>
    
            <div class="ag-courses-item_title">
            <h2>39</h2>   
            </div >
            <div class="ag-courses-item_date-box flex items-center justify-between">
              <span class="ag-courses-item_date text">
              available Classes</span>
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
    
            <div class="ag-courses-item_date-box flex items-center justify-between">
              
              <span class="ag-courses-item_date">
                viewd Classes
              </span>
              <img className="w-8 h-8"
              src="https://img.icons8.com/?size=100&id=Ui4bo9aRrief&format=png&color=000000"  alt="" />
            </div>
          </a>
        </div>
    
        <div class="ag-courses_item">
          <a href="#" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>
    
            <div class="ag-courses-item_title">
                0
            </div>
            <div class="ag-courses-item_date-box flex items-center justify-between">
              <span class="ag-courses-item_date">
                Remaining Leads
              </span>
              <img className="w-8 h-8"
              src="https://img.icons8.com/?size=100&id=1tgcf6uxdN5y&format=png&color=000000"  alt="" />
            </div>

          </a>
        </div>
    
         {/* <div class="ag-courses_item">
          <a href="#" class="ag-courses-item_link">
            <div class="ag-courses-item_bg">
            </div>
            <div class="ag-courses-item_title">
              Digital Marketing
            </div>
          </a>
        </div>  */}
        {/* <div class="ag-courses_item">
          <a href="#" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>
    
            <div class="ag-courses-item_title">
              Interior Design
            </div>
    
            <div class="ag-courses-item_date-box">
              Start:
              <span class="ag-courses-item_date">
                31.10.2022
              </span>
            </div>
          </a>
        </div> */}
    
      </div>
    </div>
      )
    
}

export default Cards
