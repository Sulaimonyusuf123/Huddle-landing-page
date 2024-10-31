import React from "react";


function Landing () {
    return (
       <div id='landing'>
        <div id='landings'>
            <div id='landing1'>
                <img src="./logo.svg" id='img9'alt="" />
                <div id='flex1'>
                    <img src="./phone-solid.svg"  id='img11'alt="" />
                    <p>Phone: +09032691151</p>
                </div>
                <div id='flex2'>
                    <img src="./ok.png" id='img10' alt="" />
                    <p><a href="#">examplefilo.com</a></p>
                </div>
            </div>
            <div id='landing2'>
                <ul>
                <li id='list1'><a href="#">About us</a></li>
                <li id='list2'><a href="#">Jobs</a></li>
                <li id='list3'><a href="#">Press</a></li>
                <li id='list4'><a href="#">Blog</a></li>
                </ul>
            </div>
            <div id='landing3'>
            <ul>
                <li id='list1'><a href="#">Contact us</a></li>
                <li id='list2'><a href="#">Terms</a></li>
                <li id='list3'><a href="#">Privacy</a></li>
                </ul>
            </div>
            <div id='landing4'>
<img src="./twitter.png" id='img20'alt="" />
<img src="./facebook.png" id='img21' alt="" />
<img src="./twitter.png" id='img22' alt="" />
            </div>
        </div>
       </div>
    )
}


export default Landing;