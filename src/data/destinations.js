const destinations = [
    {
        id: "bali",
        image: "/images/destinations/bali.png",
        country: "INDONESIA",
        name: "Bali",
        rating: "4.9",
        type: "Island Escape",

        overviewTitle: "A tropical escape worth remembering.",

        overviewDescription:
            "Bali is a beautiful island known for its tropical beaches, peaceful temples, lush landscapes and rich local culture. From relaxing coastal escapes to adventurous experiences, there is something for every kind of traveller.",

        bestTime: "April – October",
        idealDuration: "5 – 7 Days",
        travelStyle: "Beach · Culture · Nature",

        highlights: [
            {
                image: "/images/destinations/bali.png",
                title: "Ubud",
                type: "Culture & Nature"
            },
            {
                image: "/images/destinations/bali.png",
                title: "Tropical Beaches",
                type: "Relaxation"
            },
            {
                image: "/images/destinations/bali.png",
                title: "Ancient Temples",
                type: "Heritage"
            }
        ],

        thingsToDo: [
            {
                title: "Explore Ubud",
                description:
                    "Walk through rice terraces, local markets and peaceful cultural streets."
            },
            {
                title: "Relax at the Beaches",
                description:
                    "Spend a slow afternoon enjoying Bali's beautiful beaches and coastal views."
            },
            {
                title: "Visit Ancient Temples",
                description:
                    "Discover beautiful temples, sacred sites and Bali's rich spiritual traditions."
            },
            {
                title: "Experience Balinese Cuisine",
                description:
                    "Taste traditional dishes and discover the unique flavours of local Balinese food."
            }
        ],

        travelInformation: {
            language: "Indonesian",
            currency: "Indonesian Rupiah",
            timezone: "GMT +8",
            visa: "Check visa requirements",
            transport: "Scooters · Taxis · Transfers",
            connectivity: "Strong Mobile Coverage"
        }
    },

    {
        id: "paris",
        image: "/images/destinations/paris.png",
        country: "FRANCE",
        name: "Paris",
        rating: "4.8",
        type: "Culture & Romance",

        overviewTitle: "A city of art, culture and timeless charm.",

        overviewDescription:
            "Paris is known for its iconic architecture, art, charming streets and unforgettable atmosphere. From historic landmarks to beautiful cafés and museums, the city offers a perfect blend of culture, romance and exploration.",

        bestTime: "April – June",
        idealDuration: "4 – 6 Days",
        travelStyle: "Culture · Romance · City",

        highlights: [
            {
                image: "/images/destinations/paris.png",
                title: "Eiffel Tower",
                type: "Iconic Landmark"
            },
            {
                image: "/images/destinations/paris.png",
                title: "Montmartre",
                type: "Art & Culture"
            },
            {
                image: "/images/destinations/paris.png",
                title: "Parisian Cafés",
                type: "Local Experience"
            }
        ],

        thingsToDo: [
            {
                title: "Visit the Eiffel Tower",
                description:
                    "Admire one of the world's most iconic landmarks and enjoy panoramic city views."
            },
            {
                title: "Walk Through Montmartre",
                description:
                    "Explore artistic streets, charming cafés and the historic atmosphere of Montmartre."
            },
            {
                title: "Discover the Louvre",
                description:
                    "Explore one of the world's most famous museums and its remarkable art collections."
            },
            {
                title: "Enjoy Parisian Cafés",
                description:
                    "Slow down at a local café and experience the everyday charm of Paris."
            }
        ],

        travelInformation: {
            language: "French",
            currency: "Euro",
            timezone: "GMT +1",
            visa: "Check visa requirements",
            transport: "Metro · Bus · Taxi",
            connectivity: "Excellent"
        }
    },

    {
        id: "norway",
        image: "/images/destinations/norway.png",
        country: "NORWAY",
        name: "Norway",
        rating: "4.9",
        type: "Mountain Escape",

        overviewTitle: "Wild landscapes at their most spectacular.",

        overviewDescription:
            "Norway offers dramatic fjords, towering mountains, peaceful villages and breathtaking natural scenery. It is an ideal destination for travellers looking for adventure, scenic road trips and unforgettable outdoor experiences.",

        bestTime: "May – September",
        idealDuration: "7 – 10 Days",
        travelStyle: "Mountains · Nature · Adventure",

        highlights: [
            {
                image: "/images/destinations/norway.png",
                title: "Geirangerfjord",
                type: "Scenic Nature"
            },
            {
                image: "/images/destinations/norway.png",
                title: "Northern Lights",
                type: "Natural Wonder"
            },
            {
                image: "/images/destinations/norway.png",
                title: "Lofoten Islands",
                type: "Mountain & Coast"
            }
        ],

        thingsToDo: [
            {
                title: "Explore the Fjords",
                description:
                    "Cruise through dramatic fjords surrounded by towering mountains and waterfalls."
            },
            {
                title: "See the Northern Lights",
                description:
                    "Experience magical night skies and search for the colourful aurora."
            },
            {
                title: "Discover Lofoten",
                description:
                    "Explore fishing villages, dramatic peaks and beautiful coastal landscapes."
            },
            {
                title: "Take a Scenic Road Trip",
                description:
                    "Drive through some of Norway's most spectacular natural landscapes."
            }
        ],

        travelInformation: {
            language: "Norwegian",
            currency: "Norwegian Krone",
            timezone: "GMT +1",
            visa: "Check visa requirements",
            transport: "Trains · Ferries · Buses",
            connectivity: "Excellent"
        }
    },

    {
        id: "japan",
        image: "/images/destinations/japan.png",
        country: "JAPAN",
        name: "Kyoto",
        rating: "4.8",
        type: "Culture & Heritage",

        overviewTitle: "Where tradition meets timeless beauty.",

        overviewDescription:
            "Kyoto is famous for its ancient temples, peaceful gardens, traditional streets and rich cultural heritage. The city offers a slower, more immersive travel experience filled with history, beauty and local traditions.",

        bestTime: "March – May",
        idealDuration: "4 – 6 Days",
        travelStyle: "Culture · Heritage · Nature",

        highlights: [
            {
                image: "/images/destinations/japan.png",
                title: "Fushimi Inari",
                type: "Cultural Landmark"
            },
            {
                image: "/images/destinations/japan.png",
                title: "Arashiyama",
                type: "Nature & Heritage"
            },
            {
                image: "/images/destinations/japan.png",
                title: "Gion",
                type: "Traditional Kyoto"
            }
        ],

        thingsToDo: [
            {
                title: "Visit Fushimi Inari",
                description:
                    "Walk through thousands of red torii gates at one of Kyoto's most memorable shrines."
            },
            {
                title: "Explore Arashiyama",
                description:
                    "Wander through bamboo forests, temples and peaceful riverside scenery."
            },
            {
                title: "Discover Gion",
                description:
                    "Experience traditional streets, historic architecture and Kyoto's cultural atmosphere."
            },
            {
                title: "Taste Japanese Cuisine",
                description:
                    "Explore Kyoto's traditional dishes, tea culture and local dining experiences."
            }
        ],

        travelInformation: {
            language: "Japanese",
            currency: "Japanese Yen",
            timezone: "GMT +9",
            visa: "Check visa requirements",
            transport: "Trains · Buses · Metro",
            connectivity: "Excellent"
        }
    },

    {
        id: "switzerland",
        image: "/images/destinations/switzerland.png",
        country: "SWITZERLAND",
        name: "Swiss Alps",
        rating: "4.9",
        type: "Mountain Escape",

        overviewTitle: "Alpine beauty that feels almost unreal.",

        overviewDescription:
            "The Swiss Alps offer dramatic mountain scenery, peaceful valleys, crystal-clear lakes and charming villages. It is a perfect destination for travellers seeking both relaxing landscapes and exciting outdoor adventures.",

        bestTime: "June – September",
        idealDuration: "5 – 8 Days",
        travelStyle: "Mountains · Nature · Adventure",

        highlights: [
            {
                image: "/images/destinations/switzerland.png",
                title: "Swiss Alps",
                type: "Mountain Escape"
            },
            {
                image: "/images/destinations/switzerland.png",
                title: "Lake Lucerne",
                type: "Scenic Escape"
            },
            {
                image: "/images/destinations/switzerland.png",
                title: "Interlaken",
                type: "Adventure"
            }
        ],

        thingsToDo: [
            {
                title: "Explore the Swiss Alps",
                description:
                    "Take in breathtaking mountain scenery, alpine villages and peaceful valleys."
            },
            {
                title: "Visit Lake Lucerne",
                description:
                    "Enjoy beautiful lake views surrounded by mountains and charming towns."
            },
            {
                title: "Experience Interlaken",
                description:
                    "Discover one of Switzerland's most popular destinations for mountain adventures."
            },
            {
                title: "Ride a Mountain Train",
                description:
                    "Enjoy a scenic train journey through spectacular alpine landscapes."
            }
        ],

        travelInformation: {
            language: "German · French · Italian",
            currency: "Swiss Franc",
            timezone: "GMT +1",
            visa: "Check visa requirements",
            transport: "Trains · Trams · Buses",
            connectivity: "Excellent"
        }
    },

    {
        id: "new-zealand",
        image: "/images/destinations/new-zealand.png",
        country: "NEW ZEALAND",
        name: "Queenstown",
        rating: "4.9",
        type: "Adventure",

        overviewTitle: "Adventure surrounded by extraordinary landscapes.",

        overviewDescription:
            "Queenstown is surrounded by mountains, lakes and dramatic landscapes, making it one of the world's favourite adventure destinations. From scenic escapes to thrilling outdoor activities, there is plenty to discover.",

        bestTime: "December – February",
        idealDuration: "5 – 8 Days",
        travelStyle: "Adventure · Mountains · Nature",

        highlights: [
            {
                image: "/images/destinations/new-zealand.png",
                title: "Milford Sound",
                type: "Scenic Nature"
            },
            {
                image: "/images/destinations/new-zealand.png",
                title: "Skyline Queenstown",
                type: "Adventure"
            },
            {
                image: "/images/destinations/new-zealand.png",
                title: "Lake Wakatipu",
                type: "Peaceful Escape"
            }
        ],

        thingsToDo: [
            {
                title: "Explore Milford Sound",
                description:
                    "Cruise through dramatic fjords, waterfalls and untouched natural landscapes."
            },
            {
                title: "Visit Lake Wakatipu",
                description:
                    "Relax beside the beautiful lake and enjoy the surrounding mountain scenery."
            },
            {
                title: "Experience Queenstown Adventure",
                description:
                    "Try exciting outdoor activities in one of the world's famous adventure destinations."
            },
            {
                title: "Take a Scenic Drive",
                description:
                    "Explore incredible roads surrounded by mountains, lakes and wild landscapes."
            }
        ],

        travelInformation: {
            language: "English",
            currency: "New Zealand Dollar",
            timezone: "GMT +12",
            visa: "Check visa requirements",
            transport: "Cars · Buses · Flights",
            connectivity: "Good"
        }
    },

    {
        id: "maldives",
        image: "/images/destinations/maldives.png",
        country: "MALDIVES",
        name: "Maldives",
        rating: "4.9",
        type: "Island Escape",

        overviewTitle: "A peaceful escape surrounded by turquoise waters.",

        overviewDescription:
            "The Maldives is known for crystal-clear waters, white-sand beaches and peaceful island resorts. It is an ideal destination for relaxing by the ocean, enjoying marine life and escaping into a slower pace of travel.",

        bestTime: "November – April",
        idealDuration: "4 – 7 Days",
        travelStyle: "Beach · Relaxation · Nature",

        highlights: [
            {
                image: "/images/destinations/maldives.png",
                title: "Private Islands",
                type: "Luxury Escape"
            },
            {
                image: "/images/destinations/maldives.png",
                title: "Crystal Waters",
                type: "Marine Experience"
            },
            {
                image: "/images/destinations/maldives.png",
                title: "Sunset Cruises",
                type: "Island Experience"
            }
        ],

        thingsToDo: [
            {
                title: "Relax on Private Islands",
                description:
                    "Enjoy peaceful beaches, turquoise waters and quiet island surroundings."
            },
            {
                title: "Explore the Coral Reefs",
                description:
                    "Discover colourful marine life and the beautiful underwater world of the Maldives."
            },
            {
                title: "Enjoy a Sunset Cruise",
                description:
                    "Watch the sun set over the Indian Ocean on a peaceful island cruise."
            },
            {
                title: "Try Water Activities",
                description:
                    "Experience snorkelling, kayaking and other activities across the clear blue waters."
            }
        ],

        travelInformation: {
            language: "Dhivehi",
            currency: "Maldivian Rufiyaa",
            timezone: "GMT +5",
            visa: "Check visa requirements",
            transport: "Speedboats · Seaplanes",
            connectivity: "Good"
        }
    },

    {
        id: "costa-rica",
        image: "/images/destinations/costa-rica.png",
        country: "COSTA RICA",
        name: "Costa Rica",
        rating: "4.8",
        type: "Wildlife & Nature",

        overviewTitle: "Where adventure meets wild nature.",

        overviewDescription:
            "Costa Rica is filled with lush rainforests, incredible wildlife, volcanic landscapes and beautiful beaches. It is a wonderful choice for travellers who want to combine nature, exploration and outdoor adventure.",

        bestTime: "December – April",
        idealDuration: "7 – 10 Days",
        travelStyle: "Wildlife · Nature · Adventure",

        highlights: [
            {
                image: "/images/destinations/costa-rica.png",
                title: "Arenal Volcano",
                type: "Adventure"
            },
            {
                image: "/images/destinations/costa-rica.png",
                title: "Monteverde",
                type: "Cloud Forest"
            },
            {
                image: "/images/destinations/costa-rica.png",
                title: "Manuel Antonio",
                type: "Wildlife & Beach"
            }
        ],

        thingsToDo: [
            {
                title: "Visit Arenal Volcano",
                description:
                    "Explore volcanic landscapes, hot springs and beautiful views around Arenal."
            },
            {
                title: "Discover Monteverde",
                description:
                    "Walk through lush cloud forests and experience Costa Rica's incredible biodiversity."
            },
            {
                title: "Explore Manuel Antonio",
                description:
                    "Combine tropical beaches with rainforest trails and amazing wildlife."
            },
            {
                title: "Spot Local Wildlife",
                description:
                    "Look for monkeys, sloths, colourful birds and other incredible animals."
            }
        ],

        travelInformation: {
            language: "Spanish",
            currency: "Costa Rican Colón",
            timezone: "GMT -6",
            visa: "Check visa requirements",
            transport: "Rental Cars · Buses · Shuttles",
            connectivity: "Good"
        }
    },

    {
        id: "kerala",
        image: "/images/destinations/kerala.png",
        country: "INDIA",
        name: "Kerala",
        rating: "4.8",
        type: "Nature Escape",

        overviewTitle: "A journey through backwaters, forests and culture.",

        overviewDescription:
            "Kerala brings together peaceful backwaters, green landscapes, beaches, hill stations and a rich local culture. From quiet escapes to memorable food and nature experiences, the state offers something for every traveller.",

        bestTime: "October – March",
        idealDuration: "5 – 8 Days",
        travelStyle: "Nature · Culture · Wellness",

        highlights: [
            {
                image: "/images/destinations/kerala.png",
                title: "Alleppey Backwaters",
                type: "Nature Escape"
            },
            {
                image: "/images/destinations/kerala.png",
                title: "Munnar",
                type: "Hill Country"
            },
            {
                image: "/images/destinations/kerala.png",
                title: "Fort Kochi",
                type: "Culture & Heritage"
            }
        ],

        thingsToDo: [
            {
                title: "Explore Alleppey Backwaters",
                description:
                    "Cruise through peaceful backwaters surrounded by coconut palms and village life."
            },
            {
                title: "Visit Munnar",
                description:
                    "Explore tea plantations, misty hills and beautiful mountain landscapes."
            },
            {
                title: "Discover Fort Kochi",
                description:
                    "Walk through historic streets filled with colonial architecture, art and culture."
            },
            {
                title: "Experience Kerala Cuisine",
                description:
                    "Taste traditional Kerala dishes, fresh seafood and local culinary specialities."
            }
        ],

        travelInformation: {
            language: "Malayalam · English",
            currency: "Indian Rupee",
            timezone: "GMT +5:30",
            visa: "Check visa requirements",
            transport: "Buses · Trains · Taxis",
            connectivity: "Strong Mobile Coverage"
        }
    },

    {
        id: "bali-wellness",
        image: "/images/destinations/bali-wellness.png",
        country: "INDONESIA",
        name: "Ubud",
        rating: "4.7",
        type: "Wellness Retreat",

        overviewTitle: "A peaceful retreat surrounded by tropical greenery.",

        overviewDescription:
            "Ubud is known for its lush rice fields, peaceful surroundings, wellness experiences and artistic culture. It is a great escape for travellers looking to slow down, reconnect with nature and experience a more relaxed side of Bali.",

        bestTime: "April – October",
        idealDuration: "4 – 6 Days",
        travelStyle: "Wellness · Nature · Culture",

        highlights: [
            {
                image: "/images/destinations/bali-wellness.png",
                title: "Rice Terraces",
                type: "Nature & Wellness"
            },
            {
                image: "/images/destinations/bali-wellness.png",
                title: "Yoga Retreats",
                type: "Wellness"
            },
            {
                image: "/images/destinations/bali-wellness.png",
                title: "Sacred Temples",
                type: "Spiritual Escape"
            }
        ],

        thingsToDo: [
            {
                title: "Walk Through Rice Terraces",
                description:
                    "Enjoy peaceful walks through lush green rice fields and traditional landscapes."
            },
            {
                title: "Join a Yoga Retreat",
                description:
                    "Slow down with yoga, meditation and wellness experiences surrounded by nature."
            },
            {
                title: "Visit Sacred Temples",
                description:
                    "Discover peaceful temples and experience Ubud's spiritual atmosphere."
            },
            {
                title: "Explore Local Art",
                description:
                    "Visit galleries, craft markets and traditional artistic spaces around Ubud."
            }
        ],

        travelInformation: {
            language: "Indonesian",
            currency: "Indonesian Rupiah",
            timezone: "GMT +8",
            visa: "Check visa requirements",
            transport: "Scooters · Taxis · Transfers",
            connectivity: "Strong Mobile Coverage"
        }
    }
];

export default destinations;