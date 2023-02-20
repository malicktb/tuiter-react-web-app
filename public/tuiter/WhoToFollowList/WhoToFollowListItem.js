// import who from "./who.js";


const WhoToFollowListItem = () => {
        // $('#right-sidebar').append
        return(`
     <div class="card">
                <ul class="list-group list-group-flush"> 
                <li class="list-group-item">
                        <h5>Who to follow</h5>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-2">
                                <img src="../images/java.jpeg" />
                            </div>
                            <div class="col-7">
                                <h5>Java<i class="fa fa-check-circle"></i></h5>
                                <p>@Java</p>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-primary follow">Follow</button>
                            </div>
                        </div>
                        <li class="list-group-item">
                        <div class="row">
                            <div class="col-2">
                                <img src="../images/relativityspace.jpeg" />
                            </div>
                            <div class="col-7">
                                <h5>Relativity Space<i class="fa fa-check-circle"></i></h5>
                                <p>@relativityspace</p>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-primary follow">Follow</button>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-2">
                                <img src="../images/virgin.jpeg" />
                            </div>
                            <div class="col-7">
                                <h5>Virgin Galactic<i class="fa fa-check-circle"></i></h5>
                                <p>@virgingalactic</p>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-primary follow">Follow</button>
                            </div>
                        </div>
                        <li class="list-group-item">
                        <div class="row">
                            <div class="col-2">
                                <img src="../images/nasa.jpeg" />
                            </div>
                            <div class="col-7">
                                <h5>NASA<i class="fa fa-check-circle"></i></h5>
                                <p>@NASA</p>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-primary follow">Follow</button>
                            </div>
                        </div>
                        <li class="list-group-item">
                        <div class="row">
                            <div class="col-2">
                                <img src="../images/tesla.jpeg" />
                            </div>
                            <div class="col-7">
                                <h5>Tesla<i class="fa fa-check-circle"></i></h5>
                                <p>@Tesla</p>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-primary follow">Follow</button>
                            </div>
                        </div>
                </ul>
            </div>
   `);
    }




export default WhoToFollowListItem;
