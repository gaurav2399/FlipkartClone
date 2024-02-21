import electronics from '../assets/shops/electronics-shop.jpg'
import kids from '../assets/shops/kids-shop.jpg'
import oddish from '../assets/shops/oddish-shop.jpg'
import sardar from '../assets/shops/sardar-shop.jpg'
import sukhbir from '../assets/shops/sukhbir-shop.png'

const shops = {
    saharanpur: [
        {
            id: 1,
            name: "Sardar Sweets",
            location: {
                area: "Halwai Atta",
                city: "Saharanpur"
            },
            rating: 5,
            category: "Food and Drinks",
            img: sardar
        },
        {
            id: 2,
            name: "Oddish Casuals",
            location: {
                area: "Tilak Market",
                city: "Saharanpur"
            },
            rating: 4,
            category: "Clothing & Acessories",
            img: oddish
        },
        {
            id: 3,
            name: "Galaxy Store",
            location: {
                area: "Delhi road",
                city: "Saharanpur"
            },
            rating: 5,
            category: "Electronics",
            img: electronics
        },
        {
            id: 4,
            name: "Sukhbir Samose",
            location: {
                area: "Rani Bazaar",
                city: "Saharanpur"
            },
            rating: 5,
            category: "Food and Drinks",
            img: sukhbir 
        },
        {
            id: 5,
            name: "Kids Look",
            location: {
                area: "Court Road",
                city: "Saharanpur"
            },
            rating: 5,
            category: "Babies and Kids",
            img: kids
        },
        {
            id: 6,
            name: "Kids Look",
            location: {
                area: "Court Road",
                city: "Saharanpur"
            },
            rating: 5,
            category: "Babies and Kids",
            img: kids
        },
        {
            id: 7,
            name: "Kids Look",
            location: {
                area: "Court Road",
                city: "Saharanpur"
            },
            rating: 5,
            category: "Babies and Kids",
            img: kids
        },
        {
            id: 8,
            name: "Kids Look",
            location: {
                area: "Court Road",
                city: "Saharanpur"
            },
            rating: 5,
            category: "Babies and Kids",
            img: kids
        },
        {
            id: 9,
            name: "Kids Look",
            location: {
                area: "Court Road",
                city: "Saharanpur"
            },
            rating: 5,
            category: "Babies and Kids",
            img: kids
        }
    ],
    dehradun: [
        {
            id: 1,
            name: "Paltan Bazaar",
            location: {
                area: "Paltan Bazaar",
                city: "Dehradun"
            },
            rating: 5,
            category: "Clothing",
            img: sardar
        },
        {
            id: 2,
            name: "Rajpur Road",
            location: {
                area: "Irrigation Colony",
                city: "Dehradun"
            },
            rating: 5,
            category: "Branded showrooms",
            img: kids
        }
    ],
    roorkee: [
        {
            id: 1,
            name: "Pankaj Sweets",
            location: {
                area: "Rampur Chowk",
                city: "Roorkee"
            },
            rating: 5,
            category: "Food and Drinks",
            img: sardar
        },
        {
            id: 2,
            name: "Gada Electronics",
            location: {
                area: "Azaad Nagar",
                city: "Roorkee"
            },
            rating: 5,
            category: "Electronics",
            img: electronics
        },
        {
            id: 3,
            name: "Tibetan Market",
            location: {
                area: "Pant Road, Race Course",
                city: "Roorkee"
            },
            rating: 4,
            category: "Tribal jewelry",
            img: kids
        }
    ]
}

export default shops;