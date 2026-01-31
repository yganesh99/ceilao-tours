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
	category?: string;
	image?: string;
	video?: string;
	poster?: string;
	duration?: string;
	itinerary: ItineraryItem[];
}

export const experiences: Tour[] = [
	{
		id: 1,
		title: 'Culture & Heritage',
		category: 'Culture & Heritage',
		video: '/assets/video-1.webm',
		poster: '/assets/thumbnail-1.png',
		description:
			'Stay in colonial-era bungalows amidst rolling hills and misty tea plantations.',
		itinerary: [
			{
				day: 'Day 1-3',
				title: 'Cultural Triangle',
				description:
					'Explore the ancient cities of Anuradhapura and Polonnaruwa, and climb the Sigiriya Rock Fortress.',
			},
			{
				day: 'Day 4-5',
				title: 'Kandy',
				description:
					'Visit the Temple of the Tooth Relic and enjoy a traditional cultural show.',
			},
			{
				day: 'Day 6-7',
				title: 'Galle Fort',
				description:
					'Walk the ramparts of the Dutch Fort and explore the colonial architecture.',
			},
		],
	},
	{
		id: 2,
		title: 'Nature & Wildlife',
		category: 'Wildlife',
		video: '/assets/video-2.webm',
		poster: '/assets/thumbnail-2.png',
		description:
			'Experience the thrill of Yala National Park from the comfort of a luxury tented lodge.',
		itinerary: [
			{
				day: 'Day 1-2',
				title: 'Wilpattu National Park',
				description:
					'Search for leopards and sloth bears in the largest national park in Sri Lanka.',
			},
			{
				day: 'Day 3-5',
				title: 'Yala National Park',
				description:
					'Experience luxury camping and thrilling game drives.',
			},
			{
				day: 'Day 6',
				title: 'Mirissa',
				description:
					'Go whale watching to spot blue whales and dolphins.',
			},
		],
	},
	{
		id: 3,
		title: 'Hill Country & Tea',
		category: 'Culture',
		video: '/assets/video-3.webm',
		poster: '/assets/thumbnail-3.png',
		description:
			'Walk the cobblestone streets of a living UNESCO World Heritage site.',
		itinerary: [
			{
				day: 'Day 1-2',
				title: 'Nuwara Eliya',
				description:
					'Visit tea factories and enjoy the cool climate of Little England.',
			},
			{
				day: 'Day 3-4',
				title: 'Ella',
				description:
					'Hike to Ella Rock and visit the Nine Arch Bridge.',
			},
		],
	},
	{
		id: 4,
		title: 'Experiences',
		category: 'Culture',
		video: '/assets/video-4.webm',
		poster: '/assets/thumbnail-3.png',
		description:
			'Walk the cobblestone streets of a living UNESCO World Heritage site.',
		itinerary: [
			{
				day: 'Day 1',
				title: 'Arrival',
				description: 'Welcome to Sri Lanka.',
			},
		],
	},
	{
		id: 5,
		title: 'Wellness',
		category: 'Culture',
		video: '/assets/video-5.webm',
		poster: '/assets/thumbnail-3.png',
		description:
			'Walk the cobblestone streets of a living UNESCO World Heritage site.',
		itinerary: [
			{
				day: 'Day 1-5',
				title: 'Ayurveda Retreat',
				description:
					'Immerse yourself in traditional healing therapies and yoga sessions.',
			},
		],
	},
];

export const tours: Tour[] = [
	{
		id: 'royal-ceylon-odyssey',
		title: 'The Royal Ceylon Odyssey',
		duration: '14 Days',
		image: 'https://images.unsplash.com/photo-1708174934550-5e95c7bf02d0?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description:
			'A grand tour covering the cultural triangle, hill country, and southern coast.',
		itinerary: [
			{
				day: 'Day 1',
				title: 'Arrival in Colombo',
				description:
					'Meet and greet at the airport, transfer to hotel.',
			},
			{
				day: 'Day 2-4',
				title: 'Cultural Triangle',
				description: 'Visit Sigiriya, Dambulla, and Polonnaruwa.',
			},
			{
				day: 'Day 5-6',
				title: 'Kandy',
				description: 'Temple of the Tooth and Royal Botanical Gardens.',
			},
			{
				day: 'Day 7-9',
				title: 'Hill Country',
				description:
					'Tea plantations, Nuwara Eliya, and Ella train ride.',
			},
			{
				day: 'Day 10-12',
				title: 'Yala & South Coast',
				description: 'Wildlife safari and beach relaxation.',
			},
			{
				day: 'Day 13',
				title: 'Galle',
				description: 'Explore Galle Fort.',
			},
			{
				day: 'Day 14',
				title: 'Departure',
				description: 'Transfer to airport.',
			},
		],
	},
	{
		id: 'wildlife-wilderness',
		title: 'Wildlife & Wilderness',
		duration: '10 Days',
		image: 'https://images.unsplash.com/photo-1558791985-4241e4011215?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description:
			'Encounters with leopards, elephants, and blue whales in their natural habitats.',
		itinerary: [
			{
				day: 'Day 1-2',
				title: 'Wilpattu',
				description: 'Leopard safari.',
			},
			{
				day: 'Day 3-4',
				title: 'Habarana',
				description: 'Elephant gathering at Minneriya.',
			},
			{
				day: 'Day 5-6',
				title: 'Gal Oya',
				description: 'Boat safari to see swimming elephants.',
			},
			{
				day: 'Day 7-9',
				title: 'Yala',
				description: 'Highest density of leopards in the world.',
			},
			{
				day: 'Day 10',
				title: 'Departure',
				description: 'Transfer to airport.',
			},
		],
	},
	{
		id: 'wellness-ayurveda',
		title: 'Wellness & Ayurveda',
		duration: '12 Days',
		image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2940&auto=format&fit=crop',
		description:
			'Rejuvenate your mind and body with ancient healing traditions in luxury retreats.',
		itinerary: [
			{
				day: 'Day 1-12',
				title: 'Wellness Retreat',
				description: 'Personalized treatments, yoga, and meditation.',
			},
		],
	},
	{
		id: 'culinary-trails',
		title: 'Culinary Trails',
		duration: '9 Days',
		image: 'https://images.unsplash.com/photo-1687688207113-34bea1617467?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dp',
		description:
			'Taste the spices of the island, from street food markets to private cooking classes.',
		itinerary: [
			{
				day: 'Day 1-2',
				title: 'Colombo',
				description: 'Street food tour.',
			},
			{
				day: 'Day 3-4',
				title: 'Kandy',
				description: 'Spice gardens and traditional cooking.',
			},
			{
				day: 'Day 5-7',
				title: 'South Coast',
				description: 'Seafood and cinnamon plantations.',
			},
			{
				day: 'Day 8-9',
				title: 'Negombo',
				description: 'Fish market and farewell dinner.',
			},
		],
	},
];

export function getTourById(id: string | number): Tour | undefined {
	return [...experiences, ...tours].find(
		(item) => item.id.toString() === id.toString(),
	);
}
