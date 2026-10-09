// Program categories shown in the "Learning Beyond the Classroom" section.
// These groupings are proposed based on the Fall Break Camp flyer and LDTA branding.
// Replace names, descriptions, and images once Candi Jordan confirms the final program lineup.

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  buttonLabel: string;
  anchor: string;
}

export const programs: Program[] = [
  {
    id: "field-trips",
    title: "Educational Travel & Field Trips",
    description:
      "Experiences that allow students to discover new places, explore subjects, and connect classroom learning with the world around them.",
    image:
      "https://images.pexels.com/photos/12719279/pexels-photo-12719279.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=900",
    alt: "Two children using a magnifying glass to explore outdoors during a guided discovery activity",
    buttonLabel: "Explore Experiences",
    anchor: "#gallery",
  },
  {
    id: "break-camps",
    title: "School Break Camps",
    description:
      "Engaging programs designed to make school breaks more meaningful through organized activities, exploration, and opportunities to connect.",
    image:
      "https://images.pexels.com/photos/5859198/pexels-photo-5859198.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=900",
    alt: "Children painting small pumpkins outdoors as part of a seasonal break camp activity",
    buttonLabel: "Discover Camps",
    anchor: "#fall-camp",
  },
  {
    id: "arts-music-culture",
    title: "Arts, Music & Culture",
    description:
      "Opportunities to experience creativity, music, cultural discovery, and artistic expression in a supportive group setting.",
    image:
      "https://images.pexels.com/photos/7869833/pexels-photo-7869833.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=900",
    alt: "A group of young students smiling and holding up their art projects",
    buttonLabel: "Explore Activities",
    anchor: "#gallery",
  },
  {
    id: "enrichment",
    title: "Enrichment & Youth Development",
    description:
      "Experiences that encourage curiosity, confidence, collaboration, and personal growth beyond the traditional classroom.",
    image:
      "https://images.pexels.com/photos/6978764/pexels-photo-6978764.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=900",
    alt: "Four children standing together indoors holding papers from an enrichment activity",
    buttonLabel: "Learn More",
    anchor: "#why-ldta",
  },
];
