import {FaHeart} from "react-icons/fa";
import {AiOutlineMessage} from "react-icons/ai";
import {FaRetweet} from "react-icons/fa";
import {BsUpload} from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import tuits from "./tuits.json";
import TuitItem from "./tuit-item";

const TuitStats =  ( 
    tuit = {liked: false, likes: 0, retuits: 0, replies: 0, tuit: "" }) => {
return (
    <div className="container text-center">
        <div class="row row-cols-4">
            <div class="col">
                <span className="fw-bold">{tuit.likes}</span>
                <FaHeart/></div>
        <div class="col">
            <span className={tuit.liked}><font-awesome-icon icon="heart"/></span>
            <AiOutlineMessage/></div>
        <div class="col">
            <span className={tuit.retuits}></span>
            <FaRetweet/></div>
        <div class="col">
            <span className={tuit.replies}></span>
            <BsUpload/> </div>
        </div>
    </div>
)};

export default TuitStats;

