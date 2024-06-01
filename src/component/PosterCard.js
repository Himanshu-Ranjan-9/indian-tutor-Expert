import React from 'react';
import "./PosterCard/PosterCard.css"


function PosterCard() {
  return (
    <div className="PosterCardContainer  bg-white " >

    <div className="w-11/12 mx-auto lg:px-32 lg:px-auto ">
      <ul className="list-none grid grid-cols-1 gap-8 mb-8">
        <li className="sticky top-0 pt-[12vh]" >
          <div className="bg-white p-8 rounded-xl shadow-lg h-[87vh] flex justify-center items-center transition-all duration-500 overflow-hidden">
             <img src='https://img.freepik.com/free-vector/children-climbing-up-tree_1308-30943.jpg?t=st=1716875838~exp=1716879438~hmac=50f6ce894abef78bc6b1440d4542d53495179192365726880f5a40411c931fdf&w=900' /> 
          </div>
        </li>
        <li className="sticky top-0 pt-[14vh] ">
          <div className="bg-white  p-8 rounded-xl shadow-lg h-[87vh] flex justify-center items-center transition-all duration-500 overflow-hidden">
            <img src="https://img.freepik.com/free-vector/children-playing-around-playhouse_1308-71171.jpg?t=st=1716876055~exp=1716879655~hmac=7e74bde77150321808c2ec39a460f15fa8ba2da87f9753506b5e693823c9f1e6&w=996" alt="" />
          </div>
        </li>
      </ul>
    </div>
    </div>

  );
}

export default PosterCard;
