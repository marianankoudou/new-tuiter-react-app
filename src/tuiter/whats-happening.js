import {createTuit} from "./reducers/tuit-reducer";
import {useDispatch} from "react-redux";
import {AiFillPicture} from "react-icons/ai";
import {HiOutlineGif} from "react-icons/hi2";
import {MdFormatListBulleted} from "react-icons/md"
import {BsEmojiSmile} from "react-icons/bs";
import {TbCalendarStats} from "react-icons/tb";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {BiBold, BiItalic} from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from "react";

const WhatsHappening = () => {
 let [whatsHappening, setWhatsHappening] = useState('');
 const dispatch = useDispatch();
 const tuitClickHandler = () => {
    const newTuit = {
        tuit: whatsHappening
    }
      dispatch(createTuit(newTuit));
      setWhatsHappening("");
 }
 return (
   <div className="row">
     <div className="col-auto">
       <img src="/images/youtube.jpg" width={60}/>
     </div>
     <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
               className="form-control border-0"
               onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
       <div>
         <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                 onClick={tuitClickHandler}>
           Tuit
         </button>
         <div className="text-primary fs-2">
            <AiFillPicture/>
           <HiOutlineGif/>
           <BsEmojiSmile/>
           <TbCalendarStats/>
           <HiOutlineLocationMarker/>
         </div>
       </div>
     </div>
     <div className="col-12"><hr/></div>
   </div>
 );
}
export default WhatsHappening;