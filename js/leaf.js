var stop,staticx,img=new Image;function Sakura(t,n,i,a,e){this.x=t,this.y=n,this.s=i,this.r=a,this.fn=e}function getRandom(t){var n,i;switch(t){case"x":n=Math.random()*window.innerWidth;break;case"y":n=Math.random()*window.innerHeight;break;case"s":n=Math.random();break;case"r":n=4*Math.random();break;case"fnx":i=1*Math.random()-.5,n=function(t,n){return t+.5*i-1.7};break;case"fny":i=1.5+.7*Math.random(),n=function(t,n){return n+i};break;case"fnr":i=.03*Math.random(),n=function(t){return t+i}}return n}function startSakura(){requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame;var t,n=document.createElement("canvas");staticx=!0,n.height=window.innerHeight,n.width=window.innerWidth,n.setAttribute("style","position: fixed;left: 0;top: 0;pointer-events: none;"),n.setAttribute("id","canvas_sakura"),document.getElementsByTagName("body")[0].appendChild(n),t=n.getContext("2d");for(var i=new SakuraList,a=0;a<50;a++){var e,r,s,o,h,d,m;r=getRandom("x"),s=getRandom("y"),h=getRandom("r"),o=getRandom("s"),d=getRandom("fnx"),m=getRandom("fny"),randomFnR=getRandom("fnr"),(e=new Sakura(r,s,o,h,{x:d,y:m,r:randomFnR})).draw(t),i.push(e)}stop=requestAnimationFrame((function(){t.clearRect(0,0,n.width,n.height),i.update(),i.draw(t),stop=requestAnimationFrame(arguments.callee)}))}function stopp(){if(staticx){var t=document.getElementById("canvas_sakura");t.parentNode.removeChild(t),window.cancelAnimationFrame(stop),staticx=!1}else startSakura()}img.src="",Sakura.prototype.draw=function(t){t.save();this.s;t.translate(this.x,this.y),t.rotate(this.r),t.drawImage(img,0,0,20*this.s,20*this.s),t.restore()},Sakura.prototype.update=function(){this.x=this.fn.x(this.x,this.y),this.y=this.fn.y(this.y,this.y),this.r=this.fn.r(this.r),(this.x>window.innerWidth||this.x<0||this.y>window.innerHeight||this.y<0)&&(this.r=getRandom("fnr"),Math.random()>.4?(this.x=getRandom("x"),this.y=0,this.s=getRandom("s"),this.r=getRandom("r")):(this.x=window.innerWidth,this.y=getRandom("y"),this.s=getRandom("s"),this.r=getRandom("r")))},SakuraList=function(){this.list=[]},SakuraList.prototype.push=function(t){this.list.push(t)},SakuraList.prototype.update=function(){for(var t=0,n=this.list.length;t<n;t++)this.list[t].update()},SakuraList.prototype.draw=function(t){for(var n=0,i=this.list.length;n<i;n++)this.list[n].draw(t)},SakuraList.prototype.get=function(t){return this.list[t]},SakuraList.prototype.size=function(){return this.list.length},window.onresize=function(){document.getElementById("canvas_snow")},img.onload=function(){startSakura()};