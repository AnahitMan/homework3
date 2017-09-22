//A function that takes at least three arguments and returns the result of some set of operations using those arguments   
   const create=function (num1, num2, num3){
if ((num1>= num2) && (num3>0))
{
	const picturePrice=((num1-num2)/num3); 
	return picturePrice;
}
else if ((num1<num2) && (num3>0)){
	return (num3+num1)*num2;
}
};



//A function that takes no arguments and returns something
const bookPageNum=function(){
return "newBook";
};


//A function that takes arguments, does something but does not return anything 
const function1=function (a1, a2, a3){
	if ((a1===a2) || (a3<a1*5)){
		console.log((a1+a2)-(a3-13));

	}
	else {
		console.log(a1-a2);
	};



//A function called fullName that takes as argument first name and last name and returns the full name of the person
//(first name concatenated with last name with a space in between)
const fullName=function (fName, lName){
return fName + " " + lName;
};


//A function that takes three strings and returns the string that is the longest
const str1=function(word1, word2, word3){
const len1=word1.length;
const len2=word2.length;
const len3=word3.length;

if (len1>=len2 && len1>=len3){
	return word1;
}
else if (len2>=len3 && len2>=len1){
	return word2;
}
else if (len3>=len2 && len3>=len1){
	return word3;
}
};                          


//A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger
const twoNumberFunction=function(w1, w2){
	if(w1>w2)
		{
		return 1; 
		}
	 		else if (w1<w2){
	 			return 0;
	 		}
	 		else
	 		{
				return -1;
			}
	};



//A function that takes three inputs and returns the first truethy value (example:  firstTruethy(0, '', 1); should return 1) 
const isTruethy=function(val1, val2, val3){
	return val1 || val2 || val3 || false;
};
