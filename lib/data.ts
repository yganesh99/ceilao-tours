export interface ItineraryItem {
	day: string;
	title: string;
	description: string;
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
}

export const experiences: Tour[] = [
	{
		id: 1,
		title: 'Culture & Heritage',
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
				title: 'Arrival & Negombo',
				description:
					'Arrive at Bandaranaike International Airport where you will be warmly greeted by Ceilão Travel and Tours representative. Transfer to your hotel in Negombo and unwind after your journey. In the evening, enjoy a relaxed visit around the Negombo lagoon, Dutch canal and the iconic fishing village.',
			},
			{
				day: 'Day 2',
				title: 'Negombo → Sigiriya',
				description:
					'Enjoy breakfast at the hotel before departing towards Sri Lanka’s Cultural Triangle. En route, visit the magnificent Dambulla Cave Temple, a UNESCO World Heritage Site filled with ancient murals and Buddha statues. In the evening, climb the iconic Sigiriya Rock Fortress and witness a breathtaking sunset over the surrounding forests.',
			},
			{
				day: 'Day 3',
				title: 'Sigiriya → Polonnaruwa',
				description:
					'After breakfast, enjoy a peaceful morning with an optional village experience in Hiriwadunna, exploring rural life by cart ride, catamaran and local homes. Later, journey to Polonnaruwa, the medieval kingdom of Sri Lanka, and explore its impressive ruins, including Gal Viharaya and the Royal Palace complex. Spend the evening wandering around the ancient reservoir built by King Parakramabahu.',
			},
			{
				day: 'Day 4',
				title: 'Polonnaruwa → Anuradhapura',
				description:
					'Begin your day with breakfast at the hotel, followed by a scenic drive to Anuradhapura, the first capital of ancient Sri Lanka. Explore sacred landmarks such as the revered Sri Maha Bodhi Tree, the majestic Ruwanweliseya Stupa, and the historic monastic complex of Abhayagiriya. Learn about the island’s rich 2,600-year-old Buddhist heritage as you walk through this UNESCO site.',
			},
			{
				day: 'Day 5',
				title: 'Anuradhapura → Kandy',
				description:
					'After breakfast, proceed to Kandy, the last royal kingdom of Sri Lanka surrounded by lush mountains. En route, stop at a spice garden and batik workshop for an immersive cultural encounter. In Kandy, witness a vibrant cultural dance show before attending the evening ceremony at the sacred Temple of the Tooth Relic.',
			},
			{
				day: 'Day 6',
				title: 'Kandy → Nuwara Eliya (Train Ride)',
				description:
					'Enjoy breakfast and board the scenic train from Kandy to Nanu Oya, one of the most beautiful rail journeys in the world. Visit a tea plantation and factory to learn the art of Ceylon tea-making, followed by a relaxing visit to Gregory Lake and highlights of colonial Nuwara Eliya.',
			},
			{
				day: 'Day 7',
				title: 'Nuwara Eliya → Galle',
				description:
					'After breakfast, descend from the misty hills towards the southern coast. Explore the historic Galle Dutch Fort, a UNESCO-listed fortress blending colonial charm and coastal beauty. Conclude the evening with an immersive storytelling walk through its cobblestone lanes.',
			},
			{
				day: 'Day 8',
				title: 'Galle → Colombo',
				description:
					'Enjoy a leisurely morning by the beach before departing for Colombo. On arrival, embark on a panoramic city tour covering colonial landmarks, modern highlights and shopping districts.',
			},
			{
				day: 'Day 9',
				title: 'Departure',
				description:
					'After breakfast, transfer to Bandaranaike International Airport for your onward journey with unforgettable memories of Sri Lanka.',
			},
		],
		duration: '9 Days',
	},
	{
		id: 2,
		title: 'Nature & Wildlife',
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
				title: 'Arrival & Negombo',
				description:
					'Arrive at Bandaranaike International Airport where your Ceilão Travels representative will warmly welcome you. Transfer to Negombo and relax after your journey, enjoying the coastal atmosphere. If time permits, take an optional boat ride through the biodiverse Muthurajawela marsh, home to birds and mangrove wildlife.',
			},
			{
				day: 'Day 2',
				title: 'Negombo → Wilpattu',
				description:
					'After breakfast, travel north to Wilpattu National Park, the largest and one of the most scenic wildlife reserves in Sri Lanka. In the evening, embark on your first safari adventure in search of leopards, sloth bears, spotted deer and wetland birds. Return to your lodge or glamping site and unwind amidst true wilderness.',
			},
			{
				day: 'Day 3',
				title: 'Wilpattu → Sigiriya',
				description:
					'Begin the morning with another safari, offering the chance to observe wildlife during their most active hours. Afterward, proceed to Sigiriya, arriving at your hotel set against the backdrop of the Cultural Triangle. Spend the evening at leisure or join an optional nature photography workshop.',
			},
			{
				day: 'Day 4',
				title: 'Sigiriya Exploration',
				description:
					'Enjoy breakfast before climbing the majestic Sigiriya Rock Fortress, an ancient royal citadel rising dramatically from the plains. Visit the Mirror Wall, the Water Gardens and the frescoes of the heavenly maidens. In the afternoon, explore rural life on a Hiriwadunna village tour and enjoy relaxed bird-watching around the lakes at dusk.',
			},
			{
				day: 'Day 5',
				title: 'Sigiriya → Knuckles Mountain Range',
				description:
					'After breakfast, drive toward the Knuckles Mountain Range, a UNESCO-listed natural reserve filled with forest trails and cloud-kissed peaks. Begin a light hike to discover waterfalls, hidden viewpoints and endemic flora. End the day at an eco-lodge or campsite surrounded by pristine mountain nature.',
			},
			{
				day: 'Day 6',
				title: 'Knuckles → Kandy',
				description:
					'Start the morning with a refreshing forest trek through the Knuckles foothills. Later, proceed to Kandy, the hill capital, and settle into your hotel. Spend the evening relaxing by the scenic Kandy Lake or exploring the charming city streets.',
			},
			{
				day: 'Day 7',
				title: 'Kandy → Ella (Train Journey)',
				description:
					'Enjoy breakfast before boarding the iconic train journey from Kandy to Ella, renowned as one of the most scenic rail experiences in the world. On arrival, visit the famous Nine Arch Bridge and the picturesque Ravana viewpoints. Settle into your hotel overlooking misty mountains and lush valleys.',
			},
			{
				day: 'Day 8',
				title: 'Ella Adventure Day',
				description:
					'Begin your day with a rewarding hike up Little Adam’s Peak, offering panoramic vistas of surrounding peaks and tea estates. Continue to Ella zipline for an exhilarating adventure over the valleys. Visit a nearby waterfall to cool off and spend the rest of the day at leisure.',
			},
			{
				day: 'Day 9',
				title: 'Ella → Yala → Galle',
				description:
					'Depart early for Yala National Park for an afternoon safari inside Sri Lanka’s most renowned wildlife sanctuary. With luck, spot elephants, crocodiles, and Yala’s famous leopards amidst their natural habitat. After your safari experience, continue to Galle for an evening at leisure.',
			},
			{
				day: 'Day 10',
				title: 'Departure via Colombo',
				description:
					'After breakfast, proceed to Colombo for your onward departure. Your memorable wildlife expedition concludes as you are transferred to Bandaranaike International Airport.',
			},
		],
		duration: '10 Days',
	},
	{
		id: 3,
		title: 'Hill Country & Tea',
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
				title: 'Arrival & Colombo',
				description:
					'Arrive in Colombo and transfer to your hotel to settle in after your journey. In the evening, embark on a vibrant street-food walk through the city, sampling authentic Sri Lankan flavours and local favourites. Enjoy the buzz of night-time Colombo as you taste your first culinary impressions of the island.',
			},
			{
				day: 'Day 2',
				title: 'Colombo → Kandy',
				description:
					'After breakfast, travel to the cultural hill capital of Kandy. Visit the bustling local market with a vendor who will introduce you to fragrant spices, tropical produce and traditional ingredients. Later, enjoy a hands-on cooking class with a village family, learning to prepare an authentic Sri Lankan meal the traditional way.',
			},
			{
				day: 'Day 3',
				title: 'Kandy → Nuwara Eliya',
				description:
					'Depart for the picturesque tea country, winding through lush valleys and mist-covered mountains. Visit a working tea plantation and factory to observe the complete process of Ceylon tea production. Experience tea plucking alongside estate workers and gain insight into the heritage of Sri Lankan tea culture.',
			},
			{
				day: 'Day 4',
				title: 'Nuwara Eliya Exploration',
				description:
					'Begin the day with a tea-tasting masterclass where you will learn to identify flavour notes, aroma profiles and tea grades. Explore the colonial landmarks of Nuwara Eliya, including the Post Office, Racecourse and British-era cottages. Conclude the day with an elegant high-tea experience in true hill-country style.',
			},
			{
				day: 'Day 5',
				title: 'Nuwara Eliya → Ella',
				description:
					'After breakfast, travel to Ella through scenic mountain roads lined with rolling tea gardens. Visit Ravana Falls and stop at picturesque viewpoints offering sweeping panoramas of valleys and escarpments. Spend the evening at leisure in the charming village of Ella.',
			},
			{
				day: 'Day 6',
				title: 'Ella → Galle',
				description:
					'Proceed to the southern coast and arrive at the historic Galle Dutch Fort, a UNESCO World Heritage Site. Take a leisurely walk along its cobblestone streets filled with colonial architecture, art galleries and boutique cafés. If you wish, enjoy an optional cooking demonstration at a nearby spice estate.',
			},
			{
				day: 'Day 7',
				title: 'Galle → Colombo',
				description:
					'Enjoy a relaxed morning on the beach before departing for Colombo. Settle in at your hotel and spend the rest of the day at leisure—perfect for shopping or enjoying Colombo’s vibrant dining scene.',
			},
			{
				day: 'Day 8',
				title: 'Departure',
				description:
					'After breakfast, transfer to Bandaranaike International Airport for your departure, concluding your culinary and tea-country journey.',
			},
		],
		duration: '8 Days',
	},
	{
		id: 4,
		title: 'Experiences',
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
				title: 'Arrival & Colombo',
				description:
					'Arrive at Bandaranaike International Airport where your SLON Travels representative will greet you warmly. Transfer to your hotel in Colombo and settle in after your journey. In the evening, enjoy a guided walking tour or explore Colombo’s lively nightlife for a vibrant welcome to Sri Lanka.',
			},
			{
				day: 'Day 2',
				title: 'Colombo → Kitulgala',
				description:
					'Enjoy breakfast and proceed to Kitulgala, Sri Lanka’s adventure capital nestled amidst lush rainforests. Experience an exhilarating white-water rafting session followed by rock sliding and refreshing dips in natural pools. Later, enjoy a forest trek surrounded by tropical flora and river landscapes.',
			},
			{
				day: 'Day 3',
				title: 'Kitulgala → Knuckles Mountain Range',
				description:
					'After breakfast, travel to the Knuckles Mountain Range, known for its rugged trails and untouched wilderness. Begin a scenic trek through dense forests, mountain slopes and cascading streams. End the day at a campsite and enjoy a night under the stars.',
			},
			{
				day: 'Day 4',
				title: 'Knuckles Trek',
				description:
					'Start early for a full-day trekking adventure through the Knuckles highlands. Discover panoramic viewpoints, crystal-clear water streams and diverse wildlife as you journey through one of Sri Lanka’s richest biodiversity zones. Return to your camp for a peaceful evening amidst nature.',
			},
			{
				day: 'Day 5',
				title: 'Knuckles → Ella',
				description:
					'Enjoy breakfast before departing for the charming mountain village of Ella. Upon arrival, experience an exciting ziplining adventure across lush valleys and dramatic landscapes. Later, visit the iconic Nine Arch Bridge, one of the most photogenic railway structures in Sri Lanka.',
			},
			{
				day: 'Day 6',
				title: 'Ella Adventure Day',
				description:
					'Begin the day with a scenic hike up Little Adam’s Peak, a rewarding trail offering spectacular views. For more adventure, take an optional trek to Ella Rock—a challenging yet fulfilling climb for avid hikers. Spend the rest of the day exploring Ella’s cozy cafés and laid-back countryside charm.',
			},
			{
				day: 'Day 7',
				title: 'Ella → Arugam Bay / Weligama',
				description:
					'Travel to a top surf beach—either Arugam Bay or Weligama. Enjoy a beginner or intermediate surfing lesson led by professional instructors. Relax by the shore and unwind to the rhythm of the waves.',
			},
			{
				day: 'Day 8',
				title: 'Beach Day',
				description:
					'Start the morning with sunrise yoga to stretch and energize your body after adventure-packed days. Spend the rest of the day enjoying water sports such as paddle boarding, snorkeling or simply relaxing by the turquoise waters.',
			},
			{
				day: 'Day 9',
				title: 'Colombo → Departure',
				description:
					'After breakfast, return to Colombo for your transfer to Bandaranaike International Airport. Your thrilling island adventure concludes with unforgettable memories of Sri Lanka’s landscapes and adrenaline-filled experiences.',
			},
		],
		duration: '9 Days',
	},
	{
		id: 5,
		title: 'Wellness',
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
				title: 'Arrival & Negombo',
				description:
					'Arrive at Bandaranaike International Airport where your Ceilão Travels representative will warmly welcome you. Transfer to your beachfront hotel in Negombo and unwind in a calming coastal atmosphere. End the day with a gentle sunset meditation session to begin your wellness retreat.',
			},
			{
				day: 'Day 2',
				title: 'Negombo → Kandy Wellness Retreat',
				description:
					'After breakfast, begin your journey toward the serene hill-country of Kandy. Check in at your wellness retreat—Santani, Kandy Samadhi Centre, or similar—surrounded by lush forests and peaceful mountain air. Enjoy an evening yoga session followed by a soothing herbal tea ritual.',
			},
			{
				day: 'Day 3',
				title: 'Wellness Day in Kandy',
				description:
					'Start your morning with sunrise yoga overlooking the misty hills. Meet your ayurvedic doctor for a personalized consultation and enjoy a rejuvenating spa therapy tailored to your body’s needs. In the evening, visit a nearby herbal garden and conclude your day with a mindfulness meditation guided by a Buddhist monk.',
			},
			{
				day: 'Day 4',
				title: 'Kandy → Coastal Retreat',
				description:
					'Enjoy breakfast before transferring from the hills to the tranquil southern coastline. Arrive at your beachfront wellness resort and savour an organic, wellness-focused lunch prepared with fresh local ingredients. Later, experience an authentic ayurvedic massage—such as Shirodhara—followed by a calming candlelit meditation by the ocean.',
			},
			{
				day: 'Day 5',
				title: 'Coastal Wellness Experience',
				description:
					'Begin the day with energising yoga on the beach as the sun rises over the shoreline. Enjoy herbal steam therapy and take part in a hands-on local wellness cooking demonstration with an expert chef. Spend the remainder of the day relaxing by the sea or enjoying spa facilities at leisure.',
			},
			{
				day: 'Day 6',
				title: 'Galle Exploration',
				description:
					'After breakfast, travel to the historic Galle Dutch Fort for a leisurely exploration. Experience a guided storytelling walk through its cobblestone streets, colonial architecture and charming boutiques. Return to the resort for free time—ideal for a spa session or a refreshing swim.',
			},
			{
				day: 'Day 7',
				title: 'Colombo',
				description:
					'Enjoy a gentle morning meditation session before departing for Colombo. On arrival, take a light city tour covering cultural landmarks, seaside viewpoints and boutique shopping stops.',
			},
			{
				day: 'Day 8',
				title: 'Departure',
				description:
					'After breakfast, proceed to Bandaranaike International Airport for your departure, ending your wellness journey feeling refreshed and rebalanced.',
			},
		],
		duration: '8 Days',
	},
];

export function getTourById(id: string | number): Tour | undefined {
	return experiences.find((item) => item.id.toString() === id.toString());
}
