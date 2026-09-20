/**
 * A page for every brand on the rack, written the way a fitter would answer
 * "why do you keep them?" rather than the way the maker would answer it.
 *
 * Everything factual here is public knowledge about the maker. FAIRWAY chose
 * these lines, it did not build them, and nothing on these pages implies a
 * partnership: `since` is the year the shop started stocking them, which is
 * the shop's own history, not theirs.
 */

export type BrandPage = {
  slug: string;
  /** one line, the reason the brand is on the rack */
  statement: string;
  founded: string;
  home: string;
  /** the year FAIRWAY put them on the rack */
  since: string;
  image: string;
  alt: string;
  /** the shop's view, two paragraphs */
  body: string[];
  /** the lines we actually keep or order */
  stocked: string[];
  /** what a fitter says across the counter about them */
  counter: string;
};

export const brandPages: Record<string, BrandPage> = {
  titleist: {
    slug: "titleist",
    statement: "The ball first. Everything else follows it.",
    founded: "1932",
    home: "Fairhaven, Massachusetts",
    since: "1987",
    image: "/images/brands/titleist-ball-in-the-rough.jpg",
    alt: "A Titleist ball sitting up in long grass",
    body: [
      "Titleist sells more golf balls than anybody and the reason is dull: they are the most consistent thing in the bag. Three Pro V1s out of three different boxes behave the same way, which over a season is worth more than any single yard somebody promises you.",
      "We keep the Pro V1 and the Pro V1x open on the counter because the difference between them, flight and spin off a long iron, is the one most players can actually feel. Everything else on the Titleist shelf exists because plenty of golfers have been sold a ball too firm for their speed.",
    ],
    stocked: [
      "Pro V1 and Pro V1x, by the dozen",
      "AVX and Tour Soft for slower speeds",
      "T series irons, built to order",
      "Metals fitted here, ordered in",
    ],
    counter:
      "Vokey wedges and Scotty Cameron putters are Titleist as well. They get their own pages, because nobody chooses a wedge grind the way they choose a dozen balls.",
  },

  taylormade: {
    slug: "taylormade",
    statement: "Metal woods were their idea. They have not stopped since.",
    founded: "1979",
    home: "Carlsbad, California",
    since: "1989",
    image: "/images/brands/taylormade.jpg",
    alt: "A row of TaylorMade iron heads in close up",
    body: [
      "TaylorMade started in 1979 with one product, a driver made of steel rather than persimmon, and the rest of the industry spent a decade catching up. That habit of shipping first and refining in public is still how they work, which means the range moves faster than most.",
      "For us the interesting part is the hosel. Almost everything they build adjusts, so a fitting here tends to end with a setting written down rather than a second club ordered. The P790 is the one we sell most: hollow bodied, forged face, and it looks like a players iron from address, which is half of why people buy it.",
    ],
    stocked: [
      "P790 irons, the shop's default",
      "P7 series, built to order",
      "Qi family drivers and fairways",
      "Spider putters, fitted on the mat",
    ],
    counter:
      "Adjustable does not mean fitted. Every one of these leaves the shop with the setting on paper, so you can put it back if somebody moves it.",
  },

  callaway: {
    slug: "callaway",
    statement: "The widest rack in the shop, and the one that needs a fitter most.",
    founded: "1982",
    home: "Carlsbad, California",
    since: "1992",
    image: "/images/brands/callaway.jpg",
    alt: "An orange Callaway ball on a tee in cut grass",
    body: [
      "Big Bertha arrived in 1991 and made every driver head that came after it bigger. Callaway has been the broadest range in golf ever since, which is why more of our shelf carries their name than anybody else's.",
      "Breadth is the whole point and also the trap. Four of their drivers will fit you well enough to buy. One of them fits you properly, and the gap between those two is about twelve yards of dispersion, not distance. That is a morning on the monitor, not an afternoon reading the website.",
    ],
    stocked: [
      "Elyte drivers, fairways and hybrids",
      "Apex and Paradym irons",
      "Chrome Soft and Chrome Tour balls",
      "Bags, gloves and headwear",
    ],
    counter:
      "Odyssey putters are Callaway too. If you are here for a putter, start on that page instead.",
  },

  ping: {
    slug: "ping",
    statement: "Engineering first, and a fitting chart older than most of our customers.",
    founded: "1959",
    home: "Phoenix, Arizona",
    since: "1987",
    image: "/images/brands/ping-putter-on-the-green.jpg",
    alt: "A hand setting a ball down beside a Ping putter on the green",
    body: [
      "Karsten Solheim built putters in his garage and named the first Anser after the sound the head made. Sixty years on, Ping still behaves like an engineering company that happens to sell golf clubs, and their colour code chart for lie angle has been the plainest piece of fitting in the trade since the seventies.",
      "That chart is why we like them at the counter. A Ping iron has a right answer for your hands and your posture, it gets written on a card, and the club that arrives matches it. The Hoofer is the other half of the story: the carry bag most of our walking customers end up with.",
    ],
    stocked: [
      "i230 and Blueprint irons",
      "G440 drivers, fairways and hybrids",
      "Hoofer and Hoofer Lite bags",
      "Anser and Ketsch putters",
    ],
    counter:
      "Nobody writes a spec down more precisely than Ping, which is exactly why a Ping iron built to the wrong one is such a waste of money.",
  },

  mizuno: {
    slug: "mizuno",
    statement: "Forged feel, and the only irons people describe with their hands.",
    founded: "1906",
    home: "Osaka, Japan",
    since: "1990",
    image: "/images/brands/mizuno-irons-on-grass.jpg",
    alt: "A set of irons laid out on cut grass beside three balls",
    body: [
      "Mizuno has been making sports equipment since 1906 and forging irons in Hiroshima for most of the modern era. One billet, grain flowed through the head, and a feel at impact that customers try to describe and mostly end up miming across the counter.",
      "Their own shaft fitting is unusually good, which suits the way we work: swing a weighted club, read the numbers, then choose the head. Buy the JPX if you want help, the Pro line if you want the ball to go where you aimed it and nowhere else.",
    ],
    stocked: [
      "Pro series irons, forged in Hiroshima",
      "JPX for a wider miss",
      "Wedges cut to the same feel",
      "Fitted here, ordered in",
    ],
    counter:
      "If you cannot feel the difference between a forged and a cast iron, buy the cast one and put the change into a fitting. If you can, you already know why this rack exists.",
  },

  srixon: {
    slug: "srixon",
    statement: "Tour equipment without the tour marketing budget.",
    founded: "1930",
    home: "Kobe, Japan",
    since: "2004",
    image: "/images/brands/srixon.jpg",
    alt: "Srixon iron heads and balls lying on cut grass",
    body: [
      "Srixon is made by Sumitomo Rubber in Japan, which also owns Cleveland, and that pairing is why an iron fitting here so often finishes on a Cleveland wedge. Same hands, same numbers, no argument between the two ends of the bag.",
      "The Z-Star is the ball nobody talks about and plenty of our customers change to after a fitting. The ZX irons are forged, quietly excellent, and cost less than the names on television, which tells you where their money goes.",
    ],
    stocked: [
      "ZX and ZXi forged irons",
      "Z-Star and Z-Star XV balls",
      "Drivers and fairways",
      "Gloves and accessories",
    ],
    counter:
      "The brand most of our staff quietly play. Make of that what you like.",
  },

  vokey: {
    slug: "vokey",
    statement: "One head, six grinds. Most players are carrying the wrong one.",
    founded: "1996",
    home: "Fairhaven, Massachusetts",
    since: "1997",
    image: "/images/brands/vokey-ball-in-sand.jpg",
    alt: "A ball sitting in the sand of a bunker",
    body: [
      "Bob Vokey has been shaping Titleist wedges since the mid nineties, and the SM line is the closest thing golf has to a standard. The lofts are the easy part. The grind, the shape of the sole, is the part nobody buys correctly off a website.",
      "It comes down to two questions we ask at the counter: what does your turf do in winter, and how deep is your divot. Answer those honestly and the six grinds become two. Then we put both on the mat and you hit twenty shots off a tight lie.",
    ],
    stocked: [
      "SM wedges, 46 to 62 degrees",
      "Six grinds, fitted on turf",
      "Custom stamping to order",
      "Shaft matched to your irons",
    ],
    counter:
      "We will not sell a 60 degree to somebody who has not told us where they play. Half the sand shots in Scotland are played off hard ground, not soft.",
  },

  "scotty-cameron": {
    slug: "scotty-cameron",
    statement: "Milled putters, and a waiting list to match.",
    founded: "1994",
    home: "Camarillo, California",
    since: "1998",
    image: "/images/brands/scotty-cameron.jpg",
    alt: "A hand placing a ball on the green beside a putter",
    body: [
      "Scotty Cameron has made Titleist putters since 1994, milled rather than cast, in shapes that have barely changed because they did not need to. The Newport is the blade most tour bags have carried at some point, and the customer who wants one usually knows that before they walk in.",
      "Our job with these is mostly to slow the purchase down. Length, lie and head weight decide whether a putter starts the ball on line, and the most expensive putter in the shop set two inches too long is an elegant way to pull a four footer.",
    ],
    stocked: [
      "Newport blades",
      "Phantom mallets",
      "Fitted for length, lie and loft",
      "Ordered in, four to six weeks",
    ],
    counter:
      "Buy it because it starts the ball on your line, not because of the stamp on the sole. If the stamp matters to you as well, that is allowed.",
  },

  odyssey: {
    slug: "odyssey",
    statement: "The face insert everybody else ended up copying.",
    founded: "1991",
    home: "Carlsbad, California",
    since: "2001",
    image: "/images/brands/odyssey.jpg",
    alt: "A putter and a ball beside the hole on a green",
    body: [
      "White Hot arrived at the end of the nineties and changed what a putter was allowed to sound like. Two Ball came after it and gave a generation of golfers a way to aim. Both are still in the range, still selling, and still the first two putters we hand to somebody who misses left.",
      "Odyssey belongs to Callaway, so the same fitting applies: length and lie first, then head shape against the shape of your stroke. An arced stroke wants a blade with toe hang. A straight one does not. Most people guess the wrong way round.",
    ],
    stocked: [
      "White Hot and Ai One faces",
      "Two Ball and #7 shapes",
      "Blades with matched toe hang",
      "Counterweighted grips",
    ],
    counter:
      "Putter fitting is forty five pounds and settles the Odyssey against the Scotty in twenty minutes on the same mat.",
  },

  footjoy: {
    slug: "footjoy",
    statement: "The two things you wear for four hours.",
    founded: "1857",
    home: "Fairhaven, Massachusetts",
    since: "1987",
    image: "/images/brands/footjoy-glove-and-ball.jpg",
    alt: "A gloved hand holding a golf ball",
    body: [
      "FootJoy shares a parent with Titleist and has been making golf shoes for longer than most clubs have existed. Shoes in real widths, gloves in sizes that mean something, and cabretta leather that wears out because that is what cabretta does.",
      "Nothing here needs a launch monitor, which makes it the easiest counter conversation in the shop and the one most often got wrong at home. A glove bought a size large will be loose by the fourth hole, and a shoe bought narrow will be remembered on the eighteenth.",
    ],
    stocked: [
      "StaSof and Pure Touch gloves",
      "Premiere and DryJoys shoes",
      "Widths from narrow to extra wide",
      "Rain gloves that work wet",
    ],
    counter:
      "Buy the glove that feels a shade tight on the first tee. By the fourth it is the right size, and it will stay that way for a month.",
  },

  cleveland: {
    slug: "cleveland",
    statement: "Wedges for people who practise, priced so you can wear them out.",
    founded: "1979",
    home: "Huntington Beach, California",
    since: "1996",
    image: "/images/brands/cleveland-out-of-the-sand.jpg",
    alt: "A golfer taking sand out of a bunker",
    body: [
      "The RTX is the wedge we sell to golfers who hit two hundred wedge shots a week, because at this price they can replace one when the grooves have gone rather than nursing it through another winter. Four grinds, and the same conversation about turf as any other wedge fitting.",
      "Cleveland sits under the same roof as Srixon, so the wedge and the irons can be built to match without anybody arguing about shafts. Their Huntington Beach putters are the other quiet bargain on the rack.",
    ],
    stocked: [
      "RTX wedges, four grinds",
      "Huntington Beach Soft putters",
      "Launcher irons and metals",
      "Matched to your iron shafts",
    ],
    counter:
      "Grooves wear out. That is not a fault, it is the wedge doing its job. Come back when a full shot starts running out.",
  },

  "sun-mountain": {
    slug: "sun-mountain",
    statement: "The stand bag, and the reason you can still walk eighteen.",
    founded: "1981",
    home: "Missoula, Montana",
    since: "1994",
    image: "/images/brands/sun-mountain.jpg",
    alt: "A golfer carrying a stand bag across a footbridge on the course",
    body: [
      "Sun Mountain is credited with the first stand bag, and the whole company still reads like it was built by people who walk. Straps that sit right, legs that hold on a slope, and rain gear made for weather rather than for a catalogue.",
      "We weigh every carry bag on the same scale before it goes on the rack, because the number on the label and the number on the shoulder are rarely the same. Two kilos is roughly the line between a bag you carry in August and a bag that ends up on a trolley.",
    ],
    stocked: [
      "Stand bags, weighed in the shop",
      "Cart bags with full length dividers",
      "Waterproofs built for links weather",
      "Trolleys and covers",
    ],
    counter:
      "If you are buying a bag to carry, bring the clubs. A bag that balances empty can hang badly with fourteen in it.",
  },
};
