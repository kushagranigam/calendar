Date.prototype.Month = function() {
	if (this.getMonth() == 0)	{this.monthName = "Jan";	this.days = 31;}
    if (this.getMonth() == 1)	{this.monthName = "Feb";	this.days = ((this.getFullYear()%400==0)||((this.getFullYear()%4==0)&&(this.getFullYear()%100!=0)))?29:28;}
    if (this.getMonth() == 2)	{this.monthName = "Mar";	this.days = 31;}
    if (this.getMonth() == 3)	{this.monthName = "Apr";	this.days = 30;}
    if (this.getMonth() == 4)	{this.monthName = "May";	this.days = 31;}
    if (this.getMonth() == 5)	{this.monthName = "Jun";	this.days = 30;}
    if (this.getMonth() == 6)	{this.monthName = "Jul";	this.days = 31;}
    if (this.getMonth() == 7)	{this.monthName = "Aug";	this.days = 31;}
    if (this.getMonth() == 8)	{this.monthName = "Sep";	this.days = 30;}
    if (this.getMonth() == 9)	{this.monthName = "Oct";	this.days = 31;}
    if (this.getMonth() == 10)	{this.monthName = "Nov";	this.days = 30;}
    if (this.getMonth() == 11)	{this.monthName = "Dec";	this.days = 31;}
}; 

//Global Declarations
var today	= new Date();
var d		= new Date();
var m		= today.getMonth();
var y 		= today.getFullYear();
var v1		= document.getElementsByClassName("view1");
var v3		= document.getElementsByClassName("view3");
var dV		= document.getElementById("dateView");
var mV		= document.getElementById("monthView");
var yV		= document.getElementById("yearView");

//Calendar Generator
function calendar(){
	d.setFullYear(y, m, 1);
	d.Month();

	var xD	= d.getDay();

	document.getElementById("month").innerHTML = d.monthName + ", " + d.getFullYear();
	document.getElementById("year").innerHTML = d.getFullYear();

	for(c = 0, i = 1, t=d.days+xD; c < 42; c++){

		if((c>=xD)&&(c<t)){
			v1[c].innerHTML = i++;
			v1[c].onclick = function(){selDate(this)};
		}
		else
			v1[c].innerHTML="";
	}

	for(c=0, i=y-4; c<12; c++, i++){
		v3[c].innerHTML = i;
		v3[c].onclick = function(){ selYear(this)};
	}	
}


//Cell Selection Functions
function selDate(x){document.getElementById("today").innerHTML = y+"-"+(m+1)+"-"+x.innerHTML;}
function selMonth(x){m=x; mV.style.visibility="hidden"; calendar();}
function selYear(x){y = x.innerHTML; yV.style.visibility="hidden"; calendar();}

//Navigation Functions
function prevMonth(){ if(m>0) m--; else{ y--; m=11; }calendar();}
function nextMonth(){ if(m<11) m++; else{ y++; m=0;}calendar();}
function prevYear(){ y--; calendar();}
function nextYear(){ y++; calendar();}
function prevYearView(){ y-=5; calendar();}
function nextYearView(){ y+=5; calendar();}
function transMonth(){ mV.style.visibility="visible";}
function transYear(){ yV.style.visibility="visible";}