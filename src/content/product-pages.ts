/**
 * What the shop has to say about a product, kept apart from the catalogue so
 * products.ts stays a list of things with prices.
 *
 * Every line here is FAIRWAY's, not the manufacturer's. The shop did not build
 * any of this, it chose it, so nothing below claims a technology or quotes a
 * tour player. Specifications describe what we sell and how we sell it.
 */
export type ProductPage = {
  /** the line under the title */
  tagline: string;
  /** the paragraph beside the packshot */
  description: string;
  /** the headline on the photographic band */
  headline: string;
  /** three short marks under that headline */
  marks: [string, string, string];
  /** what a customer should know before buying, in the fitter's order */
  notes: [string, string, string, string];
  /** the line a fitter would actually say at the counter */
  counter: string;
  specs: { label: string; value: string }[];
  suits: string;
  /** extra views, primary first. Only rendered when there is more than one */
  gallery?: string[];
};

export const productPages: Record<string, ProductPage> = {
  "taylormade-p790-irons": {
    tagline: "Forged face, hollow body",
    description:
      "A distance iron that looks like a blade the moment you set it down. We keep it on the rack beside the i230 and the JPX925 Forged, because most players guess wrong between the three until they hit all of them.",
    headline: "Distance you can still aim",
    marks: ["Hollow body", "Forged face", "Blade profile at address"],
    notes: [
      "Seven clubs, 4 iron to pitching wedge, is the set that leaves the shop most often.",
      "Lofts run stronger than a traditional set, so the gap to your wedges is the thing to check.",
      "Steel or graphite. On this head the shaft changes more than the head does.",
      "Lie angle is set on the bench before it goes in the bag, at no extra cost.",
    ],
    counter:
      "Three shafts in the same head. The difference is eleven yards of dispersion, and nobody believes it until they see the screen.",
    specs: [
      { label: "Set", value: "7 clubs, 4 to PW" },
      { label: "Shaft", value: "Steel or graphite" },
      { label: "Lie", value: "Set on the bench" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits:
      "Mid handicap and better. Players who want the extra club of carry without a shovel behind the ball.",
  },

  "titleist-pro-v1": {
    tagline: "The ball most of the field plays",
    description:
      "There is a reason it is the default, and the reason is not marketing. It is the ball other balls get compared to, which makes it the right place to start a ball fitting rather than the right place to end one.",
    headline: "The ball everything else is measured against",
    marks: ["Urethane cover", "Tour spin", "Sold by the dozen"],
    notes: [
      "A dozen is the unit. Buy one, play it for two rounds, then decide.",
      "If you spin your wedges off the front of the green, the XV or the Z-STAR XV is the conversation.",
      "Ball fitting is forty pounds and it will save you more than that in a season.",
      "We do not run discount codes on it. Nobody does, and anyone who says otherwise is selling last season.",
    ],
    counter:
      "A ball that suits your flight is worth more than a new driver. It is also a hundred times cheaper.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Cover", value: "Urethane" },
      { label: "Play", value: "Two rounds before you judge it" },
      { label: "Fitting", value: "Forty pounds, forty five minutes" },
    ],
    suits:
      "Anyone with a repeatable strike. If you lose more than three a round, play something cheaper until you do not.",
  },

  "ping-hoofer-lite": {
    tagline: "Two kilos on the shoulder",
    description:
      "The bag we weigh every other carry bag against. Light enough that you stop noticing it around the tenth, built well enough that you are not back in here next spring.",
    headline: "Carry less. Play more.",
    marks: ["2.0 kg", "Double strap", "Four way top"],
    notes: [
      "Two kilos empty. Add fourteen clubs, a dozen balls and a jacket and you are carrying about eight.",
      "The strap system is the part that matters. Try it loaded, not empty.",
      "Four way top. A five way divider sounds better and tangles the same.",
      "We weigh every carry bag on the shop scale, so the numbers are comparable.",
    ],
    counter:
      "Everyone asks about the pockets. Nobody asks about the strap, and the strap is the reason you finish the round.",
    specs: [
      { label: "Weight", value: "2.0 kg empty" },
      { label: "Top", value: "Four way" },
      { label: "Strap", value: "Double, adjustable" },
      { label: "Legs", value: "Stand" },
    ],
    suits:
      "Walkers. If you ride every round, a cart bag holds more and weighs whatever you like.",
  },

  "cleveland-rtx-6-zipcore": {
    tagline: "Four grinds off one head",
    description:
      "A wedge is the one club where the sole matters more than the face, and this is the head we reach for when someone brings in a bag of wedges that all do the same job.",
    headline: "The sole does the work",
    marks: ["Four grinds", "46 to 60 degrees", "Tour satin"],
    notes: [
      "Four grinds off one head. Most players are on the wrong one and have never been asked.",
      "Bounce is chosen by your turf and your angle of attack, not by your handicap.",
      "Gap it to your set wedge first. The number on the sole means nothing on its own.",
      "Back in on Friday in the lofts we hold. Anything else we order in.",
    ],
    counter:
      "Bring the wedges you already own. Half the time the fix is which one leaves the bag, not which one joins it.",
    specs: [
      { label: "Loft", value: "46 to 60 degrees" },
      { label: "Grinds", value: "Four" },
      { label: "Finish", value: "Tour satin" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits:
      "Anyone who has never been asked about bounce. That is most people, including good players.",
    gallery: [
      "/images/products/cleveland-rtx6-zipcore.jpg",
      "/images/products/cleveland-rtx6-zipcore-2.jpg",
    ],
  },

  "callaway-elyte-max-fast": {
    tagline: "Light through the whole club",
    description:
      "Built for players who have stopped trying to swing hard, which is most of us after forty. Lighter head, lighter shaft, lighter grip, and the speed comes back without any extra effort.",
    headline: "Speed you do not have to force",
    marks: ["Lightweight build", "Draw bias", "10.5 and 12 degrees"],
    notes: [
      "Two lofts on the rack, 10.5 and 12. Most players who come in for this one leave with the 12.",
      "The whole club is light, not just the head. That is the point, and it changes the shaft you need.",
      "Draw bias is real on this head. If you fight a hook, look at the Triple Diamond instead.",
      "A driver is the club most worth fitting and the one most often bought off a shelf.",
    ],
    counter:
      "Swing speed is not something you decide. It is something we measure, and then we pick a club that suits it.",
    specs: [
      { label: "Loft", value: "10.5 and 12 degrees" },
      { label: "Build", value: "Lightweight throughout" },
      { label: "Bias", value: "Draw" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits:
      "Moderate swing speeds, and anyone whose driver has felt heavy for a couple of seasons.",
    gallery: [
      "/images/products/callaway-elyte-max-fast.jpg",
      "/images/products/callaway-elyte-max-fast-2.jpg",
    ],
  },

  "ping-g440-max-fairway": {
    tagline: "The club most bags are missing",
    description:
      "Nobody comes in asking for a fairway wood, and almost everybody should. It is the club that covers the gap between a driver you cannot always hit and a long iron you cannot hit at all.",
    headline: "The gap nobody fills",
    marks: ["3, 4, 5 and 7 wood", "Off the deck", "Forgiving face"],
    notes: [
      "Four lofts. The 7 wood is the one that surprises people, and it stays in the bag.",
      "Test it off the turf, not off a tee. That is where it has to work.",
      "If you carry a 3 iron you never hit, this is the club that replaces it.",
      "Shaft length matters more here than in any other wood. Get it measured.",
    ],
    counter:
      "Everyone wants to talk about the driver. The fairway wood is the club that saves the hole after the driver goes wrong.",
    specs: [
      { label: "Lofts", value: "3, 4, 5 and 7 wood" },
      { label: "Use", value: "Off the deck and the tee" },
      { label: "Shaft", value: "Length set to you" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits:
      "Anyone with a gap between the driver and the longest iron they trust, which is most bags we see.",
    gallery: [
      "/images/products/ping-g440-max-fairway.jpg",
      "/images/products/ping-g440-max-fairway-2.jpg",
    ],
  },

  "srixon-zxi-hybrid": {
    tagline: "For the long iron you never hit",
    description:
      "A hybrid is not a compromise, it is the right tool. The long iron it replaces was designed for a swing speed most amateurs have never had, and the scorecard does not ask which club you used.",
    headline: "Replace the club you avoid",
    marks: ["16 to 25 degrees", "Iron length", "Wood forgiveness"],
    notes: [
      "Four lofts, 16 to 25 degrees. Pick it by the yardage gap, not by the number stamped on it.",
      "It sits between your fairway wood and your irons. Bring both when you come in.",
      "If you still carry a 4 iron out of habit, hit them side by side once and settle it.",
      "Hybrids are set up at iron length, so the lie angle matters as much as it does in a set.",
    ],
    counter:
      "Nobody has ever regretted putting a hybrid in the bag. Plenty of people regret the three years they waited.",
    specs: [
      { label: "Lofts", value: "16 to 25 degrees" },
      { label: "Length", value: "Iron length" },
      { label: "Lie", value: "Set on the bench" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits:
      "Anyone carrying a long iron they would rather not hit. Look in your own bag and you will know.",
    gallery: [
      "/images/products/srixon-zxi-hybrid.jpg",
      "/images/products/srixon-zxi-hybrid-2.jpg",
    ],
  },

  "odyssey-dfx-one": {
    tagline: "Counter hang shaft, blade head",
    description:
      "Odd to look at and quick to get used to. The shaft enters behind the face, which changes how the head hangs in your hands and makes it easier to start the ball where you aimed.",
    headline: "Strange to look at, easy to start on line",
    marks: ["Blade head", "Counter hang", "33, 34 and 35 inches"],
    notes: [
      "Three lengths. Putter length is the most commonly wrong measurement in golf.",
      "The shaft entry is the point of it. Give it five minutes before you decide.",
      "Bring your own putter. We compare start line on the same mat, not from memory.",
      "Putter fitting is forty five pounds and takes forty five minutes.",
    ],
    counter:
      "People change putters when they should change length. We measure first, and quite often you leave with the one you came in with.",
    specs: [
      { label: "Head", value: "Blade" },
      { label: "Shaft", value: "Counter hang" },
      { label: "Length", value: "33, 34 and 35 inches" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits:
      "Players who push or pull the first foot of the putt. If your speed is good and your line is not, start here.",
    gallery: [
      "/images/products/odyssey-dfx-one.jpg",
      "/images/products/odyssey-dfx-one-2.jpg",
    ],
  },

  "ping-i230-irons": {
    tagline: "A cavity that reads like a blade",
    description:
      "The quiet one on the rack. It gives away a little distance to the P790 and takes it back in the miss, which is the trade most players should be making and few of them do.",
    headline: "Forgiveness you cannot see",
    marks: ["Cavity back", "Compact top line", "Soft feel"],
    notes: [
      "Seven clubs, 4 iron to pitching wedge, steel as standard.",
      "Traditional lofts. Your gaps will make sense without moving your wedges.",
      "The top line is thin enough that good players stop arguing once they set it down.",
      "Lie angle is set on the bench before it goes in the bag, at no extra cost.",
    ],
    counter:
      "We keep the P790 and the i230 side by side because most players guess wrong between them.",
    specs: [
      { label: "Set", value: "7 clubs, 4 to PW" },
      { label: "Shaft", value: "Steel or graphite" },
      { label: "Lofts", value: "Traditional" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits:
      "Single figures to mid handicap. Players who miss more than they admit and want the miss to still find the green.",
    gallery: [
      "/images/products/ping-i230-irons.jpg",
      "/images/products/ping-i230-irons-2.jpg",
      "/images/products/ping-i230-irons-3.jpg",
      "/images/products/ping-i230-irons-4.jpg",
    ],
  },

  "mizuno-jpx925-forged": {
    tagline: "Grain flow forged",
    description:
      "You feel the strike before you see it. That is not a slogan, it is the reason people who have played forged irons once rarely go back, and the reason we keep a set on the monitor at all times.",
    headline: "You feel it before you see it",
    marks: ["Forged", "Soft feel", "Compact head"],
    notes: [
      "Seven clubs, 4 iron to pitching wedge.",
      "Forged feel is the point. If you cannot feel the difference, buy the cheaper iron and spend it on a fitting.",
      "Mizuno's own shaft optimiser is worth twenty minutes before you choose.",
      "Lie angle is set on the bench before it goes in the bag, at no extra cost.",
    ],
    counter:
      "Hit this and the i230 back to back with your eyes on the ball, not the screen. You will know inside six shots.",
    specs: [
      { label: "Set", value: "7 clubs, 4 to PW" },
      { label: "Build", value: "Grain flow forged" },
      { label: "Shaft", value: "Steel or graphite" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits:
      "Players who strike it centre more often than not, and care what that feels like.",
  },

  "callaway-chrome-soft": {
    tagline: "Softer off the face",
    description:
      "The ball people move to when the Pro V1 feels firm, and stay on for years. Softer at impact, and for a lot of players that changes the putter more than it changes the driver.",
    headline: "Soft is a feel, not a weakness",
    marks: ["Urethane cover", "Softer feel", "Sold by the dozen"],
    notes: [
      "A dozen is the unit. Play it for two rounds before you decide anything.",
      "Feel is personal and it shows up on the green first, not off the tee.",
      "If you are choosing between this and the Pro V1, do it on the putting green with both.",
      "Ball fitting covers three models across wedge, mid iron and driver.",
    ],
    counter:
      "Take a sleeve of each onto the practice green. Twenty putts will tell you more than any chart.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Cover", value: "Urethane" },
      { label: "Feel", value: "Softer than the Pro V1" },
      { label: "Fitting", value: "Forty pounds, forty five minutes" },
    ],
    suits:
      "Players who find the firmer tour balls harsh, especially around the green.",
  },

  "ping-tour-glove": {
    tagline: "Cabretta leather",
    description:
      "It wears out because it fits, not because it is cheap. A glove that lasts all season was too big on the first tee, and a glove that is too big is a grip pressure problem you cannot feel.",
    headline: "It should feel a shade tight",
    marks: ["Cabretta leather", "Sizes S to XL", "Left and right hand"],
    notes: [
      "Buy the size that feels a shade tight when it is new. It gives within a round.",
      "Cabretta is thin on purpose. Thin is why you can feel the grip through it.",
      "Two in the bag beats one. Rotate them and both last longer than one would.",
      "Rain changes everything. Ask about an all weather pair before autumn.",
    ],
    counter:
      "If your glove still fits perfectly after twenty rounds, it never fitted. It was just big.",
    specs: [
      { label: "Leather", value: "Cabretta" },
      { label: "Sizes", value: "S to XL, cadet available" },
      { label: "Hand", value: "Left or right" },
      { label: "Life", value: "15 to 25 rounds, honestly" },
    ],
    suits: "Anyone who plays in dry weather and wants to feel the grip.",
  },

  "ping-tour-vented-delta": {
    tagline: "Laser cut vents",
    description:
      "The cap the staff wear in July, which is the only recommendation a cap needs. Structured enough to hold its shape, vented enough that you forget it is on.",
    headline: "The one the staff wear in July",
    marks: ["Vented crown", "Snapback", "One size"],
    notes: [
      "One size, snapback. It will fit, the question is whether you like the height of the crown.",
      "The vents are the point. A solid crown in August is a decision you regret by the fourth.",
      "Structured front, so it keeps its shape in the bag rather than folding.",
      "Nothing on it carries our name, because we did not make it.",
    ],
    counter:
      "A cap is the cheapest thing in the shop and the one you will wear most. Buy the one you would wear off the course.",
    specs: [
      { label: "Fit", value: "One size, snapback" },
      { label: "Crown", value: "Structured, vented" },
      { label: "Brim", value: "Flat to gently curved" },
      { label: "Care", value: "Cold water, air dry" },
    ],
    suits: "Anyone who plays in summer, which is most people, most of the time.",
    gallery: [
      "/images/products/ping-tour-vented-delta.jpg",
      "/images/products/ping-tour-vented-delta-2.jpg",
    ],
  },

  "srixon-z-star-xv": {
    tagline: "The firmer of the two Z-Stars",
    description:
      "The ball for players who put too much spin on it, which is a real problem and a rarer one than the internet suggests. Firmer, and it holds its line into a breeze.",
    headline: "For the players who spin it too much",
    marks: ["Urethane cover", "Firmer feel", "Sold by the dozen"],
    notes: [
      "A dozen is the unit. Two rounds before you judge it.",
      "If your wedges spin back off the front of the green, this is the conversation.",
      "Firmer than the standard Z-Star. That is the whole difference and it is not small.",
      "Worth testing against the Pro V1x rather than the Pro V1.",
    ],
    counter:
      "Most people asking for a lower spin ball do not need one. The monitor settles it in ten shots.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Cover", value: "Urethane" },
      { label: "Feel", value: "Firmer than the Z-STAR" },
      { label: "Fitting", value: "Forty pounds, forty five minutes" },
    ],
    suits:
      "High speed players and anyone whose wedge shots come back off the green.",
    gallery: [
      "/images/products/srixon-z-star-xv.jpg",
      "/images/products/srixon-z-star-xv-2.jpg",
    ],
  },
};

export function productPage(slug: string) {
  return productPages[slug];
}
