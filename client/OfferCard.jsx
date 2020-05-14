import React, { Component } from 'react';

/*function createMarkup() {
    return {__html: `<div id="offer-card-container" style="position:absolute;width:320px;height:330px;left:0px;top:0px;background:#FFFFFF;"><style>#similar-offer:hover{color:hotpink;}</style><div style="position:absolute;left:6%;right:8%;top:5%;bottom:2.64%;background:linear-gradient(180deg,#E9EFFA0%,#E9EFFA53.65%,#E9EFFA100%);border-radius:16px;"><div style=""><div id="offer-icon" style="position:absolute;width:20px;height:20px;left:25px;top:50px;background:radial-gradient(50%50%at50%50%,#6E81DF0%,#4064B3100%);transform:matrix(-1,0,0,1,0,0);"></div><div id="offer-title" style="position:absolute;width:230px;height:20px;left:30px;top:50px;background:linear-gradient(90deg,rgba(110,145,223,0)0%,#4064B3100%);border-radius:0px35px35px0px;"><span style="position:absolute;width:81px;height:15px;left:30px;top:4px;font-family:ProximaNova;font-style:normal;font-weight:600;font-size:12px;line-height:15px;/!*identicaltoboxheight*!/text-transform:capitalize;color:#FFFFFF;">ExclusiveOffer</span></div></div><div id="offer-text" style="position:absolute;width:216px;height:21px;left:40px;top:100px;font-family:ProximaNova;font-style:normal;font-weight:bold;font-size:17px;line-height:21px;/!*identicaltoboxheight*!/text-transform:capitalize;color:#000000;">20%Off</div><div id="offer-description" style="position:absolute;width:216px;height:32px;left:40px;top:170px;font-family:ProximaNova;font-style:normal;font-weight:normal;font-size:13px;line-height:16px;/!*or123%*!/color:#4A4A4A;">Getupto<strong>2</strong>Qtyat<strong>Rs80</strong>andadditionalQtyat<strong>90</strong></div><div id="tc-apply" style="position:absolute;width:44px;height:18px;left:40px;top:210px;font-family:ProximaNova;font-style:normal;font-weight:600;font-size:9px;line-height:18px;/!*identicaltoboxheight,or200%*!/color:#8F8F8F;"><span>TCapply</span></div><div id="similar-offers" style="position:absolute;width:120px;height:24px;left:130px;top:250px;background:#FFFFFF;border-radius:64px;"><a id="similar-offer"style="position:absolute;top:3px;left:20px;font-family:ProximaNova;font-style:normal;font-weight:600;font-size:12px;line-height:15px;text-align:center;text-transform:capitalize;"href="default.asp">SimilarOffers</a><div></div></div>`};
}*/


//note: self invoking of function which is assigned to a variable doesn't work here, since webpack doesn't expose globally
//Since onclick events are in global scope,
// making on javelin submit listener available in global scope for access
window.handleJavelinClick = function() {
    alert("on click event listener");
};

class OfferCard extends Component {

  constructor() {
    super();
    this.createMarkup = this.createMarkup.bind(this);
    this.state = {
        offerCardContent : {__html: `<div>hello World</div>`}
    };
  }

  createMarkup() {

    //return {__html: `<div id="offer-card-container" style="position:absolute;width:320px;height:330px;left:0px;top:0px;background:#FFFFFF;"><style>#similar-offer:hover{color:hotpink;}</style><div style="position:absolute;left:6%;right:8%;top:5%;bottom:2.64%;background:linear-gradient(180deg,#E9EFFA0%,#E9EFFA53.65%,#E9EFFA100%);border-radius:16px;"><div style=""><div id="offer-icon" style="position:absolute;width:20px;height:20px;left:25px;top:50px;background:radial-gradient(50%50%at50%50%,#6E81DF0%,#4064B3100%);transform:matrix(-1,0,0,1,0,0);"></div><div id="offer-title" style="position:absolute;width:230px;height:20px;left:30px;top:50px;background:linear-gradient(90deg,rgba(110,145,223,0)0%,#4064B3100%);border-radius:0px35px35px0px;"><span style="position:absolute;width:81px;height:15px;left:30px;top:4px;font-family:ProximaNova;font-style:normal;font-weight:600;font-size:12px;line-height:15px;/!*identicaltoboxheight*!/text-transform:capitalize;color:#FFFFFF;">ExclusiveOffer</span></div></div><div id="offer-text" style="position:absolute;width:216px;height:21px;left:40px;top:100px;font-family:ProximaNova;font-style:normal;font-weight:bold;font-size:17px;line-height:21px;/!*identicaltoboxheight*!/text-transform:capitalize;color:#000000;">20%Off</div><div id="offer-description" style="position:absolute;width:216px;height:32px;left:40px;top:170px;font-family:ProximaNova;font-style:normal;font-weight:normal;font-size:13px;line-height:16px;/!*or123%*!/color:#4A4A4A;">Getupto<strong>2</strong>Qtyat<strong>Rs80</strong>andadditionalQtyat<strong>90</strong></div><div id="tc-apply" style="position:absolute;width:44px;height:18px;left:40px;top:210px;font-family:ProximaNova;font-style:normal;font-weight:600;font-size:9px;line-height:18px;/!*identicaltoboxheight,or200%*!/color:#8F8F8F;"><span>TCapply</span></div><div id="similar-offers" style="position:absolute;width:120px;height:24px;left:130px;top:250px;background:#FFFFFF;border-radius:64px;"><a id="similar-offer"style="position:absolute;top:3px;left:20px;font-family:ProximaNova;font-style:normal;font-weight:600;font-size:12px;line-height:15px;text-align:center;text-transform:capitalize;"href="default.asp">SimilarOffers</a><div></div></div>`};
     // return {__html:`<div id="offer-card-container" style="position:absolute;width:320px;height:330px;left:0px;top:0px;background:#FFFFFF;"><style>#similar-offer:hover{color:hotpink;}</style><div style="position:absolute;left:6%;right:8%;top:5%;bottom:2.64%;background:linear-gradient(180deg,#E9EFFA 0%,#E9EFFA 53.65%,#E9EFFA 100%);border-radius:16px;"><div style=""><div id="offer-icon" style="position:absolute;width:20px;height:20px;left:25px;top:50px;background:radial-gradient(50% 50% at 50% 50%,#6E81DF 0%,#4064B3 100%);transform:matrix(-1,0,0,1,0,0);"></div><div id="offer-title" style="position:absolute;width:230px;height:20px;left:30px;top:50px;background:linear-gradient(90deg,rgba(110,145,223,0) 0%,#4064B3 100%);border-radius:0px 35px 35px 0px;"><span style="position:absolute;width:81px;height:15px;left:30px;top:4px;font-family:ProximaNova;font-style:normal;font-weight:600;font-size:12px;line-height:15px;/!*identicaltoboxheight*!/text-transform:capitalize;color:#FFFFFF;">ExclusiveOffer</span></div></div><div id="offer-text" style="position:absolute;width:216px;height:21px;left:40px;top:100px;font-family:ProximaNova;font-style:normal;font-weight:bold;font-size:17px;line-height:21px;/!*identicaltoboxheight*!/text-transform:capitalize;color:#000000;">20% Off</div><div id="offer-description" style="position:absolute;width:216px;height:32px;left:40px;top:170px;font-family:ProximaNova;font-style:normal;font-weight:normal;font-size:13px;line-height:16px;/!*or123%*!/color:#4A4A4A;">Get upto <strong>2</strong>Qty at <strong> Rs80 </strong>and additional Qty at<strong>90</strong></div><div id="tc-apply"style="position:absolute;width:44px;height:18px;left:40px;top:210px;font-family:ProximaNova;font-style:normal;font-weight:600;font-size:9px;line-height:18px;/!*identicaltoboxheight,or200%*!/color:#8F8F8F;"><span>TCapply</span></div><div id="similar-offers" style="position:absolute;width:120px;height:24px;left:130px;top:250px;background:#FFFFFF;border-radius:64px;"><a id="similar-offer" style="position:absolute;top:3px;left:20px;font-family:ProximaNova;font-style:normal;font-weight:600;font-size:12px;line-height:15px;text-align:center;text-transform:capitalize;" href="default.asp">SimilarOffers</a><div></div></div>` }
  }

  componentDidMount() {
      //fetching html and css for offer card from server
      fetch('/offer-card', {method: "post"})
          .then(response => response.json())
          .then(data => {
              this.setState({offerCardContent: {__html: data.offerData}});
          });
  }



  render() {
    //placeholder for rendering content from server
    return (
        <div dangerouslySetInnerHTML={this.state.offerCardContent} />
    );
  }
}

export default OfferCard;
