import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch, useSelector} from "react-redux";
import {deleteTuitThunk} from "../services/tuits-thunks";
import tuits from './tuits.json'


const TuitItem = () => 
  {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

return(
  <ul className="list-group">
    <div className="row">
      {
        tuits.map(tuit => {
          return(
            <div className="box">
              {tuit.title}
              </div>
          )
        })
      }

    </div>
  </ul>
);
}
export default TuitItem;