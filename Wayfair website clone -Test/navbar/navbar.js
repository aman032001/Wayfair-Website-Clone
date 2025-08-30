function navbar(){

    return`
    <div id="Fcon">
        <div id="Fconlinkdiv">
        <h3 id="fcon">Wayfair</h3>
        <a class="FconLink" href="">AllModern</a>
        <a class="FconLink" href="">Birch Lane</a>
        <a class="FconLink" href="">Joss & Main</a>
        <a class="FconLink" href="">Perigold</a>
        </div>
    </div>
    <div id="Scon">
        <div id="sconlinkdiv1">
            <a class="sconlink1" href="">Up to 70% OFF | Labor Day Clearance feat. GE Appliances <i class="fa-solid fa-arrow-right aa"></i>
            
            </a>
        </div>
        <div id="sconlinkdiv2">
            <a class="sconlink2" href="">Rewards</a>
            <span class="span1">|</span>
            <a class="sconlink2" href="">Financing </a>
            <span class="span1">|</span>
            <a class="sconlink2" href="">Professional </a>
            <span class="span1">|</span>
            <a class="sconlink2" href="">Free & Easy Delivery Over $35*</a>

        </div>
    </div>

    <!-- Navbar -->
    <div id="navbar">
           <div id="imgdiv">
            <img id="logoimg" src="https://bl-i.thgim.com/public/incoming/13yll7/article68367341.ece/alternates/FREE_1200/wayfair.png" alt="">
           </div>
           <div id="searchbar"> 
            <input type="text" name="" id="search" placeholder="Find anything home..." >
            <button id="searchbtn"><i class="fa-solid fa-magnifying-glass bb"></i></button>
           </div>
           <div id="logandcart">
            <a class="lclink" href=""><i class="fa-solid fa-user"></i> Sign In </a>
            <a class="lclink" href=""><i class="fa-solid fa-cart-shopping"></i> Cart</a>
           </div>
    </div>


    <div id="navlinks">
        <a class="navlink" href="">Furniture</a>
        <a class="navlink" href="">Outdoor</a>
        <a class="navlink" href="">Bedding & Bath</a>
        <a class="navlink" href="">Rugs</a>
        <a class="navlink" href="">Decor & Pillow</a>
        <a class="navlink" href="">Lighting</a>
        <a class="navlink" href="">Organization</a>
        <a class="navlink" href="">Kitchen</a>
        <a class="navlink" href="">Baby & Kids</a>
        <a class="navlink" href="">Home Improvement</a>
        <a class="navlink" href="">Appliances</a>
        <a class="navlink" href="">Pet</a>
        <a class="navlink" href="">Holiday</a>
        <a class="navlink" href="">Shop by Room</a>
        <a class="navlink" href="">Verified</a>
        <a id="sale" class="navlink" href="">Sale</a>

    </div>`
}

export default navbar