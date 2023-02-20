// import post from "./post.js";

const PostSummaryItem = () => {
return(`
     <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-9">
                                <p>Web Development</p>
                                <p>ReactJS <i class="fa fa-check-circle"></i> - 2h</p>
                                <p>React.js is a component based front end library that makes it very easy to build Single Page applications or SPAs</p>
                            </div>
                            <div class="col-3">
                                <i class="fab fa-react fa-8x"></i>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-9">
                                <p>JavaScript <i class="fa fa-check-circle"></i> - 2h</p>
                                <p>JavaScript is a programming language that can run on the browsers as well as desktops</p>
                            </div>
                            <div class="col-3">
                                <i class="fab fa-js fa-8x wd-js-logo"></i>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-9">
                                <p>Web Development</p>
                                <p>jQuery</p>
                                <p>123k Tuits</p>
                            </div>
                            <div class="col-3">
                                <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/jquery_vertical_logo_icon_169489.png"
                                height="120px" width="120px"/>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-9">
                                <p>Web Development</p>
                                <p>NodeJS <i class="fa fa-check-circle"></i> - 2h</p>
                                <p>123k Tuits</p>
                            </div>
                            <div class="col-3">
                                <i class="fab fa-node-js fa-8x wd-node-logo"></i>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
   `);
}


export default PostSummaryItem;