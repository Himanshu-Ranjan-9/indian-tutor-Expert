import React from 'react';
import ReactModal from 'react-modal';
import "./StudentReactModel.css"
import StudentReactRouting from '../../StudentReactRounting/studentreactRouting/StudentReactRouting';
function  StudentReactModel({Studentreactmodel ,handleStudentreactmodel }){
  return (
    <div >
      <ReactModal
        isOpen={Studentreactmodel}
        onRequestClose={handleStudentreactmodel}
        style={{
          overlay:{
            backgroundColor: "rgba(11, 11, 11, 0.2)",
          },
          content:{
            width:"750px",
            height:"400px",
          }
        }} 
        className=" outline-none mx-auto py-0  " 
      >
        <StudentReactRouting isOpen={Studentreactmodel} handleStudentreactmodel={handleStudentreactmodel}/>
      </ReactModal>
      </div>
  );
}
export default StudentReactModel;
