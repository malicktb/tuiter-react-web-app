import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
// import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";


const TuitItem = (
    {
         tuit
    }

) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));}

        return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`}  />
                </div>
                <div className="col-10">
                    <div><i className="bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <span className="fw-bolder">{tuit.userName}</span>
                        <i className="fa fa-check-circle"></i>
                        {tuit.handle} . {tuit.time}
                    </div>
                    <div>{tuit.tuit}</div>
                    <div className="wd-float-bottom">
                        <TuitStats key={tuit._id} tuit={tuit}/>
                    </div>

                </div>
            </div>
        </li>
    );
};
export default TuitItem;