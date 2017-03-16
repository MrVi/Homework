var str1 =  prompt("Enter str1", "your string");
var str2=  prompt("Enter str1", "your string");
str1 = str1.toLowerCase();
str2 = str2.toLowerCase();
var tempArr = str1.split('');
tempArr.sort();
str1 = tempArr.join('');
tempArr = str2.split('');
tempArr.sort();
str2 = tempArr.join('');
if (str1.localeCompare(str2) == 0) {
    alert("True");
}
else {
    alert("False");
}

/*

 function isAnagram(first, second) {
 first = first.toLowerCase().split("").sort().join("");
 second = second.toLowerCase().split("").sort().join("");
 return  first === second;
 }

 alert(isAnagram(prompt(1), prompt(2)));
 */
