**Search/Query parameters**

it is used for pagination, filtering or sorting on the page. like the /vans page. Where we can see the category and if there are thousands of vans in there than we need to filter those results. Lets say we want to get the vans of the type "Luxury" category. So we will use filteration in it using the search or query parameters.

One more thing needs to be added in it that let say that I have fileterd a "Luxury" category and I want to share it with my friend. So when I will copy the URL and send to my friend the page at his side will not show up because howdoes the website knows that what sort of filteration does it need to show to my firend. So, instead what it will do that we can save the filteration in the state. But it will either not work because the when the page will load at my friend side, the states will be reloaded. So, there will be no filteration data stored in my states. So, there is an another way for doing this is sending the filteration data into the parameters URL. So, my friend when he/she will open up my sent link the fileterd page will be opened at his/her side. Example /vans?filter=luxery this is a query parameter often used in the backend development to ghet the data from the URL.

The useSearchParam Hooks we will be using into the /vans page where we will filter the categories of the vans



You might have botice onething thta we have used buttons instead of <NavLink> in type filteration in /vans page. This is because the url is the same just the filters are being applied that leads into the highlighting of all the Navlinks at the same moment. Because <NavLink> are only applied if the url is being changed from the path.

Link state:- you have filtered luxury and link one of the vans now the URL is /vans/1 now to go back to the page and the filter is gone and everything is being reset, you will see all the vans. We can solve this using link state where on going back from selected vans page /vans/1 it will go to the /vans?type=Luxury page means the filteration will still exist.

Now we have used a property named as state in a Link react router. This will send the URL to the routed page and If we want to get the URL in that page we will use useLocation HOOK to get the URL.

The state property can be used to set a stateful value for the new location which is stored inside history state. This value can subsequently be accessed via useLocation().

One more thing is implemented that if page is not found then it will redirected to the Not page found page

