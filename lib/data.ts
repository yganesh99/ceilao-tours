export interface ItineraryItem {
	day: string;
	title: string;
	description: string;
}

export interface PricingOption {
	title: string;
	lkr: string;
	usd: string;
}

export interface Tour {
	id: string | number;
	title: string;
	subtitle?: string;
	description: string;
	overview: string;
	category?: string;
	image?: string;
	video?: string;
	poster?: string;
	itinerary: ItineraryItem[];
	duration?: string;
	pricingNote?: string;
	pricing?: PricingOption[];
}

export const experiences: Tour[] = [
	{
		id: 1,
		title: 'SOUL OF CEYLON',
		category: 'Culture & Heritage',
		video: '/assets/culture.webm',
		poster: '/assets/thumbnail-1.webp',
		description:
			'Trace 2,600 years of history through ancient kingdoms and mist-veiled hills. A journey into the timeless rhythm and colonial grace of our island home.',
		overview:
			'Step into the heart of Sri Lanka’s ancient civilizations as you explore sacred cities, royal kingdoms, and UNESCO World Heritage sites. From Sigiriya’s majestic rock fortress to the Temple of the Tooth and colonial Galle Fort, this journey reveals 2,600 years of living history. A timeless cultural immersion blending spirituality, architecture, and tradition.',
		itinerary: [
			{
				day: 'Day 1',
				title: 'Arrival - Negombo',
				description:
					'You step out of the terminal into the warm, tropical embrace of Sri Lanka, where your Ceilao Travel and Tours representative greets you with a traditional "Ayubowan." As you drive toward the coastal town of Negombo, the scent of the salt air fills the breeze. You check into your hotel and shed the fatigue of your flight.\n\nBy evening, you are gliding through the Negombo Lagoon on a private boat; you watch local fishermen casting nets against a purple sunset. To make the evening truly special, you enjoy a "Lagoon-to-Table" culinary demonstration on board, where a local chef prepares fresh ginger-infused lagoon prawns right before your eyes as you drift past the mangroves.',
			},
			{
				day: 'Day 2',
				title: 'Negombo - Anuradhapura',
				description:
					'The journey north begins after a fresh tropical breakfast. You watch the landscape shift from coastal palms to the dry-zone forests of the Cultural Triangle. You arrive in Anuradhapura, the island’s first ancient capital, where time seems to stand still. You walk barefoot on the sun-warmed stone surrounding the Jaya Sri Maha Bodhi, feeling the spiritual energy of the world\'s oldest human-planted tree.\n\nYour spiritual immersion deepens as you participate in a private "Pirith" chanting ceremony, where a resident monk ties a sacred saffron thread around your wrist, offering a traditional blessing for a safe and enlightened journey.',
			},
			{
				day: 'Day 3',
				title: 'Anuradhapura - Hiriwadunna - Sigiriya',
				description:
					'This morning, you immerse yourself in the soul of the Sri Lankan countryside at Hiriwadunna. You climb into a traditional bullock cart, the wooden wheels creaking as you pass through lush paddy fields. You board a catamaran to cross a lotus-filled lake, with the Sigiriya rock looming in the distance.\n\nAfter enjoying a "Kamatha" lunch—spicy curries cooked in clay pots—you join a village woman for a hands-on "Kurakkan" (millet) grinding session, learning the rhythmic labor that has sustained rural families for generations.',
			},
			{
				day: 'Day 4',
				title: 'Sigiriya - Polonnaruwa - Sigiriya',
				description:
					'At dawn, you begin your ascent of the Sigiriya Rock Fortress, passing between the massive stone Lion’s Paws and the vibrant frescoes. In the afternoon, you explore the medieval capital of Polonnaruwa by bicycle.\n\nAs night falls, you embark on the highlight of the day: The Sigiriya Night Tour under the Full Moon. Guided by a naturalist, you trek through the moonlit jungle trails at the base of the fortress, searching for the reflective eyes of the elusive Gray Slender Loris. The sight of the massive Lion Rock silhouetted against a bright, silver sky is a hauntingly beautiful experience that few travelers ever witness.',
			},
			{
				day: 'Day 5',
				title: 'Sigiriya - Dambulla - Kandy',
				description:
					'You leave the plains behind and head into the misty hills. Your first stop is the Dambulla Cave Temple, where you step into cool, dark caverns filled with golden Buddha statues. After a fragrant stop at a Matale Spice Garden, you reach Kandy.\n\nBefore the evening ceremonies, you enjoy an exclusive backstage meeting with a master craftsman of traditional Kandyan masks, discovering the hidden symbolism behind the vibrant designs. As night falls, you witness the flickering oil lamps during the "Pooja" ceremony at the Temple of the Sacred Tooth Relic.',
			},
			{
				day: 'Day 6',
				title: 'Kandy - Nuwara Eliya',
				description:
					'You board the iconic blue train at Kandy station. As the train winds through the mountains, you lean out of the door to feel the cool mist and see endless carpets of emerald-green tea estates.\n\nArriving in Nuwara Eliya, you enter a world of colonial charm. You walk through a Tea Factory, breathing in the rich aroma of fermenting leaves, and participate in a "Tea Sommelier" masterclass, where you learn to identify the subtle flavor profiles of Silver Tips and Broken Orange Pekoe like a true connoisseur.',
			},
			{
				day: 'Day 7',
				title: 'Nuwara Eliya - Galle',
				description:
					'You descend from the highlands, watching the tea bushes give way to the turquoise Indian Ocean. Along the coast, you stop to witness the iconic Stilt Fishermen of Weligama and even try your hand at balancing on the "Petta" (perch) yourself.\n\nYou then enter the gates of the Galle Dutch Fort, a living UNESCO world heritage site. As the sun sets, you join a local storyteller on the Fort Ramparts, listening to tales of shipwrecks and spice traders while the waves crash against the coral bastions.',
			},
			{
				day: 'Day 8',
				title: 'Galle',
				description:
					'Today is dedicated to the timeless rhythm of the South. You spend your morning wandering the narrow cobblestone lanes of the Fort, perhaps popping into an artisan boutique or a jewelry workshop. For a more relaxed afternoon, you head to the nearby Jungle Beach for a private picnic, enjoying the calm waters tucked away from the main tourist strips.\n\nYou return to the Fort for a final evening, enjoying the vibrant atmosphere of the "Old Dutch Hospital" precinct, now a hub for world-class dining.',
			},
			{
				day: 'Day 9',
				title: 'Galle - Colombo - Airport - Departure',
				description:
					'Your journey concludes with a scenic drive along the coast to the vibrant capital of Colombo. You enjoy a final sensory exploration of the city, visiting the neon-lit Lotus Tower and the bustling Pettah Market for some last-minute gift shopping—perhaps some Ceylon sapphires or premium spices. After a final farewell lunch of hoppers, you are transferred to the airport via the expressway, carrying with you the sights, sounds, and spirit of the "Soul of Ceylon."',
			},
		],
		duration: '9 Days',
		pricingNote: 'TOTAL PER PERSON (with a 10% markup)',
		pricing: [
			{
				title: 'Luxury Car + English Guide',
				lkr: '602,113',
				usd: '1945',
			},
			{
				title: 'Luxury SUV + English Guide',
				lkr: '703,862.50',
				usd: '2275',
			},
		],
	},
	{
		id: 2,
		title: 'WILD CEYLON',
		category: 'Wildlife',
		video: '/assets/nature.webm',
		poster: '/assets/thumbnail-2.webp',
		description:
			'Venture where the wild still reigns. Encounter leopards and untamed peaks from the refined comfort of a luxury tented lodge.',
		overview:
			'Discover Sri Lanka’s untamed beauty across vast national parks, misty mountains, and lush rainforests. Encounter leopards in Yala, explore Wilpattu’s wilderness, and trek through the Knuckles mountain range. A perfect expedition for nature lovers seeking adventure, biodiversity, and authentic wildlife encounters.',
		itinerary: [
			{
				day: 'Day 1',
				title: 'Arrival - Negombo',
				description:
					'You step out of the terminal into the warm, tropical breeze of Sri Lanka, where your representative greets you with a traditional "Ayubowan." After a short drive to Negombo, you settle into your hotel to shed the fatigue of travel. By late afternoon, you are gliding through the Muthurajawela Marsh on a private boat; you watch purple heron and crocodiles lurking in the mangroves as the sun dips below the horizon.\n\nTo welcome you to the island, you enjoy a "Lagoon-to-Table" seafood tasting right by the water, sampling fresh lagoon crabs prepared with local black pepper.',
			},
			{
				day: 'Day 2',
				title: 'Negombo - Wilpattu',
				description:
					'The journey north begins after breakfast, heading toward Wilpattu National Park, the island\'s largest and most mysterious wilderness. In the evening, you embark on your first safari, weaving through the "Willus" (natural lakes) in search of the elusive Sri Lankan leopard and the shaggy-coated sloth bear.\n\nYour experience is elevated by a private "Bush Sundowner" at a secluded clearing inside the park, where you can sip a chilled drink while listening to the evening chorus of the jungle before returning to your safari lodge.',
			},
			{
				day: 'Day 3',
				title: 'Wilpattu - Sigiriya',
				description:
					'After a final sunrise safari in Wilpattu, you drive toward the heart of the Cultural Triangle. Along the way, you stop to witness the Avukana Buddha, a magnificent 12-meter statue carved from a single rock face in the 5th century, which remains one of the finest examples of ancient standing sculpture.\n\nYou arrive in Sigiriya by late afternoon, just as the evening light begins to soften the landscape around the massive monolith.',
			},
			{
				day: 'Day 4',
				title: 'Sigiriya Exploration',
				description:
					'At dawn, you ascend the Sigiriya Rock Fortress, passing the massive Lion’s Paws and the vibrant "Cloud Maiden" frescoes. From the summit, you look out over a sea of green forest as the sun rises. In the afternoon, you immerse yourself in rural life at Hiriwadunna, enjoying a "Kamatha" lunch cooked over an open fire.\n\nAs night falls, you embark on the highlight of your stay: the Sigiriya Night Trek under the Full Moon, searching for the reflective eyes of the Red Slender Loris in the forest canopy. The sight of the massive rock bathed in silver moonlight creates a hauntingly beautiful silhouette you will never forget.',
			},
			{
				day: 'Day 5',
				title: 'Sigiriya - Riverston',
				description:
					'Today you head into the "Mist-Clad Mountains" of Riverston. The drive takes you through winding roads where the air grows noticeably cooler. You hike to the Pitawala Pathana plains, a unique montane grassland that ends abruptly at a sheer cliff known as "Mini World’s End."\n\nTo fully embrace the wilderness, you enjoy a refreshing dip in the crystal-clear Thelgamu Oya, a natural river pool surrounded by dense forest, before settling into your eco-lodge for a quiet evening in the mountains.',
			},
			{
				day: 'Day 6',
				title: 'Riverston - Kandy',
				description:
					'After a misty morning walk through the Knuckles foothills, you descend toward the hill capital of Kandy. You stop at a fragrant Spice Garden in Matale to see how Ceylon cinnamon and vanilla are grown. In Kandy, you visit the Temple of the Sacred Tooth Relic during the evening "Pooja." To see a different side of the city\'s heritage, you attend a private performance of Kandyan Drumming, where you meet the musicians afterward to learn about the rhythmic traditions that have echoed through these hills for centuries.',
			},
			{
				day: 'Day 7',
				title: 'Kandy - Ella',
				description:
					'Today, you embark on a breathtaking scenic drive toward Ella. You have the freedom to stop at Ramboda Falls and panoramic viewpoints overlooking the tea country. As you wind through the mountains, the landscape transforms into endless carpets of emerald-green tea estates. You arrive in Ella and walk across the architectural marvel of the Nine Arch Bridge just as the mist begins to roll in. For a unique touch, you participate in a "Tea Leaf to Cup" experience at a small-hold plantation, plucking your own leaves before seeing them withered and dried.',
			},
			{
				day: 'Day 8',
				title: 'Ella - Belihul Oya',
				description:
					'Your morning begins with a hike up Little Adam’s Peak for panoramic vistas of the Ella Gap. Afterward, you descend from the high mountains to the adventure hub of Belihul Oya, an area where three different eco-zones meet. You spend the afternoon on a Nature Walk along the riverbank, passing through paddy fields and forests.\n\nTo truly connect with the environment, you enjoy a traditional "River Bath" in the cool, rushing waters where the Belihul Oya and Galagama Oya rivers meet, followed by a quiet evening in an eco-retreat under a canopy of stars.',
			},
			{
				day: 'Day 9',
				title: 'Belihul Oya - Kalawana (Sinharaja) - Galle',
				description:
					'You depart early for the ancient rainforests of Kalawana. At dawn, you enter the Sinharaja Rainforest, a UNESCO World Heritage site, for a guided trek. You’ll spot endemic birds like the Sri Lanka Blue Magpie and vibrant tree frogs hiding in the giant ferns.\n\nAfterward, you drive toward the coast, reaching the historic Galle Dutch Fort. You finish your final day on the coast with a "Heritage Walk" led by a local storyteller, who shares tales of spice traders and ancient shipwrecks as you walk the 400-year-old ramparts at sunset.',
			},
			{
				day: 'Day 10',
				title: 'Departure via Colombo',
				description:
					'Your journey concludes with a drive along the southern coast toward Colombo. You enjoy a final sensory exploration of the capital, visiting the colonial grandeur of the Fort district and the bustling Pettah Market for some last-minute gift shopping—perhaps some premium Ceylon tea or handcrafted local crafts.\n\nAfter taking in the skyline from the Lotus Tower, you are transferred to the airport via the expressway, carrying with you the wild spirit of Ceylon.',
			},
		],
		duration: '10 Days',
	},
	{
		id: 3,
		title: 'CEYLON FLAVOURS & TEA TRAILS',
		category: 'Culture',
		video: '/assets/hill.webm',
		poster: '/assets/thumbnail-3.webp',
		description:
			'An odyssey of scent and taste. Reside in colonial bungalows amidst emerald plantations while discovering the rich culinary traditions of our heritage.',
		overview:
			'Savour the rich flavours of Sri Lanka while journeying through emerald tea plantations and vibrant local markets. From hands-on cooking experiences to refined tea tastings in colonial bungalows, this itinerary blends gastronomy with heritage. A sensory exploration of culture through cuisine and Ceylon’s world-famous tea legacy.',
		itinerary: [
			{
				day: 'Day 1',
				title: 'Arrival - Colombo',
				description:
					'You arrive in the vibrant capital of Colombo and transfer to your hotel to settle in. In the evening, you embark on a vibrant street-food walk through Pettah and Galle Face Green, sampling authentic "Kottu Roti" and "Isso Wade" (shrimp cakes). To elevate your first night, you enjoy a private Arrack cocktail masterclass at a colonial-style bar, where a mixologist introduces you to Sri Lanka’s signature coconut spirit infused with local tropical fruits.',
			},
			{
				day: 'Day 2',
				title: 'Colombo - Kandy',
				description:
					'After breakfast, you travel to the cultural hill capital of Kandy. You visit the bustling local market with a local chef who introduces you to fragrant spices and traditional ingredients like "Goraka" (garlic) and dried fish.\n\nLater, you enjoy a hands-on cooking class with a village family, learning to prepare a classic "Rice and Curry" feast over a wood-fired hearth. You finish the afternoon with a tasting of artisanal Buffalo Curd and Kithul treacle, a beloved local dessert sourced from the nearby foothills.',
			},
			{
				day: 'Day 3',
				title: 'Kandy - Nuwara Eliya',
				description:
					'You depart for the picturesque tea country, winding through lush valleys and mist-covered mountains. You visit a working tea factory to observe the complete process of Ceylon tea production and experience tea plucking alongside estate workers.\n\nTo deepen your connection to the land, you enjoy a Journey  in the heart of the estate, featuring recipes passed down through generations of tea plantation managers, served with a view of the rolling emerald hills.',
			},
			{
				day: 'Day 4',
				title: 'Nuwara Eliya Exploration',
				description:
					'Begin the day with a tea-tasting masterclass where you learn to identify flavor notes and aroma profiles. You then explore the colonial landmarks of "Little England," including the historic Post Office and British-era cottages. Your day concludes with an elegant High-Tea experience at the Hill Club, where you are invited to visit the private herb and vegetable garden that provides the fresh ingredients for your evening’s gourmet meal.',
			},
			{
				day: 'Day 5',
				title: 'Nuwara Eliya - Ella',
				description:
					'After breakfast, you travel to Ella through scenic mountain roads lined with tea gardens. You visit Ravana Falls and stop at picturesque viewpoints offering sweeping panoramas. In the evening, you visit a boutique coffee roastery in Ella, discovering how the island’s burgeoning coffee scene is reclaiming its heritage.\n\nYou enjoy a tasting flight of locally grown beans, paired with handmade chocolate infused with Ceylon cinnamon.',
			},
			{
				day: 'Day 6',
				title: 'Ella - Galle',
				description:
					'You proceed toward the southern coast and the historic Galle Dutch Fort. After checking into your hotel, you take a leisurely walk along the cobblestone streets. To add a final culinary highlight, you participate in a "Fort Spice Walk" with a local historian, discovering how the spice trade shaped the architecture of the city, followed by a seafood dinner featuring giant lagoon crabs prepared with a secret family recipe.',
			},
			{
				day: 'Day 7',
				title: 'Galle - Colombo',
				description:
					'Enjoy a relaxed morning on the beach or a final stroll through the Fort’s boutiques before departing for Colombo. Once in the capital, you spend the afternoon at leisure. For your final evening, you are treated to a sensory "Tea-Infused Dinner," where each course is subtly enhanced by the different grades of tea you discovered in the highlands, providing a full-circle ending to your journey.',
			},
			{
				day: 'Day 8',
				title: 'Departure',
				description:
					'After a final breakfast of fresh tropical fruits and buffalo curd, you are transferred to the airport via the expressway, carrying the rich flavors and aromas of Ceylon home with you.',
			},
		],
		duration: '8 Days',
	},
	{
		id: 4,
		title: 'ISLAND OF ADVENTURE',
		category: 'Culture',
		video: '/assets/experiences.webm',
		poster: '/assets/thumbnail-5.webp',
		description:
			'Beyond the map lies a world of motion. From hidden waterfalls to mountain summits, embrace the pulse of Sri Lanka’s most thrilling landscapes.',
		overview:
			'Experience Sri Lanka through thrilling outdoor adventures across rivers, mountains, and tropical coastlines. From white-water rafting in Kitulgala to trekking in Knuckles and surfing along pristine beaches, every day brings new excitement. Designed for active travellers seeking adrenaline, scenic beauty, and unforgettable moments.',
		itinerary: [
			{
				day: 'Day 1',
				title: 'Arrival - Colombo',
				description:
					'You arrive at Bandaranaike International Airport and transfer to your hotel in Colombo. In the evening, you explore the city’s lively pulse with a "Tuk-Tuk Safari," weaving through the backstreets and hidden alleys to see the city from a local’s perspective.\n\nYou enjoy a sunset drink overlooking the Indian Ocean at Galle Face Green, where the sea spray and local energy provide a vibrant welcome to the island.',
			},
			{
				day: 'Day 2',
				title: 'Colombo - Kitulgala',
				description:
					'You proceed to Kitulgala, Sri Lanka’s adventure capital. You dive straight into the action with an exhilarating white-water rafting session on the Kelani River, followed by rock sliding and refreshing dips in natural pools. To make the experience truly wild, you join a nature naturalist for a "Rainforest Night Walk," searching for endemic amphibians and nocturnal birds that only emerge after the sun sets over the jungle canopy.',
			},
			{
				day: 'Day 3',
				title: 'Kitulgala - Knuckles Mountain Range',
				description:
					'After breakfast, you travel to the rugged Knuckles Mountain Range. You begin a scenic trek through dense forests and mountain slopes, reaching your remote campsite. As the stars come out, you enjoy a traditional "Campfire BBQ" with local mountain villagers, listening to folklore about the peaks while learning how to cook meat using ancient smoking techniques over an open flame.',
			},
			{
				day: 'Day 4',
				title: 'Knuckles Trek',
				description:
					'Start early for a full-day trekking adventure through the highlands. You discover panoramic viewpoints and crystal-clear streams. To add a layer of challenge, you participate in a "Survival Skills Workshop" led by your guide, learning how to identify medicinal plants and navigate the mist-heavy terrain using traditional landmarks before returning to your camp for a peaceful evening.',
			},
			{
				day: 'Day 5',
				title: 'Knuckles - Ella',
				description:
					'You depart for the charming mountain village of Ella. Upon arrival, you experience the Flying Ravana Zipline, soaring over the valleys at 80km/h. You then walk to the Nine Arch Bridge, but instead of just viewing it, you descend to the valley floor for a private "Tea and Turmeric" tasting at a small organic farm tucked away right beneath the bridge\'s towering arches.',
			},
			{
				day: 'Day 6',
				title: 'Ella Adventure Day',
				description:
					'Your morning begins with a hike up Little Adam’s Peak for spectacular views. For those seeking more, you can tackle the challenging trek to Ella Rock. After your descent, you soothe your muscles with a traditional Ayurvedic "Marma" massage, a deep-tissue treatment specifically designed for trekkers and athletes using herbal oils infused in the local village.',
			},
			{
				day: 'Day 7',
				title: 'Ella - Weligama',
				description:
					'You travel to the southern coast and the surfing hub of Weligama. You enjoy a beginner or intermediate surfing lesson led by professional instructors in the gentle bay. As the sun sets, you participate in a beachside "Sunset Yoga" session, allowing the rhythm of the waves to help you stretch and recover from your days in the mountains.',
			},
			{
				day: 'Day 8',
				title: 'Beach Day',
				description:
					'The morning is yours for water sports, whether it’s paddleboarding or snorkeling. To cap off your adventure, you embark on a "Sunset Catamaran Cruise," sailing along the coastline to search for dolphins. You enjoy a final seafood grill on the deck as the moon rises over the Indian Ocean, celebrating the end of your high-octane expedition.',
			},
			{
				day: 'Day 9',
				title: 'Weligama - Colombo - Departure',
				description:
					'After a final breakfast by the ocean, you return to Colombo for your transfer to the airport. Your thrilling adventure concludes as you check in, carrying the adrenaline and spirit of the island with you.',
			},
		],
		duration: '9 Days',
	},
	{
		id: 5,
		title: 'WELLNESS ESCAPE',
		category: 'Culture',
		video: '/assets/wellness.webm',
		poster: '/assets/thumbnail-4.webp',
		description:
			'A sanctuary for the senses. Reconnect through the wisdom of Ayurveda and coastal stillness in a journey designed to align body, mind, and soul.',
		overview:
			'Restore your inner harmony through a carefully curated journey of yoga, Ayurveda, and mindful living. Surrounded by tranquil hills and serene coastlines, experience traditional healing therapies guided by expert practitioners. This retreat is designed to rejuvenate your body, calm your mind, and reconnect you with nature.',
		itinerary: [
			{
				day: 'Day 1',
				title: 'Arrival - Negombo',
				description:
					'The moment you land, your journey toward inner peace begins. Your Ceilao Travel representative whisks you away to a quiet coastal sanctuary. You feel the soft sand between your toes as the sun begins to dip below the horizon.\n\nYou join your first Sunset Meditation session on the beach; you focus on the sound of the rhythmic waves, allowing the travel stress to melt away into the ocean breeze.',
			},
			{
				day: 'Day 2',
				title: 'Negombo - Kandy',
				description:
					'You travel toward the lush, green highlands of Kandy, the air becoming cooler and crisper with every mile. You check into your Wellness Retreat, a sanctuary designed to harmonize with nature.\n\nIn the late afternoon, you step onto a wooden yoga pavilion. As you move through your "Asanas," you look out over a canopy of trees and hidden valleys, ending the day with a warm herbal tea ritual that grounds your spirit.',
			},
			{
				day: 'Day 3',
				title: 'Kandy',
				description:
					'You wake up to the sound of tropical birds and the sight of mist rolling over the mountains. Today is dedicated to total rejuvenation.\n\nYou meet with an Ayurvedic Doctor who pulses your wrist to understand your "Dosha." You then surrender to a series of personalized treatments—warm oils, herbal pastes, and steam baths. In the evening, a Buddhist Monk leads you through a mindfulness session, teaching you the art of being present in the "Now."',
			},
			{
				day: 'Day 4',
				title: 'Kandy - Southern Coast',
				description:
					'You leave the mountains and head toward the healing salt air of the South. Your new home is a Coastal Wellness Resort nestled among coconut palms. After a light, organic lunch, you experience the profound relaxation of Shirodhara.\n\nYou feel the steady, warm stream of herbal oil flowing onto your forehead, stilled by a deep sense of tranquility as your nervous system completely resets.',
			},
			{
				day: 'Day 5',
				title: 'Southern Coast',
				description:
					'Sunrise finds you on the beach, moving through a Vinyasa Flow as the first light hits the water. Your day is filled with "Living Wellness." You join the resort chef for a Healing Food Workshop, learning how to use turmeric and gotu-kola to nourish your body.\n\nThe afternoon is spent in a Herbal Steam Room, where the scent of lemongrass and sandalwood opens your senses and cleanses your skin.',
			},
			{
				day: 'Day 6',
				title: 'Southern Coast - Galle - Southern Coast',
				description:
					'Today is a "Mindful Excursion." You visit the Galle Dutch Fort, but instead of a rushed tour, you engage in a Senses Walk. You focus on the vibrant colors of the colonial doors, the smell of cinnamon in the air, and the feeling of the sea spray on your skin.\n\nYou return to your resort for a final evening of "Trataka" (candle-gazing meditation) under a blanket of stars.',
			},
			{
				day: 'Day 7',
				title: 'Southern Coast - Colombo',
				description:
					'You begin your final full day with a gentle "Metta" (loving-kindness) meditation. You then travel to Colombo for a refined city experience. You visit the tranquil Seema Malaka temple on the lake, designed by Geoffrey Bawa, and enjoy a farewell dinner of Ayurvedic-inspired cuisine, celebrating the vibrant spices of the island in their healthiest, most delicious form.',
			},
			{
				day: 'Day 8',
				title: 'Colombo - Airport - Departure',
				description:
					'You wake up feeling lighter, clearer, and deeply rested. After a final nourishing meal, you are transferred to the airport.\n\nYou depart Sri Lanka not just with photographs, but with a renewed sense of balance and a toolkit of mindfulness to take back into your daily life.',
			},
		],
		duration: '8 Days',
	},
];

export function getTourById(id: string | number): Tour | undefined {
	return experiences.find((item) => item.id.toString() === id.toString());
}
