//var a, //= prompt ("Podaj długość podstawy trójkąta a = "),
//	h,//= prompt ("Podaj wysokość trójkąta h = ");


function getTriangleArea(a, h) {


	if ((a <= 0) || (h <=0)) {

		return "Nieprawidłowe wartości zmiennych";

	} else {
		var pole = 0.5*a*h;
		return pole;
		
	}
}
var triangleArea = getTriangleArea(10,6);
console.log(getTriangleArea(10,6));
alert('pole ' + triangleArea);

var triangle1Area = getTriangleArea(10, 15);
console.log(getTriangleArea(10,15));
alert("pole " + triangle1Area);

var triangle2Area = getTriangleArea(2, 12);
console.log(getTriangleArea(2,12));
alert("pole " + triangle2Area);

var triangle3Area = getTriangleArea(25, 35);
console.log(getTriangleArea(25,35));	
alert("pole " + triangle3Area);
