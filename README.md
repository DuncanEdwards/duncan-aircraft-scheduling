## Aircraft Smart Scheduler

### Assumptions

-   The solution is designed to work on Desktop 1280px wide and above.
-   The solution has only been tested on Chrome.
-   There are no unit tests or integration tests for the solution as I have already overrun on the time!
-   The API supplied did not allow for origin airport or time-based filtering, so rather than make a solution where the user had to scroll through 20 pages to get to an applicable flight, I "mocked" my own solution that supports these features. Obviously this would have been done with a REST API if this wasn't a coding test but I didn't want to add an additional dependency to this solution.
-   As there is only one aircraft, the aircraft list is a little stubbed and not done completely properly as there will never be more than one for this test.
-   There is no turnaround time on the final flight.
-   The paging is basic because of the time limit, if this were real life I'd make it better with a selectable sub section of pages to click on. Although TBH it is so fast that this is less of an issue than first thought.

### Tools and environment

-   The solution is written in 100% typescript using Functional Components, Redux and hooks.
-   It utilizes theme UI to provide inline styles and a couple of simple components (Flex, Box, Buttons).
-   It utilizes Prettier and TypeScript Import Sorter for code readability
-   It utilizes @reduxjs/toolkit to implement a little Redux store with minimal bolierplate (the Immer stuff is particularly useful)
-   As there is a lot of "cross-state" I used Redux to store UI state which allowed the individual components to focus on their own tasks independently of each other. For example, to Deselect a flight, the `FlightAssignment.tsx` just needs to dispatch to `unassignFlightAction`, it doesn't need to know about anything else.

###General approach

-   I`ve gone for a "stack" approach to loading up a rotation in that you can only assign valid (Origin airport + still time to make it) flights. The UI helps this by only ever giving you valid flights.
-   The positive of this approach is that it is easy to understand what is going on and you know you always have a valid rotation without complicated error messages you may not understand.
-   The negative of this approach is that if you want to change a flight in the earlier part of the day, you need to "unwind" the full stack.

### Fun Stuff

So the question that dogged me the whole time was:

> What actually is the best (highest utilization) flight scheduler?

It's quite interesting because it is a question you can't really answer without iterating through every permutation of valid flight rotation. It's fortunate that this is basically a Depth-first tree and that I love data algorithms and structures, so if you click on the _Autocreate best_ button, it will solve it for you. (Note that this is slightly hacked with setTimeout and in reality would also be done server side). I also allow the user to get the best case and make modifications if they would like, giving the user the best of both worlds:

-   Getting the smart computer to optimize it for them
-   Giving them visibility, control and the ability to tinker if they like
