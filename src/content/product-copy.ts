import type { ProductPage } from "@/content/product-pages";
import type { Product } from "@/content/products";

function pick<T>(slug: string, salt: number, options: readonly T[]): T {
  let hash = salt * 2654435761;
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  return options[hash % options.length];
}

type Shape = {
  tagline: string;
  headline: readonly string[];
  mark: string;
  note: readonly string[];
  spec: { label: string; value: string }[];
  suits: readonly string[];
};

const has = (model: string, ...words: string[]) =>
  words.some((w) => model.toLowerCase().includes(w));

function glove(model: string, detail: string): Shape {
  if (has(model, "rain", "spann gloves (pair)"))
    return {
      tagline: "A pair, for wet grips",
      headline: ["Better wet than dry", "Put them on before it starts"],
      mark: "Grips wet",
      note: [
        "Sold as a pair, because rain does not fall on one hand.",
        "They grip harder the wetter they get, which feels wrong for one hole and then makes sense.",
        "Rinse them after the round and air dry. They come back the same.",
      ],
      spec: [
        { label: "Count", value: "Pair" },
        { label: "Grip", value: "Improves when wet" },
      ],
      suits: ["Anyone who plays through rain rather than waiting it out."],
    };
  if (has(model, "thermal", "mitt", "winter", "hand warmer"))
    return {
      tagline: "For the cold months",
      headline: ["For the four months you cannot feel the club", "Warm hands, then a swing"],
      mark: "Cold weather",
      note: [
        "Thicker than a playing glove, and you will still score better than with numb hands.",
        "Not waterproof. Rain is a different glove.",
        "Air dry between rounds or the lining stays damp.",
      ],
      spec: [
        { label: "Season", value: "Cold weather" },
        { label: "Lining", value: "Thermal" },
      ],
      suits: ["Winter golf, early tee times and anyone who plays through to March."],
    };
  if (has(model, "junior"))
    return {
      tagline: "A real glove, small",
      headline: ["Not a toy with a logo", "Built like the adult one"],
      mark: "Junior sizes",
      note: [
        "The same construction as the adult glove, scaled down.",
        "A glove that is too big teaches a bad grip, and that is the whole reason to size it here.",
        "Bring them in and we will measure the hand rather than guess at an age.",
      ],
      spec: [{ label: "Sizes", value: "Junior S to L" }],
      suits: ["Juniors who have started gripping the club properly."],
    };
  if (has(model, "tour authentic", "cabretta", "premium"))
    return {
      tagline: "Thin leather, more feel",
      headline: ["It wears out because it is good", "Nothing between hand and grip"],
      mark: "Premium cabretta",
      note: [
        "Thin leather. You feel more of the grip and you replace it sooner.",
        "Buy it a shade tight. Cabretta gives, and synthetics do not.",
        "Twenty rounds is a fair season for one of these, and that is the trade.",
      ],
      spec: [
        { label: "Leather", value: "Premium cabretta" },
        { label: "Life", value: "15 to 25 rounds" },
      ],
      suits: ["Better players who notice the grip and replace gloves without complaining."],
    };
  return {
    tagline: detail || "Everyday glove",
    headline: ["It does the job for longer", "The one you stop thinking about"],
    mark: "All weather",
    note: [
      "Synthetic where a glove wears through, leather where your hand meets the grip.",
      "Less feel than a full leather glove, and most players stop noticing by the second hole.",
      "Cold wash, air dry, never a radiator.",
    ],
    spec: [{ label: "Life", value: "30 to 45 rounds" }],
    suits: ["Anyone out more than once a week who resents replacing gloves."],
  };
}

function headwear(model: string): Shape {
  if (has(model, "visor"))
    return {
      tagline: "Shade, no crown",
      headline: ["Shade without the heat", "All brim, no crown"],
      mark: "Visor",
      note: [
        "No crown, so nothing holds heat on top of your head.",
        "No cover either. If you are thin on top, buy the cap.",
        "Adjustable at the back, cold water only.",
      ],
      spec: [{ label: "Type", value: "Visor" }],
      suits: ["Hot weather, and heads that do not need covering."],
    };
  if (has(model, "bucket", "boonie", "sun hat"))
    return {
      tagline: "A brim all the way round",
      headline: ["It covers the back of your neck", "The bit a cap leaves out"],
      mark: "Full brim",
      note: [
        "Full brim. A cap leaves your neck and your ears exposed and always has.",
        "Fit matters more on a bucket than on a cap, so try both sizes.",
        "It packs flat into a bag pocket and comes out without a crease.",
      ],
      spec: [{ label: "Brim", value: "Full, all round" }],
      suits: ["Summer rounds, fair skin, and anyone who has burned once."],
    };
  if (has(model, "trucker", "rope", "snapback", "flexfit"))
    return {
      tagline: "Structured front",
      headline: ["It holds its shape wet", "The one that comes off the course with you"],
      mark: "Structured",
      note: [
        "Structured front, so it keeps its shape through a wet round.",
        "It steps rather than slides, so the fit is the fit.",
        "Spot clean the front panel and leave the rest alone.",
      ],
      spec: [{ label: "Crown", value: "Structured" }],
      suits: ["Anyone who wears the cap after the round as well as during it."],
    };
  if (has(model, "fitted", "stretch"))
    return {
      tagline: "No strap at the back",
      headline: ["For heads adjustable caps do not fit", "Nothing pressing on the back"],
      mark: "Fitted",
      note: [
        "Two sizes rather than one. Try both, the difference is obvious.",
        "No strap, so nothing sits on the back of your head.",
        "It loosens slightly with wear, so take the tighter of the two.",
      ],
      spec: [{ label: "Fit", value: "Fitted, two sizes" }],
      suits: ["Anyone who has never found an adjustable cap that sits right."],
    };
  if (has(model, "twill", "weekender", "vintage", "heritage", "dad"))
    return {
      tagline: "Soft front, cotton",
      headline: ["The quiet one", "A cap, not a piece of equipment"],
      mark: "Unstructured",
      note: [
        "Soft front. It takes the shape of your head rather than holding its own.",
        "Cotton, which means it gets wet and stays wet. That is the trade for how it feels.",
        "Cold water only. Cotton shrinks in a machine.",
      ],
      spec: [{ label: "Crown", value: "Unstructured" }],
      suits: ["Anyone who wants a cap rather than a statement."],
    };
  return {
    tagline: "Technical crown",
    headline: ["It dries on the walk in", "Wet at the turn, dry by the sixteenth"],
    mark: "Quick dry",
    note: [
      "Technical crown, so it sheds water rather than holding it.",
      "Adjustable strap, which gives a finer fit than a snapback.",
      "Cold water only, and never a machine.",
    ],
    spec: [{ label: "Fabric", value: "Technical, quick dry" }],
    suits: ["Anyone who wants a cap to disappear and just work."],
  };
}

function accessory(model: string): Shape {
  if (has(model, "towel"))
    return {
      tagline: "For the grooves",
      headline: ["Clean grooves are free spin", "The cheapest shot you will buy"],
      mark: "Carabiner clip",
      note: [
        "Wet one part of it on the first tee and keep the rest dry.",
        "Cotton lifts mud. Microfibre pushes it around and dries faster.",
        "Cold wash, no fabric softener, or it stops absorbing anything.",
      ],
      spec: [{ label: "Clip", value: "Carabiner" }],
      suits: ["Anyone who actually cleans a club between shots."],
    };
  if (has(model, "umbrella"))
    return {
      tagline: "Honest about what it does",
      headline: ["It will not save you in wind", "For rain, not for weather"],
      mark: "Fibreglass ribs",
      note: [
        "Fibreglass ribs, which bend and come back rather than snapping.",
        "In real wind nothing this size works. Nobody selling umbrellas says so.",
        "Shake it out and leave it open to dry, not folded in the bag.",
      ],
      spec: [{ label: "Ribs", value: "Fibreglass" }],
      suits: ["Anyone who walks and would rather keep the grips dry."],
    };
  if (has(model, "mallet"))
    return {
      tagline: "Cut deep for a mallet",
      headline: ["It stays on past the third", "Cut for the head you own"],
      mark: "Mallet putters",
      note: [
        "Mallets only. A blade cover will not stay on a mallet and the reverse flaps.",
        "Magnetic where it closes, so it goes back on one handed.",
        "Bring the putter if you are not certain which shape you have.",
      ],
      spec: [{ label: "Fits", value: "Mallet putters" }],
      suits: ["Mallet players whose current cover comes off in the bag."],
    };
  if (has(model, "blade"))
    return {
      tagline: "Cut for a blade",
      headline: ["Blades only", "Cut for the head you own"],
      mark: "Blade putters",
      note: [
        "Blades only. Half the putter covers people own are the wrong shape.",
        "Lined, because a putter face marks more easily than anything else in the bag.",
        "Bring the putter in if you are not sure.",
      ],
      spec: [{ label: "Fits", value: "Blade putters" }],
      suits: ["Blade players whose cover keeps falling off."],
    };
  if (has(model, "iron headcover", "iron cover"))
    return {
      tagline: "For the set in the bag",
      headline: ["Your irons stop chewing each other", "Worth it the day you sell the set"],
      mark: "Set",
      note: [
        "Covers add weight to the bag. That is the honest cost of them.",
        "A covered set is worth real money more than an uncovered one at trade in.",
        "Magnetic beats velcro, which is why people give up on velcro covers.",
      ],
      spec: [{ label: "Closure", value: "Magnetic" }],
      suits: ["Anyone who plans to sell the set on, and anyone who hates the rattle."],
    };
  if (has(model, "hybrid"))
    return {
      tagline: "The club nobody covers",
      headline: ["Nobody covers the hybrid", "The one that takes the knocks"],
      mark: "Lined",
      note: [
        "Hybrids sit low and short in the bag, so they knock against the irons all round.",
        "Lined, because a hybrid crown chips as easily as a driver crown.",
        "Dry it off the club rather than on it.",
      ],
      spec: [{ label: "Fits", value: "Most hybrid heads" }],
      suits: ["Anyone carrying a hybrid without a cover, which is most people."],
    };
  if (has(model, "fairway"))
    return {
      tagline: "For the fairway wood",
      headline: ["The club that gets chipped", "Nobody covers the three wood"],
      mark: "Lined",
      note: [
        "Fairway woods take more knocks than drivers because nobody covers them.",
        "Marked, so you stop pulling the wrong one on a tight tee shot.",
        "Air dry it off the club.",
      ],
      spec: [{ label: "Fits", value: "3, 5 and 7 wood" }],
      suits: ["Anyone carrying a fairway wood without a cover."],
    };
  if (has(model, "driver"))
    return {
      tagline: "Structured, and lined",
      headline: ["It goes back on in the rain", "Cold hands, wet cover, still fits"],
      mark: "Fits 460cc",
      note: [
        "Structured, so it keeps its opening when it is soaked.",
        "Lined, which is what stops the crown marking.",
        "Fits any driver head up to 460cc.",
      ],
      spec: [{ label: "Fits", value: "Up to 460cc" }],
      suits: ["Anyone who has fought a wet headcover on the second tee."],
    };
  return {
    tagline: "One of the small things",
    headline: ["Small, and it matters", "The things that decide the fourteenth"],
    mark: "In the bag",
    note: [
      "None of this is exciting and all of it is the difference at the fourteenth.",
      "It lives on the bag rather than in it, so pick something you can find.",
      "Replace it when it stops working, not when it stops looking new.",
    ],
    spec: [{ label: "Lives", value: "On the bag" }],
    suits: ["Anyone whose bag is missing the boring half of the kit."],
  };
}

function bag(model: string, detail: string): Shape {
  if (has(model, "cart"))
    return {
      tagline: "Built for a trolley",
      headline: ["Pockets facing the right way", "For the trolley, not the shoulder"],
      mark: "Cart bag",
      note: [
        "Cart bag, so the pockets face forward when it is strapped down.",
        "Heavier than any stand bag here, and it is not meant to be carried.",
        "Bring the trolley if you are unsure it will sit on the base.",
      ],
      spec: [{ label: "Type", value: "Cart" }],
      suits: ["Trolley and buggy players who want the pockets where they can reach them."],
    };
  if (has(model, "pencil", "sunday", "par 3"))
    return {
      tagline: "Half a set, half the weight",
      headline: ["It is not trying to hold fourteen", "Seven clubs and an evening"],
      mark: "Carry",
      note: [
        "Seven clubs comfortably, and that is the honest number.",
        "The right bag for a summer evening and the wrong bag for a medal.",
        "The second bag people buy, and the one they end up using most.",
      ],
      spec: [{ label: "Capacity", value: "Around seven clubs" }],
      suits: ["Evening nines, par three courses and practice rounds."],
    };
  if (has(model, "hybrid"))
    return {
      tagline: "Carry it or ride with it",
      headline: ["It works both ways", "Legs, and a base for the trolley"],
      mark: "Carry or cart",
      note: [
        "Legs for the days you walk and a base that sits on a trolley for the days you do not.",
        "Heavier than a carry bag and lighter than a cart bag, which is the whole idea.",
        "If you only ever do one of the two, buy the bag built for it.",
      ],
      spec: [{ label: "Type", value: "Carry or cart" }],
      suits: ["Players who walk some weeks and take a trolley the others."],
    };
  return {
    tagline: detail || "Stand bag",
    headline: ["Carry it loaded before you buy it", "Four hours is the test"],
    mark: "Stand bag",
    note: [
      "Weighed on the same scale as everything else on this rack, empty.",
      "Carry it loaded round the shop. Half a kilo feels different at the fourteenth.",
      "Straps adjusted here before it leaves, which takes five minutes and is free.",
    ],
    spec: [{ label: "Legs", value: "Stand" }],
    suits: ["Walkers choosing between this and three others on the same rack."],
  };
}

function ball(model: string): Shape {
  const track = has(model, "triple track", "trutrack");
  if (track)
    return {
      tagline: "The same ball, with a line",
      headline: ["The same ball, with a line", "It helps or it distracts"],
      mark: "Alignment print",
      note: [
        "Identical to the plain version. Only the print is different.",
        "It helps if you aim the ball on the green and it does nothing if you do not.",
        "Roll ten putts with it and ten without before you commit to a box.",
      ],
      spec: [{ label: "Print", value: "Alignment" }],
      suits: ["Players who line the ball up on the green and want more to line up with."],
    };
  if (has(model, "yellow", "brite", "matte"))
    return {
      tagline: "You will find it",
      headline: ["You will find this one", "A colour beats a search"],
      mark: "High visibility",
      note: [
        "The ball is unchanged. The colour is the only difference.",
        "In flat light a white ball in the rough is a two minute search and this is not.",
        "One round changes most minds about coloured balls.",
      ],
      spec: [{ label: "Colour", value: "High visibility" }],
      suits: ["Anyone who plays in flat light or long rough."],
    };
  if (has(model, "tour", "z-star", "pro v"))
    return {
      tagline: "Urethane cover",
      headline: ["Test it, do not assume it", "The monitor settles it"],
      mark: "Tour spin",
      note: [
        "Urethane cover, full tour construction.",
        "A dozen is the unit. Play one for two rounds, then decide.",
        "Ball fitting is forty pounds and it is the cheapest change to your scoring we sell.",
      ],
      spec: [{ label: "Cover", value: "Urethane" }],
      suits: ["Players whose scoring happens inside a hundred yards."],
    };
  return {
    tagline: "Sold by the dozen",
    headline: ["Buy for the shots you actually hit", "The ball you use on every shot"],
    mark: "Dozen",
    note: [
      "Lower compression than a tour ball, which suits most swing speeds here.",
      "It will not check from a full wedge, and nothing at this price will.",
      "Two dozen if your course has water on it.",
    ],
    spec: [{ label: "Compression", value: "Lower" }],
    suits: ["Mid to high handicaps, and anyone under about ninety miles an hour."],
  };
}

function club(model: string, sub: string): Shape {
  const forgiving = has(model, "max", " os", "max os", " d ", "max d");
  const players = has(model, "triple diamond", " ls", " cb", " mb", "tour", "forged");

  if (sub === "drivers")
    return {
      tagline: forgiving ? "The forgiving head" : players ? "The compact head" : "Adjustable hosel",
      headline: forgiving
        ? ["Off centre still finds the short grass", "Right for most people"]
        : ["It punishes a miss", "For players who already deliver it"],
      mark: forgiving ? "High forgiveness" : "Lower spin",
      note: [
        "Adjustable hosel, set here on the bench so you never need to touch it.",
        "Shaft first, head second. That order is the whole of driver fitting.",
        forgiving
          ? "More loft fixes more slices than anybody wants to hear."
          : "Less forgiving off the toe, which is the specification rather than a flaw.",
      ],
      spec: [
        { label: "Hosel", value: "Adjustable, set here" },
        { label: "Head", value: forgiving ? "High forgiveness" : "Compact, low spin" },
      ],
      suits: forgiving
        ? ["Anyone whose driver misses are costing them holes, which is nearly everybody."]
        : ["High speed players losing distance to spin, and nobody else."],
    };

  if (sub === "fairway woods")
    return {
      tagline: "Off the deck, not just the tee",
      headline: ["Easier off the deck than it looks", "It works from the fairway"],
      mark: "Shallow face",
      note: [
        "Hit it off the turf in the bay. If it only works off a peg it is a second driver.",
        "The 5 wood leaves this shop more often than the 3, and that is not an accident.",
        "Standard shaft length is long for a lot of people. We measure.",
      ],
      spec: [{ label: "Use", value: "Off the deck" }],
      suits: ["Players who need a club that works from the fairway, not just from a peg."],
    };

  if (sub === "hybrids")
    return {
      tagline: "Buy the gap, not the number",
      headline: ["Square at address, and that is most of it", "Buy the gap, not the number"],
      mark: "Iron length",
      note: [
        "Pick by the yardage gap in your bag, never by the number on the sole.",
        "If your hybrid goes left it is usually head shape and aim, not swing.",
        "Set at iron length, so lie angle matters and we set it on the bench.",
      ],
      spec: [{ label: "Length", value: "Iron length" }],
      suits: ["Anyone with a gap between the longest iron they hit and their fairway wood."],
    };

  if (sub === "irons")
    return {
      tagline: players ? "Forged, traditional lofts" : "Distance, and a top line you can look at",
      headline: players
        ? ["No help you did not ask for", "It rewards the strike and says so"]
        : ["Distance that still looks right", "The carry without the look"],
      mark: players ? "Forged" : "Hollow body",
      note: [
        "Lie angle is set on the bench before it goes in the bag, at no extra cost.",
        players
          ? "Traditional lofts, so your gapping stays where it is."
          : "Stronger lofts than a traditional set, so check the gap to your wedges.",
        "Shaft matters more here than the head does. Budget the time for it.",
      ],
      spec: [{ label: "Lie", value: "Set on the bench" }],
      suits: players
        ? ["Low handicaps, and anyone who has outgrown help they no longer need."]
        : ["Players who want another club of carry without a shovel behind the ball."],
    };

  if (sub === "wedges")
    return {
      tagline: "Sole first, loft second",
      headline: ["One of these grinds is yours", "The sole matters more than the loft"],
      mark: "Ground sole",
      note: [
        "Gap from your set pitching wedge upward, never downward.",
        "A sole that works on links sand does not work on soft parkland.",
        "Nobody walks in asking about grind. Everybody fitted for one asks next time.",
      ],
      spec: [{ label: "Fitting", value: "Recommended" }],
      suits: ["Anyone who plays the same turf most weeks and has never matched a sole to it."],
    };

  if (sub === "putters")
    return {
      tagline: "Length before anything else",
      headline: ["Length before anything else", "Aim it before you roll it"],
      mark: "Three lengths",
      note: [
        "Putter length is the most commonly wrong number in golf. Get measured.",
        "Aim it at a target before you hit a putt. What you see decides more than the head does.",
        "Putter fitting is forty five pounds and we do it on the same mat every time.",
      ],
      spec: [{ label: "Fitting", value: "Recommended" }],
      suits: ["Players who set up well and then aim themselves off line."],
    };

  return {
    tagline: "Fitted, not guessed",
    headline: ["Hit two before you choose one", "The monitor settles it"],
    mark: "Fit first",
    note: [
      "Nothing leaves this shop unmatched to the player.",
      "We will show you dispersion, not just carry. That is the number costing you shots.",
      "Lie angle set on the bench before it goes in the bag.",
    ],
    spec: [{ label: "Fitting", value: "Recommended" }],
    suits: ["Anyone who would rather be fitted once than buy twice."],
  };
}

const counters = {
  gloves: [
    "Buy two and rotate them. A glove that gets a day to dry lasts half again as long.",
    "Every bag in here should have a spare glove in it. The day you need one is never planned.",
    "Size it here. Half the gloves people play in are a size too big.",
  ],
  headwear: [
    "The cap you wear most is the one you forget you are wearing.",
    "Try it on. A cap is the one thing in this shop you cannot judge from a shelf.",
    "Dark caps last a season. White ones look better for a month.",
  ],
  accessories: [
    "None of this wins you a hole. All of it loses you one when it is missing.",
    "The boring half of a bag is the half people replace last and miss first.",
    "Buy the one you can find on a wet fairway, not the one that looks best in here.",
  ],
  bags: [
    "Carry it loaded round the shop. Whichever one you forget about is the one to buy.",
    "Most people buy too much bag, then carry two kilos they never open.",
    "Weigh what you put in it before you argue about what it weighs empty.",
  ],
  balls: [
    "Pick a ball for the part of your game that scores, not the part you talk about.",
    "If you lose three a round, the ball is not the problem and the expensive one is not the fix.",
    "Ball fitting is forty pounds. It is the cheapest change to your scoring in this shop.",
  ],
  clubs: [
    "Hit two before you choose one. Most players guess wrong between them.",
    "We will show you dispersion, not just carry. That is the number costing you shots.",
    "The longest club you can buy is the one you can find afterwards.",
  ],
} as const;

const frames = {
  gloves: [
    "Gloves are the one thing here you should buy a shade tight and replace before you think you need to.",
    "We size gloves at the counter rather than off the packet, because half the ones people play in are too big.",
  ],
  headwear: [
    "Nothing on this wall carries our name, because we did not make any of it.",
    "Headwear is the only thing in the shop you genuinely cannot judge from a shelf. Try it on.",
  ],
  accessories: [
    "This is the boring half of a bag, and the half people notice only when it is missing.",
    "None of it is exciting. All of it decides whether your grooves are clean on the fourteenth.",
  ],
  bags: [
    "Every bag on this rack is weighed empty on the same scale, so the numbers can be compared.",
    "Carry it loaded before you decide. Four hours is the test, not four minutes in the shop.",
  ],
  balls: [
    "It is the only piece of equipment you use on every shot, and the gap between models is wider than most players expect.",
    "Come in with a sleeve of each rather than a dozen of one. The monitor sorts it in half an hour.",
  ],
  clubs: [
    "Nothing leaves this shop unmatched to the player. Launch monitor, not a guess.",
    "We will talk you out of this one if the numbers say so, and that happens more often than you would think.",
  ],
} as const;

export function generatedPage(product: Product): ProductPage {
  const { slug, brand, model, category, subcategory, detail, statement } = product;
  const shape =
    category === "gloves"
      ? glove(model, detail)
      : category === "headwear"
        ? headwear(model)
        : category === "accessories"
          ? accessory(model)
          : category === "bags"
            ? bag(model, detail)
            : category === "balls"
              ? ball(model)
              : club(model, subcategory ?? "");

  const notes = shape.note;

  return {
    tagline: shape.tagline,
    description: `${statement} ${pick(slug, 5, frames[category])}`,
    headline: pick(slug, 1, shape.headline),
    marks: [detail, shape.mark, product.fittingRecommended ? "Fit first" : brand],
    notes: [
      notes[0],
      notes[1],
      notes[2],
      product.fittingRecommended
        ? "Booked against a fitting, it is set up before it goes in the bag."
        : "In stock here, and we will not sell you the wrong one to move it.",
    ],
    counter: pick(slug, 3, counters[category]),
    specs: [
      { label: category === "clubs" ? "Spec" : "Detail", value: detail },
      ...shape.spec,
      { label: "Brand", value: brand },
    ],
    suits: pick(slug, 4, shape.suits),
  };
}
