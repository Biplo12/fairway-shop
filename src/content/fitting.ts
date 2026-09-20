
export type Session = {
  slug: string;
  name: string;
  duration: string;
  price: string;
  question: string;
  body: string;
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
    image: "/images/fitting/irons-in-a-row.jpg",
    alt: "Five iron heads laid out in a row on the turf with practice balls around them",
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

export const fullBag: Session = {
  slug: "full-bag",
  name: "Full bag",
  duration: "3 hours",
  price: "£180",
  question: "Which fourteen clubs, and which two of them are doing one job?",
  covers: [
    "Carry gaps across the set",
    "Driver through putter",
    "Specs written on one sheet",
  ],
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

export type SessionRun = {
  index: string;
  name: string;
  body: string;
};

export type SessionPage = {
  slug: string;
  lead: string;
  body: string[];
  runs: SessionRun[];
  suits: string[];
  notFor: string;
  bring: string[];
  shelf: { href: string; label: string };
  booking: { heading: string; body: string };
  image: string;
  alt: string;
};

export const sessionPages: Record<string, SessionPage> = {
  "club-fitting": {
    slug: "club-fitting",
    lead: "Shaft first, head second, and your own clubs measured before either of them.",
    body: [
      "Ninety minutes, driver through wedge, and the first ten of them with no club in your hands. Where you play, what the miss looks like and which shot has gone missing decide what we put in front of you, so we ask before we hand you anything.",
      "Then you hit what is already in the bag. Everything after that has a number to beat. Shafts come off the wall behind you, heads off the rack in front, and we stop when two clubs are left rather than six.",
    ],
    runs: [
      {
        index: "01",
        name: "Your own club, first",
        body: "Ten shots with what you play now. Carry, spin, launch and dispersion, written down before anything of ours is in your hands.",
      },
      {
        index: "02",
        name: "Shaft, then head",
        body: "Weight and profile before flex, because most players were told a letter and fitted to nothing. Two shafts in one head decide more than two heads ever do.",
      },
      {
        index: "03",
        name: "Lie off the board",
        body: "Tape on the sole, a board under the ball, and the number that stops a straight strike finishing left.",
      },
      {
        index: "04",
        name: "On paper, not on order",
        body: "You leave with the spec whether you buy or not. Nothing is ordered in the room.",
      },
    ],
    suits: [
      "Your irons are four years old or older and you play weekly",
      "The miss moved and you cannot say why",
      "You were fitted once, by somebody who had already chosen the answer",
    ],
    notFor:
      "If you have played six times in your life, book length and lie only. A full fitting measures a swing you have not built yet.",
    bring: [
      "The irons you play now",
      "The driver, even the one you hate",
      "Your glove, worn in",
      "Shoes you can swing in",
    ],
    shelf: { href: "/shop/clubs?type=irons", label: "Irons on the rack" },
    booking: {
      heading: "Take the bay for ninety minutes",
      body:
        "One bay, one fitter, driver through wedge, and your own clubs on the monitor first. Tell us roughly when and somebody will call to put it in the diary.",
    },
    image: "/images/fitting/session-club-fitting.jpg",
    alt: "Three iron heads laid out on black studio cloth",
  },

  "ball-fitting": {
    slug: "ball-fitting",
    lead: "The only thing you use on every shot, chosen from the wedge back rather than from the tee.",
    body: [
      "Forty five minutes and three models. We start at sixty yards, because that is where a ball shows what it does, and finish with the driver, which is where most people start and why most people get it wrong.",
      "Spin off a full wedge, flight into a breeze, feel off the putter face. You leave knowing which sleeve to buy for the season rather than which one happened to be on offer.",
    ],
    runs: [
      {
        index: "01",
        name: "Wedge first",
        body: "Ten shots from sixty yards with each model. What the ball does on the second bounce tells you more than the launch numbers do.",
      },
      {
        index: "02",
        name: "Mid iron, into the wind",
        body: "Flight, peak height, and how much the ball stands up when the wind gets underneath it.",
      },
      {
        index: "03",
        name: "Driver last",
        body: "Only once the short game has voted. If two models are level by then, the drive breaks the tie.",
      },
      {
        index: "04",
        name: "The putter face",
        body: "Feel is the one number we cannot print. You roll all three on the same mat and tell us.",
      },
    ],
    suits: [
      "You play whatever is in the boot that week",
      "You lose more strokes inside a hundred yards than off the tee",
      "Your speed has dropped and the ball has not moved with it",
    ],
    notFor:
      "If you lose six balls a round, play the cheapest thing that flies and come back when you have stopped.",
    bring: [
      "The ball you played last Sunday",
      "Your wedges",
      "Your putter, if you have a favourite",
    ],
    shelf: { href: "/shop/balls", label: "Balls on the rack" },
    booking: {
      heading: "Forty five minutes, three models",
      body:
        "Wedge, mid iron and driver on the same mat in the same session. Tell us when suits and somebody will ring to confirm the slot.",
    },
    image: "/images/fitting/session-ball-fitting.jpg",
    alt: "Nine golf balls set out on black studio cloth",
  },

  "putter-fitting": {
    slug: "putter-fitting",
    lead: "Length, lie and loft, measured by where the ball starts rather than where it finishes.",
    body: [
      "Forty five minutes on the same mat, at the same distance, every time. We are not watching the hole. We are watching the first eighteen inches, because a putt that starts on line and misses is the green's business and a putt that starts left is the putter's.",
      "Most players are an inch or two too long and have built a posture around it. Fix the length and the posture comes back, and the stroke that comes with it decides the head we put in your hands.",
    ],
    runs: [
      {
        index: "01",
        name: "Your stroke, measured",
        body: "Arc or straight, and how much of each. Toe hang is chosen off that, not off a preference.",
      },
      {
        index: "02",
        name: "Length and lie",
        body: "Eyes, hands and feet in the same place every time. Two inches moves all three.",
      },
      {
        index: "03",
        name: "Head and weight",
        body: "Blade against mallet on the same mat, and a counterweight if the hands are doing too much.",
      },
      {
        index: "04",
        name: "Ten from six feet",
        body: "The last ten minutes are a test, not a sale. If the putter you walked in with wins, it wins.",
      },
    ],
    suits: [
      "Straight putts start off line, and always the same side",
      "You have changed putter twice in two seasons",
      "You are standing over it thinking about the stroke",
    ],
    notFor:
      "If you three putt from forty feet, that is pace, and pace is the practice green rather than a new putter.",
    bring: [
      "The putter you play now",
      "The ball you play",
      "Your glove, if you wear one to putt",
    ],
    shelf: { href: "/shop/clubs?type=putters", label: "Putters on the rack" },
    booking: {
      heading: "Forty five minutes on the mat",
      body:
        "Same mat, same distance, one fitter watching the first eighteen inches. Tell us when suits and we will put it in the diary.",
    },
    image: "/images/fitting/session-putter-fitting.jpg",
    alt: "A golfer rolling a putt on the practice green, seen from behind",
  },

  "wedge-gapping": {
    slug: "wedge-gapping",
    lead: "The shots inside a hundred yards you cannot hit today, and the clubs that give them back.",
    body: [
      "An hour, and it starts with a sheet of paper rather than a wedge. Every full shot through the bottom of the set gets carried and written down, because the gap that matters is the one between your pitching wedge and whatever comes after it.",
      "Then bounce. Turf in Fife is not turf in Surrey, and a sole that works off a tight winter lie is the wrong sole in summer rough. We fit it off your divot and your attack angle, not off the chart on the wall.",
    ],
    runs: [
      {
        index: "01",
        name: "Carry, club by club",
        body: "Full shots from the pitching wedge down. Anything over fifteen yards between two clubs is a club missing.",
      },
      {
        index: "02",
        name: "Off your turf",
        body: "Tight lie first, then the rough. Bounce is chosen where you actually play rather than where it flatters the club.",
      },
      {
        index: "03",
        name: "Grind and sole",
        body: "How far you open the face, how deep you dig, and which grind survives both.",
      },
      {
        index: "04",
        name: "Three shots home",
        body: "Sixty yards, forty yards and a bump. You leave able to hit all three with a club you own.",
      },
    ],
    suits: [
      "There is a twenty yard hole somewhere under a hundred",
      "You carry three wedges and trust two",
      "Your bunker shots changed when the course went firm",
    ],
    notFor:
      "Not worth booking on its own if the irons themselves are wrong. Club fitting first, this straight after.",
    bring: [
      "Your wedges, all of them",
      "The pitching wedge out of your set",
      "The ball you play",
    ],
    shelf: { href: "/shop/clubs?type=wedges", label: "Wedges on the rack" },
    booking: {
      heading: "An hour, mat and turf",
      body:
        "An hour on the mat, and out to the practice ground when the weather allows, because bounce tells the truth on grass. Tell us when and we will call.",
    },
    image: "/images/fitting/session-wedge-gapping.jpg",
    alt: "A wedge shot at impact, turf in the air and the ball climbing",
  },

  "full-bag": {
    slug: "full-bag",
    lead: "Fourteen clubs, one session, gapped so no two of them do the same job.",
    body: [
      "Three hours, and the only session where the bag is measured as a set rather than a club at a time. Driver to putter, every carry on one sheet, and the holes in that sheet are rarely where people expect them.",
      "Most bags have two clubs doing one job and forty yards with nothing in them. Closing that is worth more shots than any single head we could sell you, and it often means leaving with less than you planned to buy.",
    ],
    runs: [
      {
        index: "01",
        name: "The whole bag, measured",
        body: "Every club, full shots, carry and dispersion, all of it on one sheet in front of you.",
      },
      {
        index: "02",
        name: "The holes",
        body: "Where two clubs overlap and where nothing lands. This is the part people photograph before they leave.",
      },
      {
        index: "03",
        name: "Two or three changes",
        body: "Rarely more. A driver, a gap filled and a putter cut to length is a typical afternoon.",
      },
      {
        index: "04",
        name: "Built, then checked",
        body: "Anything ordered comes back to the bench and is measured again before you collect it.",
      },
    ],
    suits: [
      "The bag was bought one club at a time over years",
      "You are starting again after a long break",
      "You would rather sit through one session than four",
    ],
    notFor:
      "Three hours is tiring and it is meant to be. If one club is the problem, book the session that covers it and keep the difference.",
    bring: [
      "The whole bag, as you play it",
      "The ball you play",
      "A note of anything you changed this year",
    ],
    shelf: { href: "/shop/clubs", label: "Clubs on the rack" },
    booking: {
      heading: "Take the bay for an afternoon",
      body:
        "Three hours, fourteen clubs, one fitter and nobody waiting behind you. Tell us roughly when and somebody will ring to fix the date.",
    },
    image: "/images/fitting/session-full-bag.jpg",
    alt: "Iron heads stamped seven, six, pitching and eight standing in a bag, in black and white",
  },
};

export const allSessions: Session[] = [...sessions, fullBag];

export function findSession(slug: string) {
  return allSessions.find((session) => session.slug === slug);
}
