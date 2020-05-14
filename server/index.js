const express = require('express');
const template = require('./template');

const server = express();
server.use('/', express.static('build/client'));
server.get('*', (req, res) => res
  .send(template));
server.post('/offer-card', (req, res) => {
	console.log("Inside offer-card response");
	res.status(200).json({"offerData": "<style>#similar-offer:hover{color:hotpink;}</style><div style='position:absolute;left:6%;right:8%;top:5%;bottom:2.64%;background:linear-gradient(180deg,#E9EFFA 0%,#E9EFFA 53.65%,#E9EFFA 100%);border-radius:16px;'><div style=''><div id='offer-icon' style='position:absolute;width:20px;height:20px;left:25px;top:50px;background:radial-gradient(50% 50% at 50% 50%,#6E81DF 0%,#4064B3 100%);transform:matrix(-1,0,0,1,0,0);'></div><div id='offer-title' style='position:absolute;width:230px;height:20px;left:30px;top:50px;background:linear-gradient(90deg,rgba(110,145,223,0) 0%,#4064B3 100%);border-radius:0px 35px 35px 0px;'><span style='position:absolute;width:81px;height:15px;left:30px;top:4px;font-family:ProximaNova;font-style:normal;font-weight:600;font-size:12px;line-height:15px;/*identicaltoboxheight*/text-transform:capitalize;color:#FFFFFF;'>ExclusiveOffer</span></div></div><div id='offer-text' style='position:absolute;width:216px;height:21px;left:40px;top:100px;font-family:ProximaNova;font-style:normal;font-weight:bold;font-size:17px;line-height:21px;/*identicaltoboxheight*/text-transform:capitalize;color:#000000;'>20% Off</div><div id='offer-description' style='position:absolute;width:216px;height:32px;left:40px;top:170px;font-family:ProximaNova;font-style:normal;font-weight:normal;font-size:13px;line-height:16px;/*or123%*/color:#4A4A4A;'>Get upto <strong>2</strong>Qty at <strong> Rs80 </strong>and additional Qty at<strong>90</strong></div><div id='tc-apply'style='position:absolute;width:44px;height:18px;left:40px;top:210px;font-family:ProximaNova;font-style:normal;font-weight:600;font-size:9px;line-height:18px;/*identicaltoboxheight,or200%*/color:#8F8F8F;'><span>TCapply</span></div><div onClick=handleJavelinClick() id='similar-offers' style='position:absolute;width:120px;height:24px;left:130px;top:250px;background:#FFFFFF;border-radius:64px;'><a id='similar-offer' style='position:absolute;top:3px;left:20px;font-family:ProximaNova;font-style:normal;font-weight:600;font-size:12px;line-height:15px;text-align:center;text-transform:capitalize;' href='default.asp'>SimilarOffers</a><div></div></div>"});
	//res.status(200).json({"offerData" :"<button onClick='handleJavelinClick()'>hello world</button>"})
});
	server.listen(3000, function() {
    console.log('server running at http://localhost:3000');
});
