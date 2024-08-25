# Instituto Li Hon Ki's Website

#### Video Demo:  https://youtu.be/M6KfuKSw6YQ

#### Description:
This is a website created for the Hung Gar Kung Fu Institute I've been part of for the last 16 years as a practitioner.

#### Technical Description:
The project was made in ReactJS, using plain css for the styles.
The static content is uploaded by myself in github in a private repository which I probably will be making public in order to allow others to see it.
Firebase is used for users to login and logout (more about this in the section's description).

The project was hosted in Vercel and all environment variables needed for Firebase were added into a .env-example file, were you should add yours in order to make Login work, otherwise, you should use the live example, but notice this is a production link, so, please be careful and respectful when testing with it.
Here's a live link to the project hosted in Vercel https://www.instituto-li-hon-ki.com.ar/
Github link: https://github.com/Aldogro/li-hon-ki-ar

For a better UX, you’ll see at code level that the app has a navbar which is always in sight, and all pages are lazy loaded, using react’s Suspense component to fallback to a Loading component with the logo of the Institute.
Inside this, you’ll see the MainRoutes component, which is the part of the app in charge for the routing using ‘react-router-dom’, a very common router library for React. If you accidentally take the wrong route, a simple sign saying ‘Not found’ will show.

For the information of each Instructor, Location, Style and Schedules (that are pretty much static), I've created a file called information jsx, which contains all the information needed to build all the pages and sections.

#### UI Description:
The website is separated into sections.
- *Header*. In the header users will find:
  - the **location**, with a link that opens Google maps to easily find the Institute and maybe let your smartphone guide you to us.
  - **Sifu’s whatsapp** number to directly communicate with him.
  - **Social Media** Instagram and Facebook links to see photos, videos and content from the classes.
  - **Login**. This is thought with a bigger plan, to have a unified place to store information about the Institute where practitioners can find exclusive content depending on the category they’re in. At the moment, users are only able to login using Google’s Firebase platform, which will host the non relational db that will be the nexus between videos hosted in youtube, and content shared with them at the right time.
  - Another possible feature to develop in the near future is a small shop to buy t-shirts, training clothes, and merchandising of the Institute.
- First Section, **Home page**. In this section the users will have a glimpse of the activities and different Kung Fu styles that are taught in the Institute. Also, they will see the different places that are parts of the Institute (there are locations across Argentina). The users will also find the different Instructors that are currently teaching in the institute in different locations.
Each one of these cards are interactive, making the user able to know more about each card in respective sections, for example Locations, Instructors or Styles/Activities.
- Second section is **Hung Gar**. A traditional Kung Fu style that has been taught through generations, explaining origin and history about it.
- Third section is **Wing Chun**, a famous Kung Fu style used by Bruce Lee. The lineage of Instituto Li Hon Ki goes back to the same Grand Master that taught Bruce Lee, Ip Man. In this section the history, meaning and other interesting things about Wing Chung are expressed.
- Fourth section is **Functional Training**, these are classes of physical conditioning to focus the rest of the classes in technical parts.
- Fifth section is **Locations**, where users can see in more detail the location of each one of the places where the Institute is present. Clicking these cards the users will be redirected to the page of each place, where there’s a schedule, the styles/activities you can practice and who is the lead instructor in that place.
- Sixth section is **Instructors**, where there’s a few paragraphs about each instructor.

#### TODO's list
Authenticated user’s section (to be developed): This section will contain a series of features. All these parts will work dynamically using Firebase. The first step (having a login using Google is in place and it will keep growing from there):
- **Profile**: In this part, the user will be able to update his picture and personal information like address, phone number, Kap (or degree) obtained, etc.
- **Teammates list**: This is like a list of teammates, listed by years of practice, where the authorized user can check different information about each one of the teammates in the Institute (admins will be able to see and modify information at will in order to, for example, update the Kap for a student when they pass an exam)
- **Internal information**: This will be like a board where admins will publish news about future exams, tournaments, or other type of information that is only for Institute’s students.
- **Training gear shop**: the uniform for the Institute consists of a t-shirt with the corresponding logos (different for Wing Chun, Hung Gar and Sanda) and martial arts training pants, different for each one of the activities.
