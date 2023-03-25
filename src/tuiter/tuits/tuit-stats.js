import React from "react";
const TuitStats = (
    {
        tuit
    }
) => {
    return(
        // <li className="list-group-item">
            <div className="row">
                <div className="col-3">
                   <i className="fa fa-regular fa-comment"></i> {tuit.replies}
                </div>
                <div className="col-3">
                        <i className="fa fa-retweet"></i>
                        {tuit.retuits}
                    </div>
                <div className="col-3">
                    <i className="fa fa-solid fa-heart"></i>

                    {tuit.likes}
                </div>
                <div className="col-3">
                    <i className="fa fa-regular fa-share"></i>
                </div>
                </div>
        // </li>
    );
};
export default TuitStats;