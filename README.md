# Dev-Twitter - NextJS App

Dev-Twitter is a mini "twitter" for developers. All "dev-tweets" and logins are done thanks to the connection to a firebase database created for this project. To log in, use the GitHub account. Once logged in, it automatically redirects you to the home where you can see all the existing dev-tweets. You can create a new dev-tweet with text and you can also attach files to them. The new dev-tweet is displayed in real time on multiple screens.

## Dependencies

+ "firebase"
+ "firebase-admin"
+ "vercel": to deploy with a CLI

## Hooks

+ useState
+ useEffect

## Custom Hooks

+ useUser to auth user login 
+ useTimeAgo to set timeago for tweets
+ useDateTimeFormat to set DateTimeFormat

## Other Next implementations

+ useRouter
+ next/link
+ next/head
+ _app.js with AppLayout Component
+ getStaticPaths and getStaticProps to data fetching singular tweets
+ commented examples of getServerSideProps and getInitialProps

## Data Base

All data is stored in firebase.

## API

The project has an api to view a particular dev-tweet. This api takes the data directly from firebase. ITS implementation is possible thanks to NextJS features.

## Available Scripts

In the project directory, you can run:

### `yarn run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

This project has a vercel deploy. You can see it: [https://dev-twitter-lcwvj65m2-marianotorrecilla.vercel.app/](https://dev-twitter-lcwvj65m2-marianotorrecilla.vercel.app/)


## Special thanks

I have carried out this project thanks to the contribution and learning given by midudev in his free NextJS live coding course. I was taking concepts, methods and good practices to develop step by step. Therefore, my special thanks to midudev [https://www.youtube.com/c/midudev](https://www.youtube.com/c/midudev)

