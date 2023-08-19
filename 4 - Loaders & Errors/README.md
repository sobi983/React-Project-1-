**Loaders and Errors**

In React-routers V6.4 data API's were introduced. https://reactrouter.com/en/main/routers/picking-a-router
So in your App.jsx file we are using <BrowserRouter> to create the routes for our app. But if we are willing to use the Data API's then we will have to use any data routers mentionaed in the link provided above. Few of the data routers are:-
<createBrowserRouter>
<createMemoryRouter>
<createHashRouter>
<createStaticRouter>

The most common one is the createBrowserRouter for creating the routes and use the data API's. In this project we will be using the Loader data API. The reason we will use the Loader data API is that in this project you can observe that we are using the old method for fetching the data from the API for vans. In that case when the page is loaded the content has to be loaded for a certain while then it will be rendered. 
During this process the API takes few second to laod the content. So, we were using conditional rendering and writing down on the page "Loading...".
After the data is loaded from the API then the loading page is removed and the actual content is being rendered. Now, the problem occurs when the API is not working fine and the page is stucked saying Loading forever. The Loading page might get removed resulting in crashing the React Application or forever Loading page. To solve this issue we can use Loaders and Errors. The loaders loads the data before rendering the page. 

lets say we are on /about page then we routed to the /vans page. When we have clicked on the /vans page the page will not be redirected to the new /vans page immideately. The UL will be on /about page. The request to the API will requested and then the content once loaded the /about page will be removed and /vans page will be rendered. 

This is the /about page, No, we have clicked on /vans page
![Image Alt Text](/img-project/loader-1.png)

The /vans page have been loaded but the content on the /vans page isn't still being loaded. Once laoded, it will get rendered on the page. 
![Image Alt Text](/img-project/loader-2.png)

Content has been loaded 
![Image Alt Text](/img-project/loader-3.png)

If we use the loaders Hook then the content will be loaded bofore redirected to the another page. Here, in the image below you can see that the /vans page data is being loaded then once, the data is laoded then it will be redirected to the /vans page. 
![Image Alt Text](/img-project/loader-4.png)


1. When does the code in a loader function run?

Before the route change happens and the component for that route loads


2. What are some benefits of using a data loader function
   instead of fetching our data in a useEffect in a component?
    
    * Don't need to worry about handling loading state in the 
      component
    * Don't need to have lengthy/confusing useEffect code in our
      component
    * Don't need to handle error state in the component
   
   
3. What change do we need to make to our BrowserRouter before
   we can use loaders (or any of the new data-layer API features)
   in our app?
   
   Get rid of the BrowserRouter component and use 
   createBrowserRouter() instead. Can use 
   createRoutesFromElements() to make the transition a bit easier
   
   
   
4. What are the steps we need to take in order to use
   a loader on any given route?
   
   1. Define and export a loader function
   2. Import the loader and pass it to the route we're wanting
      to fetch data for
   3. Use the useLoaderData() hook to get the data from the loader
      function.




Now, here is a small part of Error handling in react routers. for handing the errors we can add a errorElement prop in the Route element and this takes an component not an function like the loader. The server.js is modified and the server error can be seen in /vans. So, now If the loader is unable to run then the Error will pop up. Note:- that we have used useRouteError hook in the component/errorPage for the error purpose. This hook will get the error from the server and we can use it for displaying it.

NOTE:- The error and loader can work seperately. They are not affiliated.