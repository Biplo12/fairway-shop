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

  "ping-g440-max-driver": {
    tagline: "The forgiving one",
    description:
      "The driver we hand people who have just told us they hit it everywhere. Off centre still goes forward, and forward and straight beats long and lost every round of your life.",
    headline: "Off centre still finds the short grass",
    marks: ["High forgiveness", "Three lofts", "Adjustable hosel"],
    notes: [
      "Three lofts. More loft is the fix for most slices and nobody wants to hear it.",
      "Adjustable hosel, so we set it here and you never need to touch it again.",
      "The Max is the forgiving head. The LST is for higher speeds and lower spin.",
      "We will show you the dispersion, not just the carry. That is the number costing you shots.",
    ],
    counter:
      "Everyone wants the longest one. The longest one you can buy is the one you hit in play.",
    specs: [
      { label: "Loft", value: "9, 10.5 and 12 degrees" },
      { label: "Hosel", value: "Adjustable, set here" },
      { label: "Head", value: "High forgiveness" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits:
      "Anyone whose driver misses are costing them holes, which is nearly everybody.",
    gallery: [
      "/images/products/ping-g440-max-driver.jpg",
      "/images/products/ping-g440-max-driver-2.jpg",
    ],
  },

  "srixon-zxi-driver": {
    tagline: "Quiet, and a shape you can look at",
    description:
      "Srixon sell fewer drivers than the big two and the players who own one tend to keep it. It is quieter at impact and the crown is the sort good players stop noticing, which is the compliment.",
    headline: "The one that does not shout",
    marks: ["Quiet at impact", "Two lofts", "Neutral shape"],
    notes: [
      "Two lofts, both neutral. There is no draw bias hiding in this head.",
      "Sound is not a gimmick. If a driver annoys you at impact you will not swing it freely.",
      "Test it against the G440 Max back to back. They suit different players and both are here.",
      "Shaft first, head second. That order is the whole of driver fitting.",
    ],
    counter:
      "Half of what people call feel in a driver is sound. Hit two with your eyes shut and you will hear it.",
    specs: [
      { label: "Loft", value: "9.5 and 10.5 degrees" },
      { label: "Shape", value: "Neutral" },
      { label: "Sound", value: "Muted at impact" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits:
      "Players who already find the fairway and want the shape and the sound to stop bothering them.",
    gallery: [
      "/images/products/srixon-zxi-driver.jpg",
      "/images/products/srixon-zxi-driver-2.jpg",
    ],
  },

  "srixon-zxi-fairway": {
    tagline: "Shallow face, sits low",
    description:
      "Most fairway woods are bought to be hit off a tee and then never come out on the deck. This one sits low enough behind the ball that it works from the turf, which is the only reason to carry it.",
    headline: "Easier off the deck than it looks",
    marks: ["Shallow face", "Three lofts", "Low profile"],
    notes: [
      "Three lofts. The 5 wood leaves the shop more often than the 3 and that is not an accident.",
      "Hit it off the turf in the bay. If it only works off a tee it is a second driver.",
      "The 7 wood covers the yardage most players cannot fill with a long iron.",
      "Shaft length here is worth measuring. Standard is long for a lot of people.",
    ],
    counter:
      "If you only ever hit your 3 wood off a tee, you are carrying fourteen clubs and using thirteen.",
    specs: [
      { label: "Lofts", value: "3, 5 and 7 wood" },
      { label: "Face", value: "Shallow" },
      { label: "Use", value: "Off the deck" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits:
      "Players who need a club that works from the fairway, not just from a peg.",
  },

  "ping-g440-hybrid": {
    tagline: "Sits square at address",
    description:
      "Half the trouble people have with hybrids is that the head looks shut, so they aim right to compensate. This one sits square, which sounds like nothing and is most of the problem solved.",
    headline: "Square at address, and that is most of it",
    marks: ["Sits square", "Five lofts", "Iron length"],
    notes: [
      "Five lofts, 17 through 30. Pick by the gap, never by the number.",
      "If your hybrid goes left, it is usually the head shape and your aim, not your swing.",
      "Set up at iron length, so lie angle matters and we set it on the bench.",
      "Bring the long iron you are replacing. The comparison takes five minutes.",
    ],
    counter:
      "Aim it at a target before you hit anything. If it looks shut to you, that is the club telling you something.",
    specs: [
      { label: "Lofts", value: "17 to 30 degrees" },
      { label: "Address", value: "Square" },
      { label: "Length", value: "Iron length" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits:
      "Players who have tried a hybrid, pulled it left, and blamed themselves.",
  },

  "ping-i530-irons": {
    tagline: "Distance with a thin top line",
    description:
      "The i530 sits between the i230 and a full distance iron. You get the extra carry without the top line that makes better players put it straight back in the rack.",
    headline: "Distance that still looks right",
    marks: ["Hollow body", "Thin top line", "4 to PW"],
    notes: [
      "Seven clubs, 4 iron to pitching wedge.",
      "Stronger lofts than the i230, so check the gap to your wedges before you commit.",
      "If you like how the i230 looks but want another club of carry, this is that club.",
      "Lie angle is set on the bench before it goes in the bag, at no extra cost.",
    ],
    counter:
      "Hit the i230 and the i530 back to back. Six shots each settles an argument you have had with yourself for two years.",
    specs: [
      { label: "Set", value: "7 clubs, 4 to PW" },
      { label: "Build", value: "Hollow body" },
      { label: "Lofts", value: "Stronger than the i230" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits:
      "Players who want distance but will not look down at a thick top line to get it.",
    gallery: [
      "/images/products/ping-i530-irons.jpg",
      "/images/products/ping-i530-irons-2.jpg",
    ],
  },

  "srixon-zx7-mk-ii-irons": {
    tagline: "Forged tour blade",
    description:
      "A players iron that has not been widened, strengthened or softened to sell more of them. If you strike it out of the middle, this is what that is supposed to feel like.",
    headline: "No help you did not ask for",
    marks: ["Forged", "Compact head", "Traditional lofts"],
    notes: [
      "Seven clubs, 4 iron to pitching wedge, steel as standard.",
      "Traditional lofts. Your gapping stays where it is.",
      "This is not a forgiving iron. That is the point of it and we will say so.",
      "Back in on Friday. We hold one demo set in the bay meanwhile.",
    ],
    counter:
      "If you are not finding the middle four times out of five, this iron will tell you so every hole. Some people want that.",
    specs: [
      { label: "Set", value: "7 clubs, 4 to PW" },
      { label: "Build", value: "Forged" },
      { label: "Lofts", value: "Traditional" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits: "Low handicaps, and anyone who has outgrown help they no longer need.",
  },

  "ping-s159-wedge": {
    tagline: "Six grinds",
    description:
      "More sole options than anyone needs, which means there is one that suits your turf and your swing exactly. That is the whole argument for it, and it is a good one.",
    headline: "One of these six is yours",
    marks: ["Six grinds", "46 to 62 degrees", "Chrome or black"],
    notes: [
      "Six grinds. We will narrow it to two in the bay in about ten minutes.",
      "Lofts from 46 to 62. Gap it off your set pitching wedge first.",
      "Turf matters. A grind that works on links sand does not work on soft parkland.",
      "Chrome or black. Both wear with use and that is normal.",
    ],
    counter:
      "Nobody walks in asking for a different grind. Everybody who has been fitted for one asks about it next time.",
    specs: [
      { label: "Loft", value: "46 to 62 degrees" },
      { label: "Grinds", value: "Six" },
      { label: "Finish", value: "Chrome or black" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits:
      "Anyone who plays the same course most weeks. We can match the sole to that turf.",
    gallery: [
      "/images/products/ping-s159-wedge.jpg",
      "/images/products/ping-s159-wedge-2.jpg",
    ],
  },

  "ping-scottsdale-tec": {
    tagline: "A plain blade with an insert",
    description:
      "No alignment lines, no colour, nothing to argue with at address. The insert takes the click off the strike, which most people notice on the second putt rather than the first.",
    headline: "Nothing to distract you",
    marks: ["Blade head", "Face insert", "Three lengths"],
    notes: [
      "Three lengths. Get measured, because putter length is the most commonly wrong number in golf.",
      "No sight line. If you aim better without one, and plenty do, this is your putter.",
      "The insert softens the strike. Roll ten putts before you decide whether you want that.",
      "Putter fitting is forty five pounds and we do it on the same mat every time.",
    ],
    counter:
      "Take the sight line away and a lot of people aim better. They had been lining up the line, not the putt.",
    specs: [
      { label: "Head", value: "Blade" },
      { label: "Face", value: "Insert" },
      { label: "Length", value: "33, 34 and 35 inches" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits:
      "Players who set up well and then aim themselves off line with a graphic.",
  },

  "ping-tri-fold-towel": {
    tagline: "Three panels, one clean",
    description:
      "One panel stays dry, one gets wet, one does the grooves. It sounds like a small thing until you have played a wet round behind someone wiping a club on their trousers.",
    headline: "Three panels, and each has a job",
    marks: ["Cotton", "Carabiner clip", "Tri-fold"],
    notes: [
      "Wet one panel at the first tee and keep the other two dry.",
      "Cotton, because microfibre pushes the mud around rather than lifting it.",
      "The clip is a carabiner, so it comes off without threading it through anything.",
      "Wash it cold. Fabric softener is what stops a towel absorbing anything.",
    ],
    counter:
      "Clean grooves are worth more spin than any wedge on this wall. They are also free.",
    specs: [
      { label: "Fabric", value: "Cotton" },
      { label: "Fold", value: "Tri-fold" },
      { label: "Clip", value: "Carabiner" },
      { label: "Care", value: "Cold wash, no softener" },
    ],
    suits: "Anyone who plays in weather, which in Scotland is everyone.",
  },

  "ping-bow-tie-towel": {
    tagline: "Clips through the middle",
    description:
      "It hangs from the centre rather than a corner, so both ends stay where your hand goes. A small idea, and the reason this one does not end up behind the bag.",
    headline: "Where your hand actually goes",
    marks: ["Cotton", "Centre clip", "Two ends"],
    notes: [
      "Centre clip, so both ends hang within reach instead of one long tail.",
      "Smaller than the tri-fold. It is the one for a walk round, not a wet day.",
      "Cotton again. Lifting mud beats smearing it.",
      "Wash it cold and skip the softener.",
    ],
    counter:
      "People lose towels because they hang them where they cannot reach them. This one solves that and nothing else.",
    specs: [
      { label: "Fabric", value: "Cotton" },
      { label: "Clip", value: "Centre" },
      { label: "Size", value: "Smaller than the tri-fold" },
      { label: "Care", value: "Cold wash, no softener" },
    ],
    suits: "Walkers who want a towel they can actually find.",
  },

  "ping-hoofer-14": {
    tagline: "Fourteen dividers",
    description:
      "The Hoofer Lite with the full set of dividers, and half a kilo of extra weight to pay for them. If you carry fourteen clubs and hate untangling them on the tee, this is the trade.",
    headline: "Nothing tangles on the tee",
    marks: ["2.5 kg", "14 dividers", "Double strap"],
    notes: [
      "Half a kilo heavier than the Lite. That is the price of the full dividers.",
      "Fourteen slots means every club has its own. Nothing rattles and nothing catches.",
      "Same strap system as the Lite, which is the part that decides whether you finish the round.",
      "Weighed on the shop scale like every carry bag here, so the numbers compare.",
    ],
    counter:
      "The Lite or the 14 comes down to one question: does untangling clubs on the tee annoy you? Be honest.",
    specs: [
      { label: "Weight", value: "2.5 kg empty" },
      { label: "Top", value: "14 way" },
      { label: "Strap", value: "Double, adjustable" },
      { label: "Legs", value: "Stand" },
    ],
    suits: "Walkers carrying a full set who want every club in its own slot.",
  },

  "ping-hoofer-tour": {
    tagline: "Built heavier on purpose",
    description:
      "A carry bag made for someone who plays every week and keeps a bag for five years. Heavier fabric, heavier hardware, and it will still look right when the Lite has given up.",
    headline: "Heavier, and that is the point",
    marks: ["2.9 kg", "Tour build", "Reinforced base"],
    notes: [
      "Nearly three kilos. If you only play in summer, buy the Lite instead.",
      "Heavier fabric and hardware. This is where the extra weight went, not into features.",
      "The base is reinforced, which is where carry bags usually fail first.",
      "Expect five seasons from it. We have customers on their second decade.",
    ],
    counter:
      "Cheap bags are expensive. You buy three of them in the time this one lasts.",
    specs: [
      { label: "Weight", value: "2.9 kg empty" },
      { label: "Build", value: "Tour weight fabric" },
      { label: "Base", value: "Reinforced" },
      { label: "Legs", value: "Stand" },
    ],
    suits: "Players out every week, in all weather, who want to buy once.",
  },

  "ping-moonlite": {
    tagline: "One kilo",
    description:
      "A pencil bag for nine holes after work with six clubs in it. It is not trying to be your main bag and it will be better than your main bag for the evenings you actually play.",
    headline: "For the nine you fit in after work",
    marks: ["1.0 kg", "Six clubs", "Single strap"],
    notes: [
      "One kilo. You will forget it is there, which is the whole idea.",
      "Six or seven clubs, not fourteen. Pick them on the way out of the door.",
      "Single strap. On a bag this light a double strap is weight you do not need.",
      "It rolls flat, so it lives in a car boot without taking the boot.",
    ],
    counter:
      "The best round of the week is usually the quick nine. Carry a bag that makes it easy to go.",
    specs: [
      { label: "Weight", value: "1.0 kg empty" },
      { label: "Capacity", value: "Six to seven clubs" },
      { label: "Strap", value: "Single" },
      { label: "Storage", value: "Rolls flat" },
    ],
    suits: "Evening nines, holidays, and anyone who walks to the course.",
  },

  "ping-reserve-bag": {
    tagline: "Bought once",
    description:
      "The bag people photograph on the first tee, and the one they keep long enough for the leather to go the right colour. Expensive, and nobody who has bought one has been back to complain.",
    headline: "The one you keep",
    marks: ["2.3 kg", "Leather trim", "Stand"],
    notes: [
      "Leather trim, which means it will mark and then look better for it.",
      "Light for what it is. The weight is in the materials, not the hardware.",
      "White shows everything. That is a choice, and it ages well if you let it.",
      "This is the bag we would take if we were buying one and keeping it.",
    ],
    counter:
      "There is a bag for every budget on this wall. There is one bag on it that you will still own in ten years.",
    specs: [
      { label: "Weight", value: "2.3 kg empty" },
      { label: "Trim", value: "Leather" },
      { label: "Top", value: "Four way" },
      { label: "Legs", value: "Stand" },
    ],
    suits: "Players buying their last carry bag rather than their next one.",
  },

  "ping-pioneer": {
    tagline: "Fifteen pockets, all reachable",
    description:
      "A cart bag designed by someone who has actually stood beside a trolley. Every pocket opens with the bag strapped down, which sounds obvious and is not true of most of them.",
    headline: "Every pocket opens on the trolley",
    marks: ["15 pockets", "Strap pass through", "Cart base"],
    notes: [
      "Fifteen pockets and you can reach all of them with the bag strapped to a trolley.",
      "The strap passes through the back, so the bag does not twist on the third hole.",
      "Cart bags do not need to be light. Buy the one with the storage you want.",
      "It will not stand up on its own. That is the trade for a cart base.",
    ],
    counter:
      "Take a cart bag out to the trolley before you buy it. Half of them cover their own pockets.",
    specs: [
      { label: "Pockets", value: "15" },
      { label: "Base", value: "Cart" },
      { label: "Strap", value: "Pass through" },
      { label: "Top", value: "15 way" },
    ],
    suits: "Anyone who rides or pulls a trolley and wants to stop unstrapping the bag.",
  },

  "ping-traverse": {
    tagline: "Fits every trolley we have tried",
    description:
      "That sounds like a small claim until a bag does not fit yours. The base is shaped for the common trolley frames, and we have put it on the four we keep in the shop.",
    headline: "It fits, and that is not a given",
    marks: ["14 way top", "Trolley base", "Quiet colours"],
    notes: [
      "Bring your trolley if you have one. We will put the bag on it here.",
      "Fourteen way top, so every club has a slot and nothing rubs.",
      "Grey and black. It will not date in three seasons.",
      "Cart bag, so no legs. It leans against the trolley, not on its own.",
    ],
    counter:
      "Nobody checks whether the bag fits the trolley until they are in the car park in the rain.",
    specs: [
      { label: "Top", value: "14 way" },
      { label: "Base", value: "Trolley shaped" },
      { label: "Pockets", value: "10" },
      { label: "Colour", value: "Heather grey and black" },
    ],
    suits: "Trolley users who have had a bag that did not sit properly.",
  },

  "ping-dlx": {
    tagline: "Quiet colours, deep pockets",
    description:
      "A cart bag that does not shout. Plain navy, proper storage and hardware that will still work in five years. The sort of bag people move to once they stop caring what it looks like on Instagram.",
    headline: "A cart bag for grown ups",
    marks: ["14 way top", "12 pockets", "Navy"],
    notes: [
      "Twelve pockets including a cooler and a valuables pocket that actually locks shut.",
      "Plain navy. It will look the same in five years as it does today.",
      "Cart base, no legs. It is not a carry bag and does not pretend to be.",
      "Back in on Friday in navy. Other colours we order in.",
    ],
    counter:
      "Ask yourself how many pockets you used last season. The answer is usually four, and then buy for that.",
    specs: [
      { label: "Top", value: "14 way" },
      { label: "Pockets", value: "12" },
      { label: "Base", value: "Cart" },
      { label: "Colour", value: "Navy" },
    ],
    suits: "Riders and trolley users who want storage without decoration.",
  },

  "titleist-pro-v1x": {
    tagline: "Higher, firmer, more spin",
    description:
      "The other half of the Pro V1 conversation. Higher flight, firmer feel and more spin on full irons. Which of the two suits you is a question the monitor answers in ten shots.",
    headline: "The other half of the conversation",
    marks: ["Urethane cover", "Higher flight", "Firmer feel"],
    notes: [
      "Higher flight than the Pro V1, and firmer at impact. Both are noticeable.",
      "If your ball flight is already high, the standard Pro V1 is more likely your ball.",
      "Never buy one on a friend's recommendation. Their launch is not yours.",
      "Ball fitting is forty pounds and settles this in a session.",
    ],
    counter:
      "Pro V1 or V1x is the most common question we get and the easiest one to answer properly. It takes ten shots.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Cover", value: "Urethane" },
      { label: "Flight", value: "Higher than the Pro V1" },
      { label: "Fitting", value: "Forty pounds, forty five minutes" },
    ],
    suits: "Players with a flatter flight who need help getting the ball up.",
  },

  "titleist-velocity": {
    tagline: "Distance, and nothing else claimed",
    description:
      "A two piece ball that goes a long way and does not pretend to spin around the green. Half the price of a tour ball, and the right buy for a lot of people who are playing the wrong one.",
    headline: "Honest about what it does",
    marks: ["Two piece", "Long off the tee", "Half the price"],
    notes: [
      "It will not check on the green. Nothing at this price does and anything claiming to is lying.",
      "If you lose three or more a round, play this and spend the difference on a lesson.",
      "Long off the tee, which is what most players actually notice.",
      "Dozen. Buy two and stop worrying about the water on the seventh.",
    ],
    counter:
      "There is no shame in this ball. There is something slightly silly about losing four tour balls a round.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Build", value: "Two piece" },
      { label: "Spin", value: "Low" },
      { label: "Flight", value: "High and long" },
    ],
    suits: "Higher handicaps, anyone who loses balls, and winter golf.",
  },

  "srixon-z-star": {
    tagline: "The softer Z-Star",
    description:
      "The standard Z-Star to the XV's firmer build. More spin into the green and a softer feel off the putter, which is where most people decide what they think of a ball.",
    headline: "The softer of the two",
    marks: ["Urethane cover", "Softer feel", "More greenside spin"],
    notes: [
      "Softer than the XV, with more spin on approach shots.",
      "If your wedges come off the front of the green, it is the XV you want instead.",
      "A genuine tour ball at a little under the Titleist price.",
      "Two rounds before you decide. First impressions on a ball are usually wrong.",
    ],
    counter:
      "Srixon are the quiet ones in the ball aisle. Plenty of people who try a sleeve stay on them for years.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Cover", value: "Urethane" },
      { label: "Feel", value: "Softer than the XV" },
      { label: "Fitting", value: "Forty pounds, forty five minutes" },
    ],
    suits: "Players who want tour spin without the tour ball price.",
  },

  "srixon-soft-feel": {
    tagline: "Soft, cheap and honest",
    description:
      "A ball that does exactly what the name says and costs a fraction of the ones above it. If you are learning, or playing in winter, this is a better buy than a tour ball you cannot use yet.",
    headline: "A good ball to learn on",
    marks: ["Soft feel", "Low compression", "Dozen"],
    notes: [
      "Low compression, so it suits slower swing speeds and cold mornings.",
      "It will not spin like a urethane ball. At this price nothing does.",
      "Winter golf eats balls. This is the one to eat.",
      "Comes in white or a green you can actually find in the rough.",
    ],
    counter:
      "Play the ball that suits the golf you are playing today, not the golf you are hoping to play next year.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Compression", value: "Low" },
      { label: "Feel", value: "Soft" },
      { label: "Colour", value: "White or green" },
    ],
    suits: "Beginners, slower swing speeds and anyone playing through winter.",
  },

  "ping-captains-snapback": {
    tagline: "Gold leaf on navy",
    description:
      "Louder than most of what we stock, and it earns it. Gold detailing on a navy crown, structured front, and it looks better in person than it does in a photograph.",
    headline: "Louder than we usually go",
    marks: ["Structured front", "Snapback", "One size"],
    notes: [
      "One size, snapback. It will fit, the question is the crown height.",
      "Structured front, so it holds its shape rather than folding in the bag.",
      "The gold is a print, not thread. It will not catch or fray.",
      "Cold water, air dry. A machine will take the shape out of the crown.",
    ],
    counter:
      "We do not stock much that shouts. This one gets bought more than anything else on the shelf.",
    specs: [
      { label: "Fit", value: "One size, snapback" },
      { label: "Crown", value: "Structured" },
      { label: "Brim", value: "Flat" },
      { label: "Care", value: "Cold water, air dry" },
    ],
    suits: "Anyone who wants one cap that is not plain.",
  },

  "ping-wheel-boonie": {
    tagline: "A full brim",
    description:
      "Not a cap. A full brim goes all the way round, which is the difference between a comfortable August round and the back of your neck reminding you about it for three days.",
    headline: "Your neck will thank you in August",
    marks: ["Full brim", "Two sizes", "Packable"],
    notes: [
      "Full brim, so the sun stays off your neck and your ears as well as your face.",
      "Two sizes rather than one. Measure your head or try it on here.",
      "It packs down without creasing, so it lives in the bag from May.",
      "White reflects. A dark hat in August is a decision you feel by the twelfth.",
    ],
    counter:
      "Everyone buys a cap and then wishes they had a brim on the one hot week of the year.",
    specs: [
      { label: "Style", value: "Full brim" },
      { label: "Sizes", value: "S/M and L/XL" },
      { label: "Packs", value: "Yes" },
      { label: "Care", value: "Cold water, air dry" },
    ],
    suits: "Summer golf, and anyone who has burned the back of their neck once.",
  },

  "ping-get-a-grip-cap": {
    tagline: "Black on black",
    description:
      "Tonal detailing on a black crown, so there is nothing on it to match or clash with. The cap for people who do not want a cap to be a decision.",
    headline: "Nothing you have to explain",
    marks: ["Tonal detail", "Adjustable", "One size"],
    notes: [
      "Black on black. It goes with everything because it says nothing.",
      "Adjustable rather than snapback, so the fit is finer.",
      "Unstructured front, so it folds into a bag pocket without a crease.",
      "Black shows salt marks from sweat. Rinse it rather than washing it.",
    ],
    counter:
      "Half the people who come in for a cap want one that does not have anything on it. This is that cap.",
    specs: [
      { label: "Fit", value: "One size, adjustable" },
      { label: "Crown", value: "Unstructured" },
      { label: "Detail", value: "Tonal" },
      { label: "Care", value: "Rinse, air dry" },
    ],
    suits: "Anyone who wants the cap to be the least interesting thing they wear.",
  },

  "ping-phoenician-cap": {
    tagline: "Rope brim, flat front",
    description:
      "The old clubhouse shape brought back, with a rope across the brim. Tan, unlined, and it is one of the few things in here that genuinely looks better after a season of use.",
    headline: "Better after a season",
    marks: ["Rope brim", "Flat front", "Snapback"],
    notes: [
      "The rope is decorative and the shape is not. This is the flat front clubhouse cut.",
      "Tan fades. That is the point, and it is why it looks better in year two.",
      "One size, snapback. Structured front, so the shape holds.",
      "Do not machine wash it. The rope will not survive and neither will the crown.",
    ],
    counter:
      "This is the one the staff wear off the course, which is as honest a recommendation as we give.",
    specs: [
      { label: "Fit", value: "One size, snapback" },
      { label: "Brim", value: "Flat, rope detail" },
      { label: "Colour", value: "Tan" },
      { label: "Care", value: "Spot clean only" },
    ],
    suits: "Anyone who likes the old shapes and is happy for a hat to age.",
  },

  "ping-single-canopy-umbrella": {
    tagline: "Single canopy",
    description:
      "Double canopy umbrellas vent the wind and cost more. On a links in a real gale neither survives, so we stock the single, keep it cheap, and tell you to put it away when it gets serious.",
    headline: "Honest about what an umbrella can do",
    marks: ["62 inch", "Single canopy", "Fibreglass ribs"],
    notes: [
      "Sixty two inches, which covers you and the bag if you angle it properly.",
      "Fibreglass ribs. They bend back rather than snapping, most of the time.",
      "In a real links wind, put it away. No umbrella wins that argument.",
      "Dry it open at home. Folding it wet is how the fabric goes.",
    ],
    counter:
      "The expensive umbrella and the cheap one both turn inside out at forty miles an hour. Buy the cheap one.",
    specs: [
      { label: "Canopy", value: "62 inch, single" },
      { label: "Ribs", value: "Fibreglass" },
      { label: "Handle", value: "Rubber grip" },
      { label: "Care", value: "Dry open" },
    ],
    suits: "Everyone who plays here, which is to say everyone.",
  },

  "ping-fur-driver-headcover": {
    tagline: "It stops the ringing",
    description:
      "A headcover is not decoration. It is what stops your driver crown chiming against your irons for four hours, which is how crowns get marked and how heads get loose.",
    headline: "The cheapest insurance in the bag",
    marks: ["Fits 460cc", "Fur", "Elasticated"],
    notes: [
      "Fits any driver head up to 460cc, which is all of them.",
      "Fur is soft on the crown. Anything stiff is what marks a driver.",
      "Put it back on after every shot. That is the entire job.",
      "It will get wet and it will dry. Do not put it in a machine.",
    ],
    counter:
      "The scratches on a used driver crown are almost always from the irons next to it, not from the ball.",
    specs: [
      { label: "Fits", value: "Up to 460cc" },
      { label: "Material", value: "Fur" },
      { label: "Closure", value: "Elasticated" },
      { label: "Care", value: "Air dry" },
    ],
    suits: "Anyone whose driver shares a bag with irons, which is everyone.",
  },

  "ping-captains-blade-cover": {
    tagline: "Magnetic closure",
    description:
      "The difference between a cover you use and one that lives in the bottom of the bag is whether you can put it back on one handed. This one closes with a magnet, so you will.",
    headline: "You will actually put it back on",
    marks: ["Magnetic", "Blade putters", "Lined"],
    notes: [
      "Magnetic closure, so it goes back on with one hand while you walk off the green.",
      "Blade putters only. Bring the putter if you are not sure it fits.",
      "Lined, so the face stays unmarked. Putter faces mark more easily than people expect.",
      "Navy. It will not look tired in two seasons.",
    ],
    counter:
      "A cover you have to fight with is a cover you stop using. That is the only test that matters.",
    specs: [
      { label: "Fits", value: "Blade putters" },
      { label: "Closure", value: "Magnetic" },
      { label: "Lining", value: "Soft" },
      { label: "Colour", value: "Navy" },
    ],
    suits: "Blade players who want the face to stay as it came.",
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
