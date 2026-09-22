Travel Explorer

A modern travel discovery website built with React, JavaScript, HTML, and CSS. Travel Explorer helps users discover destinations, explore travel experiences by mood, view destination details, and save favourite destinations.

The project focuses on a clean, cinematic and editorial travel experience with a warm, nature-inspired visual style.

Features

    Home Page

        Cinematic hero section

        Destination discovery section

        Experience promise

        Popular destinations

        Travel by mood

        Featured escape

        Travel statistics

        Newsletter / CTA

        Footer

    Destinations

        Destination listing page

        Destination category selection

        Categories such as:

        Beach

        Mountains

        Adventure

        Nature

        Culture

        Wildlife

        Wellness

        Destination cards with image, location, rating and description

        Category filtering through URL parameters

    Destination Details

        Dynamic destination detail pages

        Destination-specific hero section

        Rating and travel type

        Favourite button

    Favourites

        Add/remove destinations from favourites

        Favourite state shared across the application

        Favourite data stored in localStorage

        Empty favourites state with navigation back to destinations

    Contact

        Contact information section

        Contact form UI

    Navigation

        React Router based navigation

        Active navigation item styling

        Logo navigation to home

Technologies Used

    React

    JavaScript (ES6+)

    HTML / JSX

    CSS

    React Router DOM

    Vite

    LocalStorage

📁 Project Structure

Travel_Explorer/
│
├── public/
│   └── images/
│       ├── logo.png
│       ├── hero.jpg
│       └── destinations/
│           ├── bali.png
│           ├── paris.png
│           ├── norway.png
│           ├── japan.png
│           ├── switzerland.png
│           ├── new-zealand.png
│           ├── maldives.png
│           ├── costa-rica.png
│           ├── kerala.png
│           └── bali-wellness.png
│
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── Discovery/
│   │   ├── ExperiencePromise/
│   │   ├── Destinations/
│   │   ├── TravelMood/
│   │   ├── FeaturedEscape/
│   │   ├── TravelStats/
│   │   ├── Newsletter/
│   │   ├── Footer/
│   │   ├── Favourites/
│   │   └── Contact/
│   │
│   ├── context/
│   │   ├── FavouriteContext.js
│   │   └── FavouriteProvider.jsx
│   │
│   ├── hooks/
│   │   └── useFavourites.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Destinations.jsx
│   │   ├── DestinationDetails.jsx
│   │   ├── Favourites.jsx
│   │   └── Contact.jsx
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

Getting Started

        1. Clone the repository

        git clone <your-repository-url>

        2. Navigate to the project

        cd Travel_Explorer

        3. Install dependencies

        npm install

        4. Start the development server

        npm run dev

        The application will be available at:

        http://localhost:5173/

Application Routes

    Route

        Page

        /Home

        /destinations

        Destinations

        /destinations/:destinationId

        Destination Details

        /favourites

        Favourites

        /contact

        Contact

Favourite System

Travel Explorer uses React Context to manage favourite destinations globally.

The favourite system consists of:

FavouriteContext
       ↓
FavouriteProvider
       ↓
useFavourites()
       ↓
Destination Cards / Details / Favourites

Favourite destinations are stored in the browser's localStorage, allowing the saved destinations to remain available after refreshing the page.

Destination Filtering

Destination categories are stored in the URL.

Example:

/destinations?category=Beach

The Destinations page reads the category from the URL and displays matching destinations.

This also allows the Travel by Mood section on the Home page to navigate directly to a filtered destination listing.

