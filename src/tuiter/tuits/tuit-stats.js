import {FaHeart} from "react-icons/fa";
import {AiOutlineMessage} from "react-icons/ai";
import {FaRetweet} from "react-icons/fa";
import {BsUpload} from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tuits from "./tuits.json";
import TuitItem from "./tuit-item";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";


const TuitStats =  ( 
    tuit = {liked: false, likes: 0, retuits: 0, replies: 0, tuit: "" }) => {
const dispatch = useDispatch();
return (
    <div key={tuit._id} 
    className="container text-center">
        {Tuits && Tuits.map(tuit => {
            return(
            <div class="row row-cols-4">
                <div class="col">
                    <span className="col">   {tuit.likes}  </span>
                    <FaHeart
                    className="text-danger"
                    onClick={() => 
                      dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
                    }
                    />
                </div>
            <div class="col">
                <span className={tuit.liked}><font-awesome-icon icon="heart"/></span>
                {tuit.replies}<AiOutlineMessage/></div>
            <div class="col">
                {tuit.retuits}
                <FaRetweet/></div>
            <div class="col">
                <BsUpload/> </div>
            </div>
            )
        })      
        }
    </div>
)};

export default TuitStats;

