**React Optimizations**

There are few techniques through which a react app can be optimized. Before moving onto the list of techniques for optimization. We should know this concept that when a react page redners?

1. It will render when there is a change in the state
2. It will render when there is a change in the prop
3. It will render when there is a change in the parent component that will cause the re-rendering of the child component. 

All these 3 points are coded in the folders.

What is memorization in general?

![Alt Text](/project%20images/memorization.png)


React Dev Tools:- A react dev tools can be used to notice the performance of the react application. The plugin can be installed using the react website or on google.

memo = it is used in order to memorize the the component. Like in the example of point 3, When the parent re-renders the child will automatically re-render. In this way we don't need to re-render the child. So, we can use memo from React to stop re-rendering. Check /memo folder for more details.

useCallback = it is used to memorize the function and to send it as a prop. And it is oftenly used to send it as a prop in a child. Because if there a value in a parent component that changes and some other function like increment that is been passed on to the child component, due to the button altho child component is not calling it , still the child component will re-render. To stop it we can use useCallback. Check /useCallback folder.

useMemo = I haven't coded this hook because it is easy to understand. it only memorizes the expensive calculations. and Works like useCallback or useEffect. I have written a small code in /parentCallback.jsx .

Code splitting with lazy loading and Suspensec = The main purpose of lazy loading is to reduce the initial bundle size and improve the loading performance of your application. Code splitting achieves this by breaking down your application into smaller chunks that can be loaded on-demand. In the context of React applications, if you're interested in improving the loading performance of your app, code splitting through lazy and import() remains one of the most effective ways to achieve lazy loading. the code is not written down over here.


