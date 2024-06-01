import React from 'react';
import './subjectCard.css';
import { Link } from 'react-router-dom';
const dataset = [
  {
    subject:"Mathamatics",
    img:"https://img.freepik.com/free-vector/realistic-3d-shapes-floating-background_23-2148917576.jpg?t=st=1716184104~exp=1716187704~hmac=b74f1f07db07247575a38e41115a24ebac90c8d1b42f9bff42da2223ac31ecda&w=1060"
  },
  {
    subject:"Biology",
    img:"https://img.freepik.com/free-psd/3d-cancer-icon-with-dna_23-2150749834.jpg?t=st=1716183412~exp=1716187012~hmac=d81b3eb34754c7615cd31cce1cc60c5e702402c67e04c339407a82248e3fb6c1&w=740"
  },
  {
    subject:"Economics",
    img:"https://img.freepik.com/free-psd/3d-rendering-bitcoin_23-2150174487.jpg?t=st=1716183619~exp=1716187219~hmac=ded398d69b14f79e5821d05e1734042da6299ea122450bc4a9174e871cbbcbc1&w=1380"
  },
  {
    subject:"History",
    img:"https://img.freepik.com/free-photo/beautiful-landscape-from-magazine-coming-life_23-2151158585.jpg?t=st=1716183752~exp=1716187352~hmac=2571329798e2ff141698638cfe78ee2087fd382fd8787fb4b4ad3e5a8fc371f7&w=1060"
  },
  {
    subject:"Science",
    img:"https://img.freepik.com/free-psd/3d-rendering-science-still-life-background_23-2150557572.jpg?t=st=1716183967~exp=1716187567~hmac=aee5951f55a9d9c8d11bc6e1347ae20de0d70336e3c971427a35d2f9e66d9120&w=1060"
  },
  {
    subject:"Physics",
    img:"https://img.freepik.com/free-vector/realistic-3d-shapes-floating-background_23-2148917576.jpg?t=st=1716184104~exp=1716187704~hmac=b74f1f07db07247575a38e41115a24ebac90c8d1b42f9bff42da2223ac31ecda&w=1060"
  },
  {
    subject:"Buseness Studies",
    img:"https://img.freepik.com/free-vector/isometric-university-concept-background_52683-10123.jpg?t=st=1716184261~exp=1716187861~hmac=180c9f274cd1e707f904ec6dd6cc498eb37f1cc61fae43fad79e2da8bffb8850&w=740"
  },
  {
    subject:"Political Science",
    img:"https://img.freepik.com/free-vector/antique-auction-isometric-composition_1284-22062.jpg?t=st=1716184453~exp=1716188053~hmac=b4484eb2252c440b3f8631d456b7a7c237746b0723e3470298232c149051e584&w=826"
  },
  {
    subject:"Hindi",
    img:"https://img.freepik.com/free-vector/happy-hindi-divas-indian-national-tounge-celebration-background-vector_1055-18566.jpg?t=st=1716184737~exp=1716188337~hmac=5f3a70ef6ca280a5bd71fe5b5081dfa6fe8309a22697f85e310614e505bc19ca&w=996"
  },
  {
    subject:"English",
    img:"https://img.freepik.com/free-vector/hand-drawn-english-book-background_23-2149483336.jpg?t=st=1716184800~exp=1716188400~hmac=b40482abba1d446931986614a8ddc14b580beb05ebbf94c1210663b87b4fb85d&w=1060"
  },
  {
    subject:"Chemistry",
    img:"https://img.freepik.com/free-psd/3d-rendering-science-still-life-background_23-2150557572.jpg?t=st=1716183967~exp=1716187567~hmac=aee5951f55a9d9c8d11bc6e1347ae20de0d70336e3c971427a35d2f9e66d9120&w=1060"
  },
  {
    subject:"French",
    img:"https://img.freepik.com/free-psd/3d-rendering-valentine-s-day-eiffel-tower-icon_23-2149290326.jpg?t=st=1716184965~exp=1716188565~hmac=39b216fd639126ad53f2f09c6a1df713d64cf66d6875091631c80245de214ec9&w=740"
  },
  {
    subject:"Computer Science",
    img:"https://img.freepik.com/free-psd/3d-render-vertical-graphic-design-background_23-2150933375.jpg?t=st=1716185087~exp=1716188687~hmac=9a7e6980bb887efa0d242efc953ab63493a94adeea60ae05d98b7fb3d2f0426b&w=740"
  },
  {
    subject:"acounting",
    img:"https://img.freepik.com/free-psd/3d-background-cost-living-going-up_23-2150470747.jpg?t=st=1716185188~exp=1716188788~hmac=4a2086ebad9668ae1af001c3ae3dec4e76b1b4eb7294344ae8ec8e665332ba5c&w=1060"
  },
  {
    subject:"Geography",
    img:"https://img.freepik.com/free-photo/3d-travel-icon-with-globe_23-2151037377.jpg?t=st=1716185247~exp=1716188847~hmac=47dafb036e75495e145c69a82f51f9233d7f6e19f81e08c75ed9fcbed338f13d&w=996"
  },
]
function SubjectCard() {
  return (

    <>
    <div className='SubjectCardcontainer'
    id='subjects'
    >
    {dataset.map((data,index)=>(

      <div className='card' key={index}>
        <img src={data.img} alt="Card Image" />
        <div className="card-content">
          <h2 className="font-Pompiere font-thin">Subject</h2>
          <Link onTouchEnd="/" className="text-6xl font-Pompiere font-extrabold min-w-full text-white">
            {data.subject}
          </Link>
        </div>
      </div>
    ))}
    </div>
    </>
  );
}

export default SubjectCard;
