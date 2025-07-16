// Texas Penal Code Study Data
// Comprehensive coverage of assault, theft, property crimes, animal laws, and firearms

// Texas Penal Code Study Data - COMPREHENSIVE COVERAGE
// Complete coverage of all Penal Code content from student handout

const penalCodeData = {
    flashcards: [
        // BASIC ASSAULT OFFENSES - Chapter 22
        {
            id: "pc001",
            mainCategory: "penal-code",
            category: "assault-offenses",
            question: "What are the three ways a person can commit Assault under PC 22.01(a)?",
            answer: "1) Intentionally, knowingly, or recklessly causes bodily injury to another; 2) Intentionally or knowingly threatens another with imminent bodily injury; 3) Intentionally or knowingly causes physical contact when the person knows/should believe the other will regard it as offensive or provocative.",
            difficulty: "basic",
            objective: "Understand basic assault elements",
            module: "Penal Code"
        },
        {
            id: "pc002",
            mainCategory: "penal-code",
            category: "assault-offenses",
            question: "What is the basic punishment for Assault under PC 22.01?",
            answer: "Class C misdemeanor, EXCEPT it becomes a Class A misdemeanor if committed against a public servant while lawfully discharging official duty or in retaliation for official duties.",
            difficulty: "basic",
            objective: "Know assault punishment levels",
            module: "Penal Code"
        },
        {
            id: "pc003",
            mainCategory: "penal-code",
            category: "assault-offenses",
            question: "What elevates Simple Assault to Aggravated Assault under PC 22.02?",
            answer: "Aggravated Assault occurs when a person commits assault AND either: 1) Causes serious bodily injury to another, OR 2) Uses or exhibits a deadly weapon during the commission of the assault.",
            difficulty: "intermediate",
            objective: "Distinguish between assault levels",
            module: "Penal Code"
        },
        {
            id: "pc004",
            mainCategory: "penal-code",
            category: "assault-offenses",
            question: "What is the punishment for Aggravated Assault under PC 22.02?",
            answer: "Felony of the second degree, EXCEPT it becomes a felony of the first degree if committed: by public servant under color of office, against public servant/security officer/emergency personnel on duty, or in retaliation against witnesses.",
            difficulty: "intermediate",
            objective: "Know aggravated assault punishment levels",
            module: "Penal Code"
        },

        // THEFT OFFENSES - Chapter 31
        {
            id: "pc005",
            mainCategory: "penal-code",
            category: "theft-offenses",
            question: "What are the basic elements of Theft under PC 31.03?",
            answer: "A person commits theft if he unlawfully appropriates property with intent to deprive the owner of property. The appropriation must be without effective consent, or the actor knows it was stolen, or believes it was stolen based on law enforcement representation.",
            difficulty: "basic",
            objective: "Understand theft elements",
            module: "Penal Code"
        },
        {
            id: "pc006",
            mainCategory: "penal-code",
            category: "theft-offenses",
            question: "What are the theft punishment ranges based on property value?",
            answer: "Under $100: Class C; $100-$750: Class B; $750-$2,500: Class A; $2,500-$30,000: State jail felony; $30,000-$150,000: 3rd degree felony; $150,000-$300,000: 2nd degree felony; $300,000+: 1st degree felony.",
            difficulty: "intermediate",
            objective: "Know theft punishment ranges",
            module: "Penal Code"
        },
        {
            id: "pc007",
            mainCategory: "penal-code",
            category: "theft-offenses",
            question: "What is required for accomplice testimony in theft cases under PC 31.03(c)?",
            answer: "The testimony of an accomplice must be corroborated by evidence that tends to connect the actor with the offense. The corroboration is not sufficient if it merely shows the commission of the offense.",
            difficulty: "advanced",
            objective: "Understand corroboration requirements",
            module: "Penal Code"
        },

        // CRIMINAL CHARACTERISTICS & TYPOLOGY
        {
            id: "pc008",
            mainCategory: "penal-code",
            category: "criminal-types",
            question: "What is the 'Achilles Heel' of property crimes?",
            answer: "The disposal of stolen property. Professional criminals often work with criminal receivers (fences) - those who receive and dispose of stolen property on a regular basis.",
            difficulty: "intermediate",
            objective: "Understand property crime patterns",
            module: "Penal Code"
        },
        {
            id: "pc009",
            mainCategory: "penal-code",
            category: "criminal-types",
            question: "What characterizes a Professional Criminal/Thief?",
            answer: "Profit motive; operates to minimize observation/eyewitnesses; requires planning, direction, and skills; type of property stolen may be important clue; often works with criminal receivers; may commit burglary, white collar, vehicle theft, agricultural crimes, and arson.",
            difficulty: "intermediate",
            objective: "Identify professional criminal characteristics",
            module: "Penal Code"
        },
        {
            id: "pc010",
            mainCategory: "penal-code",
            category: "criminal-types",
            question: "What characterizes a Semi-professional (unskilled) thief?",
            answer: "Profit motive but often for drugs; targets determined by opportunity (cruising robber); less planning/preparation; less rational; more likely to resort to violence; presents special danger when interrupted; more prone to violence to escape.",
            difficulty: "intermediate",
            objective: "Identify semi-professional criminal characteristics",
            module: "Penal Code"
        },

        // ANIMAL CRUELTY LAWS - Chapter 42 & 21
        {
            id: "pc011",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            question: "What is the punishment for attacking an assistance animal under PC 42.091?",
            answer: "Class A misdemeanor if actor attacks; State jail felony if actor injures; Felony of the 3rd degree if actor kills an assistance animal. Court must order restitution for vet bills, replacement/retraining costs, and other reasonable expenses.",
            difficulty: "intermediate",
            objective: "Know assistance animal protection laws",
            module: "Penal Code"
        },
        {
            id: "pc012",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            question: "What defines an 'Assistance Animal' under PC 42.091?",
            answer: "Per Human Resources Code 121.002: A K-9 specially trained and equipped to help a person with a disability and is used by a person with a disability.",
            difficulty: "basic",
            objective: "Know assistance animal definition",
            module: "Penal Code"
        },
        {
            id: "pc013",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            question: "What are the punishment levels for Dog Fighting under PC 42.10?",
            answer: "PC 42.10(a)(1), (2), (3) - causing dogs to fight, participating in earnings, or using property for dog fighting: State jail felony. PC 42.10(a)(4), (5), (6) - equipment possession, training dogs, or attending as spectator: Class A misdemeanor.",
            difficulty: "intermediate",
            objective: "Distinguish dog fighting offense levels",
            module: "Penal Code"
        },
        {
            id: "pc014",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            question: "What is the defense for dog fighting under PC 42.10(d)?",
            answer: "It is a defense to prosecution under (a)(1) that the actor caused a dog to fight with another dog to protect livestock, other property, or a person from the other dog, and for no other purpose.",
            difficulty: "advanced",
            objective: "Know defenses to animal fighting charges",
            module: "Penal Code"
        },
        {
            id: "pc015",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            question: "What defines 'Dog Fighting' and 'Dog-fighting equipment' under PC 42.10?",
            answer: "Dog fighting: any situation in which one dog attacks or fights with another dog. Dog-fighting equipment: per CCP 18.18(g) - specialized equipment for training or facilitating dog fights.",
            difficulty: "basic",
            objective: "Know dog fighting definitions",
            module: "Penal Code"
        },
        {
            id: "pc016",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            question: "What are the punishment levels for Cockfighting under PC 42.105?",
            answer: "PC 42.105(b)(1), (2) - causing cocks to fight or participating in earnings: State jail felony. PC 42.105(b)(3), (4), (5) - property use, training, or equipment: Class A misdemeanor. PC 42.105(b)(6) - spectating: Class C (Class A with prior conviction).",
            difficulty: "intermediate",
            objective: "Know cockfighting punishment structure",
            module: "Penal Code"
        },
        {
            id: "pc017",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            question: "What are the key definitions for Cockfighting under PC 42.105?",
            answer: "Bridle: leather device over head/beak to prevent injury. Cock: male domestic fowl. Cockfighting: one cock attacks/fights another. Gaff: artificial steel spur. Slasher: curved knife blade weapon for cock's foot.",
            difficulty: "intermediate",
            objective: "Know cockfighting terminology",
            module: "Penal Code"
        },
        {
            id: "pc018",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            question: "What are the affirmative defenses for cockfighting equipment under PC 42.105(c)?",
            answer: "Affirmative defenses: 1) Conduct occurred solely for breeding cocks for poultry shows judged by appearance; 2) Was incidental to collecting bridles, gaffs, or slashers. NOT available if evidence shows actor also engaging in cockfighting use.",
            difficulty: "advanced",
            objective: "Know cockfighting equipment defenses",
            module: "Penal Code"
        },
        {
            id: "pc019",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            question: "What is the age exception for cockfighting spectating under PC 42.105(f)?",
            answer: "It is an exception to application of PC 42.105(b)(6) (attending as spectator) if the actor is 15 years of age or younger at the time of the offense.",
            difficulty: "intermediate",
            objective: "Know age exceptions in animal fighting laws",
            module: "Penal Code"
        },
        {
            id: "pc020",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            question: "What is the punishment for Bestiality under PC 21.09?",
            answer: "State jail felony, EXCEPT it becomes a felony of the 2nd degree if committed under (a)(9) in presence of a child under 18, OR if it results in serious bodily injury or death of the animal.",
            difficulty: "intermediate",
            objective: "Know bestiality offense levels",
            module: "Penal Code"
        },
        {
            id: "pc021",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            question: "What are the prohibited acts under PC 21.09 Bestiality (a)(1)-(5)?",
            answer: "(1) Contact between person's mouth/anus/genitals and animal's anus/genitals or mouth; (2) Fondling animal's anus/genitals not for lawful husbandry/veterinary; (3) Causing animal to contact person's seminal fluid; (4) Inserting body part/object into animal not for lawful practice; (5) Obtaining animal for such conduct.",
            difficulty: "advanced",
            objective: "Know specific bestiality prohibitions",
            module: "Penal Code"
        },
        {
            id: "pc022",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            question: "What are the prohibited acts under PC 21.09 Bestiality (a)(6)-(10)?",
            answer: "(6) Organizing/promoting/observing such conduct; (7) Causing/aiding person in such conduct; (8) Permitting on premises under control; (9) Engaging in presence of child under 18; (10) Advertising/offering animal for such conduct in Texas.",
            difficulty: "advanced",
            objective: "Know extended bestiality prohibitions",
            module: "Penal Code"
        },

        // PROPERTY CRIMES - Chapter 30 (Burglary & Criminal Trespass)
        {
            id: "pc023",
            mainCategory: "penal-code",
            category: "property-crimes",
            question: "What are the key definitions for property crimes under PC 30.01?",
            answer: "Habitation: structure/vehicle for overnight accommodation (includes separately secured portions and appurtenant structures). Building: enclosed structure for habitation, trade, manufacture, ornament, or use. Vehicle: device for propelling/moving persons/property (except habitations).",
            difficulty: "basic",
            objective: "Understand property crime definitions",
            module: "Penal Code"
        },
        {
            id: "pc024",
            mainCategory: "penal-code",
            category: "property-crimes",
            question: "What constitutes 'Entry' and 'Notice' for Criminal Trespass under PC 30.05(b)?",
            answer: "Entry: intrusion of the entire body. Notice: oral/written communication by owner; fencing to exclude intruders; posted signs; purple paint marks; or visible crops under cultivation/harvest.",
            difficulty: "intermediate",
            objective: "Know trespass notice requirements",
            module: "Penal Code"
        },
        {
            id: "pc025",
            mainCategory: "penal-code",
            category: "property-crimes",
            question: "What are the specific requirements for purple paint trespass marks under PC 30.05?",
            answer: "Vertical lines at least 8 inches long and 1 inch wide; bottom of mark 3-5 feet from ground; placed at readily visible locations; no more than 100 feet apart on forest land or 1,000 feet apart on other land.",
            difficulty: "intermediate",
            objective: "Know purple paint mark specifications",
            module: "Penal Code"
        },
        {
            id: "pc026",
            mainCategory: "penal-code",
            category: "property-crimes",
            question: "What are the punishment levels for Criminal Trespass under PC 30.05?",
            answer: "Class B misdemeanor (basic); Class C (agricultural/residential land within 100 ft of boundary/protected freshwater); Class A (habitation, deadly weapon, critical infrastructure, higher education with prior, shelter center, Superfund site); 3rd degree felony (if part of smuggling offense).",
            difficulty: "advanced",
            objective: "Know trespass punishment escalations",
            module: "Penal Code"
        },
        {
            id: "pc027",
            mainCategory: "penal-code",
            category: "property-crimes",
            question: "What is a 'Critical Infrastructure Facility' under PC 30.05?",
            answer: "Must be completely enclosed by obvious barrier: chemical manufacturing, refinery, electrical facilities, water treatment, gas compressor stations, LNG terminals, telecommunications switching, ports/transportation hubs, gas processing plants, or federally licensed radio/TV transmission facilities.",
            difficulty: "advanced",
            objective: "Identify critical infrastructure for enhanced penalties",
            module: "Penal Code"
        },
        {
            id: "pc028",
            mainCategory: "penal-code",
            category: "property-crimes",
            question: "What are the key definitions for PC 30.05 enhanced penalties?",
            answer: "Shelter center: per Human Resources Code 51.002. Forest land: trees potentially valuable for timber. Agricultural land: per Civil Practice Code 75.001. Superfund site: National Priorities List or state registry facilities. Protected freshwater: per Parks & Wildlife Code 90.001.",
            difficulty: "advanced",
            objective: "Know property type definitions for enhancements",
            module: "Penal Code"
        },

        // FIREARMS TRESPASS LAWS - Chapter 30.05-30.07
        {
            id: "pc029",
            mainCategory: "penal-code",
            category: "firearms-laws",
            question: "What are the requirements for valid firearm prohibition signs under PC 30.05?",
            answer: "Must include specific language 'Pursuant to Section 30.05, Penal Code (criminal trespass), a person may not enter this property with a firearm'; in English and Spanish; contrasting colors; block letters at least one inch high; conspicuously displayed and clearly visible.",
            difficulty: "intermediate",
            objective: "Know firearm sign requirements",
            module: "Penal Code"
        },
        {
            id: "pc030",
            mainCategory: "penal-code",
            category: "firearms-laws",
            question: "What are the punishment levels for firearm trespass under PC 30.05(d-3)?",
            answer: "Class C misdemeanor (fine not exceeding $200) if sole basis was firearm prohibition, EXCEPT Class A misdemeanor if trial shows actor received personal notice after entry and failed to depart.",
            difficulty: "intermediate",
            objective: "Know firearm trespass penalties",
            module: "Penal Code"
        },
        {
            id: "pc031",
            mainCategory: "penal-code",
            category: "firearms-laws",
            question: "What are the punishment levels for PC 30.06 (Concealed Handgun Trespass)?",
            answer: "Class C misdemeanor (fine not exceeding $200), EXCEPT Class A misdemeanor if trial shows that after entry, the license holder received personal oral notice and failed to depart.",
            difficulty: "intermediate",
            objective: "Know concealed carry trespass penalties",
            module: "Penal Code"
        },
        {
            id: "pc032",
            mainCategory: "penal-code",
            category: "firearms-laws",
            question: "What is the key difference between PC 30.06 and PC 30.07?",
            answer: "PC 30.06 applies to CONCEALED handgun carry by license holders; PC 30.07 applies to OPENLY carried handguns by license holders. Both require specific notice language and have similar penalty structures, but 30.07 specifies that carrying in a holster is NOT a defense.",
            difficulty: "intermediate",
            objective: "Distinguish concealed vs open carry trespass",
            module: "Penal Code"
        },
        {
            id: "pc033",
            mainCategory: "penal-code",
            category: "firearms-laws",
            question: "What are the required notice languages for PC 30.06 and 30.07?",
            answer: "PC 30.06: 'Pursuant to Section 30.06, Penal Code (trespass by license holder with a concealed handgun)...may not enter with a concealed handgun'. PC 30.07: Same format but 'with a handgun that is carried openly'. Both in English/Spanish, contrasting colors, 1+ inch letters.",
            difficulty: "advanced",
            objective: "Know specific notice requirements",
            module: "Penal Code"
        },

        // DEFENSES FOR TRESPASS LAWS
        {
            id: "pc034",
            mainCategory: "penal-code",
            category: "property-crimes",
            question: "What are the peace officer exceptions under PC 30.05(i)?",
            answer: "Section does not apply if basis for entry prohibition was handgun/weapon and actor was a peace officer (including from recognized states) or special investigator under CCP 2A.002, regardless of whether engaged in official duty. Recognized states must have firearm proficiency requirements and reciprocity.",
            difficulty: "advanced",
            objective: "Know peace officer firearm exceptions",
            module: "Penal Code"
        },
        {
            id: "pc035",
            mainCategory: "penal-code",
            category: "property-crimes",
            question: "What are the defenses for utility workers under PC 30.05(e)?",
            answer: "Defenses include: firefighters/EMS under exigent circumstances; employees/agents of electric, telecommunications, video/cable, gas utilities, pipelines, or electric cooperatives performing duties; persons employed by entities with effective consent/authorization performing duties within scope.",
            difficulty: "advanced",
            objective: "Know utility worker trespass defenses",
            module: "Penal Code"
        },
        {
            id: "pc036",
            mainCategory: "penal-code",
            category: "property-crimes",
            question: "What is the railway worker defense under PC 30.05(g)?",
            answer: "It is a defense to prosecution that the actor entered a railroad switching yard or any part of a railroad switching yard and was at that time an employee or representative of employees exercising a right under the Railway Labor Act (45 U.S.C. Section 151 et seq.).",
            difficulty: "advanced",
            objective: "Know specialized worker defenses",
            module: "Penal Code"
        },
        {
            id: "pc037",
            mainCategory: "penal-code",
            category: "firearms-laws",
            question: "What are the defenses for rental property under PC 30.05, 30.06 and 30.07 (f-1 through f-4)?",
            answer: "Defenses exist for: condominium owners/tenants/guests (f-1), leased premises tenants/guests (f-2), manufactured home tenants/guests (f-3), and hotel guests (f-4) - when carrying/storing in their unit/room, en route to/from unit/vehicle, or in designated parking areas.",
            difficulty: "advanced",
            objective: "Know rental property firearm defenses",
            module: "Penal Code"
        },
        {
            id: "pc038",
            mainCategory: "penal-code",
            category: "firearms-laws",
            question: "What are the first responder defenses under PC 30.06 and 30.07?",
            answer: "Defense for first responders who: 1) Hold unexpired completion certificate under Gov Code 411.1883; 2) Were engaged in actual discharge of duties while carrying; 3) Were employed/supervised by municipality/county under Local Gov Code Chapter 179.",
            difficulty: "advanced",
            objective: "Know first responder firearm defenses",
            module: "Penal Code"
        },

        // CONSTITUTIONAL PROTECTIONS
        {
            id: "pc039",
            mainCategory: "penal-code",
            category: "property-crimes",
            question: "What are the First Amendment protections for higher education trespass under PC 30.05(d-2)?",
            answer: "At punishment stage, defendant may raise issue whether they were engaging in speech/expressive conduct protected by 1st Amendment or Texas Constitution Article I, Section 8. If proven by preponderance, the Class A enhancement doesn't apply.",
            difficulty: "advanced",
            objective: "Know constitutional protections in trespass cases",
            module: "Penal Code"
        },
        {
            id: "pc040",
            mainCategory: "penal-code",
            category: "property-crimes",
            question: "What is the labor rights defense for critical infrastructure under PC 30.05(h)?",
            answer: "At punishment stage, defendant may raise issue whether entry/remaining was part of peaceful/lawful assembly, including exercising state/federal labor law rights. If proven by preponderance, the Class A enhancement for critical infrastructure doesn't apply.",
            difficulty: "advanced",
            objective: "Know labor law protections in trespass",
            module: "Penal Code"
        }
    ],
    
    practiceQuestions: [
        {
            id: "pcq001",
            mainCategory: "penal-code",
            category: "assault-offenses",
            difficulty: "basic",
            type: "multiple-choice",
            question: "What mental states are required for causing bodily injury under PC 22.01 Assault?",
            options: [
                "Intentionally, knowingly, OR recklessly",
                "Only intentionally or knowingly",
                "Only recklessly",
                "Any mental state including criminal negligence"
            ],
            correct: 0,
            explanation: "For bodily injury assault, the actor must act intentionally, knowingly, OR recklessly. Threats and offensive contact require only intentionally or knowingly.",
            objective: "Understand mental states for assault",
            module: "Penal Code"
        },
        {
            id: "pcq002",
            mainCategory: "penal-code",
            category: "theft-offenses",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "What is the punishment for theft of property valued at $25,000?",
            options: [
                "State jail felony",
                "Class A misdemeanor",
                "Felony of the third degree",
                "Class B misdemeanor"
            ],
            correct: 0,
            explanation: "$25,000 falls in the $2,500 to under $30,000 range, making it a state jail felony.",
            objective: "Apply theft punishment ranges",
            module: "Penal Code"
        },
        {
            id: "pcq003",
            mainCategory: "penal-code",
            category: "property-crimes",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "Purple paint marks for trespass notice must be placed how far apart?",
            options: [
                "100 feet apart on forest land; 1,000 feet apart on other land",
                "1,000 feet apart on forest land; 100 feet apart on other land",
                "500 feet apart on all land types",
                "100 feet apart on all land types"
            ],
            correct: 0,
            explanation: "PC 30.05(b)(2)(D) - purple paint marks must be no more than 100 feet apart on forest land or 1,000 feet apart on other land.",
            objective: "Know trespass notice requirements",
            module: "Penal Code"
        },
        {
            id: "pcq004",
            mainCategory: "penal-code",
            category: "firearms-laws",
            difficulty: "intermediate",
            type: "true-false",
            question: "True or False: Carrying an openly carried handgun in a holster is a defense to PC 30.07 prosecution.",
            options: ["False", "True"],
            correct: 0,
            explanation: "False. PC 30.07(f) specifically states 'It is NOT a defense to prosecution under this section that the handgun was carried in a holster.'",
            objective: "Know open carry holster rule",
            module: "Penal Code"
        },
        {
            id: "pcq005",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            difficulty: "advanced",
            type: "scenario",
            question: "Scenario: John owns fighting cocks and sells steel gaffs to other cock owners, knowing they will use them in cockfights. What offense has John committed?",
            options: [
                "PC 42.105(b)(5) - Class A misdemeanor for selling cockfighting equipment",
                "PC 42.105(b)(1) - State jail felony for causing cocks to fight",
                "PC 42.105(b)(4) - Class A misdemeanor for training cocks",
                "No offense - selling equipment is not prohibited"
            ],
            correct: 0,
            explanation: "PC 42.105(b)(5) prohibits selling gaffs or other implements designed for cockfighting with intent they be used in cockfighting - Class A misdemeanor.",
            objective: "Apply cockfighting equipment laws",
            module: "Penal Code"
        },
        // EXPANDED COMPREHENSIVE COVERAGE
        {
            id: "pcq006",
            mainCategory: "penal-code",
            category: "assault-offenses",
            difficulty: "intermediate",
            type: "scenario",
            question: "During a bar fight, a person hits another with a beer bottle causing serious bodily injury requiring hospitalization. What offense has been committed?",
            options: [
                "Simple Assault - Class A misdemeanor",
                "Aggravated Assault - 2nd degree felony",
                "Aggravated Assault - 1st degree felony",
                "Terroristic Threat - Class B misdemeanor"
            ],
            correct: 1,
            explanation: "Under PC 22.02, this is Aggravated Assault because the actor caused serious bodily injury to another (and used a deadly weapon - bottle). Basic Aggravated Assault is a 2nd degree felony.",
            objective: "Distinguish between assault levels based on injury",
            module: "Penal Code"
        },
        {
            id: "pcq007",
            mainCategory: "penal-code",
            category: "theft-offenses",
            difficulty: "advanced",
            type: "legal-analysis",
            question: "An accomplice testifies that the defendant committed theft. What additional requirement must be met for conviction?",
            options: [
                "No additional requirement - accomplice testimony is sufficient",
                "Must have two accomplices testify",
                "Testimony must be corroborated by evidence connecting defendant to offense",
                "Accomplice must have immunity agreement"
            ],
            correct: 2,
            explanation: "Under PC 31.03(c), accomplice testimony must be corroborated by evidence that tends to connect the actor with the offense. The corroboration cannot merely show the commission of the offense.",
            objective: "Understand corroboration requirements",
            module: "Penal Code"
        },
        {
            id: "pcq008",
            mainCategory: "penal-code",
            category: "criminal-types",
            difficulty: "intermediate",
            type: "identification",
            question: "A thief carefully cases businesses for weeks, only strikes when few witnesses present, and has established relationships with criminal receivers. What type of criminal is this?",
            options: [
                "Semi-professional thief",
                "Professional criminal/thief",
                "Opportunistic offender",
                "White collar criminal"
            ],
            correct: 1,
            explanation: "This shows characteristics of a professional criminal: planning/direction, minimizing observation/witnesses, established receiver relationships, and profit motive with skills.",
            objective: "Identify criminal types based on behavior patterns",
            module: "Penal Code"
        },
        {
            id: "pcq009",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            difficulty: "intermediate",
            type: "legal-application",
            question: "A person attacks a guide dog being used by a blind person, causing injuries requiring veterinary treatment. What is the appropriate charge and punishment?",
            options: [
                "Animal Cruelty - Class A misdemeanor",
                "Assault on Assistance Animal - Class A misdemeanor",
                "Assault on Assistance Animal - State jail felony",
                "Aggravated Assault - 2nd degree felony"
            ],
            correct: 2,
            explanation: "Under PC 42.091, attacking an assistance animal is Class A misdemeanor, but injuring an assistance animal is a State jail felony. The guide dog qualifies as an assistance animal under Human Resources Code 121.002.",
            objective: "Apply assistance animal protection laws",
            module: "Penal Code"
        },
        {
            id: "pcq010",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            difficulty: "advanced",
            type: "defenses",
            question: "A defendant claims their collection of gaffs and slashers was solely for breeding roosters for poultry shows judged by appearance. What type of legal protection is this?",
            options: [
                "Defense to prosecution",
                "Affirmative defense",
                "Exception to application",
                "Mitigating factor only"
            ],
            correct: 1,
            explanation: "Under PC 42.105(c), breeding cocks for poultry shows judged by appearance is an affirmative defense to cockfighting equipment charges, but not available if evidence shows actor also engaging in cockfighting use.",
            objective: "Understand cockfighting defenses",
            module: "Penal Code"
        },
        {
            id: "pcq011",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            difficulty: "intermediate",
            type: "enhancement",
            question: "A person commits bestiality in the presence of a 16-year-old child. What is the punishment level?",
            options: [
                "State jail felony",
                "3rd degree felony",
                "2nd degree felony",
                "1st degree felony"
            ],
            correct: 2,
            explanation: "Under PC 21.09, bestiality is normally a State jail felony, but becomes a 2nd degree felony if committed under (a)(9) in the presence of a child under 18 years of age.",
            objective: "Apply bestiality enhancement provisions",
            module: "Penal Code"
        },
        {
            id: "pcq012",
            mainCategory: "penal-code",
            category: "property-crimes",
            difficulty: "intermediate",
            type: "notice-requirements",
            question: "Purple paint marks for trespass notice must meet specific requirements. Which is INCORRECT?",
            options: [
                "Vertical lines at least 8 inches long and 1 inch wide",
                "Bottom of mark 3-5 feet from ground",
                "No more than 50 feet apart on all land types",
                "Placed at readily visible locations"
            ],
            correct: 2,
            explanation: "Purple paint marks must be no more than 100 feet apart on forest land or 1,000 feet apart on other land - not 50 feet apart on all land types.",
            objective: "Know specific purple paint requirements",
            module: "Penal Code"
        },
        {
            id: "pcq013",
            mainCategory: "penal-code",
            category: "property-crimes",
            difficulty: "advanced",
            type: "enhancement",
            question: "A person trespasses on a completely enclosed chemical manufacturing facility. What enhancement applies?",
            options: [
                "Remains Class B misdemeanor",
                "Enhanced to Class A misdemeanor - Critical Infrastructure",
                "Enhanced to State jail felony",
                "Enhanced to 3rd degree felony"
            ],
            correct: 1,
            explanation: "Under PC 30.05, criminal trespass on critical infrastructure facility (including chemical manufacturing) that is completely enclosed by obvious barrier is enhanced to Class A misdemeanor.",
            objective: "Apply critical infrastructure enhancements",
            module: "Penal Code"
        },
        {
            id: "pcq014",
            mainCategory: "penal-code",
            category: "firearms-laws",
            difficulty: "advanced",
            type: "escalation",
            question: "A license holder enters a business with a properly posted 30.06 sign while carrying a concealed handgun. The business owner asks them to leave, but they refuse. What is the punishment?",
            options: [
                "Class C misdemeanor with $200 maximum fine",
                "Class A misdemeanor",
                "Class B misdemeanor",
                "No offense committed"
            ],
            correct: 1,
            explanation: "Initially a Class C misdemeanor under PC 30.06, but since the license holder received personal oral notice and failed to depart, it becomes a Class A misdemeanor.",
            objective: "Apply notice escalation in firearm trespass",
            module: "Penal Code"
        },
        {
            id: "pcq015",
            mainCategory: "penal-code",
            category: "firearms-laws",
            difficulty: "advanced",
            type: "technical-requirements",
            question: "A sign reads 'No weapons allowed' in English only with 1-inch letters. Is this valid for PC 30.05 firearm prohibition?",
            options: [
                "Yes - meets all requirements",
                "No - must include specific statutory language",
                "No - must be in English and Spanish",
                "Both B and C are correct"
            ],
            correct: 3,
            explanation: "Valid PC 30.05 firearm prohibition signs must include specific language 'Pursuant to Section 30.05, Penal Code...' and must be in both English and Spanish with contrasting colors.",
            objective: "Know firearm sign requirements",
            module: "Penal Code"
        },
        {
            id: "pcq016",
            mainCategory: "penal-code",
            category: "property-crimes",
            difficulty: "advanced",
            type: "peace-officer-exceptions",
            question: "An off-duty peace officer from Oklahoma (recognized state) enters Texas property prohibited to firearms. What protection do they have?",
            options: [
                "No protection - must follow all trespass laws",
                "Protected only if on official duty",
                "Protected under PC 30.05(i) peace officer exception",
                "Protected only with written authorization"
            ],
            correct: 2,
            explanation: "Under PC 30.05(i), the section doesn't apply if entry prohibition was based on handgun/weapon and actor was peace officer from recognized state (with firearm proficiency requirements and reciprocity), regardless of whether engaged in official duty.",
            objective: "Apply peace officer exceptions",
            module: "Penal Code"
        },
        {
            id: "pcq017",
            mainCategory: "penal-code",
            category: "property-crimes",
            difficulty: "advanced",
            type: "constitutional-protections",
            question: "A university student argues their protest was protected speech when charged with enhanced trespass. What happens?",
            options: [
                "Automatic dismissal of charges",
                "Reduced to Class B misdemeanor automatically",
                "May raise First Amendment defense at punishment stage",
                "No constitutional protections apply"
            ],
            correct: 2,
            explanation: "Under PC 30.05(d-2), at punishment stage, defendant may raise whether they were engaging in speech/expressive conduct protected by 1st Amendment or Texas Constitution Article I, Section 8. If proven by preponderance, Class A enhancement doesn't apply.",
            objective: "Know constitutional protections in trespass",
            module: "Penal Code"
        },
        {
            id: "pcq018",
            mainCategory: "penal-code",
            category: "firearms-laws",
            difficulty: "advanced",
            type: "rental-property-defenses",
            question: "A hotel guest carries their concealed handgun from their room to their car in the parking garage of a property posted with 30.06 signs. Are they protected?",
            options: [
                "No protection - violates 30.06",
                "Protected under hotel guest defense",
                "Protected only if using designated parking",
                "Protected only during daylight hours"
            ],
            correct: 1,
            explanation: "Under PC 30.06(f-4), there is a defense for hotel guests carrying/storing in their room or en route to/from their unit/vehicle, including in designated parking areas.",
            objective: "Apply rental property defenses",
            module: "Penal Code"
        },
        {
            id: "pcq019",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            difficulty: "advanced",
            type: "age-exceptions",
            question: "A 14-year-old attends a cockfight as a spectator. What is the appropriate charge?",
            options: [
                "Class C misdemeanor under PC 42.105(b)(6)",
                "Class A misdemeanor due to enhancement",
                "No charge - age exception applies",
                "Deferred adjudication only"
            ],
            correct: 2,
            explanation: "Under PC 42.105(f), it is an exception to application of PC 42.105(b)(6) (attending as spectator) if the actor is 15 years of age or younger at the time of the offense.",
            objective: "Apply age exceptions in animal fighting laws",
            module: "Penal Code"
        },
        {
            id: "pcq020",
            mainCategory: "penal-code",
            category: "property-crimes",
            difficulty: "advanced",
            type: "specialized-worker-defenses",
            question: "A railway worker enters a railroad switching yard to exercise rights under the Railway Labor Act. Is this criminal trespass?",
            options: [
                "Yes - no exceptions for workers",
                "No - railway worker defense applies under PC 30.05(g)",
                "Only if they have written authorization",
                "Only during specified work hours"
            ],
            correct: 1,
            explanation: "Under PC 30.05(g), it is a defense to prosecution that the actor entered a railroad switching yard and was an employee or representative of employees exercising a right under the Railway Labor Act (45 U.S.C. Section 151 et seq.).",
            objective: "Know specialized worker defenses",
            module: "Penal Code"
        },
        // EXPANDED PROPERTY DAMAGE AND BURGLARY SCENARIOS
        {
            id: "pcq021",
            mainCategory: "penal-code",
            category: "property-crimes",
            difficulty: "intermediate",
            type: "legal-application",
            question: "A person breaks into a home intending to steal jewelry while the family is away. What offense has been committed?",
            options: [
                "Criminal Trespass - Class B misdemeanor",
                "Burglary of Habitation - 2nd degree felony",
                "Burglary of Building - State jail felony",
                "Theft - punishment based on value"
            ],
            correct: 1,
            explanation: "Under PC 30.02, entering a habitation without effective consent with intent to commit theft is Burglary of Habitation, a 2nd degree felony.",
            objective: "Apply burglary laws to residential scenarios",
            module: "Penal Code"
        },
        {
            id: "pcq022",
            mainCategory: "penal-code",
            category: "property-crimes",
            difficulty: "advanced",
            type: "enhancement-application",
            question: "A person vandalizes a church by spray painting graffiti causing $1,200 in damage. What is the appropriate charge?",
            options: [
                "Graffiti - Class A misdemeanor based on damage amount",
                "Graffiti - State jail felony due to special location",
                "Criminal Mischief - Class A misdemeanor",
                "Both graffiti and criminal mischief charges possible"
            ],
            correct: 1,
            explanation: "Under PC 28.08(d), graffiti on a place of worship with pecuniary loss of $750-$30,000 is enhanced to a State jail felony regardless of the normal damage amount classification.",
            objective: "Apply graffiti special location enhancements",
            module: "Penal Code"
        },
        {
            id: "pcq023",
            mainCategory: "penal-code",
            category: "property-crimes",
            difficulty: "intermediate",
            type: "technical-application",
            question: "A person uses an etching tool to carve their name into a public monument causing $50 in damage. What offense and punishment apply?",
            options: [
                "Graffiti - Class C misdemeanor based on damage amount",
                "Graffiti - Class B misdemeanor",
                "Criminal Mischief - Class C misdemeanor",
                "No offense due to low damage amount"
            ],
            correct: 0,
            explanation: "Under PC 28.08, using an etching device to make markings constitutes graffiti. With damage under $100, it's a Class C misdemeanor. The public monument enhancement in (d) only applies to damages $750+ to under $30,000.",
            objective: "Apply graffiti laws with etching devices",
            module: "Penal Code"
        },
        {
            id: "pcq024",
            mainCategory: "penal-code",
            category: "property-crimes",
            difficulty: "advanced",
            type: "legal-analysis",
            question: "A person damages a power substation causing $5,000 damage and power outages to 1,000 homes. What enhancement applies under PC 28.03?",
            options: [
                "State jail felony based on damage amount only",
                "State jail felony due to public utility interruption enhancement",
                "3rd degree felony based on damage amount",
                "Class A misdemeanor"
            ],
            correct: 1,
            explanation: "Under PC 28.03(f)(5), criminal mischief involving public utilities causing interruption of service with damage $750+ is enhanced to State jail felony. This applies even though $5,000 would normally be State jail felony anyway.",
            objective: "Apply criminal mischief utility enhancements",
            module: "Penal Code"
        },
        {
            id: "pcq025",
            mainCategory: "penal-code",
            category: "property-crimes",
            difficulty: "intermediate",
            type: "arson-elements",
            question: "A person accidentally starts a fire while trying to clear brush on their property, which spreads to a neighbor's barn. What offense, if any?",
            options: [
                "Arson - 2nd degree felony",
                "Reckless Damage - Class C misdemeanor",
                "Criminal Mischief - based on damage amount",
                "No offense - accidental conduct"
            ],
            correct: 3,
            explanation: "Arson under PC 28.02 requires intent to destroy or damage property. Accidental fires, even if negligent, don't meet the intentional mental state required for arson.",
            objective: "Understand intent requirement for arson",
            module: "Penal Code"
        },
        {
            id: "pcq026",
            mainCategory: "penal-code",
            category: "property-crimes",
            difficulty: "advanced",
            type: "controlled-burning-exception",
            question: "A rancher conducts controlled burning of open-space land that accidentally spreads beyond the intended area. What protection do they have?",
            options: [
                "No protection - liable for arson",
                "Exception under PC 28.02(b) for controlled burning",
                "Defense if they had a city permit",
                "Both B and C provide protection"
            ],
            correct: 1,
            explanation: "Under PC 28.02(b), it is an exception to application of arson that the fire was part of controlled burning of open-space land. The city permit defense in (c) applies to different scenarios.",
            objective: "Know controlled burning exceptions",
            module: "Penal Code"
        },
        {
            id: "pcq027",
            mainCategory: "penal-code",
            category: "property-crimes",
            difficulty: "advanced",
            type: "aggregation-rules",
            question: "Over three days, a person spray paints graffiti on 5 different buildings owned by the same company, causing $300 damage to each building. How is this charged?",
            options: [
                "5 separate Class C misdemeanor charges",
                "5 separate Class B misdemeanor charges", 
                "One Class A misdemeanor charge with $1,500 aggregated damage",
                "Cannot aggregate damage across multiple days"
            ],
            correct: 2,
            explanation: "Under PC 28.08(c), when multiple properties are marked pursuant to one scheme or continuing course of conduct, it may be considered one offense and pecuniary loss amounts may be aggregated. $1,500 total = Class A misdemeanor.",
            objective: "Apply aggregation rules in graffiti cases",
            module: "Penal Code"
        },
        {
            id: "pcq028",
            mainCategory: "penal-code",
            category: "criminal-types",
            difficulty: "intermediate",
            type: "pattern-analysis",
            question: "A series of commercial building burglaries all involve sophisticated safe-cracking techniques and occur during business hours. This suggests:",
            options: [
                "Semi-professional thief with drug motivation",
                "Professional criminal with specialized safe burglary skills",
                "Opportunistic crime based on random chance",
                "White collar criminal with inside information"
            ],
            correct: 1,
            explanation: "Professional criminals often specialize in specific types of burglary. Safe burglary requires specialized skills and tools, indicating a professional with experience in commercial premises and safe-cracking techniques.",
            objective: "Analyze criminal patterns to identify offender types",
            module: "Penal Code"
        },
        {
            id: "pcq029",
            mainCategory: "penal-code",
            category: "property-crimes",
            difficulty: "advanced",
            type: "enhancement-comparison",
            question: "Compare: Person A vandalizes a school causing $1,000 damage. Person B vandalizes a private business causing $1,000 damage. What are the respective charges?",
            options: [
                "Both Class A misdemeanors",
                "Person A: State jail felony, Person B: Class A misdemeanor",
                "Person A: Class A misdemeanor, Person B: Class A misdemeanor",
                "Both State jail felonies"
            ],
            correct: 1,
            explanation: "Person A: Criminal mischief on school with $750+ damage is enhanced to State jail felony under PC 28.03(f)(4). Person B: Standard criminal mischief at $1,000 = Class A misdemeanor under normal damage ranges.",
            objective: "Compare enhancement applications",
            module: "Penal Code"
        },
        {
            id: "pcq030",
            mainCategory: "penal-code",
            category: "property-crimes",
            difficulty: "advanced",
            type: "arson-enhancement",
            question: "A person intentionally sets fire to an apartment building where people live, and one resident suffers serious burns requiring hospitalization. What is the appropriate charge?",
            options: [
                "Arson - 2nd degree felony",
                "Arson - 1st degree felony due to habitation",
                "Arson - 1st degree felony due to bodily injury",
                "Both B and C enhancements apply"
            ],
            correct: 3,
            explanation: "Under PC 28.02(d), arson becomes 1st degree felony if: (1) bodily injury/death occurs, OR (2) property intended to be damaged was habitation. Here, both enhancement factors are present.",
            objective: "Apply multiple arson enhancements",
            module: "Penal Code"
        }
    ],
    
    categories: {
        "penal-code": {
            name: "Penal Code",
            description: "Texas Penal Code - Assault, Theft, Property Crimes, Animal Laws, Firearms",
            icon: "fas fa-gavel",
            color: "#6f42c1"
        },
        "assault-offenses": {
            name: "Assault Offenses",
            description: "PC 22.01-22.02 Simple and Aggravated Assault",
            icon: "fas fa-fist-raised",
            color: "#dc3545"
        },
        "theft-offenses": {
            name: "Theft Offenses", 
            description: "PC 31.03 Theft and punishment ranges",
            icon: "fas fa-hand-holding",
            color: "#fd7e14"
        },
        "animal-cruelty": {
            name: "Animal Cruelty Laws",
            description: "PC 42.091, 42.10, 42.105, 21.09 Animal protection laws",
            icon: "fas fa-paw",
            color: "#28a745"
        },
        "property-crimes": {
            name: "Property Crimes",
            description: "PC 30.01-30.07 Criminal Trespass and related offenses",
            icon: "fas fa-home",
            color: "#17a2b8"
        },
        "firearms-laws": {
            name: "Firearms Laws",
            description: "PC 30.06-30.07 Handgun license holder trespass",
            icon: "fas fa-crosshairs",
            color: "#6610f2"
        },
        "criminal-types": {
            name: "Criminal Types & Analysis",
            description: "Professional vs Semi-professional criminals, behavioral patterns, investigation techniques",
            icon: "fas fa-search",
            color: "#17a2b8"
        }
    }
};

// Merge Penal Code content into main studyData
if (typeof studyData !== 'undefined' && typeof penalCodeData !== 'undefined') {
    console.log('🔄 Merging Penal Code content into main study data...');
    console.log('📊 Penal Code flashcards to merge:', penalCodeData.flashcards?.length || 0);
    console.log('📊 Penal Code practice questions to merge:', penalCodeData.practiceQuestions?.length || 0);
    
    // Add the Penal Code flashcards
    if (penalCodeData.flashcards && penalCodeData.flashcards.length > 0) {
        studyData.flashcards = studyData.flashcards || [];
        studyData.flashcards.push(...penalCodeData.flashcards);
        console.log(`✅ Added ${penalCodeData.flashcards.length} Penal Code flashcards`);
    }
    
    // Add the Penal Code practice questions
    if (penalCodeData.practiceQuestions && penalCodeData.practiceQuestions.length > 0) {
        studyData.practiceQuestions = studyData.practiceQuestions || [];
        studyData.practiceQuestions.push(...penalCodeData.practiceQuestions);
        console.log(`✅ Added ${penalCodeData.practiceQuestions.length} Penal Code practice questions`);
    }
    
    // Add Penal Code categories
    studyData.categories = studyData.categories || {};
    Object.assign(studyData.categories, penalCodeData.categories);
    
    console.log(`📊 TOTAL flashcards after Penal Code merge: ${studyData.flashcards.length}`);
    console.log(`📊 TOTAL practice questions after Penal Code merge: ${studyData.practiceQuestions.length}`);
    
    // Notify that Penal Code merge is complete
    window.penalCodeLoaded = true;
} else {
    console.warn('⚠️ Could not merge Penal Code content - studyData not available');
    console.log('studyData available:', typeof studyData !== 'undefined');
    console.log('penalCodeData available:', typeof penalCodeData !== 'undefined');
}
