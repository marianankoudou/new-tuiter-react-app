import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./tuit-item";
import {findTuitsThunk} from "../services/tuits-thunks";
import TuitStats from "./tuit-stats";
import Tuits from "./tuits.json"


const TuitsList = () => {
  const {tuits, loading} = useSelector(state => state.tuits)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])
 
  return(
    <ul className="list-group">
      { loading &&
       <li className="list-group-item">
         Loading...
       </li>
     }
     {
      Tuits && Tuits.map( tuit => {
        return(
        <li className="list-group-item">
          <div className="row">
            <div className="col-2">
              <img className="rounded-circle" height={70} src={`/images/${tuit.image}`}/>
            </div>
            <div className="col-8">
              <div className="fw-bold"> {tuit.handle}  </div> 
              <span> {tuit.userName} - {tuit.time}</span>
            </div>
       <div>
        <div className="col-8">
          {tuit.tuit}
        </div>
       </div>
     </div>
     <div>
     <TuitStats tuitStats = {{likes: tuit.likes, replies: tuit.replies, retuits: tuit.retuits}}/>
     </div>.
      </li>
        )
      }
      )
     }
  </ul>
  )
}
 export default TuitsList;
