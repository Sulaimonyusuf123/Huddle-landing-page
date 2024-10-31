import React from "react";
import './header.css';



function Message() {
 return (
 <div class='start'>
    <div class='first'>
<img src="./logo.svg" id='img1' alt="" />
<div id='test'>
<p>Features</p>
<p>Team</p>
<p>sign in</p>
</div>
</div>
<div class='second'>
    <div id='third'>
    <h2>All your files in one secure <br />location, accessible anywhere.</h2>
    <p> fylo stores your most important files in one secure location, Acces <br />them wherever you need, share and collaborate with friends, families and co-workers</p>
    <div id='get'>
<input type="text" placeholder="enter your email" id='input1' />
<button id='btn1'>Get Started</button>
</div>
</div>
<div id='fourth'>
<img src="./illustration-1.svg"  id='img2'alt="" />
</div>
</div>
 </div>
 
 
 )
}

export default Message;