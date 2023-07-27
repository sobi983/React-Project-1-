In this project I am creating a game named Tenzies
![Alt Text](/project-image.png)

While creatring this porject I have used 3 hooks 
1- useState
2- useEffect
3- useRef

1-- The useState saves the states of the components and on a change it re-renders the content without reloading the page
2-- The useEffect is used to handle the effects that are caused outside of the react such as fetch() api call or it can also be used when we want to check or execute a condtion whenever a page re-renders. This hook can be controlled, in a sense that we can handle it execution of renders. We can set the number of times it could be called on re-renders of the useState hooks.
3-- UseRef() hook is majorly used in <input> forms or dealing with the DOM directly. It doesnot re-renders the pages beside just the speciifc component. Example:- In stop watch, I want the variable to keep incrementing by 1. If I would use directly useState() hook and increment in by using the Vanilla JS function setInterval() the useState() hook will be stuck in a loop forever. Because on a chaange the state will re-render the whole page and again it will get in a loop causing it malfunction. We just want to change the specific useState() hook without re-rendering the page. This is where ueRef() comes in.

I have used setTimeOut() setInterval() clearInterval() for handling the timer