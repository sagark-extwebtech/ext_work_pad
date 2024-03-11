const productData = [
    {
        "id":1,
        "title": "Mediterranean Delight",
        "category": "Italian",
        "imageUrl": "https://source.unsplash.com/random",
        "price": "$21",
        "discountedPrice": "$19",
        "description": "A delightful combination of olives, feta cheese, and sun-dried tomatoes.",
        "sub_categories": [
            { "item": "olives", "imageUrl": "https://example.com/olives.jpg" },
            { "item": "feta cheese", "imageUrl": "https://example.com/feta-cheese.jpg" },
            { "item": "feta cheese", "imageUrl": "https://example.com/feta-cheese.jpg" },
            { "item": "feta cheese", "imageUrl": "https://example.com/feta-cheese.jpg" },
            { "item": "feta cheese", "imageUrl": "https://example.com/feta-cheese.jpg" },
            { "item": "sun-dried tomatoes", "imageUrl": "https://example.com/sun-dried-tomatoes.jpg" }
        ],
        "quantity": 0,
        "stockStatus": false
    },
    {
        "id":2,
        "title": "Fried Delight Rice",
        "category": "Italian",
        "imageUrl": "https://source.unsplash.com/random",
        "price": "$21",
        "discountedPrice": "$19",
        "description": "A delightful combination of olives, feta cheese, and sun-dried tomatoes.",
        "sub_categories": [
            { "item": "olives", "imageUrl": "https://example.com/olives.jpg" },
            { "item": "feta cheese", "imageUrl": "https://example.com/feta-cheese.jpg" },
            { "item": "feta cheese", "imageUrl": "https://example.com/feta-cheese.jpg" },
            { "item": "feta cheese", "imageUrl": "https://example.com/feta-cheese.jpg" },
            { "item": "feta cheese", "imageUrl": "https://example.com/feta-cheese.jpg" },
            { "item": "sun-dried tomatoes", "imageUrl": "https://example.com/sun-dried-tomatoes.jpg" }
        ],
        "quantity": 0,
        "stockStatus": true
    },
    {
        "id":3,
        "title": "Biryani Delight Combo",
        "category": "Italian",
        "imageUrl": "https://source.unsplash.com/random",
        "price": "$21",
        "discountedPrice": "$19",
        "description": "A delightful combination of olives, feta cheese, and sun-dried tomatoes.",
        "sub_categories": [
            { "item": "olives", "imageUrl": "https://example.com/olives.jpg" },
            { "item": "feta cheese", "imageUrl": "https://example.com/feta-cheese.jpg" },
            { "item": "feta cheese", "imageUrl": "https://example.com/feta-cheese.jpg" },
            { "item": "feta cheese", "imageUrl": "https://example.com/feta-cheese.jpg" },
            { "item": "feta cheese", "imageUrl": "https://example.com/feta-cheese.jpg" },
            { "item": "sun-dried tomatoes", "imageUrl": "https://example.com/sun-dried-tomatoes.jpg" }
        ],
        "quantity": 0,
        "stockStatus": false
    },
    {
        "id":4,
        "title": "BBQ Chicken Bliss",
        "category": "Italian",
        "imageUrl": "https://source.unsplash.com/random",
        "price": "$23",
        "discountedPrice": "$21",
        "description": "Indulge in the smoky flavors of barbecue chicken with this blissful pizza.",
        "sub_categories": [
            { "item": "barbecue chicken", "imageUrl": "https://example.com/bbq-chicken.jpg" },
            { "item": "red onions", "imageUrl": "https://example.com/red-onions.jpg" },
            { "item": "red onions", "imageUrl": "https://example.com/red-onions.jpg" }
        ],
        "quantity": 0,
        "stockStatus": true
    },
    {
        "id":5,
        "title": "Cheese Lover's Paradise",
        "category": "Mexican",
        "imageUrl": "https://source.unsplash.com/random",
        "price": "$17",
        "discountedPrice": "$15",
        "description": "For those who can't get enough, a paradise of multiple cheese varieties.",
        "sub_categories": [
            { "item": "mozzarella", "imageUrl": "https://example.com/mozzarella.jpg" },
            { "item": "cheddar", "imageUrl": "https://example.com/cheddar.jpg" },
            { "item": "cheddar", "imageUrl": "https://example.com/cheddar.jpg" },
            { "item": "parmesan", "imageUrl": "https://example.com/parmesan.jpg" }
        ],
        "quantity": 0,
        "stockStatus": false
    },
    {
        "id":6,
        "title": "Hawaiian Luau",
        "category": "Mexican",
        "imageUrl": "https://source.unsplash.com/random",
        "price": "$20",
        "discountedPrice": "$18",
        "description": "Experience a tropical escape with ham, pineapple, and a touch of aloha.",
        "sub_categories": [
            { "item": "ham", "imageUrl": "https://example.com/ham.jpg" },
            { "item": "pineapple", "imageUrl": "https://example.com/pineapple.jpg" }
        ],
        "quantity": 0,
        "stockStatus": true
    },
    {
        "id":7,
        "title": "Pesto Perfection",
        "category": "Chinese",
        "imageUrl": "https://source.unsplash.com/random",
        "price": "$19",
        "discountedPrice": "$17",
        "description": "Basil pesto, cherry tomatoes, and mozzarella create a perfect harmony.",
        "sub_categories": [
            { "item": "basil pesto", "imageUrl": "https://example.com/basil-pesto.jpg" },
            { "item": "cherry tomatoes", "imageUrl": "https://example.com/cherry-tomatoes.jpg" }
        ],
        "quantity": 0,
        "stockStatus": false
    },
    {
        "id":8,
        "title": "Nuddles Perfection Combo",
        "category": "Chinese",
        "imageUrl": "https://source.unsplash.com/random",
        "price": "$19",
        "discountedPrice": "$17",
        "description": "Basil pesto, cherry tomatoes, and mozzarella create a perfect harmony.",
        "sub_categories": [
            { "item": "basil pesto", "imageUrl": "https://example.com/basil-pesto.jpg" },
            { "item": "cherry tomatoes", "imageUrl": "https://example.com/cherry-tomatoes.jpg" }
        ],
        "quantity": 0,
        "stockStatus": true
    },
    {
        "id":9,
        "title": "Mutton Chicken Kick",
        "category": "Indian",
        "imageUrl": "https://source.unsplash.com/random",
        "price": "$22",
        "discountedPrice": "$20",
        "description": "A spicy kick with buffalo chicken, blue cheese, and hot sauce.",
        "sub_categories": [
            { "item": "buffalo chicken", "imageUrl": "https://example.com/buffalo-chicken.jpg" },
            { "item": "blue cheese", "imageUrl": "https://example.com/blue-cheese.jpg" }
        ],
        "quantity": 0,
        "stockStatus": true
    },
    {
        "id":10,
        "title": "Seafood Sensation",
        "category": "Indian",
        "imageUrl": "https://source.unsplash.com/random",
        "price": "$24",
        "discountedPrice": "$22",
        "description": "An ocean-inspired sensation with shrimp, crab, and calamari.",
        "sub_categories": [
            { "item": "shrimp", "imageUrl": "https://example.com/shrimp.jpg" },
            { "item": "crab", "imageUrl": "https://example.com/crab.jpg" },
            { "item": "calamari", "imageUrl": "https://example.com/calamari.jpg" }
        ],
        "quantity": 0,
        "stockStatus": false
    },
    {
        "id":12,
        "title": "Truffle Elegance",
        "category": "Mexican",
        "imageUrl": "https://source.unsplash.com/random",
        "price": "$26",
        "discountedPrice": "$24",
        "description": "Indulge in the elegant flavors of truffle oil, mushrooms, and goat cheese.",
        "sub_categories": [
            { "item": "truffle oil", "imageUrl": "https://example.com/truffle-oil.jpg" },
            { "item": "mushrooms", "imageUrl": "https://example.com/mushrooms.jpg" },
            { "item": "goat cheese", "imageUrl": "https://example.com/goat-cheese.jpg" }
        ],
        "quantity": 0,
        "stockStatus": true
    }
]


export default productData;