const locationsData = [
    {
        name: "Hagia Sophia",
        image: "assets/images/explore/hagia-sophia.jpg",
        rating: "4.9",
        ratingsCount: "25 ratings",
        price: "Free",
        type: "Monument",
        description: "Former cathedral and mosque, now an iconic museum in Istanbul.",
        themeClass: "bg-theme-1",
        tag: "best rated"
    },
	{
        name: "Pamukkale",
        image: "assets/images/explore/pamukkale.jpg",
        rating: "4.8",
        ratingsCount: "18 ratings",
        price: "150 TL",
        type: "Natural Destination",
        description: "White terraces and thermal waters — a unique natural wonder of the world.",
        themeClass: "bg-theme-2",
	tag: "featured"
    },
    {
        name: "Mevlana Museum",
        image: "assets/images/explore/mevlana-museum.jpg",
        rating: "4.7",
        ratingsCount: "13 ratings",
        price: "Free",
        type: "Religious Monument",
        description: "Mausoleum of Rumi — spiritual and Sufi symbol located in Konya.",
        themeClass: "bg-theme-3",
	tag: ""top visited
    },
    {
        name: "Ephesus",
        image: "assets/images/explore/ephesus.jpg",
        rating: "4.9",
        ratingsCount: "30 ratings",
        price: "200 TL",
        type: "Archaeological Site",
        description: "Ancient city with Roman ruins including the famous Library of Celsus.",
        themeClass: "bg-theme-5",
	tag: "ancient"
    },
    {
        name: "Sumela Monastery",
        image: "assets/images/explore/sumela-monastery.jpg",
        rating: "4.8",
        ratingsCount: "17 ratings",
        price: "100 TL",
        type: "Monastery",
        description: "Spectacular cliffside monastery with panoramic mountain views.",
        themeClass: "bg-theme-1",
	tag: "religious"
    },
    {
        name: "Topkapi",
        image: "assets/images/explore/topkapi.jpg",
        rating: "4.6",
        ratingsCount: "19 ratings",
        price: "200 TL",
        type: "Palace",
        description: "Former residence of the Ottoman sultans — now an open-air museum.",
        themeClass: "bg-theme-4",
	tag: "historic"
    },
    {
        name: "Blue Mosque",
        image: "assets/images/explore/blue-mosque.jpg",
        rating: "4.8",
        ratingsCount: "30 ratings",
        price: "Free",
        type: "Mosque",
        description: "One of the most beautiful mosques in the world, known for its blue tiles.",
        themeClass: "bg-theme-2",
        tag: "historic"
    },
    {
        name: "Galata Tower",
        image: "assets/images/explore/galata-tower.jpg",
        rating: "4.6",
        ratingsCount: "40 ratings",
        price: "140 TL",
        type: "Tower",
        description: "Medieval stone tower offering panoramic views over Istanbul.",
        themeClass: "bg-theme-2",
        tag: "viewpoint"
    },
    {
        name: "Dolmabahce Palace",
        image: "assets/images/explore/dolmabahce-palace.jpg",
        rating: "4.8",
        ratingsCount: "50 ratings",
        price: "300 TL",
        type: "Palace",
        description: "The grand palace on the Bosphorus, showcasing the splendor of the Ottoman Empire's last sultans.",
        themeClass: "bg-theme-1",
        tag: "luxury"
    },
	{
        name: "Basilica Cistern",
        image: "assets/images/explore/basilica-cistern.jpg",
        rating: "4.5",
        ratingsCount: "55 ratings",
        price: "100 TL",
        type: "Underground",
        description: "Ancient underground water reservoir featuring iconic Medusa heads and mysterious atmosphere.",
        themeClass: "bg-theme-1",
        tag: "cistern"
    },
    {
        name: "Goreme",
        image: "assets/images/explore/goreme.jpg",
        rating: "4.9",
        ratingsCount: "120 ratings",
        price: "150 TL",
        type: "Museum",
        description: "Rock-cut churches with stunning frescoes, a UNESCO World Heritage Site.",
        themeClass: "bg-theme-1",
        tag: "historic"
    },
    {
        name: "Hot Air Balloon",
        image: "assets/images/explore/Hot-Air-Balloon.jpg",
        rating: "5.0",
        ratingsCount: "250 ratings",
        price: "2500 TL",
        type: "Experience",
        description: "The ultimate Cappadocia experience: flying over the fairy chimneys at sunrise.",
        themeClass: "bg-theme-2",
        tag: "adventure"
    },
    {
        name: "Uchisar Castle",
        image: "assets/images/explore/uchisar-castle.jpg",
        rating: "4.7",
        ratingsCount: "85 ratings",
        price: "50 TL",
        type: "Castle",
        description: "The highest point in Cappadocia with panoramic views over the valleys.",
        themeClass: "bg-theme-1",
        tag: "viewpoint"
    },
    {
        name: "Love Valley",
        image: "assets/images/explore/love-valley.jpg",
        rating: "4.8",
        ratingsCount: "65 ratings",
        price: "Free",
        type: "Valley",
        description: "Famous for its unique rock formations and stunning hiking trails.",
        themeClass: "bg-theme-2",
        tag: "nature"
    },
    {
        name: "Derinkuyu",
        image: "assets/images/explore/derinkuyu.jpg",
        rating: "4.6",
        ratingsCount: "70 ratings",
        price: "100 TL",
        type: "Underground",
        description: "An incredible multi-level ancient underground city capable of housing thousands of people.",
        themeClass: "bg-theme-1",
        tag: "Underground"
    },
    {
        name: "Pasabag",
        image: "assets/images/explore/pasabag.jpg",
        rating: "4.7",
        ratingsCount: "75 ratings",
        price: "Free",
        type: "Valley",
        description: "Magical valley famous for its giant fairy chimneys and surreal landscape.",
        themeClass: "bg-theme-2",
        tag: "Nature"
    },	
    {
        name: "Kaleici",
        image: "assets/images/explore/kaleici.jpg",
        rating: "4.7",
        ratingsCount: "60 ratings",
        price: "Free",
        type: "Old Town",
        description: "Charming old town with narrow streets, historic houses, and lively bazaars.",
        themeClass: "bg-theme-1",
        tag: "historic"
    },
    {
        name: "Duden",
        image: "assets/images/explore/duden.jpg",
        rating: "4.8",
        ratingsCount: "45 ratings",
        price: "20 TL",
        type: "Waterfall",
        description: "Spectacular waterfalls plunging into the Mediterranean Sea near Antalya.",
        themeClass: "bg-theme-2",
        tag: "nature"
    },
    {
        name: "Antalya Museum",
        image: "assets/images/explore/antalya-museum.jpg",
        rating: "4.7",
        ratingsCount: "50 ratings",
        price: "100 TL",
        type: "Museum",
        description: "One of Turkey's largest museums, housing artifacts from ancient Pamphylia and beyond.",
        themeClass: "bg-theme-1",
        tag: "museum"
    },
    {
        name: "Konyaalti Beach",
        image: "assets/images/explore/konyaalti-beach.jpg",
        rating: "4.6",
        ratingsCount: "80 ratings",
        price: "Free",
        type: "Beach",
        description: "A beautiful long stretch of pebble beach with mountains in the background.",
        themeClass: "bg-theme-2",
        tag: "beach"
    },
    {
        name: "Hadrians Gate",
        image: "assets/images/explore/hadrians-gate.jpg",
        rating: "4.7",
        ratingsCount: "45 ratings",
        price: "Free",
        type: "Historic Gate",
        description: "Magnificent Roman triumphal arch, symbol of Antalya’s history.",
        themeClass: "bg-theme-1",
        tag: "monument"
    },
    {
        name: "Antalya Aquarium",
        image: "assets/images/explore/antalya-aquarium.jpg",
        rating: "4.6",
        ratingsCount: "90 ratings",
        price: "200 TL",
        type: "Aquarium",
        description: "Home to one of the world's longest tunnel aquariums.",
        themeClass: "bg-theme-2",
        tag: "family"
    },
{
    name: "Clock Tower",
    image: "assets/images/explore/clock-tower.jpg",
    rating: "4.7",
    ratingsCount: "90 ratings",
    price: "Free",
    type: "Monument",
    description: "The iconic symbol of İzmir located in Konak Square, built in 1901.",
    themeClass: "bg-theme-1",
    tag: "historic"
},
{
    name: "Kemeraltı Bazaar",
    image: "assets/images/explore/kemeralti-bazaar.jpg",
    rating: "4.6",
    ratingsCount: "70 ratings",
    price: "Free",
    type: "Bazaar",
    description: "Vibrant and colorful bazaar district, full of local shops and street food.",
    themeClass: "bg-theme-2",
    tag: "shopping"
},
{
    name: "Kadifekale",
    image: "assets/images/explore/kadifekale.jpg",
    rating: "4.5",
    ratingsCount: "55 ratings",
    price: "Free",
    type: "Castle",
    description: "Ancient hilltop fortress with panoramic views over İzmir and the coastline.",
    themeClass: "bg-theme-1",
    tag: "historic"
},
{
    name: "Alsancak",
    image: "assets/images/explore/alsancak.jpg",
    rating: "4.8",
    ratingsCount: "80 ratings",
    price: "Free",
    type: "District",
    description: "Trendy area filled with cafés, boutiques, and the famous Kordon seaside promenade.",
    themeClass: "bg-theme-2",
    tag: "lifestyle"
},
{
    name: "Izmir Archaeological Museum",
    image: "assets/images/explore/izmir-archaeological-museum.jpg",
    rating: "4.6",
    ratingsCount: "40 ratings",
    price: "50 TL",
    type: "Museum",
    description: "Rich collection of artifacts from ancient Smyrna and surrounding areas.",
    themeClass: "bg-theme-1",
    tag: "museum"
},
{
    name: "Agora of Smyrna",
    image: "assets/images/explore/agora-of-smyrna.jpg",
    rating: "4.5",
    ratingsCount: "50 ratings",
    price: "30 TL",
    type: "Ancient Agora",
    description: "Ruins of the ancient marketplace of Smyrna, beautifully preserved in the heart of Izmir.",
    themeClass: "bg-theme-2",
    tag: "archaeology"
},
{
    name: "Travertines",
    image: "assets/images/explore/travertines.jpg",
    rating: "5.0",
    ratingsCount: "300 ratings",
    price: "200 TL",
    type: "Natural Wonder",
    description: "Famous white terraces of mineral-rich thermal waters cascading down hillsides.",
    themeClass: "bg-theme-1",
    tag: "nature"
},
{
    name: "Hierapolis",
    image: "assets/images/explore/hierapolis.jpg",
    rating: "4.9",
    ratingsCount: "220 ratings",
    price: "Included",
    type: "Ruins",
    description: "Greco-Roman city built atop the hot springs, UNESCO World Heritage site.",
    themeClass: "bg-theme-2",
    tag: "historic"
},
{
    name: "Cleopatra Pool",
    image: "assets/images/explore/cleopatra-pool.jpg",
    rating: "4.7",
    ratingsCount: "180 ratings",
    price: "130 TL",
    type: "Thermal Pool",
    description: "Swim among ancient Roman columns in naturally heated waters said to have healing powers.",
    themeClass: "bg-theme-1",
    tag: "relaxation"
},
{
    name: "Antique Pool",
    image: "assets/images/explore/antique-pool.jpg",
    rating: "4.8",
    ratingsCount: "150 ratings",
    price: "130 TL",
    type: "Thermal Pool",
    description: "Another famous thermal pool perfect for bathing among ancient ruins.",
    themeClass: "bg-theme-2",
    tag: "thermal"
},
{
    name: "Pamukkale Natural Park",
    image: "assets/images/explore/Pamukkale-Natural-Park.jpg",
    rating: "4.5",
    ratingsCount: "90 ratings",
    price: "Free",
    type: "Park",
    description: "A relaxing green park with ponds, cafés, and a stunning view of the terraces.",
    themeClass: "bg-theme-1",
    tag: "park"
},
{
    name: "Laodicea",
    image: "assets/images/explore/laodicea.jpg",
    rating: "4.7",
    ratingsCount: "100 ratings",
    price: "30 TL",
    type: "Ruins",
    description: "Important ancient city with impressive Roman streets, temples, and theatres.",
    themeClass: "bg-theme-2",
    tag: "archaeology"
},
{
    name: "Grand Mosque",
    image: "assets/images/explore/Grand-Mosque.jpg",
    rating: "4.8",
    ratingsCount: "95 ratings",
    price: "Free",
    type: "Mosque",
    description: "Magnificent example of Ottoman architecture with impressive calligraphy panels inside.",
    themeClass: "bg-theme-1",
    tag: "historic"
},
{
    name: "Green Tomb",
    image: "assets/images/explore/green-tomb.jpg",
    rating: "4.7",
    ratingsCount: "70 ratings",
    price: "Free",
    type: "Tomb",
    description: "The stunning mausoleum of Sultan Mehmed I, known for its distinctive green tiles.",
    themeClass: "bg-theme-2",
    tag: "mausoleum"
},
{
    name: "Uludag",
    image: "assets/images/explore/uludag.jpg",
    rating: "4.9",
    ratingsCount: "120 ratings",
    price: "100 TL",
    type: "Nature Park",
    description: "Popular destination for winter sports and trekking, offering breathtaking mountain views.",
    themeClass: "bg-theme-1",
    tag: "nature"
},
{
    name: "Zeugma Mosaic Museum",
    image: "assets/images/explore/zeugma-museum.jpg",
    rating: "4.9",
    ratingsCount: "250 ratings",
    price: "75 TL",
    type: "Museum",
    description: "The world’s largest mosaic museum, featuring stunning Roman and Hellenistic works.",
    themeClass: "bg-theme-1",
    tag: "museum"
},
{
    name: "Gaziantep Castle",
    image: "assets/images/explore/gaziantep-castle.jpg",
    rating: "4.7",
    ratingsCount: "180 ratings",
    price: "Free",
    type: "Castle",
    description: "Historic fortress offering views of the city and insights into Gaziantep’s ancient past.",
    themeClass: "bg-theme-2",
    tag: "historic"
},
{
    name: "Bakırcılar Çarşısı",
    image: "assets/images/explore/bakircilar-bazaar.jpg",
    rating: "4.8",
    ratingsCount: "150 ratings",
    price: "Free",
    type: "Bazaar",
    description: "Traditional market known for handmade copper crafts and authentic Turkish atmosphere.",
    themeClass: "bg-theme-1",
    tag: "shopping"
},
{
    name: "Anitkabir",
    image: "assets/images/explore/anitkabir.jpg",
    rating: "5.0",
    ratingsCount: "350 ratings",
    price: "Free",
    type: "Mausoleum",
    description: "The mausoleum of Mustafa Kemal Atatürk, founder of modern Turkey, an iconic site.",
    themeClass: "bg-theme-1",
    tag: "monument"
},
{
    name: "Ankara Castle",
    image: "assets/images/explore/ankara-castle.jpg",
    rating: "4.7",
    ratingsCount: "180 ratings",
    price: "Free",
    type: "Castle",
    description: "Historic castle offering beautiful panoramic views over Ankara’s old town.",
    themeClass: "bg-theme-2",
    tag: "historic"
},
{
    name: "Museum of Anatolian Civilizations",
    image: "assets/images/explore/Museum-of-Anatolian-Civilizations.jpg",
    rating: "4.9",
    ratingsCount: "220 ratings",
    price: "75 TL",
    type: "Museum",
    description: "Amazing collection of prehistoric artifacts from Anatolia, a must-see in Ankara.",
    themeClass: "bg-theme-1",
    tag: "museum"
},
{
    name: "Mevlana Museum",
    image: "assets/images/explore/mevlana-museum.jpg",
    rating: "5.0",
    ratingsCount: "300 ratings",
    price: "Free",
    type: "Museum",
    description: "The tomb of Rumi (Mevlana), founder of the Mevlevi Order, an important spiritual site.",
    themeClass: "bg-theme-1",
    tag: "spiritual"
},
{
    name: "Alaeddin Mosque",
    image: "assets/images/explore/alaeddin-mosque.jpg",
    rating: "4.7",
    ratingsCount: "120 ratings",
    price: "Free",
    type: "Mosque",
    description: "Historical mosque from the Seljuk period, built atop Konya's central hill.",
    themeClass: "bg-theme-2",
    tag: "historic"
},
{
    name: "Karatay Madrasa",
    image: "assets/images/explore/karatay-madrasa.jpg",
    rating: "4.6",
    ratingsCount: "90 ratings",
    price: "50 TL",
    type: "Museum",
    description: "Beautiful 13th-century school now turned into a museum, famous for its Seljuk tiles.",
    themeClass: "bg-theme-1",
    tag: "museum"
},
{
    name: "Sumela Monastery",
    image: "assets/images/explore/sumela-monastery.jpg",
    rating: "5.0",
    ratingsCount: "320 ratings",
    price: "200 TL",
    type: "Monastery",
    description: "Historic Greek Orthodox monastery dramatically built into a cliff face in the Altındere Valley.",
    themeClass: "bg-theme-1",
    tag: "historic"
},
{
    name: "Uzungol",
    image: "assets/images/explore/uzungol.jpg",
    rating: "4.8",
    ratingsCount: "400 ratings",
    price: "Free",
    type: "Lake",
    description: "Stunning alpine lake surrounded by lush forests, a top destination for nature lovers.",
    themeClass: "bg-theme-2",
    tag: "nature"
},
{
    name: "Trabzon Hagia Sophia",
    image: "assets/images/explore/trabzon-hagia-sophia.jpg",
    rating: "4.7",
    ratingsCount: "150 ratings",
    price: "50 TL",
    type: "Church",
    description: "Beautiful Byzantine-era church with impressive frescoes, now serving as a mosque and museum.",
    themeClass: "bg-theme-1",
    tag: "historic"
},
{
    name: "Deyrulzafaran Monastery",
    image: "assets/images/explore/deyrulzafaran.jpg",
    rating: "4.8",
    ratingsCount: "180 ratings",
    price: "40 TL",
    type: "Monastery",
    description: "Historic Syriac Orthodox monastery, a spiritual center with over 1,500 years of history.",
    themeClass: "bg-theme-1",
    tag: "historic"
},
{
    name: "Zinciriye Medrese",
    image: "assets/images/explore/zinciriye-medrese.jpg",
    rating: "4.7",
    ratingsCount: "130 ratings",
    price: "Free",
    type: "Medrese",
    description: "Beautiful Islamic school with panoramic views of Mardin’s golden-hued cityscape.",
    themeClass: "bg-theme-2",
    tag: "historic"
},
{
    name: "Mardin Old City",
    image: "assets/images/explore/mardin-old-city.jpg",
    rating: "5.0",
    ratingsCount: "400 ratings",
    price: "Free",
    type: "Historic City",
    description: "Wander through stone houses, narrow alleys, and traditional markets in this timeless city.",
    themeClass: "bg-theme-1",
    tag: "historic"
},
{
    name: "Balikligol",
    image: "assets/images/explore/balikligol.jpg",
    rating: "5.0",
    ratingsCount: "420 ratings",
    price: "Free",
    type: "Sacred Site",
    description: "Legendary pool where Prophet Abraham is believed to have been saved from fire; sacred carp swim here.",
    themeClass: "bg-theme-1",
    tag: "spiritual"
},
{
    name: "Gobekli Tepe",
    image: "assets/images/explore/gobekli-tepe.jpg",
    rating: "5.0",
    ratingsCount: "350 ratings",
    price: "90 TL",
    type: "Archaeological Site",
    description: "The world's oldest known temple complex, dating back over 11,000 years. A UNESCO World Heritage Site.",
    themeClass: "bg-theme-2",
    tag: "archaeology"
},
{
    name: "Sanliurfa Castle",
    image: "assets/images/explore/sanliurfa-castle.jpg",
    rating: "4.6",
    ratingsCount: "210 ratings",
    price: "Free",
    type: "Castle",
    description: "Historic hilltop castle offering panoramic views of Şanlıurfa and nearby sacred sites.",
    themeClass: "bg-theme-1",
    tag: "historic"
},
{
    name: "Sabanci Mosque",
    image: "assets/images/explore/sabanci-mosque.jpg",
    rating: "5.0",
    ratingsCount: "420 ratings",
    price: "Free",
    type: "Mosque",
    description: "One of the largest mosques in the Middle East, a modern architectural landmark by the Seyhan River.",
    themeClass: "bg-theme-1",
    tag: "religious"
},
{
    name: "Taskopru",
    image: "assets/images/explore/stone-bridge.jpg",
    rating: "4.8",
    ratingsCount: "260 ratings",
    price: "Free",
    type: "Bridge",
    description: "Ancient Roman bridge still in use today, spanning the Seyhan River; symbol of Adana.",
    themeClass: "bg-theme-2",
    tag: "historic"
},
{
    name: "Merkez Park",
    image: "assets/images/explore/merkez-park.jpg",
    rating: "4.7",
    ratingsCount: "180 ratings",
    price: "Free",
    type: "Urban Park",
    description: "The largest urban park in Turkey, ideal for walking, biking, and family time near the Seyhan River.",
    themeClass: "bg-theme-1",
    tag: "park"
},
{
    name: "Erciyes Mountain",
    image: "assets/images/explore/erciyes-mountain.jpg",
    rating: "5.0",
    ratingsCount: "300 ratings",
    price: "Varies",
    type: "Mountain",
    description: "The highest mountain in Central Anatolia, famous for skiing, trekking, and breathtaking views.",
    themeClass: "bg-theme-1",
    tag: "nature"
},
{
    name: "Kayseri Castle",
    image: "assets/images/explore/kayseri-castle.jpg",
    rating: "4.8",
    ratingsCount: "210 ratings",
    price: "Free",
    type: "Castle",
    description: "Ancient fortress located in the city center, offering insights into Kayseri's long history.",
    themeClass: "bg-theme-2",
    tag: "historic"
},
{
    name: "Gevher Nesibe Museum",
    image: "assets/images/explore/Gevher-Nesibe-Museum.jpg",
    rating: "4.7",
    ratingsCount: "90 ratings",
    price: "50 TL",
    type: "Museum",
    description: "One of the world’s oldest medical schools, now a fascinating museum of Seljuk medical history.",
    themeClass: "bg-theme-1",
    tag: "museum"
}








	
 

];
