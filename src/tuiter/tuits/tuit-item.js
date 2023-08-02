import React from "react";
import TuitStats from "./tuit-stats";
import tuits from "./tuits.json";
import {useDispatch, useSelector} from "react-redux";

const TuitItem = (
  {
    tuit = {
   "_id": 123,
   "topic": "Space",
   "userName": "SpaceX",
   "title": "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
   "time": "2h",  
   "image": "youtube.jpg",
   "liked": true,
   "replies": 123,
   "retuits": 432,
   "likes": 100,
   "handle": "@SpaceX",
   "tuit": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  }
) => {
return(
<ul class="list-group">
  <li class="list-group-item disabled" aria-disabled="true">
   <div className="row">
     <div className="col">
       <div>{tuit.userName} . {tuit.time}</div>
       <div className="fw-bolder">{tuit.topic}</div>
       <div class="col-6">
       <div>{tuit.title}</div>
       <TuitStats tuitStats = {{likes: tuit.likes, replies: tuit.replies, retuits: tuit.retuits}}/>
     </div>
     <div className="col-6">
       <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`}/>
     </div>
   </div>
   </div>
  </li>
  </ul>
 )
}
export default TuitItem;