**Nested Routing**

Layout Routes:- We define the components in this file that are suppose to be rendered in each page like the NavBar or the Footer. As, we are practicing the nested routing now. So, we want to keep few things on each page just a few things that will be re-rendered inside that page.

Outlet:- A very usefull tool in react-router. It renders the child components of the exact path. For better explainantion go to App.js and /components/layout.jsx file. 
In App.js we have define all the routes in a parant route. And we have fill the initial element to be rendered at each existing route is <Layout />. Now, in layout.jsx file we are rendering the components that needs to be kept at each page. By using the <Outlet> feature, we are able to get the child components relatively.

Absolute Path vs Relative Path
Index routes


1. What is the primary reason to use a nested route?
Whenever we have some shared UI between routes in our app.


2. What is a "Layout Route"?
It's the parent route of some nested routes that contains just
the portion of the UI that will be shared. It will use an Outlet
component.


3. What does the <Outlet /> component do? When do you use it?
We use it anytime we have a parent Route that's wrapping 
children routes. It renders the matching child route's
`element` prop given in its route definition


4. What is an "Index Route"?
It's the "default route" we want to render when the path
of the parent route matches. It gives us a chance to render
an element inside the parent's <Outlet /> at the same path
as the parent route.


<NavLink> this is another type of link besides it is used to active the link that the page is on. There is a prob 'end' to end the active link to the default page and show the another active link

While using navlinks, an isActive prop is using withing the navlink in which we can specify the styles to make it highlighted to the selected link. We can use end property in the navlink to remove the highlighting from the very first navlink. and to put focus on the selected navlink.

When there is a routes in a nested order we often needs to re-visit the previous path ending going back to the <Route> element layouts. We can use relative="path" property to go back to the most related page.
.
..
useContextOutlet = this is used to pass data from the <Outlet /> from parent ot child.


