function Googlemaps()
{
    window.open("https://www.google.co.in/maps","_blank", "top=200,left=200,width=500,height=500");
}
function Uber()
{
    window.open("https://www.uber.com","_blank", "top=200,left=200,width=500,height=500");
}
function Oyo()
{
    window.open("https://www.oyorooms.com","_blank", "top=200,left=200,width=500,height=500");
}
function Justdial()
{
    window.open("https://www.justdial.com","_blank", "top=200,left=200,width=500,height=500");
}


document.addEventListener("click",(e)=>{
	if(e.target.id==="Googlemaps")
		Googlemaps();
	else if(e.target.id==="Uber")
		Uber();
	else if(e.target.id==="Oyo")
		Oyo();
	else if(e.target.id==="Justdial")
		Justdial();
		
});