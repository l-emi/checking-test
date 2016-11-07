# Checking Test
### [Letters version here](https://l-emi.github.io/checking-test-letters/)

Match a number to one of the 5 options. 60 questions, and the digits of the number increase every 10 questions. Designed for the dad as per request, who is doing a similar test soon. Good luck :pray:

There are so many things that could be improved here. The real test has a time limit going from 10 seconds to 5. I could have designed an algorithm instead of hard-coding the questions and answers. However, due to the time constraint I made a simple version.

I used this code to generate random numbers and answer positions (I changed them around later to make the test more difficult): 

```javascript
function gen() {
  return Math.floor(10000 + Math.random() * 90000);
}

function choose() {
  return Math.floor(Math.random() * (4 - 0 + 1)) + 0;  
}

console.log("[" + "'" + gen() + "', '" + gen() + "', '" + gen() + "', '" + gen() + "', '" + gen() + "', "  + choose() + "]");
//"['51714', '79230', '48591', '98731', '32194', 1]"
```

![Preview Image](http://i.imgur.com/CHSZXBb.png?1)
