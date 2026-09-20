import { generatedPage } from "@/content/product-copy";
import type { Product } from "@/content/products";

export type ProductPage = {
  tagline: string;
  description: string;
  headline: string;
  marks: [string, string, string];
  notes: [string, string, string, string];
  counter: string;
  specs: { label: string; value: string }[];
  suits: string;
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

  "ping-hoofer": {
    tagline: "The original",
    description:
      "The bag every other carry bag has been answering since. Heavier than the Lite, lighter than the Tour, and the one we sell when somebody has no strong opinion and wants us to have one.",
    headline: "The one everything else answers",
    marks: ["2.3 kg", "5 way top", "Double strap"],
    notes: [
      "Two point three kilos, which is the middle of our carry bag rack.",
      "Five way top. Enough separation for fourteen clubs without the weight of fourteen slots.",
      "If you have no strong view, buy this one. That is not a cop out, it is the answer.",
      "Weighed on the shop scale like everything else here.",
    ],
    counter:
      "When someone asks which bag, and has no other requirement, this is the one. It has been for twenty years.",
    specs: [
      { label: "Weight", value: "2.3 kg empty" },
      { label: "Top", value: "Five way" },
      { label: "Strap", value: "Double, adjustable" },
      { label: "Legs", value: "Stand" },
    ],
    suits: "Walkers who want one bag and do not want to think about it again.",
  },

  "ping-moonlander": {
    tagline: "Between the two",
    description:
      "Heavier than the Moonlite, lighter than the Hoofer. It exists because a lot of people want a bag for eighteen holes that still feels like nothing on the back nine.",
    headline: "Light enough for eighteen",
    marks: ["1.6 kg", "4 way top", "Double strap"],
    notes: [
      "One point six kilos, which is the gap between the Moonlite and the Hoofer.",
      "Four way top. Not fourteen slots, but enough to keep a full set apart.",
      "Double strap on a bag this light, which is unusual and is why it works over eighteen.",
      "Pockets are minimal. That is where the weight was saved.",
    ],
    counter:
      "Most people buy too much bag. Carry a loaded one round the shop before you decide what you need.",
    specs: [
      { label: "Weight", value: "1.6 kg empty" },
      { label: "Top", value: "Four way" },
      { label: "Strap", value: "Double" },
      { label: "Legs", value: "Stand" },
    ],
    suits: "Walkers playing full rounds who find the Hoofer more than they need.",
  },

  "srixon-z-star-diamond": {
    tagline: "Built around the wedges",
    description:
      "A Z-Star tuned for greenside spin rather than distance. If your scoring happens inside a hundred yards and you want the ball to help, this is the one built for that.",
    headline: "For the golf inside a hundred yards",
    marks: ["Urethane cover", "High wedge spin", "Dozen"],
    notes: [
      "More spin on partial wedges than the standard Z-Star, which is the whole point.",
      "You give a little back off the tee. Most players never notice it.",
      "If you score with your wedges, this ball helps. If you score with your driver, it does not.",
      "Two rounds before you judge it. Wedge spin shows up slowly.",
    ],
    counter:
      "Pick a ball for the part of your game that scores. For most decent players that is inside a hundred yards.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Cover", value: "Urethane" },
      { label: "Spin", value: "High on wedges" },
      { label: "Fitting", value: "Forty pounds, forty five minutes" },
    ],
    suits: "Good short games. Players who miss greens and get up and down anyway.",
  },

  "srixon-q-star-tour": {
    tagline: "Tour cover, softer core",
    description:
      "A urethane cover on a ball that does not need tour speed to compress. The sensible middle of the rack, and the ball a lot of people should be playing instead of the one above it.",
    headline: "The sensible middle",
    marks: ["Urethane cover", "Lower compression", "Dozen"],
    notes: [
      "Urethane cover, so it does check on the green, unlike anything cheaper.",
      "Lower compression, which suits swing speeds under about ninety five.",
      "A third less than a tour ball and most players cannot tell on the course.",
      "Yellow is easier to follow in flat light, which we get a lot of here.",
    ],
    counter:
      "The number of people playing a tour ball who would score better on this one is higher than anybody in the trade admits.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Cover", value: "Urethane" },
      { label: "Compression", value: "Lower" },
      { label: "Colour", value: "White or yellow" },
    ],
    suits: "Swing speeds under ninety five who still want greenside spin.",
  },

  "srixon-q-star-ultispeed": {
    tagline: "Fast and cheap",
    description:
      "A two piece ball built for speed and priced so that losing one does not ruin the hole. It will not check and it does not claim to, which is more than most balls at this price manage.",
    headline: "It does one thing and says so",
    marks: ["Two piece", "Low spin", "Dozen"],
    notes: [
      "Two piece, low spin, long. That is the whole specification.",
      "It will not hold a green from a full wedge. Nothing at this price will.",
      "Good winter ball. The ground is hard and the ball rolls out anyway.",
      "Dozen. Buy two if your course has water on it.",
    ],
    counter:
      "If your last three balls went in the burn, the ball is not your problem and the expensive one is not the fix.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Build", value: "Two piece" },
      { label: "Spin", value: "Low" },
      { label: "Flight", value: "Long and flat" },
    ],
    suits: "Higher handicaps, winter rounds and courses that eat golf balls.",
  },

  "srixon-soft-feel-brite": {
    tagline: "The Soft Feel, in a colour",
    description:
      "Exactly the same ball as the Soft Feel with a finish you can actually see. In flat Scottish light a white ball in the rough is a two minute search. This one is not.",
    headline: "You will find it",
    marks: ["Soft feel", "High visibility", "Dozen"],
    notes: [
      "The same ball as the Soft Feel. The colour is the only difference.",
      "Green shows up against long grass in flat light, which white does not.",
      "Low compression, so it suits slower speeds and cold mornings.",
      "If you have never played a coloured ball, one round changes most minds.",
    ],
    counter:
      "Half the balls people lose are not lost, they are just not found. A colour fixes that for twenty four pounds.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Compression", value: "Low" },
      { label: "Feel", value: "Soft" },
      { label: "Colour", value: "Brite green" },
    ],
    suits: "Anyone who plays in flat light or long rough, so most people here.",
  },

  "ping-sport-tech-glove": {
    tagline: "Part leather, part synthetic",
    description:
      "Cabretta where you need the feel and synthetic where the glove wears out. It lasts longer than an all leather glove and gives up a little of the connection to the grip.",
    headline: "It outlasts cabretta",
    marks: ["Leather palm", "Synthetic back", "Sizes S to XL"],
    notes: [
      "Leather on the palm, synthetic on the back and knuckles where gloves split.",
      "It will last longer than the Tour glove and feel slightly less direct.",
      "Buy it a shade tight. Synthetic gives less than leather, so less than a shade.",
      "This is the one to buy if you play twice a week and hate replacing gloves.",
    ],
    counter:
      "All leather feels better for ten rounds. This feels almost as good for thirty. Pick which you care about.",
    specs: [
      { label: "Palm", value: "Cabretta leather" },
      { label: "Back", value: "Synthetic" },
      { label: "Sizes", value: "S to XL" },
      { label: "Life", value: "25 to 40 rounds" },
    ],
    suits: "Players out more than once a week who want a glove to last.",
  },

  "ping-mr-ping-snapback": {
    tagline: "The old mark",
    description:
      "The figure that has been on Ping putters since the sixties, on a grey crown in gold. It is the only cap in here that is genuinely about the brand's history rather than its logo.",
    headline: "The mark, back where it belongs",
    marks: ["Structured front", "Snapback", "One size"],
    notes: [
      "Structured front, so the figure sits flat and does not fold.",
      "Grey and gold. It goes with less than a plain cap and looks better than one.",
      "One size, snapback.",
      "Cold water only. The gold is a print and a machine will lift it.",
    ],
    counter:
      "If you know what the little figure is, you will want this cap. If you do not, buy the plain one.",
    specs: [
      { label: "Fit", value: "One size, snapback" },
      { label: "Crown", value: "Structured" },
      { label: "Detail", value: "Gold print" },
      { label: "Care", value: "Cold water, air dry" },
    ],
    suits: "Anyone who has owned a Ping putter and knows the figure.",
  },

  "ping-finish-line-cap": {
    tagline: "Unstructured and light",
    description:
      "A soft front cap that folds into a pocket and comes out without a crease. The one to keep in the bag for the day the sun arrives halfway round.",
    headline: "It lives in the bag",
    marks: ["Unstructured", "Adjustable", "Packable"],
    notes: [
      "Soft front, so it folds flat and recovers.",
      "Adjustable rather than snapback, which gives a finer fit.",
      "White reflects, which matters more than it sounds in July.",
      "Cold water, air dry. It will not hold a shape it does not have.",
    ],
    counter:
      "Keep a spare cap in the bag. The day you need one is never the day you remembered.",
    specs: [
      { label: "Fit", value: "One size, adjustable" },
      { label: "Crown", value: "Unstructured" },
      { label: "Packs", value: "Yes" },
      { label: "Care", value: "Cold water, air dry" },
    ],
    suits: "Anyone who wants a second cap that lives in the bag.",
  },

  "ping-weekender-cap": {
    tagline: "Soft front, navy",
    description:
      "Nothing shouting and nothing structured. The cap for the round after the round, and the one most likely to end up worn off the course.",
    headline: "For the round after the round",
    marks: ["Soft front", "Navy", "Adjustable"],
    notes: [
      "Soft front. It will take the shape of your head rather than holding its own.",
      "Navy, so it goes with the rest of what you own.",
      "Adjustable strap, finer than a snapback.",
      "Cold water only, and never a machine.",
    ],
    counter:
      "The cap you wear most is the one you forget you are wearing. Usually it is the plain soft one.",
    specs: [
      { label: "Fit", value: "One size, adjustable" },
      { label: "Crown", value: "Unstructured" },
      { label: "Colour", value: "Navy" },
      { label: "Care", value: "Cold water, air dry" },
    ],
    suits: "Anyone who wants a cap and not a statement.",
  },

  "ping-icon-driver-cover": {
    tagline: "Plain and structured",
    description:
      "A driver cover that holds its shape after a wet round, which sounds like nothing until you have wrestled a soggy one back onto a head in the rain on the second tee.",
    headline: "It goes back on when it is wet",
    marks: ["Fits 460cc", "Structured", "Lined"],
    notes: [
      "Structured, so it keeps its opening when soaked.",
      "Lined, which is what stops the crown marking.",
      "Fits any driver head up to 460cc.",
      "Dry it off the club. Leaving it on traps water against the crown.",
    ],
    counter:
      "The test for a headcover is whether it goes back on in the rain with cold hands. Most fail it.",
    specs: [
      { label: "Fits", value: "Up to 460cc" },
      { label: "Build", value: "Structured" },
      { label: "Lining", value: "Soft" },
      { label: "Care", value: "Air dry off the club" },
    ],
    suits: "Anyone who plays in weather and has fought a wet headcover.",
  },

  "ping-captains-driver-cover": {
    tagline: "White, and it will not stay white",
    description:
      "It marks, and after a season it looks like it has been somewhere. That is either the reason to buy it or the reason not to, and we are not going to pretend it stays clean.",
    headline: "It will not stay white",
    marks: ["Fits 460cc", "Structured", "White"],
    notes: [
      "White marks. Within a season it will look used, and that is the deal.",
      "Structured and lined, same as the Icon, so it works the same in the wet.",
      "Fits any driver head up to 460cc.",
      "Spot clean. Washing it will take the shape out.",
    ],
    counter:
      "If a white headcover getting grubby is going to bother you in April, buy the black one now.",
    specs: [
      { label: "Fits", value: "Up to 460cc" },
      { label: "Build", value: "Structured" },
      { label: "Colour", value: "White" },
      { label: "Care", value: "Spot clean" },
    ],
    suits: "People who like their gear to look played with.",
  },

  "ping-captains-mallet-cover": {
    tagline: "Deeper, for mallets",
    description:
      "A blade cover on a mallet head is a cover that falls off on the third green. This one is cut deep enough for the modern mallet shapes and closes with a magnet.",
    headline: "Cut for the head you actually have",
    marks: ["Mallet putters", "Magnetic", "Lined"],
    notes: [
      "Mallets only. A blade cover will not stay on and a mallet cover on a blade flaps.",
      "Magnetic closure, so it goes back on one handed.",
      "Lined, because putter faces mark more easily than anything else in the bag.",
      "Bring the putter if you are not sure which shape you have.",
    ],
    counter:
      "Bring the putter in. Half the covers people buy do not fit the head they own.",
    specs: [
      { label: "Fits", value: "Mallet putters" },
      { label: "Closure", value: "Magnetic" },
      { label: "Lining", value: "Soft" },
      { label: "Colour", value: "White" },
    ],
    suits: "Mallet players whose current cover comes off in the bag.",
  },

  "ping-fur-fairway-cover": {
    tagline: "For the club that gets chipped",
    description:
      "Fairway woods live next to irons and take more knocks than drivers do, because nobody covers them. Thirty pounds now against a chipped crown you will notice every time you set it down.",
    headline: "Nobody covers the fairway wood",
    marks: ["Fits 3, 5 and 7", "Fur", "Elasticated"],
    notes: [
      "Fits a 3, 5 or 7 wood head. One cover, all three.",
      "Fur is soft on a painted crown. Stiff covers are what cause the marks.",
      "Fairway woods get knocked more than drivers because they sit lower in the bag.",
      "Air dry. It will get wet and it will be fine.",
    ],
    counter:
      "Look at a five year old fairway wood and then at the driver from the same bag. The wood always looks worse.",
    specs: [
      { label: "Fits", value: "3, 5 and 7 wood" },
      { label: "Material", value: "Fur" },
      { label: "Closure", value: "Elasticated" },
      { label: "Care", value: "Air dry" },
    ],
    suits: "Anyone carrying a fairway wood without a cover, which is most people.",
  },

  "ping-icon-fairway-cover": {
    tagline: "Numbered",
    description:
      "Three covers, numbered three, five and seven, so you stop pulling the wrong club out of the bag on a tight tee shot. A small thing that saves a shot a season.",
    headline: "Stop pulling the wrong one",
    marks: ["Numbered", "Structured", "Lined"],
    notes: [
      "Numbered 3, 5 and 7. Sold individually, so buy for what you carry.",
      "Structured, so it holds its shape and goes back on wet.",
      "Lined, which keeps the crown unmarked.",
      "If you carry two woods, the numbers matter more than you think.",
    ],
    counter:
      "People pull the wrong wood more often than they admit. Numbers on the covers fix it for the price of a sleeve of balls.",
    specs: [
      { label: "Fits", value: "3, 5 or 7 wood" },
      { label: "Build", value: "Structured" },
      { label: "Marking", value: "Numbered" },
      { label: "Care", value: "Air dry off the club" },
    ],
    suits: "Anyone carrying more than one fairway wood.",
  },

  "ping-stars-tri-fold-towel": {
    tagline: "Same towel, louder",
    description:
      "The tri-fold in red, white and navy. It works exactly the same way and you will spot it on a wet fairway from thirty yards, which is when towels get left behind.",
    headline: "You will see this one",
    marks: ["Cotton", "Carabiner clip", "Tri-fold"],
    notes: [
      "Identical to the plain tri-fold. Three panels, one wet, two dry.",
      "The colour is the point. Towels get dropped and left on wet ground.",
      "Cotton, which lifts mud rather than pushing it around.",
      "Cold wash, no softener, or it stops absorbing anything.",
    ],
    counter:
      "The towel you lose is always the grey one lying on a wet fairway. Buy a colour.",
    specs: [
      { label: "Fabric", value: "Cotton" },
      { label: "Fold", value: "Tri-fold" },
      { label: "Clip", value: "Carabiner" },
      { label: "Care", value: "Cold wash, no softener" },
    ],
    suits: "Anyone who has left a towel on a fairway, which is everyone eventually.",
  },

  "callaway-tour-authentic-glove": {
    tagline: "Premium cabretta, nothing else",
    description:
      "The thinnest leather Callaway sell, cut for feel rather than for life. It will wear through at the heel of the palm, and the players who buy it know that and buy it anyway.",
    headline: "It wears out because it is good",
    marks: ["Premium cabretta", "Thin cut", "Sizes S to XL"],
    notes: [
      "Thin leather. You feel more of the grip and you replace it sooner.",
      "Expect twenty rounds, not forty. That is the trade and we will not dress it up.",
      "Buy it a shade tight. Cabretta gives, synthetics do not.",
      "If it lasts you a season you are not playing enough.",
    ],
    counter:
      "Try this and the Dawn Patrol on opposite hands for one round. Most people can tell, and then they decide whether they care.",
    specs: [
      { label: "Leather", value: "Premium cabretta" },
      { label: "Sizes", value: "S to XL, cadet available" },
      { label: "Life", value: "15 to 25 rounds" },
      { label: "Hand", value: "Left or right" },
    ],
    suits: "Better players who notice the grip and replace gloves without complaining.",
  },

  "callaway-weather-spann-glove": {
    tagline: "For a damp grip",
    description:
      "A glove built to keep working when the leather one has gone slick. In Scotland that is not an occasional problem, it is most of March and most of October.",
    headline: "It still works when the grip is wet",
    marks: ["All weather", "Tacky when damp", "Sizes S to XL"],
    notes: [
      "It grips better damp than a cabretta glove does dry.",
      "Less feel than leather. That is what you are paying for and giving up.",
      "Keep one in the bag even if you play leather. The day you need it you will not have planned for it.",
      "Washes out. Cold water, air dry, never a radiator.",
    ],
    counter:
      "Every bag in here should have a weather glove in it. It costs seventeen pounds and it saves a round.",
    specs: [
      { label: "Material", value: "Synthetic, all weather" },
      { label: "Sizes", value: "S to XL" },
      { label: "Life", value: "30 to 45 rounds" },
      { label: "Care", value: "Cold wash, air dry" },
    ],
    suits: "Anyone who plays in weather, and anyone who sweats through a leather glove.",
  },

  "callaway-dawn-patrol-glove": {
    tagline: "Leather at the right price",
    description:
      "Full leather without the thin tour cut, which means it lasts longer and costs less. This is the glove most people should be buying and the one they walk past on the way to the expensive one.",
    headline: "The one most people should buy",
    marks: ["Full leather", "Everyday cut", "Sizes S to XL"],
    notes: [
      "Full leather, slightly thicker than the Tour Authentic.",
      "Thirty rounds rather than twenty, for less money.",
      "You lose a little feel. Almost nobody notices it on the course.",
      "Buy two. The second one lives in the bag and doubles the life of both.",
    ],
    counter:
      "Buy two and rotate them. A glove that gets a day to dry out lasts half again as long.",
    specs: [
      { label: "Leather", value: "Full cabretta" },
      { label: "Sizes", value: "S to XL, cadet available" },
      { label: "Life", value: "25 to 35 rounds" },
      { label: "Hand", value: "Left or right" },
    ],
    suits: "Anyone who plays weekly and does not want to think about gloves.",
  },

  "callaway-fusion-glove": {
    tagline: "Leather palm, mesh back",
    description:
      "Leather where your hand meets the grip and mesh over the knuckles, so it moves and it breathes. In summer it is the difference between a glove you keep on and one you keep taking off.",
    headline: "It breathes over the knuckles",
    marks: ["Leather palm", "Mesh back", "Sizes S to XL"],
    notes: [
      "Mesh across the knuckles, which is where a glove binds when you close your hand.",
      "Leather palm, so the contact with the grip is unchanged.",
      "Summer glove. In January the mesh is a hole where the wind goes.",
      "Cold wash, air dry, and it will keep its shape.",
    ],
    counter:
      "If you take your glove off between shots, it is usually the back that bothers you, not the palm.",
    specs: [
      { label: "Palm", value: "Cabretta leather" },
      { label: "Back", value: "Mesh" },
      { label: "Sizes", value: "S to XL" },
      { label: "Season", value: "Warm weather" },
    ],
    suits: "Warm hands, summer rounds and anyone who finds a full leather glove stifling.",
  },

  "callaway-x-spann-glove": {
    tagline: "Cut tight",
    description:
      "A compression fit, which means it goes on harder and then does not move at all. Some people find that the whole point of a glove and some find it a nuisance. Put one on before you decide.",
    headline: "It does not move once it is on",
    marks: ["Compression fit", "All weather", "Sizes S to XL"],
    notes: [
      "Tighter than any other glove on this wall. Take your normal size, not a smaller one.",
      "Once it is on it does not shift, which is the whole argument for it.",
      "It takes longer to put on. Some people find that irritating by the fourth hole.",
      "Try it on here. This is not a glove to buy unseen.",
    ],
    counter:
      "If your glove bunches at the palm when you regrip, this fixes it. If it does not, you do not need this glove.",
    specs: [
      { label: "Fit", value: "Compression" },
      { label: "Material", value: "Leather and synthetic" },
      { label: "Sizes", value: "S to XL" },
      { label: "Hand", value: "Left or right" },
    ],
    suits: "Players who regrip at the top and find their glove has moved.",
  },

  "callaway-rain-spann-gloves": {
    tagline: "A pair, not one",
    description:
      "Rain gloves come in twos because rain does not fall on one hand. They grip harder the wetter they get, which feels wrong the first time and then makes perfect sense.",
    headline: "Better wet than dry",
    marks: ["Pair", "Grips wet", "Sizes S to XL"],
    notes: [
      "Sold as a pair. A single rain glove is half a solution.",
      "They work wet. Dry they feel odd and slightly slick, which is normal.",
      "Put them on before the rain starts, not after your grips are already soaked.",
      "Rinse and air dry. They come back the same.",
    ],
    counter:
      "The mistake is waiting until the third hole. By then the grips are wet and no glove fixes that.",
    specs: [
      { label: "Count", value: "Pair" },
      { label: "Grip", value: "Improves when wet" },
      { label: "Sizes", value: "S to XL" },
      { label: "Care", value: "Rinse, air dry" },
    ],
    suits: "Anyone who plays through rain rather than waiting it out.",
  },

  "callaway-thermal-grip-gloves": {
    tagline: "For the cold months",
    description:
      "A lined pair for the four months a year when you cannot feel the club. They are thicker than a playing glove and you swing in them anyway, because numb hands cost more than the thickness does.",
    headline: "You swing in these",
    marks: ["Pair", "Lined", "Sizes S to XL"],
    notes: [
      "Thicker than a playing glove. You will notice it and you will still score better than with cold hands.",
      "Sold as a pair, which is the only way a winter glove makes sense.",
      "Not waterproof. For rain buy the Rain Spann.",
      "Air dry between rounds or the lining stays damp.",
    ],
    counter:
      "People play winter golf in a summer glove and one bare hand. Then they wonder why the first five holes are terrible.",
    specs: [
      { label: "Count", value: "Pair" },
      { label: "Lining", value: "Thermal" },
      { label: "Sizes", value: "S to XL" },
      { label: "Season", value: "Cold weather" },
    ],
    suits: "Winter golf, early tee times and anybody who plays through to March.",
  },

  "srixon-premium-cabretta-glove": {
    tagline: "Thin leather, no panels",
    description:
      "One piece of cabretta cut simply, with nothing added across the back. It is the most direct connection to a grip in this shop and it will not last the season.",
    headline: "Nothing between hand and grip",
    marks: ["Premium cabretta", "Unpanelled", "Sizes S to XL"],
    notes: [
      "No mesh, no synthetic panels, no stretch inserts. Just leather.",
      "Fifteen to twenty rounds if you play in the dry. Fewer if you do not.",
      "The thinnest glove here, and you can feel the difference through the grip.",
      "A shade tight when new. It will take the shape of your hand in two rounds.",
    ],
    counter:
      "This is a glove for feel, not for value. If replacing it every month annoys you, buy the All Weather.",
    specs: [
      { label: "Leather", value: "Premium cabretta" },
      { label: "Build", value: "Unpanelled" },
      { label: "Sizes", value: "S to XL" },
      { label: "Life", value: "15 to 20 rounds" },
    ],
    suits: "Low handicaps and anyone who has ever said a glove felt thick.",
  },

  "srixon-all-weather-glove": {
    tagline: "Synthetic where it wears",
    description:
      "Built to survive rather than to impress, with synthetic across the parts of a glove that split first. It gives up a little feel and returns it as another twenty rounds.",
    headline: "It outlasts leather",
    marks: ["Synthetic", "Hard wearing", "Sizes S to XL"],
    notes: [
      "Synthetic across the back and the knuckles, which is where gloves go first.",
      "Forty rounds is normal. A cabretta glove will not see half of that.",
      "Less feel than leather, and most players stop noticing after two holes.",
      "Cold wash. It survives that too.",
    ],
    counter:
      "Buy this if you play twice a week. Buy leather if you play once a month and want it to feel special.",
    specs: [
      { label: "Material", value: "Synthetic and leather" },
      { label: "Sizes", value: "S to XL" },
      { label: "Life", value: "35 to 45 rounds" },
      { label: "Care", value: "Cold wash, air dry" },
    ],
    suits: "Anyone out more than once a week who resents replacing gloves.",
  },

  "srixon-rain-gloves": {
    tagline: "Better wet than dry",
    description:
      "A pair built so that water improves the grip rather than ruining it. Counterintuitive, and entirely true, and worth having in the bag before the sky decides.",
    headline: "Put them on before it starts",
    marks: ["Pair", "Grips wet", "Sizes S to XL"],
    notes: [
      "Sold as a pair. That is how rain works.",
      "They grip harder the wetter they get. Dry, they feel slightly odd.",
      "Put them on at the first spot of rain, not when your grips are already wet.",
      "Rinse them after, air dry, and they last years.",
    ],
    counter:
      "A rain glove in the bag is worth more than a fourth wedge. We will say that to anybody who asks.",
    specs: [
      { label: "Count", value: "Pair" },
      { label: "Grip", value: "Improves when wet" },
      { label: "Sizes", value: "S to XL" },
      { label: "Care", value: "Rinse, air dry" },
    ],
    suits: "Anyone playing links golf in anything other than July.",
  },

  "srixon-winter-cart-mitten": {
    tagline: "Not for swinging",
    description:
      "These go over your hands between shots and come off to hit. They keep your hands warm for the three minutes that matter, which is the walk, not the swing.",
    headline: "For the walk, not the shot",
    marks: ["Pair", "Fleece lined", "One size"],
    notes: [
      "You take these off to play. That is the design, not a limitation.",
      "Fleece lined, and windproof on the back.",
      "Clip them to the bag. A mitten left on a tee box is gone.",
      "One size. They go over a playing glove.",
    ],
    counter:
      "Warm hands on the tee is worth more than any winter glove you can swing in. This is the cheaper answer.",
    specs: [
      { label: "Count", value: "Pair" },
      { label: "Lining", value: "Fleece" },
      { label: "Fit", value: "One size, over gloves" },
      { label: "Season", value: "Winter" },
    ],
    suits: "Winter golf, and anyone who walks and loses feeling by the fourth.",
  },

  "srixon-junior-glove": {
    tagline: "A real glove, small",
    description:
      "Built the same way as the adult All Weather and cut to fit a child's hand. It is not a novelty, and a junior who is gripping the club properly should have one that fits.",
    headline: "Not a toy with a logo",
    marks: ["Junior sizes", "All weather", "Left or right"],
    notes: [
      "The same construction as the adult glove, scaled down.",
      "Junior small through large. Bring them in and we will measure.",
      "A glove that is too big teaches a bad grip. That is the whole reason to buy the right size.",
      "Cold wash. Juniors are hard on gloves.",
    ],
    counter:
      "Half the juniors we see are playing in a men's small. It is the first thing we fix and it is free to fix.",
    specs: [
      { label: "Sizes", value: "Junior S to L" },
      { label: "Material", value: "Synthetic and leather" },
      { label: "Hand", value: "Left or right" },
      { label: "Care", value: "Cold wash, air dry" },
    ],
    suits: "Juniors who have started gripping the club properly.",
  },

  "callaway-tour-authentic-performance-pro-hat": {
    tagline: "What the staff players wear",
    description:
      "The tour issue cap, sold as it is made rather than with a player's name added. Structured front, technical crown, and it holds a shape through a wet round.",
    headline: "Tour issue, nothing added",
    marks: ["Structured", "Technical fabric", "Adjustable"],
    notes: [
      "Structured front. It keeps its shape when it is soaked.",
      "Technical crown, so it dries on the walk in rather than on a radiator.",
      "Adjustable strap, which gives a finer fit than a snapback.",
      "Cold water only, and never a machine.",
    ],
    counter:
      "A structured cap in the rain is the difference between a cap and a wet cloth on your head.",
    specs: [
      { label: "Fit", value: "One size, adjustable" },
      { label: "Crown", value: "Structured" },
      { label: "Fabric", value: "Technical, quick dry" },
      { label: "Care", value: "Cold water, air dry" },
    ],
    suits: "Anyone who wants the cap the tour staff actually wear.",
  },

  "callaway-liquid-metal-hat": {
    tagline: "It catches light",
    description:
      "A navy structured cap with a metallic badge rather than embroidery. It is the loudest thing we stock in headwear and it is still fairly quiet.",
    headline: "The badge does the work",
    marks: ["Structured", "Metal badge", "Adjustable"],
    notes: [
      "The badge is metal, not thread. It catches light and it does not fray.",
      "Navy, so it shows nothing and goes with everything you own.",
      "Structured front. It holds a shape through rain.",
      "Adjustable strap.",
    ],
    counter:
      "Navy is the cap colour that survives a season. White looks better for a month and worse for eleven.",
    specs: [
      { label: "Fit", value: "One size, adjustable" },
      { label: "Crown", value: "Structured" },
      { label: "Detail", value: "Metal badge" },
      { label: "Colour", value: "Navy" },
    ],
    suits: "Anyone who wants one detail on an otherwise plain cap.",
  },

  "callaway-stretch-fit-fitted-hat": {
    tagline: "No strap at the back",
    description:
      "A fitted cap in two sizes, which means no plastic strap sitting on the back of your head. If adjustable caps have never quite sat right on you, this is the reason why.",
    headline: "For heads that adjustable caps do not fit",
    marks: ["Fitted", "Two sizes", "Structured"],
    notes: [
      "Two sizes, S/M and L/XL. Try both, the difference is obvious.",
      "No strap, so nothing presses on the back of your head.",
      "It will loosen slightly with wear, so take the tighter of the two.",
      "Cold water, air dry, and it will keep its shape.",
    ],
    counter:
      "If you have been wearing adjustable caps loose because the strap digs in, the problem was never the strap setting.",
    specs: [
      { label: "Fit", value: "Fitted, S/M and L/XL" },
      { label: "Crown", value: "Structured" },
      { label: "Strap", value: "None" },
      { label: "Colour", value: "White" },
    ],
    suits: "Anyone who has never found an adjustable cap that sits right.",
  },

  "callaway-carlsbad-trucker-hat": {
    tagline: "Mesh back, flat front",
    description:
      "A trucker, which on a hot day moves more air than any technical fabric does. It is also the cap most likely to be worn somewhere other than a golf course.",
    headline: "It moves more air than fabric does",
    marks: ["Mesh back", "Flat brim", "Snapback"],
    notes: [
      "Mesh back. Nothing keeps a head cooler and no fabric claim beats a hole.",
      "Flat brim, structured front.",
      "Snapback rather than adjustable, so the fit steps rather than slides.",
      "Cold water on the front panel only. The mesh does not need washing.",
    ],
    counter:
      "On a hot day a mesh back beats every technical fabric in the shop, and it costs less.",
    specs: [
      { label: "Fit", value: "One size, snapback" },
      { label: "Back", value: "Mesh" },
      { label: "Brim", value: "Flat" },
      { label: "Care", value: "Spot clean" },
    ],
    suits: "Hot rounds, and anyone who wears the cap after the round too.",
  },

  "callaway-bucket-hat": {
    tagline: "A brim all the way round",
    description:
      "The only thing in this cabinet that covers the back of your neck, which is where people actually burn. It looks like a bucket hat because it is one.",
    headline: "It covers the back of your neck",
    marks: ["Full brim", "Two sizes", "Packable"],
    notes: [
      "Full brim. A cap leaves your neck and your ears exposed and always has.",
      "Two sizes. Try both, the fit matters more on a bucket than on a cap.",
      "Packs flat into a bag pocket and comes out without a crease.",
      "Cold water, air dry.",
    ],
    counter:
      "Every burnt neck we see in August belongs to somebody wearing a cap. That is not a coincidence.",
    specs: [
      { label: "Fit", value: "S/M and L/XL" },
      { label: "Brim", value: "Full, all round" },
      { label: "Packs", value: "Yes" },
      { label: "Care", value: "Cold water, air dry" },
    ],
    suits: "Summer rounds, fair skin, and anyone who has burned once.",
  },

  "callaway-liquid-metal-visor": {
    tagline: "Shade, no crown",
    description:
      "All the brim and none of the heat trapped on top. A visor is either exactly what you want or exactly what you do not, and there is very little in between.",
    headline: "Shade without the heat",
    marks: ["Visor", "Metal badge", "Adjustable"],
    notes: [
      "No crown, so nothing holds heat on top of your head.",
      "No cover either. If you are thin on top, buy the cap.",
      "Metal badge rather than embroidery.",
      "Adjustable strap. Cold water only.",
    ],
    counter:
      "A visor is the coolest thing you can wear and the worst thing for sunburn on your scalp. Pick your problem.",
    specs: [
      { label: "Fit", value: "One size, adjustable" },
      { label: "Type", value: "Visor" },
      { label: "Detail", value: "Metal badge" },
      { label: "Care", value: "Cold water, air dry" },
    ],
    suits: "Hot weather, and heads that do not need covering.",
  },

  "callaway-heritage-twill-hat": {
    tagline: "Cotton twill, flag and all",
    description:
      "Soft front, cotton twill, and a small flag patch on the side panel that we are not going to pretend is not there. Everything else about it is as plain as headwear gets.",
    headline: "Plain, apart from the one thing",
    marks: ["Cotton twill", "Soft front", "Adjustable"],
    notes: [
      "Cotton twill, which means it will get wet and stay wet. That is the trade for how it feels.",
      "Soft front. It takes the shape of your head rather than holding its own.",
      "A flag patch on the side. That is either fine with you or it is not.",
      "Cold water only. Cotton shrinks in a machine.",
    ],
    counter:
      "This is the cap people buy third and then wear first. Take that for what it is worth.",
    specs: [
      { label: "Fit", value: "One size, adjustable" },
      { label: "Fabric", value: "Cotton twill" },
      { label: "Crown", value: "Unstructured" },
      { label: "Care", value: "Cold water, air dry" },
    ],
    suits: "Anyone who wants a cap rather than a piece of equipment.",
  },

  "srixon-tour-tech-hat": {
    tagline: "Structured and technical",
    description:
      "Srixon's tour cap, navy and plain, with a crown that dries faster than it gets wet. Nothing about it asks for attention, which is most of why we stock it.",
    headline: "It dries on the walk in",
    marks: ["Structured", "Quick dry", "Adjustable"],
    notes: [
      "Technical crown. It sheds water rather than holding it.",
      "Structured front, so it keeps its shape soaked.",
      "Navy, which goes with everything and shows nothing.",
      "Cold water only.",
    ],
    counter:
      "Navy is the cap colour that survives a season. White looks better for a month.",
    specs: [
      { label: "Fit", value: "One size, adjustable" },
      { label: "Crown", value: "Structured" },
      { label: "Fabric", value: "Technical, quick dry" },
      { label: "Care", value: "Cold water, air dry" },
    ],
    suits: "Anyone who wants a cap to disappear and just work.",
  },

  "srixon-genuine-tour-hat": {
    tagline: "As it leaves the truck",
    description:
      "The cap Srixon's tour staff are issued, sold unchanged. Black, structured, and marked exactly the way the ones on television are marked.",
    headline: "Unchanged from tour issue",
    marks: ["Tour issue", "Structured", "Adjustable"],
    notes: [
      "Tour issue specification, not a retail version of it.",
      "Structured front, technical crown.",
      "Black, so it holds heat in July and hides everything else.",
      "Cold water only, and never a machine.",
    ],
    counter:
      "There is usually a retail version and a tour version and they are not the same cap. This is the tour one.",
    specs: [
      { label: "Fit", value: "One size, adjustable" },
      { label: "Crown", value: "Structured" },
      { label: "Spec", value: "Tour issue" },
      { label: "Care", value: "Cold water, air dry" },
    ],
    suits: "Players who want the same cap as the staff bag on Sunday.",
  },

  "srixon-tour-bucket-hat": {
    tagline: "White, wide, packs flat",
    description:
      "A bucket that folds into a bag pocket and comes out without a crease. White, which is the right colour for a hat whose job is keeping sun off you.",
    headline: "It lives in the bag pocket",
    marks: ["Full brim", "Packable", "Two sizes"],
    notes: [
      "Packs flat and recovers. That is the whole reason to own a second hat.",
      "White reflects, which matters more on a bucket than on a cap.",
      "Two sizes. Fit matters here, a loose bucket blows off.",
      "Cold water, air dry.",
    ],
    counter:
      "Keep it in the bag from May. The day the sun arrives is never the day you packed for it.",
    specs: [
      { label: "Fit", value: "S/M and L/XL" },
      { label: "Brim", value: "Full, all round" },
      { label: "Packs", value: "Yes" },
      { label: "Care", value: "Cold water, air dry" },
    ],
    suits: "Anyone who wants sun cover without carrying a second cap.",
  },

  "cleveland-structured-cap": {
    tagline: "White crown, black script",
    description:
      "Cleveland have not changed this cap much and there has been no reason to. Structured, adjustable, and the script on the front is the one that has been there for years.",
    headline: "It has looked like this for years",
    marks: ["Structured", "Adjustable", "White"],
    notes: [
      "Structured front. It holds its shape wet.",
      "White marks, and after a season it looks like a golf cap should.",
      "Adjustable strap rather than a snapback.",
      "Spot clean. Washing it takes the shape out.",
    ],
    counter:
      "The caps that last are the ones the brand has not redesigned. This is one of them.",
    specs: [
      { label: "Fit", value: "One size, adjustable" },
      { label: "Crown", value: "Structured" },
      { label: "Colour", value: "White" },
      { label: "Care", value: "Spot clean" },
    ],
    suits: "Anyone who buys a cap once and wears it until it dies.",
  },

  "cleveland-bucket-hat": {
    tagline: "Charcoal, not white",
    description:
      "A bucket in a colour that does not look filthy after three rounds. You lose a little heat reflection and you gain a hat you will still wear in August.",
    headline: "It will not look grubby in a month",
    marks: ["Full brim", "Charcoal", "Two sizes"],
    notes: [
      "Charcoal. A white bucket looks worn out faster than a white cap does.",
      "Full brim, so the back of your neck is covered.",
      "Two sizes. Fit matters on a bucket.",
      "Cold water, air dry.",
    ],
    counter:
      "Dark hats are hotter and they last. If you play in Scotland the heat is rarely the problem.",
    specs: [
      { label: "Fit", value: "S/M and L/XL" },
      { label: "Brim", value: "Full, all round" },
      { label: "Colour", value: "Charcoal" },
      { label: "Care", value: "Cold water, air dry" },
    ],
    suits: "Anyone who wants a bucket and does not want to baby it.",
  },

  "cleveland-leather-patch-hat": {
    tagline: "One patch, no embroidery",
    description:
      "A leather patch instead of stitching, which means the front ages rather than frays. Black crown, nothing else on it, and it looks better in year two.",
    headline: "It ages the way leather does",
    marks: ["Leather patch", "Structured", "Adjustable"],
    notes: [
      "The patch is real leather. It darkens and softens with use.",
      "No embroidery anywhere else on the cap.",
      "Structured front, adjustable strap.",
      "Keep it out of the machine. Leather and drums do not agree.",
    ],
    counter:
      "Embroidery frays at the edges after a season. A patch does not, it just gets older.",
    specs: [
      { label: "Fit", value: "One size, adjustable" },
      { label: "Crown", value: "Structured" },
      { label: "Detail", value: "Leather patch" },
      { label: "Care", value: "Spot clean" },
    ],
    suits: "Anyone who prefers things that improve rather than wear out.",
  },

  "cleveland-retro-snapback": {
    tagline: "The old script",
    description:
      "Flat brim, snapback, and the Cleveland script as it was drawn rather than as it has been modernised. There is nothing technical about it and that is the point.",
    headline: "Nothing modern about it",
    marks: ["Flat brim", "Snapback", "Old script"],
    notes: [
      "Flat brim. Curve it yourself if you want it curved.",
      "Snapback, so the fit steps rather than slides.",
      "The old script, large, on a plain black crown.",
      "Cold water on the front panel only.",
    ],
    counter:
      "If you owned a Cleveland wedge in the nineties you already know whether you want this cap.",
    specs: [
      { label: "Fit", value: "One size, snapback" },
      { label: "Brim", value: "Flat" },
      { label: "Crown", value: "Structured" },
      { label: "Care", value: "Spot clean" },
    ],
    suits: "Anyone who remembers the script from the first time.",
  },

  "callaway-premium-driver-headcover": {
    tagline: "Lined, and it goes back on wet",
    description:
      "The test for a driver cover is whether you can get it back on in the rain with cold hands. This one is structured enough to keep its opening when everything else has gone limp.",
    headline: "It goes back on in the rain",
    marks: ["Fits 460cc", "Lined", "Structured"],
    notes: [
      "Structured, so it holds its shape soaked.",
      "Lined, which is what stops the crown marking.",
      "Fits any driver head up to 460cc.",
      "Dry it off the club. Left on, it traps water against the paint.",
    ],
    counter:
      "Most headcovers fail the cold hands test. Try putting one on with wet fingers before you buy it.",
    specs: [
      { label: "Fits", value: "Up to 460cc" },
      { label: "Build", value: "Structured" },
      { label: "Lining", value: "Soft" },
      { label: "Care", value: "Air dry off the club" },
    ],
    suits: "Anyone who plays in weather and has wrestled a soaked cover.",
  },

  "callaway-premium-fairway-headcover": {
    tagline: "Marked F",
    description:
      "A fairway cover with a letter on it rather than a number, which sounds small until you have pulled the three wood on a hole that needed the five. One cover, all of them.",
    headline: "Stop pulling the wrong one",
    marks: ["Fits 3, 5 and 7", "Lined", "Marked"],
    notes: [
      "Marked so you can tell it apart from the driver and hybrid covers at a glance.",
      "Fits a 3, 5 or 7 wood head.",
      "Lined, which keeps the crown unmarked.",
      "Air dry off the club.",
    ],
    counter:
      "People pull the wrong wood more often than they admit. A marked cover fixes it for the price of a sleeve.",
    specs: [
      { label: "Fits", value: "3, 5 and 7 wood" },
      { label: "Build", value: "Structured" },
      { label: "Lining", value: "Soft" },
      { label: "Care", value: "Air dry off the club" },
    ],
    suits: "Anyone carrying more than one fairway wood.",
  },

  "callaway-premium-hybrid-headcover": {
    tagline: "The club that rattles",
    description:
      "Hybrids sit low and short in the bag, which means they knock against the irons all the way round. Nobody covers them and nearly everybody should.",
    headline: "Nobody covers the hybrid",
    marks: ["Most hybrids", "Lined", "Marked"],
    notes: [
      "Fits most hybrid heads, from 17 to 30 degrees.",
      "Marked, so it does not get mixed up with the fairway cover.",
      "Lined. Hybrid crowns chip as easily as driver crowns.",
      "Air dry off the club.",
    ],
    counter:
      "Look at a three year old hybrid and a three year old driver from the same bag. The hybrid always looks worse.",
    specs: [
      { label: "Fits", value: "Most hybrid heads" },
      { label: "Build", value: "Structured" },
      { label: "Lining", value: "Soft" },
      { label: "Care", value: "Air dry off the club" },
    ],
    suits: "Anyone carrying a hybrid without a cover, which is most people.",
  },

  "callaway-magnetic-iron-headcovers": {
    tagline: "Ten covers",
    description:
      "Iron covers are a nuisance right up until you sell a set and find out what unmarked faces are worth. Magnetic, so they come off with one hand and go back the same way.",
    headline: "Your irons stop chewing each other",
    marks: ["Set of 10", "Magnetic", "Numbered"],
    notes: [
      "Ten covers, numbered, which covers a full set with the wedges.",
      "Magnetic. Velcro iron covers are the reason people give up on iron covers.",
      "They add about half a kilo to the bag. That is the cost.",
      "They pay for themselves the day you trade the set in.",
    ],
    counter:
      "We value a lot of trade in sets across this counter. Covered irons are worth real money more than uncovered ones.",
    specs: [
      { label: "Count", value: "Set of 10" },
      { label: "Closure", value: "Magnetic" },
      { label: "Marking", value: "Numbered" },
      { label: "Weight", value: "About 0.5 kg per set" },
    ],
    suits: "Anyone who plans to sell the set on, and anyone who hates the rattle.",
  },

  "callaway-vintage-driver-headcover": {
    tagline: "Barrel shaped, striped",
    description:
      "A barrel cover cut the way headcovers were cut before everything went aerodynamic. It looks older than anything in your bag and it will keep looking that way.",
    headline: "Older looking than the club under it",
    marks: ["Fits 460cc", "Barrel shape", "Striped"],
    notes: [
      "Barrel shape, which slides on rather than pulling over.",
      "Fits a driver head up to 460cc.",
      "Striped. If you want plain, buy the Premium.",
      "Spot clean only.",
    ],
    counter:
      "Nobody needs a striped headcover. That has never stopped it being the one people pick up.",
    specs: [
      { label: "Fits", value: "Up to 460cc" },
      { label: "Shape", value: "Barrel" },
      { label: "Lining", value: "Soft" },
      { label: "Care", value: "Spot clean" },
    ],
    suits: "Anyone whose bag is already plain enough to take one loud thing.",
  },

  "callaway-tour-fold-towel": {
    tagline: "Two faces, two jobs",
    description:
      "Waffle weave on one side for the grooves and smooth on the other for the face and the ball. It is the only towel here that does two different things properly.",
    headline: "One side scrubs, one side dries",
    marks: ["Two faces", "Waffle weave", "Clip"],
    notes: [
      "Waffle side lifts mud out of grooves. Smooth side dries a face.",
      "Bigger than the trifold, and it hangs rather than folds.",
      "Cold wash, no fabric softener, or it stops absorbing.",
      "The clip is a carabiner.",
    ],
    counter:
      "A clean groove is worth more spin than any wedge on this wall, and it costs nothing but a towel.",
    specs: [
      { label: "Faces", value: "Waffle and smooth" },
      { label: "Clip", value: "Carabiner" },
      { label: "Size", value: "Full length" },
      { label: "Care", value: "Cold wash, no softener" },
    ],
    suits: "Anyone who actually cleans a club between shots.",
  },

  "callaway-trifold-towel": {
    tagline: "Three panels",
    description:
      "One panel wet, two dry, folded so you always know which is which. The simplest solution to the oldest problem on the bag and still the one most people buy.",
    headline: "One wet, two dry",
    marks: ["Cotton", "Tri-fold", "Clip"],
    notes: [
      "Wet one panel on the first tee and keep the other two dry.",
      "Cotton lifts mud. Microfibre pushes it around.",
      "Carabiner clip, so it comes off without threading.",
      "Cold wash, no softener.",
    ],
    counter:
      "Every towel we sell works. The trifold is the one people still have three years later.",
    specs: [
      { label: "Fabric", value: "Cotton" },
      { label: "Fold", value: "Tri-fold" },
      { label: "Clip", value: "Carabiner" },
      { label: "Care", value: "Cold wash, no softener" },
    ],
    suits: "Anyone who plays in weather, so everyone here.",
  },

  "callaway-players-towel": {
    tagline: "Bigger than it looks",
    description:
      "A microfibre towel that holds more water than its size suggests, which matters on a wet day when a cotton towel has already given up. It dries faster too.",
    headline: "It holds more than it should",
    marks: ["Microfibre", "High absorbency", "Clip"],
    notes: [
      "Microfibre, so it absorbs more and dries quicker than cotton.",
      "It will not lift dried mud as well as a cotton waffle does.",
      "Good wet weather towel, less good for a dusty summer round.",
      "Cold wash, no softener, tumble on low if you must.",
    ],
    counter:
      "Carry cotton in summer and microfibre in winter. Or carry both, they weigh nothing.",
    specs: [
      { label: "Fabric", value: "Microfibre" },
      { label: "Clip", value: "Carabiner" },
      { label: "Best for", value: "Wet rounds" },
      { label: "Care", value: "Cold wash, no softener" },
    ],
    suits: "Winter and wet weather golf, where cotton stops working by the ninth.",
  },

  "odyssey-microfibre-towel": {
    tagline: "For the putter and the ball",
    description:
      "A small, soft towel that never touches a muddy sole. It lives on the putter end of the bag and it keeps the face and the ball clean, which is all it is for.",
    headline: "It never touches a muddy sole",
    marks: ["Microfibre", "Small", "Clip"],
    notes: [
      "Soft microfibre, so it will not scratch a putter insert.",
      "Small. It is not a second bag towel and it is not meant to be.",
      "Keep it clean, which is the whole point of having a second towel.",
      "Cold wash, no softener.",
    ],
    counter:
      "The towel you clean your wedges with is not the towel to wipe a putter face. Two towels, one bag.",
    specs: [
      { label: "Fabric", value: "Microfibre" },
      { label: "Use", value: "Putter and ball" },
      { label: "Clip", value: "Carabiner" },
      { label: "Care", value: "Cold wash, no softener" },
    ],
    suits: "Anyone with an insert putter and a bag towel that is always filthy.",
  },

  "odyssey-tempest-blade-headcover": {
    tagline: "Cut for a blade",
    description:
      "Blade covers and mallet covers are not interchangeable and half the covers people own are the wrong one. This is cut for a blade and it stays on a blade.",
    headline: "Blades only",
    marks: ["Blade putters", "Magnetic", "Lined"],
    notes: [
      "Blades only. On a mallet it will not close and on a blade a mallet cover flaps.",
      "Magnetic closure, so it goes back on one handed.",
      "Lined. Putter faces mark more easily than anything else in the bag.",
      "Bring the putter if you are not certain which shape you have.",
    ],
    counter:
      "Bring the putter in. We see more badly fitting putter covers than badly fitting shoes.",
    specs: [
      { label: "Fits", value: "Blade putters" },
      { label: "Closure", value: "Magnetic" },
      { label: "Lining", value: "Soft" },
      { label: "Care", value: "Spot clean" },
    ],
    suits: "Blade players whose current cover comes off in the bag.",
  },

  "odyssey-tempest-mallet-headcover": {
    tagline: "Cut deep for a mallet",
    description:
      "Modern mallets are wide and deep and a standard cover gives up by the third green. This one is cut for the shapes people actually putt with now.",
    headline: "It stays on past the third",
    marks: ["Mallet putters", "Magnetic", "Lined"],
    notes: [
      "Cut for modern mallet shapes, including the wide ones.",
      "Magnetic closure, one handed on and off.",
      "Lined, so the face stays unmarked.",
      "If your current cover keeps falling off, this is why.",
    ],
    counter:
      "A cover that falls off is worse than no cover, because you stop looking for it.",
    specs: [
      { label: "Fits", value: "Mallet putters" },
      { label: "Closure", value: "Magnetic" },
      { label: "Lining", value: "Soft" },
      { label: "Care", value: "Spot clean" },
    ],
    suits: "Mallet players, which now means most players.",
  },

  "callaway-fairway-14-stand-bag": {
    tagline: "Fourteen slots, and legs",
    description:
      "Full separation on a bag you carry, which is rarer than it should be because every divider costs weight. Two and a half kilos is the price of never untangling grips again.",
    headline: "Full separation on a carry bag",
    marks: ["2.5 kg", "14 way top", "Double strap"],
    notes: [
      "Fourteen slots. Every club has its own and nothing rubs.",
      "Two point five kilos, which is heavy for a carry bag and light for fourteen ways.",
      "Double strap as standard.",
      "Carry it loaded round the shop before you commit. Half a kilo feels different at the fourteenth.",
    ],
    counter:
      "Fourteen ways or light. You can have one. Anybody selling you both is selling you a compromise.",
    specs: [
      { label: "Weight", value: "2.5 kg empty" },
      { label: "Top", value: "Fourteen way" },
      { label: "Strap", value: "Double, adjustable" },
      { label: "Legs", value: "Stand" },
    ],
    suits: "Walkers who cannot stand grips tangling and will carry the weight for it.",
  },

  "callaway-fairway-c-stand-bag": {
    tagline: "Two kilos, double strap",
    description:
      "The bag we hand people who want one carry bag and no argument about it. Two kilos, a proper double strap and four ways, which is the specification most walkers actually need.",
    headline: "Light enough to mean it",
    marks: ["2.0 kg", "4 way top", "Double strap"],
    notes: [
      "Two kilos empty, which is the number worth comparing across this rack.",
      "Four way top. Enough separation for a full set without fourteen dividers of weight.",
      "Double strap, adjusted here before it leaves.",
      "This and the Ping Hoofer sit side by side for a reason. Carry both.",
    ],
    counter:
      "Carry this and the Hoofer round the shop loaded. Whichever one you forget about is the one to buy.",
    specs: [
      { label: "Weight", value: "2.0 kg empty" },
      { label: "Top", value: "Four way" },
      { label: "Strap", value: "Double, adjustable" },
      { label: "Legs", value: "Stand" },
    ],
    suits: "Walkers who want one bag and want it to be the obvious choice.",
  },

  "callaway-hyperlite-zero-stand-bag": {
    tagline: "The lightest thing with legs",
    description:
      "One point four kilos, which is less than the water you will carry in it. Everything that could be cut has been, and what is left is a bag for people who count grams.",
    headline: "Everything that could be cut has been",
    marks: ["1.4 kg", "4 way top", "Double strap"],
    notes: [
      "One point four kilos empty. Nothing else in here with legs is close.",
      "Pockets are minimal. That is where the weight went.",
      "Four way top. Fourteen slots at this weight does not exist.",
      "If you carry a full waterproof set and a flask, buy a heavier bag.",
    ],
    counter:
      "Weigh what you put in a bag before you buy a light one. Most people carry two kilos of things they never use.",
    specs: [
      { label: "Weight", value: "1.4 kg empty" },
      { label: "Top", value: "Four way" },
      { label: "Strap", value: "Double" },
      { label: "Legs", value: "Stand" },
    ],
    suits: "Walkers who count grams and carry very little.",
  },

  "callaway-org-14-cart-bag": {
    tagline: "Full length dividers",
    description:
      "Fourteen slots that run the whole depth of the bag, so grips are separated at the bottom as well as the top. That is what stops the tangle, and most cart bags do not do it.",
    headline: "Separated at the bottom, not just the top",
    marks: ["14 way", "Full length", "Cart bag"],
    notes: [
      "Full length dividers. A fourteen way top with an open base still tangles.",
      "Cart bag, so the pockets face forward on a trolley.",
      "Heavier than any stand bag here, and it is not meant to be carried.",
      "Check it fits your trolley base. Bring the trolley if you are unsure.",
    ],
    counter:
      "Fourteen ways at the top and an open bottom is the most common trick in bags. Reach in and feel for the dividers.",
    specs: [
      { label: "Top", value: "Fourteen way" },
      { label: "Dividers", value: "Full length" },
      { label: "Type", value: "Cart" },
      { label: "Pockets", value: "Forward facing" },
    ],
    suits: "Trolley and buggy players who want every club separated.",
  },

  "callaway-chase-stand-bag": {
    tagline: "Plain black, four pockets",
    description:
      "Nothing on it you will not use, which is a harder specification to meet than it sounds. Most bags this price are carrying two pockets nobody opens.",
    headline: "Nothing on it you will not use",
    marks: ["2.2 kg", "4 way top", "Four pockets"],
    notes: [
      "Four pockets. Count what you actually open on a round, it is rarely more.",
      "Two point two kilos, the middle of our carry bag rack.",
      "Four way top, double strap.",
      "Plain black. It will look the same in three years.",
    ],
    counter:
      "Pockets are where bag weight hides. Ask yourself which ones you opened last round.",
    specs: [
      { label: "Weight", value: "2.2 kg empty" },
      { label: "Top", value: "Four way" },
      { label: "Pockets", value: "Four" },
      { label: "Legs", value: "Stand" },
    ],
    suits: "Walkers who want a bag and not a project.",
  },

  "callaway-par-3-stand-bag": {
    tagline: "Seven clubs, nine holes",
    description:
      "A pencil bag for an evening nine or a par three course. It will not hold a full set and it is not trying to, which is why it weighs what it weighs.",
    headline: "It is not trying to hold fourteen",
    marks: ["1.3 kg", "Seven clubs", "Stand"],
    notes: [
      "Seven clubs comfortably, and that is the honest number.",
      "One point three kilos, so it barely registers on a shoulder.",
      "Legs, which most pencil bags skip.",
      "The right bag for a summer evening and the wrong bag for a medal.",
    ],
    counter:
      "The second bag people buy is usually this one, and they use it more than they expected.",
    specs: [
      { label: "Weight", value: "1.3 kg empty" },
      { label: "Capacity", value: "Seven clubs" },
      { label: "Top", value: "Four way" },
      { label: "Legs", value: "Stand" },
    ],
    suits: "Evening nines, par three courses and practice rounds.",
  },

  "odyssey-shadow-stand-bag": {
    tagline: "Built by Ogio",
    description:
      "Ogio make the harness and Odyssey put their name on the bag, and the harness is the reason to buy it. Straps are the part of a carry bag people notice last and regret first.",
    headline: "Buy it for the harness",
    marks: ["2.4 kg", "Ogio harness", "4 way top"],
    notes: [
      "The strap system is the point. It sits differently on the shoulders to a standard double strap.",
      "Two point four kilos, so it is not a light bag.",
      "Four way top with full separation at the front slot.",
      "Try it loaded. A harness is not something you can judge empty.",
    ],
    counter:
      "Nobody buys a bag for the straps and everybody complains about the straps by August.",
    specs: [
      { label: "Weight", value: "2.4 kg empty" },
      { label: "Harness", value: "Ogio" },
      { label: "Top", value: "Four way" },
      { label: "Legs", value: "Stand" },
    ],
    suits: "Walkers who have had a bag hurt their shoulders and will not repeat it.",
  },

  "callaway-chrome-tour": {
    tagline: "The one that changed the argument",
    description:
      "For twenty years the tour ball conversation had one answer. The Chrome Tour is the reason it now has two, and the number of people who switch after a fitting says the rest.",
    headline: "It gave the question a second answer",
    marks: ["Urethane cover", "Tour spin", "Dozen"],
    notes: [
      "Urethane cover, full tour construction.",
      "Test it against the Pro V1 on the monitor. It is a forty five minute job and it settles it.",
      "Marginally softer feel than the Tour X. That is the choice between them.",
      "Dozen. Buy one before you buy four.",
    ],
    counter:
      "Ball fitting is forty pounds and it is the cheapest change to your scoring we sell. Bring your wedges.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Cover", value: "Urethane" },
      { label: "Spin", value: "Tour level" },
      { label: "Fitting", value: "Forty pounds, forty five minutes" },
    ],
    suits: "Anybody who has played one tour ball for a decade and never tested another.",
  },

  "callaway-chrome-tour-x": {
    tagline: "Firmer, lower spinning",
    description:
      "The Tour X wants speed. Given it, it flights lower and spins less off the long clubs. Without it, it is simply a firmer ball that does nothing for you.",
    headline: "It needs speed to make sense",
    marks: ["Urethane cover", "Lower spin", "Dozen"],
    notes: [
      "Firmer than the Chrome Tour, with less spin off the driver.",
      "Below about ninety five miles an hour you will not compress it properly.",
      "If your driver spin is already low, this is the wrong ball.",
      "We will put both on the monitor. The numbers decide, not the box.",
    ],
    counter:
      "Half the people playing an X ball should be playing the standard one. The monitor sorts it in twenty minutes.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Cover", value: "Urethane" },
      { label: "Spin", value: "Lower than Chrome Tour" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits: "Higher swing speeds that are already spinning the driver too much.",
  },

  "callaway-chrome-soft-triple-track": {
    tagline: "Three lines",
    description:
      "The same ball as the Chrome Soft with an alignment print on it. Whether that helps depends entirely on whether you aim better with a line, and plenty of people do.",
    headline: "The same ball, with a line",
    marks: ["Urethane cover", "Alignment print", "Dozen"],
    notes: [
      "Identical to the Chrome Soft. Only the print is different.",
      "It helps if you aim the ball on the green. It does nothing if you do not.",
      "Three lines rather than one, which some people find easier to square.",
      "Roll ten putts with it and ten without before you commit to a box.",
    ],
    counter:
      "An alignment aid helps or it distracts, and there is no middle. Ten putts on the mat tells you which.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Cover", value: "Urethane" },
      { label: "Print", value: "Triple Track" },
      { label: "Feel", value: "Soft" },
    ],
    suits: "Players who line the ball up on the green and want more to line up with.",
  },

  "callaway-supersoft": {
    tagline: "The one everyone buys",
    description:
      "The best selling ball in Britain, which is usually a warning and here is not. It is soft, it is long for the price, and it does what a seventy percent of golfers actually need.",
    headline: "Popular for the right reason",
    marks: ["Low compression", "Soft feel", "Dozen"],
    notes: [
      "Low compression, so it works at speeds that a tour ball will not.",
      "It will not check from a full wedge. Nothing at this price does.",
      "Half the price of a tour ball, and for a lot of players it scores the same.",
      "Dozen. Two dozen if your course has water.",
    ],
    counter:
      "If you lose more than three balls a round, the ball is not your problem and the tour ball is not the fix.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Compression", value: "Low" },
      { label: "Feel", value: "Soft" },
      { label: "Flight", value: "High and straight" },
    ],
    suits: "Mid to high handicaps, and anybody under about ninety miles an hour.",
  },

  "callaway-supersoft-max": {
    tagline: "Oversized, and legal",
    description:
      "A larger ball, still inside the rules, built to get airborne for players who struggle to. It sits up better in the rough too, which is a benefit nobody markets.",
    headline: "It gets up when you cannot",
    marks: ["Oversized", "Conforming", "Dozen"],
    notes: [
      "Larger than a standard ball and still legal. Check the conforming list if you want to.",
      "Easier to launch, which is the whole design.",
      "It sits up in light rough, which helps more than the launch does.",
      "If you already flight it high, buy the standard Supersoft.",
    ],
    counter:
      "This is a genuine help for slower speeds and does nothing for anybody else. That is a rare thing to be able to say.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Size", value: "Oversized, conforming" },
      { label: "Compression", value: "Low" },
      { label: "Launch", value: "High" },
    ],
    suits: "Slower swing speeds who struggle to get the ball airborne.",
  },

  "callaway-erc-soft": {
    tagline: "Soft, and still long",
    description:
      "Most soft balls give up carry to get the feel. This one gives up less of it than the rest, which puts it in the gap between the Supersoft and a tour ball.",
    headline: "The gap between the two shelves",
    marks: ["Soft feel", "Good carry", "Dozen"],
    notes: [
      "Softer than a tour ball, longer than most soft balls.",
      "Ten pounds more than the Supersoft and ten less than a tour ball. The performance sits there too.",
      "Some greenside check, though not a urethane ball's check.",
      "Alignment print available. Ask if you want it.",
    ],
    counter:
      "There is a real middle shelf in golf balls and almost nobody shops it. This is the middle shelf.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Feel", value: "Soft" },
      { label: "Carry", value: "Long for a soft ball" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits: "Players who want soft feel and are not ready to give up carry for it.",
  },

  "callaway-warbird": {
    tagline: "Long and cheap",
    description:
      "A two piece distance ball priced so that the burn on the seventh does not ruin the round. It will not stop on a green and it has never claimed to.",
    headline: "It does one thing",
    marks: ["Two piece", "Low spin", "Dozen"],
    notes: [
      "Two piece, low spin, long off the tee.",
      "No greenside check at all. That is the price of the price.",
      "Good winter ball. The ground is hard and it releases anyway.",
      "Buy it by the dozen and stop worrying about the water.",
    ],
    counter:
      "There is no shame in a cheap ball. There is some in losing four expensive ones and blaming the equipment.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Build", value: "Two piece" },
      { label: "Spin", value: "Low" },
      { label: "Flight", value: "Long and flat" },
    ],
    suits: "Winter golf, high handicaps and courses that swallow golf balls.",
  },

  "callaway-elyte-driver": {
    tagline: "The standard head",
    description:
      "Neutral shape, high forgiveness, three lofts. It is the head most people leave this shop with and there is nothing dull about being right for most people.",
    headline: "Right for most people",
    marks: ["Neutral shape", "Three lofts", "Adjustable hosel"],
    notes: [
      "Three lofts. More loft fixes more slices than anybody wants to hear.",
      "Adjustable hosel, set here so you never need to touch it.",
      "Neutral. There is no draw bias hidden in this head.",
      "Shaft first, head second. That is the order that matters.",
    ],
    counter:
      "Everybody asks for the longest driver. The longest one you own is the one you can find afterwards.",
    specs: [
      { label: "Loft", value: "9, 10.5 and 12 degrees" },
      { label: "Hosel", value: "Adjustable, set here" },
      { label: "Shape", value: "Neutral" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits: "Nearly everybody. Start here and let the monitor move you off it.",
  },

  "callaway-elyte-triple-diamond-driver": {
    tagline: "Smaller and lower spinning",
    description:
      "A compact head with the spin taken out of it, built for players who already deliver it well and are losing yards to spin rather than to strike. It punishes a miss.",
    headline: "It punishes a miss",
    marks: ["Compact head", "Low spin", "Adjustable hosel"],
    notes: [
      "Smaller footprint than the standard Elyte, and it looks it at address.",
      "Lower spinning. If your driver spin is already low this makes it worse.",
      "Less forgiving off the toe. That is not a flaw, it is the specification.",
      "We will say no to this head more often than we sell it.",
    ],
    counter:
      "If you are not finding the middle four times in five, this head will cost you yards, not gain them.",
    specs: [
      { label: "Loft", value: "8, 9 and 10.5 degrees" },
      { label: "Head", value: "Compact, low spin" },
      { label: "Hosel", value: "Adjustable, set here" },
      { label: "Fitting", value: "Required, not optional" },
    ],
    suits: "High speed players losing distance to spin, and nobody else.",
  },

  "callaway-elyte-fairway": {
    tagline: "Shallow, and usable",
    description:
      "Most fairway woods get hit off a tee and never off the turf. This one sits low enough behind the ball to work from the deck, which is the only reason a fairway wood earns a slot.",
    headline: "It works off the deck",
    marks: ["Shallow face", "Three lofts", "Low profile"],
    notes: [
      "Three lofts. The 5 wood leaves this shop more often than the 3 and that is not an accident.",
      "Hit it off the turf in the bay. If it only works off a peg it is a second driver.",
      "The 7 wood fills the yardage most players cannot fill with a long iron.",
      "Standard shaft length is long for a lot of people. We measure.",
    ],
    counter:
      "If your 3 wood only ever comes out on a tee, you are carrying fourteen clubs and playing thirteen.",
    specs: [
      { label: "Lofts", value: "3, 5 and 7 wood" },
      { label: "Face", value: "Shallow" },
      { label: "Use", value: "Off the deck" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits: "Players who need a club that works from the fairway, not just from a peg.",
  },

  "callaway-elyte-hybrid": {
    tagline: "Four lofts",
    description:
      "Hybrids are bought by number and they should be bought by yardage. Four lofts here, and the right one is whichever fills the gap your long irons have left.",
    headline: "Buy the gap, not the number",
    marks: ["Four lofts", "Iron length", "Adjustable"],
    notes: [
      "Eighteen to twenty seven degrees. Bring the long iron you are replacing.",
      "Set at iron length, so lie angle matters and we set it on the bench.",
      "If your hybrid goes left, it is usually shape and aim, not swing.",
      "Aim it at a target before you hit anything.",
    ],
    counter:
      "Nobody knows their hybrid yardage. Everybody knows their five iron yardage. Start from the one you know.",
    specs: [
      { label: "Lofts", value: "18 to 27 degrees" },
      { label: "Length", value: "Iron length" },
      { label: "Lie", value: "Set on the bench" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits: "Anyone with a gap between the longest iron they hit and their fairway wood.",
  },

  "callaway-apex-ai200-irons": {
    tagline: "Distance that looks right",
    description:
      "A players distance iron with a top line that will not put a good player off. You get the extra carry and you do not have to look down at a shovel to get it.",
    headline: "The carry without the look",
    marks: ["Forged face", "Thin top line", "4 to PW"],
    notes: [
      "Seven clubs, 4 iron to pitching wedge.",
      "Stronger lofts than a traditional set. Check the gap to your wedges before you commit.",
      "Compare it to the Apex CB back to back. Six shots each settles it.",
      "Lie angle set on the bench before it goes in the bag, at no extra cost.",
    ],
    counter:
      "Strong lofts move the problem to your wedges. We will look at the whole set, not just the seven iron.",
    specs: [
      { label: "Set", value: "7 clubs, 4 to PW" },
      { label: "Face", value: "Forged" },
      { label: "Lofts", value: "Stronger than traditional" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits: "Players who want another club of carry and will not look at a thick top line.",
  },

  "callaway-apex-cb-irons": {
    tagline: "Forged cavity back",
    description:
      "Traditional lofts, a compact head and a forged face. It gives you nothing you did not ask for, which is exactly what the people who buy it want from an iron.",
    headline: "No help you did not ask for",
    marks: ["Forged", "Compact head", "Traditional lofts"],
    notes: [
      "Seven clubs, 4 iron to pitching wedge, steel as standard.",
      "Traditional lofts, so your gapping stays where it is.",
      "Not a forgiving iron. We will tell you that before you hit it, not after.",
      "Shaft matters more here than in any distance iron. Budget the time.",
    ],
    counter:
      "If you are striking it well this iron rewards it. If you are not, it will tell you every hole.",
    specs: [
      { label: "Set", value: "7 clubs, 4 to PW" },
      { label: "Build", value: "Forged cavity back" },
      { label: "Lofts", value: "Traditional" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits: "Low handicaps, and anyone who has outgrown help they no longer need.",
  },

  "callaway-opus-wedge": {
    tagline: "Four grinds",
    description:
      "Enough sole options to match a wedge to your turf and your attack angle, which is the single most overlooked fitting in golf. We will narrow it to two in ten minutes.",
    headline: "One of these four is yours",
    marks: ["Four grinds", "48 to 60 degrees", "Chrome or black"],
    notes: [
      "Four grinds. We narrow it to two in the bay and you pick from there.",
      "Lofts 48 to 60. Gap from your set pitching wedge upward, never downward.",
      "A grind that works on links sand does not work on soft parkland.",
      "Chrome or black. Both wear with use and that is normal.",
    ],
    counter:
      "Nobody walks in asking about grind. Everybody who has been fitted for one asks about it the next time.",
    specs: [
      { label: "Loft", value: "48 to 60 degrees" },
      { label: "Grinds", value: "Four" },
      { label: "Finish", value: "Chrome or black" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits: "Anyone who plays the same turf most weeks and has never matched a sole to it.",
  },

  "callaway-jaws-raw-wedge": {
    tagline: "It rusts on purpose",
    description:
      "An unplated face that oxidises in a few weeks and holds spin better for it. It will look terrible by August and it will still be checking, which is the entire deal.",
    headline: "It will look terrible and work better",
    marks: ["Raw face", "50 to 60 degrees", "Full groove"],
    notes: [
      "The face rusts. That is the design, not a fault, and it will not spread to the shaft.",
      "More spin in the wet than a plated face, which is where it matters here.",
      "It looks used within a month. Some people cannot live with that.",
      "Clean the grooves. A rusty face with mud in it spins less than a clean plated one.",
    ],
    counter:
      "If a rusting wedge is going to bother you in April, buy the Opus in chrome today and save the argument.",
    specs: [
      { label: "Loft", value: "50 to 60 degrees" },
      { label: "Face", value: "Raw, unplated" },
      { label: "Spin", value: "Higher in the wet" },
      { label: "Fitting", value: "Recommended" },
    ],
    suits: "Players who want spin and do not mind the club looking its age.",
  },

  "callaway-quantum-max-driver": {
    tagline: "The forgiving head",
    description:
      "The driver we hand people who have just told us they hit it everywhere. Forward and straight beats long and lost on every card you will ever sign, and this is the head built around that.",
    headline: "Off centre still finds the short grass",
    marks: ["High forgiveness", "Adjustable hosel", "Fit first"],
    notes: [
      "Adjustable hosel, set here on the bench so you never have to touch it.",
      "More loft fixes more slices than anybody wants to hear. We will suggest it.",
      "Shaft first, head second. That order is the whole of driver fitting.",
      "We will show you dispersion, not just carry. That is the number costing you shots.",
    ],
    counter:
      "Everybody asks for the longest driver. The longest one you own is the one you can find afterwards.",
    specs: [
      { label: "Spec", value: "Adjustable hosel" },
      { label: "Head", value: "High forgiveness" },
      { label: "Fitting", value: "Recommended" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Anyone whose driver misses are costing them holes, which is nearly everybody.",
  },

  "callaway-paradym-ai-smoke-max-driver": {
    tagline: "Last season, same numbers",
    description:
      "A driver does not get worse because a new one arrives. This one sat at the front of the bay for a year, it still puts up the numbers it put up then, and it now costs less than the head beside it.",
    headline: "It did not get slower when the new one landed",
    marks: ["Adjustable hosel", "Previous season", "Fit first"],
    notes: [
      "Previous season, which is most of the reason it is priced where it is.",
      "Put it on the monitor next to this year's head. Let the numbers argue.",
      "Adjustable hosel, set on the bench before it leaves.",
      "If the two are within a yard of each other, buy this one and spend the difference on a fitting.",
    ],
    counter:
      "We sell more last season drivers than new ones to people who have seen both on a screen.",
    specs: [
      { label: "Spec", value: "Adjustable hosel" },
      { label: "Season", value: "Previous" },
      { label: "Fitting", value: "Recommended" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Anyone who would rather spend the difference on being fitted properly.",
  },

  "srixon-zxi-max-driver": {
    tagline: "Quiet, and a shape you can look at",
    description:
      "Srixon sell fewer drivers than the big two and the people who own one tend to keep it. The MAX is the forgiving head in that line, and the sound at impact is the thing owners mention first.",
    headline: "The one that does not shout",
    marks: ["High forgiveness", "Muted at impact", "Fit first"],
    notes: [
      "Sound is not a gimmick. A driver that annoys you at impact is one you will not swing freely.",
      "The MAX is the forgiving head. The LS is lower spinning and asks more of you.",
      "Test it against the Quantum Max back to back. They suit different players and both are here.",
      "Adjustable hosel, set on the bench.",
    ],
    counter:
      "Half of what people call feel in a driver is sound. Hit two with your eyes shut and you will hear it.",
    specs: [
      { label: "Spec", value: "Adjustable hosel" },
      { label: "Head", value: "High forgiveness" },
      { label: "Fitting", value: "Recommended" },
      { label: "Brand", value: "Srixon" },
    ],
    suits: "Players who already find the fairway and want the sound to stop bothering them.",
  },

  "callaway-quantum-max-fairway-woods": {
    tagline: "Off the deck, not just the tee",
    description:
      "Most fairway woods get bought to be hit off a peg and then never come out on the deck. The forgiving head in this line sits low enough behind the ball that it works from the turf, which is the only reason to carry one.",
    headline: "Easier off the deck than it looks",
    marks: ["Shallow face", "3, 5 and 7 wood", "Fit first"],
    notes: [
      "Hit it off the turf in the bay. If it only works off a tee it is a second driver.",
      "The 5 wood leaves this shop more often than the 3, and that is not an accident.",
      "The 7 wood fills the yardage most players cannot fill with a long iron.",
      "Standard shaft length is long for a lot of people. We measure.",
    ],
    counter:
      "If your 3 wood only ever comes out on a tee, you are carrying fourteen clubs and playing thirteen.",
    specs: [
      { label: "Spec", value: "3, 5 and 7 wood" },
      { label: "Use", value: "Off the deck" },
      { label: "Fitting", value: "Recommended" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Players who need a club that works from the fairway, not just from a peg.",
  },

  "callaway-apex-utility-woods": {
    tagline: "Between a wood and a long iron",
    description:
      "Smaller than a fairway wood, bigger than a driving iron, and built for the shot that has to start low and stay under a wind. It is a specialist, and we will tell you if you do not need one.",
    headline: "For the shot that has to stay low",
    marks: ["Compact head", "Lower flight", "Fit first"],
    notes: [
      "Lower flighted than a fairway wood, which is the whole point of it.",
      "It is not a forgiving club. It is a club for a shot you have in mind.",
      "If you cannot name the shot you want it for, buy the fairway wood.",
      "Set on the bench for lie and length before it goes in the bag.",
    ],
    counter:
      "A utility is the club people buy because a tour player has one. Ask yourself which hole you would hit it on.",
    specs: [
      { label: "Spec", value: "Compact head" },
      { label: "Flight", value: "Lower" },
      { label: "Fitting", value: "Recommended" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Better players with a wind to play into and a shot already in mind.",
  },

  "callaway-elyte-fairway-woods": {
    tagline: "The standard head",
    description:
      "Neutral shape, shallow face, three lofts. It is the fairway wood most people leave this shop with, and there is nothing dull about being right for most people.",
    headline: "Right for most people",
    marks: ["Neutral shape", "3, 5 and 7 wood", "Fit first"],
    notes: [
      "Neutral. There is no draw bias hidden in this head.",
      "Three lofts. Pick by the gap in your bag, not by the number on the sole.",
      "Hit it off the turf before you decide. That is the test.",
      "Shaft length measured here, because standard is long for a lot of people.",
    ],
    counter:
      "Start here and let the monitor move you off it. That is what the monitor is for.",
    specs: [
      { label: "Spec", value: "3, 5 and 7 wood" },
      { label: "Shape", value: "Neutral" },
      { label: "Fitting", value: "Recommended" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Nearly everybody carrying a fairway wood.",
  },

  "callaway-quantum-max-hybrids": {
    tagline: "Buy the gap, not the number",
    description:
      "Half the trouble people have with hybrids is that they buy a number rather than a yardage. Bring the long iron you are replacing and we will tell you which one actually fills the hole in your bag.",
    headline: "Bring the club you are replacing",
    marks: ["Iron length", "High forgiveness", "Fit first"],
    notes: [
      "Set at iron length, so lie angle matters and we set it on the bench.",
      "If your hybrid goes left it is usually head shape and aim, not your swing.",
      "Aim it at a target before you hit anything. What you see at address decides a lot.",
      "Nobody knows their hybrid yardage. Everybody knows their five iron yardage. Start there.",
    ],
    counter:
      "The gap between your longest iron and your fairway wood is usually thirty yards. That is the club you are buying.",
    specs: [
      { label: "Spec", value: "Iron length" },
      { label: "Lie", value: "Set on the bench" },
      { label: "Fitting", value: "Recommended" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Anyone with a hole between the longest iron they hit and their fairway wood.",
  },

  "callaway-apex-utility-irons": {
    tagline: "A driving iron, honestly",
    description:
      "This is an iron, not a hybrid, and it behaves like one. It flights lower, it turns over, and it asks to be struck. Most players who want one want a hybrid and have not hit both.",
    headline: "It asks to be struck",
    marks: ["Iron length", "Lower flight", "Fit first"],
    notes: [
      "Lower flighted and less forgiving than the hybrid it sits beside.",
      "It works into a wind, which is the shot people buy it for.",
      "Hit it and the hybrid back to back. Six shots each usually settles it.",
      "Set for lie and length on the bench.",
    ],
    counter:
      "Most people asking for a driving iron leave with a hybrid, and score better for it. A few do not, and they were right.",
    specs: [
      { label: "Spec", value: "Iron length" },
      { label: "Flight", value: "Lower" },
      { label: "Fitting", value: "Recommended" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Good strikers with wind to play in, and nobody else.",
  },

  "callaway-paradym-ai-smoke-hybrid": {
    tagline: "Last season, same job",
    description:
      "A hybrid does one thing: it fills a gap. This one filled it last year and it fills it now, for less money than the head that replaced it.",
    headline: "The gap has not moved",
    marks: ["Iron length", "Previous season", "Fit first"],
    notes: [
      "Previous season, which is why it costs what it costs.",
      "Pick by the yardage gap, never by the number on the sole.",
      "Set at iron length, so lie angle matters and we set it here.",
      "Bring the club you are replacing and we will measure the gap properly.",
    ],
    counter:
      "Hybrids date slower than drivers. A year old hybrid is a year old hybrid, not an old one.",
    specs: [
      { label: "Spec", value: "Iron length" },
      { label: "Season", value: "Previous" },
      { label: "Fitting", value: "Recommended" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Anyone filling a gap who would rather not pay for this year's paint.",
  },

  "callaway-quantum-max-irons": {
    tagline: "Forgiveness first",
    description:
      "A wider sole and more help than a players iron, for people who would rather find the green than admire the top line. Nothing about that is a compromise unless you are already finding the middle.",
    headline: "The green, not the top line",
    marks: ["7 clubs, 4 to PW", "High forgiveness", "Fit first"],
    notes: [
      "Seven clubs, 4 iron to pitching wedge, steel or graphite.",
      "Stronger lofts than a traditional set, so check the gap to your wedges before you commit.",
      "Lie angle set on the bench before it goes in the bag, at no extra cost.",
      "The shaft matters more here than the head does. Budget the time for it.",
    ],
    counter:
      "Strong lofts move the problem to your wedges. We will look at the whole bag, not just the seven iron.",
    specs: [
      { label: "Set", value: "7 clubs, 4 to PW" },
      { label: "Shaft", value: "Steel or graphite" },
      { label: "Lie", value: "Set on the bench" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Mid to high handicaps who want the miss to still finish on the green.",
  },

  "callaway-apex-ai300-irons": {
    tagline: "Help you can still look at",
    description:
      "The forgiving head in the Apex line. It gives you more than the Ai200 does and asks you to look at slightly more iron for it, which is a trade a lot of players should take and will not.",
    headline: "More help than your pride wants",
    marks: ["7 clubs, 4 to PW", "Forged face", "Fit first"],
    notes: [
      "Seven clubs, 4 iron to pitching wedge.",
      "More forgiving than the Ai200 and a shade thicker behind the ball.",
      "Hit both. Almost everybody guesses wrong about which one suits them.",
      "Lie angle set on the bench, at no extra cost.",
    ],
    counter:
      "Nobody has ever come back and said they wished they had bought the less forgiving iron.",
    specs: [
      { label: "Set", value: "7 clubs, 4 to PW" },
      { label: "Face", value: "Forged" },
      { label: "Lie", value: "Set on the bench" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Players who want a forged face and will take the help that comes with it.",
  },

  "callaway-elyte-x-irons": {
    tagline: "The tighter head in the line",
    description:
      "Smaller, thinner through the top line and less forgiving than the standard Elyte. If you strike it, you get told about it. If you do not, you get told about that too.",
    headline: "It tells you either way",
    marks: ["7 clubs, 4 to PW", "Compact head", "Fit first"],
    notes: [
      "Seven clubs, 4 iron to pitching wedge.",
      "Compact head. Set it down beside the standard Elyte before you decide.",
      "Not a forgiving iron. We will say that before you hit it, not after.",
      "Lie angle set on the bench.",
    ],
    counter:
      "If you are not finding the middle four times in five, this iron will remind you every hole. Some people want that.",
    specs: [
      { label: "Set", value: "7 clubs, 4 to PW" },
      { label: "Head", value: "Compact" },
      { label: "Lie", value: "Set on the bench" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Low handicaps and anyone who has outgrown help they no longer need.",
  },

  "callaway-opus-sp-chrome-wedge": {
    tagline: "Spin first",
    description:
      "The wedge in this line built around the face rather than the finish. Chrome, so it stays looking like a wedge, and ground so that the sole suits the turf you actually play on.",
    headline: "The sole matters more than the loft",
    marks: ["Loft and grind fitted", "Chrome", "Fit first"],
    notes: [
      "Gap it from your set pitching wedge upward, never downward.",
      "A grind that works on links sand does not work on soft parkland.",
      "Chrome wears with use. That is normal and it is not a fault.",
      "Bring your current wedges. Half of fitting one is looking at the three you own.",
    ],
    counter:
      "Nobody walks in asking about grind. Everybody fitted for one asks about it the next time.",
    specs: [
      { label: "Spec", value: "Loft and grind fitted" },
      { label: "Finish", value: "Chrome" },
      { label: "Fitting", value: "Recommended" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Anyone who plays the same turf most weeks and has never matched a sole to it.",
  },

  "callaway-full-toe-sp-wedge": {
    tagline: "Face all the way up",
    description:
      "Grooves right to the top of the toe, for the shots played with the face open. If you never open a wedge, this does nothing for you that a standard head does not.",
    headline: "For the shots played open",
    marks: ["Full face", "Loft and grind fitted", "Fit first"],
    notes: [
      "Full face grooves, which only matter on a shot struck high on the toe.",
      "If you play everything square, buy the standard head and save the money.",
      "Sole grind still matters more than the face does. We start there.",
      "Bring your current wedges so we can gap the whole set.",
    ],
    counter:
      "A full face wedge is a specialist. Show us the shot you want it for and we will tell you whether it helps.",
    specs: [
      { label: "Spec", value: "Loft and grind fitted" },
      { label: "Face", value: "Full toe" },
      { label: "Fitting", value: "Recommended" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Players who open the face around a green and know why they are doing it.",
  },

  "callaway-cb-12-wedge": {
    tagline: "A cavity back wedge",
    description:
      "Most wedges are blades because most wedges are sold to people who strike them well. This one is not, and for a lot of golfers that is the more honest club.",
    headline: "The wedge that matches your irons",
    marks: ["Cavity back", "Loft and grind fitted", "Fit first"],
    notes: [
      "Cavity back, so it behaves more like the irons above it in your bag.",
      "More forgiving on a thin strike, which is the miss most people actually have.",
      "Gap it off your set pitching wedge before you pick lofts.",
      "It will not spin like a tour blade. It will find more greens.",
    ],
    counter:
      "If your irons are forgiving and your wedges are blades, your bag is arguing with itself.",
    specs: [
      { label: "Spec", value: "Loft and grind fitted" },
      { label: "Head", value: "Cavity back" },
      { label: "Fitting", value: "Recommended" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Anyone playing a forgiving iron set who has never questioned their wedges.",
  },

  "cleveland-hb-soft-2-putter-retreve-cb": {
    tagline: "Counterbalanced",
    description:
      "Weight up the grip end, which quietens the hands and slows the stroke down. Whether that helps depends entirely on whether your hands are the problem, and we can tell you that on the mat.",
    headline: "It quietens the hands",
    marks: ["33, 34 and 35 inches", "Counterbalanced", "Fit first"],
    notes: [
      "Counterbalanced, so the head feels lighter and the stroke feels longer.",
      "It suits a stroke that gets handsy under pressure. It does nothing for a stroke that does not.",
      "Length is the most commonly wrong number in golf. Get measured.",
      "Putter fitting is forty five pounds and we do it on the same mat every time.",
    ],
    counter:
      "Roll twenty putts with this and twenty with a standard head. Your hands will tell you before the numbers do.",
    specs: [
      { label: "Length", value: "33, 34 and 35 inches" },
      { label: "Build", value: "Counterbalanced" },
      { label: "Fitting", value: "Recommended" },
      { label: "Brand", value: "Cleveland" },
    ],
    suits: "Players whose hands take over on a four footer.",
  },

  "cleveland-hb-soft-milled-11-putter": {
    tagline: "Milled face",
    description:
      "A milled face rolls differently to an insert, and putting is the one place where a difference that small is worth paying for. Whether you prefer it is a question for the mat, not for a description.",
    headline: "Roll it before you read about it",
    marks: ["33, 34 and 35 inches", "Milled face", "Fit first"],
    notes: [
      "Milled face. Firmer off the putter than an insert, and a different sound.",
      "Neither is better. One of them will suit how you like to feel a putt.",
      "Get measured for length before you argue about the head.",
      "Putter fitting is forty five pounds, on the same mat every time.",
    ],
    counter:
      "Take the sight line away and a lot of people aim better. They had been lining up the line, not the putt.",
    specs: [
      { label: "Length", value: "33, 34 and 35 inches" },
      { label: "Face", value: "Milled" },
      { label: "Fitting", value: "Recommended" },
      { label: "Brand", value: "Cleveland" },
    ],
    suits: "Players who know what they want a putt to feel like off the face.",
  },

  "cleveland-hb-soft-2-putter-model-11-cb": {
    tagline: "A mallet, counterbalanced",
    description:
      "The mallet head in this line with weight up the grip. It is stable through the ball in two different ways at once, which is either exactly what you need or more than you need.",
    headline: "Stable twice over",
    marks: ["33, 34 and 35 inches", "Mallet head", "Fit first"],
    notes: [
      "Mallet head and counterbalanced. Both slow a stroke down.",
      "If you already putt with a quiet stroke, this can be too much of a good thing.",
      "Length first, head second. That order is the whole of putter fitting.",
      "We roll it on the same mat every time so the comparison means something.",
    ],
    counter:
      "Aim it at a target before you hit a putt. What you see at address decides more than the head does.",
    specs: [
      { label: "Length", value: "33, 34 and 35 inches" },
      { label: "Head", value: "Mallet, counterbalanced" },
      { label: "Fitting", value: "Recommended" },
      { label: "Brand", value: "Cleveland" },
    ],
    suits: "Players who miss short putts left and want the head to argue with that.",
  },

  "callaway-chrome-tour-triple-track": {
    tagline: "Three lines",
    description:
      "The Chrome Tour with an alignment print. Whether it helps depends entirely on whether you aim the ball on the green, and plenty of people do without ever having thought about it.",
    headline: "The same ball, with a line",
    marks: ["Dozen", "Alignment print", "Urethane cover"],
    notes: [
      "Identical to the plain Chrome Tour. Only the print is different.",
      "It helps if you aim the ball on the green and it does nothing if you do not.",
      "Three lines rather than one, which some people find easier to square.",
      "Roll ten putts with it and ten without before you commit to a box.",
    ],
    counter:
      "An alignment aid helps or it distracts, and there is no middle. Ten putts on the mat tells you which.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Cover", value: "Urethane" },
      { label: "Print", value: "Triple Track" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Players who line the ball up on the green and want more to line up with.",
  },

  "callaway-chrome-tour-yellow": {
    tagline: "You will find it",
    description:
      "The same tour ball in a colour you can see. In flat Scottish light a white ball in the rough is a two minute search, and half the balls people lose are not lost, they are just not found.",
    headline: "Half the balls people lose are just not found",
    marks: ["Dozen", "High visibility", "Urethane cover"],
    notes: [
      "The same ball as the white Chrome Tour. The colour is the only difference.",
      "Yellow reads against long grass in flat light, which white does not.",
      "One round changes most minds about coloured balls.",
      "If you have never played one, buy a dozen rather than a sleeve. It takes a round to stop noticing.",
    ],
    counter:
      "A colour costs nothing and finds balls. That is the whole argument and it is a good one.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Cover", value: "Urethane" },
      { label: "Colour", value: "Yellow" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Anyone who plays in flat light or long rough, so most people here.",
  },

  "callaway-chrome-tour-triple-track-yellow": {
    tagline: "A line and a colour",
    description:
      "Both at once: the alignment print for the green and the colour for the rough. If you have decided you want each of them, there is no reason to choose.",
    headline: "Both, if you want both",
    marks: ["Dozen", "Alignment print", "High visibility"],
    notes: [
      "The same ball as the plain Chrome Tour underneath all of it.",
      "Yellow for finding it, three lines for aiming it.",
      "If you have not tried either, try one at a time. Two changes at once tells you nothing.",
      "Sold by the dozen, like everything on this shelf.",
    ],
    counter:
      "Change one thing at a time. That is true of balls and it is true of clubs.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Cover", value: "Urethane" },
      { label: "Colour", value: "Yellow" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Players who already know they want the line and the colour.",
  },

  "callaway-chrome-tour-trutrack": {
    tagline: "One line, not three",
    description:
      "A single alignment stripe rather than a set of them. Some players find three lines busy at address, and for those players this is the same ball with less on it.",
    headline: "Less on it",
    marks: ["Dozen", "Single stripe", "Urethane cover"],
    notes: [
      "One stripe rather than the triple print. Same ball underneath.",
      "If Triple Track looks busy to you at address, this is the answer.",
      "Roll ten putts with each. Nobody can pick between them off a shelf.",
      "Sold by the dozen.",
    ],
    counter:
      "Aiming aids are personal in a way nothing else about a golf ball is. Look at both on the mat.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Cover", value: "Urethane" },
      { label: "Print", value: "Single stripe" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Players who want an aiming line without a set of them.",
  },

  "callaway-chrome-tour-trutrack-yellow": {
    tagline: "One line, in yellow",
    description:
      "A single stripe and a colour you can find. It is the quietest of the marked tour balls, which is why it stays on the shelf when the louder ones sell out.",
    headline: "The quiet one on the shelf",
    marks: ["Dozen", "Single stripe", "High visibility"],
    notes: [
      "One stripe, not three, on the yellow cover.",
      "Yellow finds the ball, the stripe aims it, and neither shouts at address.",
      "Same construction as the white Chrome Tour.",
      "Two rounds before you judge it. Ball feel takes that long to settle.",
    ],
    counter:
      "The ball you play on every shot deserves the forty minutes a fitting takes. Almost nobody gives it that.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Cover", value: "Urethane" },
      { label: "Colour", value: "Yellow" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Anyone who wants the colour and finds three lines too much.",
  },

  "callaway-chrome-tour-x-triple-track": {
    tagline: "Firmer, with a line",
    description:
      "The X is the firmer, lower spinning ball in the line, and this is that ball with the alignment print on it. It needs speed to make sense, and without it you are paying for a firmer feel and nothing else.",
    headline: "It needs speed to make sense",
    marks: ["Dozen", "Lower spin", "Alignment print"],
    notes: [
      "Firmer than the standard Chrome Tour, with less spin off the driver.",
      "Below about ninety five miles an hour you will not compress it properly.",
      "If your driver spin is already low, this is the wrong ball on the shelf.",
      "We will put both on the monitor. The numbers decide, not the box.",
    ],
    counter:
      "Half the people playing an X ball should be playing the standard one. The monitor sorts it in twenty minutes.",
    specs: [
      { label: "Count", value: "Dozen" },
      { label: "Cover", value: "Urethane" },
      { label: "Spin", value: "Lower than Chrome Tour" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Higher swing speeds already spinning the driver too much.",
  },

  "callaway-cargo-cart-bag": {
    tagline: "Pockets facing the right way",
    description:
      "A cart bag earns its place by where the pockets sit once it is strapped down. This one puts them forward, which sounds obvious and is not what every bag does.",
    headline: "Pockets where your hand goes",
    marks: ["14 way, full length", "Cart bag", "Callaway"],
    notes: [
      "Full length dividers. A fourteen way top with an open base still tangles.",
      "Pockets face forward, so you can reach them without unstrapping the bag.",
      "It is heavy, and it is not meant to be carried.",
      "Bring the trolley if you are unsure it will sit on the base.",
    ],
    counter:
      "Fourteen ways at the top and an open bottom is the oldest trick in bags. Reach in and feel for the dividers.",
    specs: [
      { label: "Top", value: "Fourteen way" },
      { label: "Dividers", value: "Full length" },
      { label: "Type", value: "Cart" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Trolley and buggy players who want every club separated.",
  },

  "callaway-chase-14-cart-bag": {
    tagline: "Plain, and fourteen ways",
    description:
      "Full separation without the pocket count of a tour bag. It is the cart bag for somebody who wants their clubs apart and does not need somewhere to put a second pair of shoes.",
    headline: "Separation without the rest of it",
    marks: ["14 way, full length", "Cart bag", "Callaway"],
    notes: [
      "Fourteen slots, full length, so nothing rubs on the way round.",
      "Fewer pockets than the bags beside it. Count what you actually open on a round.",
      "Cart bag, so it is not built for a shoulder.",
      "Check it sits on your trolley base before you buy it.",
    ],
    counter:
      "Pockets are where bag weight hides. Ask yourself which ones you opened last round.",
    specs: [
      { label: "Top", value: "Fourteen way" },
      { label: "Dividers", value: "Full length" },
      { label: "Type", value: "Cart" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Trolley players who want their clubs apart and nothing else.",
  },

  "callaway-fairway-stand-bag": {
    tagline: "The middle of the rack",
    description:
      "Light enough to carry for eighteen, built enough to survive a season of it. Most people who walk in with no strong view about bags leave with this one.",
    headline: "For people with no strong view",
    marks: ["Stand bag, 4 way top", "Double strap", "Callaway"],
    notes: [
      "Four way top. Enough separation for a full set without fourteen dividers of weight.",
      "Double strap, adjusted here before it leaves.",
      "Carry it loaded round the shop. Four hours is the test, not four minutes.",
      "Weighed empty on the same scale as everything else on this rack.",
    ],
    counter:
      "Carry this and the Ping Hoofer round the shop loaded. Whichever one you forget about is the one to buy.",
    specs: [
      { label: "Top", value: "Four way" },
      { label: "Strap", value: "Double, adjustable" },
      { label: "Legs", value: "Stand" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Walkers who want one bag and want it to be the obvious choice.",
  },

  "callaway-quantum-fairway-14-stand-bag": {
    tagline: "Fourteen slots, and legs",
    description:
      "Full separation on a bag you carry, which is rarer than it should be because every divider costs weight. You are paying that weight to never untangle grips again.",
    headline: "Full separation on a carry bag",
    marks: ["Stand bag, 4 way top", "Fourteen slots", "Callaway"],
    notes: [
      "Fourteen slots on a carry bag. Every club has its own and nothing rubs.",
      "Heavier than a four way bag. That is what the dividers cost.",
      "Double strap as standard, adjusted here.",
      "Carry it loaded before you commit. Half a kilo feels different at the fourteenth.",
    ],
    counter:
      "Fourteen ways or light. You can have one. Anybody selling you both is selling you a compromise.",
    specs: [
      { label: "Top", value: "Fourteen way" },
      { label: "Strap", value: "Double, adjustable" },
      { label: "Legs", value: "Stand" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Walkers who cannot stand grips tangling and will carry the weight for it.",
  },

  "callaway-summit-collection-stand-bag": {
    tagline: "Quieter than the rest of the rack",
    description:
      "Plainer material, less branding, and a shape that does not announce itself on a first tee. It costs a little more for looking like less, which is a trade some people are happy to make.",
    headline: "It does not announce itself",
    marks: ["Stand bag, 4 way top", "Plain finish", "Callaway"],
    notes: [
      "Four way top, double strap, nothing unusual about the specification.",
      "The material and the finish are what you are paying the difference for.",
      "Weighed empty on the same scale as the loud bags beside it.",
      "Carry it loaded round the shop like any other bag on this rack.",
    ],
    counter:
      "Nobody has ever played worse because their bag was plain. Buy the one you want to look at for five years.",
    specs: [
      { label: "Top", value: "Four way" },
      { label: "Strap", value: "Double, adjustable" },
      { label: "Legs", value: "Stand" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Walkers who would rather their bag said nothing at all.",
  },

  "callaway-fairway-j-bag": {
    tagline: "Small, and honest about it",
    description:
      "Half a set, an evening nine and nothing more asked of it. The second bag people buy and the one they end up using more than they expected.",
    headline: "Not trying to hold fourteen",
    marks: ["Stand bag, 4 way top", "Light carry", "Callaway"],
    notes: [
      "It is a small bag. That is the point, not a limitation.",
      "Right for a summer evening and wrong for a medal.",
      "Legs, which a lot of bags this size skip.",
      "Carry it loaded before you decide how many clubs it really takes.",
    ],
    counter:
      "The second bag people buy gets used more than the first one. Nobody believes that until they own two.",
    specs: [
      { label: "Top", value: "Four way" },
      { label: "Use", value: "Nine holes" },
      { label: "Legs", value: "Stand" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Evening nines, par three courses and practice rounds.",
  },

  "callaway-tour-authentic-triple-diamond-glove": {
    tagline: "The thinnest on the wall",
    description:
      "The tour specification of the Tour Authentic, which means less leather between your hand and the grip and a shorter life for it. Everybody who buys one knows both halves of that sentence.",
    headline: "Less glove, more grip",
    marks: ["Sizes S to XL", "Premium cabretta", "Callaway"],
    notes: [
      "Thinner than the standard Tour Authentic, which is already thin.",
      "Fifteen rounds is a fair season for one of these in the dry.",
      "Buy it a shade tight. Cabretta gives and it gives quickly.",
      "If replacing a glove every month annoys you, buy the Dawn Patrol.",
    ],
    counter:
      "All leather feels better for ten rounds. Synthetic feels almost as good for thirty. Pick which you care about.",
    specs: [
      { label: "Leather", value: "Premium cabretta" },
      { label: "Sizes", value: "S to XL" },
      { label: "Life", value: "12 to 20 rounds" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Low handicaps who notice the grip and replace gloves without complaining.",
  },

  "callaway-aura-glove": {
    tagline: "Cut for a smaller hand",
    description:
      "Most gloves are a men's pattern shrunk down, which is why so many of them bunch across the palm. This one is cut on its own last, and that is the whole difference.",
    headline: "Cut on its own pattern",
    marks: ["Sizes S to XL", "Cabretta leather", "Callaway"],
    notes: [
      "A different pattern, not a smaller version of the men's glove.",
      "If gloves bunch across your palm when you regrip, that is what this fixes.",
      "Cabretta leather, so buy it a shade tight.",
      "Try it on here. A glove is the one thing in this shop you cannot judge from a packet.",
    ],
    counter:
      "Half the gloves people play in are the wrong shape, not the wrong size. That is a fitting problem nobody talks about.",
    specs: [
      { label: "Leather", value: "Cabretta" },
      { label: "Sizes", value: "S to XL" },
      { label: "Cut", value: "Own pattern" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Anyone whose glove has never quite sat flat across the palm.",
  },

  "callaway-opti-color-gloves": {
    tagline: "A glove in a colour",
    description:
      "The same construction as the plain glove in something other than white. It will look worn in sooner and it will not look grubby, which is a fair trade for anybody who plays in weather.",
    headline: "It will not look grubby",
    marks: ["Sizes S to XL", "Cabretta leather", "Callaway"],
    notes: [
      "The same glove underneath. The colour is the only difference.",
      "A white glove looks past it after six wet rounds. A coloured one does not.",
      "Cabretta leather, so size it a shade tight.",
      "Cold water, air dry, never a radiator.",
    ],
    counter:
      "People replace white gloves because they look finished, not because they are. A colour buys you five more rounds.",
    specs: [
      { label: "Leather", value: "Cabretta" },
      { label: "Sizes", value: "S to XL" },
      { label: "Care", value: "Cold water, air dry" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Anyone who plays in weather and hates the look of a tired white glove.",
  },

  "callaway-rain-spann-gloves-pair": {
    tagline: "A pair, for wet grips",
    description:
      "Rain gloves come in twos because rain does not fall on one hand. They grip harder the wetter they get, which feels wrong for one hole and then makes perfect sense.",
    headline: "Better wet than dry",
    marks: ["Pair, sizes S to XL", "Grips wet", "Callaway"],
    notes: [
      "Sold as a pair. A single rain glove is half a solution.",
      "They work wet. Dry they feel odd and slightly slick, which is normal.",
      "Put them on at the first spot of rain, not when your grips are already soaked.",
      "Rinse and air dry. They come back the same for years.",
    ],
    counter:
      "The mistake is waiting until the third hole. By then the grips are wet and no glove fixes that.",
    specs: [
      { label: "Count", value: "Pair" },
      { label: "Grip", value: "Improves when wet" },
      { label: "Sizes", value: "S to XL" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Anyone who plays through rain rather than waiting it out.",
  },

  "callaway-tour-authentic-performance-pro-lw-hat": {
    tagline: "The light one",
    description:
      "The same tour cap in a lighter cloth, for the two months a year when the heavier one is too much. It dries faster and holds its shape less, which is the trade.",
    headline: "For the two months it matters",
    marks: ["One size, adjustable", "Lightweight", "Callaway"],
    notes: [
      "Lighter cloth than the standard Performance Pro. You can feel it in the hand.",
      "It dries quicker and creases more easily. Both come from the same thing.",
      "Adjustable strap, which gives a finer fit than a snapback.",
      "Cold water only, and never a machine.",
    ],
    counter:
      "In a Scottish summer a light cap matters for about eight weeks. Some people buy two caps for that reason.",
    specs: [
      { label: "Fit", value: "One size, adjustable" },
      { label: "Cloth", value: "Lightweight" },
      { label: "Care", value: "Cold water, air dry" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Hot rounds, and anyone who finds a structured cap heavy in July.",
  },

  "callaway-cg-weekender-hat": {
    tagline: "Soft front, nothing shouting",
    description:
      "Unstructured, quiet, and the cap most likely to be worn somewhere other than a golf course. It takes the shape of your head rather than holding its own.",
    headline: "For the round after the round",
    marks: ["One size, adjustable", "Unstructured", "Callaway"],
    notes: [
      "Soft front. It will crease, and that is what people buy it for.",
      "Cotton, which means it gets wet and stays wet.",
      "Adjustable strap rather than a snapback.",
      "Cold water only. Cotton shrinks in a machine.",
    ],
    counter:
      "The cap you wear most is the one you forget you are wearing. Usually it is the plain soft one.",
    specs: [
      { label: "Fit", value: "One size, adjustable" },
      { label: "Crown", value: "Unstructured" },
      { label: "Care", value: "Cold water, air dry" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Anyone who wants a cap rather than a piece of equipment.",
  },

  "callaway-rutherford-flexfit-snapback-hat": {
    tagline: "Flat brim, snapback",
    description:
      "Structured front, flat brim, and a snapback that steps rather than slides. Nothing technical about it, which is the point of it.",
    headline: "Nothing technical about it",
    marks: ["One size, snapback", "Structured", "Callaway"],
    notes: [
      "Flat brim. Curve it yourself if you want it curved.",
      "Structured front, so it holds its shape through a wet round.",
      "Snapback, so the fit steps rather than slides.",
      "Spot clean the front panel and leave the rest alone.",
    ],
    counter:
      "A snapback either fits your head or it does not. There is no adjusting your way out of it.",
    specs: [
      { label: "Fit", value: "One size, snapback" },
      { label: "Brim", value: "Flat" },
      { label: "Crown", value: "Structured" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Anyone who wears the cap after the round as well as during it.",
  },

  "callaway-performance-pro-adjustable-hat": {
    tagline: "The everyday tour cap",
    description:
      "Structured, technical, adjustable, and the cap that does the job without asking for anything. Most people who buy one buy the same one again.",
    headline: "It dries on the walk in",
    marks: ["One size, adjustable", "Technical crown", "Callaway"],
    notes: [
      "Technical crown, so it sheds water rather than holding it.",
      "Structured front, which keeps a shape when it is soaked.",
      "Adjustable strap, finer than a snapback.",
      "Cold water only, and never a machine.",
    ],
    counter:
      "A structured cap in the rain is the difference between a cap and a wet cloth on your head.",
    specs: [
      { label: "Fit", value: "One size, adjustable" },
      { label: "Crown", value: "Structured" },
      { label: "Fabric", value: "Technical, quick dry" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Anyone who wants a cap to disappear and just work.",
  },

  "callaway-magnetic-iron-headcover-set": {
    tagline: "The set, magnetic",
    description:
      "Iron covers are a nuisance right up until you sell a set and find out what unmarked faces are worth. Magnetic, so they come off one handed and go back the same way.",
    headline: "Your irons stop chewing each other",
    marks: ["Set, magnetic", "Numbered", "Callaway"],
    notes: [
      "Magnetic. Velcro iron covers are the reason people give up on iron covers.",
      "They add weight to the bag. That is the honest cost of them.",
      "A covered set is worth real money more at trade in than an uncovered one.",
      "Numbered, so the set goes back in the same order every time.",
    ],
    counter:
      "We value a lot of trade in sets across this counter. Covered irons are always worth more.",
    specs: [
      { label: "Closure", value: "Magnetic" },
      { label: "Marking", value: "Numbered" },
      { label: "Fits", value: "Standard iron heads" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Anyone who plans to sell the set on, and anyone who hates the rattle.",
  },

  "callaway-summit-driver-headcover": {
    tagline: "Plain, structured, lined",
    description:
      "The test for a driver cover is whether it goes back on in the rain with cold hands. This one does, and most of the covers people already own do not.",
    headline: "It goes back on in the rain",
    marks: ["Fits up to 460cc", "Structured", "Lined"],
    notes: [
      "Structured, so it keeps its opening when it is soaked.",
      "Lined, which is what stops the crown marking.",
      "Fits any driver head up to 460cc.",
      "Dry it off the club. Left on, it traps water against the paint.",
    ],
    counter:
      "Try putting a headcover on with wet fingers before you buy it. Most of them fail that test.",
    specs: [
      { label: "Fits", value: "Up to 460cc" },
      { label: "Build", value: "Structured" },
      { label: "Lining", value: "Soft" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Anyone who plays in weather and has fought a soaked cover on the second tee.",
  },

  "callaway-barrel-driver-headcover": {
    tagline: "Slides on, does not pull over",
    description:
      "A barrel shape goes on down the shaft rather than over the crown, which is quicker and kinder to the paint. It looks older than anything else in your bag and it is meant to.",
    headline: "It slides, it does not pull",
    marks: ["Fits up to 460cc", "Barrel shape", "Lined"],
    notes: [
      "Barrel shape. It slides down the shaft rather than stretching over the head.",
      "Kinder to a painted crown than a cover you have to pull on.",
      "Fits any driver head up to 460cc.",
      "Spot clean only.",
    ],
    counter:
      "Look at a five year old driver crown. Most of the marks came from the cover, not from the golf.",
    specs: [
      { label: "Fits", value: "Up to 460cc" },
      { label: "Shape", value: "Barrel" },
      { label: "Lining", value: "Soft" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Anyone who wants the crown to still look like a crown in three years.",
  },

  "callaway-vintage-hybrid-headcover": {
    tagline: "The club nobody covers",
    description:
      "Hybrids sit low and short in the bag and take knocks from the irons all the way round. Almost nobody covers them, and almost everybody should.",
    headline: "Nobody covers the hybrid",
    marks: ["Fits most hybrid heads", "Lined", "Callaway"],
    notes: [
      "Fits most hybrid heads across the usual loft range.",
      "Lined, because a hybrid crown chips as easily as a driver crown.",
      "It is the club that rattles all the way round. This is what stops it.",
      "Dry it off the club rather than on it.",
    ],
    counter:
      "Look at a three year old hybrid and a three year old driver from the same bag. The hybrid always looks worse.",
    specs: [
      { label: "Fits", value: "Most hybrid heads" },
      { label: "Build", value: "Lined" },
      { label: "Care", value: "Air dry off the club" },
      { label: "Brand", value: "Callaway" },
    ],
    suits: "Anyone carrying a hybrid without a cover, which is most people.",
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

export function productPage(product: Product): ProductPage {
  const page = productPages[product.slug] ?? generatedPage(product);
  return page.gallery || !product.gallery
    ? page
    : { ...page, gallery: product.gallery };
}
