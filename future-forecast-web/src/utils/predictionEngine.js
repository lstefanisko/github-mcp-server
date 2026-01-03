export const generatePrediction = (category, year = 2026, userData = null, subscription = 'free') => {

    const getEra = (y) => {
        if (y < 2035) return 'near';
        if (y < 2060) return 'mid';
        return 'far';
    };

    const SCENARIOS = {
        GLOBAL_WEALTH: [
            {
                min: 2026, max: 2035,
                short: "130+ countries explore Central Bank Digital Currencies (CBDCs). The era of physical cash ends in the G20 nations.",
                mid: "By 2030, the annual value of CBDC transactions is projected to hit $213 billion. As physical cash disappears, monetary policy becomes direct and algorithmic. The 'Programmable Dollar' allows central banks to expire your savings if not spent during recessions.",
                long: [
                    "THE CBDC REVOLUTION (2026-2035):",
                    "Search data indicates 98% of global GDP is exploring digital currencies. The motive is not just efficiency, but surveillance and control.",
                    "MARKET SHIFT:",
                    "Emerging markets (E7) like India and Indonesia are leapfrogging the West in digital adoption. By 2032, the combined GDP of the E7 will likely surpass the G7.",
                    "YOUR STRATEGY:",
                    "Diversify into assets that cannot be 'turned off' by a central ledger: Precious metals, land, and decentralized commodities."
                ]
            },
            {
                min: 2035, max: 2060,
                short: "Global economic center shifts to Asia. China and India account for 50% of global GDP growth.",
                mid: "The dominance of the US Dollar as the sole reserve currency fractures. A multi-polar financial system emerges, split between the Western SWIFT network and the Asian BRICS+ alternative. Supply chains for critical minerals (Lithium, Cobalt) determine national sovereignty.",
                long: [
                    "THE ASIAN CENTURY (2035-2060):",
                    "Demographic headwinds in Europe and Japan cause stagnation, while Southeast Asia's working-age population drives a production boom.",
                    "RESOURCE WARS:",
                    "Wealth is no longer defined by tech stocks, but by access to arable land and fresh water. The 'Blue Gold' (water) becomes the most traded commodity futures contract.",
                    "PREDICTION:",
                    "Investment algorithms move from 'Growth' to 'Resilience'. Companies that can survive climate shocks command the highest P/E ratios."
                ]
            }
        ],
        LIFE_EXTENSION: [
            {
                min: 2026, max: 2035,
                short: "Senolytics enter Phase 3 trials. First commercial treatments for clearing 'zombie cells' become available to the ultra-wealthy.",
                mid: "The anti-aging market reaches $6.4 Billion by 2030. While not 'immortality', these therapies successfully delay the onset of frailty, effectively buying 5-10 extra years of healthy life. Metrics for 'Biological Age' become standard on insurance applications.",
                long: [
                    "THE SENOLYTIC BREAKTHROUGH:",
                    "Trials for clearing senescent cells show promise in treating pulmonary fibrosis and kidney disease. It is the first step toward treating aging as a condition, rather than an inevitability.",
                    "ACCESS GAP:",
                    "Initial treatments cost upwards of $100k/year. Verify your net worth; longevity is currently a luxury service.",
                    "REALITY CHECK:",
                    "Expect FDA approval for specific age-related conditions, but 'general life extension' labels will remain off-market supplements for this decade."
                ]
            },
            {
                min: 2036, max: 2060,
                short: "'Longevity Escape Velocity' remains theoretical, but average healthspan increases by 15% due to AI-driven drug discovery.",
                mid: "By the 2040s, advancements in regenerative medicine allow for lab-grown organ replacements. The bottleneck shifts from 'cell death' to 'brain health'. We can keep the body alive, but dementia remains the final boss.",
                long: [
                    "REGENERATIVE ERA:",
                    "3D bioprinting of livers and kidneys from patient-specific stem cells eliminates the donor waiting list. Organ failure is no longer a death sentence.",
                    "THE BRAIN BARRIER:",
                    "While the body can be patched, the mind cannot yet be fully backed up. Connectome mapping is progressing, but 'Mind Uploading' remains firmly in the realm of science fiction for this generation.",
                    "OUTLOOK:",
                    "Expect to live to 100, but plan for the financial cost of a 40-year retirement."
                ]
            }
        ],
        WAR_PEACE: [
            {
                min: 2026, max: 2035,
                short: "Water scarcity drives conflict in MENA and South Asia. 40% gap between water supply and demand by 2030.",
                mid: "The Indus and Nile river basins become geopolitical flashpoints. With the Grand Ethiopian Renaissance Dam filling, Egypt faces existential dread. In Asia, India and Pakistan tensions flare over the Indus Waters Treaty as glaciers melt.",
                long: [
                    "THE WATER WARS (2026-2035):",
                    "It is not about ideology; it's about hydrology. 83% of the population in the Middle East faces extreme water stress.",
                    "TACTICS:",
                    "Nations weaponize dams and cloud-seeding tech. 'Rain theft' accusations lead to diplomatic severances.",
                    "RISK ZONES:",
                    "Avoid investment in water-intensive industries in Sub-Saharan Africa and Central Asia. Supply chain disruptions are guaranteed."
                ]
            },
            {
                min: 2036, max: 2060,
                short: "The Arctic becomes the new Mediterranean. Resource competition heats up as ice melts.",
                mid: "As the Arctic Ocean becomes navigable year-round, a 'Cold War' erupts over the vast untapped oil, gas, and rare earth deposits beneath the ice. NATO and Russia expand militarization of the polar circle.",
                long: [
                    "NORTHERN FRONT:",
                    "The 'Polar Silk Road' halves shipping times between Asia and Europe, bypassing the Suez Canal. Control of these trade routes is the primary strategic goal of the 2040s.",
                    "MILITARIZATION:",
                    "Icebreaker fleets are the new aircraft carriers. Bases in Greenland and Svalbard are reinforced.",
                    "GLOBAL IMPACT:",
                    "While the south burns, the north booms. Real estate in Scandinavia and Canada sees hyper-appreciation."
                ]
            }
        ],
        OFF_WORLD: [
            {
                min: 2026, max: 2032,
                short: "Artemis III returns humans to the Moon (approx 2027-2028). First woman steps on the lunar South Pole.",
                mid: "NASA's Artemis program establishes the 'Lunar Gateway' in orbit. This is not a colony; it is a campsite. The primary goal is finding water ice in the Shackleton Crater to produce rocket fuel for the future Mars push.",
                long: [
                    "RETURN TO LUNA (2026-2032):",
                    "Delays are expected, but the SLS and Starship HLS will land humans. The focus is scientific: Geology and survival systems testing.",
                    "COMMERCIALIZATION:",
                    "Private landers (Intuitive Machines, Firefly) begin regular cargo runs. The Moon is open for business, but the margins are slim.",
                    "REALITY:",
                    "No cities. No hotels. Just dusty, dangerous work in cramped landers."
                ]
            },
            {
                min: 2033, max: 2050,
                short: "First Crewed Mars Mission (Late 2030s). SpaceX Starship attempts massive cargo transfer.",
                mid: "Musk's 2029 timeline slipped, but by the late 2030s, the transfer windows are utilized. The first human footprint on Mars likely occurs around 2039. It is a scientific outpost, analogous to Antarctica, not a 'Plan B' for humanity.",
                long: [
                    "THE RED PLANET REALITY:",
                    "A million people on Mars by 2050 was a fantasy. A sustainable crew of 12 is a triumph.",
                    "CHALLENGES:",
                    "Radiation shielding and perchlorates in the soil remain unsolved problems for long-term habitation. The first Martians are likely rigorous scientists, not colonists.",
                    "ECONOMICS:",
                    "There is no export product from Mars yet. It remains a massive sink of Earth's capital, justified by exploration and survival insurance."
                ]
            }
        ],
        YOUR_LEGACY: [
            {
                min: 2026, max: 2100,
                short: `Analysis for ${userData?.name || 'Subject'}: Economic headwinds in ${year} require adaptation.`,
                mid: `Subject ${userData?.name || 'User'}: Based on current trends in ${userData?.interest || 'tech'}, the sector faces consolidation. However, your focus on ${userData?.focus || 'innovation'} aligns with the few growth verticals remaining.`,
                long: [
                    `STRATEGIC ANALYSIS: ${userData?.name || 'USER'}`,
                    "MACRO CONTEXT:",
                    `The world of ${year} is defined by resource constraints and algorithmic governance. The 'easy money' era is over.`,
                    "PERSONAL PATH:",
                    `To build a legacy in this environment, you must solve a hard problem (Energy, Water, Logistics). Your interest in ${userData?.interest || 'progress'} is a good start, but execution matters more than ideas.`,
                    "ADVICE:",
                    "Own real assets. Develop hard skills. The virtual world is saturated; the physical world needs rebuilding."
                ]
            }
        ],
        // Fallbacks
        SCIENCE_TECH: [{ min: 2026, max: 2100, short: "Tech progress slows.", mid: "Moore's Law ends.", long: ["Computing shifts to efficiency rather than raw speed."] }],
        AI_EVOLUTION: [{ min: 2026, max: 2100, short: "AI permeates service sector.", mid: "Labor markets disrupt.", long: ["Universal Basic Income discussions accelerate."] }],
        HUMANITY_SOCIAL: [{ min: 2026, max: 2100, short: "Demographics shift.", mid: "Population peaks.", long: ["Global population likely peaks around 2080."] }]
    };

    const pool = SCENARIOS[category] || SCENARIOS['GLOBAL_WEALTH'];

    // Filter by year
    const validScenarios = pool.filter(s => year >= s.min && year <= s.max);
    // Fallback logic
    const finalPool = validScenarios.length > 0 ? validScenarios : pool;
    const scenario = finalPool[Math.floor(Math.random() * finalPool.length)];

    return {
        year: year,
        content: {
            short: scenario.short,
            mid: scenario.mid,
            long: scenario.long
        },
        probability: (Math.random() * (95 - 70) + 70).toFixed(1) + "%", // More realistic probabilities
        id: Math.random().toString(36).substr(2, 9),
        era: getEra(year)
    };
};
