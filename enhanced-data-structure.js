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
            description: "Texas Penal Code - Assault, Theft, Property Crimes, Animal Laws, Firearms",
            icon: "fas fa-gavel",
            color: "#6f42c1",
            subcategories: {
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
        
        "field-operations": {
            name: "Field Operations & Procedures",
            description: "Community policing, field interviews, constitutional law, and decision-making procedures",
            icon: "fas fa-user-shield",
            color: "#20c997",
            modules: ["Community Policing", "Field Interviews", "Constitutional Law", "Decision Making", "De-escalation"],
            subCategories: {
                "community-policing": {
                    name: "Community Policing",
                    description: "Community resources, partnerships, and public relations",
                    icon: "fas fa-handshake",
                    color: "#28a745",
                    module: "Community Policing"
                },
                "field-interviews": {
                    name: "Field Interviews & Pedestrian Stops", 
                    description: "Pedestrian contact procedures, field interview techniques, and safety tactics",
                    icon: "fas fa-walking",
                    color: "#17a2b8",
                    module: "Field Interviews"
                },
                "constitutional-procedures": {
                    name: "Constitutional Procedures",
                    description: "4th Amendment, reasonable suspicion, probable cause, and police interactions",
                    icon: "fas fa-balance-scale",
                    color: "#dc3545",
                    module: "Constitutional Law"
                },
                "decision-making": {
                    name: "Critical Decision-Making Model",
                    description: "CDM principles, de-escalation strategies, and tactical decision making",
                    icon: "fas fa-brain",
                    color: "#6f42c1",
                    module: "Decision Making"
                },
                "exigent-circumstances": {
                    name: "Exigent Circumstances",
                    description: "Emergency doctrine, 4th Amendment exceptions, and urgent situations",
                    icon: "fas fa-exclamation-triangle",
                    color: "#ffc107",
                    module: "Constitutional Law"
                }
            }
        },
        
        "weapons-offenses": {
            name: "Weapons Offenses",
            description: "Penal Code Chapter 46 - Weapon definitions, carrying restrictions, prohibited places, and possession laws",
            icon: "fas fa-shield-alt",
            color: "#dc3545",
            modules: ["Definitions", "Carrying Laws", "Prohibited Places", "Possession Restrictions", "Exemptions"],
            subCategories: {
                "weapon-definitions": {
                    name: "Weapon Definitions",
                    description: "PC 46.01 - Legal definitions of firearms, clubs, prohibited weapons, and related terms",
                    icon: "fas fa-book",
                    color: "#007bff",
                    module: "Definitions"
                },
                "unlawful-carrying": {
                    name: "Unlawful Carrying Weapons",
                    description: "PC 46.02 - Handgun carrying restrictions, age requirements, and location exceptions",
                    icon: "fas fa-hand-paper",
                    color: "#28a745",
                    module: "Carrying Laws"
                },
                "prohibited-places": {
                    name: "Places Weapons Prohibited",
                    description: "PC 46.03 - Schools, courts, airports, hospitals, and other restricted locations",
                    icon: "fas fa-ban",
                    color: "#dc3545",
                    module: "Prohibited Places"
                },
                "unlawful-possession": {
                    name: "Unlawful Possession",
                    description: "PC 46.04 - Felon in possession, family violence, and protective order restrictions",
                    icon: "fas fa-user-slash",
                    color: "#6f42c1",
                    module: "Possession Restrictions"
                },
                "exemptions-defenses": {
                    name: "Exemptions & Defenses",
                    description: "PC 46.15 - Law enforcement, military, and other statutory exemptions",
                    icon: "fas fa-shield-virus",
                    color: "#17a2b8",
                    module: "Exemptions"
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
        // Field Operations & Procedures - Community Policing
        {
            id: "fo001",
            mainCategory: "field-operations",
            category: "community-policing",
            difficulty: "basic",
            question: "Name 5 community resources that can assist law enforcement during emergencies.",
            answer: "1) Ambulance/EMS for injured, 2) Fire Department, 3) Salvation Army, 4) Shelters for Battered Spouses/Children, 5) Rape Crisis Centers, 6) United Way, 7) Animal Control Officials, 8) City Services, 9) Medical Examiner & Justice of the Peace.",
            objective: "35.31 - Identify community resources for emergency assistance",
            module: "Community Policing"
        },
        {
            id: "fo002", 
            mainCategory: "field-operations",
            category: "field-interviews",
            difficulty: "basic",
            question: "What are the three classifications of interactions between peace officers and persons?",
            answer: "1) Consensual Encounters - officers can approach/ask questions, persons can refuse to cooperate/walk away; 2) Investigatory Stops/Detentions - temporary seizure based on reasonable suspicion; 3) Arrests - taking into custody based on probable cause.",
            objective: "10.2 - Discuss three classifications of police-citizen interactions",
            module: "Field Interviews"
        },
        {
            id: "fo003",
            mainCategory: "field-operations", 
            category: "field-interviews",
            difficulty: "intermediate",
            question: "What are the 4 Personal Contact Risk Zones officers should continuously scan?",
            answer: "1) Face & Chest - friend/foe determination, facial expressions, intoxication signs; 2) Hands - what they're holding, in pockets, showing anxiety/anger; 3) Waistband - common weapon location, bulges, keeping hands away; 4) Stance - bobbing, rocking, bladed position, pacing.",
            objective: "35.9 - Demonstrate field interview techniques and officer safety",
            module: "Field Interviews"
        },
        {
            id: "fo004",
            mainCategory: "field-operations",
            category: "constitutional-procedures", 
            difficulty: "intermediate",
            question: "What is the difference between 'reasonable suspicion' and 'probable cause'?",
            answer: "Reasonable Suspicion - specific articulable facts that would lead a reasonable officer to believe criminal activity may be afoot (Terry stop level). Probable Cause - facts and circumstances that would lead a reasonable person to believe a crime has been/is being committed (arrest level).",
            objective: "10.5 - Discuss reasonable suspicion vs probable cause",
            module: "Constitutional Law"
        },
        {
            id: "fo005",
            mainCategory: "field-operations",
            category: "decision-making",
            difficulty: "basic", 
            question: "What are the 5 steps of the Critical Decision-Making Model (CDM)?",
            answer: "Step 1: Collect information; Step 2: Assess situation, threats, and risks; Step 3: Consider police powers and agency policy; Step 4: Identify options and determine best course of action; Step 5: Act, review, and re-assess.",
            objective: "27.2 - Explain the five steps of the CDM",
            module: "Decision Making"
        },
        {
            id: "fo006",
            mainCategory: "field-operations",
            category: "decision-making",
            difficulty: "intermediate",
            question: "What are the key principles (core) of the Critical Decision-Making Model?",
            answer: "Police ethics, agency values, proportionality, and sanctity of human life. These form the moral compass that guides all decision-making - no CDM step should contradict these core principles.",
            objective: "27.1 - Describe key principles of the CDM",
            module: "Decision Making"
        },
        {
            id: "fo007",
            mainCategory: "field-operations",
            category: "exigent-circumstances",
            difficulty: "intermediate",
            question: "What are the 5 accepted exigencies that justify 4th Amendment exceptions?",
            answer: "1) Prevent serious injury and provide emergency aid; 2) Prevent imminent destruction/loss of evidence; 3) Hot/fresh pursuit of felony offense; 4) Imminent or immediate escape; 5) Hot pursuit of non-felony with reasonableness and/or another exigency.",
            objective: "Review legal exigencies for 4th Amendment exceptions",
            module: "Constitutional Law"
        },
        {
            id: "fo008",
            mainCategory: "field-operations",
            category: "field-interviews",
            difficulty: "advanced",
            question: "What is the recommended field interview position and distance for officer safety?",
            answer: "Gun side away from suspect, nothing in gun hand, offset stance, maintain at least 3-3.5 feet distance (arm's length or more), continually scan risk zones, position to allow movement and avoid being boxed in.",
            objective: "35.9 - Demonstrate proper field interview positioning",
            module: "Field Interviews"
        },
        {
            id: "fo009",
            mainCategory: "field-operations",
            category: "field-interviews",
            difficulty: "intermediate",
            question: "What approach methods can be used for pedestrian stops and what are their advantages/disadvantages?",
            answer: "Right Side (preferred - most people right-handed); Direct/Front (observe all movements but lose surprise); Rear (surprise but may provoke defense); Side (suspect off balance but can't see all movement). Two-officer V-formation for multiple subjects.",
            objective: "35.8 - Demonstrate proper pedestrian stop approaches",
            module: "Field Interviews"
        },
        {
            id: "fo010",
            mainCategory: "field-operations",
            category: "community-policing",
            difficulty: "basic",
            question: "Why do officers conduct field inquiries and what can they learn?",
            answer: "Learn About People: reaction to contact/questioning, develop citizen relationships, personal contact, learn socio-economic makeup. Learn About Places: building characteristics, unusual lights/activities, broken windows/locks, suspicious persons/vehicles, tire tracks.",
            objective: "35.10 - Discuss the use of field inquiry",
            module: "Community Policing"
        },

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
        // Field Operations & Procedures Practice Questions
        {
            id: "foq001",
            mainCategory: "field-operations",
            category: "field-interviews",
            difficulty: "basic",
            type: "multiple-choice",
            question: "What are the three classifications of police-citizen interactions?",
            options: [
                "Consensual encounters, Investigatory stops, Arrests",
                "Traffic stops, Field interviews, Arrests", 
                "Voluntary contacts, Detentions, Bookings",
                "Casual contacts, Investigations, Prosecutions"
            ],
            correct: 0,
            explanation: "The three classifications are: Consensual encounters (can refuse to cooperate), Investigatory stops/detentions (reasonable suspicion required), and Arrests (probable cause required).",
            objective: "10.2 - Three classifications of interactions",
            module: "Field Interviews"
        },
        {
            id: "foq002",
            mainCategory: "field-operations", 
            category: "decision-making",
            difficulty: "basic",
            type: "multiple-choice",
            question: "What is Step 1 of the Critical Decision-Making Model?",
            options: [
                "Collect information",
                "Assess threats and risks",
                "Consider police powers",
                "Identify options"
            ],
            correct: 0,
            explanation: "Step 1 is 'Collect information' - gathering facts from dispatch, witnesses, databases, and using training/experience to understand the situation.",
            objective: "27.2 - Explain CDM steps",
            module: "Decision Making"
        },
        {
            id: "foq003",
            mainCategory: "field-operations",
            category: "constitutional-procedures",
            difficulty: "intermediate", 
            type: "scenario",
            question: "Scenario: Officer observes subject looking into car windows in parking lot during school hours. Subject appears 14-16 years old. Subject tries car doors, then enters one vehicle and rummages inside. Claims it's his car but registration shows different owner. Do you have reasonable suspicion?",
            options: [
                "Yes - multiple articulable facts suggest possible vehicle burglary",
                "No - just suspicious behavior without criminal evidence",
                "Need more information before determining",
                "Yes - but only because he's a juvenile during school hours"
            ],
            correct: 0,
            explanation: "Multiple articulable facts: juvenile during school, trying multiple car doors, entering vehicle, conflicting ownership, suspicious behavior pattern - all point to possible auto burglary.",
            objective: "Reasonable suspicion development",
            module: "Constitutional Law"
        },
        {
            id: "foq004",
            mainCategory: "field-operations",
            category: "exigent-circumstances",
            difficulty: "intermediate",
            type: "scenario", 
            question: "Scenario: Officer dispatched to suicidal subject. Caller reports sister took pills and stopped talking. No answer at door but officer sees female on floor through window. What can officer do?",
            options: [
                "Enter to provide emergency aid - exigent circumstances exception",
                "Must obtain warrant before entry",
                "Can only enter if door is unlocked", 
                "Must wait for EMS before taking action"
            ],
            correct: 0,
            explanation: "Emergency aid exception allows entry to prevent serious injury/death. Officer has reasonable belief person needs immediate medical assistance.",
            objective: "Emergency aid exigency",
            module: "Constitutional Law"
        },
        {
            id: "foq005",
            mainCategory: "field-operations",
            category: "field-interviews",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "What are the 4 Personal Contact Risk Zones officers should continuously monitor?",
            options: [
                "Face/Chest, Hands, Waistband, Stance",
                "Head, Arms, Torso, Legs",
                "Eyes, Mouth, Hands, Feet", 
                "Expression, Posture, Movement, Clothing"
            ],
            correct: 0,
            explanation: "The 4 risk zones are: Face & Chest (friend/foe, expressions), Hands (what they're doing/holding), Waistband (weapon location), and Stance (aggressive positioning).",
            objective: "35.9 - Field interview safety techniques",
            module: "Field Interviews"
        },
        {
            id: "foq006",
            mainCategory: "field-operations",
            category: "decision-making",
            difficulty: "basic",
            type: "multiple-choice",
            question: "What are the key principles that form the core of the Critical Decision-Making Model?",
            options: [
                "Police ethics, agency values, proportionality, sanctity of human life",
                "Speed, efficiency, safety, compliance",
                "Law, policy, training, experience",
                "Assessment, planning, action, evaluation"
            ],
            correct: 0,
            explanation: "The CDM core consists of police ethics, agency values, proportionality, and sanctity of human life - these guide all decision-making.",
            objective: "27.1 - CDM key principles", 
            module: "Decision Making"
        },
        {
            id: "foq007",
            mainCategory: "field-operations",
            category: "community-policing",
            difficulty: "basic",
            type: "multiple-choice",
            question: "Which of the following are community resources available for emergency assistance?",
            options: [
                "Salvation Army, shelters for battered spouses, rape crisis centers, United Way",
                "Only police and fire departments",
                "Just medical and fire services",
                "Only government agencies"
            ],
            correct: 0,
            explanation: "Community resources include Salvation Army, shelters, crisis centers, United Way, animal control, medical examiner, and many other organizations.",
            objective: "35.31 - Community emergency resources",
            module: "Community Policing"
        },
        {
            id: "foq008",
            mainCategory: "field-operations",
            category: "constitutional-procedures",
            difficulty: "advanced",
            type: "scenario",
            question: "Scenario: Officer Smith joins pursuit of armed robbery suspect that Officer Jones observed. Jones falls during pursuit. Smith continues chasing suspect into apartment. Can Smith legally enter the apartment?",
            options: [
                "Yes - hot pursuit of felony allows entry regardless of which officer observed initial crime",
                "No - Smith didn't observe the original crime",
                "Only if Smith gets warrant first",
                "Only if other exigencies also present"
            ],
            correct: 0,
            explanation: "Hot pursuit of felony offense is an established exigency. The pursuing officer doesn't need to be the same one who observed the initial crime.",
            objective: "Hot pursuit exigency",
            module: "Constitutional Law"
        },
        {
            id: "foq009",
            mainCategory: "field-operations",
            category: "field-interviews",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "What is the recommended minimum distance for field interview positioning?",
            options: [
                "At least 3-3.5 feet (arm's length or more)",
                "1-2 feet for better communication",
                "6 feet minimum for safety",
                "Distance doesn't matter if officer is alert"
            ],
            correct: 0,
            explanation: "Field interview position should maintain at least 3-3.5 feet (arm's length) distance, gun side away, offset stance, with freedom of movement.",
            objective: "35.9 - Field interview positioning",
            module: "Field Interviews"
        },
        {
            id: "foq010",
            mainCategory: "field-operations",
            category: "decision-making",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "What does the 'spinning model' concept of the CDM acknowledge?",
            options: [
                "Need for urgent or split-second decisions and ability to re-assess",
                "Officers must follow steps in exact order",
                "Decision-making is always linear",
                "Only one decision per situation"
            ],
            correct: 0,
            explanation: "The 'spinning model' acknowledges that officers may need to make urgent decisions and can 'spin' back to earlier steps or re-assess as situations change.",
            objective: "27.2 - CDM flexibility",
            module: "Decision Making"
        },

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
        },
        // PENAL CODE PRACTICE QUESTIONS
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
            category: "animal-cruelty",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "What is the punishment for killing an assistance animal under PC 42.091?",
            options: [
                "Felony of the third degree",
                "State jail felony",
                "Class A misdemeanor",
                "Felony of the second degree"
            ],
            correct: 0,
            explanation: "PC 42.091(c)(3) - killing an assistance animal is a felony of the third degree.",
            objective: "Know assistance animal protection penalties",
            module: "Penal Code"
        },
        {
            id: "pcq004",
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
        {
            id: "pcq005",
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
            question: "What is the punishment for Aggravated Assault under PC 22.02?",
            answer: "Felony of the second degree, EXCEPT it becomes a felony of the first degree if committed against a public servant, by a public servant under color of office, in retaliation against witnesses, against security officers on duty, or against emergency services personnel.",
            difficulty: "intermediate",
            objective: "Know aggravated assault punishment levels",
            module: "Penal Code"
        },
        {
            id: "pc003",
            mainCategory: "penal-code",
            category: "theft-offenses",
            question: "What are the theft punishment ranges based on property value?",
            answer: "Under $100: Class C; $100-$750: Class B; $750-$2,500: Class A; $2,500-$30,000: State jail felony; $30,000-$150,000: 3rd degree felony; $150,000-$300,000: 2nd degree felony; $300,000+: 1st degree felony.",
            difficulty: "intermediate",
            objective: "Know theft punishment ranges",
            module: "Penal Code"
        },
        {
            id: "pc004",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            question: "What is the punishment for attacking an assistance animal under PC 42.091?",
            answer: "Class A misdemeanor if actor attacks; State jail felony if actor injures; Felony of the 3rd degree if actor kills an assistance animal. Court must order restitution for vet bills, replacement/retraining costs, and other reasonable expenses.",
            difficulty: "intermediate",
            objective: "Know assistance animal protection laws",
            module: "Penal Code"
        },
        {
            id: "pc005",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            question: "What are the punishment levels for Dog Fighting under PC 42.10?",
            answer: "PC 42.10(a)(1), (2), (3) - causing dogs to fight, participating in earnings, or using property for dog fighting: State jail felony. PC 42.10(a)(4), (5), (6) - equipment possession, training dogs, or attending as spectator: Class A misdemeanor.",
            difficulty: "intermediate",
            objective: "Distinguish dog fighting offense levels",
            module: "Penal Code"
        },
        {
            id: "pc006",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            question: "What is the defense for dog fighting under PC 42.10(d)?",
            answer: "It is a defense to prosecution under (a)(1) that the actor caused a dog to fight with another dog to protect livestock, other property, or a person from the other dog, and for no other purpose.",
            difficulty: "advanced",
            objective: "Know defenses to animal fighting charges",
            module: "Penal Code"
        },
        {
            id: "pc007",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            question: "What are the punishment levels for Cockfighting under PC 42.105?",
            answer: "PC 42.105(b)(1), (2) - causing cocks to fight or participating in earnings: State jail felony. PC 42.105(b)(3), (4), (5) - property use, training, or equipment: Class A misdemeanor. PC 42.105(b)(6) - spectating: Class C (Class A with prior conviction).",
            difficulty: "intermediate",
            objective: "Know cockfighting punishment structure",
            module: "Penal Code"
        },
        {
            id: "pc008",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            question: "What is the punishment for Bestiality under PC 21.09?",
            answer: "State jail felony, EXCEPT it becomes a felony of the 2nd degree if committed under (a)(9) in presence of a child under 18, OR if it results in serious bodily injury or death of the animal.",
            difficulty: "intermediate",
            objective: "Know bestiality offense levels",
            module: "Penal Code"
        },
        {
            id: "pc009",
            mainCategory: "penal-code",
            category: "property-crimes",
            question: "What are the key definitions for property crimes under PC 30.01?",
            answer: "Habitation: structure/vehicle for overnight accommodation (includes separately secured portions). Building: enclosed structure for habitation, trade, manufacture, ornament, or use. Vehicle: device for propelling/moving persons/property (except habitations).",
            difficulty: "basic",
            objective: "Understand property crime definitions",
            module: "Penal Code"
        },
        {
            id: "pc010",
            mainCategory: "penal-code",
            category: "property-crimes",
            question: "What constitutes 'Notice' for Criminal Trespass under PC 30.05?",
            answer: "Notice includes: oral/written communication by owner; fencing to exclude intruders; posted signs; purple paint marks (8+ inches, 1+ inch wide, 3-5 feet high, 100 feet apart on forest/1000 feet on other land); or visible crops under cultivation.",
            difficulty: "intermediate",
            objective: "Know trespass notice requirements",
            module: "Penal Code"
        },
        {
            id: "pc011",
            mainCategory: "penal-code",
            category: "property-crimes",
            question: "What are the punishment levels for Criminal Trespass under PC 30.05?",
            answer: "Class B misdemeanor (basic); Class C (agricultural/residential land within 100 ft); Class A (habitation, deadly weapon, critical infrastructure, higher education with prior, shelter center, treatment center, Superfund site); 3rd degree felony (if part of smuggling offense).",
            difficulty: "advanced",
            objective: "Know trespass punishment escalations",
            module: "Penal Code"
        },
        {
            id: "pc012",
            mainCategory: "penal-code",
            category: "property-crimes",
            question: "What is a 'Critical Infrastructure Facility' under PC 30.05?",
            answer: "Chemical manufacturing, refinery, electrical facilities, water treatment, gas compressor stations, LNG terminals, telecommunications switching, ports/transportation hubs, gas processing plants, or federally licensed radio/TV transmission facilities - all completely enclosed by obvious barriers.",
            difficulty: "advanced",
            objective: "Identify critical infrastructure for enhanced penalties",
            module: "Penal Code"
        },
        {
            id: "pc013",
            mainCategory: "penal-code",
            category: "firearms-laws",
            question: "What are the punishment levels for PC 30.06 (Concealed Handgun Trespass)?",
            answer: "Class C misdemeanor (fine not exceeding $200), EXCEPT Class A misdemeanor if trial shows that after entry, the license holder received personal oral notice and failed to depart.",
            difficulty: "intermediate",
            objective: "Know concealed carry trespass penalties",
            module: "Penal Code"
        },
        {
            id: "pc014",
            mainCategory: "penal-code",
            category: "firearms-laws",
            question: "What are the defenses for rental property under PC 30.06 and 30.07?",
            answer: "Defenses exist for: condominium owners/tenants/guests, leased premises tenants/guests, manufactured home tenants/guests, and hotel guests - when carrying/storing in their unit/room, en route to/from unit/vehicle, or in designated parking areas.",
            difficulty: "advanced",
            objective: "Know rental property firearm defenses",
            module: "Penal Code"
        },
        {
            id: "pc015",
            mainCategory: "penal-code",
            category: "firearms-laws",
            question: "What is the key difference between PC 30.06 and PC 30.07?",
            answer: "PC 30.06 applies to CONCEALED handgun carry by license holders; PC 30.07 applies to OPENLY carried handguns by license holders. Both require specific notice language and have similar penalty structures, but 30.07 specifies that carrying in a holster is NOT a defense.",
            difficulty: "intermediate",
            objective: "Distinguish concealed vs open carry trespass",
            module: "Penal Code"
        },
        {
            id: "pc016",
            mainCategory: "penal-code",
            category: "property-crimes",
            question: "What are the defenses for utility workers under PC 30.05(e)?",
            answer: "Defenses include: firefighters/EMS under exigent circumstances; employees/agents of electric, telecommunications, video/cable, gas utilities, or pipelines performing duties; persons employed by entities with effective consent/authorization performing duties within scope.",
            difficulty: "advanced",
            objective: "Know utility worker trespass defenses",
            module: "Penal Code"
        },
        {
            id: "pc017",
            mainCategory: "penal-code",
            category: "firearms-laws",
            question: "What are the requirements for valid firearm prohibition signs under PC 30.05?",
            answer: "Must include specific language 'Pursuant to Section 30.05, Penal Code (criminal trespass), a person may not enter this property with a firearm'; in English and Spanish; contrasting colors; block letters at least one inch high; conspicuously displayed and clearly visible.",
            difficulty: "intermediate",
            objective: "Know firearm sign requirements",
            module: "Penal Code"
        },
        {
            id: "pc018",
            mainCategory: "penal-code",
            category: "property-crimes",
            question: "What is the railway worker defense under PC 30.05(g)?",
            answer: "It is a defense to prosecution that the actor entered a railroad switching yard or any part of a railroad switching yard and was at that time an employee or representative of employees exercising a right under the Railway Labor Act (45 U.S.C. Section 151 et seq.).",
            difficulty: "advanced",
            objective: "Know specialized worker defenses",
            module: "Penal Code"
        },
        {
            id: "pc019",
            mainCategory: "penal-code",
            category: "firearms-laws",
            question: "What are the peace officer exceptions under PC 30.05(i)?",
            answer: "Section does not apply if basis for entry prohibition was handgun/weapon and actor was a peace officer (including from recognized states) or special investigator under CCP 2.122, regardless of whether engaged in official duty. Recognized states must have firearm proficiency requirements and reciprocity.",
            difficulty: "advanced",
            objective: "Know peace officer firearm exceptions",
            module: "Penal Code"
        },
        {
            id: "pc020",
            mainCategory: "penal-code",
            category: "property-crimes",
            question: "What constitutes 'Entry' for trespass purposes under PC 30.05(b)?",
            answer: "Entry means the intrusion of the entire body. Partial entry (like reaching an arm through a window) would not constitute entry for trespass purposes under this definition.",
            difficulty: "basic",
            objective: "Understand entry definition for trespass",
            module: "Penal Code"
        },
        {
            id: "pc021",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            question: "What are the affirmative defenses for cockfighting equipment under PC 42.105(c)?",
            answer: "Affirmative defenses: 1) Conduct occurred solely for breeding cocks for poultry shows judged by appearance; 2) Was incidental to collecting bridles, gaffs, or slashers. NOT available if evidence shows actor also engaging in cockfighting use.",
            difficulty: "advanced",
            objective: "Know cockfighting equipment defenses",
            module: "Penal Code"
        },
        {
            id: "pc022",
            mainCategory: "penal-code",
            category: "animal-cruelty",
            question: "What is the age exception for cockfighting spectating under PC 42.105(f)?",
            answer: "It is an exception to application of PC 42.105(b)(6) (attending as spectator) if the actor is 15 years of age or younger at the time of the offense.",
            difficulty: "intermediate",
            objective: "Know age exceptions in animal fighting laws",
            module: "Penal Code"
        },
        {
            id: "pc023",
            mainCategory: "penal-code",
            category: "property-crimes",
            question: "What are the First Amendment protections for higher education trespass under PC 30.05(d-2)?",
            answer: "At punishment stage, defendant may raise issue whether they were engaging in speech/expressive conduct protected by 1st Amendment or Texas Constitution Article I, Section 8. If proven by preponderance, the Class A enhancement doesn't apply.",
            difficulty: "advanced",
            objective: "Know constitutional protections in trespass cases",
            module: "Penal Code"
        },
        {
            id: "pc024",
            mainCategory: "penal-code",
            category: "firearms-laws",
            question: "What are the first responder defenses under PC 30.06 and 30.07?",
            answer: "Defense for first responders who: 1) Hold unexpired completion certificate under Gov Code 411.1883; 2) Were engaged in actual discharge of duties while carrying; 3) Were employed/supervised by municipality/county under Local Gov Code Chapter 179.",
            difficulty: "advanced",
            objective: "Know first responder firearm defenses",
            module: "Penal Code"
        },
        {
            id: "pc025",
            mainCategory: "penal-code",
            category: "property-crimes",
            question: "What is the labor rights defense for critical infrastructure under PC 30.05(h)?",
            answer: "At punishment stage, defendant may raise issue whether entry/remaining was part of peaceful/lawful assembly, including exercising state/federal labor law rights. If proven by preponderance, the Class A enhancement for critical infrastructure doesn't apply.",
            difficulty: "advanced",
            objective: "Know labor law protections in trespass",
            module: "Penal Code"
        },
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
    
    // Add new categories to studyData categories
    studyData.categories = studyData.categories || {};
    studyData.categories['vehicle-traffic-stops'] = {
        name: "Vehicle & Traffic Stops",
        description: "Arrest, Search, & Seizure for Vehicles & Traffic Stops",
        icon: "fas fa-car-crash",
        color: "#dc3545"
    };
    
    // Add Penal Code categories
    studyData.categories['penal-code'] = {
        name: "Penal Code",
        description: "Texas Penal Code - Assault, Theft, Property Crimes, Animal Laws, Firearms",
        icon: "fas fa-gavel",
        color: "#6f42c1"
    };
    studyData.categories['assault-offenses'] = {
        name: "Assault Offenses",
        description: "PC 22.01-22.02 Simple and Aggravated Assault",
        icon: "fas fa-fist-raised",
        color: "#dc3545"
    };
    studyData.categories['theft-offenses'] = {
        name: "Theft Offenses", 
        description: "PC 31.03 Theft and punishment ranges",
        icon: "fas fa-hand-holding",
        color: "#fd7e14"
    };
    studyData.categories['animal-cruelty'] = {
        name: "Animal Cruelty Laws",
        description: "PC 42.091, 42.10, 42.105, 21.09 Animal protection laws",
        icon: "fas fa-paw",
        color: "#28a745"
    };
    studyData.categories['property-crimes'] = {
        name: "Property Crimes",
        description: "PC 30.01-30.07 Criminal Trespass and related offenses",
        icon: "fas fa-home",
        color: "#17a2b8"
    };
    studyData.categories['firearms-laws'] = {
        name: "Firearms Laws",
        description: "PC 30.06-30.07 Handgun license holder trespass",
        icon: "fas fa-crosshairs",
        color: "#6610f2"
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

// End of enhanced-data-structure.js
// All practice questions have been integrated into the main tcoleStudyData structure above
