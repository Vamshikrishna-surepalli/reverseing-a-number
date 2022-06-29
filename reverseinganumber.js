var a= 123456;
var rev = 0;
var lastDigit;
 while(a != 0){ 
	lastDigit = a % 10;
  rev = rev * 10 + lastDigit;
  a = Math.floor(a/10);
 }
  console.log(rev);