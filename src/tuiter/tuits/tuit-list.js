import React from "react";
import TuitItem from "./tuit-item";
import tuits from "./tuits.json";
import TuitStats from "./tuit-stats";

const TuitList = (
  {
    tuit = { "_id": 123, 
    "topic": "Space",
    "userName": "Java",
    "title": "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    "time": "2h",   
    "image": "java.png",
    "liked": true,
    "replies": 123, 
    "retuits": 432,
    "likes": 100, 
    "handle": "@Java",
    "tuit": "Ipsum is simply dummy text of the printing and typesetting industry."
    },
  tuit_1 = { "_id": 234, 
  "topic": "Space",   
  "userName": "Python",
  "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
  "time": "2h",   
  "image": "python.png",
  "liked": true,
  "replies": 132,
  "retuits": 423,
  "likes": 110, 
  "handle": "@python",
  "tuit": "Contrary to popular belief, Lorem Ipsum is not simply random text." }, 
  tuit_2 = 
  { "_id": 345, 
  "topic": "Energy", 
   "userName": "Tesla",
   "title": "Tesla FSD finally makes driving obsolete. After years of delay, Tesla Full Self Driving can drive you to work while you work, play, or sleep",
   "time": "4d", 
   "image": "c-sharp.png",
   "liked": true,
   "replies": 103,
   "retuits": 402,
   "likes": 1000, 
   "handle": "@SpaceX",
   "tuit": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
  }
) => {
  return(
    <ul className="list-group">
    <li className="list-group-item">
     <div className="row">
       <div className="col-2">
         <img className="rounded-circle" height={70} src={`/images/${tuit.image}`}/>
       </div>
       <div className="col-8">
         <div className="fw-bold">{tuit.userName}</div>
         <span>{tuit.handle}  - {tuit.time}</span>
       </div>
       <div>
        <div className="col-8">
          {tuit.tuit}
        </div>
       </div>
     </div>
     <div>
     <TuitStats tuitStats = {{likes: tuit_2.likes, replies: tuit_2.replies, retuits: tuit_2.retuits}}/>
     </div>
     
    </li>
    <li className="list-group-item">
     <div className="row">
       <div className="col-2">
         <img className="rounded-circle" height={70} src={`/images/${tuit_1.image}`}/>
       </div>
       <div className="col-8">
         <div className="fw-bold">{tuit_1.userName}</div>
         <span>{tuit_1.handle} - {tuit_1.time}</span>
       </div>
       <div>
        <div className="col-8">
          {tuit_1.tuit}
        </div>
       </div>
     </div>
    <TuitStats tuitStats = {{likes: tuit.likes, replies: tuit.replies, retuits: tuit.retuits}}/>
    </li>
    <li className="list-group-item">
     <div className="row">
       <div className="col-2">
         <img className="rounded-circle" height={70} src={`/images/${tuit_2.image}`}/>
       </div>
       <div className="col-8">
         <div className="fw-bold">{tuit_2.userName}</div>
         <span>{tuit_2.handle}  - {tuit_2.time}</span>
       </div>
       <div>
        <div className="col-8">
          {tuit_2.tuit}
        </div>
       </div>
     </div>
     <TuitStats tuitStats = {{likes: tuit_2.likes, replies: tuit_2.replies, retuits: tuit_2.retuits}}/>
    </li>
    </ul>
   );
  };
  export default TuitList;