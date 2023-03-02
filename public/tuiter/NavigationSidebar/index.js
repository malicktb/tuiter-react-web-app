const NavigationSidebar = () => {
    return(`
   <div class="row">

        <div class="col-12">
            <ul class="list-group">
                <li class="list-group-item"><i class="fab fa-twitter"></i></li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-2"><i class="fa fa-home"></i></div>
                        <div class="col-10"><span class="d-none d-xl-block">Home</span></div>
                    </div>
                </li>
                <li class="list-group-item active">
                    <div class="row">
                        <div class="col-2"><i class="fa fa-hashtag"></i></div>
                        <div class="col-10"><span class="d-none d-xl-block">Explore</span></div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-2"><i class="fa fa-bell"></i></div>
                        <div class="col-10"><span class="d-none d-xl-block">Notifications</span></div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-2"><i class="fa fa-envelope"></i></div>
                        <div class="col-10"><span class="d-none d-xl-block">Message</span></div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-2"><i class="fa fa-bookmark"></i></div>
                        <div class="col-10"><span class="d-none d-xl-block">Bookmarks</span></div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-2"><i class="fa fa-list"></i></div>
                        <div class="col-10"><span class="d-none d-xl-block">Lists</span></div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-2"><i class="fa fa-user"></i></div>
                        <div class="col-10"><span class="d-none d-xl-block">Profile</span></div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-2"><i class="fa fa-ellipsis-h"></i></div>
                        <div class="col-10"><span class="d-none d-xl-block">More</span></div>
                    </div>
                </li>
            </ul>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}



export default NavigationSidebar;

