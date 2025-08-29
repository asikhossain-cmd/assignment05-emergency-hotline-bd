01. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: all are the html element selector. but there are key differece between them such as
for getElementById: we can select just specefic id used in the element and it alway provide us single result not any list like nodeList or HTMLCollection. 
getElementByClassName: we can use this to select mulitple element at the same time by class. this is provide HTMLCollection
querySelector / querySelectorAll: we can select complex element with css selector method. we can select any complex element by this selectors. But query selector provide us the first element and query selector all provide us a NodeList.

Those are the different between mentioned dom selector method.


02. How do you create and insert a new element into the DOM?
Ans: we can create a element by document.createElement('p') 
like this.. and insert it by appendChild()

we have a section with variable like headerSection [we catch it by mind in js]
exmaple const creatNewDiv = document.createElement('div');
headerSelection.appendChild(createDiv).


03. What is Event Bubbling and how does it work?

Ans: if i say by a easy sentence, event bubbling is a method to capture the use click on a element in the browser window. 
A browser window can see where i clicked and by this following click, browser send the click to the immediate parent grand parent grand parent and then the body then html tag. Like Neuron.


04. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is capture the taget element in the broser by using the event bubbling.
Sometime we need to make many button at make them click at a time, (like a e commerce website we can see so many product cards and buy and add to cart button). and if we add the event listener to the all buttons then this is a greate hassle. So if we just add the event listerner to the parent then we can get teh child button click and capture by target with event bubbling. And also this prevent js  consume more memory.


05. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() is used to stop the default behaviour or a button (Suppose in form default submit behaviour) and stopPropagation() method used in event bubble or delegation. However if we set the stopPropagation() to a element thats means we cannot access the element before this.