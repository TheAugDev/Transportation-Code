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
                // Module 5
                "vehicle-equipment": {
                    name: "Vehicle Equipment",
                    description: "TRC 547 - Lighting, brakes, safety equipment, and inspection requirements",
                    icon: "fas fa-cog",
                    color: "#17a2b8",
                    module: "Module 5"
                },
                "emergency-vehicles": {
                    name: "Emergency Vehicles",
                    description: "TRC 546 & 547.702 - Authorized emergency vehicle equipment and operations",
                    icon: "fas fa-ambulance",
                    color: "#dc3545",
                    module: "Module 5"
                },
                "specialized-vehicles": {
                    name: "Specialized Vehicles",
                    description: "TRC 547.701-547.801 - School buses, motorcycles, and special equipment",
                    icon: "fas fa-bus",
                    color: "#ffc107",
                    module: "Module 5"
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
        
        "property-offenses": {
            name: "Property & Trespassing Offenses",
            description: "Penal Code Chapters 28, 30, and 42 - Property crimes, arson, criminal mischief, graffiti, and animal cruelty",
            icon: "fas fa-home",
            color: "#fd7e14",
            modules: ["Property Damage", "Arson", "Criminal Mischief", "Trespassing", "Animal Cruelty"],
            subCategories: {
                "criminal-types": {
                    name: "Criminal Types & Characteristics",
                    description: "Professional, semi-professional, and street thieves - motivations and behaviors",
                    icon: "fas fa-user-secret",
                    color: "#6f42c1",
                    module: "Property Damage"
                },
                "property-definitions": {
                    name: "Property Definitions",
                    description: "PC 28.01 - Legal definitions of property, habitation, building, and vehicle",
                    icon: "fas fa-book-open",
                    color: "#007bff",
                    module: "Property Damage"
                },
                "pecuniary-loss": {
                    name: "Pecuniary Loss Calculations",
                    description: "PC 28.06 - Determining fair market value, replacement costs, and damage amounts",
                    icon: "fas fa-calculator",
                    color: "#28a745",
                    module: "Property Damage"
                },
                "offense-levels": {
                    name: "Offense Level Classifications",
                    description: "Value ladder chart - Class C through 1st Degree Felony classifications",
                    icon: "fas fa-layer-group",
                    color: "#17a2b8",
                    module: "Property Damage"
                },
                "criminal-mischief": {
                    name: "Criminal Mischief",
                    description: "PC 28.03 - Intentional damage, tampering, and markings on property",
                    icon: "fas fa-hammer",
                    color: "#dc3545",
                    module: "Criminal Mischief"
                },
                "graffiti": {
                    name: "Graffiti",
                    description: "PC 28.08 - Paint, indelible markers, and etching devices on property",
                    icon: "fas fa-spray-can",
                    color: "#e83e8c",
                    module: "Criminal Mischief"
                },
                "reckless-damage": {
                    name: "Reckless Damage",
                    description: "PC 28.04 - Reckless damage or destruction of property",
                    icon: "fas fa-exclamation-triangle",
                    color: "#ffc107",
                    module: "Property Damage"
                },
                "railroad-property": {
                    name: "Railroad Property Interference",
                    description: "PC 28.07 - Tampering with trains, tracks, and railroad equipment",
                    icon: "fas fa-train",
                    color: "#6610f2",
                    module: "Property Damage"
                },
                "arson": {
                    name: "Arson",
                    description: "PC 28.02 - Starting fires with intent to destroy property",
                    icon: "fas fa-fire",
                    color: "#fd7e14",
                    module: "Arson"
                },
                "animal-cruelty": {
                    name: "Animal Cruelty",
                    description: "PC 42.09, 42.092 - Livestock and non-livestock animal protection laws",
                    icon: "fas fa-paw",
                    color: "#20c997",
                    module: "Animal Cruelty"
                },
                "police-service-animals": {
                    name: "Police Service Animals",
                    description: "PC 38.151 - Interference with police dogs, horses, and service animals",
                    icon: "fas fa-dog",
                    color: "#795548",
                    module: "Animal Cruelty"
                },
                "property-scenarios": {
                    name: "Property Crime Scenarios",
                    description: "Case studies and practical applications of property offense laws",
                    icon: "fas fa-clipboard-check",
                    color: "#607d8b",
                    module: "Property Damage"
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
        },

        // Property and Trespassing Offenses Flashcards
        {
            id: "po-flash-001",
            mainCategory: "property-offenses",
            category: "criminal-types",
            difficulty: "basic",
            question: "What is the 'Achilles Heel' of property crimes?",
            answer: "The disposal of stolen property. This is the weakness that often leads to the apprehension of burglars and thieves. Professional criminals often work with 'fences' (receivers) to dispose of stolen goods.",
            module: "Property Damage"
        },
        {
            id: "po-flash-002",
            mainCategory: "property-offenses",
            category: "criminal-types",
            difficulty: "intermediate",
            question: "Compare Professional vs. Semi-Professional vs. Street Thieves",
            answer: "**Professional:** Profit motive, minimize observation, planning/skills, work with fences, rarely armed\n**Semi-Professional:** Drug money motive, opportunity-based, less planning, more violent\n**Street:** Armed/reckless, stealing for drugs/alcohol, most dangerous auto thieves",
            module: "Property Damage"
        },
        {
            id: "po-flash-003",
            mainCategory: "property-offenses",
            category: "criminal-types",
            difficulty: "intermediate",
            question: "Why are professional thieves rarely armed?",
            answer: "They would get more time for a weapon charge than the theft charge. Professional thieves prefer to use their mind to outwit officers rather than violence. They want to avoid enhanced penalties.",
            module: "Property Damage"
        },
        {
            id: "po-flash-004",
            mainCategory: "property-offenses",
            category: "property-definitions",
            difficulty: "basic",
            question: "Define 'Property' under PC 28.01",
            answer: "Property means:\n(A) real property\n(B) tangible or intangible personal property, including anything severed from land\n(C) a document, including money, that represents or embodies anything of value",
            module: "Property Damage"
        },
        {
            id: "po-flash-005",
            mainCategory: "property-offenses",
            category: "property-definitions",
            difficulty: "basic",
            question: "Define 'Habitation' under PC 28.01",
            answer: "A structure or vehicle that is adapted for the overnight accommodation of persons and includes:\n(A) each separately secured or occupied portion\n(B) each structure appurtenant to or connected with the structure or vehicle",
            module: "Property Damage"
        },
        {
            id: "po-flash-006",
            mainCategory: "property-offenses",
            category: "property-definitions",
            difficulty: "basic",
            question: "Define 'Building' under PC 28.01",
            answer: "Any structure or enclosure intended for use or occupation as a habitation or for some purpose of trade, manufacture, ornament, or use.",
            module: "Property Damage"
        },
        {
            id: "po-flash-007",
            mainCategory: "property-offenses",
            category: "property-definitions",
            difficulty: "basic",
            question: "Define 'Vehicle' under PC 28.01",
            answer: "Any device in, on, or by which any person or property is or may be propelled, moved, or drawn in the normal course of commerce or transportation.",
            module: "Property Damage"
        },
        {
            id: "po-flash-008",
            mainCategory: "property-offenses",
            category: "property-definitions",
            difficulty: "intermediate",
            question: "PC 28.05 - Actor's Interest in Property",
            answer: "It is NO defense to prosecution that the actor has an interest in the property damaged or destroyed if another person also has an interest that the actor is not entitled to infringe.",
            module: "Property Damage"
        },
        {
            id: "po-flash-009",
            mainCategory: "property-offenses",
            category: "pecuniary-loss",
            difficulty: "intermediate",
            question: "PC 28.06 - Pecuniary Loss for DESTROYED Property",
            answer: "The amount is:\n(1) fair market value at time and place of destruction; OR\n(2) if fair market value cannot be ascertained, the cost of replacing the property within reasonable time",
            module: "Property Damage"
        },
        {
            id: "po-flash-010",
            mainCategory: "property-offenses",
            category: "pecuniary-loss",
            difficulty: "intermediate",
            question: "PC 28.06 - Pecuniary Loss for DAMAGED Property",
            answer: "The cost of repairing or restoring the damaged property within a reasonable time after the damage occurred.",
            module: "Property Damage"
        },
        {
            id: "po-flash-011",
            mainCategory: "property-offenses",
            category: "pecuniary-loss",
            difficulty: "advanced",
            question: "PC 28.06 - Default Pecuniary Loss Amount",
            answer: "If the amount cannot be ascertained by the specified criteria, the loss is deemed to be greater than $750 but less than $2,500.",
            module: "Property Damage"
        },
        {
            id: "po-flash-012",
            mainCategory: "property-offenses",
            category: "pecuniary-loss",
            difficulty: "advanced",
            question: "PC 28.06 - Pecuniary Loss for Documents",
            answer: "For documents (other than those with readily ascertainable market value):\n(1) If evidence of debt: amount due and collectible at maturity less satisfied portions\n(2) If other: greatest amount of economic loss owner might reasonably suffer",
            module: "Property Damage"
        },
        {
            id: "po-flash-013",
            mainCategory: "property-offenses",
            category: "offense-levels",
            difficulty: "basic",
            question: "Basic Value Loss Ladder Chart",
            answer: "**Class C:** $0-$100\n**Class B:** $100-$750\n**Class A:** $750-$2,500\n**State Jail Felony:** $2,500-$30,000\n**3rd Degree:** $30,000-$150,000\n**2nd Degree:** $150,000-$300,000\n**1st Degree:** $300,000+",
            module: "Property Damage"
        },
        {
            id: "po-flash-014",
            mainCategory: "property-offenses",
            category: "criminal-mischief",
            difficulty: "basic",
            question: "PC 28.03 - Criminal Mischief Elements",
            answer: "Without effective consent, intentionally or knowingly:\n(1) damages/destroys tangible property\n(2) tampers with property causing $ loss or substantial inconvenience\n(3) makes markings (inscriptions, slogans, drawings, paintings) on property",
            module: "Criminal Mischief"
        },
        {
            id: "po-flash-015",
            mainCategory: "property-offenses",
            category: "criminal-mischief",
            difficulty: "intermediate",
            question: "Criminal Mischief Special Enhancements",
            answer: "**State Jail Felony** (even if <$2,500):\n• Habitation damaged by firearm/explosive\n• Fence containing specified livestock\n• Public utilities/flood control\n• Catalytic converter theft\n• Schools/worship/burial/monuments ($750-$30,000)",
            module: "Criminal Mischief"
        },
        {
            id: "po-flash-016",
            mainCategory: "property-offenses",
            category: "criminal-mischief",
            difficulty: "advanced",
            question: "PC 28.03(c) - Utility Tampering Presumption",
            answer: "Presumed to have knowingly tampered if service:\n(1) diverted from passing through metering device\n(2) prevented from being correctly registered by meter\n(3) activated by device to obtain service without meter",
            module: "Criminal Mischief"
        },
        {
            id: "po-flash-017",
            mainCategory: "property-offenses",
            category: "criminal-mischief",
            difficulty: "advanced",
            question: "PC 28.03(i) - Mad Cow Disease Enhancement",
            answer: "1st Degree Felony if property is livestock and damage caused by introducing bovine spongiform encephalopathy (mad cow disease) or listed diseases.",
            module: "Criminal Mischief"
        },
        {
            id: "po-flash-018",
            mainCategory: "property-offenses",
            category: "criminal-mischief",
            difficulty: "intermediate",
            question: "PC 28.03(e) - Aggregation Rule",
            answer: "When multiple items damaged in one scheme or continuing course of conduct, amounts may be aggregated to determine the grade of offense.",
            module: "Criminal Mischief"
        },
        {
            id: "po-flash-019",
            mainCategory: "property-offenses",
            category: "graffiti",
            difficulty: "basic",
            question: "PC 28.08 - Graffiti Elements",
            answer: "Without effective consent, intentionally or knowingly makes markings on tangible property with:\n(1) paint\n(2) indelible marker\n(3) etching or engraving device",
            module: "Criminal Mischief"
        },
        {
            id: "po-flash-020",
            mainCategory: "property-offenses",
            category: "graffiti",
            difficulty: "intermediate",
            question: "Graffiti Enhanced Locations",
            answer: "**State Jail Felony** if marking made on:\n• School or institution of higher education\n• Place of worship or human burial\n• Public monument\n• Community center (medical/social/educational programs)\n**AND** loss is $750-$30,000",
            module: "Criminal Mischief"
        },
        {
            id: "po-flash-021",
            mainCategory: "property-offenses",
            category: "graffiti",
            difficulty: "basic",
            question: "Define 'Indelible Marker' - PC 28.08",
            answer: "A device that makes a mark with paint or ink product specifically formulated to be more difficult to erase, wash out, or remove than ordinary paint or ink products.",
            module: "Criminal Mischief"
        },
        {
            id: "po-flash-022",
            mainCategory: "property-offenses",
            category: "reckless-damage",
            difficulty: "basic",
            question: "PC 28.04 - Reckless Damage or Destruction",
            answer: "**Elements:** Without effective consent, recklessly damages or destroys property of owner\n**Penalty:** Always Class C misdemeanor (no enhancement based on value)",
            module: "Property Damage"
        },
        {
            id: "po-flash-023",
            mainCategory: "property-offenses",
            category: "railroad-property",
            difficulty: "basic",
            question: "Define 'Railroad Property' - PC 28.07",
            answer: "(A) train, locomotive, railroad car, caboose, work equipment, rolling stock, safety device, switch, or connection owned/leased/operated by railroad\n(B) railroad track, rail, bridge, trestle, or right-of-way owned or used by railroad",
            module: "Property Damage"
        },
        {
            id: "po-flash-024",
            mainCategory: "property-offenses",
            category: "railroad-property",
            difficulty: "intermediate",
            question: "Railroad Property Offense Levels",
            answer: "**Throwing object at train:** Class B (3rd Degree if bodily injury)\n**Entering/remaining:** Class C\n**Tampering/obstruction/derailment:** Class C, enhanced by value ladder if $100+ loss",
            module: "Property Damage"
        },
        {
            id: "po-flash-025",
            mainCategory: "property-offenses",
            category: "railroad-property",
            difficulty: "advanced",
            question: "Railway Labor Act Exception - PC 28.07(f)",
            answer: "Not an offense if undertaken by railroad employee or labor representative who has right to engage in conduct under Railway Labor Act (45 U.S.C. Section 151 et seq.).",
            module: "Property Damage"
        },
        {
            id: "po-flash-026",
            mainCategory: "property-offenses",
            category: "arson",
            difficulty: "basic",
            question: "PC 28.02(a) - Arson Elements",
            answer: "Starts fire or explosion with intent to destroy/damage:\n(1) vegetation, fence, or structure on open-space land; OR\n(2) building/habitation/vehicle under specified circumstances (incorporated city, insured, mortgaged, etc.)",
            module: "Arson"
        },
        {
            id: "po-flash-027",
            mainCategory: "property-offenses",
            category: "arson",
            difficulty: "intermediate",
            question: "Arson Penalty Structure",
            answer: "**2nd Degree Felony** (basic)\n**Enhanced to 1st Degree if:**\n• Bodily injury or death occurs\n• Target was habitation or place of assembly/worship",
            module: "Arson"
        },
        {
            id: "po-flash-028",
            mainCategory: "property-offenses",
            category: "arson",
            difficulty: "intermediate",
            question: "PC 28.02(a-1) - Controlled Substance Arson",
            answer: "**Elements:** Recklessly starts fire while manufacturing controlled substances, damages building/habitation/vehicle\n**Penalty:** State Jail Felony (3rd Degree if bodily injury/death)",
            module: "Arson"
        },
        {
            id: "po-flash-029",
            mainCategory: "property-offenses",
            category: "arson",
            difficulty: "intermediate",
            question: "PC 28.02(a-2) - Intentional Fire + Reckless Damage",
            answer: "**Elements:** Intentionally starts fire/explosion and recklessly:\n(1) damages/destroys building of another; OR\n(2) causes bodily injury/death\n**Penalty:** State Jail Felony",
            module: "Arson"
        },
        {
            id: "po-flash-030",
            mainCategory: "property-offenses",
            category: "arson",
            difficulty: "basic",
            question: "Arson Exceptions and Defenses",
            answer: "**Exception:** Controlled burning of open-space land\n**Defense:** Prior permit or written authorization for fires in incorporated areas (city ordinance compliance)",
            module: "Arson"
        },
        {
            id: "po-flash-031",
            mainCategory: "property-offenses",
            category: "animal-cruelty",
            difficulty: "basic",
            question: "Define 'Livestock Animal' - PC 42.09",
            answer: "(A) cattle, sheep, swine, goats, ratites, poultry commonly raised for consumption\n(B) horse, pony, mule, donkey, hinny\n(C) native/nonnative hoofstock raised under agriculture\n(D) native/nonnative fowl raised under agriculture",
            module: "Animal Cruelty"
        },
        {
            id: "po-flash-032",
            mainCategory: "property-offenses",
            category: "animal-cruelty",
            difficulty: "intermediate",
            question: "Livestock Cruelty Penalty Structure",
            answer: "**State Jail Felony:** Torture, poison, fighting, luring, tripping\n**Class A:** Fail to provide care, abandon, cruel transport, overwork\n**Enhanced to 3rd Degree:** Two prior convictions under 42.09 or 42.092",
            module: "Animal Cruelty"
        },
        {
            id: "po-flash-033",
            mainCategory: "property-offenses",
            category: "animal-cruelty",
            difficulty: "advanced",
            question: "Horse Tripping Defense - PC 42.09(d)",
            answer: "Defense if actor tripped horse for purpose of:\n• Identifying ownership of the horse; OR\n• Giving veterinary care to the horse",
            module: "Animal Cruelty"
        },
        {
            id: "po-flash-034",
            mainCategory: "property-offenses",
            category: "animal-cruelty",
            difficulty: "intermediate",
            question: "Livestock Cruelty Exceptions",
            answer: "Generally accepted and lawful:\n(1) Fishing, hunting, trapping, wildlife management, depredation control, shooting preserve\n(2) Animal husbandry or agriculture practices involving livestock\n**Defense:** Bona fide scientific research experimentation",
            module: "Animal Cruelty"
        },
        {
            id: "po-flash-035",
            mainCategory: "property-offenses",
            category: "animal-cruelty",
            difficulty: "basic",
            question: "Define 'Animal' - PC 42.092",
            answer: "Domesticated living creature, including stray or feral cat/dog, and wild living creature previously captured. Does NOT include uncaptured wild creatures or livestock animals.",
            module: "Animal Cruelty"
        },
        {
            id: "po-flash-036",
            mainCategory: "property-offenses",
            category: "animal-cruelty",
            difficulty: "intermediate",
            question: "Non-Livestock Cruelty Penalty Structure",
            answer: "**3rd Degree Felony:** Torture, cruel kill, serious bodily injury without consent\n**Class A:** Fail to provide care, abandon, cruel transport, bodily injury, overwork\n**Enhanced to 2nd Degree:** Prior conviction for torture/kill",
            module: "Animal Cruelty"
        },
        {
            id: "po-flash-037",
            mainCategory: "property-offenses",
            category: "animal-cruelty",
            difficulty: "advanced",
            question: "Trap-Neuter-Return Program Defense",
            answer: "Defense to abandonment if stray/feral animal released pursuant to TNR program: trapped, evaluated by vet, vaccinated/sterilized if needed, marked by vet, returned to trap location.",
            module: "Animal Cruelty"
        },
        {
            id: "po-flash-038",
            mainCategory: "property-offenses",
            category: "animal-cruelty",
            difficulty: "intermediate",
            question: "Property Protection Defense - PC 42.092(e)",
            answer: "Defense if animal:\n(1) Discovered on property injuring/killing livestock or damaging crops AND killed/injured when discovered; OR\n(2) Killed/injured within scope of public servant duty or utility work",
            module: "Animal Cruelty"
        },
        {
            id: "po-flash-039",
            mainCategory: "property-offenses",
            category: "police-service-animals",
            difficulty: "basic",
            question: "Define 'Police Service Animal' - PC 38.151",
            answer: "Dog, horse, or other domesticated animal specially trained for use by handler/rider for law enforcement, corrections, prison/jail security, or investigative purposes.",
            module: "Animal Cruelty"
        },
        {
            id: "po-flash-040",
            mainCategory: "property-offenses",
            category: "police-service-animals",
            difficulty: "intermediate",
            question: "Police Service Animal Interference Penalties",
            answer: "**Class C:** Taunt, torment, strike, throw object, enter control area\n**Class B:** Interfere/obstruct causing loss of control, release from control area\n**2nd Degree Felony:** Injure/kill or conduct likely to injure/kill",
            module: "Animal Cruelty"
        },
        {
            id: "po-flash-041",
            mainCategory: "property-offenses",
            category: "police-service-animals",
            difficulty: "basic",
            question: "Define 'Area of Control' - PC 38.151",
            answer: "Includes vehicle, trailer, kennel, pen, or yard where the police service animal is housed or controlled.",
            module: "Animal Cruelty"
        },
        {
            id: "po-flash-042",
            mainCategory: "property-offenses",
            category: "property-scenarios",
            difficulty: "intermediate",
            question: "Chalk vs. Spray Paint on School Property",
            answer: "**Chalk:** Criminal Mischief (doesn't meet graffiti tool requirement)\n**Spray Paint:** Graffiti, enhanced to State Jail Felony if $750+ damage at school\n**Key:** Graffiti requires paint, indelible marker, or etching device",
            module: "Property Damage"
        },
        {
            id: "po-flash-043",
            mainCategory: "property-offenses",
            category: "property-scenarios",
            difficulty: "advanced",
            question: "Multiple Location Property Damage",
            answer: "Under PC 28.03(e), when multiple properties damaged in one scheme/continuing course, amounts may be aggregated to determine offense grade. Example: $50 damage at 9 houses = $450 total = Class B Criminal Mischief",
            module: "Property Damage"
        },
        {
            id: "po-flash-044",
            mainCategory: "property-offenses",
            category: "property-scenarios",
            difficulty: "intermediate",
            question: "Livestock Fence Damage Special Rule",
            answer: "Criminal mischief involving fence containing cattle, bison, horses, sheep, swine, goats, exotic livestock, or game animals = State Jail Felony even if damage less than $2,500",
            module: "Criminal Mischief"
        },
        {
            id: "po-flash-045",
            mainCategory: "property-offenses",
            category: "property-scenarios",
            difficulty: "advanced",
            question: "Utility Interference Enhancements",
            answer: "State Jail Felony (even <$30,000): Public communications, transportation, gas/power supply impairment\n3rd Degree Felony (<$150,000): Public power supply or ATM access impairment\nIncludes installation/removal of devices",
            module: "Criminal Mischief"
        },
        
        // Transportation Code Module 5 - Vehicle Equipment (TRC 547)
        {
            id: "ve-flash-001",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "TRC 547.001 - Light Transmission Definition",
            answer: "The ratio of the amount of total light that passes through a material to the amount of total light falling on the material and the glazing surface",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-002",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "TRC 547.001 - Slow-Moving Vehicle Definition",
            answer: "A motor vehicle designed to operate at a maximum speed of 25 miles per hour or less, OR a vehicle, implement of husbandry, or machinery that is towed by a motor vehicle designed to operate at a maximum speed of 25 miles per hour or less",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-003",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "TRC 547.001 - Sunscreening Device Definition",
            answer: "A film, material, or device that meets the department's standards for reducing effects of the sun",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-004",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "TRC 547.002 - Vehicle Equipment Exemptions",
            answer: "Farm tractors, road-building equipment, bicycles, golf carts, and other vehicles exempted from equipment requirements when operated under specific conditions",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-005",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "TRC 547.105 - Highway Maintenance Vehicle Lighting Authority",
            answer: "TXDOT may adopt lighting standards for highway maintenance, construction, and service vehicles that may authorize lights otherwise prohibited by the Transportation Code",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-006",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "TRC 547.301 - General Lighting Requirements",
            answer: "Every motor vehicle must be equipped with lighting equipment as required by this chapter",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-007",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "TRC 547.302 - When Lighted Lamps Required (Two Circumstances)",
            answer: "1) At nighttime, and 2) When light is insufficient to clearly discern a person or vehicle at a distance of 1,000 feet",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-008",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "TRC 547.303 - Color Requirements for Lighting",
            answer: "Front lights: white or amber only. Rear lights: red or amber only. Exception: backup lights may be white",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-009",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "TRC 547.304 - Restrictions on Lighting Equipment",
            answer: "A person may not operate a motor vehicle equipped with a red, white, or blue beacon, flashing, or alternating light unless the equipment is used as specifically authorized by Chapter 547",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-010",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "TRC 547.3215 - Federal Lighting Standard Adoption",
            answer: "A lighting system, reflector, or associated equipment installed on a motor vehicle must comply with Federal Motor Vehicle Safety Standard No. 108 (49 CFR 571.108)",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-011",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "TRC 547.321 - Headlamps Required",
            answer: "A motor vehicle must be equipped with at least two headlamps. TRC: 24-54 inches high. Federal Standard: 22-54 inches high",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-012",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "TRC 547.322 - Multiple-beam Headlamps",
            answer: "Headlamps must provide both upper (high) and lower (low) beams. When to dim: 500 feet of approaching vehicle, 300 feet when following another vehicle",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-013",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "TRC 547.323 - Tail Lamps Required",
            answer: "At least one tail lamp that emits red light visible from 500 feet, mounted 20-72 inches high",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-014",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "TRC 547.324 - Stop Lamps Required",
            answer: "At least one stop lamp that emits red light visible from 300 feet when service brakes are applied",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-015",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "High-Mounted Stop Lamp Requirements (Federal Standard)",
            answer: "Passenger cars after September 1, 1985; Light trucks after September 1, 1993. Vehicles over 10,000 GVWR exempt",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-016",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "TRC 547.325 - Turn Signal Lamps",
            answer: "Front: white or amber. Rear: red or amber. Must be visible from 300 feet and flash 60-120 times per minute",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-017",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "TRC 547.326 - Hazard Lamps",
            answer: "All four turn signals operating simultaneously. Used to indicate vehicle breakdown or emergency situation",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-018",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "TRC 547.327 - Reflectors Required",
            answer: "At least one red reflector on the rear, visible from 100-600 feet when illuminated by headlamps",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-019",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "TRC 547.328 - Auxiliary Driving Lamps",
            answer: "No more than 2 auxiliary driving lamps permitted. Must be mounted no higher than 42 inches, dimmed when within 500 feet of approaching vehicle",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-020",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "TRC 547.351 - Clearance and Side Marker Lamps",
            answer: "Required on buses, trucks, trailers, and semitrailers at least 80 inches wide. Front: white or amber. Rear: red. Side: amber front, red rear",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-021",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "TRC 547.371 - Farm Equipment Lighting",
            answer: "Slow-moving vehicles must display slow-moving vehicle emblem. Farm equipment operated at night must have proper lighting equipment",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-022",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "TRC 547.401 - Brakes Required",
            answer: "Every motor vehicle must be equipped with brakes adequate to control the movement of the vehicle",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-023",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "TRC 547.402 - Brake Operation and Maintenance",
            answer: "Brakes required on each wheel except: 1) Special mobile equipment, 2) Towed commodity vehicles with wheels on roadway, 3) Trailers 4,500-15,000 lbs at >30 mph need only rear axle brakes",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-024",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "TRC 547.403 - Service Brakes",
            answer: "Primary brakes operated by one control mechanism (brake pedal) that operates all brakes simultaneously",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-025",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "TRC 547.404 - Parking Brakes",
            answer: "Must operate independently of service brakes, function in case of service brake failure, and hold vehicle on any grade",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-026",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "TRC 547.405 - Emergency Brakes (Trailers)",
            answer: "Trailers >4,500 lbs or with air/vacuum brakes must have brakes that automatically apply and remain applied for 15 minutes if breakaway occurs",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-027",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "TRC 547.501 - Horn Requirements",
            answer: "Motor vehicle must have horn in good working condition audible under normal conditions at 200 feet. No siren, whistle, or bell unless authorized",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-028",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "TRC 547.502 - Visible Warning Devices",
            answer: "Trucks/buses outside urban areas must carry: Daytime - 2 red flags (12\" square); Nighttime - 3 flares and 3 red-burning fuses/electric lanterns/reflectors",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-029",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "TRC 547.503 - Hazard Lamp Display Requirements",
            answer: "Vehicles ≥80\" wide or 30' long stopped on roadway must immediately display hazard lamps unless: 1) Parked lawfully in urban district, 2) Loading passengers, 3) Avoiding traffic conflict, 4) Complying with officer/signal, 5) Using other warning devices",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-030",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "TRC 547.504 - Warning Device Placement (Night)",
            answer: "Vehicles ≥80\" wide or 30' long stopped >10 minutes at night: Regular road - 100' behind, 100' ahead, left rear. Divided highway - left rear, 100' behind, 200' behind",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-031",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "TRC 547.505 - Daytime Warning Device Placement",
            answer: "Vehicles ≥80\" wide or 30' long stopped >10 minutes in daytime: Two red flags placed appropriately based on roadway type",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-032",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "TRC 547.601 - Safety Belt Requirements",
            answer: "Motor vehicles required to be inspected must have front safety belts if they were original manufacturer equipment",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-033",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "TRC 547.602 - Mirror Requirements",
            answer: "Motor vehicle must have mirror providing 200-foot rear view of highway",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-034",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "TRC 547.603 - Windshield Wipers",
            answer: "Motor vehicle must have device that cleans moisture from windshield, maintained in good working condition",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-035",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "TRC 547.604 - Muffler Requirements",
            answer: "Motor vehicle must have muffler in good working condition that prevents excessive/unusual noise. No cutouts, bypasses, or similar devices",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-036",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "TRC 547.605 - Emission System Requirements",
            answer: "Vehicles after 1967 model year must maintain emission system in good working condition. Violation: visible smoke for 10 seconds or longer",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-037",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "TRC 547.606 - Safety Guards/Mudflaps Requirements",
            answer: "Required on vehicles with ≥4 tires or ≥2 super single tires on rearmost axle. Must be within 8\" of roadway surface (12\" tolerance per admin code), as wide as tires",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-038",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "Safety Guards/Mudflaps Exemptions",
            answer: "Four exemptions: 1) Truck-tractors operated alone, 2) Pole trailers, 3) Recreational vehicles (admin code), 4) Buses (admin code)",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-039",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "TRC 547.609 - Sunscreening Device Labels",
            answer: "Sunscreening devices must have legible label with light transmission/luminous reflectance info. Label must be permanently installed between material and surface",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-040",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "TRC 547.611 - Video Equipment Restrictions",
            answer: "Video equipment (TV, DVD, etc.) must be positioned so display is not visible from operator's seat unless transmission in park or parking brake applied",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-041",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "TRC 547.613 - Window Tint: Windshield Rules",
            answer: "Tint may be installed above AS1 line (or 5\" from top) with ≥25% light transmission, not red/amber/blue. NO tint below AS1 line",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-042",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "TRC 547.613 - Window Tint: Side Window Rules",
            answer: "Side windows left/right of operator: ≥25% light transmission or ≤25% luminous reflectance. Side windows behind operator: no restrictions",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-043",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "TRC 547.613 - Window Tint: Major Exemptions",
            answer: "Key exemptions: 1) Out-of-state vehicles, 2) Factory tint, 3) Commercial motor vehicles (federal regs apply), 4) Law enforcement vehicles, 5) Licensed passenger carriers",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-044",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "TRC 547.613 - Window Tint: Tolerance and Medical Exception",
            answer: "3% tolerance on light transmission (THP allows 5%). Medical exception requires letter from physician/optometrist, still no windshield tint",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-045",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "TRC 547.615 - Recording Devices",
            answer: "Information from recording devices (airbag control modules, etc.) may only be retrieved with: 1) Court order, 2) Owner consent, 3) Safety research, 4) Emergency response",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-046",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "TRC 547.616 - Radar Interference Devices",
            answer: "Prohibited to use, install, or operate radar interference devices (active jammers). Radar detectors are passive devices and not prohibited",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-047",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "TRC 547.617 - Motorcycle Footrests and Handholds",
            answer: "Motorcycles designed to carry >1 person must have footrests and handholds for passenger. Does not apply to autocycles or fully enclosed motorcycles",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-048",
            mainCategory: "transportation-code",
            category: "emergency-vehicles",
            difficulty: "intermediate",
            question: "TRC 547.701 - School Bus Required Equipment",
            answer: "Required: 1) Convex mirror (see area in front), 2) Red flashing signal lamps (2 front, 2 rear, visible 500 feet). Permitted: rooftop warning lamps, movable stop arms",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-049",
            mainCategory: "transportation-code",
            category: "emergency-vehicles",
            difficulty: "intermediate",
            question: "TRC 547.701 - School Bus Safety Belt Requirements",
            answer: "Buses model year 2018+ must have 3-point seat belts for each passenger/operator unless school district budget doesn't permit (board vote required)",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-050",
            mainCategory: "transportation-code",
            category: "emergency-vehicles",
            difficulty: "intermediate",
            question: "TRC 547.7012 - Multifunction School Activity Bus",
            answer: "May NOT be painted National School Bus Glossy Yellow (to avoid confusion with regular school buses)",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-051",
            mainCategory: "transportation-code",
            category: "emergency-vehicles",
            difficulty: "intermediate",
            question: "TRC 547.702 - Authorized Emergency Vehicle Equipment",
            answer: "Required: 4 alternately flashing red lights (2 front, 2 rear) visible 500 feet. Siren/whistle/bell audible 500 feet. May also have white flashing lights",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-052",
            mainCategory: "transportation-code",
            category: "specialized-vehicles",
            difficulty: "intermediate",
            question: "TRC 547.703 - Slow-Moving Vehicle Emblem",
            answer: "Required on slow-moving vehicles, visible 500 feet, mounted base down on rear, maintained clean. Exempt: construction vehicles in work zones",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-053",
            mainCategory: "transportation-code",
            category: "specialized-vehicles",
            difficulty: "intermediate",
            question: "TRC 547.801 - Motorcycle Lighting Requirements",
            answer: "Required: ≤2 headlamps (24-54\" high), ≥1 taillamp (20-72\" high), license plate lamp, ≥1 stop lamp, ≥1 rear red reflector, turn signals (Federal Standard)",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "ve-flash-054",
            mainCategory: "transportation-code",
            category: "specialized-vehicles",
            difficulty: "intermediate",
            question: "TRC 547.801 - Motorcycle Headlamp Requirements",
            answer: "Must have multi-beam headlamps (high/low) except motorcycles ≤250cc and mopeds. At least one headlamp must be illuminated at all times (except pre-1975 models)",
            objective: "Vehicle Equipment Standards",
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

        // Property and Trespassing Offenses Questions
        {
            id: 5001,
            mainCategory: "property-offenses",
            category: "criminal-types",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "What is considered the 'Achilles Heel' of burglary and theft crimes?",
            options: [
                "Gaining entry to the premises",
                "Disposal of the stolen property",
                "Avoiding eyewitnesses during the crime",
                "Planning the operation"
            ],
            correct: 1,
            explanation: "The disposal of stolen property is the weakness (Achilles Heel) of property crimes. Professional criminals often work with fences to dispose of stolen goods.",
            objective: "32.7",
            module: "Property Damage"
        },
        {
            id: 5002,
            mainCategory: "property-offenses",
            category: "criminal-types",
            difficulty: "basic",
            type: "multiple-choice",
            question: "Which type of thief is MOST likely to be armed and take reckless chances to avoid apprehension?",
            options: [
                "Professional thief",
                "Semi-professional thief", 
                "Street thief",
                "White collar criminal"
            ],
            correct: 2,
            explanation: "Street thieves often carry weapons and take reckless chances to avoid apprehension. They are usually stealing for trading material to procure narcotics or alcohol.",
            objective: "32.8",
            module: "Property Damage"
        },
        {
            id: 5003,
            mainCategory: "property-offenses",
            category: "criminal-types",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "A professional thief will rarely be armed because:",
            options: [
                "They prefer non-violent crimes",
                "Weapons are too expensive",
                "They would get more time for a weapon charge than the theft charge",
                "It makes the crime more noticeable"
            ],
            correct: 2,
            explanation: "Professional thieves rarely carry weapons since they would get more time for a weapon charge than the theft charge. They prefer to use their mind to outwit officers.",
            objective: "32.8",
            module: "Property Damage"
        },
        {
            id: 5004,
            mainCategory: "property-offenses",
            category: "criminal-types",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "Semi-professional (unskilled) thieves differ from professional thieves in that they:",
            options: [
                "Are more involved in planning and preparation",
                "Are less likely to resort to violence",
                "Are more interested in getting money for drugs",
                "Work alone and never with accomplices"
            ],
            correct: 2,
            explanation: "Semi-professional thieves may be more interested in getting money for drugs, are less involved in planning, and are more likely to resort to violence against victims.",
            objective: "32.7",
            module: "Property Damage"
        },
        {
            id: 5005,
            mainCategory: "property-offenses",
            category: "property-definitions",
            difficulty: "basic",
            type: "multiple-choice",
            question: "Under Penal Code 28.01, 'Property' includes all of the following EXCEPT:",
            options: [
                "Real property",
                "Tangible personal property",
                "A document representing anything of value",
                "Services rendered by a person"
            ],
            correct: 3,
            explanation: "Property means: (A) real property; (B) tangible or intangible personal property, including anything severed from land; or (C) a document, including money, that represents or embodies anything of value. Services are not included.",
            objective: "8.15",
            module: "Property Damage"
        },
        {
            id: 5006,
            mainCategory: "property-offenses",
            category: "property-definitions",
            difficulty: "basic",
            type: "multiple-choice",
            question: "A 'Habitation' under PC 28.01 means:",
            options: [
                "Any building used for business purposes",
                "A structure or vehicle adapted for overnight accommodation of persons",
                "Only single-family residential homes",
                "Any fenced area around a building"
            ],
            correct: 1,
            explanation: "Habitation means a structure or vehicle that is adapted for the overnight accommodation of persons and includes each separately secured portion and connected structures.",
            objective: "8.15",
            module: "Property Damage"
        },
        {
            id: 5007,
            mainCategory: "property-offenses",
            category: "property-definitions",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "Under PC 28.05, having an interest in property that is damaged or destroyed:",
            options: [
                "Is always a complete defense to prosecution",
                "Is a defense only if you own more than 50% of the property",
                "Is NO defense if another person also has an interest you're not entitled to infringe",
                "Is only a defense for family members"
            ],
            correct: 2,
            explanation: "PC 28.05 states it is NO defense to prosecution that the actor has an interest in the property if another person also has an interest that the actor is not entitled to infringe.",
            objective: "8.15",
            module: "Property Damage"
        },
        {
            id: 5008,
            mainCategory: "property-offenses",
            category: "pecuniary-loss",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "Under PC 28.06, if property is DESTROYED, the amount of pecuniary loss is:",
            options: [
                "Always the original purchase price",
                "The fair market value at the time and place of destruction",
                "The sentimental value to the owner",
                "The cost to repair the property"
            ],
            correct: 1,
            explanation: "If property is destroyed, pecuniary loss is the fair market value at the time and place of destruction, or if that cannot be ascertained, the cost of replacing the property within a reasonable time.",
            objective: "8.15",
            module: "Property Damage"
        },
        {
            id: 5009,
            mainCategory: "property-offenses",
            category: "pecuniary-loss",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "Under PC 28.06, if property is DAMAGED (not destroyed), the amount of pecuniary loss is:",
            options: [
                "The fair market value at the time of damage",
                "The cost of repairing or restoring the damaged property within a reasonable time",
                "The replacement cost of the entire item",
                "The original purchase price minus depreciation"
            ],
            correct: 1,
            explanation: "If property is damaged, the pecuniary loss is the cost of repairing or restoring the damaged property within a reasonable time after the damage occurred.",
            objective: "8.15",
            module: "Property Damage"
        },
        {
            id: 5010,
            mainCategory: "property-offenses",
            category: "pecuniary-loss",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "If the amount of pecuniary loss cannot be ascertained by the criteria in PC 28.06(a)-(c), the loss is deemed to be:",
            options: [
                "Less than $100",
                "Greater than $750 but less than $2,500",
                "Greater than $2,500 but less than $30,000",
                "Determined by the victim's estimate"
            ],
            correct: 1,
            explanation: "PC 28.06(d) states that if pecuniary loss cannot be ascertained by the specified criteria, the amount is deemed to be greater than $750 but less than $2,500.",
            objective: "8.15",
            module: "Property Damage"
        },
        {
            id: 5011,
            mainCategory: "property-offenses",
            category: "offense-levels",
            difficulty: "basic",
            type: "multiple-choice",
            question: "According to the Basic Value Loss Ladder Chart, a loss of $1,200 would be what level offense?",
            options: [
                "Class C misdemeanor",
                "Class B misdemeanor", 
                "Class A misdemeanor",
                "State Jail Felony"
            ],
            correct: 2,
            explanation: "According to the value ladder, $750 to less than $2,500 is a Class A misdemeanor. $1,200 falls within this range.",
            objective: "8.15",
            module: "Property Damage"
        },
        {
            id: 5012,
            mainCategory: "property-offenses",
            category: "offense-levels",
            difficulty: "basic",
            type: "multiple-choice",
            question: "A property loss of $45,000 would result in what degree felony?",
            options: [
                "State Jail Felony",
                "3rd Degree Felony", 
                "2nd Degree Felony",
                "1st Degree Felony"
            ],
            correct: 1,
            explanation: "According to the value ladder, $30,000 to less than $150,000 is a 3rd Degree Felony. $45,000 falls within this range.",
            objective: "8.15",
            module: "Property Damage"
        },
        {
            id: 5013,
            mainCategory: "property-offenses",
            category: "criminal-mischief",
            difficulty: "basic",
            type: "multiple-choice",
            question: "Criminal Mischief under PC 28.03 includes all of the following EXCEPT:",
            options: [
                "Intentionally damaging tangible property without consent",
                "Tampering with property causing pecuniary loss or substantial inconvenience",
                "Making markings on tangible property without consent",
                "Recklessly damaging property during a lawful arrest"
            ],
            correct: 3,
            explanation: "Criminal Mischief requires acting without effective consent and involves intentional or knowing conduct in damaging, tampering with, or marking property. Reckless damage during lawful duties may have different provisions.",
            objective: "8.15",
            module: "Criminal Mischief"
        },
        {
            id: 5014,
            mainCategory: "property-offenses",
            category: "criminal-mischief",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "Criminal Mischief involving damage to a habitation by a firearm or explosive weapon with less than $2,500 damage is:",
            options: [
                "Class A misdemeanor",
                "State Jail Felony",
                "3rd Degree Felony",
                "2nd Degree Felony"
            ],
            correct: 1,
            explanation: "PC 28.03(b)(4)(B) makes it a State Jail Felony if the property damaged is a habitation and the damage is caused by a firearm or explosive weapon, even if the loss is less than $2,500.",
            objective: "8.15",
            module: "Criminal Mischief"
        },
        {
            id: 5015,
            mainCategory: "property-offenses",
            category: "criminal-mischief",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "Under PC 28.03, criminal mischief involving livestock and introducing mad cow disease is:",
            options: [
                "State Jail Felony",
                "3rd Degree Felony",
                "2nd Degree Felony", 
                "1st Degree Felony"
            ],
            correct: 3,
            explanation: "PC 28.03(i) makes it a 1st Degree Felony if the property is livestock and damage is caused by introducing bovine spongiform encephalopathy (mad cow disease).",
            objective: "8.15",
            module: "Criminal Mischief"
        },
        {
            id: 5016,
            mainCategory: "property-offenses",
            category: "criminal-mischief",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "Criminal mischief involving a fence containing cattle, bison, horses, sheep, swine, goats, or exotic livestock is enhanced to:",
            options: [
                "Class A misdemeanor regardless of damage amount",
                "State Jail Felony if damage is less than $2,500",
                "3rd Degree Felony regardless of damage amount",
                "Enhancement depends only on the dollar amount"
            ],
            correct: 1,
            explanation: "PC 28.03(b)(4)(C) enhances criminal mischief to a State Jail Felony if the property was a fence used for production or containment of specified livestock, even if damage is less than $2,500.",
            objective: "8.15",
            module: "Criminal Mischief"
        },
        {
            id: 5017,
            mainCategory: "property-offenses",
            category: "criminal-mischief",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "Under PC 28.03(c), it is presumed a person has knowingly tampered with utility property if the service has been:",
            options: [
                "Temporarily interrupted for maintenance",
                "Diverted from passing through a metering device",
                "Disconnected by the utility company for non-payment",
                "Reduced due to high demand periods"
            ],
            correct: 1,
            explanation: "PC 28.03(c) creates a presumption of knowing tampering if communication or supply has been diverted from a metering device, prevented from being correctly registered, or activated without a meter.",
            objective: "8.15",
            module: "Criminal Mischief"
        },
        {
            id: 5018,
            mainCategory: "property-offenses",
            category: "criminal-mischief",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "When multiple items are damaged in one scheme under PC 28.03(e), the amounts:",
            options: [
                "Must be charged as separate offenses",
                "Can be aggregated to determine the grade of offense",
                "Are limited to the highest single item value",
                "Cannot exceed $30,000 total"
            ],
            correct: 1,
            explanation: "PC 28.03(e) allows aggregation of pecuniary loss amounts when multiple items are damaged pursuant to one scheme or continuing course of conduct to determine the grade of offense.",
            objective: "8.15",
            module: "Criminal Mischief"
        },
        {
            id: 5019,
            mainCategory: "property-offenses",
            category: "graffiti",
            difficulty: "basic",
            type: "multiple-choice",
            question: "Graffiti under PC 28.08 requires the use of:",
            options: [
                "Any marking device",
                "Paint, indelible marker, or etching/engraving device", 
                "Only spray paint",
                "Permanent materials only"
            ],
            correct: 1,
            explanation: "PC 28.08 specifically requires markings made with paint, an indelible marker, or an etching or engraving device without effective consent of the owner.",
            objective: "8.15",
            module: "Criminal Mischief"
        },
        {
            id: 5020,
            mainCategory: "property-offenses",
            category: "graffiti",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "Graffiti on a school, place of worship, or public monument with $800 damage is:",
            options: [
                "Class A misdemeanor",
                "State Jail Felony",
                "3rd Degree Felony",
                "Follows normal value ladder"
            ],
            correct: 1,
            explanation: "PC 28.08(d) enhances graffiti to a State Jail Felony if made on specified locations (school, worship, burial, monument, community center) and the loss is $750 or more but less than $30,000.",
            objective: "8.15",
            module: "Criminal Mischief"
        },
        {
            id: 5021,
            mainCategory: "property-offenses",
            category: "graffiti",
            difficulty: "basic",
            type: "multiple-choice",
            question: "An 'indelible marker' under PC 28.08 is defined as:",
            options: [
                "Any permanent marker",
                "A device that makes marks more difficult to erase than ordinary ink",
                "Only markers containing alcohol-based ink",
                "Markers that cannot be removed at all"
            ],
            correct: 1,
            explanation: "PC 28.08(e)(3) defines indelible marker as a device making marks with paint or ink specifically formulated to be more difficult to erase, wash out, or remove than ordinary products.",
            objective: "8.15",
            module: "Criminal Mischief"
        },
        {
            id: 5022,
            mainCategory: "property-offenses",
            category: "reckless-damage",
            difficulty: "basic",
            type: "multiple-choice",
            question: "Reckless Damage or Destruction under PC 28.04 is:",
            options: [
                "Always a Class C misdemeanor",
                "Enhanced based on dollar amount like other property crimes",
                "A felony if it involves a vehicle",
                "Only applicable to real property"
            ],
            correct: 0,
            explanation: "PC 28.04 is always a Class C misdemeanor, regardless of the amount of damage. It requires recklessly damaging or destroying property without effective consent.",
            objective: "8.15",
            module: "Property Damage"
        },
        {
            id: 5023,
            mainCategory: "property-offenses",
            category: "railroad-property",
            difficulty: "basic",
            type: "multiple-choice",
            question: "Under PC 28.07, 'Railroad property' includes:",
            options: [
                "Only the trains and rail cars",
                "Trains, tracks, bridges, and right-of-way owned or used by a railroad",
                "Only the tracks and rails",
                "Property within 100 feet of railroad tracks"
            ],
            correct: 1,
            explanation: "PC 28.07(a)(1) defines railroad property as trains, equipment, rolling stock, AND railroad tracks, rails, bridges, trestles, or right-of-way owned or used by a railroad.",
            objective: "8.15",
            module: "Property Damage"
        },
        {
            id: 5024,
            mainCategory: "property-offenses",
            category: "railroad-property",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "Throwing an object at a train under PC 28.07 is:",
            options: [
                "Class C misdemeanor",
                "Class B misdemeanor unless bodily injury occurs",
                "Always a felony",
                "State Jail Felony"
            ],
            correct: 1,
            explanation: "PC 28.07(c) makes throwing an object at a train a Class B misdemeanor, unless the person causes bodily injury to another, which enhances it to a 3rd Degree Felony.",
            objective: "8.15",
            module: "Property Damage"
        },
        {
            id: 5025,
            mainCategory: "property-offenses",
            category: "railroad-property",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "Simply entering or remaining on railroad property knowing it is railroad property is:",
            options: [
                "Class C misdemeanor",
                "Class B misdemeanor",
                "Class A misdemeanor", 
                "Not an offense if no damage occurs"
            ],
            correct: 0,
            explanation: "PC 28.07(d) makes entering or remaining on railroad property knowing it is railroad property a Class C misdemeanor, regardless of whether damage occurs.",
            objective: "8.15",
            module: "Property Damage"
        },
        {
            id: 5026,
            mainCategory: "property-offenses",
            category: "railroad-property",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "Railroad employees are exempt from PC 28.07(b)(2)(A) if they have the right to engage in such conduct under:",
            options: [
                "Their employment contract",
                "State transportation regulations",
                "The Railway Labor Act",
                "Federal Railroad Administration rules"
            ],
            correct: 2,
            explanation: "PC 28.07(f) provides an exception for railroad employees or labor representatives who have the right to engage in conduct under the Railway Labor Act (45 U.S.C. Section 151 et seq.).",
            objective: "8.15",
            module: "Property Damage"
        },
        {
            id: 5027,
            mainCategory: "property-offenses",
            category: "arson",
            difficulty: "basic",
            type: "multiple-choice",
            question: "Under PC 28.02(a), Arson requires starting a fire or explosion with intent to:",
            options: [
                "Cause fear in others",
                "Destroy or damage specified property",
                "Create a public disturbance",
                "Collect insurance money"
            ],
            correct: 1,
            explanation: "PC 28.02(a) requires starting a fire or explosion with intent to destroy or damage vegetation, fence, or structure on open-space land, or buildings/habitations/vehicles under specified circumstances.",
            objective: "8.15",
            module: "Arson"
        },
        {
            id: 5028,
            mainCategory: "property-offenses",
            category: "arson",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "Arson under PC 28.02(a) is generally a _____ unless enhanced:",
            options: [
                "State Jail Felony",
                "3rd Degree Felony",
                "2nd Degree Felony",
                "1st Degree Felony"
            ],
            correct: 2,
            explanation: "PC 28.02(d) makes Arson under subsection (a) a 2nd Degree Felony, unless enhanced to 1st Degree Felony for bodily injury/death or targeting habitation/place of worship.",
            objective: "8.15",
            module: "Arson"
        },
        {
            id: 5029,
            mainCategory: "property-offenses",
            category: "arson",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "Arson is enhanced to a 1st Degree Felony if:",
            options: [
                "The fire spreads beyond the intended target",
                "Bodily injury or death occurs OR the target was a habitation/place of worship",
                "Property damage exceeds $300,000",
                "Multiple structures are involved"
            ],
            correct: 1,
            explanation: "PC 28.02(d) enhances Arson to 1st Degree Felony if bodily injury or death occurs by reason of the offense, OR if the intended target was a habitation or place of assembly or worship.",
            objective: "8.15",
            module: "Arson"
        },
        {
            id: 5030,
            mainCategory: "property-offenses",
            category: "arson",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "Under PC 28.02(a-1), recklessly starting a fire while manufacturing controlled substances is:",
            options: [
                "Class A misdemeanor",
                "State Jail Felony unless bodily injury/death occurs",
                "3rd Degree Felony",
                "2nd Degree Felony"
            ],
            correct: 1,
            explanation: "PC 28.02(e) makes Arson under (a-1) a State Jail Felony, except it becomes a 3rd Degree Felony if bodily injury or death was suffered by any person.",
            objective: "8.15",
            module: "Arson"
        },
        {
            id: 5031,
            mainCategory: "property-offenses",
            category: "arson",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "It is an exception to Arson charges if the fire was:",
            options: [
                "Accidental",
                "Part of controlled burning of open-space land",
                "Started by lightning",
                "Started for warmth during cold weather"
            ],
            correct: 1,
            explanation: "PC 28.02(b) provides an exception for fires that are part of the controlled burning of open-space land. Additionally, (c) provides a defense if proper permits were obtained.",
            objective: "8.15",
            module: "Arson"
        },
        {
            id: 5032,
            mainCategory: "property-offenses",
            category: "animal-cruelty",
            difficulty: "basic",
            type: "multiple-choice",
            question: "Under PC 42.09, 'Livestock animal' includes:",
            options: [
                "Only cattle, sheep, and swine",
                "Cattle, sheep, swine, goats, horses, and poultry commonly raised for consumption",
                "All farm animals including chickens and turkeys",
                "Any animal kept on agricultural property"
            ],
            correct: 1,
            explanation: "PC 42.09(b)(5) defines livestock animal as cattle, sheep, swine, goats, ratites, poultry commonly raised for consumption, horses/ponies/mules/donkeys, and native/nonnative hoofstock or fowl raised under agricultural practices.",
            objective: "8.15",
            module: "Animal Cruelty"
        },
        {
            id: 5033,
            mainCategory: "property-offenses",
            category: "animal-cruelty",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "Torturing a livestock animal under PC 42.09(a)(1) is:",
            options: [
                "Class A misdemeanor",
                "State Jail Felony",
                "3rd Degree Felony",
                "2nd Degree Felony"
            ],
            correct: 1,
            explanation: "PC 42.09(c) makes torture of livestock animals a State Jail Felony, enhanced to 3rd Degree Felony with two prior convictions under this section or 42.092.",
            objective: "8.15",
            module: "Animal Cruelty"
        },
        {
            id: 5034,
            mainCategory: "property-offenses",
            category: "animal-cruelty",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "Failing to provide necessary food, water, or care to livestock in your custody is:",
            options: [
                "Class A misdemeanor",
                "State Jail Felony",
                "3rd Degree Felony",
                "Not an offense if the animal survives"
            ],
            correct: 0,
            explanation: "PC 42.09(c) makes failing to provide necessary food, water, or care a Class A misdemeanor, enhanced to State Jail Felony with two prior convictions.",
            objective: "8.15",
            module: "Animal Cruelty"
        },
        {
            id: 5035,
            mainCategory: "property-offenses",
            category: "animal-cruelty",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "It is a defense to livestock cruelty prosecution if the conduct was:",
            options: [
                "Done by a family member",
                "Generally accepted animal husbandry or agriculture practice",
                "Done to protect other animals",
                "Done with veterinary supervision"
            ],
            correct: 1,
            explanation: "PC 42.09(f)(2) provides an exception for generally accepted and lawful animal husbandry or agriculture practices involving livestock animals.",
            objective: "8.15",
            module: "Animal Cruelty"
        },
        {
            id: 5036,
            mainCategory: "property-offenses",
            category: "animal-cruelty",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "Using a live livestock animal as a lure in dog race training is:",
            options: [
                "Class A misdemeanor",
                "State Jail Felony", 
                "3rd Degree Felony",
                "Legal if the animal is not harmed"
            ],
            correct: 1,
            explanation: "PC 42.09(a)(7) makes using a live livestock animal as a lure in dog race training a State Jail Felony, enhanced to 3rd Degree Felony with prior convictions.",
            objective: "8.15",
            module: "Animal Cruelty"
        },
        {
            id: 5037,
            mainCategory: "property-offenses",
            category: "animal-cruelty",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "Tripping a horse is a defense if done for:",
            options: [
                "Training purposes",
                "Entertainment at rodeos",
                "Identifying ownership or giving veterinary care",
                "Controlling aggressive behavior"
            ],
            correct: 2,
            explanation: "PC 42.09(d) provides a defense to horse tripping if the actor tripped the horse for the purpose of identifying the ownership of the horse or giving veterinary care to the horse.",
            objective: "8.15",
            module: "Animal Cruelty"
        },
        {
            id: 5038,
            mainCategory: "property-offenses",
            category: "animal-cruelty",
            difficulty: "basic",
            type: "multiple-choice",
            question: "Under PC 42.092, an 'Animal' means:",
            options: [
                "Any living creature",
                "A domesticated living creature and wild creatures previously captured",
                "Only pets like dogs and cats",
                "Any creature except livestock"
            ],
            correct: 1,
            explanation: "PC 42.092(a)(2) defines animal as a domesticated living creature, including stray or feral cats/dogs, and wild living creatures previously captured, but NOT uncaptured wild creatures or livestock.",
            objective: "8.15",
            module: "Animal Cruelty"
        },
        {
            id: 5039,
            mainCategory: "property-offenses",
            category: "animal-cruelty",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "Torturing a non-livestock animal under PC 42.092(b)(1) is:",
            options: [
                "Class A misdemeanor",
                "State Jail Felony",
                "3rd Degree Felony",
                "2nd Degree Felony"
            ],
            correct: 2,
            explanation: "PC 42.092(c-1) makes torture or cruel killing of non-livestock animals a 3rd Degree Felony, enhanced to 2nd Degree Felony with prior convictions under specified subsections.",
            objective: "8.15",
            module: "Animal Cruelty"
        },
        {
            id: 5040,
            mainCategory: "property-offenses",
            category: "animal-cruelty",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "It is a defense to non-livestock animal cruelty if the animal was:",
            options: [
                "A stray animal",
                "On your property injuring your livestock and discovered in the act",
                "Aggressive toward humans",
                "Old and suffering"
            ],
            correct: 1,
            explanation: "PC 42.092(e)(1) provides a defense if the animal was discovered on the person's property injuring/killing livestock or damaging crops and was killed/injured when discovered in the act.",
            objective: "8.15",
            module: "Animal Cruelty"
        },
        {
            id: 5041,
            mainCategory: "property-offenses",
            category: "animal-cruelty",
            type: "multiple-choice",
            question: "A 'Trap-Neuter-Return Program' under PC 42.092:",
            options: [
                "Is illegal under Texas law",
                "Provides a defense for abandonment charges when properly executed",
                "Only applies to cats",
                "Requires court approval"
            ],
            correct: 1,
            explanation: "PC 42.092(e-1) provides a defense to abandonment charges if a stray/feral animal was released pursuant to a Trap-Neuter-Return Program involving trapping, veterinary care, sterilization, marking, and return.",
            objective: "8.15",
            module: "Animal Cruelty"
        },
        {
            id: 5042,
            mainCategory: "property-offenses",
            category: "police-service-animals",
            difficulty: "basic",
            type: "multiple-choice",
            question: "Under PC 38.151, a 'Police service animal' means:",
            options: [
                "Only police dogs",
                "Dogs and horses used by police",
                "A dog, horse, or other domesticated animal specially trained for law enforcement use",
                "Any animal owned by a police department"
            ],
            correct: 2,
            explanation: "PC 38.151(a)(3) defines police service animal as a dog, horse, or other domesticated animal that is specially trained for use by a handler or rider for law enforcement purposes.",
            objective: "8.15",
            module: "Animal Cruelty"
        },
        {
            id: 5043,
            mainCategory: "property-offenses",
            category: "police-service-animals",
            difficulty: "basic",
            type: "multiple-choice",
            question: "Taunting, tormenting, or striking a police service animal is:",
            options: [
                "Class C misdemeanor",
                "Class B misdemeanor",
                "Class A misdemeanor",
                "State Jail Felony"
            ],
            correct: 0,
            explanation: "PC 38.151(c)(1) makes recklessly taunting, tormenting, or striking a police service animal a Class C misdemeanor.",
            objective: "8.15",
            module: "Animal Cruelty"
        },
        {
            id: 5044,
            mainCategory: "property-offenses",
            category: "police-service-animals",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "Injuring or killing a police service animal is enhanced to what level?",
            options: [
                "Class A misdemeanor",
                "State Jail Felony",
                "3rd Degree Felony",
                "2nd Degree Felony"
            ],
            correct: 3,
            explanation: "PC 38.151(c)(5) makes injuring or killing a police service animal a 2nd Degree Felony if it causes material and permanent injury affecting its police service.",
            objective: "8.15",
            module: "Animal Cruelty"
        },
        {
            id: 5045,
            mainCategory: "property-offenses",
            category: "property-scenarios",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "High schoolers use chalk to mark up a rival school's walls with slogans and drawings, costing $300 to clean. This is most likely:",
            options: [
                "Criminal Mischief Class B",
                "Criminal Mischief Class A", 
                "Graffiti Class B",
                "Graffiti Class A"
            ],
            correct: 0,
            explanation: "Chalk markings would fall under Criminal Mischief rather than Graffiti (which requires paint, indelible marker, or etching device). $300 damage falls in the $100-$750 range = Class B misdemeanor.",
            objective: "8.15",
            module: "Property Damage"
        },
        {
            id: 5046,
            mainCategory: "property-offenses",
            category: "property-scenarios",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "A person throws a match in a dumpster, starting a fire that costs the city $1,300 in response costs. This is most likely:",
            options: [
                "Criminal Mischief Class A",
                "Arson State Jail Felony",
                "Arson 2nd Degree Felony",
                "Reckless Damage Class C"
            ],
            correct: 0,
            explanation: "This appears to be reckless or intentional property damage rather than arson (which requires specific intent to destroy/damage). $1,300 falls in the $750-$2,500 range = Class A Criminal Mischief.",
            objective: "8.15",
            module: "Property Damage"
        },
        {
            id: 5047,
            mainCategory: "property-offenses",
            category: "property-scenarios",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "Using spray paint on a school causing $500 damage, then using permanent marker on cemetery tombstones causing $250 damage:",
            options: [
                "Two separate Class B Graffiti charges",
                "Can be aggregated as one Graffiti Class A charge",
                "School graffiti enhanced to State Jail Felony, cemetery graffiti Class B",
                "Both are Criminal Mischief, not Graffiti"
            ],
            correct: 2,
            explanation: "Both involve graffiti tools (spray paint/permanent marker). School graffiti with $500 damage at a protected location ($750+ at school/worship/burial/monument) = SJF enhancement. Cemetery graffiti with $250 = Class B.",
            objective: "8.15",
            module: "Property Damage"
        },
        {
            id: 5048,
            mainCategory: "property-offenses",
            category: "property-scenarios",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "Toilet papering and egging 9 houses at $50 damage per location ($450 total) could be charged as:",
            options: [
                "Nine separate Class C Criminal Mischief charges",
                "One Class B Criminal Mischief charge with aggregated damages",
                "Class A Criminal Mischief due to multiple victims",
                "Reckless Damage since it's less serious"
            ],
            correct: 1,
            explanation: "PC 28.03(e) allows aggregation of damages when multiple properties are damaged pursuant to one scheme. $450 total falls in $100-$750 range = Class B Criminal Mischief.",
            objective: "8.15",
            module: "Property Damage"
        },

        // Additional Advanced Property Offenses Questions
        {
            id: 5049,
            mainCategory: "property-offenses",
            category: "criminal-mischief",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "A person cuts utility lines serving a nursing home during a winter storm, causing the power to go out. No one was injured, but repair costs are $15,000. What is the most appropriate charge?",
            options: [
                "Criminal Mischief State Jail Felony ($2,500-$30,000)",
                "Criminal Mischief State Jail Felony (public utilities enhancement)",
                "Criminal Mischief 3rd Degree Felony (endangering life enhancement)",
                "Reckless Damage Class C"
            ],
            correct: 1,
            explanation: "PC 28.03(b)(4)(D) enhances criminal mischief to State Jail Felony for impairing public utilities, regardless of dollar amount (even if less than $30,000). The conduct involves interruption of public power supply.",
            objective: "8.15",
            module: "Criminal Mischief"
        },
        {
            id: 5050,
            mainCategory: "property-offenses",
            category: "criminal-mischief",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "A defendant damages his own car valued at $5,000, but his ex-wife is a co-owner who did not consent. The car is also subject to a bank loan. What defense applies?",
            options: [
                "Complete defense - he owns the car",
                "PC 28.05 - partial interest defense reducing penalty",
                "PC 28.06(e) - proportional reduction of loss amount",
                "No defense available under PC 28.05"
            ],
            correct: 3,
            explanation: "PC 28.05 states it is NO defense that the actor has an interest in property if another person also has an interest the actor is not entitled to infringe. His ex-wife's ownership interest prevents this defense.",
            objective: "8.15",
            module: "Property Damage"
        },
        {
            id: 5051,
            mainCategory: "property-offenses",
            category: "arson",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "A person starts a controlled burn on their rural property with proper permits. The fire spreads beyond their property line and damages a neighbor's barn valued at $75,000. What is the most likely charge?",
            options: [
                "Arson 2nd Degree Felony",
                "Arson 1st Degree Felony (property damage >$30,000)",
                "Criminal Mischief 3rd Degree Felony",
                "No criminal liability due to controlled burning exception"
            ],
            correct: 2,
            explanation: "PC 28.02(b) provides an exception only for controlled burning of open-space land that doesn't spread beyond the intended area. Damage to another's property would likely be Criminal Mischief rather than Arson.",
            objective: "8.15",
            module: "Arson"
        },
        {
            id: 5052,
            mainCategory: "property-offenses",
            category: "arson",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "During a meth lab explosion, the resulting fire kills one person and destroys a church next door. What is the highest charge for the fire-related offense?",
            options: [
                "Arson 1st Degree Felony (death occurred)",
                "Arson 1st Degree Felony (place of worship targeted)",
                "PC 28.02(a-1) - 3rd Degree Felony (death in controlled substance fire)",
                "Both A and B apply - 1st Degree Felony"
            ],
            correct: 3,
            explanation: "Both enhancements apply: death occurred (PC 28.02(d)(1)) AND the target was a place of worship (PC 28.02(d)(2)). Either factor alone would enhance to 1st Degree Felony.",
            objective: "8.15",
            module: "Arson"
        },
        {
            id: 5053,
            mainCategory: "property-offenses",
            category: "animal-cruelty",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "A veterinarian euthanizes a healthy horse without the owner's consent because the horse was discovered on the vet's property eating crops. What is the best defense?",
            options: [
                "Veterinary authority defense",
                "PC 42.092(e)(1) - property protection defense",
                "Bona fide scientific research defense",
                "No defense available - this is animal cruelty"
            ],
            correct: 1,
            explanation: "PC 42.092(e)(1) provides a defense if the animal was discovered on the person's property in the act of injuring/killing livestock or damaging crops and was killed/injured when discovered in the act.",
            objective: "8.15",
            module: "Animal Cruelty"
        },
        {
            id: 5054,
            mainCategory: "property-offenses",
            category: "animal-cruelty",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "A person with two prior convictions under PC 42.09 (livestock cruelty) now fails to provide water to cattle during a drought. What is the charge level?",
            options: [
                "Class A misdemeanor (basic penalty)",
                "State Jail Felony (first enhancement)",
                "3rd Degree Felony (two prior convictions)",
                "2nd Degree Felony (repeated animal cruelty)"
            ],
            correct: 2,
            explanation: "PC 42.09(c) enhances failing to provide care from Class A to State Jail Felony, then to 3rd Degree Felony if the person has two prior convictions under PC 42.09 or 42.092.",
            objective: "8.15",
            module: "Animal Cruelty"
        },
        {
            id: 5055,
            mainCategory: "property-offenses",
            category: "police-service-animals",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "During a arrest, a suspect kicks a police dog causing permanent damage to its leg, ending its police career. The dog survives but can no longer work. What is the charge?",
            options: [
                "PC 38.151(b)(6) - Class C misdemeanor",
                "PC 38.151(c)(2) - Class B misdemeanor",
                "PC 38.151(c)(5) - 2nd Degree Felony",
                "PC 42.092 - 3rd Degree Felony (non-livestock cruelty)"
            ],
            correct: 2,
            explanation: "PC 38.151(c)(5) makes it a 2nd Degree Felony if the conduct causes material and permanent injury affecting the animal's police service capabilities, which applies here.",
            objective: "8.15",
            module: "Animal Cruelty"
        },
        {
            id: 5056,
            mainCategory: "property-offenses",
            category: "graffiti",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "A person spray paints graffiti on a school ($600 damage), then on a regular business ($400 damage), all in one night. How should this be charged?",
            options: [
                "Two separate graffiti charges: State Jail Felony + Class B",
                "Aggregated graffiti Class A ($1,000 total)",
                "School graffiti as State Jail Felony, business as Class B (no aggregation)",
                "Enhanced to State Jail Felony due to school location"
            ],
            correct: 2,
            explanation: "The school graffiti is enhanced to State Jail Felony under PC 28.08(d) for the protected location. The business graffiti is separate Class B. Different enhancement rules prevent aggregation.",
            objective: "8.15",
            module: "Criminal Mischief"
        },
        {
            id: 5057,
            mainCategory: "property-offenses",
            category: "graffiti",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "A person uses a knife to carve gang symbols into cemetery headstones, causing $900 in damage. What is the most appropriate charge?",
            options: [
                "Graffiti State Jail Felony (cemetery + $750+)",
                "Criminal Mischief Class A ($750-$2,500)",
                "Graffiti Class A ($750-$2,500)",
                "Criminal Mischief State Jail Felony (cemetery enhancement)"
            ],
            correct: 0,
            explanation: "This is Graffiti (etching device used) at a protected location (cemetery/human burial) with $900 damage ($750+), triggering the State Jail Felony enhancement under PC 28.08(d).",
            objective: "8.15",
            module: "Criminal Mischief"
        },
        {
            id: 5058,
            mainCategory: "property-offenses",
            category: "railroad-property",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "A railroad union representative enters railroad property during a labor dispute to post notices. Railroad security arrests him. What defense applies?",
            options: [
                "Labor union exemption under federal law",
                "PC 28.07(f) - Railway Labor Act exception",
                "First Amendment free speech protection",
                "No defense - trespassing is trespassing"
            ],
            correct: 1,
            explanation: "PC 28.07(f) provides an exception if the conduct is undertaken by a labor organization representative who has the right to engage in such conduct under the Railway Labor Act (45 U.S.C. Section 151 et seq.).",
            objective: "8.15",
            module: "Property Damage"
        },
        {
            id: 5059,
            mainCategory: "property-offenses",
            category: "property-scenarios",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "A disgruntled employee sabotages an ATM machine, causing $8,000 in damage and preventing access for customers. What enhancement applies?",
            options: [
                "State Jail Felony ($2,500-$30,000 damage)",
                "3rd Degree Felony (ATM access impairment)",
                "3rd Degree Felony (public service interruption)",
                "Class A misdemeanor (less than $30,000)"
            ],
            correct: 1,
            explanation: "PC 28.03(b)(5)(C) enhances criminal mischief to 3rd Degree Felony for impairing access to an automated teller machine, regardless of the amount of pecuniary loss.",
            objective: "8.15",
            module: "Criminal Mischief"
        },
        {
            id: 5060,
            mainCategory: "property-offenses",
            category: "property-scenarios",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "A person steals a catalytic converter from a car, damaging the exhaust system. Total damage is $1,800. The theft charge is filed separately. What property damage charge applies?",
            options: [
                "Criminal Mischief Class A ($750-$2,500)",
                "Criminal Mischief State Jail Felony (catalytic converter enhancement)",
                "Criminal Mischief Class B ($100-$750)",
                "No separate property charge - covered by theft"
            ],
            correct: 1,
            explanation: "PC 28.03(b)(4)(E) enhances criminal mischief to State Jail Felony if the property is a motor vehicle damaged during removal or attempted removal of a catalytic converter, even if damage is less than $30,000.",
            objective: "8.15",
            module: "Criminal Mischief"
        },
        {
            id: 5061,
            mainCategory: "property-offenses",
            category: "pecuniary-loss",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "A person destroys a promissory note worth $10,000 at maturity, but $3,000 has already been paid. What is the pecuniary loss for the document?",
            options: [
                "$10,000 (full face value)",
                "$7,000 (amount due less satisfied portion)",
                "$3,000 (amount already paid)",
                "Greater than $750 but less than $2,500 (default amount)"
            ],
            correct: 1,
            explanation: "PC 28.06(c)(1) states that for documents constituting evidence of debt, the loss is the amount due and collectible at maturity less any part that has been satisfied ($10,000 - $3,000 = $7,000).",
            objective: "8.15",
            module: "Property Damage"
        },
        {
            id: 5062,
            mainCategory: "property-offenses",
            category: "property-definitions",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "A person damages both a house and a detached garage on the same property. How many 'habitations' are involved for charging purposes?",
            options: [
                "One habitation (same property)",
                "Two habitations (separate structures)",
                "Depends on whether the garage is used for overnight accommodation",
                "Depends on whether the structures are connected"
            ],
            correct: 2,
            explanation: "PC 28.01(1) defines habitation as a structure adapted for overnight accommodation. A detached garage would only be a habitation if adapted for such use. Otherwise, it's just a building.",
            objective: "8.15",
            module: "Property Damage"
        },
        {
            id: 5063,
            mainCategory: "property-offenses",
            category: "criminal-types",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "During a traffic stop, you discover stolen electronics worth $15,000. The suspect has burglary tools and detailed floor plans of local businesses. This suggests which type of criminal?",
            options: [
                "Street thief (reckless behavior)",
                "Semi-professional thief (opportunity-based)",
                "Professional thief (planning and skills)",
                "White collar criminal (business crimes)"
            ],
            correct: 2,
            explanation: "The detailed planning (floor plans), high-value property, specialized tools, and business targeting all indicate a professional thief who operates with planning, direction, and operating skills.",
            objective: "32.7",
            module: "Property Damage"
        },
        {
            id: 5064,
            mainCategory: "property-offenses",
            category: "property-scenarios",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "An officer discovers someone has been tampering with the gas meter at a business to reduce bills. The economic benefit received is $2,200 over six months. What charge applies?",
            options: [
                "Criminal Mischief Class A ($750-$2,500 loss)",
                "Criminal Mischief State Jail Felony (utility tampering presumption)",
                "Theft Class A ($750-$2,500 value)",
                "Both Criminal Mischief State Jail Felony and Theft Class A"
            ],
            correct: 1,
            explanation: "PC 28.03(c) creates a presumption of knowing tampering when service is diverted from a metering device. The utility tampering enhances to State Jail Felony under PC 28.03(b)(4)(D).",
            objective: "8.15",
            module: "Criminal Mischief"
        },
        
        // Transportation Code Module 5 - Vehicle Equipment Practice Questions
        {
            id: "veq001",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            type: "multiple-choice",
            question: "Under TRC 547.001, a 'slow-moving vehicle' is designed to operate at a maximum speed of:",
            options: [
                "20 miles per hour or less",
                "25 miles per hour or less",
                "30 miles per hour or less",
                "35 miles per hour or less"
            ],
            correct: 1,
            explanation: "TRC 547.001 defines slow-moving vehicle as a motor vehicle designed to operate at a maximum speed of 25 miles per hour or less.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq002",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            type: "multiple-choice",
            question: "TRC 547.302 requires lighted lamps in which two circumstances?",
            options: [
                "At nighttime and during rain",
                "At nighttime and when visibility is less than 1,000 feet",
                "During bad weather and at intersections",
                "At nighttime and in construction zones"
            ],
            correct: 1,
            explanation: "TRC 547.302 requires lighted lamps: (1) at nighttime, and (2) when light is insufficient to clearly discern a person or vehicle at a distance of 1,000 feet.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq003",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "Under TRC 547.303, what colors are prohibited for front-facing lights?",
            options: [
                "Blue and red only",
                "Red only",
                "Red and amber",
                "Blue, red, and green"
            ],
            correct: 1,
            explanation: "TRC 547.303 specifies front lights must be white or amber only. Red lights are prohibited on the front of vehicles.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq004",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "TRC 547.304 prohibits red, white, or blue beacon lights unless:",
            options: [
                "The vehicle is registered in Texas",
                "The equipment is used as specifically authorized by Chapter 547",
                "The operator has a commercial driver's license",
                "The lights are only used during emergencies"
            ],
            correct: 1,
            explanation: "TRC 547.304 prohibits red, white, or blue beacon, flashing, or alternating lights unless the equipment is used as specifically authorized by Chapter 547.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq005",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "TRC 547.3215 adopts which federal standard for vehicle lighting?",
            options: [
                "Federal Motor Vehicle Safety Standard No. 105",
                "Federal Motor Vehicle Safety Standard No. 108",
                "Federal Motor Vehicle Safety Standard No. 110",
                "Federal Motor Vehicle Safety Standard No. 112"
            ],
            correct: 1,
            explanation: "TRC 547.3215 adopts Federal Motor Vehicle Safety Standard No. 108 (49 CFR 571.108) for lighting systems, reflectors, and associated equipment.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq006",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "According to TRC 547.321, headlamps must be mounted at what height?",
            options: [
                "22-54 inches (Federal Standard only)",
                "24-54 inches (TRC) / 22-54 inches (Federal Standard)",
                "20-52 inches",
                "26-56 inches"
            ],
            correct: 1,
            explanation: "TRC 547.321 specifies 24-54 inches, but Federal Standard 108 (adopted by TRC 547.3215) requires 22-54 inches.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq007",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "TRC 547.322 requires dimming headlamps within how many feet of an approaching vehicle?",
            options: [
                "300 feet",
                "400 feet",
                "500 feet",
                "600 feet"
            ],
            correct: 2,
            explanation: "TRC 547.322 requires dimming headlamps within 500 feet of an approaching vehicle and within 300 feet when following another vehicle.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq008",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            type: "multiple-choice",
            question: "TRC 547.323 requires tail lamps to be what color and visible from what distance?",
            options: [
                "Red light visible from 300 feet",
                "Red light visible from 500 feet",
                "Red or amber light visible from 300 feet",
                "Red or amber light visible from 500 feet"
            ],
            correct: 1,
            explanation: "TRC 547.323 requires at least one tail lamp that emits red light visible from 500 feet.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq009",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "High-mounted stop lamps are required on passenger cars manufactured after what date?",
            options: [
                "September 1, 1985",
                "September 1, 1990",
                "September 1, 1993",
                "September 1, 1995"
            ],
            correct: 0,
            explanation: "Federal Standard 108 requires high-mounted stop lamps on passenger cars after September 1, 1985, and light trucks after September 1, 1993.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq010",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "TRC 547.325 requires turn signals to flash at what rate?",
            options: [
                "45-90 times per minute",
                "60-120 times per minute",
                "75-135 times per minute",
                "90-150 times per minute"
            ],
            correct: 1,
            explanation: "TRC 547.325 requires turn signals to flash 60-120 times per minute and be visible from 300 feet.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq011",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "TRC 547.328 allows no more than how many auxiliary driving lamps?",
            options: [
                "1",
                "2",
                "3",
                "4"
            ],
            correct: 1,
            explanation: "TRC 547.328 permits no more than 2 auxiliary driving lamps, mounted no higher than 42 inches.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq012",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "TRC 547.351 requires clearance and side marker lamps on vehicles that are at least:",
            options: [
                "72 inches wide",
                "80 inches wide",
                "84 inches wide",
                "96 inches wide"
            ],
            correct: 1,
            explanation: "TRC 547.351 requires clearance and side marker lamps on buses, trucks, trailers, and semitrailers at least 80 inches wide.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq013",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "Under TRC 547.402, which vehicles are NOT required to have brakes on each wheel?",
            options: [
                "Special mobile equipment only",
                "Special mobile equipment and towed commodity vehicles",
                "Special mobile equipment, towed commodity vehicles, and certain trailers",
                "No vehicles are exempt from brake requirements"
            ],
            correct: 2,
            explanation: "TRC 547.402 exempts: (1) special mobile equipment, (2) towed commodity vehicles with wheels on roadway, (3) trailers 4,500-15,000 lbs at speeds >30 mph need only rear axle brakes.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq014",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            type: "multiple-choice",
            question: "TRC 547.403 defines service brakes as:",
            options: [
                "Emergency brakes used in case of failure",
                "Parking brakes that hold the vehicle stationary",
                "Primary brakes operated by one control mechanism",
                "Secondary brakes for trailer operation"
            ],
            correct: 2,
            explanation: "TRC 547.403 defines service brakes as the vehicle's primary brakes operated by one control mechanism (brake pedal) that operates all brakes simultaneously.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq015",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "TRC 547.405 requires emergency brakes on trailers to remain applied for how long after breakaway?",
            options: [
                "10 minutes",
                "15 minutes",
                "20 minutes",
                "30 minutes"
            ],
            correct: 1,
            explanation: "TRC 547.405 requires emergency brakes on trailers >4,500 lbs to automatically apply and remain applied for at least 15 minutes in case of breakaway.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq016",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            type: "multiple-choice",
            question: "TRC 547.501 requires a horn to be audible at what distance?",
            options: [
                "100 feet",
                "150 feet",
                "200 feet",
                "250 feet"
            ],
            correct: 2,
            explanation: "TRC 547.501 requires a horn in good working condition that emits sound audible under normal conditions at a distance of at least 200 feet.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq017",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "TRC 547.502 requires trucks outside urban areas to carry which daytime warning devices?",
            options: [
                "3 flares and 3 red reflectors",
                "2 red flags at least 12 inches square",
                "2 red triangles and standards",
                "4 emergency lights and batteries"
            ],
            correct: 1,
            explanation: "TRC 547.502 requires trucks/buses outside urban areas to carry during daytime: at least 2 red flags at least 12 inches square with standards.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq018",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "TRC 547.503 requires immediate hazard lamp display for stopped vehicles that are at least:",
            options: [
                "72 inches wide or 25 feet long",
                "80 inches wide or 30 feet long",
                "84 inches wide or 35 feet long",
                "96 inches wide or 40 feet long"
            ],
            correct: 1,
            explanation: "TRC 547.503 requires vehicles at least 80 inches wide or 30 feet long to immediately display hazard lamps when stopped on roadway.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq019",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "TRC 547.504 requires warning devices if a large vehicle is stopped for more than how long?",
            options: [
                "5 minutes",
                "10 minutes",
                "15 minutes",
                "20 minutes"
            ],
            correct: 1,
            explanation: "TRC 547.504 requires warning devices to be displayed if vehicles ≥80\" wide or 30' long are stopped for more than 10 minutes.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq020",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            type: "multiple-choice",
            question: "TRC 547.602 requires mirrors to provide a rear view of at least:",
            options: [
                "100 feet",
                "150 feet",
                "200 feet",
                "300 feet"
            ],
            correct: 2,
            explanation: "TRC 547.602 requires mirrors located to reflect to the operator a view of the highway for a distance of at least 200 feet from the rear.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq021",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "TRC 547.605 considers emission systems defective if visible smoke is emitted for longer than:",
            options: [
                "5 seconds",
                "10 seconds", 
                "15 seconds",
                "20 seconds"
            ],
            correct: 1,
            explanation: "TRC 547.605 creates a violation if the vehicle emits visible smoke for 10 seconds or longer, or smoke that remains suspended for 10 seconds or longer.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq022",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "TRC 547.606 requires safety guards/mudflaps to be suspended within how many inches of the roadway?",
            options: [
                "6 inches (TRC) / 10 inches (with admin tolerance)",
                "8 inches (TRC) / 12 inches (with admin tolerance)",
                "10 inches (TRC) / 14 inches (with admin tolerance)",
                "12 inches (TRC) / 16 inches (with admin tolerance)"
            ],
            correct: 1,
            explanation: "TRC 547.606 requires safety guards within 8 inches of roadway surface, but administrative code allows 4 inches additional tolerance (12 inches total).",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq023",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "Which vehicles are exempt from safety guard/mudflap requirements?",
            options: [
                "Truck-tractors operated alone and pole trailers only",
                "Truck-tractors alone, pole trailers, recreational vehicles, and buses",
                "All vehicles under 10,000 lbs GVWR",
                "Only vehicles registered out of state"
            ],
            correct: 1,
            explanation: "Four exemptions: (1) truck-tractors operated alone, (2) pole trailers, (3) recreational vehicles (admin code), (4) buses (admin code).",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq024",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "TRC 547.613 allows window tint above the AS1 line if it has at least what light transmission?",
            options: [
                "20% light transmission",
                "25% light transmission",
                "30% light transmission",
                "35% light transmission"
            ],
            correct: 1,
            explanation: "TRC 547.613 allows tint above the AS1 line (or 5\" from top) if it has at least 25% light transmission and is not red, amber, or blue.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq025",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            type: "multiple-choice",
            question: "TRC 547.613 allows what tolerance on window tint light transmission?",
            options: [
                "2% tolerance (THP allows 3%)",
                "3% tolerance (THP allows 5%)",
                "5% tolerance (THP allows 7%)",
                "No tolerance allowed"
            ],
            correct: 1,
            explanation: "TRC 547.613 allows 3% variance on required light transmission, but THP policy allows 5% before issuing citations.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq026",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "TRC 547.615 allows recording device information retrieval under which circumstances?",
            options: [
                "Court order only",
                "Court order or owner consent only",
                "Court order, owner consent, safety research, or emergency response",
                "Any law enforcement officer may retrieve the information"
            ],
            correct: 2,
            explanation: "TRC 547.615 allows retrieval with: (1) court order, (2) owner consent, (3) safety research without ID disclosure, (4) emergency response determination.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq027",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "basic",
            type: "multiple-choice",
            question: "TRC 547.616 prohibits radar interference devices. Are radar detectors prohibited?",
            options: [
                "Yes, all radar-related devices are prohibited",
                "No, radar detectors are passive devices and not prohibited",
                "Yes, but only for commercial vehicles",
                "No, but only if they don't actively transmit"
            ],
            correct: 1,
            explanation: "TRC 547.616 prohibits radar interference devices (active jammers), but radar detectors are passive devices and not prohibited.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq028",
            mainCategory: "transportation-code",
            category: "emergency-vehicles",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "TRC 547.701 requires school buses to have red flashing lights visible from what distance?",
            options: [
                "300 feet",
                "400 feet",
                "500 feet",
                "600 feet"
            ],
            correct: 2,
            explanation: "TRC 547.701 requires school buses to have red flashing signal lamps (2 front, 2 rear) visible from 500 feet.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq029",
            mainCategory: "transportation-code",
            category: "emergency-vehicles",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "TRC 547.701 requires school buses model year 2018 and later to have:",
            options: [
                "Lap belts for all passengers",
                "3-point seat belts for each passenger and operator",
                "Seat belts only for the operator",
                "No seat belt requirements"
            ],
            correct: 1,
            explanation: "TRC 547.701(e) requires buses model year 2018+ to have 3-point seat belts for each passenger and operator, unless budget doesn't permit.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq030",
            mainCategory: "transportation-code",
            category: "emergency-vehicles",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "TRC 547.702 requires authorized emergency vehicles to have sirens audible from what distance?",
            options: [
                "300 feet",
                "400 feet",
                "500 feet",
                "600 feet"
            ],
            correct: 2,
            explanation: "TRC 547.702 requires authorized emergency vehicles to have sirens audible from at least 500 feet and 4 alternately flashing red lights visible from 500 feet.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq031",
            mainCategory: "transportation-code",
            category: "specialized-vehicles",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "TRC 547.703 requires slow-moving vehicle emblems to be visible from what distance?",
            options: [
                "300 feet",
                "400 feet",
                "500 feet",
                "600 feet"
            ],
            correct: 2,
            explanation: "TRC 547.703 requires slow-moving vehicle emblems to have reflective surface visible from at least 500 feet, mounted base down on rear.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq032",
            mainCategory: "transportation-code",
            category: "specialized-vehicles",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "TRC 547.801 requires motorcycle headlamps to be mounted at what height?",
            options: [
                "20-68 inches",
                "22-70 inches",
                "24-54 inches",
                "26-56 inches"
            ],
            correct: 2,
            explanation: "TRC 547.801 requires motorcycle headlamps to be mounted at a height from 24 to 54 inches.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq033",
            mainCategory: "transportation-code",
            category: "specialized-vehicles",
            difficulty: "intermediate",
            type: "multiple-choice",
            question: "TRC 547.801 requires motorcycles to have headlamps illuminated:",
            options: [
                "Only at nighttime",
                "At all times (except pre-1975 models)",
                "Only when visibility is reduced",
                "Only in construction zones"
            ],
            correct: 1,
            explanation: "TRC 547.801(d) requires at least one headlamp to be illuminated at all times on motorcycles, except those manufactured before 1975.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq034",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            type: "scenario",
            question: "During a traffic stop, you notice the driver's side window has very dark tint. The driver provides an out-of-state registration. What action should you take?",
            options: [
                "Issue a citation for illegal window tint",
                "Issue a warning for illegal window tint",
                "No action - out-of-state vehicles are exempt from Texas tint laws",
                "Conduct a field test of the tint transmission"
            ],
            correct: 2,
            explanation: "TRC 547.613(b)(12) exempts motor vehicles not registered in Texas from the window tint restrictions.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq035",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            type: "scenario",
            question: "A truck-tractor pulling a trailer has mudflaps that are 14 inches from the ground when stationary. Is this a violation?",
            options: [
                "Yes, must be within 8 inches",
                "Yes, must be within 12 inches",
                "No, 14 inches is acceptable",
                "Depends on the width of the tires"
            ],
            correct: 1,
            explanation: "TRC 547.606 requires mudflaps within 8 inches, but administrative code allows 4 inches tolerance (12 inches total). 14 inches exceeds this limit.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq036",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            type: "scenario",
            question: "A commercial vehicle has been emitting visible black smoke for 15 seconds while climbing a hill. The driver says it's normal due to the grade. Is this a violation?",
            options: [
                "No violation - uphill travel is an exception",
                "Violation - 15 seconds exceeds the 10-second limit",
                "No violation if the driver downshifts appropriately",
                "Violation only if other vehicles are affected"
            ],
            correct: 1,
            explanation: "TRC 547.605(d) allows exceptions for downshifting/lower gears to maintain momentum, but 15 seconds of visible smoke exceeds the 10-second limit.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq037",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            type: "scenario",
            question: "A school bus is stopped with red flashing lights activated to load students. A vehicle fails to stop. What equipment requirement applies to the bus?",
            options: [
                "Only red flashing lights are required",
                "Red flashing lights must be used when loading/unloading students",
                "Stop arms are required equipment",
                "Rooftop warning lamps must be activated"
            ],
            correct: 1,
            explanation: "TRC 547.701(c) requires school buses to use flashing warning lights when stopped to permit students to board or exit. Stop arms and rooftop lamps are permitted but not required.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq038",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            type: "scenario",
            question: "A motorcycle has headlamp modulators that rapidly vary the intensity of the headlamp. Is this a violation of flashing light restrictions?",
            options: [
                "Yes, flashing white lights are prohibited",
                "No, modulators don't turn the light off and on",
                "Yes, unless used only during emergencies",
                "No, but only if the motorcycle is under 250cc"
            ],
            correct: 1,
            explanation: "Headlamp modulators are not violations because they vary intensity but don't turn the headlamp off and on as it modulates. They're permitted by Federal Standard 108.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq039",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            type: "scenario",
            question: "A large truck is stopped on a divided highway at night for 12 minutes. Where should the warning devices be placed?",
            options: [
                "100 feet behind, 100 feet ahead, left rear",
                "100 feet behind, 200 feet behind, left rear",
                "200 feet behind, 300 feet behind, left rear",
                "Warning devices are not required on divided highways"
            ],
            correct: 1,
            explanation: "TRC 547.504(c) requires different placement on divided highways: one at left rear, one 100 feet behind, one 200 feet behind (not ahead).",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
        },
        {
            id: "veq040",
            mainCategory: "transportation-code",
            category: "vehicle-equipment",
            difficulty: "advanced",
            type: "scenario",
            question: "A person installs window tint on a vehicle but fails to install the required label. Who commits an offense?",
            options: [
                "The vehicle owner",
                "The vehicle operator",
                "The person in the business of installing tint",
                "Both the installer and the owner"
            ],
            correct: 2,
            explanation: "TRC 547.613(a-1) makes it an offense for a person in the business of installing window tint to fail to install the required label. The owner/operator doesn't commit this specific offense.",
            objective: "Vehicle Equipment Standards",
            module: "Module 5"
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
        
        // Add IDs to prevent conflicts only for cards that don't have IDs
        tcoleStudyData.flashcards.forEach((card, index) => {
            if (!card.id) {
                card.id = 10000 + index; // Start vehicle traffic IDs at 10000
            }
            // Keep existing string IDs (like "po-flash-001") unchanged
        });
        
        studyData.flashcards.push(...tcoleStudyData.flashcards);
        console.log(`✅ Added ${tcoleStudyData.flashcards.length} flashcards from tcoleStudyData (includes Property & Trespassing Offenses)`);
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
    
    // Add Property & Trespassing Offenses category
    studyData.categories['property-offenses'] = {
        name: "Property & Trespassing Offenses",
        description: "Penal Code Chapters 28, 30, and 42 - Property crimes, arson, criminal mischief, graffiti, and animal cruelty",
        icon: "fas fa-home",
        color: "#6f42c1"
    };
    
    // Add Property & Trespassing Offenses subcategories
    studyData.categories['criminal-types'] = {
        name: "Criminal Types",
        description: "Professional vs. Semi-Professional vs. Street Thieves",
        icon: "fas fa-users",
        color: "#17a2b8"
    };
    studyData.categories['property-definitions'] = {
        name: "Property Definitions",
        description: "PC 28.01 - Property, Building, Habitation, Vehicle definitions",
        icon: "fas fa-building",
        color: "#28a745"
    };
    studyData.categories['pecuniary-loss'] = {
        name: "Pecuniary Loss",
        description: "PC 28.06 - Calculation of financial loss for offenses",
        icon: "fas fa-dollar-sign",
        color: "#ffc107"
    };
    studyData.categories['offense-levels'] = {
        name: "Offense Levels",
        description: "Value ladder for property crime classifications",
        icon: "fas fa-layer-group",
        color: "#6c757d"
    };
    studyData.categories['criminal-mischief'] = {
        name: "Criminal Mischief",
        description: "PC 28.03 - Intentional damage to property",
        icon: "fas fa-hammer",
        color: "#dc3545"
    };
    studyData.categories['graffiti'] = {
        name: "Graffiti",
        description: "PC 28.08 - Marking property with paint, markers, or etching",
        icon: "fas fa-spray-can",
        color: "#e83e8c"
    };
    studyData.categories['reckless-damage'] = {
        name: "Reckless Damage",
        description: "PC 28.04 - Reckless property damage",
        icon: "fas fa-exclamation-triangle",
        color: "#fd7e14"
    };
    studyData.categories['railroad-property'] = {
        name: "Railroad Property",
        description: "PC 28.07 - Interference with railroad operations",
        icon: "fas fa-train",
        color: "#20c997"
    };
    studyData.categories['arson'] = {
        name: "Arson",
        description: "PC 28.02 - Intentional fires and explosions",
        icon: "fas fa-fire",
        color: "#fd7e14"
    };
    studyData.categories['police-service-animals'] = {
        name: "Police Service Animals",
        description: "PC 38.151 - Interference with police animals",
        icon: "fas fa-dog",
        color: "#007bff"
    };
    studyData.categories['property-scenarios'] = {
        name: "Property Scenarios",
        description: "Real-world applications and case studies",
        icon: "fas fa-clipboard-list",
        color: "#6610f2"
    };
    
    studyData.categories['vehicle-traffic-stops'] = {
        name: "Vehicle & Traffic Stops",
        description: "Arrest, Search, & Seizure for Vehicles & Traffic Stops",
        icon: "fas fa-car-crash",
        color: "#dc3545"
    };
    
    // Add Transportation Code Module 5 categories
    studyData.categories['transportation-code'] = {
        name: "Transportation Code",
        description: "TRC - Vehicle operations, traffic laws, licensing, and equipment requirements",
        icon: "fas fa-car",
        color: "#2a5298"
    };
    studyData.categories['vehicle-equipment'] = {
        name: "Vehicle Equipment",
        description: "TRC 547 - Lighting, brakes, safety equipment, and inspection requirements",
        icon: "fas fa-cog",
        color: "#17a2b8"
    };
    studyData.categories['emergency-vehicles'] = {
        name: "Emergency Vehicles",
        description: "TRC 546 & 547.702 - Authorized emergency vehicle equipment and operations",
        icon: "fas fa-ambulance",
        color: "#dc3545"
    };
    studyData.categories['specialized-vehicles'] = {
        name: "Specialized Vehicles",
        description: "TRC 547.701-547.801 - School buses, motorcycles, and special equipment",
        icon: "fas fa-bus",
        color: "#ffc107"
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
    
    // Debug: Check property flashcards after merge
    const propertyFlashcardsAfterMerge = studyData.flashcards.filter(card => 
        card.mainCategory === 'property-offenses' || 
        (card.id && card.id.toString().includes('po-flash'))
    );
    console.log(`📊 Property flashcards after merge: ${propertyFlashcardsAfterMerge.length}`);
    if (propertyFlashcardsAfterMerge.length > 0) {
        console.log('📊 Sample property flashcard after merge:', propertyFlashcardsAfterMerge[0]);
    }
    
    // Notify that merge is complete
    window.vehicleTrafficStopsLoaded = true;
} else {
    console.warn('⚠️ Could not merge vehicle traffic stops content - studyData or tcoleStudyData not available');
    console.log('studyData available:', typeof studyData !== 'undefined');
    console.log('tcoleStudyData available:', typeof tcoleStudyData !== 'undefined');
}

// End of enhanced-data-structure.js
// All practice questions have been integrated into the main tcoleStudyData structure above
