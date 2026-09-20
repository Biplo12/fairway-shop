/**
 * The fitting studio, written the way it is quoted at the counter: a session
 * is a length of time, a price and a question somebody walked in with.
 *
 * Prices are strings rather than pence because nothing here goes in a bag.
 * A session is booked, confirmed on the phone and paid for in the shop, so the
 * number is copy, not a line item.
 */

export type Session = {
  slug: string;
  name: string;
  duration: string;
  price: string;
  /** the question the customer came in with, in their words */
  question: string;
  body: string;
  /** what the session actually measures */
  covers: string[];
  image?: string;
  alt?: string;
};

export const sessions: Session[] = [
  {
    slug: "club-fitting",
    name: "Club fitting",
    duration: "90 min",
    price: "£75",
    question: "Which head, which shaft, and is it the one already in my bag?",
    body: "Driver through wedge on the monitor. Shaft first, head second, because the shaft decides more of it than anybody expects. We stop when two clubs are left and you choose between them by feel.",
    covers: [
      "Shaft weight, flex and profile",
      "Head and loft",
      "Lie angle off the board",
      "Dispersion, not only distance",
    ],
    image: "/images/fitting/driver-and-iron.jpg",
    alt: "A driver head and an iron standing together on the practice ground",
  },
  {
    slug: "ball-fitting",
    name: "Ball fitting",
    duration: "45 min",
    price: "£40",
    question: "Am I playing the right ball, or the one on offer?",
    body: "Three models, wedge first, then mid iron, then driver. Most players pick a ball for the tee shot and pay for it from sixty yards, which is where the round is actually decided.",
    covers: [
      "Spin off a full wedge",
      "Flight held into wind",
      "Feel off the putter face",
    ],
    image: "/images/fitting/practice-balls.jpg",
    alt: "A stack of practice balls waiting on the grass",
  },
  {
    slug: "putter-fitting",
    name: "Putter fitting",
    duration: "45 min",
    price: "£45",
    question: "Why does a straight putt start left?",
    body: "Same mat, same distance, every time. We measure where the ball starts rather than where it finishes, because the finish belongs to the green and the start belongs to the putter.",
    covers: [
      "Length and lie",
      "Head shape against your stroke",
      "Grip size and counterweight",
    ],
    image: "/images/fitting/blade-on-the-mat.jpg",
    alt: "A blade putter set behind a ball on the studio mat",
  },
  {
    slug: "wedge-gapping",
    name: "Wedge and gapping",
    duration: "60 min",
    price: "£55",
    question: "What do I hit from ninety yards?",
    body: "The shots inside a hundred yards you cannot hit today, and the two clubs that would give them back. Bounce and grind come off your turf and your attack angle, not off a chart on the wall.",
    covers: [
      "Carry gaps through the set",
      "Bounce against the turf you play",
      "Grind and sole for your attack angle",
    ],
    image: "/images/fitting/wedge-on-the-mat.jpg",
    alt: "A wedge set behind a ball on the studio mat",
  },
];

/** The long session, sold without a photograph because it is all of the above. */
export const fullBag = {
  slug: "full-bag",
  name: "Full bag",
  duration: "3 hours",
  price: "£180",
  body: "Fourteen clubs in one session, gapped so no two do the same job. Usually the last fitting somebody books and the one they should have booked first.",
};

export const feeNote =
  "The session fee comes off anything you buy on the day. It stands if you buy nothing.";

export type Step = { index: string; name: string; body: string };

export const steps: Step[] = [
  {
    index: "01",
    name: "You talk first",
    body: "Ten minutes on what you play, where you play it and which shot has gone missing. No clubs in hand yet.",
  },
  {
    index: "02",
    name: "Your own club, on the monitor",
    body: "You hit what is in your bag before you hit anything of ours, so every number after it has something to be measured against.",
  },
  {
    index: "03",
    name: "Down to two",
    body: "The wall narrows quickly, then the rest of the hour goes on the shortlist. A fitting that ends with six options has not ended.",
  },
  {
    index: "04",
    name: "Written down, ordered or not",
    body: "Your specs go on paper whether you buy or not. Nothing is ordered in the room. Go home and think about it.",
  },
];

/** value|label, the way SplitFeature reads a spec */
export const studioMeta = [
  "Launch monitor|every session",
  "120|shafts on the wall",
  "7 days|sessions run",
];

export const bring = [
  "The clubs you play now, all of them",
  "The ball you played last Sunday",
  "Your glove, worn in",
  "Shoes you can swing in",
];

export const hours = [
  { days: "Monday to Friday", time: "9.00 to 18.00" },
  { days: "Saturday", time: "8.00 to 17.00" },
  { days: "Sunday", time: "10.00 to 16.00" },
];

export const times = [
  "Morning",
  "Afternoon",
  "Evening, after 17.00",
  "Weekend",
];

export type Question = { question: string; answer: string };

export const questions: Question[] = [
  {
    question: "Do I need to bring my own clubs?",
    answer:
      "Bring them. Half of a fitting is measuring what you already own, and a set that was right four years ago is often right still. We have sent people home with their own irons more than once.",
  },
  {
    question: "I have never been fit. Am I good enough?",
    answer:
      "Length and lie matter more for a player who is still learning than for one who is not. A beginner compensating for a club that does not fit spends two seasons unlearning it.",
  },
  {
    question: "How long until the clubs arrive?",
    answer:
      "Two to four weeks for a custom build, longer through spring. Anything on the rack in stock specs goes out the same week.",
  },
  {
    question: "Can I book a fitting as a gift?",
    answer:
      "You can buy the session. You cannot sit through it for somebody else, and we will not fit a player from a description, so the person swinging has to be in the bay.",
  },
  {
    question: "What if I buy nothing?",
    answer:
      "You leave with your numbers written down and the session has done its job. Plenty of fittings end with a shaft change to a club somebody already owns.",
  },
  {
    question: "Is it all indoors?",
    answer:
      "The bay is indoors and the monitor lives there. Wedge work and putting move out to the practice ground behind the shop when the weather allows, because turf tells the truth about bounce.",
  },
];
