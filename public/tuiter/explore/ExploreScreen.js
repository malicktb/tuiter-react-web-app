const ExploreScreen = () => {
    return(`
           <div class="row">
                <div class="col-11 wd-image-container">
                    <input class="form-control wd-sb"
                           type="text"
                           placeholder="Search Tuiter"/>
                    <i class="fab fa-searchengin wd-mag-glass"></i>
                </div>
                <div class="col-1">
                    <i class="fa fa-cog wd-gear""></i>
                </div>
            </div>

            <div class="wd-float-bottom">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sports</a>
                    </li>
                    <li class="nav-item d-none d-md-block">
                        <a class="nav-link" href="#">Entertainment</a>
                    </li>
                </ul>
            </div>

            <div class="wd-float-bottom wd-image-container">
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                     width="100%" height="400px"/>
                <div class="wd-title-bottom-left">SpaceX's Starship</div>
            </div>
    `);
}
export default ExploreScreen;
