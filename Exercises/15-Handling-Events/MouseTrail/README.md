# MouseTrail

## Task

---

In JavaScript's early days, which was the high time of gaudy home pages with lots of animates images, people came up with some truly inspiring ways to use the language.

One of these was the _mouse trail_ -- a series of elements that would follow the mouse pointer as you moved it across the page.

In this exercise, I want you to implement a mouse trail. Use absolutely positioned `<div>` elements with a fixed size and background color. Create a bunch of such elements and, when the mouse moves, display them in the wake of the mouse pointer.

There are various possible approaches here. You can make your solution as simple or as complex as you want. A simple solution to start with is to keep a fixed number of trail elements and cycle through them, moving the next one to the mouse's current position every time a "`mousemove`" event occurs.
