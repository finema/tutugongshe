!function(t){var i={};function e(s){if(i[s])return i[s].exports;var h=i[s]={i:s,l:!1,exports:{}};return t[s].call(h.exports,h,h.exports,e),h.l=!0,h.exports}e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var h in t)e.d(s,h,function(i){return t[i]}.bind(null,h));return s},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="dist/",e(e.s=0)}([function(t,i,e){"use strict";e.r(i);class s{constructor(t="",i,e,s,h,n,o,c=0,r=0){this.img=new Image,this.img.src=t,this.sx=i,this.sy=e,this.swidth=s,this.sheight=h,this.x=c,this.y=r,this.width=n,this.height=o,this.visible=!0}drawToCanvas(t){if(this.visible){var i=this.img;t.drawImage(i,this.sx,this.sy,this.swidth,this.sheight,this.x,this.y,this.width,this.height)}}isCollideWith(t){let i=t.x+t.width/2,e=t.y+t.height/2;return!(!this.visible||!t.visible)&&!!(i>=this.x&&i<=this.x+this.width&&e>=this.y&&e<=this.y+this.height)}}document.documentElement.clientWidth||document.body.clientWidth;const h=document.documentElement.clientHeight||document.body.clientHeight,n=1920/h;class o extends s{constructor(t,i,e,s,o){super(t,i[0],i[1],e,s,e/n,s/n);this.x=h*o[0],this.y=h*o[1]}checkIsFingerOnThis(t,i){console.log("check XY",t,i);return!!(t>=this.x-0&&i>=this.y-0&&t<=this.x+this.width+0&&i<=this.y+this.height+0)}}const c=document.documentElement.clientWidth||document.body.clientWidth,r=(document.documentElement.clientHeight||document.body.clientHeight,1080/c),d="images/Mission1/BG1.png",a="images/Mission1/BG2.png",u="images/Mission1/BG3.png",l="images/Mission1/BG4.png",m=1080,g=1920;class p extends s{constructor(t){super(a,0,0,1080,1920,0,0,m/r,g/r),this.sw1=-1080,this.sw2=0,this.sw3=1080,this.sw4=2160,this.sWidth=1080,this.sHeight=1920,this.img1=new Image,this.img1.src=d,this.img3=new Image,this.img3.src=u,this.img4=new Image,this.img4.src=l,this.render(t)}update(t){this.sw1-=t,this.sw2-=t,this.sw3-=t,this.sw4-=t}render(t){t.drawImage(this.img1,0,0,this.sWidth,this.sHeight,this.sw1/r,0,m/r,g/r),t.drawImage(this.img,0,0,this.sWidth,this.sHeight,this.sw2/r,0,m/r,g/r),t.drawImage(this.img3,0,0,this.sWidth,this.sHeight,this.sw3/r,0,m/r,g/r),t.drawImage(this.img4,0,0,this.sWidth,this.sHeight,this.sw4/r,0,m/r,g/r)}}const y=document.documentElement.clientWidth||document.body.clientWidth,w=(document.documentElement.clientHeight||document.body.clientHeight,1080/y),v="images/Mission1/welcome.png";class b extends s{constructor(t,i){super(v,0,0,770,400,770/w,400/w),this.points=[[0,0],[0,400],[0,800],[0,1200],[0,1600]],this.y=3.5*this.height,this.x=this.width/2.2,this.image=new Image,this.image.src=t,this.count=i}update(t=-1,i=-1){this.count<5?(this.sx=this.points[this.count][0],this.sy=this.points[this.count][1],this.count++):(this.img=this.image,-1==t?this.visible=!1:(this.visible=!0,this.sx=t,this.sy=i))}}const f=document.documentElement.clientWidth||document.body.clientWidth,x=(document.documentElement.clientHeight||document.body.clientHeight,1080/f);class I extends s{constructor(t,i,e,s,h,n,o,c,r){super(t,i,e,s,h,s/x,h/x,c,r),this.y=(h-r)/x,this.initsx=i,this.initsy=e}update(t=-1,i=-1){-1==t?(this.sx=this.initsx,this.sy=this.initsy):(this.sx=t,this.sy=i)}}const T=document.documentElement.clientWidth||document.body.clientWidth,E=document.documentElement.clientHeight||document.body.clientHeight,H=1080/T;var C=document.getElementById("myCanvas");C.getContext("2d");class W extends s{constructor(t,i,e,s,h,n){super(t,i[0],i[1],e[0],e[1],e[0]/H,e[1]/H),this.x1=i[0],this.x2=n[0],this.y1=i[1],this.y2=n[1],this.rect=[e[0],e[1]],this.isClearance=e[4],this.person=s,this.words=h;var o=T/2,c=E/2;this.x=o+this.width*e[2],this.y=c-this.height*e[3],this.touched=!1,this.initEvent()}update(t){this.x-=t/H}initEvent(){this.touchstart=this.spritetouchstart.bind(this),C.addEventListener("touchstart",this.touchstart)}click(){this.touched?(this.sx=this.x2,this.sy=this.y2,0==this.x2&&0==this.y2&&(this.swidth=0,this.sheight=0),this.touched=!1):(this.sx=this.x1,this.sy=this.y1,this.swidth=this.rect[0],this.sheight=this.rect[1])}spritetouchstart(t){t.preventDefault();let i=t.touches[0].clientX,e=t.touches[0].clientY;this.checkIsFingerOnThis(i,e)&&(this.touched=!0)}updateImg(t){var i=new Image;i.src=t,this.img=i}checkIsFingerOnThis(t,i){return!!(t>=this.x-0&&i>=this.y-0&&t<=this.x+this.width+0&&i<=this.y+this.height+0)}removeListener(){C.removeEventListener("touchstart",this.touchstart)}}const F=document.documentElement.clientWidth||document.body.clientWidth,L=(document.documentElement.clientHeight||document.body.clientHeight,1080/F);class k extends s{constructor(t,i,e,s){super(t,i[0][0],i[0][1],e,s,e/L,s/L,0,0),this.points=i;this.x=F-this.width,this.y=0}update(t){this.sx=this.points[t][0],this.sy=this.points[t][1]}}const M=document.documentElement.clientWidth||document.body.clientWidth,O=document.documentElement.clientHeight||document.body.clientHeight,B=1080/M;document.getElementById("myCanvas").getContext("2d");class S{renderComplete(t){init(t)}init(t){var i=new Image;i.src="images/extra/complete.png",t.drawImage(i,0,0,1080,1920,0,0,1080/B,1920/B),this.again=new o("images/extra/btnsprite.png",[1462,164],407,122,[.05,.3]),this.again.drawToCanvas(t),this.next=new o("images/extra/btnsprite.png",[1053,164],407,122,[.32,.3]),this.next.drawToCanvas(t),this.getCet=new o("images/extra/btnsprite.png",[1,181],407,122,[.2,.4]);var e=new Image;e.src="images/extra/winner.png",this.getCet.drawToCanvas(t),t.drawImage(e,0,0,992,1095,.04*M,.45*O,992/B,1095/B)}}var j=document.getElementById("myCanvas");let A=j.getContext("2d"),D=0;const X=document.documentElement.clientWidth||document.body.clientWidth;document.documentElement.clientHeight||document.body.clientHeight;class _{constructor(){this.aniId=0,this.personalHighScore=null,this.scale=1080/X,this.keyImg="./images/Mission1/object.png",this.complete=new S,this.restart(),this.initevent()}restart(){this.removeAllTouchListner(),this.scores=[0,0,0,0,0],this.rightwindow=new W(this.keyImg,[1433,506],[340,580,.3,.5],[-1,-1],[-1,-1],[416,506]),this.fly=new W(this.keyImg,[110,0],[80,80,2,1,1],[0,0],[0,800],[0,0]),this.fly.visible=!1;var t=[[[690,140],[960,140],[400,930],[770,800]],[[1230,140],[0,506],[800,930],[0,400]],[[1390,0],[0,0],[800,0],[0,0]],[[0,0],[0,0],[800,0],[770,0]],[[1455,0],[0,0],[400,0],[770,400]],[[0,140],[0,0],[800,0],[770,1200]],[[753,506],[1093,506],[-1,-1],[-1,-1]]],i=[[270,270,2.9,1.3,1],[413,366,-3.1,.39,1],[65,115,11.2,.81,0],[110,50,9,.61,0],[120,120,16.9,-1.5,1],[160,160,6.8,-.9,0],[340,580,-.5,.5,0]];this.bg=new p(A),this.pic=new W(this.keyImg,[160,140],[180,200,7,2,1],[0,0],[0,1200],[340,140]),this.pic.ischange=!1;for(var e=[],s=0;s<t.length;s++){var h=new W(this.keyImg,t[s][0],i[s],t[s][2],t[s][3],t[s][1]);e.push(h)}this.spritesForType2=e,this.player=new I("./images/Mission1/person.png",0,930,400,930,400/this.scale,930/this.scale,0,0),this.welcome=new b("./images/Mission1/words.png",1);this.scoreImg=new k("./images/Mission1/object.png",[[590,0],[790,0],[1190,0],[990,0],[390,0],[190,0]],200,110),this.bindLoop=this.loop.bind(this),this.hasEventBind=!1,window.cancelAnimationFrame(this.aniId),this.aniId=window.requestAnimationFrame(this.bindLoop,j)}render(){if(A.clearRect(0,0,j.width,j.height),this.isSuccess()<5){this.bg.render(A);for(var t=0;t<this.spritesForType2.length;t++)this.spritesForType2[t].drawToCanvas(A);this.pic.drawToCanvas(A),this.welcome.drawToCanvas(A),this.rightwindow.drawToCanvas(A),this.fly.drawToCanvas(A),this.player.drawToCanvas(A),this.scoreImg.drawToCanvas(A)}else this.removeAllTouchListner(),this.complete.init(A),this.touchHandler=this.completetouch.bind(this),j.addEventListener("touchstart",this.touchHandler)}completetouch(t){t.preventDefault();let i=t.touches[0].clientX,e=t.touches[0].clientY;this.complete.again.checkIsFingerOnThis(i,e)&&this.restart()}loop(){this.render(),this.aniId=window.requestAnimationFrame(this.bindLoop,j)}initevent(){this.touchstart=this.eventTouchstart.bind(this),j.addEventListener("touchstart",this.touchstart),this.touchend=this.eventTouchend.bind(this),j.addEventListener("touchend",this.touchend.bind(this)),this.touchmove=this.eventTouchmove.bind(this),j.addEventListener("touchmove",this.touchmove.bind(this))}isSuccess(){var t=0;return this.scores.forEach(function(i){t+=i}),t}eventTouchstart(t){t.preventDefault();let i=t.touches[0].clientX;D=i}eventTouchend(t){t.preventDefault();var i=-1;if(this.welcome.count<5)this.welcome.update();else{for(var e=[-1,-1],s=[-1,-1],h=!1,n=0;n<this.spritesForType2.length;n++)1==this.spritesForType2[n].isClearance&&i++,this.spritesForType2[n].touched&&(1==this.spritesForType2[n].isClearance&&(this.scores[i]=1),e=this.spritesForType2[n].person,s=this.spritesForType2[n].words,h=!0),this.spritesForType2[n].click();h||(i++,this.pic.touched&&0==this.pic.ischange?(this.scores[i]=1,this.pic.sx=this.pic.x2,this.pic.sy=this.pic.y2,this.pic.swidth=350,this.pic.sheight=240,this.pic.width=350/this.scale,this.pic.height=240/this.scale,this.pic.y=this.pic.y-this.pic.height/8,this.pic.touched=!1,e=this.pic.person,s=this.pic.words,this.pic.ischange=!0):this.pic.touched||1!=this.pic.ischange||(this.pic.ischange=!1,this.pic.sx=this.pic.x1,this.pic.sy=this.pic.y1,this.pic.swidth=180,this.pic.sheight=220,this.pic.y=this.pic.y+this.pic.height/8,this.pic.width=180/this.scale,this.pic.height=220/this.scale),i++,this.fly.touched?(this.scores[i]=1,e=this.fly.person,s=this.fly.words,this.fly.click()):this.fly.click(),this.rightwindow.touched?(this.rightwindow.click(),this.fly.visible=!0):(this.rightwindow.click(),this.fly.visible=!1)),this.player.update(e[0],e[1]),this.welcome.update(s[0],s[1])}this.scoreImg.update(this.isSuccess())}eventTouchmove(t){if(t.preventDefault(),this.welcome.count>4){let s=t.touches[0].clientX;var i=(D-s)*this.scale;if(this.bg.sw2-i<1080&&this.bg.sw2-i>-1840){this.bg.update(i);for(var e=0;e<this.spritesForType2.length;e++)this.spritesForType2[e].update(i);this.pic.update(i),this.fly.update(i),this.rightwindow.update(i),D=s}}}removeAllTouchListner(){if(j.removeEventListener("touchstart",this.touchstart),j.removeEventListener("touchend",this.touchend),j.removeEventListener("touchmove",this.touchmove),void 0!==this.spritesForType2){for(var t=0;t<this.spritesForType2.length;t++)this.spritesForType2[t].removeListener();this.pic.removeListener(),this.fly.removeListener(),this.rightwindow.removeListener()}}}const G=document.documentElement.clientWidth||document.body.clientWidth,P=(document.documentElement.clientHeight||document.body.clientHeight,1080/G);var q=document.getElementById("myCanvas");let Y=q.getContext("2d");var R=document.getElementById("myCanvas");const z=document.documentElement.clientWidth||document.body.clientWidth,J=document.documentElement.clientHeight||document.body.clientHeight;R.width=z,R.height=J,new class{constructor(){this.personalHighScore=null,this.scale=1080/G,this.init()}init(){this.keyImg=new Image,this.keyImg.src="./images/extra/gameStartBG.png",this.play=new o("./images/extra/btnsprite.png",[1053,1],910,161,[.049,.689]),this.touchend=this.eventTouchend.bind(this),q.addEventListener("touchstart",this.touchend),this.bindLoop=this.loop.bind(this),this.aniId=window.requestAnimationFrame(this.bindLoop,q)}eventTouchend(t){t.preventDefault();let i=t.touches[0].clientX,e=t.touches[0].clientY;this.play.checkIsFingerOnThis(i,e)&&(q.removeEventListener("touchstart",this.touchend),new _)}render(){var t=this.keyImg;t.onload=function(){Y.drawImage(t,0,0,1080,1920,0,0,1080/P,1920/P)},this.play.drawToCanvas(Y),this.aniId=window.requestAnimationFrame(this.bindLoop,q)}loop(){this.render()}}}]);