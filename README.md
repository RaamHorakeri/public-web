# PRIVATE_WEB App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Install npm dependencies. Ensure you have Node.js and npm installed. Recommended version: Node.js 22 or later.

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Built With

<ul>
    <li>NextJS</li>
    <li>Headless UI</li>
    <li>Zustand</li>
</ul>

## Folder Structure

```
./src
├── api
│   └── community
│       └── index.js
├── app
│   ├── (features)
│   │   ├── (auth)
│   │   │   ├── login
│   │   │   │   └── page.js
│   │   │   ├── register
│   │   │   │   └── page.js
│   │   ├── cart
│   │   │   └── page.js
│   │   ├── community
│   │   │   ├── askQuestion
│   │   │   │   └── page.js
│   │   │   ├── error.js
│   │   │   ├── featuredQuestions
│   │   │   │   ├── [questionNum]
│   │   │   │   │   └── page.js
│   │   │   │   └── page.js
│   │   │   ├── layout.js
│   │   │   ├── page.js
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components
│   ├── Footer.js
│   ├── Header.js
│   ├── Input.js
│   ├── Pagination.js
│   ├── TwoFa.js
│   ├── community
│   │   ├── Answer.js
│   │   ├── Comment.js
│   │   ├── NavLinkSearch.js
│   │   └── PageTitle.js
│   ├── getHelp
│   │   └── ScheduleModal.js
│   └── spinner.js
└── utils
    └── index.js
```

### Explanation of Each Folder and File

- **api**: Contains API method definitions and interactions, including feature based subfolders
- **app**: This directory organizes the core structure of the application, including various feature-based subfolders (like **auth**, **cart**, and **community**) that handle specific pages and their layouts. Global styles and the main layout files for the application are also housed here.
- **components**: Includes reusable UI components that can be utilized across different parts of the application. These are further organized into subfolders related to specific features or functionalities.
- **utils**: Contains utility functions and constants that are commonly used throughout the application.