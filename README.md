# SpareRoom Web Team Technical Task

## Instructions

The task is to build a single page showing an event, within the page is a form to submit details for a ticket as well as information on the event and the location.

The design to follow is located in design-minwidth.png & desing-fullwidth.png, with the spacing of the main elements and font sizes within design-minwidth-spacing.png & design-fullwdith-spacing.png.

The details of the event and the location are within event.json.

### Development

Please use any front-end technology you think is best suited to deliver the final page as well as the source code. Extra credit for a working booking form.

### Mobile

More than 50% of our customers use a mobile touch device when on our website. Please give input into how the design could further accommodate mobile devices.

### Approach

My approach is to first break the task into smaller tasks:

1. Display header with SpareRoom logo.
2. Make a navigation bar with `Home` and `Events` nav items.
3. Add event image to be displayed when user clicks on Events.
4. Add event details as header of the event image.
5. Now add css to the above steps before moving forward to add any other features.

### How to use

* Clone it `git@github.com:reenz/spareroom.git`
* Run `npm install` to download the dependencies
* Run `npm start` and it will open in `localhost:3000`
* Run `npm test` to run the tests

### Comments

* I have used `React` to this task and tested using `Jest` & `Enzyme`
* I could not complete the task, yesterday evening was spent on fixing the `ENOSPC` error I was getting due to low disk space, then due to some version changes my tests were not running properly I was getting `environment.setup is not a function` error to which I struggled a lot and finally I manually changed all the versions of my dependencies. By the time these issues were fixed it was already 9 p.m. Still I managed to the steps I mentioned in my approach. Looking forward to learn more from this exercise if had more time.