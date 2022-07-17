function numbers(a)
{
   if(a%7==0)
   {
      var numbers='a is multiple of 7';
   }
   else 
   {
      var numbers='a is not a multiple of 7';
   }
   return numbers;

}
var a=25;


var number=numbers(a);
console.log (number); 