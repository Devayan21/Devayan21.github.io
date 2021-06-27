var im1;
var im2;
function upload(){
	var x=document.getElementById("can1");
	var inp= document.getElementById("f1");
	im1=new SimpleImage(inp); 
	im2=new SimpleImage(inp);
	im1.drawTo(x);
	alert('Image will be uploaded');
}
function gray()
{
	for (var p of im2.values())
	{
		var avg=(p.getRed()+p.getBlue()+p.getGreen())/3;
		p.setRed(avg);
		p.setBlue(avg);
		p.setGreen(avg);
	}
	var t=document.getElementById("can2");
	im2.drawTo(t);
}
