!function(t){var i={};function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,i,e){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)s.d(e,n,function(i){return t[i]}.bind(null,n));return e},s.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="dist/",s(s.s=0)}([function(t,i,s){"use strict";s.r(i);class e{constructor(t="",i,s,e,n,h,o,a=0,c=0){this.img=new Image,this.img.src=t,this.sx=i,this.sy=s,this.swidth=e,this.sheight=n,this.x=a,this.y=c,this.width=h,this.height=o,this.visible=!0}drawToCanvas(t){this.visible&&t.drawImage(this.img,this.sx,this.sy,this.swidth,this.sheight,this.x,this.y,this.width,this.height)}isCollideWith(t){let i=t.x+t.width/2,s=t.y+t.height/2;return!(!this.visible||!t.visible)&&!!(i>=this.x&&i<=this.x+this.width&&s>=this.y&&s<=this.y+this.height)}}const n=document.documentElement.clientWidth||document.body.clientWidth,h=document.documentElement.clientHeight||document.body.clientHeight,o=1920;let a=1080/n;class c extends e{constructor(t,i,s,e,n){super(i,0,0,1080,1920,0,0,1080/a,o/a),this.sizeW=s,this.sizeH=e,this.sWidth=1080,this.sHeight=1920,this.initx=n,this.minX=0,this.maxX=s-1080,this.render(t)}update(t){this.x+=t,this.x=this.x<this.minX?this.minX:this.x,this.x=this.x>this.maxX?this.maxX:this.x}init(){this.x=this.initx}render(t){t.drawImage(this.img,this.x,0,this.sWidth,this.sHeight,0,0,n,h)}isIntheExtent(t){return this.x+t>=this.minX&&this.x+t<=this.maxX}}const r=document.documentElement.clientWidth||document.body.clientWidth,d=document.documentElement.clientHeight||document.body.clientHeight;let u=1080/r*1.6;class l extends e{constructor(t,i,s,e,n,h){super(s,0,0,n,h,n/u,h/u),this.points=i,this.y=d*e[1],this.x=r*e[0],this.image=new Image,this.image.src=t,this.sx=this.points[0][0],this.sy=this.points[0][1],this.count=0}update(t,i=-1,s=-1){this.count<this.points.length?(this.y=d*t[1],this.x=r*t[0],this.sx=this.points[this.count][0],this.sy=this.points[this.count][1],this.count++):(this.y=d*t[1],this.x=r*t[0],this.img=this.image,-1==i?this.visible=!1:(this.visible=!0,this.sx=i,this.sy=s))}}const m=document.documentElement.clientWidth||document.body.clientWidth,p=document.documentElement.clientHeight||document.body.clientHeight;let g=1080/m;class v extends e{constructor(t,i,s,e,n,h,o,a,c){super(t,i,s,e,n,h,o),this.x=m*a,this.y=p*c,this.initsx=i,this.initsy=s,this.initx=m*a}fresh(t){this.x-=t/g}init(){this.x=this.initx}update(t=-1,i=-1){-1==t?(this.sx=this.initsx,this.sy=this.initsy):(this.sx=t,this.sy=i)}}const w=document.documentElement.clientWidth||document.body.clientWidth,y=document.documentElement.clientHeight||document.body.clientHeight,x=1080/w,b=1920/y;class T extends e{constructor(t,i,s,e,n,h){super(t,i[0],i[1],s[0],s[1],s[0]/x,s[1]/b),this.x1=i[0],this.x2=h[0],this.y1=i[1],this.y2=h[1],this.rect=[s[0],s[1]],this.isClearance=s[4],this.person=e,this.words=n;var o=w/2,a=y/2;this.x=o+this.width*s[2],this.y=a-this.height*s[3],this.initx=o+this.width*s[2],this.touched=!1}update(t){this.x-=t/x}init(){this.touched=!1,this.x=this.initx,this.sx=this.x1,this.sy=this.y1}initEvent(){canvas.addEventListener("touchend",(t=>{t.preventDefault()}).bind(this)),canvas.addEventListener("touchstart",(t=>{t.preventDefault();let i=t.touches[0].clientX,s=t.touches[0].clientY;this.checkIsFingerOnThis(i,s)?this.touched=!0:this.touched=!1}).bind(this))}updateImg(t){var i=new Image;i.src=t,this.img=i}drawToCanvas(t){1==this.touched?(this.sx=this.x2,this.sy=this.y2,0==this.x2&&0==this.y2&&(this.swidth=0,this.sheight=0)):(this.sx=this.x1,this.sy=this.y1,this.swidth=this.rect[0],this.sheight=this.rect[1]),super.drawToCanvas(t)}checkIsFingerOnThis(t,i){return!!(t>=this.x-0&&i>=this.y-0&&t<=this.x+this.width+0&&i<=this.y+this.height+0)}removeListener(){canvas.removeEventListener("touchstart",this.touchstart)}}canvas.getContext("2d");const f=document.documentElement.clientWidth||document.body.clientWidth,I=document.documentElement.clientHeight||document.body.clientHeight,E=1080/f,F=1920/I;let L=["./images/Score/Score4.png","./images/Score/Score5.png"],C=[[[810,2],[608,2],[406,2],[204,2],[2,2]],[[2,512],[2,410],[2,308],[2,206],[2,104],[2,2]]],S=200,M=100;class A extends e{constructor(t){var i=C[t][0][0],s=C[t][0][1];super(L[t],i,s,S,M,S/E,M/F,0,0),this.points=C[t];this.x=f-this.width,this.y=0,this.type=t}update(t){this.sx=this.points[t][0],this.sy=this.points[t][1]}}let H=canvas.getContext("2d");document.documentElement.clientWidth||document.body.clientWidth;const W=document.documentElement.clientHeight||document.body.clientHeight;let k=canvas.getContext("2d");document.documentElement.clientWidth||document.body.clientWidth;const X=document.documentElement.clientHeight||document.body.clientHeight;const O=document.documentElement.clientWidth||document.body.clientWidth,B=document.documentElement.clientHeight||document.body.clientHeight,D=1080/O,j=1920/B;class q extends e{constructor(t,i,s,e,n){super(t,i[0],i[1],s,e,s/D,e/j);this.initx=O*n[0],this.x=O*n[0],this.y=B*n[1]}init(){this.touched=!1,this.x=this.initx}checkIsFingerOnThis(t,i){return!!(t>=this.x-0&&i>=this.y-0&&t<=this.x+this.width+0&&i<=this.y+this.height+0)}}const P=document.documentElement.clientWidth||document.body.clientWidth,Y=document.documentElement.clientHeight||document.body.clientHeight,_=1080/P,G=1920/Y;let z=canvas.getContext("2d"),R="./images/ChooseMission/ChooseBG.png",J=[[2,646],[388,324],[2,324],[388,2],[2,2]];const K=document.documentElement.clientWidth||document.body.clientWidth,N=document.documentElement.clientHeight||document.body.clientHeight,Q=1080/K,U=1920/N,V=new class{init(){this.atlas=new Image,this.atlas.src=R,this.miss=[];for(var t=0;t<J.length;t++){var i=Math.floor(t/2),s=t%2,e=new q("images/ChooseMission/ChooseMission.png",J[t],384,320,[.136+.38*s,.21+.17*i]);this.miss.push(e)}this.chooseMission=-1,this.fanwai=new q("images/Setting/Setting.png",[107,2],103,146,[.1,.91]),this.egg=new q("images/Setting/Setting.png",[317,2],103,146,[.33,.91]),this.test=new q("images/Setting/Setting.png",[212,2],103,146,[.57,.91]),this.setting=new q("images/Setting/Setting.png",[2,2],103,146,[.8,.91]),this.bindLoop=this.loop.bind(this),this.restart()}restart(){this.chooseMission=-1,this.aniId=window.requestAnimationFrame(this.bindLoop,canvas),this.touchstart=this.choose.bind(this),canvas.addEventListener("touchstart",this.touchstart)}loop(){this.aniId=window.requestAnimationFrame(this.bindLoop,canvas),this.render()}choose(t){t.preventDefault();let i=t.touches[0].clientX,s=t.touches[0].clientY;for(var e=0;e<this.miss.length;e++)if(this.miss[e].checkIsFingerOnThis(i,s)&&e<2){this.chooseMission=e;break}console.log(this.chooseMission)}render(){z.drawImage(this.atlas,0,0,1080,1920,0,0,1080/_,1920/G);for(var t=0;t<this.miss.length;t++)this.miss[t].drawToCanvas(z);this.egg.drawToCanvas(z),this.test.drawToCanvas(z),this.fanwai.drawToCanvas(z),this.setting.drawToCanvas(z),this.chooseMission>-1&&(console.log("choose to mission"),window.cancelAnimationFrame(this.aniId),canvas.removeEventListener("touchstart",this.touchstart),dt[this.chooseMission].restart())}};let Z=canvas.getContext("2d"),$="./images/Begin/BG.png";const tt=document.documentElement.clientWidth||document.body.clientWidth,it=document.documentElement.clientHeight||document.body.clientHeight,st=1080/tt,et=1920/it;let nt,ht=canvas.getContext("2d");s.d(i,"Mission",function(){return dt}),s.d(i,"complete",function(){return ut}),s.d(i,"start",function(){return lt}),s.d(i,"music",function(){return mt});var ot=document.getElementById("canvas");const at=document.documentElement.clientWidth||document.body.clientWidth,ct=document.documentElement.clientHeight||document.body.clientHeight;ot.width=at,ot.height=ct;const rt=new class{constructor(){this.aniId=0,this.MissionId=1,this.personalHighScore=null,this.scale=1920/W,this.keyImg="./images/Mission2/Mission2object.png",this.lastx=0,this.init()}init(){this.rightwindow=new T(this.keyImg,[1433,506],[340,580,.3,.5],[-1,-1],[-1,-1],[416,506]);var t=[[[124,841],[0,0],[1208,2],[2,2]],[[691,826],[691,561],[1610,2],[1041,2]],[[397,841],[0,0],[2,2],[2,464]],[[558,841],[0,0],[1208,2],[2,926]],[[2,841],[0,0],[404,2],[1041,464]],[[2,2],[0,0],[1208,2],[2,1850]]],i=[[271,235,2.1,-.85,0],[319,263,3.5,2.65,1],[159,216,11.5,-.9,1],[65,107,47.9,3.1,1],[120,247,11,-.65,1],[687,837,-.3,0,0]];this.bg=new c(H,"images/Mission2/BG2.png",4005,1920,0);for(var s=[],e=0;e<t.length;e++){var n=new T(this.keyImg,t[e][0],i[e],t[e][2],t[e][3],t[e][1]);s.push(n)}this.spritesForType2=s,this.women=new T("./images/Mission2/Mission2object.png",[691,2],[331,557,-1,1.11,0],[0,0],[-1,-1],[-1,-1]),this.player=new v("./images/Mission2/Mission2person.png",1208,2,400,930,400/this.scale,930/this.scale,0,.5),this.welcome=new l("./images/Mission2/Mission2words.png",[[1041,1850],[1041,1388],[2,1388],[1041,926]],"./images/Mission2/Mission2words.png",[.3,.7],1037,460),this.scoreImg=new A(0)}restart(){this.scores=[0,0,0,0],this.bindLoop=this.loop.bind(this);for(var t=0;t<this.spritesForType2.length;t++)this.spritesForType2[t].init();this.rightwindow.init(),this.women.init(),this.hasEventBind=!1,this.bg.init(),this.aniId=window.requestAnimationFrame(this.bindLoop,canvas),this.initevent()}render(){if(this.isSuccess()<this.scores.length){this.bg.render(H),this.women.drawToCanvas(H);for(var t=0;t<this.spritesForType2.length;t++)this.spritesForType2[t].drawToCanvas(H);this.welcome.drawToCanvas(H),this.rightwindow.drawToCanvas(H),this.player.drawToCanvas(H),this.scoreImg.drawToCanvas(H)}else this.removeAllTouchListner(),window.cancelAnimationFrame(this.aniId),ut.init("./images/extra/complete2.png",this.MissionId),canvas.addEventListener("touchstart",ut.touchstart);this.women.touched&&(this.removeAllTouchListner(),window.cancelAnimationFrame(this.aniId),ut.init("./images/extra/fail2.png",this.MissionId),canvas.addEventListener("touchstart",ut.touchstart))}completetouch(t){t.preventDefault();let i=t.touches[0].clientX,s=t.touches[0].clientY;this.completeScene.again.checkIsFingerOnThis(i,s)&&(canvas.removeEventListener("touchstart",this.touchstart),this.restart())}loop(){this.aniId=window.requestAnimationFrame(this.bindLoop,canvas),this.render()}initevent(){this.touchstart=this.eventTouchstart.bind(this),canvas.addEventListener("touchstart",this.touchstart),this.touchend=this.eventTouchend.bind(this),canvas.addEventListener("touchend",this.touchend),this.touchmove=this.eventTouchmove.bind(this),canvas.addEventListener("touchmove",this.touchmove)}isSuccess(){var t=0;return this.scores.forEach(function(i){t+=i}),t}eventTouchstart(t){t.preventDefault();let i=t.touches[0].clientX;this.lastx=i}eventTouchend(t){t.preventDefault();var i=-1;if(this.welcome.count<4)this.welcome.count<2?this.welcome.update([.4,.3]):this.welcome.update([.3,.7]);else{for(var s=[-1,-1],e=[-1,-1],n=!1,h=0;h<this.spritesForType2.length;h++)1==this.spritesForType2[h].isClearance&&i++,this.spritesForType2[h].touched&&(1==this.spritesForType2[h].isClearance&&(this.scores[i]=1),s=this.spritesForType2[h].person,e=this.spritesForType2[h].words,n=!0),this.spritesForType2[h].click();n||(i++,i++),this.player.update(s[0],s[1]),this.welcome.update([.3,.7],e[0],e[1])}this.scoreImg.update(this.isSuccess())}eventTouchmove(t){if(t.preventDefault(),this.welcome.count>3){let e=t.touches[0].clientX;var i=(this.lastx-e)*this.scale;if(console.log("移动"+i),this.bg.isIntheExtent(i)){this.bg.update(i);for(var s=0;s<this.spritesForType2.length;s++)this.spritesForType2[s].update(i);this.women.update(i),this.rightwindow.update(i),this.lastx=e}}}removeAllTouchListner(){if(canvas.removeEventListener("touchstart",this.touchstart),canvas.removeEventListener("touchend",this.touchend),canvas.removeEventListener("touchmove",this.touchmove),void 0!==this.spritesForType2){for(var t=0;t<this.spritesForType2.length;t++)this.spritesForType2[t].removeListener();this.rightwindow.removeListener()}}},dt=[new class{constructor(){this.aniId=0,this.MissionId=0,this.personalHighScore=null,this.scale=1920/X,this.keyImg="./images/Mission1/object.png",this.lastx=0,this.init()}init(){this.rightwindow=new T(this.keyImg,[631,1],[313,573,.3,.5],[-1,-1],[-1,-1],[946,1]),this.fly=new T(this.keyImg,[839,861],[64,74,2,1,1],[855,1],[1,639],[0,0]),this.fly.visible=!1;var t=[[[839,576],[1113,576],[1,1],[749,639]],[[1,576],[420,576],[855,938],[1,320]],[[1370,351],[0,0],[428,1],[1,1]],[[906,861],[0,0],[428,1],[749,1]],[[1261,351],[0,0],[1,938],[749,320]],[[1261,201],[0,0],[428,1],[749,1277]],[[1,1],[316,1],[-1,-1],[-1,-1]]],i=[[272,283,2.9,1.3,1],[417,361,-3.1,.39,1],[59,118,11.2,.81,0],[112,50,9,.61,0],[107,105,16.9,-1.5,1],[137,148,6.8,-.9,0],[313,573,-.5,.5,0]];this.bg=new c(k,"images/Mission1/BG.png",4e3,1920,1080),this.pic=new T(this.keyImg,[1261,1],[176,198,7,2,0],[0,0],[0,1200],[340,140]),this.pic.ischange=!1;for(var s=[],e=0;e<t.length;e++){var n=new T(this.keyImg,t[e][0],i[e],t[e][2],t[e][3],t[e][1]);s.push(n)}this.spritesForType2=s,this.player=new v("./images/Mission1/person.png",428,938,425,935,425/this.scale,935/this.scale,0,.5),this.welcome=new l("./images/Mission1/word.png",[[1,958],[1,1277],[1,1596],[1,958]],"images/Mission1/word.png",[.3,.7],746,317),this.scoreImg=new A(0)}restart(){this.scores=[0,0,0,0],this.bindLoop=this.loop.bind(this);for(var t=0;t<this.spritesForType2.length;t++)this.spritesForType2[t].init();this.fly.init(),this.rightwindow.init(),this.pic.init(),this.pic.ischange=!1,this.pic.swidth=180,this.pic.sheight=220,this.pic.y=this.pic.y+this.pic.height/8,this.pic.width=180/this.scale,this.pic.height=220/this.scale,this.hasEventBind=!1,this.bg.init(),this.aniId=window.requestAnimationFrame(this.bindLoop,canvas),this.initevent()}render(){if(k.clearRect(0,0,canvas.width,canvas.height),this.isSuccess()<this.scores.length){this.bg.render(k);for(var t=0;t<this.spritesForType2.length;t++)this.spritesForType2[t].drawToCanvas(k);this.pic.drawToCanvas(k),this.welcome.drawToCanvas(k),this.rightwindow.drawToCanvas(k),this.fly.drawToCanvas(k),this.player.drawToCanvas(k),this.scoreImg.drawToCanvas(k)}else this.removeAllTouchListner(),window.cancelAnimationFrame(this.aniId),ut.init("./images/extra/complete1.png",this.MissionId),canvas.addEventListener("touchstart",ut.touchstart);if(1==this.pic.ischange&&(this.removeAllTouchListner(),window.cancelAnimationFrame(this.aniId),ut.init("./images/extra/fail1.png",this.MissionId),canvas.addEventListener("touchstart",ut.touchstart)),4==this.welcome.count){for(t=0;t<this.spritesForType2.length;t++)this.spritesForType2[t].initEvent();this.rightwindow.initEvent(),this.fly.initEvent(),this.welcome.count=5}}loop(){this.aniId=window.requestAnimationFrame(this.bindLoop,canvas),this.render()}initevent(){this.touchstart=this.eventTouchstart.bind(this),canvas.addEventListener("touchstart",this.touchstart),this.touchend=this.eventTouchend.bind(this),canvas.addEventListener("touchend",this.touchend),this.touchmove=this.eventTouchmove.bind(this),canvas.addEventListener("touchmove",this.touchmove)}isSuccess(){var t=0;return this.scores.forEach(function(i){t+=i}),t}eventTouchstart(t){t.preventDefault(),console.log("touchstart");let i=t.touches[0].clientX;this.lastx=i}eventTouchend(t){t.preventDefault(),console.log("touchend");var i=-1;if(this.welcome.count<4)this.welcome.update([.3,.7]);else{for(var s=[-1,-1],e=[-1,-1],n=0;n<this.spritesForType2.length;n++)1==this.spritesForType2[n].isClearance&&i++,this.spritesForType2[n].touched&&(1==this.spritesForType2[n].isClearance&&(this.scores[i]=1),s=this.spritesForType2[n].person,e=this.spritesForType2[n].words);this.pic.touched&&(this.pic.ischange=!0,this.pic.touched=!1),i++,this.fly.touched&&(this.scores[i]=1,s=this.fly.person,e=this.fly.words),this.rightwindow.touched?this.fly.visible=!0:this.fly.visible=!1,this.player.update(s[0],s[1]),this.welcome.update([.3,.7],e[0],e[1])}this.scoreImg.update(this.isSuccess())}eventTouchmove(t){if(t.preventDefault(),this.welcome.count>3){let e=t.touches[0].clientX;var i=(this.lastx-e)*this.scale;if(console.log("移动"+i),this.bg.isIntheExtent(i)){this.bg.update(i);for(var s=0;s<this.spritesForType2.length;s++)this.spritesForType2[s].update(i);this.pic.update(i),this.fly.update(i),this.rightwindow.update(i),this.lastx=e}}}removeAllTouchListner(){if(canvas.removeEventListener("touchstart",this.touchstart),canvas.removeEventListener("touchend",this.touchend),canvas.removeEventListener("touchmove",this.touchmove),void 0!==this.spritesForType2){for(var t=0;t<this.spritesForType2.length;t++)this.spritesForType2[t].removeListener();this.pic.removeListener(),this.fly.removeListener(),this.rightwindow.removeListener()}}},rt],ut=new class{constructor(){this.atlas=new Image}init(t,i){this.missionId=i,this.clickType=-1,this.atlas.src=t,this.again=new q("images/extra/btnsprite.png",[1462,164],407,122,[.05,.3]),this.next=new q("images/extra/btnsprite.png",[1053,164],407,122,[.55,.3]),this.getCet=new q("images/extra/btnsprite.png",[1,181],407,122,[.3,.4]),this.touchstart=this.completetouch.bind(this),this.bindLoop=this.loop.bind(this),this.aniId=window.requestAnimationFrame(this.bindLoop,canvas)}loop(){this.aniId=window.requestAnimationFrame(this.bindLoop,canvas),this.render()}render(){ht.drawImage(this.atlas,0,0,1080,1920,0,0,1080/st,1920/et),this.again.drawToCanvas(ht),this.next.drawToCanvas(ht),this.getCet.drawToCanvas(ht),0==this.clickType?(window.cancelAnimationFrame(this.aniId),canvas.removeEventListener("touchstart",ut.touchstart),dt[ut.missionId].restart()):1==ut.clickType&&(window.cancelAnimationFrame(this.aniId),canvas.removeEventListener("touchstart",ut.touchstart),ut.missionId<1?dt[ut.missionId+1].restart():V.restart())}completetouch(t){t.preventDefault();let i=t.touches[0].clientX,s=t.touches[0].clientY;console.log(ut.clickType),ut.again.checkIsFingerOnThis(i,s)&&(ut.clickType=0),ut.next.checkIsFingerOnThis(i,s)&&(ut.clickType=1)}},lt=new class{init(){this.atlas=new Image,this.atlas.src=$,this.point=new Image,this.point.src="./images/extra/point.png",this.pointx=-1,this.pointy=-1,this.pointShow=0,mt.playBgm(),this.start=new q("./images/Begin/start.png",[0,0],910,361,[.08,.7]),this.start.drawToCanvas(Z),this.isStart=0,this.bindLoop=this.loop.bind(this),this.aniId=window.requestAnimationFrame(this.bindLoop,canvas),this.touchstart=this.completetouch.bind(this),canvas.addEventListener("touchstart",this.touchstart),this.pointstart=this.pointtouch.bind(this),canvas.addEventListener("touchstart",this.pointstart),this.pointmove=this.touchmove.bind(this),canvas.addEventListener("touchstart",this.pointmove)}loop(){this.aniId=window.requestAnimationFrame(this.bindLoop,canvas),this.render()}completetouch(t){console.log(1),t.preventDefault();let i=t.touches[0].clientX,s=t.touches[0].clientY;this.start.checkIsFingerOnThis(i,s)&&(this.isStart=1)}pointtouch(t){t.preventDefault(),mt.playShoot(),this.pointx=t.touches[0].clientX,this.pointy=t.touches[0].clientY}touchmove(t){t.preventDefault(),this.pointx=t.touches[0].clientX,this.pointy=t.touches[0].clientY,Z.drawImage(this.point,this.pointx,this.pointy)}render(){0==this.isStart&&(Z.drawImage(this.atlas,0,0,1080,1920,0,0,1080/Q,1920/U),this.start.drawToCanvas(Z)),this.pointShow>0&&(this.pointShow--,Z.drawImage(this.point,this.pointx,this.pointy)),1==this.isStart&&(this.isStart=2,canvas.removeEventListener("touchstart",this.touchstart),canvas.addEventListener("touchstart",this.pointstart),V.init())}},mt=new class{constructor(){if(nt)return nt;nt=this,this.bgmAudio=new Audio,this.bgmAudio.loop=!0,this.bgmAudio.src="audio/bgm.mp3",this.shootAudio=new Audio,this.shootAudio.src="audio/click.mp3",this.isPlayBgm=1,this.isPlayShoot=1,this.playBgm()}playBgm(){1==this.isPlayBgm?this.bgmAudio.play():this.bgmAudio.pause()}playShoot(){1==this.isPlayShoot&&(this.shootAudio.currentTime=0,this.shootAudio.play())}playExplosion(){this.boomAudio.currentTime=0,this.boomAudio.play()}};lt.init()}]);