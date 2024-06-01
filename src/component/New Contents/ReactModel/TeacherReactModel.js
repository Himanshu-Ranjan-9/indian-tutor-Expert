import React from 'react';
import ReactModal from 'react-modal';
import "./TeacherReactModel.css"
import TeacherReactRouting from '../TeacherreactRouting/TeacherReactRouting';
function  TeacherReactModel({TeacherReactModel ,handleTeacherReactModel }){
  return (
    <div >
      <ReactModal
        isOpen={TeacherReactModel}
        onRequestClose={handleTeacherReactModel}
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
        <TeacherReactRouting isOpen={TeacherReactModel} handleTeacherReactModel={handleTeacherReactModel}/>
      </ReactModal>
      </div>
  );
}
export default TeacherReactModel;
