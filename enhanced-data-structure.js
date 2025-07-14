// TCOLE Study Tool - Enhanced Data Structure for Multiple Courses
// This file will contain the enhanced data structure supporting multiple TCOLE courses

const tcoleStudyData = {
    mainCategories: {
        "transportation-code": {
            name: "Transportation Code",
            description: "TRC - Vehicle operations, traffic laws, licensing, and equipment requirements",
            icon: "fas fa-car",
            color: "#2a5298",
            modules: ["Module 1", "Module 2", "Module 3", "Module 4", "Module 5", "Module 6", "Module 7"],
            subCategories: {
                // Module 1
                "penal-code": {
                    name: "Penal Code",
                    description: "Foundational definitions that enhance TRC violations",
                    icon: "fas fa-gavel",
                    color: "#dc3545",
                    module: "Module 1"
                },
                "warning-devices": {
                    name: "Warning Devices",
                    description: "TRC 472 - Construction zones, barricades, and flaggers",
                    icon: "fas fa-exclamation-triangle",
                    color: "#ffc107",
                    module: "Module 1"
                },
                "registration": {
                    name: "Registration",
                    description: "TRC 502 - Vehicle registration requirements and exemptions",
                    icon: "fas fa-clipboard-list",
                    color: "#007bff",
                    module: "Module 1"
                },
                "dealer-plates": {
                    name: "Dealer Plates",
                    description: "TRC 503 - Metal plates, temporary tags, and dealer violations",
                    icon: "fas fa-car-side",
                    color: "#6f42c1",
                    module: "Module 1"
                },
                "license-plates": {
                    name: "License Plates",
                    description: "TRC 504 - Display requirements and plate violations",
                    icon: "fas fa-id-badge",
                    color: "#e83e8c",
                    module: "Module 1"
                },
                // Module 2
                "licensing": {
                    name: "Driver's Licenses",
                    description: "TRC 521 - Driver's license requirements, exemptions, and violations",
                    icon: "fas fa-id-card",
                    color: "#20c997",
                    module: "Module 2"
                },
                "commercial-vehicles": {
                    name: "Commercial Driver's Licenses",
                    description: "TRC 522 - CDL requirements, classifications, and violations",
                    icon: "fas fa-truck",
                    color: "#fd7e14",
                    module: "Module 2"
                },
                // Continue with remaining modules...
            }
        },
        
        "penal-code": {
            name: "Penal Code",
            description: "PC - Criminal offenses, punishment ranges, and elements of crimes",
            icon: "fas fa-gavel",
            color: "#dc3545",
            modules: ["Assault & Family Violence", "Property Crimes", "Public Order", "Weapons", "Drugs"],
            subCategories: {
                "assault-offenses": {
                    name: "Assault Offenses",
                    description: "PC 22 - Simple Assault, Aggravated Assault, Family Violence",
                    icon: "fas fa-hand-rock",
                    color: "#dc3545",
                    module: "Assault & Family Violence"
                },
                "homicide-offenses": {
                    name: "Homicide Offenses", 
                    description: "PC 19 - Murder, Manslaughter, Criminally Negligent Homicide",
                    icon: "fas fa-skull-crossbones",
                    color: "#343a40",
                    module: "Assault & Family Violence"
                },
                "theft-offenses": {
                    name: "Theft Offenses",
                    description: "PC 31 - Theft, Robbery, Burglary, Unauthorized Use",
                    icon: "fas fa-mask",
                    color: "#6f42c1",
                    module: "Property Crimes"
                },
                "drug-offenses": {
                    name: "Drug Offenses",
                    description: "HSC 481 - Controlled Substances Act violations",
                    icon: "fas fa-pills",
                    color: "#17a2b8",
                    module: "Drugs"
                },
                "weapon-offenses": {
                    name: "Weapon Offenses",
                    description: "PC 46 - Unlawful Carrying, Prohibited Weapons",
                    icon: "fas fa-gun",
                    color: "#495057",
                    module: "Weapons"
                },
                "public-order": {
                    name: "Public Order",
                    description: "PC 42 - Disorderly Conduct, Public Intoxication, Riot",
                    icon: "fas fa-users",
                    color: "#ffc107",
                    module: "Public Order"
                },
                "dwi-offenses": {
                    name: "DWI Offenses",
                    description: "PC 49 - DWI, Intoxication Assault, Intoxication Manslaughter",
                    icon: "fas fa-wine-bottle",
                    color: "#fd7e14",
                    module: "DWI & Intoxication"
                }
            }
        },
        
        "criminal-procedure": {
            name: "Criminal Procedure",
            description: "CCP - Arrest procedures, search and seizure, evidence rules",
            icon: "fas fa-balance-scale",
            color: "#28a745",
            modules: ["Search & Seizure", "Arrest Procedures", "Court Procedures", "Evidence"],
            subCategories: {
                "search-seizure": {
                    name: "Search & Seizure",
                    description: "4th Amendment, warrants, exceptions, Terry stops",
                    icon: "fas fa-search",
                    color: "#007bff",
                    module: "Search & Seizure"
                },
                "arrest-procedures": {
                    name: "Arrest Procedures", 
                    description: "CCP Art. 14-15 - Arrest authority, procedures, Miranda",
                    icon: "fas fa-handcuffs",
                    color: "#dc3545",
                    module: "Arrest Procedures"
                },
                "evidence-rules": {
                    name: "Evidence Rules",
                    description: "Collection, preservation, chain of custody, admissibility",
                    icon: "fas fa-fingerprint",
                    color: "#6f42c1",
                    module: "Evidence"
                },
                "court-procedures": {
                    name: "Court Procedures",
                    description: "CCP Art. 27-28 - Court processes, testimony, appeals",
                    icon: "fas fa-gavel",
                    color: "#28a745",
                    module: "Court Procedures"
                },
                "vehicle-traffic-stops": {
                    name: "Arrest, Search, & Seizure for Vehicles & Traffic Stops",
                    description: "Vehicle searches, traffic stop procedures, passenger rights, automobile exceptions",
                    icon: "fas fa-car-crash",
                    color: "#fd7e14",
                    module: "Search & Seizure"
                }
            }
        },
        
        "general-topics": {
            name: "General Topics",
            description: "Report writing, patrol procedures, ethics, and professional standards",
            icon: "fas fa-clipboard-list",
            color: "#6c757d",
            modules: ["Report Writing", "Patrol", "Ethics", "Emergency Response"],
            subCategories: {
                "report-writing": {
                    name: "Report Writing",
                    description: "Documentation, narrative writing, evidence recording",
                    icon: "fas fa-edit",
                    color: "#17a2b8",
                    module: "Report Writing"
                },
                "patrol-procedures": {
                    name: "Patrol Procedures",
                    description: "Building searches, vehicle stops, area patrol",
                    icon: "fas fa-route",
                    color: "#28a745",
                    module: "Patrol"
                },
                "constitutional-law": {
                    name: "Constitutional Law",
                    description: "4th, 5th, 14th Amendments and civil rights",
                    icon: "fas fa-flag-usa",
                    color: "#dc3545",
                    module: "Constitutional Law"
                },
                "ethics-professionalism": {
                    name: "Ethics & Professionalism",
                    description: "Code of conduct, bias recognition, de-escalation",
                    icon: "fas fa-handshake",
                    color: "#ffc107",
                    module: "Ethics"
                },
                "traffic-enforcement": {
                    name: "Traffic Enforcement",
                    description: "Stop procedures, DWI detection, crash investigation",
                    icon: "fas fa-traffic-light",
                    color: "#fd7e14",
                    module: "Traffic Enforcement"
                }
            }
        }
    },
    
    // Current Transportation Code data will be preserved here
    flashcards: [
        // Vehicle Traffic Stops - Basic Definitions
        {
            id: "vts001",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "basic",
            question: "What does 'Open container' mean according to 49.031?",
            answer: "A bottle, can, or other receptacle that contains any amount of alcoholic beverage and that is open, that has been opened, that has a broken seal, or the contents of which are partially removed.",
            objective: "Understanding definitions in alcohol-related vehicle offenses",
            module: "Module 1"
        },
        {
            id: "vts002",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "basic",
            question: "What is the 'passenger area of a motor vehicle'?",
            answer: "The area of a motor vehicle designed for the seating of the operator and passengers. Does NOT include: glove compartment or similar locked storage, trunk, or area behind the last upright seat if no trunk.",
            objective: "Understanding vehicle area definitions",
            module: "Module 1"
        },
        {
            id: "vts003",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "basic",
            question: "What is the punishment for Possession of Alcoholic Beverage in Motor Vehicle (49.031)?",
            answer: "Class C misdemeanor",
            objective: "Punishment classifications",
            module: "Module 1"
        },
        {
            id: "vts004",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            question: "What are the elements of Driving While Intoxicated (49.04)?",
            answer: "A person commits an offense if the person is intoxicated while operating a motor vehicle in a public place.",
            objective: "Elements of DWI offense",
            module: "Module 1"
        },
        {
            id: "vts005",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "basic",
            question: "What is the minimum confinement for DWI under 49.04?",
            answer: "Class B misdemeanor with a minimum term of confinement of 72 hours",
            objective: "DWI punishment ranges",
            module: "Module 1"
        },
        {
            id: "vts006",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            question: "What is the enhanced punishment for DWI with open container?",
            answer: "Class B misdemeanor with a minimum term of confinement of six days",
            objective: "Enhanced DWI penalties",
            module: "Module 1"
        },
        {
            id: "vts007",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            question: "What BAC level enhances DWI to a Class A misdemeanor?",
            answer: "0.15 or more alcohol concentration level",
            objective: "DWI enhancement levels",
            module: "Module 1"
        },
        {
            id: "vts008",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            question: "What are the elements of DWI with Child Passenger (49.045)?",
            answer: "(1) person is intoxicated while operating a motor vehicle in a public place; and (2) the vehicle is occupied by a passenger who is younger than 15 years of age.",
            objective: "DWI with child passenger elements",
            module: "Module 1"
        },
        {
            id: "vts009",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "basic",
            question: "What is the punishment for DWI with Child Passenger (49.045)?",
            answer: "State jail felony",
            objective: "Enhanced DWI penalties",
            module: "Module 1"
        },
        {
            id: "vts010",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "basic",
            question: "What is the punishment for Flying While Intoxicated (49.05)?",
            answer: "Class B misdemeanor with a minimum term of confinement of 72 hours",
            objective: "Intoxication offense penalties",
            module: "Module 1"
        },
        {
            id: "vts011",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "basic",
            question: "What is the punishment for Boating While Intoxicated (49.06)?",
            answer: "Class B misdemeanor with a minimum term of confinement of 72 hours",
            objective: "Intoxication offense penalties",
            module: "Module 1"
        },
        {
            id: "vts012",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            question: "What are the elements of Intoxication Assault (49.07)?",
            answer: "By accident or mistake: while operating a motor vehicle/aircraft/watercraft/amusement ride while intoxicated, by reason of that intoxication causes serious bodily injury to another.",
            objective: "Intoxication assault elements",
            module: "Module 1"
        },
        {
            id: "vts013",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "basic",
            question: "What is the punishment for Intoxication Assault (49.07)?",
            answer: "Third degree felony",
            objective: "Intoxication offense penalties",
            module: "Module 1"
        },
        {
            id: "vts014",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            question: "What are the elements of Intoxication Manslaughter (49.08)?",
            answer: "(1) operates a motor vehicle in a public place, operates an aircraft, watercraft, or amusement ride; and (2) is intoxicated and by reason of that intoxication causes the death of another by accident or mistake.",
            objective: "Intoxication manslaughter elements",
            module: "Module 1"
        },
        {
            id: "vts015",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "basic",
            question: "What is the punishment for Intoxication Manslaughter (49.08)?",
            answer: "Second degree felony",
            objective: "Intoxication offense penalties",
            module: "Module 1"
        },
        {
            id: "vts016",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "advanced",
            question: "What is the enhanced penalty for Intoxication Assault causing SBI to a LEO or Judge?",
            answer: "First degree felony",
            objective: "Enhanced penalties for public servants",
            module: "Module 1"
        },
        {
            id: "vts017",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "advanced",
            question: "What enhancement applies for a second DWI conviction within 5 years?",
            answer: "Requires interlock on any vehicle owned or operated",
            objective: "DWI repeat offender consequences",
            module: "Module 1"
        },
        {
            id: "vts018",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            question: "What did the Carroll Doctrine (1925) establish?",
            answer: "Officers can search an automobile without a warrant if the officer has probable cause for the search. The mobility of the vehicle prevented officers from being able to obtain a warrant.",
            objective: "Vehicle search case law",
            module: "Module 2"
        },
        {
            id: "vts019",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            question: "What did Wyoming v. Houghton (1999) decide about container searches?",
            answer: "There is no distinction between containers owned by the driver and those owned by anyone else. With PC to search the car, any containers may be searched regardless of ownership.",
            objective: "Container search authority",
            module: "Module 2"
        },
        {
            id: "vts020",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            question: "What did California v. Acevedo (1991) establish about specific container PC?",
            answer: "If police have probable cause to believe a container in a moveable car contains contraband, they may search the container without a warrant, but the search must be limited to that specific container unless they have PC for the car too.",
            objective: "Specific container search limits",
            module: "Module 2"
        },
        {
            id: "vts021",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "advanced",
            question: "What did Collins v. Virginia (2018) rule about curtilage searches?",
            answer: "The automobile exception does not allow a warrantless search of a vehicle located within a home or its curtilage.",
            objective: "Curtilage search restrictions",
            module: "Module 2"
        },
        {
            id: "vts022",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            question: "According to Arizona v. Gant (2009), when can you search a vehicle after arrest?",
            answer: "Only if the arrestee is within reaching distance of the passenger compartment at the time of search OR there is reasonable belief that crime-related evidence is located in the vehicle.",
            objective: "Search incident to arrest limitations",
            module: "Module 2"
        },
        {
            id: "vts023",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            question: "What did Michigan v. Long (1983) allow regarding vehicle frisks?",
            answer: "A limited search of the passenger compartment for weapons if officers reasonably believe a suspect is dangerous and may gain immediate control of weapons.",
            objective: "Protective sweeps of vehicles",
            module: "Module 2"
        },
        {
            id: "vts024",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "basic",
            question: "What are the 3 good questions for checking reasonable suspicion stops?",
            answer: "1) What about the occupant caught your attention? 2) What was inconsistent with innocent conduct? 3) What was consistent with criminal conduct?",
            objective: "Reasonable suspicion development",
            module: "Module 3"
        },
        {
            id: "vts025",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            question: "What must you remember about traffic stops duration?",
            answer: "Traffic stops are NOT FOREVER. Investigative detentions beyond a traffic violation REQUIRE further reasonable suspicion built during the stop routine.",
            objective: "Traffic stop duration limits",
            module: "Module 3"
        },
        {
            id: "vts026",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "advanced",
            question: "What did DYAR v. STATE (2003) establish about suspicious circumstances arrests?",
            answer: "Police may arrest without warrant when they have PC that person X committed a felony/breach of peace, found in location Y under suspicious circumstances, and no time for warrant because: person won't remain, evidence will disappear, or person poses continuing threat.",
            objective: "Warrantless arrest authority",
            module: "Module 3"
        },
        {
            id: "vts027",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            question: "Name 5 common vehicle characteristics used for drug smuggling.",
            answer: "Reliable vehicle with large capacity, inconspicuous to blend in, false compartments, tampered lug nuts/bolts, vehicle not registered to driver.",
            objective: "Drug interdiction indicators",
            module: "Module 4"
        },
        {
            id: "vts028",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            question: "What are typical characteristics of drug smugglers?",
            answer: "Extended travel without luggage, luggage on back seat, empty suitcases, nervous upon contact, attempts to separate from vehicle.",
            objective: "Drug smuggler behavioral indicators",
            module: "Module 4"
        },
        {
            id: "vts029",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            question: "What are the elements of Smuggling of Persons (20.05)?",
            answer: "Knowingly uses motor vehicle/aircraft/watercraft to transport an individual with intent to: (A) conceal from peace officer or (B) flee from officer attempting lawful arrest/detention.",
            objective: "Human smuggling offense elements",
            module: "Module 5"
        },
        {
            id: "vts030",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "basic",
            question: "What is the basic punishment for Smuggling of Persons (20.05)?",
            answer: "Third degree felony with minimum 10 years imprisonment",
            objective: "Human smuggling penalties",
            module: "Module 5"
        }
    ], // Will be populated from existing data
    practiceQuestions: [
        // Vehicle Traffic Stops Practice Questions
        {
            id: "vtsq001",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "basic",
            type: "multiple-choice",
            question: "What is the punishment for basic DWI under 49.04?",
            options: [
                "Class B misdemeanor with minimum 72 hours confinement",
                "Class A misdemeanor",
                "Class C misdemeanor",
                "State jail felony"
            ],
            correctAnswer: 0,
            explanation: "DWI under 49.04 is a Class B misdemeanor with a minimum term of confinement of 72 hours.",
            objective: "DWI punishment classifications",
            module: "Module 1"
        },
        {
            id: "vtsq002",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "If a DWI suspect has a BAC of 0.15 or higher, what is the offense level?",
            options: [
                "Class A misdemeanor",
                "Class B misdemeanor",
                "State jail felony",
                "Third degree felony"
            ],
            correctAnswer: 0,
            explanation: "A BAC of 0.15 or more enhances DWI from Class B to Class A misdemeanor.",
            objective: "DWI enhancement levels",
            module: "Module 1"
        },
        {
            id: "vtsq003",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "What is the punishment for DWI with a child passenger under 15?",
            options: [
                "State jail felony",
                "Class A misdemeanor",
                "Third degree felony",
                "Class B misdemeanor with 6 days minimum"
            ],
            correctAnswer: 0,
            explanation: "DWI with Child Passenger (49.045) is a state jail felony.",
            objective: "Enhanced DWI penalties",
            module: "Module 1"
        },
        {
            id: "vtsq004",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "According to Arizona v. Gant, when can officers search a vehicle after arrest?",
            options: [
                "Only if arrestee is within reach of passenger compartment OR reasonable belief evidence is in vehicle",
                "Always as part of search incident to arrest",
                "Only with a warrant",
                "Only if the arrest was for a vehicle-related offense"
            ],
            correctAnswer: 0,
            explanation: "Gant limited vehicle searches to when arrestee can reach the compartment or when there's reasonable belief of crime-related evidence.",
            objective: "Vehicle search limitations",
            module: "Module 2"
        },
        {
            id: "vtsq005",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "What did the Carroll Doctrine establish?",
            options: [
                "Warrantless vehicle searches with probable cause due to mobility",
                "All vehicles can be searched without warrant",
                "Vehicles in curtilage can be searched",
                "Only the driver's area can be searched"
            ],
            correctAnswer: 0,
            explanation: "Carroll Doctrine allows warrantless vehicle searches when there's probable cause, due to the inherent mobility of vehicles.",
            objective: "Automobile exception understanding",
            module: "Module 2"
        },
        {
            id: "vtsq006",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "advanced",
            type: "scenario",
            question: "Scenario: Officer stops vehicle for speeding. Driver appears nervous, sweating in cold weather, and gives conflicting stories about destination. Passenger is upset and won't provide information. What should the officer consider?",
            options: [
                "Reasonable suspicion may be developing - investigate further with proper questioning",
                "Immediately search the vehicle",
                "Release both individuals immediately",
                "Arrest both for suspicious behavior"
            ],
            correctAnswer: 0,
            explanation: "Nervousness, conflicting stories, and unusual behavior in cold weather may constitute reasonable suspicion requiring further investigation, but must be based on specific articulable facts.",
            objective: "Reasonable suspicion development",
            module: "Module 3"
        },
        {
            id: "vtsq007",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            type: "scenario",
            question: "Scenario: During a traffic stop for defective tail lamp, officer hears screaming from the trunk and finds people being smuggled. What offense?",
            options: [
                "Smuggling of Persons (20.05) - Third degree felony",
                "Kidnapping",
                "Human Trafficking (20A.02)",
                "Transportation violation only"
            ],
            correctAnswer: 0,
            explanation: "This scenario fits Smuggling of Persons (20.05) - using a motor vehicle to transport individuals with intent to conceal from peace officers.",
            objective: "Human smuggling offense identification",
            module: "Module 5"
        },
        {
            id: "vtsq008",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "basic",
            type: "true-false",
            question: "True or False: Traffic stops can last indefinitely as long as the officer is investigating.",
            options: ["False", "True"],
            correctAnswer: 0,
            explanation: "False. Traffic stops are NOT FOREVER. Any detention beyond the traffic violation requires additional reasonable suspicion.",
            objective: "Traffic stop duration limits",
            module: "Module 3"
        },
        {
            id: "vtsq009",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "What areas are NOT included in the 'passenger area' for open container purposes?",
            options: [
                "Locked glove compartment, trunk, area behind last upright seat (no trunk)",
                "Back seat area",
                "Front console",
                "Door pockets"
            ],
            correctAnswer: 0,
            explanation: "Passenger area excludes locked glove compartments, trunk, and area behind last upright seat if vehicle has no trunk.",
            objective: "Vehicle area definitions",
            module: "Module 1"
        },
        {
            id: "vtsq010",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "advanced",
            type: "scenario",
            question: "Scenario: Drunk person at bar refuses ride from friend and insists on driving. Friend is sober and willing to be responsible. What should officer do?",
            options: [
                "Use best judgment - try to convince drunk person to go with friend, arrest for public intoxication if necessary",
                "Immediately arrest for attempted DWI",
                "Let the drunk person drive since they haven't driven yet",
                "Arrest the friend for interfering"
            ],
            correctAnswer: 0,
            explanation: "Officer should use discretion to prevent DWI. Can arrest for public intoxication if person won't accept help and poses danger.",
            objective: "Preventive law enforcement tactics",
            module: "Module 3"
        },
        {
            id: "vtsq011",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "What is required for inventory searches to be legal?",
            options: [
                "Must have agency policy and be administered in good faith",
                "Always legal after any arrest",
                "Only legal with warrant",
                "Only legal with consent"
            ],
            correctAnswer: 0,
            explanation: "Colorado v. Bertine requires established departmental inventory policy administered in good faith.",
            objective: "Inventory search requirements",
            module: "Module 2"
        },
        {
            id: "vtsq012",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "basic",
            type: "multiple-choice",
            question: "What is the minimum confinement for DWI with open container?",
            options: [
                "6 days",
                "72 hours",
                "30 days",
                "1 year"
            ],
            correctAnswer: 0,
            explanation: "DWI with open container carries a minimum confinement of 6 days.",
            objective: "Enhanced DWI penalties",
            module: "Module 1"
        },
        {
            id: "vtsq013",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "advanced",
            type: "scenario",
            question: "Officer arrests subject for outstanding warrant after he drives up to residence. Officer searches car and finds gun and meth in jacket in back seat. Legal?",
            options: [
                "Depends on whether Arizona v. Gant requirements are met",
                "Always legal as search incident to arrest",
                "Illegal without warrant",
                "Legal only if jacket belonged to arrestee"
            ],
            correctAnswer: 0,
            explanation: "Must meet Gant requirements: arrestee within reach of compartment OR reasonable belief of crime-related evidence. Outstanding warrant may not justify searching for evidence of that crime.",
            objective: "Search incident to arrest limitations",
            module: "Module 2"
        },
        {
            id: "vtsq014",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "What factors contribute to probable cause in drug investigations?",
            options: [
                "Nervousness, lack of ID, conflicting stories, pungent odors, heavily laden vehicle",
                "Just nervousness alone",
                "Only physical evidence",
                "Only vehicle violations"
            ],
            correctAnswer: 0,
            explanation: "Multiple factors combine: nervousness, lack of proper documentation, inconsistent stories, drug odors, and suspicious vehicle appearance.",
            objective: "Probable cause development",
            module: "Module 4"
        },
        {
            id: "vtsq015",
            mainCategory: "criminal-procedure",
            category: "vehicle-traffic-stops",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "Which case established that automobile exception doesn't apply in curtilage?",
            options: [
                "Collins v. Virginia (2018)",
                "Carroll v. U.S. (1925)",
                "Arizona v. Gant (2009)",
                "Wyoming v. Houghton (1999)"
            ],
            correctAnswer: 0,
            explanation: "Collins v. Virginia (2018) ruled that the automobile exception doesn't allow warrantless searches of vehicles within a home's curtilage.",
            objective: "Curtilage search restrictions",
            module: "Module 2"
        }
    ], // Will be populated from existing data
    
    // Content loading functions
    loadContentFromFile: function(mainCategory, filePath) {
        // This function will parse content from text files
        // Implementation will be added to load external content
    },
    
    // Utility functions
    getSubCategoriesByMainCategory: function(mainCategory) {
        return this.mainCategories[mainCategory]?.subCategories || {};
    },
    
    getFilteredContent: function(mainCategory, subCategory = null, difficulty = null) {
        let filtered = {
            flashcards: this.flashcards.filter(item => {
                if (mainCategory && item.mainCategory !== mainCategory) return false;
                if (subCategory && item.category !== subCategory) return false;
                if (difficulty && item.difficulty !== difficulty) return false;
                return true;
            }),
            practiceQuestions: this.practiceQuestions.filter(item => {
                if (mainCategory && item.mainCategory !== mainCategory) return false;
                if (subCategory && item.category !== subCategory) return false;
                if (difficulty && item.difficulty !== difficulty) return false;
                return true;
            })
        };
        return filtered;
    }
};

console.log('Enhanced TCOLE Study Data Structure Loaded');

// Merge vehicle traffic stops content into main studyData
if (typeof studyData !== 'undefined' && typeof tcoleStudyData !== 'undefined') {
    console.log('🔄 Merging vehicle traffic stops content into main study data...');
    console.log('📊 Original flashcards count:', studyData.flashcards?.length || 0);
    console.log('📊 New flashcards to merge:', tcoleStudyData.flashcards?.length || 0);
    
    // Add the new flashcards to existing studyData
    if (tcoleStudyData.flashcards && tcoleStudyData.flashcards.length > 0) {
        studyData.flashcards = studyData.flashcards || [];
        
        // Add IDs to prevent conflicts
        tcoleStudyData.flashcards.forEach((card, index) => {
            if (!card.id || typeof card.id === 'string') {
                card.id = 10000 + index; // Start vehicle traffic IDs at 10000
            }
        });
        
        studyData.flashcards.push(...tcoleStudyData.flashcards);
        console.log(`✅ Added ${tcoleStudyData.flashcards.length} vehicle traffic stops flashcards`);
    }
    
    // Add the new practice questions to existing studyData
    if (tcoleStudyData.practiceQuestions && tcoleStudyData.practiceQuestions.length > 0) {
        studyData.practiceQuestions = studyData.practiceQuestions || [];
        
        // Add IDs to prevent conflicts
        tcoleStudyData.practiceQuestions.forEach((question, index) => {
            if (!question.id || typeof question.id === 'string') {
                question.id = 20000 + index; // Start vehicle traffic question IDs at 20000
            }
        });
        
        studyData.practiceQuestions.push(...tcoleStudyData.practiceQuestions);
        console.log(`✅ Added ${tcoleStudyData.practiceQuestions.length} vehicle traffic stops practice questions`);
    }
    
    // Add the vehicle-traffic-stops category to studyData categories
    studyData.categories = studyData.categories || {};
    studyData.categories['vehicle-traffic-stops'] = {
        name: "Vehicle & Traffic Stops",
        description: "Arrest, Search, & Seizure for Vehicles & Traffic Stops",
        icon: "fas fa-car-crash",
        color: "#dc3545"
    };
    
    console.log(`📊 FINAL Total flashcards after merge: ${studyData.flashcards.length}`);
    console.log(`📊 FINAL Total practice questions after merge: ${studyData.practiceQuestions.length}`);
    
    // Notify that merge is complete
    window.vehicleTrafficStopsLoaded = true;
} else {
    console.warn('⚠️ Could not merge vehicle traffic stops content - studyData or tcoleStudyData not available');
    console.log('studyData available:', typeof studyData !== 'undefined');
    console.log('tcoleStudyData available:', typeof tcoleStudyData !== 'undefined');
}
