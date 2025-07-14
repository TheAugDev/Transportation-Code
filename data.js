// Texas Transportation Code Study Data - Module 1
// Based on BPOC Chapter 22 Learning Objectives and Module Review Questions
// Module 1: TRC Chapters 472, 502, 503, 504 - Warning Devices, Registration, Dealer Plates, License Plates

const studyData = {
    flashcards: [
        // MODULE 1 FLASHCARDS - TRC Chapters 472, 502, 503, 504
        
        // PENAL CODE DEFINITIONS - Foundation for TRC Enforcement
        {
            id: 1,
            category: "penal-code",
            difficulty: "basic",
            question: "Define 'Bodily Injury' per PC 1.07(8).",
            answer: "Physical pain, illness, or any impairment of physical condition. Used to enhance TRC offenses (e.g., TRC 545.157 enhanced from Class C to Class B if bodily injury results).",
            objective: "22.2",
            module: "1"
        },
        {
            id: 2,
            category: "penal-code",
            difficulty: "basic",
            question: "Define 'Serious Bodily Injury' per PC 1.07(46).",
            answer: "Bodily injury that creates a substantial risk of death or causes death, serious permanent disfigurement, or protracted loss or impairment of function of any bodily member or organ. Used to enhance TRC penalties.",
            objective: "22.2",
            module: "1"
        },
        {
            id: 3,
            category: "penal-code",
            difficulty: "basic",
            question: "Define 'Public Place' per PC 1.07(40).",
            answer: "Any place to which the public or substantial group has access, including streets, highways, common areas of schools, hospitals, apartment houses, office buildings, transport facilities, and shops. Required element for DWI, DUI-Minor, Reckless Driving.",
            objective: "22.2",
            module: "1"
        },
        {
            id: 4,
            category: "penal-code",
            difficulty: "intermediate",
            question: "What is the culpable mental state for Manslaughter per PC 19.04?",
            answer: "Recklessly - when a person is aware of but consciously disregards a substantial and unjustifiable risk. The risk must constitute a gross deviation from ordinary standards of care.",
            objective: "22.30",
            module: "1"
        },
        {
            id: 5,
            category: "penal-code",
            difficulty: "intermediate",
            question: "What is the culpable mental state for Criminally Negligent Homicide per PC 19.05?",
            answer: "Criminal Negligence - when a person ought to be aware of a substantial and unjustifiable risk. The failure to perceive it must constitute a gross deviation from ordinary standards of care.",
            objective: "22.30",
            module: "1"
        },
        {
            id: 6,
            category: "penal-code",
            difficulty: "basic",
            question: "What elements are required for Intoxication Assault per PC 49.07?",
            answer: "1) Operating motor vehicle in public place, 2) Person was intoxicated, 3) Intoxication resulted in serious bodily injury. This is a 3rd degree felony.",
            objective: "22.30",
            module: "1"
        },
        {
            id: 7,
            category: "penal-code",
            difficulty: "basic",
            question: "What elements are required for Intoxication Manslaughter per PC 49.08?",
            answer: "1) Operating motor vehicle in public place, 2) Person was intoxicated, 3) Intoxication resulted in death of another person. This is a 2nd degree felony.",
            objective: "22.30",
            module: "1"
        },

        // WARNING DEVICES - TRC 472
        {
            id: 8,
            category: "warning-devices",
            difficulty: "basic",
            question: "What is the offense for tampering with warning devices per TRC 472.021?",
            answer: "Tampering with Warning Device - Class C Misdemeanor. Fine between $25-$1,000 and up to 2 years county jail. Device must warn of construction, repair, or detour and be placed by state, political subdivision, contractor, or public utility.",
            objective: "22.27",
            module: "1"
        },
        {
            id: 9,
            category: "warning-devices",
            difficulty: "basic",
            question: "What is the enhanced penalty for disregarding a barricade placed because water is over the roadway?",
            answer: "Class B Misdemeanor. Per TRC 472.022, this violation is enhanced from a Class C to Class B Misdemeanor.",
            objective: "22.27",
            module: "1"
        },
        {
            id: 10,
            category: "warning-devices",
            difficulty: "basic",
            question: "Define 'Barricade' per TRC 472.022(e)(3).",
            answer: "An obstruction placed on/across a road by the department, political subdivision, or contractor to prevent passage of motor vehicles during construction, repair, or dangerous conditions.",
            objective: "22.27",
            module: "1"
        },
        {
            id: 11,
            category: "warning-devices",
            difficulty: "basic",
            question: "Define 'Warning Sign' per TRC 472.022(e)(1).",
            answer: "A signal, marking, or device placed on a barricade or roadway during construction, repair, or dangerous conditions. Includes a flagger deployed to direct traffic.",
            objective: "22.27",
            module: "1"
        },
        {
            id: 12,
            category: "warning-devices",
            difficulty: "intermediate",
            question: "Can a motorist be cited for disregarding a warning sign if they fail to stop for a flagger?",
            answer: "Yes. A flagger meets the definition of a warning sign in TRC 472.022. Use 'Disregard Warning Sign', not 'Disregard Stop Sign' for flagger violations.",
            objective: "22.27",
            module: "1"
        },
        {
            id: 13,
            category: "warning-devices",
            difficulty: "intermediate",
            question: "What are the penalties for disregarding warning signs in construction zones?",
            answer: "Normal: Class C Misdemeanor (up to $200). With workers present: Class C Misdemeanor with doubled fine (up to $400). No deferred adjudication or defensive driving available.",
            objective: "22.27",
            module: "1"
        },

        // REGISTRATION - TRC 502
        {
            id: 14,
            category: "registration",
            difficulty: "basic",
            question: "How many days does a new Texas resident have to register their vehicle?",
            answer: "30 days. Per TRC 502.040, new state residents must register their vehicles within 30 days of establishing residency.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 15,
            category: "registration",
            difficulty: "basic",
            question: "What is the grace period for expired vehicle registration?",
            answer: "5 working days. Per TRC 502.407, there is a 5 working day grace period after the expiration date before it becomes a violation.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 16,
            category: "registration",
            difficulty: "basic",
            question: "Define 'Commercial Motor Vehicle' for registration purposes per TRC 502.001(7).",
            answer: "A motor vehicle designed or used primarily to transport property. This definition is specific to Chapter 502 registration requirements.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 17,
            category: "registration",
            difficulty: "basic",
            question: "Define 'Farm Trailer' per TRC 502.001(15).",
            answer: "A trailer designed and used primarily as a farm vehicle. Subject to specific registration requirements based on gross weight.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 18,
            category: "registration",
            difficulty: "basic",
            question: "Define 'Implement of Husbandry' per TRC 502.001(20).",
            answer: "A vehicle designed for farm use including: farm implements/tools for tilling soil, vehicles that transport/spread fertilizer or agricultural chemicals, or motor vehicles designed to deliver feed to livestock.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 19,
            category: "registration",
            difficulty: "basic",
            question: "Define 'Power Sweeper' per TRC 502.001(33).",
            answer: "An implement designed for removal of debris, dirt, gravel, litter, or sand from concrete surfaces by broom, vacuum, or regenerative air system. Cannot be registered per TRC 502.143.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 20,
            category: "registration",
            difficulty: "basic",
            question: "What is an 'Autocycle' per TRC 502.005?",
            answer: "A vehicle with: not more than 3 wheels on ground, seatbelts and steering mechanism, seating that doesn't require straddling, manufactured to comply with federal motorcycle safety requirements.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 21,
            category: "registration",
            difficulty: "intermediate",
            question: "How are autocycles treated for various purposes?",
            answer: "Driver license: like cars. Registration: like motorcycles (one plate). Title: like motorcycles. Passenger restrictions: like motorcycles. Helmet: like motorcycles unless enclosed. Seatbelt: not required (not included in passenger vehicle definition).",
            objective: "22.25",
            module: "1"
        },
        {
            id: 22,
            category: "registration",
            difficulty: "basic",
            question: "What must be shown to register a motor vehicle per TRC 502.046?",
            answer: "Evidence of financial responsibility (usually insurance). This is required for motor vehicles but not for trailers and semi-trailers.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 23,
            category: "registration",
            difficulty: "basic",
            question: "Where must the registration insignia be displayed per TRC 502.059?",
            answer: "Lower left corner of windshield. If no windshield, attached to license plate. Motorcycles, trailers, and machinery license plates display insignia on the rear license plate.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 24,
            category: "registration",
            difficulty: "intermediate",
            question: "What weight threshold exempts farm trailers from license plate requirements?",
            answer: "Less than 4,000 pounds gross weight. Per TRC 502.146, farm trailers under 4,000 pounds are exempt from displaying license plates.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 25,
            category: "registration",
            difficulty: "intermediate",
            question: "What are the weight requirements for farm trailer license plates?",
            answer: "Under 4,000 lbs: no plate required. 4,000-34,000 lbs: Farm Trailer plate required (not full registration). Over 34,000 lbs: full registration required.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 26,
            category: "registration",
            difficulty: "basic",
            question: "What is a 72/144 Hour Permit per TRC 502.094?",
            answer: "Temporary commercial motor vehicle operation permit. Requires insurance and state inspection. No permit if previously apprehended for registration violation. No grace period after expiration.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 27,
            category: "registration",
            difficulty: "basic",
            question: "What is a One-Trip Permit per TRC 502.095(c)?",
            answer: "Point-to-point permit valid max 15 days, costs $5. Vehicle transport only (no passengers/property). Trip must begin or end in Texas. No inspection required.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 28,
            category: "registration",
            difficulty: "basic",
            question: "What is a 30-Day Permit per TRC 502.095(d)?",
            answer: "For vehicles 10,000 lbs or less (or unladen if heavier), costs $25. Inspection required. Proof of financial responsibility required.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 29,
            category: "registration",
            difficulty: "intermediate",
            question: "Which vehicles cannot be registered by individuals per TRC 502.140?",
            answer: "Off-highway vehicles (ATVs, ROVs, sand rails, utility vehicles). State, county, or municipality may register these for highway use.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 30,
            category: "registration",
            difficulty: "intermediate",
            question: "Which vehicles are not issued registration per TRC 502.142-502.143?",
            answer: "Manufactured housing, power sweepers, motorized mobility devices (electric wheelchairs), electric personal assistive mobility devices (Segways), electric bicycles.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 31,
            category: "registration",
            difficulty: "intermediate",
            question: "When can unregistered vehicles cross public highways per TRC 502.144?",
            answer: "Property owner may cross road in unregistered vehicle if they own property on both sides of the road. Limited to crossing between their properties only.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 32,
            category: "registration",
            difficulty: "basic",
            question: "How long can non-residents operate with out-of-state registration per TRC 502.145?",
            answer: "While visiting Texas with current/valid home state registration. Reciprocity ends 30 days after becoming Texas resident.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 33,
            category: "registration",
            difficulty: "intermediate",
            question: "What are the restrictions on farm truck license plates per TRC 502.433?",
            answer: "Cannot be used for gainful employment outside farming/ranching. Can be used for: church/school, medical visits, home/family necessities, equine activities/livestock shows. 50% of regular registration fee.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 34,
            category: "registration",
            difficulty: "intermediate",
            question: "What is the offense for farm trailer license violations per TRC 502.146(f)?",
            answer: "If farm trailer operates outside authorized parameters, vehicle is considered unregistered. Enforcement action: Operate Unregistered Motor Vehicle, Trailer, or Semitrailer.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 35,
            category: "registration",
            difficulty: "basic",
            question: "What is a Temporary Transit Permit per TRC 502.492?",
            answer: "5-day permit for vehicle purchased when previous owner removes plates. Available online, only one permit per vehicle, receipt must be carried, no display requirements.",
            objective: "22.25",
            module: "1"
        },

        // DEALER PLATES - TRC 503
        {
            id: 36,
            category: "dealer-plates",
            difficulty: "basic",
            question: "Where must a metal dealer license plate be displayed per TRC 503.061?",
            answer: "On the rear of the vehicle. Per TRC 503.061, metal dealer plates must be displayed on the rear.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 37,
            category: "dealer-plates",
            difficulty: "intermediate",
            question: "What are the restrictions on metal dealer plates per TRC 503.061 and 503.068?",
            answer: "Vehicle must be type dealer is licensed to sell, cannot be used as service vehicle, cannot be commercial vehicle carrying load, must have valid safety inspection, copy of receipt should be carried.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 38,
            category: "dealer-plates",
            difficulty: "basic",
            question: "What are the authorized uses for dealer temporary tags per TRC 503.062?",
            answer: "Vehicle demonstration to prospective buyer, transit dealer-to-dealer/auction/repair, road test, charitable organization use, loaner while customer vehicle being repaired. No personal use.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 39,
            category: "dealer-plates",
            difficulty: "basic",
            question: "What is the maximum validity period for a buyer's temporary tag?",
            answer: "60 days. Per TRC 503.063, buyer temporary tags are valid for a maximum of 60 days.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 40,
            category: "dealer-plates",
            difficulty: "intermediate",
            question: "Can a dealership issue a second buyer's temporary tag for the same vehicle?",
            answer: "No. Per TRC 503.063, only one buyer temporary tag may be issued per vehicle transaction.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 41,
            category: "dealer-plates",
            difficulty: "basic",
            question: "Where must dealer and buyer temporary tags be displayed?",
            answer: "In the license plate display area at the rear of vehicle, so entire tag is visible and legible at all times, including when operating. Per DMV Administrative Code Rule 215.151(a).",
            objective: "22.25",
            module: "1"
        },
        {
            id: 42,
            category: "dealer-plates",
            difficulty: "intermediate",
            question: "What inspection requirements apply to dealer temporary tags?",
            answer: "Dealer temporary tags do not require state inspection. Buyer temporary tags require valid state inspection (within 180 days of tag issuance).",
            objective: "22.25",
            module: "1"
        },
        {
            id: 43,
            category: "dealer-plates",
            difficulty: "intermediate",
            question: "What are the penalties for dealer plate violations per TRC 503.094?",
            answer: "Fine $50-$5,000, can be tripled if willful/conscious indifference. Unauthorized production: State Jail Felony. Unauthorized operation: Class C. Unauthorized purchase: Class C. Unauthorized sale: Class A.",
            objective: "22.25",
            module: "1"
        },

        // LICENSE PLATES - TRC 504
        {
            id: 44,
            category: "license-plates",
            difficulty: "basic",
            question: "Can Texas license plates be displayed in the front windshield if visible and readable?",
            answer: "No. Per TRC 504.943, license plates must be securely fastened to the vehicle, not displayed in windows.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 45,
            category: "license-plates",
            difficulty: "basic",
            question: "Can a trailer display its license plate vertically if visible from the rear?",
            answer: "No. Per TRC 504.943, license plates must be displayed horizontally regardless of visibility.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 46,
            category: "license-plates",
            difficulty: "basic",
            question: "What are the display requirements for vehicles issued two license plates per TRC 504.943?",
            answer: "Clearly visible, readable, legible, one at exterior front and one at exterior rear, upright horizontal position, not less than 12 inches from ground.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 47,
            category: "license-plates",
            difficulty: "basic",
            question: "What are the display requirements for vehicles issued one license plate per TRC 504.943?",
            answer: "As close as practical to exterior rear, not less than 12 inches from ground. No requirement for horizontal position (motorcycles, trailers can display vertically).",
            objective: "22.25",
            module: "1"
        },
        {
            id: 48,
            category: "license-plates",
            difficulty: "intermediate",
            question: "Is it legal to purchase license plates from a non-DMV vendor if they display correct information?",
            answer: "No. Per TRC 504.945, only DMV-issued license plates are legal for display on vehicles.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 49,
            category: "license-plates",
            difficulty: "basic",
            question: "What is the offense for operating with wrong license plate per TRC 504.944?",
            answer: "Violation if vehicle has license plate or registration insignia attached that is issued for a different vehicle.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 50,
            category: "license-plates",
            difficulty: "intermediate",
            question: "What are the different violations under TRC 504.945?",
            answer: "Display Wrong License Plate (different vehicle/registration period), Display Fictitious License Plate (Class B), Obscured License Plate, Unauthorized Illumination/Sticker, Display Unauthorized Coating/Covering.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 51,
            category: "license-plates",
            difficulty: "basic",
            question: "What items do NOT constitute license plate violations per TRC 504.945(c)?",
            answer: "Trailer hitch, tollway transponder, wheelchair lift/carrier, trailer being towed, bicycle/motorcycle rack - when attached in normal/customary manner.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 52,
            category: "license-plates",
            difficulty: "intermediate",
            question: "What is a deceptively similar license plate per TRC 504.946?",
            answer: "License plate not issued by DMV but reasonable person would presume it was. Class C Misdemeanor, Class B with previous convictions, 3rd Degree Felony for manufacturing/selling.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 53,
            category: "license-plates",
            difficulty: "basic",
            question: "What are the qualifications for Antique Vehicle license plates per TRC 504.502/504.941?",
            answer: "At least 25 years old, collector's item, used exclusively for exhibitions/club activities/parades/public interest functions, not regular transportation, no advertising. Only one plate required (rear).",
            objective: "22.25",
            module: "1"
        },
        {
            id: 54,
            category: "license-plates",
            difficulty: "basic",
            question: "What are the exemptions for Antique Vehicle license plates?",            answer: "Exempt from insurance requirements (TRC 601.052) and annual inspection (TRC 548.052). Defense to prosecution if driven to/from maintenance location.",
            objective: "22.25",
            module: "1"
        },

        // ADVANCED DIFFICULTY QUESTIONS - Complex legal scenarios
        {
            id: 201,
            category: "penal-code",
            difficulty: "advanced",
            question: "In a DWI case, how does PC 1.07 definition of 'Public Place' interact with TRC enforcement when the defendant claims they were on private property?",
            answer: "The prosecution must prove the location meets PC 1.07(40) definition: 'any place to which the public or a substantial group has access.' This includes areas like shopping mall parking lots, even if privately owned, if they allow public access. Officer must establish public access, not just physical presence on property.",
            objective: "22.2, 22.30",
            module: "1"
        },
        {
            id: 202,
            category: "warning-devices",
            difficulty: "advanced",
            question: "An officer observes a driver bypass a TRC 472.022 barricade in a work zone where water covers the roadway. The driver's actions cause serious bodily injury to a worker. What charges can be filed?",
            answer: "1) TRC 472.022 Disregarding Barricade (Class B Misdemeanor - enhanced due to water), 2) Possibly PC 19.04 Manslaughter if death occurred (2nd degree felony), 3) PC 22.02 Aggravated Assault if serious bodily injury with deadly weapon (vehicle), 4) Enhanced TRC violations due to bodily injury per PC 1.07(8).",
            objective: "22.27, 22.30",
            module: "1"
        },
        {
            id: 203,
            category: "registration",
            difficulty: "advanced",
            question: "A vehicle displays a TRC 503 dealer temporary tag that appears valid but upon investigation, the dealer's license was suspended 30 days ago. What violations exist and what elements must be proven?",
            answer: "1) TRC 503.067 Operating with Invalid Temporary Tag, 2) Possibly TRC 503.061 Fraudulent Temporary Tag if intentional, 3) TRC 502.402 Operated Unregistered Motor Vehicle. Must prove: tag displayed, dealer license status, vehicle operation on public highway, and knowledge/intent for fraud charges.",
            objective: "22.25, 22.24",
            module: "1"
        },

        // MODULE 2 FLASHCARDS - TRC Chapters 521 & 522 - Driver's Licenses & Commercial Driver's Licenses
        
        // CHAPTER 521 - DRIVER'S LICENSES AND CERTIFICATES
        {
            id: 204,
            category: "licensing",
            difficulty: "basic",
            question: "Define 'Driver License' per TRC 521.001(3).",
            answer: "An authorization issued by the department for the operation of a motor vehicle. Important: A driver license is more than just a physical piece of plastic - it refers to a person's authorization to drive, not just the physical card.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 205,
            category: "licensing",
            difficulty: "basic",
            question: "Define 'License' per TRC 521.001(6).",
            answer: "An authorization to operate a motor vehicle that is issued under or granted by the laws of this state. Includes: (A) driver's license, (B) privilege of a person to operate a motor vehicle regardless of whether the person holds a driver's license, and (C) nonresident's operating privilege.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 206,
            category: "licensing",
            difficulty: "basic",
            question: "What is the basic license requirement per TRC 521.021?",
            answer: "A person, other than a person exempted, may not operate a motor vehicle on a highway in Texas unless they hold a driver's license. Word Association: Motor Vehicle on a highway → License Required",
            objective: "22.7",
            module: "2"
        },
        {
            id: 207,
            category: "licensing",
            difficulty: "intermediate",
            question: "Who is exempt from license requirements per TRC 521.027?",
            answer: "1) Military personnel operating military vehicles in scope of military service, 2) Person operating road machine, farm tractor, or implement of husbandry (not CMV), 3) Non-resident active military licensed in another state/Canada, 4) Spouse/dependent of #3 licensed in home state.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 208,
            category: "licensing",
            difficulty: "intermediate",
            question: "What are the display requirements and penalties per TRC 521.025?",
            answer: "Must hold correct class and display license on demand of magistrate, court officer, or peace officer. Penalties: Fail to Display Driver License, Improper Driver License for Type of Vehicle. Enhanced for subsequent convictions: 2nd offense increases fine, 3rd+ is Class B Misdemeanor.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 209,
            category: "licensing",
            difficulty: "basic",
            question: "How long do new residents have to get a Texas license per TRC 521.029?",
            answer: "New residents have 90 days to obtain a Texas license if they are 16+ years old and possess a valid license from previous state. Word Association: New Resident → Driver License → 16+ yrs and 90 days",
            objective: "22.7",
            module: "2"
        },
        {
            id: 210,
            category: "licensing",
            difficulty: "basic",
            question: "What is the notification requirement for address/name changes per TRC 521.054?",
            answer: "Person must notify Department within 30 days of: 1) Moving to new address, 2) Changing name. Also applies to judges with alternate addresses for security - must report correct address within 30 days if cease being judge. Word Association: New Name/Address → Driver License → 30 days",
            objective: "22.7",
            module: "2"
        },

        // LICENSE CLASSES
        {
            id: 211,
            category: "licensing",
            difficulty: "intermediate",
            question: "What determines class of license per TRC 521.081-521.084?",
            answer: "Gross Vehicle Weight Rating (GVWR) or Gross Combination Weight Rating (GCWR) set by manufacturer on VIN sticker. Do NOT use registered weight or actual weight. Key for enforcement of elevated class requirements for large vehicles exempt from CDL.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 212,
            category: "licensing",
            difficulty: "intermediate",
            question: "What vehicles require Class A license per TRC 521.081?",
            answer: "Combination of vehicles with GCWR 26,001+ lbs AND towed vehicle(s) GVWR exceeds 10,000 lbs. Word Association: Class A License → Combination over 26,000 AND Towed Unit over 10,000. Must have ALL THREE: combination, trailer >10K, total >26K.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 213,
            category: "licensing",
            difficulty: "intermediate",
            question: "What vehicles require Class B license per TRC 521.082?",
            answer: "1) Single vehicle GVWR 26,001+ lbs, 2) Vehicle GVWR 26,001+ towing vehicle ≤10,000 GVWR or farm trailer ≤20,000 GVWR, 3) Bus with seating capacity of 24+ passengers including driver.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 214,
            category: "licensing",
            difficulty: "basic",
            question: "What vehicles can be operated with Class C license per TRC 521.083?",
            answer: "1) Single vehicle/combination NOT in Class A/B, 2) Vehicle GVWR <26,001 towing trailer ≤10,000 GVWR, 3) Vehicle GVWR <26,001 towing farm trailer ≤20,000 GVWR, 4) Vehicle transporting ≤23 passengers including driver.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 215,
            category: "licensing",
            difficulty: "basic",
            question: "What is the Class of License 'Rules to Live By' for single units?",
            answer: "Class A is NEVER required for single units. GVWR 26,001+ = Class B. Bus 24+ capacity = Class B. Everything else = Class C.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 216,
            category: "licensing",
            difficulty: "intermediate",
            question: "What is the Class of License 'Rules to Live By' for combinations?",
            answer: "Start with trailer: If trailer ≤10,000 GVWR (or farm trailer ≤20,000), pretend trailer doesn't exist - treat like power unit alone. For Class A: MUST be combination, trailer >10K (20K farm), combination >26K.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 217,
            category: "licensing",
            difficulty: "basic",
            question: "What vehicles can elevated class license holders operate per TRC 521.085?",
            answer: "Higher class license holders can drive vehicles in lesser classes EXCEPT motorcycles - always need Class M for motorcycles. Exception: Autocycles and enclosed 3-wheeled vehicles with steering wheel, seat belts, windshield can be operated without Class M.",
            objective: "22.7",
            module: "2"
        },

        // PERSONAL ID AND NEW RESIDENTS
        {
            id: 218,
            category: "licensing",
            difficulty: "basic",
            question: "What is required for new residents before getting license per TRC 521.144?",
            answer: "Must show vehicles already registered in Texas OR sign affidavit that they don't own motor vehicle required to be registered. Remember: new resident has 30 days to register vehicles, 90 days to obtain Texas license.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 219,
            category: "licensing",
            difficulty: "basic",
            question: "What is the ID card surrender requirement per TRC 521.183?",
            answer: "If person with ID card requests driver's license, must surrender ID. If person with driver's license requests ID card, must surrender license. NOT a violation to possess both - this is Department procedural guidance only.",
            objective: "22.7",
            module: "2"
        },

        // LICENSE ELIGIBILITY AND AGE REQUIREMENTS
        {
            id: 220,
            category: "licensing",
            difficulty: "basic",
            question: "What is the minimum age for Texas driver's license per TRC 521.201?",
            answer: "15 years of age is minimum age to obtain any Texas driver's license. Word Association: Minimum Age → Texas Driver License → 15 YOA",
            objective: "22.7",
            module: "2"
        },
        {
            id: 221,
            category: "licensing",
            difficulty: "intermediate",
            question: "What are the requirements for learner license per TRC 521.222?",
            answer: "Ages 15-17 only. Must: complete classroom driver's education, be enrolled in school or graduated, pass written exam. Requires licensed operator 21+ with 1+ year experience in front seat, awake and alert. Violation if supervisor sleeps/intoxicated/prevents proper supervision.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 222,
            category: "licensing",
            difficulty: "intermediate",
            question: "What qualifies for hardship license per TRC 521.223?",
            answer: "Must be 15+ and one of: 1) unusual economic hardship for family, 2) necessary due to family illness, 3) necessary for vocational education program. Must pass driver's education and examinations. Earliest age for any Texas driver's license.",
            objective: "22.7",
            module: "2"
        },

        // OCCUPATIONAL LICENSES
        {
            id: 223,
            category: "licensing",
            difficulty: "intermediate",
            question: "Define 'Essential Need' for occupational license per TRC 521.241(1).",
            answer: "Need for motor vehicle operation: A) performance of occupation/trade or transportation to/from work, B) pursuit of occupation/trade, C) transportation to/from educational facility, D) performance of essential household duties.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 224,
            category: "licensing",
            difficulty: "advanced",
            question: "What is the occupational license process per TRC 521.241-521.250?",
            answer: "1) Petition (sets forth essential need), 2) Hearing (judge decides if essential need exists), 3) Court Order (grants license, sets restrictions), 4) 601 compliance (SR-22 insurance proof), 5) Department issues occupational license.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 225,
            category: "licensing",
            difficulty: "intermediate",
            question: "What restrictions can be placed on occupational license per TRC 521.248?",
            answer: "1) Time of day/days of week, 2) Reasons for driving, 3) Areas/routes permitted, 4) Ignition interlock device, 5) Periodic drug/alcohol testing. If ignition interlock required, should not have other time/location restrictions.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 226,
            category: "licensing",
            difficulty: "intermediate",
            question: "What are the occupational license possession requirements per TRC 521.250/521.253?",
            answer: "Must carry certified copy of court order while driving and show to peace officer on request. Violations (Class B Misdemeanor): 1) Drive without certified court order, 2) Violate specific restriction. Occupational license revoked upon conviction.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 227,
            category: "licensing",
            difficulty: "basic",
            question: "How long is the court order valid for occupational license per TRC 521.249?",
            answer: "Court order serves as occupational license for 45 days. After 45 days, driver should have completed process (including SR-22 proof of insurance) to obtain actual occupational license from Department.",
            objective: "22.7",
            module: "2"
        },

        // LICENSE EXPIRATION AND SUSPENSION
        {
            id: 228,
            category: "licensing",
            difficulty: "basic",
            question: "What are the license expiration periods per TRC 521.271?",
            answer: "Normal License: birthday after 8 years. Provisional/Learner: 18th birthday. Occupational: 1 year after court order. Correctional facility: birthday after 1 year. Non-citizen: birthday after 6 years or when lawful presence ends.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 229,
            category: "licensing",
            difficulty: "basic",
            question: "What is the expiration for drivers 85+ per TRC 521.2711?",
            answer: "If license holder is 85+ years old, license expires on second birthday after license application date (2 years instead of 8 years).",
            objective: "22.7",
            module: "2"
        },
        {
            id: 230,
            category: "licensing",
            difficulty: "intermediate",
            question: "Define habitual violator per TRC 521.292(3).",
            answer: "Person with 4+ convictions in 12 months OR 7+ convictions in 24 months (excluding weight, width, length, load extension, permits, or seatbelt violations). Results in automatic 90-day suspension. Word Association: Habitual Violator → 4 in 12 months, 7 in 24 months → Automatic Suspension",
            objective: "22.7",
            module: "2"
        },
        {
            id: 231,
            category: "licensing",
            difficulty: "basic",
            question: "What is the penalty for racing per TRC 521.350?",
            answer: "Upon conviction for Racing (545.420): automatic 1-year license suspension + minimum 10 hours community service. Word Association: Racing → one year suspension",
            objective: "22.7",
            module: "2"
        },

        // LICENSE VIOLATIONS
        {
            id: 232,
            category: "licensing",
            difficulty: "intermediate",
            question: "What violations are covered under TRC 521.451 (General Violation)?",
            answer: "All Class A Misdemeanors for TX license OR ID card: 1) display/possess fictitious/altered license/ID, 2) lend license/ID to another, 3) display license/ID not issued to person, 4) possess multiple valid licenses/IDs, 5) provide false information on application.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 233,
            category: "licensing",
            difficulty: "intermediate",
            question: "What is the offense for fictitious license under 21 per TRC 521.453?",
            answer: "Class C Misdemeanor for person under 21 possessing document deceptively similar to license/ID with intent to misrepresent age, unless clearly marked 'NOT A GOVERNMENT DOCUMENT' front and back. Peace officer may confiscate. Applies to TX and out-of-state documents.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 234,
            category: "licensing",
            difficulty: "advanced",
            question: "What are the DWLI penalty levels per TRC 521.457?",
            answer: "Class C: first offense. Class B: previous DWLI conviction OR no insurance OR previous alcohol-related suspension. Class A: invalid license + no insurance + crash causing SBI/death. Can be filed against unlicensed person whose privilege was denied/revoked.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 235,
            category: "licensing",
            difficulty: "basic",
            question: "What is prohibited regarding minors and driving per TRC 521.458?",
            answer: "Parents may not permit/cause minor child (under 18) to drive without license or in violation of Chapter 521. Anyone cannot allow person to drive their vehicle knowing person is unlicensed or violating Chapter 521.",
            objective: "22.7",
            module: "2"
        },

        // CHAPTER 522 - COMMERCIAL DRIVER'S LICENSES
        {
            id: 236,
            category: "commercial-vehicles",
            difficulty: "basic",
            question: "When is a CDL required per TRC 522.003?",
            answer: "Both criteria must be present: 1) Vehicle meets definition of Commercial Motor Vehicle in Chapter 522, AND 2) Person is not exempt from CDL requirements per TRC 522.004.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 237,
            category: "commercial-vehicles",
            difficulty: "intermediate",
            question: "Define Commercial Motor Vehicle per TRC 522.003(5)/49 CFR 383.5.",
            answer: "Motor vehicle used in commerce to transport passengers/property: Group A (combination 26,001+ GCWR with towed unit >10,000 GVWR), Group B (single vehicle 26,001+ GVWR), Group C (16+ passengers OR hazmat any size).",
            objective: "22.7",
            module: "2"
        },
        {
            id: 238,
            category: "commercial-vehicles",
            difficulty: "intermediate",
            question: "Who is exempt from CDL requirements per TRC 522.004?",
            answer: "1) Farm vehicles (broader exemption under covered farm vehicle), 2) Fire/emergency vehicles, 3) Military vehicles (military purposes), 4) RVs, 5) Air carrier vehicles (airport only), 6) Cotton vehicles, 7) Intrastate not in commerce, 8) Covered farm vehicles per 49 CFR 390.5.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 239,
            category: "commercial-vehicles",
            difficulty: "advanced",
            question: "What qualifies as covered farm vehicle per 49 CFR 390.5?",
            answer: "Operated by farm/ranch owner/family/employee, transports agricultural commodities/livestock/machinery/supplies to/from farm/ranch, has farm vehicle plate, not for-hire, not hazmat requiring placards. If ≤26,001 GVWR: anywhere in US. If >26,001: within state or 150 air miles of farm/ranch.",
            objective: "22.7",
            module: "2"
        },

        // MODULE 3 FLASHCARDS - TRC Chapters 541-544 - Definitions, General Provisions, Arrest/Prosecution, Traffic Signs
        
        // CHAPTER 541 - DEFINITIONS
        {
            id: 301,
            category: "definitions",
            difficulty: "basic",
            question: "Define 'Escort Flagger' per TRC 541.001(1).",
            answer: "A person who: (A) has successfully completed a training program in traffic direction as defined by the basic peace officer course curriculum, AND (B) in accordance with a permit issued by DPS, operates an escort flag vehicle or directs traffic using a hand signaling device or automated flagger assistance device.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 302,
            category: "definitions",
            difficulty: "basic",
            question: "Define 'Operator' per TRC 541.001(1-a).",
            answer: "A person who drives or has physical control of a vehicle. This includes someone who is not actively driving but has the ability to control the vehicle (e.g., sitting in driver's seat with keys).",
            objective: "22.2",
            module: "3"
        },
        {
            id: 303,
            category: "definitions",
            difficulty: "basic",
            question: "Define 'Owner' per TRC 541.001(2).",
            answer: "A person who has a property interest in or title to a vehicle, including a person entitled to use and possess a vehicle subject to a security interest. Excludes a lienholder and a lessee whose lease is not intended as security.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 304,
            category: "definitions",
            difficulty: "basic",
            question: "Define 'Pedestrian' per TRC 541.001(3).",
            answer: "A person on foot. Simple but important definition used throughout traffic laws for pedestrian rights and responsibilities.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 305,
            category: "definitions",
            difficulty: "basic",
            question: "Define 'School Crossing Guard' per TRC 541.001(5).",
            answer: "A responsible person who is at least 18 years of age and is designated by a local authority to direct traffic in a school crossing zone for the protection of children going to or leaving a school.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 306,
            category: "definitions",
            difficulty: "basic",
            question: "Define 'Local Authority' per TRC 541.002(3).",
            answer: "County, municipality, or other local entity authorized to enact traffic laws. Also includes a school district designating school crossing guards.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 307,
            category: "definitions",
            difficulty: "basic",
            question: "Define 'Police Officer' per TRC 541.002(4).",
            answer: "Has authority to direct traffic and arrest traffic law violators. Obedience to police officers is required by law (Reference TRC 542.501).",
            objective: "22.2",
            module: "3"
        },
        {
            id: 308,
            category: "definitions",
            difficulty: "intermediate",
            question: "Define 'Metropolitan Area' per TRC 541.101.",
            answer: "An area that contains at least one municipality with a population of at least 100,000 and includes the adjacent municipalities and unincorporated urban districts. Used in TRC 550.022 for freeway collision requirements.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 309,
            category: "definitions",
            difficulty: "intermediate",
            question: "Define 'Business District' per TRC 541.102(1).",
            answer: "Buildings used for business or industrial purposes are located within a 600-foot segment along the highway and within that segment the buildings occupy at least 300 feet of frontage.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 310,
            category: "definitions",
            difficulty: "intermediate",
            question: "Define 'Residence District' per TRC 541.102(2).",
            answer: "At least 300 feet of the highway frontage is primarily improved with residences or buildings used for business purposes and residences.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 311,
            category: "vehicle-definitions",
            difficulty: "basic",
            question: "Define 'Vehicle' per TRC 541.201(23).",
            answer: "A device that can be used to transport or draw persons or property on a highway. Does not include a device used on stationary rails/tracks and does not include manufactured housing.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 312,
            category: "vehicle-definitions",
            difficulty: "basic",
            question: "Define 'Motor Vehicle' per TRC 541.201(11).",
            answer: "A self-propelled vehicle or a vehicle that is propelled by electric power from overhead trolley wires. Does not include an electric bicycle or an electric personal assistive mobility device (Segway).",
            objective: "22.2",
            module: "3"
        },
        {
            id: 313,
            category: "vehicle-definitions",
            difficulty: "basic",
            question: "Define 'Passenger Car' per TRC 541.201(12).",
            answer: "A motor vehicle, other than a motorcycle, used to transport persons and designed to accommodate 10 or fewer passengers, including the operator.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 314,
            category: "vehicle-definitions",
            difficulty: "intermediate",
            question: "Define 'Bus' per TRC 541.201(3) - give both definitions.",
            answer: "Two definitions: (A) a motor vehicle used to transport persons and designed to accommodate more than 10 passengers, including the operator; OR (B) a motor vehicle, other than a taxicab, designed and used to transport persons for compensation.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 315,
            category: "vehicle-definitions",
            difficulty: "intermediate",
            question: "Define 'School Bus' per TRC 541.201(16).",
            answer: "Manufactured in compliance with the federal motor vehicle safety standards for school buses and used to transport students on a route to or from school or on a school-related activity trip.",
            objective: "22.2",
            module: "3"
        },
        
        // CHAPTER 542 - GENERAL PROVISIONS
        {
            id: 316,
            category: "general-provisions",
            difficulty: "advanced",
            question: "When do provisions of Subtitle C apply per TRC 542.001?",
            answer: "Provisions of Subtitle C only apply to vehicles being operated on the highway unless the provision specifically applies to a different place. Key: Highway = publicly maintained way any part of which is open to the public for vehicular travel.",
            objective: "22.6",
            module: "3"
        },
        {
            id: 317,
            category: "general-provisions",
            difficulty: "intermediate",
            question: "List the exceptions to TRC 542.001 - provisions that apply beyond highways.",
            answer: "1) Reckless Driving (545.401), 2) Use of Portable Wireless Device on School Property (545.4252), 3) FSRA - Felony (550.021), 4) FSRA - Misdemeanor (550.022), 5) Duty Upon Striking Unattended Vehicle (550.024), 6) Duty Upon Striking Structure/Fixture/Landscaping (550.025), 7) Fail to Maintain Financial Responsibility (601.191).",
            objective: "22.6",
            module: "3"
        },
        {
            id: 318,
            category: "general-provisions",
            difficulty: "basic",
            question: "Do government vehicles have to follow the TRC per TRC 542.002?",
            answer: "Yes. Government vehicles must abide by the TRC just like other vehicles unless they have a specific exemption. No blanket immunity for government vehicles.",
            objective: "22.6",
            module: "3"
        },
        {
            id: 319,
            category: "general-provisions",
            difficulty: "intermediate",
            question: "What are the requirements for animals and animal-drawn vehicles per TRC 542.003?",
            answer: "People may ride animals or operate animal-drawn vehicles in the roadway, however they must abide by traffic regulations aside from regulations that cannot, by their nature, apply. Include equipment requirements from Chapter 547.",
            objective: "22.6",
            module: "3"
        },
        {
            id: 320,
            category: "general-provisions",
            difficulty: "intermediate",
            question: "Who must obey traffic control devices per TRC 542.501?",
            answer: "The operator of a vehicle or a pedestrian shall comply with an applicable official traffic control device placed or held by: (1) a police officer, (2) an employee of the Texas Department of Transportation, or (3) a school crossing guard.",
            objective: "22.6",
            module: "3"
        },
        
        // CHAPTER 543 - ARREST AND PROSECUTION OF VIOLATORS
        {
            id: 321,
            category: "arrest-prosecution",
            difficulty: "intermediate",
            question: "What is the arrest authority for traffic violations per TRC 543.001?",
            answer: "A peace officer may arrest without warrant a person found committing a violation of this subtitle. This provides specific authority for warrantless arrests for traffic violations.",
            objective: "22.6",
            module: "3"
        },
        {
            id: 322,
            category: "arrest-prosecution",
            difficulty: "advanced",
            question: "When may a peace officer stop and detain a person per TRC 543.002?",
            answer: "A peace officer may stop and detain a person operating a motor vehicle to determine if: (1) the person has a driver's license as required, (2) the person is operating the vehicle in compliance with the restriction on the license, or (3) the motor vehicle is registered as required.",
            objective: "22.6",
            module: "3"
        },
        
        // CHAPTER 544 - TRAFFIC SIGNS, SIGNALS, AND MARKINGS
        {
            id: 323,
            category: "traffic-control",
            difficulty: "basic",
            question: "What authority does TRC 544.001 give to the Texas Transportation Commission?",
            answer: "The Texas Transportation Commission may adopt rules for traffic control devices on the state highway system, including the design, placement, operation, maintenance, and uniformity of the devices.",
            objective: "22.6",
            module: "3"
        },
        {
            id: 324,
            category: "traffic-control",
            difficulty: "intermediate",
            question: "What are the requirements for official traffic control devices per TRC 544.002?",
            answer: "To be official, traffic control devices must: (1) be placed or erected by authority of a public body or official having jurisdiction, (2) conform to the manual and specifications of the department, and (3) be properly positioned as required.",
            objective: "22.6",
            module: "3"
        },
        {
            id: 325,
            category: "traffic-control",
            difficulty: "advanced",
            question: "What is the effect of unofficial traffic control devices per TRC 544.002?",
            answer: "A person may not be prosecuted for violating a traffic control device that does not comply with the requirements for official devices. However, this doesn't prevent prosecution under other applicable laws.",
            objective: "22.6",
            module: "3"
        },

        // ADDITIONAL COMPREHENSIVE MODULE 3 CONTENT
        
        // MORE VEHICLE DEFINITIONS FROM TRC 541
        {
            id: 326,
            category: "vehicle-definitions",
            difficulty: "intermediate",
            question: "Define 'Authorized Emergency Vehicle' per TRC 541.201(1) - list all types.",
            answer: "A. fire department or police vehicle, B. public or private ambulance, C. emergency medical services vehicle, D. municipal department or public service corporation emergency vehicle, E. county-owned emergency management vehicle, F. state emergency management vehicle, G. private vehicle of volunteer firefighter/certified EMS employee responding to emergency, H. industrial emergency response vehicle responding to emergency, I. vehicle of blood bank/tissue bank making emergency deliveries, J. federal law enforcement vehicle, K. private vehicle of county emergency management employee/volunteer in specific counties.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 327,
            category: "vehicle-definitions",
            difficulty: "intermediate",
            question: "Define 'Motorcycle' per TRC 541.201(9) - what are the two distinct features?",
            answer: "A motor vehicle that is: (A) equipped with a saddle or seat for the operator, and (B) designed to travel on not more than three wheels in contact with the ground. Word Association: Saddle + 3 wheels max.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 328,
            category: "vehicle-definitions",
            difficulty: "intermediate",
            question: "Define 'Light Truck' per TRC 541.201(8).",
            answer: "A truck with a manufacturer's rated carrying capacity of 2,000 pounds or less. This affects various regulations and equipment requirements.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 329,
            category: "vehicle-definitions",
            difficulty: "intermediate",
            question: "Define 'Trailer' vs 'Semitrailer' per TRC 541.201.",
            answer: "Trailer (18): Designed to be drawn by a motor vehicle and constructed so that NO part of the vehicle's weight and load rests on the motor vehicle. Semitrailer (17): Designed to be drawn and constructed so that PART of the weight and load rests on or is carried by another vehicle.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 330,
            category: "vehicle-definitions",
            difficulty: "advanced",
            question: "Define 'Implement of Husbandry' per TRC 541.201(7).",
            answer: "A vehicle that is designed and adapted for use as a farm implement, machinery, or tool for tilling the soil. Important for exemptions from various TRC requirements.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 331,
            category: "definitions",
            difficulty: "intermediate",
            question: "Define 'Traffic' per TRC 541.301(12).",
            answer: "Pedestrians, ridden or herded animals, and vehicles, streetcars, and other conveyances, either singly or together, while using a highway for purposes of travel. Key: Includes animals and pedestrians.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 332,
            category: "definitions",
            difficulty: "intermediate",
            question: "Define 'Intersection' per TRC 541.301(5).",
            answer: "The area embraced within the prolongation or connection of the lateral curb lines, or if none, the lateral boundary lines of the roadways of two highways that join at any angle, whether or not one highway crosses the other. Does NOT include junction of private drive with highway.",
            objective: "22.2",
            module: "3"
        },

        // COMPREHENSIVE CHAPTER 542 CONTENT
        {
            id: 333,
            category: "general-provisions",
            difficulty: "advanced",
            question: "List all 13 powers of local authorities per TRC 542.202.",
            answer: "1) Regulate traffic by police/devices, 2) Regulate stopping/standing/parking, 3) Regulate processions/assemblages, 4) Regulate/require bicycle registration/licensing, 5) Regulate roller skater use, 6) Regulate speed in public parks, 7) Regulate vehicle turning at intersections, 8) Designate stop/yield intersections, 9) Designate through highways, 10) Designate one-way highways, 11) Designate school crossing guards/zones, 12) Alter speed limits, 13) Adopt other authorized traffic rules.",
            objective: "22.6",
            module: "3"
        },
        {
            id: 334,
            category: "general-provisions",
            difficulty: "basic",
            question: "What is the general offense penalty per TRC 542.401?",
            answer: "Unless otherwise specified, the penalty for a violation of Subtitle C is a fine from $1 to $200. This is the default penalty for most traffic violations.",
            objective: "22.6",
            module: "3"
        },
        {
            id: 335,
            category: "general-provisions",
            difficulty: "intermediate",
            question: "What are the requirements for doubling fines in work zones per TRC 542.404?",
            answer: "Fines may be doubled for Subtitle C offenses committed in construction or maintenance work zones while workers are present. The citation must state on its face that workers were present. Excludes: Chapter 548, Chapter 552, child safety seats (545.412), and seatbelts (545.413).",
            objective: "22.6",
            module: "3"
        },
        {
            id: 336,
            category: "general-provisions",
            difficulty: "advanced",
            question: "What are the enhanced penalties for right-of-way violations per TRC 542.4045?",
            answer: "Right-of-way violations causing bodily injury: fine $500-$2,000. Right-of-way violations causing serious bodily injury: fine $1,000-$4,000. Significantly increased from the general $1-$200 penalty.",
            objective: "22.6",
            module: "3"
        },
        {
            id: 337,
            category: "general-provisions",
            difficulty: "intermediate",
            question: "What is the offense for vehicle owners per TRC 542.302?",
            answer: "A general offense for a vehicle owner allowing someone to drive their vehicle in a manner that violates the law. Holds owners accountable for permitting violations.",
            objective: "22.6",
            module: "3"
        },

        // COMPREHENSIVE CHAPTER 543 CONTENT
        {
            id: 338,
            category: "arrest-prosecution",
            difficulty: "advanced",
            question: "When must a person be immediately taken before a magistrate per TRC 543.002?",
            answer: "Two circumstances: (1) the person is arrested for failure to stop in the event of a collision causing damage to property, or (2) the person demands an immediate appearance or refuses to make a written notice to appear.",
            objective: "22.20",
            module: "3"
        },
        {
            id: 339,
            category: "arrest-prosecution",
            difficulty: "advanced",
            question: "What are the three mandatory written notice offenses per TRC 543.004?",
            answer: "Officers SHALL issue written notice instead of custody arrest for: (1) Speeding (545.351, 545.352), (2) Use of Wireless Communication Device (545.4251), (3) Open Container (PC 49.031). Only applies if violator signs notice. Does not apply to non-NRVC states.",
            objective: "22.20",
            module: "3"
        },
        {
            id: 340,
            category: "arrest-prosecution",
            difficulty: "intermediate",
            question: "What time requirement applies to notice to appear per TRC 543.006?",
            answer: "The notice to appear must give the violator at least 10 days to contact the court. Citations must be written to the proper judge/court with jurisdiction where the offense occurred.",
            objective: "22.20",
            module: "3"
        },
        {
            id: 341,
            category: "arrest-prosecution",
            difficulty: "intermediate",
            question: "What happens if an officer violates TRC 543.003-543.007 per TRC 543.008?",
            answer: "A violation by an officer of these provisions is misconduct in office and the officer is subject to removal from the officer's position. Serious consequences for citation procedure violations.",
            objective: "22.20",
            module: "3"
        },
        {
            id: 342,
            category: "arrest-prosecution",
            difficulty: "intermediate",
            question: "What must be specified on a speeding citation per TRC 543.010?",
            answer: "The citation must specify: (1) the maximum or minimum speed limit applicable, and (2) the speed at which the defendant is alleged to have driven. Both elements are required.",
            objective: "22.20",
            module: "3"
        },

        // COMPREHENSIVE CHAPTER 544 CONTENT
        {
            id: 343,
            category: "traffic-control",
            difficulty: "intermediate",
            question: "What must be ensured before enforcing a traffic control device per TRC 544.004?",
            answer: "Officers should ensure: (1) the device meets the definition of an official traffic control device, (2) the device is regulatory in nature (has specific obligation for compliance), and (3) the device is in proper position and sufficiently legible to an ordinarily observant person.",
            objective: "22.8",
            module: "3"
        },
        {
            id: 344,
            category: "traffic-control",
            difficulty: "intermediate",
            question: "What are the three offenses related to traffic control devices per TRC 544.005-544.006?",
            answer: "544.005: Alter, injure, knock down, or remove official traffic control device or railroad sign/signal. 544.006: Place unauthorized signs that imitate official devices, hide official devices from view, or maintain flashing lights within 1,000 feet of intersection without permit.",
            objective: "22.8",
            module: "3"
        },
        {
            id: 345,
            category: "traffic-control",
            difficulty: "advanced",
            question: "What are the rules for steady red signals per TRC 544.007(d)?",
            answer: "Vehicle must stop at: (1) clearly marked stop line, or (2) before entering crosswalk if no stop line. After stopping, may turn right (or left if both roadways are one-way) after yielding ROW. TXDOT/local authority may prohibit turns with posted signs.",
            objective: "22.8",
            module: "3"
        },
        {
            id: 346,
            category: "traffic-control",
            difficulty: "intermediate",
            question: "What happens when a traffic signal is not working per TRC 544.007(i)?",
            answer: "If a traffic control signal does not display any indication (power loss, malfunction), traffic must treat it as a stop sign. Exceptions: pedestrian hybrid beacons and freeway entrance ramp control signals require no stop.",
            objective: "22.8",
            module: "3"
        },
        {
            id: 347,
            category: "traffic-control",
            difficulty: "intermediate",
            question: "What are the stop requirements for flashing red signals per TRC 544.008?",
            answer: "Stop at one of three places: (1) clearly marked stop line, (2) before entering crosswalk if no stop line, (3) nearest intersecting roadway where driver can see if no stop line or crosswalk. After stopping, proceed per right-of-way rules for stop signs.",
            objective: "22.8",
            module: "3"
        },
        {
            id: 348,
            category: "traffic-control",
            difficulty: "advanced",
            question: "What are the three stop locations for stop signs per TRC 544.010?",
            answer: "(1) At clearly marked stop line, (2) before entering crosswalk if no stop line, (3) at nearest intersecting roadway where driver can see if no stop line or crosswalk. NEVER required to stop 'at the stop sign' - may drive past sign to proper stopping point.",
            objective: "22.8",
            module: "3"
        },
        {
            id: 349,
            category: "traffic-control",
            difficulty: "advanced",
            question: "What are the requirements for 'Left Lane for Passing Only' signs per TRC 544.011?",
            answer: "Signs must be in place to enforce 'Left Lane for Passing Only.' Signs should read exactly 'Left Lane for Passing Only.' TXDOT places these near speed limit signs at regular intervals. Case law (Abney v. State) requires reasonable proximity between sign and violation location.",
            objective: "22.8",
            module: "3"
        },
        {
            id: 350,
            category: "traffic-control",
            difficulty: "advanced",
            question: "What is illegal regarding lane-direction-control signals per TRC 544.009?",
            answer: "It is illegal to travel in or merge into a lane with a red signal displayed in a lane-direction-control signal. Used to warn traffic of lane closures on controlled access highways and contra-flow traffic during congestion.",
            objective: "22.8",
            module: "3"
        },

        // MODULE 3 REVIEW QUESTIONS FROM HANDOUT
        {
            id: 350.1,
            category: "definitions",
            difficulty: "basic",
            question: "True or False: A person 'steering' a vehicle being towed with a tow chain is the operator of that vehicle.",
            answer: "FALSE. Per TRC 541.001(1-a), operator means person who drives or has physical control of vehicle. Person steering vehicle being towed does not have control of movement - the towing vehicle does.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 350.2,
            category: "definitions",
            difficulty: "intermediate",
            question: "Which of the following is not an authorized emergency vehicle: A) Police vehicle on routine patrol, B) Tissue bank vehicle making emergency delivery, C) Volunteer firefighter returning from fire, D) Private ambulance parked while paramedics eat?",
            answer: "A) Police vehicle on routine patrol. Per TRC 541.201, authorized emergency vehicle includes tissue bank emergency deliveries, volunteer firefighter vehicles responding/returning from emergency, and ambulances. Routine patrol is not emergency use.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 350.3,
            category: "definitions",
            difficulty: "basic",
            question: "True or False: A physician responding to an emergency in his personal vehicle would be considered to be operating an authorized emergency vehicle.",
            answer: "FALSE. Per TRC 541.201, physician's personal vehicle not listed as authorized emergency vehicle. Only specific vehicle types listed qualify for emergency vehicle privileges.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 350.4,
            category: "definitions",
            difficulty: "basic",
            question: "A bus is a motor vehicle designed to transport how many people?",
            answer: "More than 15 passengers, including the driver. Per TRC 541.201(3), bus means motor vehicle designed to transport more than 15 passengers including driver.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 350.5,
            category: "definitions",
            difficulty: "basic",
            question: "True or False: When a charter bus company is hired by a school to take children on field trip, that bus is considered to be a school bus.",
            answer: "FALSE. Per TRC 541.201(20), school bus means motor vehicle designed to transport students to/from school or school-related activity. Charter bus hired by school doesn't meet definition - it's operated by charter company, not school.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 350.6,
            category: "definitions",
            difficulty: "basic",
            question: "A 'light truck' means a truck with a manufacturer's rated carrying capacity of _____ pounds or less.",
            answer: "2,000 pounds or less. Per TRC 541.201(11), light truck means truck with manufacturer's rated carrying capacity of 2,000 pounds or less.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 350.7,
            category: "definitions",
            difficulty: "basic",
            question: "What are the two distinct features of a motorcycle per TRC 541.201(14)?",
            answer: "1) Equipped with a saddle for the use of the rider, 2) Not more than three wheels in contact with the ground. Per TRC 541.201(14), motorcycle means motor vehicle designed to propel itself with these features.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 350.8,
            category: "definitions",
            difficulty: "basic",
            question: "True or False: The junction of a private drive with a highway does not constitute an intersection.",
            answer: "TRUE. Per TRC 541.302(6), intersection means area embraced within prolongation of lateral curb lines of two highways that join each other. Private drives are not highways, so no intersection is formed.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 350.9,
            category: "traffic-control",
            difficulty: "basic",
            question: "In order to be considered an 'Official Traffic Control Device', the device must be placed by whom?",
            answer: "A public body or officer having jurisdiction. Per TRC 541.304, official traffic-control device means sign, signal, marking, or device placed by public body/officer having jurisdiction for purpose of regulating, warning, or guiding traffic.",
            objective: "22.6",
            module: "3"
        },
        {
            id: 350.10,
            category: "definitions",
            difficulty: "basic",
            question: "When does 'Daytime' end and when does 'Nighttime' end per TRC 541.301?",
            answer: "Daytime ends at sunset. Nighttime ends at sunrise. Per TRC 541.301(2) and (7), daytime = sunrise to sunset, nighttime = sunset to sunrise.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 350.11,
            category: "definitions",
            difficulty: "basic",
            question: "True or False: A vehicle does not meet the definition of 'stand' if it halts temporarily to load or unload passengers.",
            answer: "TRUE. Per TRC 541.302(16), stand/standing means halt occupied/unoccupied vehicle OTHER than temporarily while receiving or discharging passenger. Loading/unloading passengers is specifically excluded.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 350.12,
            category: "arrest-prosecution",
            difficulty: "basic",
            question: "List the three offenses where an officer is required to issue a notice to appear per TRC 543.004:",
            answer: "1) Speeding, 2) Open container, 3) Texting while driving. These are the only three offenses where officer must issue notice to appear rather than arrest or other enforcement action.",
            objective: "22.6",
            module: "3"
        },

        // MODULE 4 FLASHCARDS - TRC Chapter 545 - Operation and Movement of Vehicles
        
        // 545.001 - DEFINITIONS
        {
            id: 401,
            category: "vehicle-operations",
            difficulty: "basic",
            question: "Define 'On-Track Equipment' per TRC 545.001(1).",
            answer: "Any car, rolling stock, equipment, or other device that, alone or coupled to another device, is operated on a railroad track. On-track equipment is given the ROW at railroad crossings as if the equipment were a train (TRC 545.251).",
            objective: "22.9",
            module: "4"
        },
        {
            id: 402,
            category: "vehicle-operations",
            difficulty: "basic",
            question: "Define 'Pass or Passing' per TRC 545.001(2).",
            answer: "To overtake and proceed past another vehicle moving in the same direction as the passing vehicle and return to the original lane of travel. The term also means to attempt that maneuver even if the pass is not completed.",
            objective: "22.9",
            module: "4"
        },
        
        // 545.051 - DRIVING ON RIGHT SIDE OF ROADWAY
        {
            id: 403,
            category: "vehicle-operations",
            difficulty: "intermediate",
            question: "When may a vehicle travel on the left side of the roadway per TRC 545.051(a)?",
            answer: "Traffic must travel on the right half unless: (1) passing another vehicle, (2) safely going around an obstruction, (3) traveling on a roadway divided into three marked lanes, or (4) traveling on a one-way roadway.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 404,
            category: "vehicle-operations",
            difficulty: "intermediate",
            question: "What is required for 'Slower Vehicle Fail to Keep Right' per TRC 545.051(b)?",
            answer: "Slower traffic is required to keep in the right-hand lane in preference to faster moving vehicles. For this offense to occur, there must be other traffic on the highway traveling faster. No signs are required to be posted.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 405,
            category: "vehicle-operations",
            difficulty: "advanced",
            question: "When may operators drive left of center on a two-way roadway with 4+ lanes per TRC 545.051(c)?",
            answer: "Only when: (1) authorized to do so by law (center left turn lane, reversible lanes, etc.), (2) to safely go around an obstruction, or (3) while turning left.",
            objective: "22.9",
            module: "4"
        },
        
        // 545.052 - DRIVING PAST VEHICLE MOVING IN OPPOSITE DIRECTION
        {
            id: 406,
            category: "vehicle-operations",
            difficulty: "intermediate",
            question: "What must operators do when meeting another vehicle per TRC 545.052?",
            answer: "When meeting another vehicle on a roadway wide enough for just one vehicle in each direction, operators must yield ½ of the roadway to traffic moving in the opposite direction. If not possible, yield 'as much of the roadway as possible.'",
            objective: "22.9",
            module: "4"
        },
        
        // 545.053 - PASSING TO THE LEFT; RETURN; BEING PASSED
        {
            id: 407,
            category: "passing",
            difficulty: "intermediate",
            question: "What are the requirements for the passing vehicle per TRC 545.053(a)?",
            answer: "Must pass to the left at a 'safe distance' and may not move back to the right until safely clear of the passed vehicle. Violations: 'Failed to Pass to the Left Safely' and 'Cut in After Pass.'",
            objective: "22.9",
            module: "4"
        },
        {
            id: 408,
            category: "passing",
            difficulty: "intermediate",
            question: "What are the requirements for the vehicle being passed per TRC 545.053(b)?",
            answer: "On audible signal, must stay to the right and are not permitted to accelerate until passed. 'Audible signal' must be present for an offense to occur (likely horn). Key: Signal required for violation.",
            objective: "22.9",
            module: "4"
        },
        
        // 545.054 - PASSING TO THE LEFT; SAFE DISTANCE
        {
            id: 409,
            category: "passing",
            difficulty: "advanced",
            question: "What are the distance requirements for passing per TRC 545.054?",
            answer: "Passing to the left is only permitted in legal passing zones and only when safe. Must not interfere with passed vehicle or oncoming traffic and must return to right before coming within 200 feet of oncoming vehicles. Word Association: Passing → 200 feet rule.",
            objective: "22.9",
            module: "4"
        },
        
        // 545.055 - PASSING TO THE LEFT; PASSING ZONES
        {
            id: 410,
            category: "passing",
            difficulty: "intermediate",
            question: "When is passing prohibited per TRC 545.055?",
            answer: "When a 'sign or marking' prohibits being left of center (solid yellow line/no passing zone). Unless making a left turn at an intersection or into a private drive/alley, traveling left of the no passing zone marking is prohibited.",
            objective: "22.9",
            module: "4"
        },
        
        // SPEED REGULATIONS
        {
            id: 411,
            category: "speed",
            difficulty: "basic",
            question: "What is the basic speed rule per TRC 545.351(a)?",
            answer: "An operator may not drive at a speed greater than is reasonable and prudent under the circumstances then existing. This applies even when driving under the posted speed limit.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 412,
            category: "speed",
            difficulty: "intermediate",
            question: "What are the prima facie speed limits in Texas per TRC 545.352?",
            answer: "30 mph in urban district, 70 mph day/65 mph night on numbered highway outside urban district, 60 mph day/55 mph night on unnumbered county/farm-to-market road outside urban district. These are maximum unless posted otherwise.",
            objective: "22.9",
            module: "4"
        },
        
        // FOLLOWING DISTANCE
        {
            id: 413,
            category: "following",
            difficulty: "intermediate",
            question: "What is the following distance rule per TRC 545.062?",
            answer: "An operator shall follow another vehicle at a distance that is reasonable and prudent under existing conditions, giving due regard to speed of vehicles, traffic, and roadway conditions. No specific distance given - it's situational.",
            objective: "22.9",
            module: "4"
        },

        // ADDITIONAL COMPREHENSIVE MODULE 4 CONTENT

        // 545.056 - NO PASSING ZONES
        {
            id: 414,
            category: "passing",
            difficulty: "advanced",
            question: "List the five times a vehicle is not permitted to be left of center per TRC 545.055-545.056.",
            answer: "545.055: (1) In no passing zone (solid yellow line). 545.056: (2) When approaching within 100 feet of intersection/railroad crossing, (3) when approaching within 100 feet of bridge/viaduct/tunnel with limited visibility, (4) on hill crest/curve where view is obstructed within 500 feet, (5) when view obstructed within 500 feet approaching within 100 feet of any intersection/railroad crossing.",
            objective: "22.9",
            module: "4"
        },

        // 545.060 - DRIVING ON ROADWAY LANED FOR TRAFFIC
        {
            id: 415,
            category: "lane-usage",
            difficulty: "advanced",
            question: "What are the two requirements for roadways laned for traffic per TRC 545.060(a)?",
            answer: "On roadway divided into two or more clearly marked lanes: (1) Operators must drive as nearly as practical entirely within a single lane (Fail to Drive in Single Lane), AND (2) may not move from lane unless movement can be made safely (Changed Lanes When Unsafe). Hardin v. State: Both must be violated for offense.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 416,
            category: "lane-usage",
            difficulty: "advanced",
            question: "When may operators use the center lane on a three-lane roadway per TRC 545.060(b)?",
            answer: "On three-lane roadway with two-way traffic, center lane may be used only when: (1) passing another vehicle and center lane is clear within safe distance, (2) preparing to make left turn, or (3) where center lane is designated by official traffic control device for movement in operator's direction.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 417,
            category: "lane-usage",
            difficulty: "intermediate",
            question: "What prohibits lane changes per TRC 545.060(d)?",
            answer: "Official traffic control devices prohibiting lane changes may be installed. Accomplished with solid double white lines. Crossing solid double white lines is prohibited (Disregard No Lane Change Device). TMUTCD Figure 3B-12.",
            objective: "22.9",
            module: "4"
        },

        // 545.0605 - MOTORCYCLE OPERATIONS (New Law 9/1/23)
        {
            id: 418,
            category: "motorcycle-operations",
            difficulty: "intermediate",
            question: "What are the motorcycle lane usage rules per TRC 545.0605?",
            answer: "Effective 9/1/23: (1) Motorcycle entitled to full use of lane, motor vehicles cannot crowd into lane space, (2) motorcycles may ride two abreast in single lane but not more than two, (3) lane splitting prohibited - cannot operate between lanes or pass in same lane.",
            objective: "22.9",
            module: "4"
        },

        // 545.061 - MULTIPLE-LANE ROADWAY
        {
            id: 419,
            category: "lane-usage",
            difficulty: "intermediate",
            question: "What is the right-of-way rule for multiple-lane roadways per TRC 545.061?",
            answer: "On roadway with three or more lanes, when two vehicles attempt to enter same lane from different directions, vehicle entering from right must yield to vehicle entering from left when changing lanes.",
            objective: "22.9",
            module: "4"
        },

        // 545.062 - FOLLOWING DISTANCE (COMPREHENSIVE)
        {
            id: 420,
            category: "following",
            difficulty: "advanced",
            question: "What are the specific following requirements for trucks and towing vehicles per TRC 545.062(b)(c)?",
            answer: "Truck or motor vehicle drawing another vehicle must leave enough space so that another vehicle attempting to pass has sufficient space to safely pass one at a time. Applies to caravans even if not towing. Does NOT apply to funeral processions.",
            objective: "22.9",
            module: "4"
        },

        // 545.063 - DIVIDED HIGHWAY
        {
            id: 421,
            category: "vehicle-operations",
            difficulty: "intermediate",
            question: "What are the rules for divided highways per TRC 545.063?",
            answer: "(a) Drive on right roadway. (b) No driving on median or dividing strip except where authorized opening is provided. (c) No driving across median except at authorized openings in divided highway.",
            objective: "22.9",
            module: "4"
        },

        // TURNING RULES
        {
            id: 422,
            category: "turning",
            difficulty: "advanced",
            question: "What are the specific turning requirements per TRC 545.101?",
            answer: "(a) Right turn: as close as practicable to right curb/edge. (b) Left turn from two-way: to right of center, then to right of center of intersecting roadway. (c) Left turn into one-way: as close as practicable to left edge. (d) Left turn from one-way: as close as practicable to left curb/edge.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 423,
            category: "turning",
            difficulty: "intermediate",
            question: "What are the U-turn visibility requirements per TRC 545.102?",
            answer: "U-turns permitted but must not be made near curve or crest of grade if visibility is reduced to below 500 feet for vehicle approaching from either direction. Word Association: U-Turn → 500 feet visibility.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 424,
            category: "turning",
            difficulty: "basic",
            question: "What three movements must be made safely per TRC 545.103?",
            answer: "Three movements requiring safety: (1) turning right or left, (2) turning from direct course, (3) moving right or left on roadway. Violations: Turned When Unsafe, Unsafe Movement Right or Left on Roadway.",
            objective: "22.9",
            module: "4"
        },

        // SIGNALING REQUIREMENTS
        {
            id: 425,
            category: "signaling",
            difficulty: "advanced",
            question: "What are the three signaling requirements per TRC 545.104?",
            answer: "(1) Intent to turn right/left (last 100 feet), (2) intent to change lanes (no distance requirement, before crossing lines), (3) intent to start from parked position. Mahaffey v. State: Following curves/merging into ending lane doesn't require signal. Speck v. State: Exiting freeway requires signal.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 426,
            category: "signaling",
            difficulty: "intermediate",
            question: "What are the prohibited uses of turn signals per TRC 545.104(c)?",
            answer: "May not light turn signal on only one side of parked/disabled vehicle and may not use turn signal as 'do pass' signal to vehicle approaching from rear. Violation: Improper Use of Turn Indicator.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 427,
            category: "signaling",
            difficulty: "intermediate",
            question: "When may hand signals be used instead of signal lamps per TRC 545.106-545.107?",
            answer: "Vehicle must be of size that distance from top of steering post to left outside limit is 2 feet or less, OR distance from center of steering post to rear limit is 14 feet or less. Larger vehicles must use lighted lamps.",
            objective: "22.9",
            module: "4"
        },

        // RIGHT-OF-WAY AT INTERSECTIONS
        {
            id: 428,
            category: "right-of-way",
            difficulty: "advanced",
            question: "What are the right-of-way rules at open intersections per TRC 545.151?",
            answer: "(b) Smaller roads yield to larger roads, undivided yield to divided highways. (c) Unpaved road yields to paved road. (d) Equal roads: yield to vehicle from immediate right if in hazardous proximity. (e) T-intersection: terminating road yields to through roadway.",
            objective: "22.11",
            module: "4"
        },
        {
            id: 429,
            category: "right-of-way",
            difficulty: "advanced",
            question: "Must vehicles stop at open intersections even with no traffic per TRC 545.151?",
            answer: "Yes, in many circumstances. TRC 545.151 requires specific vehicles to stop first and then yield ROW if another vehicle is approaching. Violation: Fail to Stop as Required at Open Intersection.",
            objective: "22.11",
            module: "4"
        },

        // SPEED REGULATIONS (COMPREHENSIVE)
        {
            id: 430,
            category: "speed",
            difficulty: "advanced",
            question: "What are all the prima facie speed limits per TRC 545.352?",
            answer: "30 mph in urban district, 70 mph day/65 mph night on numbered highway outside urban district, 60 mph day/55 mph night on unnumbered county/farm-to-market road outside urban district. These are maximums unless posted otherwise.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 431,
            category: "speed",
            difficulty: "advanced",
            question: "What are the minimum speed requirements per TRC 545.363?",
            answer: "Operator may not drive so slowly as to impede normal and reasonable flow of traffic except when reduced speed is necessary for safe operation or compliance with law. Minimum speed limits may be posted on limited-access highways.",
            objective: "22.9",
            module: "4"
        },

        // MODULE 4 REVIEW QUESTIONS FROM HANDOUT
        {
            id: 450.1,
            category: "vehicle-operations",
            difficulty: "basic",
            question: "An operator passing another vehicle shall return to an authorized lane of travel before coming within _____ of an approaching vehicle.",
            answer: "200 feet. Per TRC 545.053(c), operator passing shall return to authorized lane before coming within 200 feet of approaching vehicle in opposite direction.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 450.2,
            category: "vehicle-operations",
            difficulty: "basic",
            question: "True or False: It is a violation for an operator to cross over a double yellow no passing zone center stripe to turn left into a private drive.",
            answer: "FALSE. Per TRC 545.057, operator may drive to left of center when safely turning left. Double yellow lines prohibit passing, not left turns into driveways.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 450.3,
            category: "vehicle-operations",
            difficulty: "intermediate",
            question: "Fill in the seven times an operator is permitted to drive on the right improved shoulder (SADPAPA):",
            answer: "S-Stopping, slowing, avoiding conflict. A-Authorized emergency vehicle. D-Disabled vehicle. P-Pedalcycle (bicycle). A-Accelerating from stopped position. P-Passing streetcar on left. A-Animal-drawn vehicle. Per TRC 545.058, these are the only authorized uses of improved shoulder.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 450.4,
            category: "vehicle-operations",
            difficulty: "basic",
            question: "True or False: An operator on a roadway divided into two or more clearly marked lanes shall drive entirely within a single lane and may not move from the lane unless movement can be made safely.",
            answer: "TRUE. Per TRC 545.060(a), operator shall drive as nearly as practicable entirely within single lane and may not move unless movement can be made safely.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 450.5,
            category: "vehicle-operations",
            difficulty: "basic",
            question: "Following another vehicle with following distance of less than _____ constitutes prima facie evidence of 'Following Too Closely'.",
            answer: "A specific following distance is not specified in the law. Per TRC 545.062, offense is following more closely than reasonable and prudent considering speed, traffic, road conditions. No specific distance in statute.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 450.6,
            category: "vehicle-operations",
            difficulty: "intermediate",
            question: "An operator stopped for a loading or unloading school bus may not proceed until:",
            answer: "The flashing red lights are no longer activated OR the school bus driver signals to proceed. Per TRC 545.066, operator may proceed when visual signals no longer displayed or bus driver signals safe to proceed.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 450.7,
            category: "vehicle-operations",
            difficulty: "basic",
            question: "To make a right turn at intersection, operator must make the _____ and the _____ as close as practicable to right-hand edge of roadway.",
            answer: "Approach and turn. Per TRC 545.101(a), both approach and turn must be made as close as practicable to right-hand edge of roadway.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 450.8,
            category: "vehicle-operations",
            difficulty: "basic",
            question: "To make a left turn at intersection, operator must approach the intersection in the extreme _____ lane lawfully available.",
            answer: "Left-hand. Per TRC 545.101(b), operator turning left must approach intersection in extreme left-hand lane lawfully available to traffic moving in same direction.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 450.9,
            category: "vehicle-operations",
            difficulty: "basic",
            question: "List the three times an operator is required to use a turn signal per TRC 545.104:",
            answer: "1) Turning, 2) Changing lanes, 3) Starting from parked position. These are the three circumstances requiring turn signal activation per statute.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 450.10,
            category: "vehicle-operations",
            difficulty: "basic",
            question: "True or False: An operator must signal for 100 feet of movement before changing lanes.",
            answer: "FALSE. Per TRC 545.104, signal must be given continuously for not less than last 100 feet traveled before turn/lane change, not 100 feet of movement.",
            objective: "22.9",
            module: "4"
        },

        // MODULE 5 FLASHCARDS - TRC Chapters 546 & 547 - Emergency Vehicles & Vehicle Equipment

        // CHAPTER 546 - EMERGENCY VEHICLES
        {
            id: 501,
            category: "emergency-vehicles",
            difficulty: "advanced",
            question: "What are the four permissible conducts for authorized emergency vehicles per TRC 546.001?",
            answer: "1) Park or stand irrespective of other TRC provisions, 2) Proceed past red stop signal/sign after slowing for safety, 3) Exceed maximum speed limit without endangering life/property, 4) Disregard regulations governing direction of movement or turning. Note: Activities 2-4 only permissible under 546.002 circumstances.",
            objective: "22.16",
            module: "5"
        },
        {
            id: 502,
            category: "emergency-vehicles",
            difficulty: "advanced",
            question: "When is the conduct in TRC 546.001 permissible per TRC 546.002?",
            answer: "Five circumstances (except parking/standing): 1) Responding to emergency, 2) Pursuing violator of law, 3) Going to (not returning from) fire alarm, 4) Directing/diverting traffic for public safety, 5) Conducting police escort (facilitating funeral, oversized/hazardous load, or traffic disruption by peace officer).",
            objective: "22.16",
            module: "5"
        },
        {
            id: 503,
            category: "emergency-vehicles",
            difficulty: "intermediate",
            question: "What are the signal requirements for emergency vehicles per TRC 546.003?",
            answer: "Generally, operator of authorized emergency vehicle engaged in 546.001 conduct should use emergency lights and sirens. Section allows for 'discretion of the operator' and exceptions in 546.004.",
            objective: "22.16",
            module: "5"
        },
        {
            id: 504,
            category: "emergency-vehicles",
            difficulty: "advanced",
            question: "What are the exceptions to signal requirements per TRC 546.004?",
            answer: "(a) Volunteer firefighter in private vehicle may only engage in 546.001 conduct when using visual signals (emergency lights). (b) Police vehicles not required to have red light visible from front. (c) Police may operate without signals if: knowledge would cause suspect to destroy evidence/escape, OR traffic conditions would increase collision potential/extend pursuit duration.",
            objective: "22.16",
            module: "5"
        },
        {
            id: 505,
            category: "emergency-vehicles",
            difficulty: "intermediate",
            question: "What duty of care applies to emergency vehicle operators per TRC 546.005?",
            answer: "Chapter 546 does NOT relieve operator from: 1) Duty to operate vehicle with appropriate regard for safety of all persons, 2) Consequences of reckless disregard for safety of others. Emergency privileges don't eliminate responsibility for safe operation.",
            objective: "22.16",
            module: "5"
        },
        {
            id: 506,
            category: "emergency-vehicles",
            difficulty: "intermediate",
            question: "What authority do firefighters have per TRC 546.007?",
            answer: "Firefighters have authority to close one or more lanes of traffic to protect safety of persons or property. When doing so, they must deploy emergency vehicles equipped with proper emergency lights and sirens.",
            objective: "22.16",
            module: "5"
        },

        // CHAPTER 547 - VEHICLE EQUIPMENT
        {
            id: 507,
            category: "vehicle-definitions",
            difficulty: "advanced",
            question: "What is a 'highway maintenance or construction vehicle' per TRC 547.001?",
            answer: "Highway/traffic maintenance or construction vehicle used for roadway maintenance and repair - includes motor graders, road rollers, excavators, pneumatic tire equipment, movers, tractors. Important because these vehicles can flash blue lights under TXDOT standards that would otherwise be illegal.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 508,
            category: "vehicle-definitions",
            difficulty: "advanced",
            question: "What is 'road machinery' per TRC 547.001?",
            answer: "Vehicle that is both designed as machinery AND only incidentally operated on highway. Important because: operator not required to hold Texas driver's license (521.027) and road machinery excluded from most Chapter 547 equipment requirements (547.002).",
            objective: "22.17",
            module: "5"
        },
        {
            id: 509,
            category: "vehicle-definitions",
            difficulty: "advanced",
            question: "What is a 'slow-moving vehicle' per TRC 547.001?",
            answer: "A) Motor vehicle designed to operate at maximum 25 mph (not including Segway), OR B) Vehicle/implement/machinery towed by animal or motor vehicle designed for maximum 25 mph. Must display slow-moving emblem (547.703) and permitted to operate on improved shoulder (545.058).",
            objective: "22.17",
            module: "5"
        },
        {
            id: 510,
            category: "vehicle-definitions",
            difficulty: "advanced",
            question: "What is a 'service vehicle' per TRC 547.001?",
            answer: "Highway/traffic maintenance vehicle owned/operated by governmental agency performing function requiring lamp/illuminating device per TXDOT standards. Also includes vehicles with public service function like utility vehicles and tow trucks. Can flash blue lights under TXDOT standards.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 511,
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "Which vehicles are exempt from Chapter 547 per TRC 547.002?",
            answer: "1) Implement of husbandry (except 547.371/372), 2) Road machinery, 3) Road roller, 4) Farm tractor (except 547.371/372), 5) Bicycle/bicycle equipment (governed by 551.104), 6) Electric bicycle/equipment, 7) Golf cart (Chapter 551), 8) Neighborhood electric vehicle (Chapter 551), 9) Off-highway vehicle (Chapter 551A).",
            objective: "22.17",
            module: "5"
        },
        {
            id: 512,
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "What is the key principle of TRC 547.003 regarding equipment?",
            answer: "TRC doesn't list all permitted equipment - only required equipment and prohibited activities. Question isn't 'Where does TRC say you CAN have that equipment?' but 'Where does TRC say you CAN'T have that equipment?' TRC doesn't prohibit all unlisted equipment.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 513,
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "What are the general offenses under TRC 547.004?",
            answer: "(a)(1) Drive/Permit Vehicle In Unsafe Condition So As To Endanger Any Person - officer must articulate what's unsafe. (a)(2)&(3) Use Equipment Not Approved - vehicle not equipped per standards or equipped in prohibited manner. Must identify applicable standard and how equipment violates it.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 514,
            category: "lighting",
            difficulty: "advanced",
            question: "When must vehicle lights be activated per TRC 547.302?",
            answer: "Two circumstances: 1) Nighttime (1/2 hour after sunset to 1/2 hour before sunrise), OR 2) When light insufficient or atmospheric conditions unfavorable so person/vehicle not clearly discernible at 1,000 feet ahead.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 515,
            category: "lighting",
            difficulty: "advanced",
            question: "What is the lamp limitation per TRC 547.302(d)?",
            answer: "Not more than four of the following may be lighted at one time on front of motor vehicle: 1) Headlamps, OR 2) Lamps projecting beam >300 candlepower. Enforcement only when lamps actually lighted while operating. Accessory lighting ≤300 candlepower doesn't count toward limit.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 516,
            category: "lighting",
            difficulty: "advanced",
            question: "What are the rear lamp color requirements per TRC 547.303?",
            answer: "Unless expressly provided otherwise, lighting device/reflector mounted on rear must be or reflect red. Exception: signaling device (turn signals) mounted on rear may be red, amber, or yellow. License plate lamps are expressly allowed to be white.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 517,
            category: "lighting",
            difficulty: "advanced",
            question: "What lighting exemptions apply during daytime per TRC 547.304?",
            answer: "During daytime/good visibility: Farm trailers, fertilizer trailers registered as farm trailer, boat trailers ≤3,000 lbs - no fixed electric lights required. Boat trailers 3,001-4,499 lbs - only stop lamps and turn signals required. Mobile homes under permit - only stop lamps and turn signals. At nighttime, all need full lighting.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 518,
            category: "lighting",
            difficulty: "advanced",
            question: "What flashing light restrictions apply per TRC 547.305?",
            answer: "High-intensity beams (>300 candlepower) must be directed so no part strikes roadway >75 feet from vehicle (except headlamps, spotlamps, auxiliary lamps, turn signals, emergency/tow truck/school bus warning lamps). Only police may have red light visible from directly in front (with exceptions for emergency vehicles, school/church buses, authorized tow trucks).",
            objective: "22.17",
            module: "5"
        },
        {
            id: 519,
            category: "lighting",
            difficulty: "advanced",
            question: "What headlamp mounting requirements exist per TRC 547.321?",
            answer: "TRC: At least two headlamps, one each side of front, 24-54 inches height (for pre-1968 vehicles). Federal Standard: 22-54 inches for vehicles manufactured 1968 or later. Federal standard controls for newer vehicles due to TRC 547.3215 adoption of federal standards.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 520,
            category: "lighting",
            difficulty: "advanced",
            question: "What are TRC taillamp requirements per TRC 547.322?",
            answer: "At least two taillamps (one for pre-1960 passenger cars), 15-72 inches height, red light visible 1,000 feet from rear. License plate lamp: white light illuminating rear plate, clearly legible at 50 feet. Word Association: TRC Taillamps → 15-72 inches → red → 1000 feet; TRC LP Lamp → white → 50 feet.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 521,
            category: "lighting",
            difficulty: "advanced",
            question: "What are stop lamp requirements per TRC 547.323?",
            answer: "At least two stop lamps (one for pre-1960 passenger cars), mounted on rear, red or amber light visible in normal sunlight at 300 feet from rear when service brake applied. Word Association: TRC stop lamps → two on rear → red or amber → 300 feet.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 522,
            category: "lighting",
            difficulty: "advanced",
            question: "When are high-mounted stop lamps required per federal standards?",
            answer: "Passenger cars: manufactured on/after September 1, 1985. MPVs/trucks/buses <80\" wide and ≤10,000 GVWR: manufactured on/after September 1, 1993. NOT required: ≥80\" wide OR >10,000 GVWR vehicles. Word Association: High-mounted → passenger car → Sept 1, 1985; truck/SUV → Sept 1, 1993; not required → >10,000 GVWR or 80\" wide.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 523,
            category: "lighting",
            difficulty: "advanced",
            question: "What are turn signal requirements per TRC 547.324?",
            answer: "If ≥80\" wide: visible 500 feet front and rear. If <80\" wide: visible 300 feet front and rear. Mounted same level, spaced widely apart. TRC allows white or amber to front, red or amber to rear. Federal standards require amber to front (white front turn signals illegal on post-1967 vehicles).",
            objective: "22.17",
            module: "5"
        },
        {
            id: 524,
            category: "lighting",
            difficulty: "advanced",
            question: "What are reflector requirements per TRC 547.325?",
            answer: "At least two red reflectors on rear, may be part of taillamp, 15-60 inches height. Must be red and visible at night at all distances 100-600 feet when directly in front of lawful lower beam headlamps. Word Association: TRC reflectors → 15-60 inches → at least 2 → red → 100-600 feet.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 525,
            category: "lighting",
            difficulty: "advanced",
            question: "What auxiliary lighting is permitted per TRC 547.327-330?",
            answer: "Spotlamps: ≤2, aimed so no high-intensity portion strikes windshield/window/mirror/occupant of other vehicle. Fog lamps: ≤2, 12-30 inches, white or yellow, with low beams. Auxiliary driving lamps: ≤2, 16-42 inches, white, with high beams only when authorized. Word Association: fog → ≤2 → 12-30\" → white/yellow; auxiliary → ≤2 → 16-42\" → white → high beams only.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 526,
            category: "lighting",
            difficulty: "advanced",
            question: "When must high-beam headlamps be dimmed per TRC 547.333?",
            answer: "Uppermost distribution (high beam): reveal person/vehicle at ≥450 feet. Lowermost distribution (low beam): reveal person/vehicle at ≥150 feet, no high-intensity portion into approaching operator's eyes. Dim high beams within 500 feet approaching from front (meeting), 300 feet approaching from rear (following). Word Association: dim high beams → 500' meeting → 300' following.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 527,
            category: "lighting",
            difficulty: "advanced",
            question: "What additional lighting is required for larger vehicles per TRC 547.352?",
            answer: "Vehicles ≥80\" wide: 2 clearance lamps front (amber), 2 rear (red), 4 side marker lamps (2 amber front, 2 red rear), 4 side reflectors, hazard lamps. Vehicles ≥30' long: hazard lamps, intermediate side markers. Pole trailers: side markers near front load (amber), reflector near front, combination lamp on rearmost support.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 528,
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "What audible warning device requirements exist per TRC 547.501?",
            answer: "Motor vehicle must have horn in good working condition, audible under normal conditions at ≥200 feet. May not have siren, whistle, or bell unless commercial vehicle with theft alarm or authorized emergency vehicle. Horn only for safety warning, not unreasonably loud/harsh or whistle sound. Word Association: audible warning → 200 feet → no siren/whistle/bell.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 529,
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "What visible warning devices are required per TRC 547.502?",
            answer: "Truck, bus, truck-tractor, or vehicle towing house trailer (outside urban district or on divided highway) must carry: Daytime - ≥2 red flags ≥12\" square with standards. Nighttime - ≥3 flares and ≥3 red-burning fuses, red electric lanterns, or portable red emergency reflectors.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 530,
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "When must hazard lamps be displayed per TRC 547.503?",
            answer: "Trucks, buses, truck-tractors, trailers, semitrailers, pole trailers ≥80\" wide or 30' long stopped on roadway/shoulder must immediately display hazard warning lamps UNLESS: 1) Parked lawfully in urban district, 2) Stopped to receive/discharge passenger, 3) Stopped to avoid traffic conflict, 4) Stopped per police officer/traffic control device, 5) Displays other required warning devices.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 531,
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "What are brake requirements per TRC 547.401-405?",
            answer: "Brakes required, performance standards in 547.408. Trailer exceptions: ≤4,500 lbs gross - no brakes; 4,501-15,000 lbs ≤30 mph - no brakes; 4,501-15,000 lbs >30 mph - brakes on rear axle only. Service brakes: one control for all brakes. Parking brakes: independent of service brakes. Emergency brakes: trailers >4,500 lbs with air/vacuum must have automatic application if breakaway.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 532,
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "What safety equipment is required per TRC 547.601-606?",
            answer: "Safety belts: required if manufacturer's original equipment. Mirrors: reflect highway view ≥200 feet from rear. Windshield wipers: device to clean moisture, good working condition. Muffler: prevent excessive/unusual noise, no cutouts/bypasses. Emission system: prevent excessive smoke/fumes, maintain post-1967 systems, violation if visible smoke ≥10 seconds. Word Association: mirror → 200 foot view; exhaust emission → after 1967 → 10 seconds.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 533,
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "What are safety guard/mudflap requirements per TRC 547.606?",
            answer: "Required on vehicles with ≥4 tires or ≥2 super single tires on rearmost axle (road tractors, trucks, trailers, truck-tractors in combination, semitrailers in combination). Must be suspended within 8\" of roadway surface (admin code allows 4\" tolerance = 12\" when standing still), at least as wide as tires, rigid material. Exceptions: truck-tractors operated alone, pole trailers, recreational vehicles, buses.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 534,
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "What window tint restrictions exist per TRC 547.613?",
            answer: "Windshield: no tint below AS1 line (or 5\" from top); above AS1 may be tinted ≥25% transmission, not red/amber/blue. Side windows left/right of operator: ≥25% transmission. Side windows rear of operator: no restrictions. Rear window: no restrictions if equipped with outside mirrors both sides. Out-of-state vehicles, factory tinting, commercial vehicles, law enforcement vehicles exempt.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 535,
            category: "motorcycle-operations",
            difficulty: "advanced",
            question: "What lighting equipment is required for motorcycles per TRC 547.801?",
            answer: "≤2 headlamps (24-54\"), ≥1 taillamp (20-72\"), license plate lamp, ≥1 stop lamp, ≥1 rear red reflector. Federal standards also require: 2 amber turn signals front, 2 amber/red turn signals rear, 2 amber reflectors side front, 2 red reflectors side rear. Multi-beam headlamps required (except ≤250cc motorcycles and mopeds). Headlamp must be illuminated at all times (except pre-1975 motorcycles).",
            objective: "22.22",
            module: "5"
        },
        {
            id: 505,
            category: "emergency-vehicles",
            difficulty: "intermediate",
            question: "What duties remain for emergency vehicle operators per TRC 546.005?",
            answer: "This chapter does NOT relieve operators from: 1) duty to operate with appropriate regard for safety of all persons, or 2) consequences of reckless disregard for safety of others. Emergency privileges don't eliminate duty of care.",
            objective: "22.16",
            module: "5"
        },

        // CHAPTER 547 - VEHICLE EQUIPMENT DEFINITIONS
        {
            id: 506,
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "Define 'Slow-moving vehicle' per TRC 547.001(7).",
            answer: "A vehicle designed to operate at a speed of 25 miles per hour or less. Important: Required to display slow-moving vehicle emblem (547.703) and permitted to operate on improved shoulder (545.058).",
            objective: "22.17",
            module: "5"
        },
        {
            id: 507,
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "Define 'Slow-moving-vehicle emblem' per TRC 547.001(8).",
            answer: "A triangular emblem that conforms to standards adopted by DPS director (American Society of Agricultural and Biological Engineers Standard S276). May only be used in certain circumstances (547.005) and required on slow-moving vehicles (547.703).",
            objective: "22.17",
            module: "5"
        },
        {
            id: 508,
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "What vehicles are exempt from Chapter 547 per TRC 547.002?",
            answer: "Unless specifically made applicable, Chapter 547 doesn't apply to: 1) implement of husbandry (except 547.371-372), 2) road machinery, 3) road roller, 4) farm tractor (except 547.371-372), 5) bicycle/equipment (governed by 551.104), 6) electric bicycle/equipment, 7) golf cart (Chapter 551), 8) neighborhood electric vehicle (Chapter 551), 9) off-highway vehicle (Chapter 551A).",
            objective: "22.17",
            module: "5"
        },
        {
            id: 509,
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "What is the principle behind TRC 547.003 regarding equipment?",
            answer: "TRC doesn't list all permitted equipment - only required equipment and prohibited activities. Question isn't 'Where does TRC say you CAN have equipment?' but 'Where does TRC say you CAN'T have equipment?' Doesn't prohibit equipment required by US agencies or accessories not inconsistent with chapter.",
            objective: "22.17",
            module: "5"
        },

        // LIGHTING REQUIREMENTS
        {
            id: 510,
            category: "lighting",
            difficulty: "advanced",
            question: "When must vehicle lights be activated per TRC 547.302?",
            answer: "Required lights must be activated: 1) at nighttime (1/2 hour after sunset to 1/2 hour before sunrise), OR 2) when light insufficient or atmospheric conditions unfavorable so person/vehicle not clearly discernible at 1,000 feet ahead.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 511,
            category: "lighting",
            difficulty: "intermediate",
            question: "What is the four-light rule per TRC 547.302(d)?",
            answer: "Not more than four of the following may be lighted at one time on front of motor vehicle: 1) headlamps, or 2) lamps projecting beam with intensity brighter than 300 candlepower. Only applies when lamps actually lighted while operating on highway.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 512,
            category: "lighting",
            difficulty: "intermediate",
            question: "What are the color requirements for rear lighting per TRC 547.303?",
            answer: "Unless expressly provided otherwise, lighting device or reflector mounted on rear must be or reflect red. Exception: signaling device (turn signals) mounted on rear may be red, amber, or yellow.",
            objective: "22.17",
            module: "5"
        },

        // SPECIFIC LAMP REQUIREMENTS
        {
            id: 513,
            category: "lighting",
            difficulty: "advanced",
            question: "What are the TRC requirements for headlamps per TRC 547.321?",
            answer: "Motor vehicle must have at least two headlamps - one on each side of front, mounted 24-54 inches high. For pre-1968 vehicles. Post-1967 vehicles subject to Federal 108 Lighting Standard.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 514,
            category: "lighting",
            difficulty: "advanced",
            question: "What are the TRC requirements for taillamps per TRC 547.322?",
            answer: "Motor vehicle/trailer must have at least two taillamps (one for pre-1960 passenger car/truck). Mounting: rear of vehicle, 15-72 inches high, same level and spaced widely apart. Color: red light visible 1,000 feet from rear. Word Association: TRC Taillamps → 15-72 inches → red → 1000 feet.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 515,
            category: "lighting",
            difficulty: "advanced",
            question: "What are the license plate lamp requirements per TRC 547.322(f)?",
            answer: "Taillamp or separate lamp must emit white light that illuminates rear license plate and makes it clearly legible at 50 feet from rear. Word Association: TRC LP Lamp → white light → 50 feet.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 516,
            category: "lighting",
            difficulty: "advanced",
            question: "What are the TRC requirements for stop lamps per TRC 547.323?",
            answer: "Motor vehicle/trailer must have at least two stop lamps (one for pre-1960 passenger car). Mounting: on rear of vehicle. Color: red or amber light visible in normal sunlight at 300 feet from rear, displayed when service brake applied. Word Association: TRC stop lamps → two on rear → red or amber → 300 feet.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 517,
            category: "lighting",
            difficulty: "advanced",
            question: "What are the turn signal lamp requirements per TRC 547.324?",
            answer: "If vehicle ≥80\" wide: visible 500 feet front/rear. If <80\" wide: visible 300 feet front/rear. Mounting: same level, spaced widely apart on front and rear. Color: white or amber to front, red or amber to rear. Note: Federal standard requires amber front for post-1967 vehicles.",
            objective: "22.17",
            module: "5"
        },

        // HIGH-MOUNTED STOP LAMPS (Federal Requirements)
        {
            id: 518,
            category: "lighting",
            difficulty: "advanced",
            question: "What are the federal high-mounted stop lamp requirements and effective dates?",
            answer: "TRC doesn't require, but Federal 108 standard does. Passenger cars: required if manufactured on/after September 1, 1985. MPVs/trucks/buses <80\" wide and ≤10,000 GVWR: required if manufactured on/after September 1, 1993. Not required: >10,000 GVWR or ≥80\" wide. Word Associations: Passenger car → Sept 1, 1985; Truck/SUV → Sept 1, 1993.",
            objective: "22.17",
            module: "5"
        },

        // LIGHTING RESTRICTIONS
        {
            id: 519,
            category: "lighting",
            difficulty: "advanced",
            question: "What are the restrictions on high-intensity lighting per TRC 547.305(a)?",
            answer: "Motor vehicle lamp/illuminating device projecting beam >300 candlepower must be directed so no part of high-intensity portion strikes roadway >75 feet from vehicle. Does NOT apply to: headlamp, spotlamp, auxiliary lamp, turn signal, or emergency vehicle/tow truck/school bus warning lamps.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 520,
            category: "lighting",
            difficulty: "advanced",
            question: "What are the red light restrictions per TRC 547.305(b)?",
            answer: "Except as expressly authorized by law, only police vehicle may have lamp/device displaying red light visible from directly in front of center. Exceptions: authorized emergency vehicles, school/church buses, and tow trucks authorized for flashing red lights at specified times.",
            objective: "22.17",
            module: "5"
        },

        // EQUIPMENT EFFECTIVENESS
        {
            id: 521,
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "What is prohibited regarding required lamp effectiveness per TRC 547.320?",
            answer: "Person may not operate vehicle equipped with lamp/device/equipment that impairs effectiveness of required lamp, reflective device, or warning device. Examples: smoked taillamp covers, tinted headlamp lenses, stickers obstructing high-mounted stop lamp, bright accessory light obscuring side marker lamp. Arrest title: Vehicle Equipped so as to Impair Effectiveness of Required Lamp.",
            objective: "22.17",
            module: "5"
        },

        // DAYTIME LIGHTING EXEMPTIONS
        {
            id: 522,
            category: "lighting",
            difficulty: "advanced",
            question: "What are the daytime lighting exemptions per TRC 547.304?",
            answer: "During daytime/good visibility (1000' visibility), exemptions: (a) Farm trailers, fertilizer trailers registered as farm, boat trailers ≤3,000 lbs - no fixed electric lights required. (b) Boat trailers 3,001-4,499 lbs - only stop lamps and turn signals required. (c) Mobile homes under permit - only stop lamps and turn signals required. At nighttime: all require full lighting.",
            objective: "22.17",
            module: "5"
        },

        // MODULE 5 REVIEW QUESTIONS FROM HANDOUT  
        {
            id: 550.1,
            category: "emergency-vehicles",
            difficulty: "intermediate",
            question: "Which of the following situations does not permit an authorized emergency vehicle to disregard a red traffic signal: A) Police catching violator for routine stop, B) Volunteer firefighter responding to fire, C) Police escorting oversized load, D) Physician responding to emergency?",
            answer: "A) Police officer catching up to violator for routine traffic stop. Per TRC 546.002, conduct permitted only when responding to emergency call, pursuing suspected violator, or responding to but not returning from fire alarm. Routine traffic stops don't qualify.",
            objective: "22.16",
            module: "5"
        },
        {
            id: 550.2,
            category: "emergency-vehicles",
            difficulty: "basic",
            question: "The operator of an authorized emergency vehicle may proceed past a red light or stop sign, but only after:",
            answer: "Slowing as necessary for safe operation. Per TRC 546.001(2), may proceed past red signal/stop sign only after slowing as necessary for safe operation. Must ensure safety before proceeding.",
            objective: "22.16",
            module: "5"
        },
        {
            id: 550.3,
            category: "emergency-vehicles",
            difficulty: "basic",
            question: "True or False: An authorized emergency vehicle engaged in conduct per TRC 546.001 must be utilizing emergency lights and siren without exception.",
            answer: "FALSE. Per TRC 546.003, emergency vehicle must use at least one emergency light or siren. 'At least one' means not necessarily both - can use either lights OR siren or both.",
            objective: "22.16",
            module: "5"
        },
        {
            id: 550.4,
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "A slow moving vehicle is designed to operate at a maximum speed of _____ per TRC 547.001.",
            answer: "25 MPH. Per TRC 547.001(6), slow-moving vehicle means vehicle designed to operate at maximum speed of 25 MPH or less.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 550.5,
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "A slow moving vehicle emblem may be displayed on which vehicles?",
            answer: "Horse-drawn carriage with energetic horse capable of 28 MPH would NOT qualify - exceeds 25 MPH limit. Emblem required on vehicles designed for ≤25 MPH operation. Farm implement with 30 MPH max exceeds limit. Old woman driving slowly doesn't change vehicle's design speed.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 550.6,
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "True or False: TXDOT lighting standards for highway maintenance vehicles can permit lights that are prohibited by other Transportation Code sections.",
            answer: "TRUE. Per TRC 547.305(d), lighting standards adopted by department for highway maintenance/construction/service vehicles may permit flashing lights that are otherwise prohibited by this chapter.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 550.7,
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "A vehicle's required lamps must be activated in what two circumstances per TRC 547.302?",
            answer: "1) At nighttime, 2) When light is insufficient to render persons and vehicles clearly discernible at 1,000 feet. These are the two lighting activation requirements.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 550.8,
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "What color would be prohibited for a signaling device mounted on the rear of a vehicle?",
            answer: "White. Per TRC 547.322, rear signaling device may show red or amber only. White lights prohibited on rear (except backup lights).",
            objective: "22.17",
            module: "5"
        },
        {
            id: 550.9,
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "True or False: A farm trailer operated at nighttime is not exempt from any of the lighting requirements.",
            answer: "TRUE. Per TRC 547.351, farm trailers have lighting exemptions only during DAYTIME operations. At nighttime, farm trailers must comply with all lighting requirements like other vehicles.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 550.10,
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "According to TRC, a headlamp must be mounted at a height of _____ inches. According to Federal 108 Standard, headlamp height is _____ inches.",
            answer: "TRC: 24-54 inches. Federal 108: 22-54 inches. Per TRC 547.321(c), headlamps mounted 24-54 inches above ground. Federal standard allows lower mounting (22 inches minimum).",
            objective: "22.17",
            module: "5"
        },

        // MODULE 6 FLASHCARDS - TRC Chapters 548-551A: Vehicle Inspections, Collisions, Bicycles, Low-Powered Vehicles

        // CHAPTER 548 - VEHICLE INSPECTIONS
        {
            id: 601,
            category: "vehicle-inspections",
            difficulty: "advanced",
            question: "What is a commercial motor vehicle per TRC 548.001?",
            answer: "Self-propelled or towed vehicle (except farm vehicle <48,000 lbs gross/registered/GVWR) used on public highway to transport passengers/cargo if: (A) vehicle/combination ≥26,000 lbs gross/registered/GVWR, (B) designed/used for >15 passengers including driver, OR (C) transports hazmat requiring placards. CMVs have different inspection process (548.201).",
            objective: "22.17",
            module: "6"
        },
        {
            id: 602,
            category: "vehicle-inspections",
            difficulty: "advanced",
            question: "Which vehicles are exempt from inspection per TRC 548.052?",
            answer: "Key exemptions: trailers/semitrailers/pole trailers/mobile homes ≤7,500 lbs actual/registered gross weight; farm machinery; road-building equipment; farm trailers; slow-moving vehicle emblem vehicles; former military vehicles; dealer temporary tags; machinery license; antique license; one-trip permits. Note: 72/144-hour permits and buyer's temporary tags still require inspection.",
            objective: "22.17",
            module: "6"
        },

        // CHAPTER 550 - COLLISION REPORTS
        {
            id: 603,
            category: "collision-investigation",
            difficulty: "advanced",
            question: "Where does Chapter 550 apply per TRC 550.001?",
            answer: "Chapter 550 applies to: (1) Roads owned/controlled by water control district, (2) Private access ways/parking areas provided for business clients (not private residential or fee parking lots), (3) Highways or other public places. Broader application than most TRC chapters - can report crashes in parking lots and other public areas.",
            objective: "22.30",
            module: "6"
        },
        {
            id: 604,
            category: "collision-investigation",
            difficulty: "advanced",
            question: "What are the Fail to Stop and Render Aid felony penalties per TRC 550.021?",
            answer: "Applies when collision results/likely results in injury/death. Driver must: immediately stop, return if unable to initially stop, determine if person involved, remain until giving required info. Penalties: Death = F2, Serious Bodily Injury = F3 (SBI per PC 1.07), Other injury = F3 with reduced confinement/fine. Driver must have knowledge crash occurred.",
            objective: "22.30",
            module: "6"
        },
        {
            id: 605,
            category: "collision-investigation",
            difficulty: "advanced",
            question: "What are the investigation and reporting requirements per TRC 550.041 and 550.062?",
            answer: "Investigation (550.041): Peace officers may investigate crashes anywhere except private residential parking or privately owned fee parking lots. Filing charges authority for violations not witnessed. Reporting (550.062): Written report required if injury/death OR ≥$1,000 property damage. Submit by 10th day after crash on TXDOT form (CR-3).",
            objective: "22.30",
            module: "6"
        },

        // CHAPTER 551 - BICYCLES AND LOW-POWERED VEHICLES
        {
            id: 606,
            category: "bicycle-operations",
            difficulty: "intermediate",
            question: "What rights and duties do bicycle operators have per TRC 551.101?",
            answer: "Person operating bicycle has same rights and duties as vehicle driver, unless law provision alters right/duty or right/duty by nature cannot apply to bicycle. Example: must stop at stop signs like vehicles, but unattended bikes don't need keys removed or parking brake set because bikes don't have ignitions or parking brakes.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 607,
            category: "bicycle-operations",
            difficulty: "advanced",
            question: "When may bicycles move from right edge per TRC 551.103?",
            answer: "Bicycles slower than traffic must ride near right curb/edge, but may move when: (1) passing vehicle same direction, (2) preparing left turn at intersection/private road/driveway, (3) roadway condition prevents safe riding near right, (4) outside lane <14 feet wide without adjacent bike lane (may use entire lane). May ride two abreast in single lane if not impeding traffic.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 608,
            category: "bicycle-operations",
            difficulty: "advanced",
            question: "What safety equipment is required for bicycles per TRC 551.104?",
            answer: "All times: brake capable of making braked wheel skid on dry/level/clean pavement. Nighttime: brake PLUS white lamp visible 500 feet to front AND red reflector visible 50-300 feet rear OR red lamp visible 500 feet rear. Flashing lights permitted on bicycles (547.305 only prohibits flashing lights on motor vehicles).",
            objective: "22.18",
            module: "6"
        },
        {
            id: 609,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "Where may Electric Personal Assistive Mobility Devices operate per TRC 551.202?",
            answer: "EPAMD (Segway) must operate on sidewalk if available unless crossing highway. If no sidewalk available, may operate on residential street/roadway/highway ≤30 mph. May operate on bicycle paths. If on highway, ride close to right edge like bicycle. Word Association: EPAMD → sidewalk if available → highway ≤30 mph if no sidewalk.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 610,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What are the two NEV operation types per TRC 551.303-304?",
            answer: "Registered Operation (551.303): like car, requires license/registration/insurance, only highways ≤45 mph, operate ≤35 mph. Limited Operation (551.304): like golf cart, no registration/insurance needed, three circumstances: master planned community, public/private beach, golf course transportation ≤35 mph highway within 2 miles during daytime.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 611,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What are golf cart operation types per TRC 551.403-404?",
            answer: "Limited Operation (551.403): master planned community, public/private beach, golf course transportation ≤35 mph highway within 5 miles during daytime. Golf cart license plate required for beach/golf use. Municipal/County Operation (551.404): city/county ordinance permitting operation on highways ≤35 mph, requires golf cart license plate, insurance, licensed driver, equipment per 551.4041.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 612,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What defines off-highway vehicles per TRC 551A.001?",
            answer: "Four types: (1) All-terrain vehicle (3+ tires, off-highway, not farming/lawn care, ≤50\" wide), (2) Sand rail (sandy terrain, tubular frame, roll cage, rear/mid engine, 700-2000 lbs), (3) Recreational off-highway vehicle (4+ tires, off-highway, not farming/lawn care), (4) Utility vehicle (≥4 tires, utility work, not recreational, not golf cart/lawn mower).",
            objective: "22.18",
            module: "6"
        },
        {
            id: 613,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What are OHV highway operation authorizations per TRC 551A.051?",
            answer: "OHV may only operate on highway in specific circumstances: (1) public beach (551A.033), (2) municipality/county ordinance (551A.053), (3) master planned community (551A.055), (4) golf course transportation (551A.055), (5) agricultural/utility work (551A.057), (6) law enforcement/emergency (551A.058). OHV license plate required except agricultural/utility/law enforcement use.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 614,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What equipment and safety requirements apply to OHVs per TRC 551A.071-072?",
            answer: "Equipment: brake system, muffler system, spark arrester, lighted headlight/taillight during nighttime/reduced visibility. Safety apparel: DOT helmet, eye protection, seat belts if equipped. Exception: 4-wheel vehicles with bench/bucket seats, seat belts, and roll bar/cage don't need helmet/eye protection. Agricultural/utility workers exempt from safety apparel.",
            objective: "22.18",
            module: "6"
        },

        // ADDITIONAL DETAILED MODULE 6 FLASHCARDS - Comprehensive Coverage

        // CHAPTER 548 - VEHICLE INSPECTIONS (Detailed Coverage)
        {
            id: 615,
            category: "vehicle-inspections",
            difficulty: "intermediate",
            question: "What 15 items are inspected during annual safety inspection per TRC 548.051?",
            answer: "1) Tires, 2) Wheel assembly, 3) Safety guards/flaps if required, 4) Brake system, 5) Steering system, 6) Lighting equipment, 7) Horns/warning devices, 8) Mirrors, 9) Windshield wipers, 10) Sunscreening devices, 11) Front seat belts, 12) Exhaust system (not EVs), 13) Exhaust emission system (not EVs), 14) Fuel tank cap (not EVs), 15) Emissions control equipment (not EVs).",
            objective: "22.17",
            module: "6"
        },
        {
            id: 616,
            category: "vehicle-inspections",
            difficulty: "advanced",
            question: "What vehicles require inspection but are often misunderstood per TRC 548.051-052?",
            answer: "REQUIRE inspection: 72/144-hour permits, 30-day permits, buyer's temporary tags. EXEMPT: trailers ≤7,500 lbs, farm trailers (any weight), dealer temporary tags, machinery license, antique license, one-trip permits. Note: Inspection checked at MyTXCar.org. Farm vehicle <48,000 lbs is NOT a CMV.",
            objective: "22.17",
            module: "6"
        },
        {
            id: 617,
            category: "vehicle-inspections",
            difficulty: "intermediate",
            question: "What inspection requirements apply to mopeds per TRC 548.051(b)?",
            answer: "Mopeds are subject to inspection like motorcycles, but only four items required: brakes, headlamps, rear lamps, and reflectors. Streamlined inspection process compared to full vehicle inspection.",
            objective: "22.17",
            module: "6"
        },

        // CHAPTER 550 - COLLISION REPORTS (Additional Detail)
        {
            id: 618,
            category: "collision-investigation",
            difficulty: "advanced",
            question: "What must drivers do for injury/death crashes per TRC 550.021?",
            answer: "Required actions: (1) immediately stop at scene, (2) immediately return if unable to initially stop, (3) immediately determine if person involved, (4) remain until giving required info. Must not obstruct traffic more than necessary. Driver must have KNOWLEDGE crash occurred (case law requirement).",
            objective: "22.30",
            module: "6"
        },
        {
            id: 619,
            category: "collision-investigation",
            difficulty: "advanced",
            question: "What are freeway movement requirements per TRC 550.022(b)?",
            answer: "In metropolitan area freeway crashes, if each vehicle can be 'normally and safely driven,' each operator must move vehicle ASAP to minimize interference with freeway traffic. Metropolitan area = area with municipality ≥100,000 population plus adjacent municipalities/unincorporated urban districts.",
            objective: "22.30",
            module: "6"
        },
        {
            id: 620,
            category: "collision-investigation",
            difficulty: "intermediate",
            question: "What information must be exchanged per TRC 550.023?",
            answer: "Required info: name, driver license number, address, registration, and insurance information to other parties. Also required to render aid or arrange medical aid (call 911). Applies to crashes with vehicles driven or attended by person.",
            objective: "22.30",
            module: "6"
        },
        {
            id: 621,
            category: "collision-investigation",
            difficulty: "intermediate",
            question: "What are duties for unattended vehicle strikes per TRC 550.024?",
            answer: "Must immediately stop and attempt to locate owner. If owner cannot be located, leave information in conspicuous place on vehicle. Penalties: damage <$200 = Class C, damage ≥$200 = Class B. Information must include name, address, registration info.",
            objective: "22.30",
            module: "6"
        },
        {
            id: 622,
            category: "collision-investigation",
            difficulty: "intermediate",
            question: "What are duties for highway fixture strikes per TRC 550.025?",
            answer: "Make reasonable efforts to locate and notify owner of damaged fixtures/structures/landscaping adjacent to highway. Provide identifying information. Penalties: damage <$200 = Class C, damage ≥$200 = Class B. Applies to structures/fixtures on or adjacent to highway.",
            objective: "22.30",
            module: "6"
        },

        // CHAPTER 551 - BICYCLES (Additional Detail)
        {
            id: 623,
            category: "bicycle-operations",
            difficulty: "intermediate",
            question: "What specific bicycle operation rules apply per TRC 551.102?",
            answer: "(a) Must ride only on/astride permanent regular seat, (b) Cannot carry more persons than bicycle designed for, (c) Cannot carry object preventing at least one hand on handlebars, (d) Cannot attach bicycle/coaster/sled/toy vehicle/roller skates to vehicle or streetcar. Note: Riding no-hands without carrying objects is NOT a violation.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 624,
            category: "bicycle-operations",
            difficulty: "advanced",
            question: "When may bicycles ride two abreast per TRC 551.103(c)?",
            answer: "Bicycles may ride two abreast in single lane as long as they do not impede traffic. No more than two abreast unless on roadway part exclusively for bicycles. If riding two abreast, both must still follow right-edge rules unless specific exceptions apply.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 625,
            category: "bicycle-operations",
            difficulty: "advanced",
            question: "Why are flashing lights permitted on bicycles per TRC 547.305?",
            answer: "TRC 547.305 only prohibits flashing red, white, or blue lamps on MOTOR VEHICLES. Additionally, TRC 547.002 exempts bicycles from Chapter 547 provisions. Therefore, bicycles may have flashing white front lights or flashing red rear lights without violation.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 626,
            category: "bicycle-operations",
            difficulty: "intermediate",
            question: "What electric bicycle age restriction exists per TRC 551.107?",
            answer: "Person must be at least 15 years old to operate Class 3 electric bicycle. Class 3 = electric bicycle equipped with motor assisting only when pedaling, with top assisted speed >20 but <28 mph. Electric bicycles exempt from Subtitles A (registration), B (license), D (insurance), and Chapter 551A.",
            objective: "22.18",
            module: "6"
        },

        // MOTOR-ASSISTED SCOOTERS
        {
            id: 627,
            category: "low-powered-vehicles",
            difficulty: "intermediate",
            question: "What defines motor-assisted scooters per TRC 551.351?",
            answer: "Self-propelled device with: (1) at least two wheels contacting ground, (2) braking system, (3) gas/electric motor not exceeding 40 cubic centimeters, (4) deck for standing/sitting, (5) ability to be propelled by human power alone. May operate on streets ≤35 mph, sidewalks, bike paths. Treated like bicycles.",
            objective: "22.18",
            module: "6"
        },

        // POCKET BIKES
        {
            id: 628,
            category: "low-powered-vehicles",
            difficulty: "intermediate",
            question: "What defines pocket bikes and where may they operate per TRC 551.351-353?",
            answer: "Pocket bike/minimotorbike: self-propelled vehicle with electric motor/combustion engine <50cc, ≤2 wheels contacting ground, seat/saddle, NOT designed for highway use, ineligible for title. NOT authorized on any highway, road, street, bike path, or sidewalk. Private property/off-road only.",
            objective: "22.18",
            module: "6"
        },

        // GOLF CARTS (Additional Detail)
        {
            id: 629,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What golf cart license plate requirements exist per TRC 551.402?",
            answer: "DMV cannot register golf carts like normal vehicles. Golf cart license plate required for highway operation (except master planned community ≤35 mph). Plate is non-expiring, costs $10, has 'GC' designation. NOT registration - just identifying plate. Required for beach/golf course use, municipal/county ordinance operation.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 630,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What equipment is required for municipal/county golf cart operation per TRC 551.4041?",
            answer: "Equipment for TRC 551.404 operation: (1) headlamps, (2) taillamps, (3) reflectors, (4) parking brake, (5) mirrors. Required when operating under city/county ordinance. Also requires golf cart license plate, insurance, licensed driver. May cross larger highways at intersections even if speed limit >35 mph.",
            objective: "22.18",
            module: "6"
        },

        // OFF-HIGHWAY VEHICLES (Additional Detail)
        {
            id: 631,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What safety certificate requirements apply to OHV operation per TRC 551A.031?",
            answer: "Off-highway vehicle safety certificate required when operating on public off-highway vehicle land or beach. If no certificate, must be under direct supervision of adult with certificate. Certificate NOT required for highway operation. Under 14 years old must have parent/guardian/authorized adult supervision on public OHV land.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 632,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What highway crossing rules apply to OHVs per TRC 551A.034?",
            answer: "NEVER cross interstate or controlled access highway. Can cross divided highway ONLY at intersection. Can cross other highways at non-intersection IF: complete stop before crossing, yield ROW to oncoming traffic, cross at 90-degree angle where no obstructions, headlights/taillights activated.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 633,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What agricultural/utility OHV operation requirements exist per TRC 551A.057?",
            answer: "Requirements: triangular orange flag ≥6 feet high at rear, headlights/taillights illuminated, daytime operation only, ≤25 miles from origin to destination, driver license and insurance required. NOT required: OHV license plate, helmet, eye protection, safety certification, seatbelts. No interstate/limited-access highways.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 634,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What law enforcement OHV operation requirements exist per TRC 551A.058?",
            answer: "For peace officers/emergency services performing official duties: triangular orange flag ≥6 feet high, headlights/taillights illuminated, ≤10 miles from origin to destination, driver license required. NOT required: OHV license plate. No interstate/limited-access highways. Includes law enforcement, firefighting, ambulance, medical, emergency services.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 635,
            category: "low-powered-vehicles",
            difficulty: "intermediate",
            question: "What passenger restrictions apply to OHVs per TRC 551A.074?",
            answer: "Cannot carry passenger on OHV operated on public off-highway vehicle land, beach, or highway UNLESS vehicle is designed by manufacturer to transport passenger. Must be factory-designed for passengers, not aftermarket modifications. Applies to all OHV operation on public land/highways.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 636,
            category: "low-powered-vehicles",
            difficulty: "intermediate",
            question: "What reckless operation prohibitions apply to OHVs per TRC 551A.073?",
            answer: "Cannot operate OHV on public off-highway vehicle land or beach in careless/reckless manner endangering, injuring, or damaging person/property. Specific to off-highway land/beach operation. For highway operation, charge 'Reckless Driving' (545.401) like any vehicle. Officer must articulate what was careless/reckless.",
            objective: "22.18",
            module: "6"
        },

        // MODULE 6 REVIEW QUESTIONS FROM HANDOUT
        {
            id: 650.1,
            category: "vehicle-inspections",
            difficulty: "intermediate",
            question: "Which vehicles require annual safety inspection: 30-day permit, 144-hour permit, farm trailer 10,000 lbs, trailer 10,000 lbs, trailer 7,500 lbs, trailer 7,501 lbs, antique plates, machinery plates, dealer temporary tag?",
            answer: "REQUIRE inspection: trailer 7,501 lbs (>7,500 threshold). EXEMPT: 30-day permit, 144-hour permit, farm trailer 10,000 lbs, trailer 10,000 lbs, trailer 7,500 lbs (≤7,500), antique plates, machinery plates, dealer temporary tag. Key threshold: trailers >7,500 lbs require inspection.",
            objective: "22.17", 
            module: "6"
        },
        {
            id: 650.2,
            category: "collisions",
            difficulty: "basic",
            question: "True or False: A driver is required to immediately stop at scene of collision any time they are involved in crash with another vehicle that is attended by a person, even if other person is not injured.",
            answer: "TRUE. Per TRC 550.021, operator of vehicle involved in accident resulting in injury/death OR damage to attended vehicle shall immediately stop at scene or return immediately to scene.",
            objective: "22.30",
            module: "6"
        },
        {
            id: 650.3,
            category: "collisions",
            difficulty: "basic",
            question: "An operator who strikes an unattended vehicle and flees the scene commits a Class C Misdemeanor if the damage is:",
            answer: "Less than $200. Per TRC 550.024, offense is Class C if damage <$200, Class B if damage ≥$200. Must leave note with required information or attempt to locate owner.",
            objective: "22.30",
            module: "6"
        },
        {
            id: 650.4,
            category: "collisions",
            difficulty: "basic",
            question: "An operator who strikes a highway fixture and flees scene commits Class B Misdemeanor if damage is:",
            answer: "$200 or more. Per TRC 550.025, striking highway fixture/landscaping is Class B Misdemeanor if damage ≥$200. Must notify owner or operator of highway/landscaping.",
            objective: "22.30",
            module: "6"
        },
        {
            id: 650.5,
            category: "collisions",
            difficulty: "basic",
            question: "A peace officer who investigates a crash must report the crash to TXDOT not later than:",
            answer: "10th day after the crash. Per TRC 550.062, peace officer shall submit written report to department not later than 10th day after crash involving death, injury, or damage to apparently inoperable vehicle.",
            objective: "22.30",
            module: "6"
        },
        {
            id: 650.6,
            category: "bicycle-operations",
            difficulty: "basic",
            question: "True or False: A person riding a bicycle must abide by all traffic laws except those laws that by their nature cannot apply to a bicycle.",
            answer: "TRUE. Per TRC 551.101, person operating bicycle has all rights and duties applicable to driver of vehicle except those provisions that by their nature cannot apply. Bicycles follow traffic laws.",
            objective: "22.19",
            module: "6"
        },
        {
            id: 650.7,
            category: "low-powered-vehicles",
            difficulty: "basic",
            question: "True or False: If a sidewalk is available, an electric personal assistive mobility device may not be operated in the roadway.",
            answer: "TRUE. Per TRC 551.202(a), person may not operate EPAMD on roadway if sidewalk is available and passable. Must use sidewalk when available.",
            objective: "22.19",
            module: "6"
        },
        {
            id: 650.8,
            category: "low-powered-vehicles",
            difficulty: "basic",
            question: "An electric personal assistive mobility device may only be operated on a roadway with speed limit of _____ or less.",
            answer: "30 MPH or less. Per TRC 551.202(b), EPAMD may not operate on roadway with speed limit >30 MPH.",
            objective: "22.19",
            module: "6"
        },
        {
            id: 650.9,
            category: "low-powered-vehicles",
            difficulty: "basic",
            question: "A motor-assisted scooter may only be operated on a roadway with speed limit of _____ or less.",
            answer: "35 MPH or less. Per TRC 551.352, motor-assisted scooter may not operate on roadway with speed limit >35 MPH.",
            objective: "22.19",
            module: "6"
        },
        {
            id: 650.10,
            category: "low-powered-vehicles",
            difficulty: "intermediate",
            question: "If a Neighborhood Electric Vehicle is registered, it may only be operated at speeds up to _____ and only on roadways with speed limit of _____ or less.",
            answer: "35 MPH speed; 35 MPH or less roadways. Per TRC 551.304, registered NEV limited to 35 MPH operation on roadways with speed limit ≤35 MPH.",
            objective: "22.19",
            module: "6"
        },
        {
            id: 650.11,
            category: "low-powered-vehicles",
            difficulty: "basic",
            question: "True or False: Off-Highway vehicles are designed for off-highway use, therefore they are never permitted to operate on public highways.",
            answer: "FALSE. Per TRC 551A, OHVs may operate on public highways in certain circumstances: master planned communities, beaches, public OHV land, or when used as golf carts within 2 miles of golf course.",
            objective: "22.19",
            module: "6"
        },

        // MODULE 7 FLASHCARDS - TRC Chapters 552-724, HSC Chapter 365: Pedestrians, Financial Responsibility, Size/Weight, Helmets, Privileged Parking, Implied Consent, Litter

        // CHAPTER 552 - PEDESTRIANS
        {
            id: 701,
            category: "pedestrians",
            difficulty: "basic",
            question: "How must pedestrians comply with traffic signals per TRC 552.001?",
            answer: "If no specific pedestrian signal present, pedestrians must comply with red/green traffic signals for other traffic. Green signal = may proceed across roadway in crosswalk. Red or yellow signal = may not enter roadway. Must follow vehicle traffic signals when no pedestrian-specific signals exist.",
            objective: "22.19",
            module: "7"
        },
        {
            id: 702,
            category: "pedestrians",
            difficulty: "intermediate",
            question: "What are pedestrian signal compliance rules per TRC 552.002?",
            answer: "If pedestrian signal present, must comply with it. 'Walk' = may proceed, vehicles must yield ROW. 'Don't Walk' (solid red hand) or 'Wait' (flashing red hand) = may not begin crossing. If already partially crossed when wait signal appears, proceed to sidewalk or safety island.",
            objective: "22.19",
            module: "7"
        },
        {
            id: 703,
            category: "pedestrians",
            difficulty: "advanced",
            question: "What crosswalk right-of-way rules apply per TRC 552.003?",
            answer: "Vehicles must yield ROW to pedestrians in crosswalks when no traffic control signal present. Pedestrians may not suddenly leave curb into crosswalk path of vehicle too close to stop. Vehicles approaching stopped vehicle at crosswalk may not pass. Enhanced penalties if serious bodily injury/death to visually impaired/disabled person: $500 max fine, 30 hours community service.",
            objective: "22.19",
            module: "7"
        },
        {
            id: 704,
            category: "pedestrians",
            difficulty: "intermediate",
            question: "What are pedestrian positioning rules per TRC 552.004-005?",
            answer: "Crosswalk: stay in right half if possible. Outside crosswalk: pedestrian yields ROW to vehicles. Between adjacent signalized intersections: may only cross in crosswalk ('jaywalking' prohibition). TRC 552.005 commonly used in crash investigation when pedestrian struck outside crosswalk.",
            objective: "22.19",
            module: "7"
        },
        {
            id: 705,
            category: "pedestrians",
            difficulty: "intermediate",
            question: "What sidewalk usage requirements exist per TRC 552.006?",
            answer: "If sidewalk available, pedestrian must use sidewalk rather than roadway. If no sidewalk, may walk on roadway but must walk on LEFT side facing traffic unless obstructed/unsafe. Vehicles emerging from alley/building/driveway must yield ROW to pedestrians on sidewalk extending across the access point.",
            objective: "22.19",
            module: "7"
        },
        {
            id: 706,
            category: "pedestrians",
            difficulty: "advanced",
            question: "What solicitation restrictions apply per TRC 552.007?",
            answer: "May not stand in roadway to solicit ride, contribution, employment, or business EXCEPT may solicit charitable contribution if authorized by local authority. Does not apply to shoulder/sidewalk solicitation. IMPORTANT: Several courts held this unconstitutional (1st Amendment). DPS OGC discourages enforcement per 7/14/2023 guidance.",
            objective: "22.19",
            module: "7"
        },
        {
            id: 707,
            category: "pedestrians",
            difficulty: "basic",
            question: "What driver due care requirements exist per TRC 552.008-010?",
            answer: "Must exercise due care to avoid colliding with pedestrians even if vehicle has ROW. Must sound horn and exercise precaution observing child or confused/incapacitated person. Special rules for blind pedestrians: only blind persons may carry white cane, drivers must take precautions near blind pedestrians with canes/assistance animals. Enhanced penalties for injury/death to blind person.",
            objective: "22.19",
            module: "7"
        },

        // ADDITIONAL MODULE 7 REVIEW QUESTION FLASHCARDS
        {
            id: 708.1,
            category: "pedestrians",
            difficulty: "intermediate",
            question: "True or False: A pedestrian does not commit a violation if they begin crossing in a crosswalk after the pedestrian control signal displays a flashing red hand as long as they make it across before the solid red hand is displayed.",
            answer: "FALSE. Per TRC 552.002, pedestrian may not begin crossing when 'Don't Walk' (solid red hand) or 'Wait' (flashing red hand) signals are present. If already partially crossed when wait signal displayed, should proceed to sidewalk or safety island.",
            objective: "22.19",
            module: "7"
        },
        {
            id: 708.2,
            category: "financial-responsibility",
            difficulty: "basic",
            question: "List the five acceptable methods of establishing financial responsibility per TRC 601.051:",
            answer: "1) Motor vehicle liability insurance policy, 2) Surety bond filed under 601.121, 3) $55,000 cash deposit with state comptroller (601.122), 4) $55,000 cash deposit with county judge (601.123), 5) Self-insurance under 601.124 (25+ vehicles).",
            objective: "22.26",
            module: "7"
        },
        {
            id: 708.3,
            category: "financial-responsibility",
            difficulty: "basic",
            question: "True or False: A person must have at least 26 vehicles registered in their name to be a candidate for self-insurance.",
            answer: "FALSE. Per TRC 601.124, person in whose name more than 25 motor vehicles are registered may qualify as self-insurer. So 26 or more vehicles qualifies for self-insurance consideration by DPS.",
            objective: "22.26",
            module: "7"
        },
        {
            id: 708.4,
            category: "size-weight",
            difficulty: "basic",
            question: "What is the maximum width for a vehicle that is not a passenger vehicle per TRC 621.201?",
            answer: "102 inches. Total width including load but excluding safety devices (mirrors don't count). No limitations on load extension left or right as long as overall width ≤102 inches.",
            objective: "22.28",
            module: "7"
        },
        {
            id: 708.5,
            category: "size-weight",
            difficulty: "intermediate",
            question: "List the maximum allowable lengths per TRC 621.203-205:",
            answer: "Motor vehicle: 45 feet. Truck tractor: no limit. Semitrailer (truck-tractor combination): 59 feet. Semitrailer and trailer combination: 28½ feet each. Overall combination generally: 65 feet. Overall combination towed by truck tractor: no overall limit (only individual trailers limited).",
            objective: "22.28",
            module: "7"
        },
        {
            id: 708.6,
            category: "motorcycle-helmets",
            difficulty: "basic",
            question: "List the two ways a person at least 21 years of age could be excepted from motorcycle helmet requirements per TRC 661.003:",
            answer: "1) Completed a motorcycle safety training course, OR 2) Covered by health insurance that will provide for their care if incapacitated by motorcycle-related injury. Both exceptions only apply to those 21+. Under 21 must wear helmet without exception.",
            objective: "22.22",
            module: "7"
        },
        {
            id: 708.7,
            category: "miscellaneous-provisions",
            difficulty: "basic",
            question: "An electric bicycle has a top assisted speed of _____ MPH or less per TRC 664.001:",
            answer: "28 MPH or less. Electric bicycle = bicycle with fully operable pedals, electric motor <750 watts, top assisted speed ≤28 mph. Must be ≥15 years old to operate Class 3 electric bicycle.",
            objective: "22.19",
            module: "7"
        },
        {
            id: 708.8,
            category: "privileged-parking",
            difficulty: "intermediate",
            question: "True or False: A vehicle displaying disabled license plates may park in a disabled parking spot even if the vehicle is not being operated by or for the person with a disability at the time.",
            answer: "FALSE. Per TRC 681.006 and 681.011, vehicle may utilize disabled parking spaces only if operated BY or FOR a disabled person AND displays disabled plate/placard. Both conditions required - not just having the plates.",
            objective: "22.23",
            module: "7"
        },
        {
            id: 708.9,
            category: "privileged-parking",
            difficulty: "basic",
            question: "True or False: A person with a disability may park in a disabled parking spot even if they have not obtained disabled license plates or a disabled parking placard.",
            answer: "FALSE. Per TRC 681.011(b), person commits offense if vehicle is standing in disabled parking space and is not displaying disabled parking plates or placard. Must have proper identification displayed.",
            objective: "22.23",
            module: "7"
        },
        {
            id: 708.10,
            category: "miscellaneous-provisions",
            difficulty: "basic",
            question: "The Texas Driver Responsibility Program was repealed effective when per TRC 708?",
            answer: "September 1, 2019. All DRP surcharge assessments were waived and no future charges assessed. Individuals still responsible for other suspensions, fines, or fees not related to DRP.",
            objective: "22.21",
            module: "7"
        },
        {
            id: 708.11,
            category: "implied-consent",
            difficulty: "intermediate",
            question: "If a DWI suspect refuses to provide a specimen, an officer required to take a mandatory specimen may only take the specimen if the officer:",
            answer: "1) Obtains a warrant directing that specimen be taken, OR 2) Has probable cause to believe exigent circumstances exist. Per Missouri v. McNeely, exigent circumstances very difficult to establish - get warrant.",
            objective: "22.29",
            module: "7"
        },
        {
            id: 708.12,
            category: "implied-consent",
            difficulty: "basic",
            question: "List the five people authorized to take a blood specimen at the request of a peace officer per TRC 724.017:",
            answer: "1) Physician, 2) Qualified technician (e.g., phlebotomist), 3) Registered professional nurse, 4) Licensed vocational nurse, 5) Licensed/certified EMT-intermediate or EMT-paramedic (if authorized by medical director).",
            objective: "22.29",
            module: "7"
        },
        {
            id: 708.13,
            category: "litter",
            difficulty: "basic",
            question: "The level of offense for littering is determined by the:",
            answer: "Weight or volume of the litter. <5 lbs/5 gal = Class C. 5-500 lbs or 5-100 cubic feet = Class B. 500-1000 lbs or 100-200 cubic feet = Class A. ≥1000 lbs or ≥200 cubic feet = State Jail Felony. Previous conviction increases to next level.",
            objective: "22.5",
            module: "7"
        },

        // CHAPTER 552A - DEVICES SUBJECT TO PEDESTRIAN LAWS
        {
            id: 708,
            category: "pedestrians",
            difficulty: "basic",
            question: "How are wheelchair and motorized mobility device operators treated per TRC 552A.0101?",
            answer: "Considered pedestrians. Motorized mobility device = designed for disabled persons transportation with 3+ wheels, battery-powered motor, ≤1 forward gear, not capable of speeds >8 mph. Subject to all pedestrian laws and positioning requirements.",
            objective: "22.19",
            module: "7"
        },

        // CHAPTER 600 - MISCELLANEOUS PROVISIONS
        {
            id: 709,
            category: "miscellaneous-provisions",
            difficulty: "basic",
            question: "What material removal requirements exist per TRC 600.001?",
            answer: "Person who drops/throws destructive/injurious material on highway must immediately remove it or cause removal. Person who removes wrecked/damaged vehicle from highway must remove glass or other injurious substance dropped from the vehicle. Applies to both initial debris and cleanup responsibility.",
            objective: "22.28",
            module: "7"
        },

        // CHAPTER 601 - MOTOR VEHICLE SAFETY RESPONSIBILITY
        {
            id: 710,
            category: "financial-responsibility",
            difficulty: "basic",
            question: "What financial responsibility requirement exists per TRC 601.051?",
            answer: "Cannot operate motor vehicle unless financial responsibility established. Five acceptable forms: (1) motor vehicle liability insurance policy, (2) surety bond (601.121), (3) $55,000 deposit with state comptroller (601.122), (4) $55,000 deposit with county judge (601.123), (5) self-insurance (601.124). Most common is insurance policy.",
            objective: "22.26",
            module: "7"
        },
        {
            id: 711,
            category: "financial-responsibility",
            difficulty: "advanced",
            question: "What vehicles are exempt from financial responsibility per TRC 601.052?",
            answer: "Antique vehicles (≥25 years old for exhibitions/parades only), NEVs operated only per 551.304 (master planned community/beach/golf cart use within 2 miles), golf carts operated only per 551.403 (master planned community/beach/golf within 5 miles), OHVs operated only per 551A Subchapter C/551A.055, volunteer fire department vehicles.",
            objective: "22.26",
            module: "7"
        },
        {
            id: 712,
            category: "financial-responsibility",
            difficulty: "advanced",
            question: "What evidence of financial responsibility is acceptable per TRC 601.053?",
            answer: "Insurance: policy, standard proof card, wireless device image, binder. Surety bond: certificate. State deposit: comptroller certificate. County deposit: county judge certificate. Self-insurance: certificate. Officer must verify through FRVP before citing. 'Unconfirmed' status not probable cause for DPS stop (policy). Phone display doesn't give consent to search phone contents.",
            objective: "22.26",
            module: "7"
        },
        {
            id: 713,
            category: "financial-responsibility",
            difficulty: "advanced",
            question: "What case law applies to financial responsibility enforcement?",
            answer: "Sanchez v. State: Officer only asked for insurance, didn't ask about other 4 methods. Conviction overturned - no probable cause established. Must ask about ALL five methods before citing. Citation must indicate officer unable to verify through FRVP database. Owner may provide evidence for employees/immediate family members.",
            objective: "22.26",
            module: "7"
        },
        {
            id: 714,
            category: "financial-responsibility",
            difficulty: "intermediate",
            question: "What are financial responsibility violation penalties per TRC 601.191?",
            answer: "First offense: fine $175-$350. Previous conviction: fine $350-$1,000. Indigent first offender: court may lower fine. Defenses: had coverage at time of offense (601.193), vehicle possessed solely for maintenance/repair (601.194). Must include FRVP verification failure notation on citation.",
            objective: "22.26",
            module: "7"
        },

        // CHAPTER 621 - SIZE AND WEIGHT
        {
            id: 715,
            category: "size-weight",
            difficulty: "intermediate",
            question: "What registration requirements apply to heavy vehicles per TRC 621.002?",
            answer: "Commercial motor vehicle, truck-tractor, trailer, or semitrailer must carry registration receipt when on public highway. Must present to authorized officer on request. Commercial motor vehicle = motor vehicle (not motorcycle) designed/used for property transportation/delivery. Different definition than other chapters - not weight-based.",
            objective: "22.28",
            module: "7"
        },
        {
            id: 716,
            category: "size-weight",
            difficulty: "advanced",
            question: "What weight limitations apply per TRC 621.101?",
            answer: "Single axle: ≤20,000 lbs. Tandem axle: ≤34,000 lbs. Overall gross on 2+ consecutive axles: ≤80,000 lbs or formula calculation. Cannot operate with tire weight exceeding sidewall specification unless under special permit. Violation to exceed limits without permit.",
            objective: "22.28",
            module: "7"
        },
        {
            id: 717,
            category: "size-weight",
            difficulty: "intermediate",
            question: "What width limitations apply per TRC 621.201?",
            answer: "Passenger vehicle: ≤96 inches including load, may extend 3 inches left/6 inches right of fenders if total ≤96 inches. Other vehicles: ≤102 inches including load but excluding safety devices (mirrors don't count). No left/right extension limits if total ≤102 inches.",
            objective: "22.28",
            module: "7"
        },
        {
            id: 718,
            category: "size-weight",
            difficulty: "advanced",
            question: "What length limitations apply per TRC 621.203-205?",
            answer: "Motor vehicle (not truck-tractor): ≤45 feet. Truck-tractor: no limit. Semitrailer with truck-tractor: ≤59 feet. Semitrailer/trailer combination: ≤28.5 feet each. Overall combination: ≤65 feet. Vehicle <2,500 lbs: max one other vehicle/towing device. Vehicle ≥2,500 lbs: may couple with towing device + one vehicle.",
            objective: "22.28",
            module: "7"
        },
        {
            id: 719,
            category: "size-weight",
            difficulty: "intermediate",
            question: "What load extension and height limits apply per TRC 621.206-207?",
            answer: "Load extension: ≤3 feet front, ≤4 feet rear (unless excepted by law). Exception: trailer may carry motor vehicle extending ≤7 feet rear if designed for rear carry, used for loading/unloading, meets federal regulations. Height: ≤14 feet. Operator of vehicle >13'6\" must ensure clearance through structures.",
            objective: "22.28",
            module: "7"
        },

        // CHAPTER 661 - MOTORCYCLE HELMETS
        {
            id: 720,
            category: "motorcycle-helmets",
            difficulty: "basic",
            question: "What helmet requirements exist per TRC 661.003?",
            answer: "Under 21: helmet required without exception. 21+: exempt if (1) completed motorcycle safety training course OR (2) covered by health insurance for motorcycle injuries. DOT-approved helmet required (DOT sticker on back). Passengers without helmets violate, operator may also be cited for carrying unhelmeted passengers.",
            objective: "22.22",
            module: "7"
        },

        // CHAPTER 622 - SPECIAL PROVISIONS AND EXCEPTIONS
        {
            id: 721.5,
            category: "size-weight",
            difficulty: "advanced",
            question: "What width exceptions exist per TRC 622.901 for special vehicles?",
            answer: "Highway building/maintenance machinery (daylight on non-interstate or ≤50 miles on interstate). Farm vehicles (daylight on non-interstate or ≤50 miles on interstate). Water well drilling machinery (daylight on non-interstate or ≤50 miles on interstate). Fire department vehicles. Fertilizer vehicles registered under 502.431. RV appurtenances extending ≤6 inches beyond fender.",
            objective: "22.28",
            module: "7"
        },
        {
            id: 721.6,
            category: "size-weight", 
            difficulty: "advanced",
            question: "What length exceptions exist per TRC 622.902 for special vehicles?",
            answer: "Water well drilling machinery. Fire department vehicles. Municipal vehicles in territory. Oil/gas construction equipment. Drive-away saddle mount combinations (≤97 ft, ≤3 vehicles). Tow truck combinations to nearest repair. Harvest machine transport (≤75 ft interstate, ≤81.5 ft other roads). Towaway trailer combinations (≤82 ft).",
            objective: "22.28",
            module: "7"
        },

        // CHAPTER 664 - ELECTRIC BICYCLES
        {
            id: 721.7,
            category: "miscellaneous-provisions",
            difficulty: "basic",
            question: "How is an electric bicycle defined per TRC 664.001?",
            answer: "Bicycle with fully operable pedals, electric motor <750 watts, and top assisted speed ≤28 mph. Three classes exist depending on design/operational specs. Must be ≥15 years old to operate Class 3 electric bicycle per 551.107.",
            objective: "22.19",
            module: "7"
        },

        // CHAPTER 708 - DRIVER RESPONSIBILITY PROGRAM
        {
            id: 721.8,
            category: "miscellaneous-provisions",
            difficulty: "basic",
            question: "What is the status of the Driver Responsibility Program per TRC 708?",
            answer: "Program repealed effective September 1, 2019. All DRP surcharge assessments waived and no future charges assessed. Individuals still responsible for other suspensions, fines, or fees not related to DRP. Previously authorized DPS to assess surcharges for certain traffic offenses.",
            objective: "22.21",
            module: "7"
        },
        {
            id: 721,
            category: "motorcycle-helmets",
            difficulty: "intermediate",
            question: "How are autocycles treated for helmet purposes per TRC 661.0015?",
            answer: "Treat autocycles like motorcycles UNLESS fully or partially enclosed. Fully/partially enclosed autocycles not subject to helmet laws. Open autocycles follow same helmet rules as motorcycles - under 21 must wear helmet, 21+ exempt with training or insurance.",
            objective: "22.22",
            module: "7"
        },

        // CHAPTER 681 - PRIVILEGED PARKING
        {
            id: 722,
            category: "privileged-parking",
            difficulty: "advanced",
            question: "What disabled parking requirements exist per TRC 681.006-008?",
            answer: "Vehicle may use disabled parking if operated by/for disabled person AND displays disabled plate/placard. Exempt from parking meter fees. Does not allow parking where prohibited. Disabled Veteran plates: only privileged if bearing international symbol of access (changed 1/1/22). Placards: blue=permanent, red=temporary.",
            objective: "22.23",
            module: "7"
        },
        {
            id: 723,
            category: "privileged-parking",
            difficulty: "advanced",
            question: "What disabled parking violations and penalties exist per TRC 681.011?",
            answer: "Violations: (1) displaying disabled plate/placard but not operated by/for disabled person, (2) in disabled space without plate/placard, (3) blocking architectural improvements, (4) lending placard illegally. 'Standing' required (not temporary passenger pickup). Fine: $500-$750. Enhanced for subsequent convictions. Vehicle owner presumed responsible.",
            objective: "22.23",
            module: "7"
        },
        {
            id: 724,
            category: "privileged-parking",
            difficulty: "advanced",
            question: "What placard seizure authority exists per TRC 681.012?",
            answer: "Officer SHALL seize placard if violation under 681.011(a)/(d) occurs in presence (using/lending placard illegally). Within 48 hours: determine if probable cause existed. If no PC: promptly return. If PC found: destroy within 5 days and notify department. Only applies to placards, not license plates. Seized placard considered revoked.",
            objective: "22.23",
            module: "7"
        },

        // CHAPTER 683 - ABANDONED VEHICLES
        {
            id: 725,
            category: "abandoned-vehicles",
            difficulty: "intermediate",
            question: "What defines abandoned motor vehicle per TRC 683.002?",
            answer: "Six circumstances: (1) inoperable, >5 years old, unattended on public property >48 hours, (2) illegally on public property >48 hours, (3) on private property without consent >48 hours, (4) unattended on highway ROW >48 hours, (5) unattended on turnpike ROW >24 hours, (6) CMV impounded for unpaid fees at storage >10 days.",
            objective: "22.24",
            module: "7"
        },
        {
            id: 726,
            category: "abandoned-vehicles",
            difficulty: "basic",
            question: "What authority exists for abandoned vehicles per TRC 683.011-012?",
            answer: "Law enforcement may take abandoned motor vehicle into custody per 683.002 criteria. Must send notice to last known owner/lienholder no later than 10th day after taking custody. Notice ensures owner opportunity to reclaim before disposal/auction.",
            objective: "22.24",
            module: "7"
        },

        // CHAPTER 724 - IMPLIED CONSENT
        {
            id: 727,
            category: "implied-consent",
            difficulty: "advanced",
            question: "What implied consent requirements exist per TRC 724.011-012?",
            answer: "Arrested for DWI/BWI/DUI-minor = deemed consented to breath/blood specimen. MAY request specimen normally. SHALL require blood if: arrest + refusal + crash + reasonable belief death/serious bodily injury will result. SHALL require breath/blood if: arrest + refusal + (bodily injury requiring transport OR DWI w/child OR prior Intox convictions OR 2+ prior DWI).",
            objective: "22.29",
            module: "7"
        },
        {
            id: 728,
            category: "implied-consent",
            difficulty: "advanced",
            question: "What warrant requirements apply per TRC 724.012(e) and case law?",
            answer: "Cannot require specimen without: (1) warrant OR (2) probable cause of exigent circumstances. Missouri v. McNeely: inadequate exigency without warrant consideration of magistrate availability, alcohol metabolism, officer assistance. Texas follows McNeely. Exigent circumstances very difficult to establish - get warrant.",
            objective: "22.29",
            module: "7"
        },
        {
            id: 729,
            category: "implied-consent",
            difficulty: "advanced",
            question: "Who may take blood specimens per TRC 724.017?",
            answer: "Five authorized persons: (1) physician, (2) qualified technician (phlebotomist), (3) registered professional nurse, (4) licensed vocational nurse, (5) EMT-intermediate/paramedic (if authorized by medical director). Must be taken in sanitary place. EMT draw: officer must observe and immediately take possession. Civil immunity if proper procedures followed.",
            objective: "22.29",
            module: "7"
        },
        {
            id: 730,
            category: "implied-consent",
            difficulty: "advanced",
            question: "What refusal procedures apply per TRC 724.031-032?",
            answer: "Refusal: request signed statement on DIC-24 (consequences/refusal acknowledgment). Officer duties: (1) serve DIC-25 suspension notice, (2) submit DIC-23 written refusal report within 5 business days. Defense available if had valid coverage at time of offense. Additional specimen allowed within 2 hours if requested.",
            objective: "22.29",
            module: "7"
        },

        // HSC CHAPTER 365 - LITTER
        {
            id: 731,
            category: "litter",
            difficulty: "basic",
            question: "How are litter and disposal defined per HSC 365.011?",
            answer: "Dispose/dump = discharge, deposit, inject, spill, leak, or place litter on/into land or water. Litter = (A) decayable waste from establishments/residences (not sewage/body waste/industrial), (B) nondecayable solid waste: combustible (paper, rags, wood, plastics), noncombustible (glass, cans, metal), discarded manufactured materials (vehicles, tires, appliances, scrap metal).",
            objective: "22.5",
            module: "7"
        },
        {
            id: 732,
            category: "litter",
            difficulty: "advanced",
            question: "What litter penalties exist per HSC 365.012?",
            answer: "Offense levels by weight/volume: <5 lbs/5 gallons = Class C. >5 lbs but <500 lbs OR >5 gallons but <100 cubic feet = Class B. ≥500 lbs but <1000 lbs OR ≥100 but <200 cubic feet = Class A. ≥1000 lbs OR ≥200 cubic feet = State Jail Felony. Discarding lighted material causing fire = Class B. Prior conviction increases to next level.",
            objective: "22.5",
            module: "7"
        }
    ],

    practiceQuestions: [
        // MODULE 1 REVIEW QUESTIONS - Complete Set from Student Handout
        {
            id: 1,
            category: "warning-devices",
            difficulty: "basic",
            question: "A person who drives around a barricade that has been placed because water is over the roadway commits a Class B Misdemeanor.",
            options: ["True", "False"],
            correct: 0,
            explanation: "True. Per TRC 472.022, disregarding barricades placed due to water over the roadway is enhanced to a Class B Misdemeanor.",
            objective: "22.27",
            module: "1"
        },
        {
            id: 2,
            category: "registration",
            difficulty: "basic",
            question: "How many days does a new state resident have to register their vehicles in Texas?",
            options: ["10 days", "20 days", "30 days", "60 days"],
            correct: 2,
            explanation: "30 days. Per TRC 502.040, a new state resident has 30 days to register their vehicle in Texas.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 3,
            category: "registration",
            difficulty: "intermediate",
            question: "DMV may register an off-highway vehicle owned by the state, a county, or a municipality, however a private individual is not permitted to register an off-highway vehicle.",
            options: ["True", "False"],
            correct: 0,
            explanation: "True. Per TRC 502.140, only governmental entities may register off-highway vehicles for highway use. Private individuals cannot register them.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 4,
            category: "registration",
            difficulty: "basic",
            question: "A farm trailer with a gross weight of less than 4,000 pounds is not required to display a license plate.",
            options: ["True", "False"],
            correct: 0,
            explanation: "True. Per TRC 502.146, farm trailers under 4,000 pounds gross weight are exempt from license plate requirements.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 5,
            category: "registration",
            difficulty: "intermediate",
            question: "A professional rodeo cowboy operating a pick-up and trailer bearing farm license plates on his way to the rodeo commits a violation because he is engaged in gainful employment.",
            options: ["True", "False"],
            correct: 0,
            explanation: "True. Farm plates may only be used for agricultural purposes, not commercial activities like professional rodeo.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 6,
            category: "registration",
            difficulty: "basic",
            question: "An expired registration certificate does not become a violation of the law until after how long?",
            options: ["Immediately upon expiration", "5 working days", "10 working days", "30 days"],
            correct: 1,
            explanation: "5 working days. Per TRC 502.407, there is a 5 working day grace period after expiration.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 7,
            category: "dealer-plates",
            difficulty: "basic",
            question: "Where is a metal dealer license plate required to be displayed?",
            options: ["Front of vehicle", "Rear of vehicle", "Either front or rear", "Both front and rear"],
            correct: 1,
            explanation: "Rear of vehicle. Per TRC 503.061, metal dealer plates must be displayed on the rear of the vehicle.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 8,
            category: "dealer-plates",
            difficulty: "intermediate",
            question: "A dealer temporary tag may be used when a vehicle is being road tested by a prospective buyer.",
            options: ["True", "False"],
            correct: 0,
            explanation: "True. Per TRC 503.062, dealer temporary tags may be used for test drives by prospective buyers.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 9,
            category: "dealer-plates",
            difficulty: "intermediate",
            question: "A dealer temporary tag may be used when a dealer is loaning a vehicle to a person while the person's own vehicle is being repaired.",
            options: ["True", "False"],
            correct: 0,
            explanation: "True. Per TRC 503.062, dealer temporary tags may be used for loaner vehicles while customer vehicle is being repaired.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 10,
            category: "dealer-plates",
            difficulty: "basic",
            question: "A buyer's temporary tag is valid for a maximum of how many days?",
            options: ["20 days", "30 days", "60 days", "90 days"],
            correct: 2,
            explanation: "60 days. Per TRC 503.063, buyer temporary tags are valid for a maximum of 60 days.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 11,
            category: "dealer-plates",
            difficulty: "intermediate",
            question: "A dealership may issue a second buyer's temporary tag for a vehicle if the first tag expires before regular license plates are issued for a vehicle.",
            options: ["True", "False"],
            correct: 1,
            explanation: "False. Per TRC 503.063, only one buyer temporary tag may be issued per vehicle transaction.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 12,
            category: "license-plates",
            difficulty: "basic",
            question: "Texas license plates may be displayed in the front windshield as long as they are visible and readable from the front of the vehicle.",
            options: ["True", "False"],
            correct: 1,
            explanation: "False. Per TRC 504.943, license plates must be securely fastened to the vehicle, not displayed in windows.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 13,
            category: "license-plates",
            difficulty: "basic",
            question: "A trailer may display its license plate vertically as long as it is visible from the rear of the vehicle.",
            options: ["True", "False"],
            correct: 1,
            explanation: "False. Per TRC 504.943, license plates must be displayed horizontally for vehicles issued two plates. Single-plate vehicles (trailers) may display vertically.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 14,
            category: "license-plates",
            difficulty: "intermediate",
            question: "A person may buy license plates from a non-DMV vendor as long as the license plates display the correct state name and license plate number.",
            options: ["True", "False"],
            correct: 1,
            explanation: "False. Per TRC 504.945, only DMV-issued license plates are legal for display on vehicles.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 15,
            category: "license-plates",
            difficulty: "intermediate",
            question: "A person may display a deceptively similar license plate on the front of their vehicle as long as the DMV issued plate is properly displayed on the rear.",
            options: ["True", "False"],
            correct: 1,
            explanation: "False. Per TRC 504.945, displaying fictitious, altered, or deceptively similar license plates is prohibited.",
            objective: "22.25",
            module: "1"
        },

        // ADDITIONAL COMPREHENSIVE PRACTICE QUESTIONS - Based on Student Handout Content
        
        // PENAL CODE SCENARIOS
        {
            id: 16,
            category: "penal-code",
            difficulty: "intermediate",
            question: "Jim is traveling 60 MPH in a 60 MPH zone, but the roadway is wet and he encounters water. His vehicle hydroplanes and rolls over, killing his passenger. Has Jim committed Manslaughter?",
            options: ["Yes", "No"],
            correct: 1,
            explanation: "No. Although Jim's actions caused death, they were not a 'gross deviation' from ordinary standards of care and Jim was not aware his driving posed substantial risk.",
            objective: "22.30",
            module: "1"
        },
        {
            id: 17,
            category: "penal-code",
            difficulty: "intermediate",
            question: "Jim is speeding while texting in rain on extremely worn tires (1/32' tread). He hydroplanes and his passenger dies. Has Jim committed Criminally Negligent Homicide?",
            options: ["Yes", "No"],
            correct: 0,
            explanation: "Yes. The combination of speeding, texting, rain, and dangerous tires constitutes criminal negligence - Jim should have been aware of the substantial risk.",
            objective: "22.30",
            module: "1"
        },
        {
            id: 18,
            category: "penal-code",
            difficulty: "basic",
            question: "What enhancement applies to TRC 545.157 (failure to move over for emergency vehicles) if bodily injury results?",
            options: ["No enhancement", "Enhanced to Class B Misdemeanor", "Enhanced to Class A Misdemeanor", "Enhanced to State Jail Felony"],
            correct: 1,
            explanation: "Enhanced to Class B Misdemeanor. Bodily injury enhances the offense from Class C to Class B Misdemeanor.",
            objective: "22.2",
            module: "1"
        },
        {
            id: 19,
            category: "penal-code",
            difficulty: "basic",
            question: "Which locations are considered 'public places' for DWI purposes?",
            options: ["Only public roadways", "Streets, highways, and common areas of buildings", "Anywhere with public access", "Only government property"],
            correct: 1,
            explanation: "Streets, highways, and common areas of schools, hospitals, apartment houses, office buildings, transport facilities, and shops per PC 1.07(40).",
            objective: "22.2",
            module: "1"
        },

        // WARNING DEVICES SCENARIOS
        {
            id: 20,
            category: "warning-devices",
            difficulty: "intermediate",
            question: "Can a person be cited for Disregard Warning Sign if they travel more than 40 MPH in a construction zone with a 40 MPH warning sign posted?",
            options: ["Yes", "No"],
            correct: 0,
            explanation: "Yes. The construction speed warning sign meets the definition of warning sign in TRC 472.022. Traveling above the posted speed disregards the warning.",
            objective: "22.27",
            module: "1"
        },
        {
            id: 21,
            category: "warning-devices",
            difficulty: "basic",
            question: "What is the maximum fine for disregarding warning signs in a construction zone without workers present?",
            options: ["$200", "$400", "$500", "$1,000"],
            correct: 0,
            explanation: "$200. Without workers present, it's a standard Class C Misdemeanor. With workers present, the fine is doubled to $400.",
            objective: "22.27",
            module: "1"
        },
        {
            id: 22,
            category: "warning-devices",
            difficulty: "intermediate",
            question: "A motorist fails to stop for a flagger holding a Stop/Slow paddle. What is the appropriate charge?",
            options: ["Disregard Stop Sign", "Disregard Warning Sign", "Fail to Yield", "No violation"],
            correct: 1,
            explanation: "Disregard Warning Sign. A flagger meets the definition of warning sign in TRC 472.022. Do not use Disregard Stop Sign for flagger violations.",
            objective: "22.27",
            module: "1"
        },
        {
            id: 23,
            category: "warning-devices",
            difficulty: "basic",
            question: "Which entities can place warning devices that create violations under TRC 472.021-472.022?",
            options: ["Only the state", "State and counties", "State, political subdivisions, contractors, and public utilities", "Any government entity"],
            correct: 2,
            explanation: "State, political subdivisions, contractors, and public utilities. The device must be placed by one of these authorized entities.",
            objective: "22.27",
            module: "1"
        },

        // REGISTRATION SCENARIOS
        {
            id: 24,
            category: "registration",
            difficulty: "intermediate",
            question: "You stop a vehicle with a registration insignia expiring 5/21 (Monday). Today is 5/28 (next Monday). What is the violation?",
            options: ["No violation yet", "Operation with Expired License Plate", "Operate Unregistered Vehicle", "Display Wrong Registration Insignia"],
            correct: 1,
            explanation: "Operation with Expired License Plate. The 5 working day grace period ended Friday 5/26, so Monday 5/28 is a violation.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 25,
            category: "registration",
            difficulty: "basic",
            question: "Where should the registration insignia be displayed on a motorcycle?",
            options: ["Lower left corner of windshield", "On the license plate", "Upper right corner of windshield", "Anywhere visible"],
            correct: 1,
            explanation: "On the license plate. Motorcycles, trailers, and machinery license plates display the registration insignia on the rear license plate.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 26,
            category: "registration",
            difficulty: "intermediate",
            question: "Joe drives from his property on one side of the road to his property on the other side in an unregistered vehicle. Is this a violation?",
            options: ["Yes", "No"],
            correct: 1,
            explanation: "No. TRC 502.144 allows property owners to cross roads in unregistered vehicles if they own property on both sides.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 27,
            category: "registration",
            difficulty: "intermediate",
            question: "Joe drives from his property across the road to a gas station in an unregistered vehicle. Is this a violation?",
            options: ["Yes", "No"],
            correct: 0,
            explanation: "Yes. TRC 502.144 only allows crossing between properties owned by the same person, not traveling to other locations.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 28,
            category: "registration",
            difficulty: "basic",
            question: "How are autocycles treated for driver's license purposes?",
            options: ["Like motorcycles", "Like cars", "Special autocycle license required", "Commercial license required"],
            correct: 1,
            explanation: "Like cars. Per TRC 521.085, autocycles are treated like passenger vehicles for driver's license purposes.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 29,
            category: "registration",
            difficulty: "intermediate",
            question: "A farm trailer is loaded with corn on the way to the processing plant. Is this a proper use of farm trailer plates?",
            options: ["Yes", "No"],
            correct: 0,
            explanation: "Yes. Transporting agricultural products to processing facilities is an authorized use of farm trailer plates.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 30,
            category: "registration",
            difficulty: "intermediate",
            question: "A farm trailer is loaded with furniture because the farmer is moving to a new house. Is this a proper use of farm trailer plates?",
            options: ["Yes", "No"],
            correct: 1,
            explanation: "No. Farm trailer plates may only be used for agricultural purposes, equine activities, or livestock shows - not personal moving.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 31,
            category: "registration",
            difficulty: "basic",
            question: "What is required to obtain a farm trailer license plate per TRC 502.146(h)?",
            options: ["Proof of vehicle ownership", "Proof of farm ownership via comptroller distinguishing number", "Agricultural business license", "County registration"],
            correct: 1,
            explanation: "Proof of farm ownership by way of a distinguishing number issued by the comptroller.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 32,
            category: "registration",
            difficulty: "intermediate",
            question: "A professional rodeo cowboy with a farm truck hauling rodeo equipment. Is this a proper use of farm truck plates?",
            options: ["Yes", "No"],
            correct: 1,
            explanation: "No. Farm truck plates cannot be used for gainful employment outside farming/ranching, even for equine activities when done professionally for pay.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 33,
            category: "registration",
            difficulty: "basic",
            question: "A farmer driving his farm truck to church. Is this a proper use of farm truck plates?",
            options: ["Yes", "No"],
            correct: 0,
            explanation: "Yes. TRC 502.433 specifically allows farm truck plates for attending church, school, medical visits, and other necessities of home/family.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 34,
            category: "registration",
            difficulty: "intermediate",
            question: "What type of permit allows a vehicle to be transported only (no passengers or property) from point to point?",
            options: ["30-Day Permit", "One-Trip Permit", "72-Hour Permit", "Temporary Transit Permit"],
            correct: 1,
            explanation: "One-Trip Permit. Valid max 15 days, costs $5, vehicle transport only, no inspection required.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 35,
            category: "registration",
            difficulty: "basic",
            question: "What happens to a vehicle's permit eligibility if it's been apprehended for a registration violation?",
            options: ["No effect", "30-day waiting period", "No longer eligible for 72/144 hour permits", "Must pay double fee"],
            correct: 2,
            explanation: "No longer eligible for 72/144 hour permits. Per TRC 502.094(f), apprehended vehicles cannot receive these permits.",
            objective: "22.25",
            module: "1"
        },

        // DEALER PLATES SCENARIOS
        {
            id: 36,
            category: "dealer-plates",
            difficulty: "intermediate",
            question: "A dealer uses a metal dealer plate on a vehicle for a personal vacation road trip. Is this a violation?",
            options: ["Yes", "No"],
            correct: 1,
            explanation: "No. Metal dealer plates may be used for personal use as long as the vehicle is the type the dealer is licensed to sell and other requirements are met.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 37,
            category: "dealer-plates",
            difficulty: "intermediate",
            question: "A dealer uses a dealer temporary tag on a vehicle for a personal vacation road trip. Is this a violation?",
            options: ["Yes", "No"],
            correct: 0,
            explanation: "Yes. Per TRC 503.068(a), dealer temporary tags may not be used for personal use.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 38,
            category: "dealer-plates",
            difficulty: "basic",
            question: "Does a vehicle with dealer temporary tags require a state inspection?",
            options: ["Yes", "No"],
            correct: 1,
            explanation: "No. Dealer temporary tags do not require state inspection. Only buyer temporary tags require inspection.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 39,
            category: "dealer-plates",
            difficulty: "intermediate",
            question: "A customer's vehicle is at the dealership for repairs and they're given a loaner with a dealer temporary tag. Is this proper use?",
            options: ["Yes", "No"],
            correct: 0,
            explanation: "Yes. Per TRC 503.062, dealer temporary tags may be used for loaner vehicles while customer's vehicle is being repaired.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 40,
            category: "dealer-plates",
            difficulty: "intermediate",
            question: "What is the penalty for unauthorized production of temporary tags per TRC 503.094?",
            options: ["Class C Misdemeanor", "Class B Misdemeanor", "Class A Misdemeanor", "State Jail Felony"],
            correct: 3,
            explanation: "State Jail Felony. Producing or reproducing temporary tags for unauthorized distribution is a State Jail Felony.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 41,
            category: "dealer-plates",
            difficulty: "basic",
            question: "Who has the responsibility to properly display a buyer's temporary tag?",
            options: ["Only the dealer", "Only the buyer", "Both dealer and buyer", "DMV"],
            correct: 2,
            explanation: "Both dealer and buyer. TRC requires dealer to properly display upon issuance, but case law (Pabst v. State) extends responsibility to driver after leaving dealership.",
            objective: "22.25",
            module: "1"
        },

        // LICENSE PLATES SCENARIOS
        {
            id: 42,
            category: "license-plates",
            difficulty: "basic",
            question: "A vehicle displays a current registration sticker and rear Texas plate, but no front plate. Is this a violation?",
            options: ["Yes", "No"],
            correct: 0,
            explanation: "Yes. Vehicles issued two license plates must display both front and rear per TRC 504.943.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 43,
            category: "license-plates",
            difficulty: "basic",
            question: "A trailer's license plate is mounted 11 inches from the roadway surface. Is this a violation?",
            options: ["Yes", "No"],
            correct: 0,
            explanation: "Yes. License plates must be displayed not less than 12 inches from the ground per TRC 504.943.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 44,
            category: "license-plates",
            difficulty: "intermediate",
            question: "A vehicle displays a normal DMV plate on rear and European-style plate (not DMV issued) on front. Is this a violation?",
            options: ["Yes", "No"],
            correct: 0,
            explanation: "Yes. This would be displaying a deceptively similar license plate per TRC 504.946, as the European plate was not issued by DMV.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 45,
            category: "license-plates",
            difficulty: "basic",
            question: "Which of these items can obstruct a license plate without creating a violation?",
            options: ["Custom license plate frame", "Trailer hitch installed normally", "Decorative stickers", "Tinted cover"],
            correct: 1,
            explanation: "Trailer hitch installed normally. Per TRC 504.945(c), trailer hitches installed in normal/customary manner do not constitute violations.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 46,
            category: "license-plates",
            difficulty: "intermediate",
            question: "A person uses antique license plates on a 30-year-old vehicle for daily commuting to work. Is this a violation?",
            options: ["Yes", "No"],
            correct: 0,
            explanation: "Yes. Per TRC 504.941, antique plates may only be used for exhibitions, club activities, parades, and public interest functions - not regular transportation.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 47,
            category: "license-plates",
            difficulty: "basic",
            question: "How many license plates are required for antique vehicles?",
            options: ["One (front)", "One (rear)", "Two (front and rear)", "Depends on vehicle type"],
            correct: 1,
            explanation: "One (rear). Per TRC 504.502(h), only one license plate is required for antique vehicles, displayed on the rear.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 48,
            category: "license-plates",
            difficulty: "intermediate",
            question: "What is the offense level for displaying a fictitious license plate per TRC 504.945?",
            options: ["Class C Misdemeanor", "Class B Misdemeanor", "Class A Misdemeanor", "State Jail Felony"],
            correct: 1,
            explanation: "Class B Misdemeanor. Displaying a fictitious license plate is enhanced to Class B under TRC 504.945(a)(4).",
            objective: "22.25",
            module: "1"
        },
        {
            id: 49,
            category: "license-plates",
            difficulty: "basic",
            question: "When can license plate brackets create a violation?",
            options: ["Never", "When they obscure state name or plate number", "Only if not manufacturer installed", "When made of metal"],
            correct: 1,
            explanation: "When they obscure state name or plate number. Per TRC 504.945(a)(7) and case law, brackets can violate law if they obscure required information.",
            objective: "22.25",
            module: "1"
        },
        {
            id: 50,
            category: "license-plates",
            difficulty: "intermediate",
            question: "What enhancement applies if a person knowingly alters license plate letters/numbers?",
            options: ["Double fine", "Enhanced to Class B Misdemeanor", "Enhanced to Class A Misdemeanor", "State Jail Felony"],
            correct: 1,
            explanation: "Enhanced to Class B Misdemeanor. Any violation of TRC 504.945 can be enhanced to Class B if person knowingly altered identification marks.",
            objective: "22.25",
            module: "1"
        },

        // MODULE 2 PRACTICE QUESTIONS - Based on Module 2 Review Questions
        {
            id: 51,
            category: "licensing",
            difficulty: "basic",
            question: "Which of the following is NOT exempt from the driver license requirement?",
            options: ["Operator of a farm tractor", "Operator of a moped", "Operator of a road machine", "Operator of military vehicle in the scope of military service"],
            correct: 1,
            explanation: "Operator of a moped is NOT exempt. Per TRC 521.027, exemptions include farm tractors, road machines, and military vehicles in scope of service, but mopeds are not listed.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 52,
            category: "licensing",
            difficulty: "basic",
            question: "Unless specifically excepted, a person must hold a driver license to operate a motor vehicle in any public place in the state of Texas.",
            options: ["True", "False"],
            correct: 1,
            explanation: "False. Per TRC 521.021, license is required to operate a motor vehicle on a HIGHWAY, not just any public place. Highway is specifically defined in TRC 541.302.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 53,
            category: "licensing",
            difficulty: "basic",
            question: "When a person moves to Texas from a different state, how many days do they have to obtain a Texas driver's license?",
            options: ["30 days", "60 days", "90 days", "120 days"],
            correct: 2,
            explanation: "90 days. Per TRC 521.029, new residents have 90 days to obtain a Texas license if they are 16+ and hold a valid license from their previous state.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 54,
            category: "licensing",
            difficulty: "basic",
            question: "When a person moves to a new residence in Texas, how many days do they have to update the address information on their driver's license?",
            options: ["10 days", "20 days", "30 days", "60 days"],
            correct: 2,
            explanation: "30 days. Per TRC 521.054, a person must notify the Department within 30 days of moving to a new address or changing their name.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 55,
            category: "licensing",
            difficulty: "basic",
            question: "What is the minimum age to obtain a Texas driver's license?",
            options: ["14 years old", "15 years old", "16 years old", "17 years old"],
            correct: 1,
            explanation: "15 years old. Per TRC 521.201, the Department may not issue a license to anyone under 15 years of age. This is the absolute minimum age for any Texas driver's license.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 56,
            category: "licensing",
            difficulty: "intermediate",
            question: "What class of license is required to operate a pickup with a GVWR of 14,000 pounds towing a travel trailer with a GVWR of 15,000 pounds?",
            options: ["Class C Non-CDL", "Class B Non-CDL", "Class A Non-CDL", "Class A CDL"],
            correct: 2,
            explanation: "Class A Non-CDL. GCWR = 29,000 (over 26,001) AND trailer GVWR = 15,000 (over 10,000), so Class A is required. Not CDL because likely recreational use and exempt under TRC 522.004.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 57,
            category: "commercial-vehicles",
            difficulty: "intermediate",
            question: "What class of license is required to operate a truck tractor in commerce with a GVWR of 54,000 pounds towing a trailer with a GVWR of 10,000 pounds?",
            options: ["Class A CDL", "Class B CDL", "Class C CDL", "Class A Non-CDL"],
            correct: 0,
            explanation: "Class A CDL. This is a combination over 26,001 GCWR with towed unit of exactly 10,000 GVWR (meets the 'more than 10,000' threshold) used in commerce. Requires CDL because it's commercial and not exempt.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 58,
            category: "commercial-vehicles",
            difficulty: "intermediate",
            question: "What class of license is required to operate a bus transporting passengers for hire with a passenger capacity of 26 people, including the driver?",
            options: ["Class A CDL", "Class B CDL", "Class C CDL", "Class B Non-CDL"],
            correct: 1,
            explanation: "Class B CDL. Bus with 24+ passengers requires Class B, and because it's for hire (commercial), it requires CDL. 26 passengers including driver exceeds the 23 passenger limit for Class C.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 59,
            category: "licensing",
            difficulty: "intermediate",
            question: "What are the two circumstances where a person holding an occupational license can be charged with a Class B Misdemeanor?",
            options: ["Driving without court order OR violating restrictions", "Driving outside time limits OR driving wrong vehicle", "Not having insurance OR exceeding speed limit", "Driving to non-essential locations OR lending license"],
            correct: 0,
            explanation: "Driving without certified court order OR violating any specific restriction listed in the court order. Per TRC 521.253, both are Class B Misdemeanors and result in revocation of occupational license.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 60,
            category: "licensing",
            difficulty: "intermediate",
            question: "A habitual violator is defined as receiving how many convictions?",
            options: ["3 in 12 months or 5 in 24 months", "4 in 12 months or 7 in 24 months", "5 in 12 months or 8 in 24 months", "6 in 12 months or 10 in 24 months"],
            correct: 1,
            explanation: "4 or more convictions in 12 months OR 7 or more convictions in 24 months. Per TRC 521.292(3), this excludes weight, width, length, load extension, permit, and seatbelt violations.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 61,
            category: "licensing",
            difficulty: "basic",
            question: "What happens if a person meets the definition of a habitual violator?",
            options: ["They are issued a letter of reprimand", "They must pay an annual surcharge on their license", "Their driver license is suspended", "Their vehicle is impounded"],
            correct: 2,
            explanation: "Their driver license is suspended. Per TRC 521.292 and 521.293, meeting habitual violator definition results in automatic 90-day license suspension by DPS.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 62,
            category: "licensing",
            difficulty: "advanced",
            question: "A person with a suspended driver license causes a traffic crash which results in serious bodily injury to another. At the time of the crash, the person does not have insurance on their vehicle. The person may be charged with DWLI as a:",
            options: ["Class C Misdemeanor", "Class B Misdemeanor", "Class A Misdemeanor", "State Jail Felony"],
            correct: 2,
            explanation: "Class A Misdemeanor. Per TRC 521.457, DWLI is enhanced to Class A when: (1) license is invalid, (2) no financial responsibility, AND (3) crash causes SBI or death.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 63,
            category: "licensing",
            difficulty: "intermediate",
            question: "A person driving with a suspended driver's license who does not have insurance commits what level of DWLI?",
            options: ["Class C Misdemeanor", "Class B Misdemeanor", "Class A Misdemeanor", "State Jail Felony"],
            correct: 1,
            explanation: "Class B Misdemeanor. Per TRC 521.457, DWLI is enhanced to Class B when person is operating without insurance/financial responsibility per TRC 601.191.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 64,
            category: "commercial-vehicles",
            difficulty: "basic",
            question: "A CDL holder operating their personal vehicle may be placed out of service if they have detectable alcohol in their system while driving.",
            options: ["True", "False"],
            correct: 0,
            explanation: "True. CDL holders are subject to stricter standards and can be placed out of service for any detectable alcohol, even when operating personal vehicles.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 65,
            category: "commercial-vehicles",
            difficulty: "basic",
            question: "A person operating a commercial motor vehicle with detectable alcohol in their system shall be placed out of service for 48 hours.",
            options: ["True", "False"],
            correct: 1,
            explanation: "False. While they will be placed out of service, the specific time period may vary and is typically 24 hours, not specifically 48 hours as stated.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 66,
            category: "commercial-vehicles",
            difficulty: "intermediate",
            question: "Which of the following is NOT exempt from the requirement to hold a commercial driver's license?",
            options: ["A person operating a covered farm vehicle", "A person operating a large RV with a GVWR of 30,000 pounds", "A firefighter operating a fire engine with a GVWR of 60,000 pounds", "A person operating a full sized 18-wheeler intrastate and not for compensation"],
            correct: 3,
            explanation: "A person operating an 18-wheeler intrastate and not for compensation is NOT exempt. Per TRC 522.004(7), the exemption is for vehicles operated 'intrastate and not in commerce,' but compensation is not the only factor determining commerce.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 67,
            category: "licensing",
            difficulty: "intermediate",
            question: "You conduct a traffic stop. The driver's normal Texas license is suspended and they provide a certified court order granting an occupational license issued 23 days ago. They haven't completed the occupational license process yet. Is this a violation?",
            options: ["Yes, court order expired", "No, still within 45-day period", "Yes, must have actual license", "Depends on restrictions listed"],
            correct: 1,
            explanation: "No violation. Per TRC 521.249, the court order serves as the occupational license for 45 days, so 23 days is still valid.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 68,
            category: "licensing",
            difficulty: "intermediate",
            question: "A driver with suspended license provides an occupational license but cannot locate the required court order. The driver says it's in their other vehicle. Is this a violation?",
            options: ["No violation if they can produce it later", "Yes, Class C Misdemeanor", "Yes, Class B Misdemeanor", "No violation, occupational license is sufficient"],
            correct: 2,
            explanation: "Yes, Class B Misdemeanor. Per TRC 521.250 and 521.253, must carry certified copy of court order and show to peace officer on request. Failure to do so is Class B Misdemeanor.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 69,
            category: "licensing",
            difficulty: "advanced",
            question: "During a traffic stop at 8:30 PM, a driver with suspended license provides occupational license and court order restricting driving to 6 AM - 5 PM. Is this a violation?",
            options: ["No, minor time violation", "Yes, violate restriction", "Depends on reason for driving", "Officer discretion"],
            correct: 1,
            explanation: "Yes, violation of restriction. Per TRC 521.253, violating any specific restriction in the court order is a Class B Misdemeanor and results in occupational license revocation.",
            objective: "22.7",
            module: "2"
        },
        {
            id: 70,
            category: "licensing",
            difficulty: "basic",
            question: "What types of vehicles can an operator with a Segway (electric personal assistive mobility device) operate without a driver's license?",
            options: ["Any vehicle under 50cc", "Segway only", "Segway and electric bicycles", "No motor vehicles"],
            correct: 1,
            explanation: "Segway only. Per TRC 541.201, motor vehicle definition excludes electric personal assistive mobility devices (Segways), so no license required for Segway operation, but license still required for other motor vehicles.",
            objective: "22.7",
            module: "2"
        },

        // MODULE 3 PRACTICE QUESTIONS - Based on Module 3 Review Questions
        {
            id: 301,
            category: "definitions",
            difficulty: "basic",
            question: "According to TRC 541.001, what is an 'Operator'?",
            options: ["Only the person driving the vehicle", "A person who drives or has physical control of a vehicle", "Only the owner of the vehicle", "A licensed driver only"],
            correct: 1,
            explanation: "A person who drives or has physical control of a vehicle. This includes someone not actively driving but having the ability to control the vehicle (e.g., sitting in driver's seat with keys).",
            objective: "22.2",
            module: "3"
        },
        {
            id: 302,
            category: "definitions",
            difficulty: "intermediate",
            question: "What are the two definitions of 'Bus' per TRC 541.201(3)?",
            options: ["School bus and public bus", "Motor vehicle for >10 passengers OR motor vehicle used for compensation (not taxicab)", "Vehicle over 26,000 lbs OR passenger vehicle", "Commercial vehicle OR private vehicle"],
            correct: 1,
            explanation: "Two definitions: (A) a motor vehicle used to transport persons and designed to accommodate more than 10 passengers, including the operator; OR (B) a motor vehicle, other than a taxicab, designed and used to transport persons for compensation.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 303,
            category: "definitions",
            difficulty: "intermediate",
            question: "To qualify as a 'Business District' per TRC 541.102, what are the requirements?",
            options: ["Buildings within 300 feet occupying 600 feet frontage", "Buildings within 600-foot segment occupying at least 300 feet frontage", "Any commercial area", "Buildings within 1000 feet of highway"],
            correct: 1,
            explanation: "Buildings used for business or industrial purposes are located within a 600-foot segment along the highway and within that segment the buildings occupy at least 300 feet of frontage.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 304,
            category: "general-provisions",
            difficulty: "advanced",
            question: "You're investigating a crash in a private parking lot. Can you cite the driver for 'Backed Without Safety' per TRC 545.415?",
            options: ["Yes, if it's a public parking lot", "No, TRC doesn't apply in parking lots", "Yes, if someone was injured", "No, unless specifically stated otherwise"],
            correct: 3,
            explanation: "No, unless specifically stated otherwise. Per TRC 542.001, provisions of Subtitle C only apply to vehicles operated on highways unless the provision specifically applies to a different place. Parking lots are not highways.",
            objective: "22.6",
            module: "3"
        },
        {
            id: 305,
            category: "general-provisions",
            difficulty: "intermediate",
            question: "Which of these violations CAN be enforced in places other than highways?",
            options: ["Speeding", "Reckless Driving", "Following Too Closely", "Improper Lane Change"],
            correct: 1,
            explanation: "Reckless Driving (TRC 545.401) is one of the exceptions to TRC 542.001 that applies beyond highways. It can be enforced anywhere, including private property.",
            objective: "22.6",
            module: "3"
        },
        {
            id: 306,
            category: "arrest-prosecution",
            difficulty: "intermediate",
            question: "Under TRC 543.002, when may a peace officer stop and detain a person operating a motor vehicle?",
            options: ["Only with reasonable suspicion of a crime", "To check driver's license, license compliance, or vehicle registration", "Only during traffic enforcement campaigns", "Only with a warrant"],
            correct: 1,
            explanation: "A peace officer may stop and detain to determine if: (1) the person has a driver's license as required, (2) the person is operating in compliance with license restrictions, or (3) the motor vehicle is registered as required.",
            objective: "22.6",
            module: "3"
        },
        {
            id: 307,
            category: "traffic-control",
            difficulty: "advanced",
            question: "What happens if a traffic control device doesn't meet the requirements of TRC 544.002?",
            options: ["It's still enforceable", "Person cannot be prosecuted for violating it", "Only warnings can be issued", "It must be removed immediately"],
            correct: 1,
            explanation: "A person may not be prosecuted for violating a traffic control device that does not comply with the requirements for official devices. However, this doesn't prevent prosecution under other applicable laws.",
            objective: "22.6",
            module: "3"
        },

        // ADDITIONAL MODULE 3 PRACTICE QUESTIONS
        {
            id: 308,
            category: "vehicle-definitions",
            difficulty: "intermediate",
            question: "A person 'steering' a vehicle being towed with a tow chain is considered what?",
            options: ["A passenger", "The operator of that vehicle", "Not legally responsible", "A mechanic"],
            correct: 1,
            explanation: "True. The person steering a vehicle being towed is the operator of that vehicle per TRC definitions, making them responsible for compliance with traffic laws.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 309,
            category: "vehicle-definitions",
            difficulty: "intermediate",
            question: "Which is NOT an authorized emergency vehicle?",
            options: ["Police vehicle on routine patrol", "Tissue bank vehicle making emergency delivery", "Private vehicle of volunteer firefighter returning from fire", "Private ambulance parked at restaurant"],
            correct: 3,
            explanation: "Private ambulance parked while paramedics eat is not responding to emergency. Authorized emergency vehicles must be: responding to emergency (volunteer firefighter), making emergency delivery (tissue bank), or inherently emergency (police on patrol).",
            objective: "22.2",
            module: "3"
        },
        {
            id: 310,
            category: "vehicle-definitions",
            difficulty: "advanced",
            question: "What are the two distinct features of a motorcycle per TRC 541.201(9)?",
            options: ["Two wheels and handlebars", "Equipped with saddle/seat for operator AND designed for not more than 3 wheels", "Engine under 1000cc and manual transmission", "Open air and kick starter"],
            correct: 1,
            explanation: "Motorcycle must be: (A) equipped with a saddle or seat for the operator, AND (B) designed to travel on not more than three wheels in contact with the ground.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 311,
            category: "definitions",
            difficulty: "advanced",
            question: "Does the junction of a private drive with a highway constitute an intersection?",
            options: ["Yes, always", "No, never", "Only if marked with signs", "Only if paved"],
            correct: 1,
            explanation: "No. The junction of a private drive with a highway does not constitute an intersection per TRC definitions. Only public roadways create intersections.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 312,
            category: "general-provisions",
            difficulty: "advanced",
            question: "When may fines be doubled in work zones per TRC 542.404?",
            options: ["Any time workers are present", "Only during daytime hours", "When workers are present AND citation states this fact", "Only for speed violations"],
            correct: 2,
            explanation: "Fines may be doubled when workers are present AND the citation states on its face that workers were present. Both conditions required. Excludes inspection, pedestrian, child safety seat, and seatbelt violations.",
            objective: "22.6",
            module: "3"
        },
        {
            id: 313,
            category: "arrest-prosecution",
            difficulty: "advanced",
            question: "Which three offenses require mandatory written notice rather than custody arrest per TRC 543.004?",
            options: ["DWI, Reckless, Speeding", "Speeding, Wireless Device, Open Container", "Speeding, No License, No Insurance", "Reckless, Following Too Close, Speeding"],
            correct: 1,
            explanation: "Officers SHALL issue written notice for: (1) Speeding (545.351, 545.352), (2) Use of Wireless Communication Device (545.4251), (3) Open Container (PC 49.031). Only if violator signs notice.",
            objective: "22.20",
            module: "3"
        },
        {
            id: 314,
            category: "traffic-control",
            difficulty: "advanced",
            question: "What must happen when a traffic signal shows no indication due to malfunction?",
            options: ["Proceed with caution", "Treat as yield sign", "Treat as stop sign", "Call police and wait"],
            correct: 2,
            explanation: "Per TRC 544.007(i), if signal displays no indication (power loss/malfunction), treat as stop sign. Exceptions: pedestrian hybrid beacons and freeway entrance ramp signals require no stop.",
            objective: "22.8",
            module: "3"
        },
        {
            id: 315,
            category: "traffic-control",
            difficulty: "advanced",
            question: "Where must a vehicle stop for a stop sign when there's no stop line or crosswalk?",
            options: ["At the stop sign", "Before the intersection", "At nearest intersecting roadway where driver can see", "10 feet before intersection"],
            correct: 2,
            explanation: "Three locations: (1) at stop line, (2) before crosswalk if no stop line, (3) at nearest intersecting roadway where driver can see if no stop line or crosswalk. NEVER required to stop 'at the stop sign.'",
            objective: "22.8",
            module: "3"
        },

        // MODULE 4 PRACTICE QUESTIONS - Based on Module 4 Review Questions
        {
            id: 401,
            category: "vehicle-operations",
            difficulty: "intermediate",
            question: "A vehicle is traveling 55 MPH in the left lane of a 70 MPH zone with no other traffic present. Is this 'Slower Vehicle Fail to Keep Right'?",
            options: ["Yes, because they're under the speed limit", "No, because there's no other traffic traveling faster", "Yes, if signs are posted", "No, because they're within 15 MPH of limit"],
            correct: 1,
            explanation: "No. Per TRC 545.051(b), for 'Slower Vehicle Fail to Keep Right' to occur, there must be other traffic on the highway traveling faster. With no other traffic present, this violation cannot occur.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 402,
            category: "vehicle-operations",
            difficulty: "advanced",
            question: "A blue vehicle travels alone in the left lane with a 'Left Lane for Passing Only' sign posted. Which violation applies?",
            options: ["Slower Vehicle Fail to Keep Right", "Drove in Left Lane Not Passing", "Both violations", "No violation"],
            correct: 1,
            explanation: "Drove in Left Lane Not Passing. 'Slower Vehicle Fail to Keep Right' requires other traffic traveling faster. 'Left Lane for Passing Only' signs create a specific violation for using the left lane when not passing.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 403,
            category: "passing",
            difficulty: "advanced",
            question: "A blue truck began its pass in a legal passing zone but reaches a solid yellow line before returning to the right. Is this 'Disregard No Passing Zone'?",
            options: ["Yes, because they crossed the solid line", "No, because they started in a legal zone", "Yes, because they didn't complete the pass safely", "No, unless they stay left of center"],
            correct: 0,
            explanation: "Yes. Per TRC 545.055, traveling left of the no passing zone marking (solid yellow line) is prohibited unless making a left turn at an intersection or into a private drive/alley. The pass must be completed before reaching the solid line.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 404,
            category: "passing",
            difficulty: "intermediate",
            question: "What distance requirement applies when passing with oncoming traffic per TRC 545.054?",
            options: ["100 feet", "200 feet", "300 feet", "500 feet"],
            correct: 1,
            explanation: "200 feet. The passing vehicle must return to the right before coming within 200 feet of oncoming vehicles. Word Association: Passing → 200 feet rule.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 405,
            category: "passing",
            difficulty: "intermediate",
            question: "What must happen before a vehicle being passed can be cited for accelerating per TRC 545.053(b)?",
            options: ["The passing vehicle must signal", "An audible signal must be given", "The pass must be completed", "The vehicle must be in the left lane"],
            correct: 1,
            explanation: "An audible signal must be given. Per TRC 545.053(b), the passed vehicle must stay right and not accelerate 'on audible signal.' The signal (likely horn) must be present for a violation to occur.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 406,
            category: "speed",
            difficulty: "basic",
            question: "What are the prima facie speed limits on numbered highways outside urban districts?",
            options: ["65 mph day/60 mph night", "70 mph day/65 mph night", "75 mph day/70 mph night", "60 mph day/55 mph night"],
            correct: 1,
            explanation: "70 mph day/65 mph night. Per TRC 545.352, this applies to numbered highways outside urban districts unless posted otherwise.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 407,
            category: "speed",
            difficulty: "advanced",
            question: "A driver is traveling 45 MPH in a 50 MPH zone during heavy rain and limited visibility. Can they be cited?",
            options: ["No, they're under the speed limit", "Yes, for basic speed rule violation", "No, unless they cause an accident", "Yes, only if signs are posted"],
            correct: 1,
            explanation: "Yes, for basic speed rule violation. Per TRC 545.351(a), an operator may not drive at a speed greater than is reasonable and prudent under existing circumstances, even when under the posted limit.",
            objective: "22.9",
            module: "4"
        },

        // ADDITIONAL MODULE 4 PRACTICE QUESTIONS
        {
            id: 408,
            category: "lane-usage",
            difficulty: "advanced",
            question: "Per Hardin v. State, when does 'Fail to Drive in Single Lane' occur?",
            options: ["Any time tires cross lane lines", "When movement is unsafe", "Both failing to stay in lane AND unsafe movement", "Only during lane changes"],
            correct: 2,
            explanation: "Both violations must occur. Hardin v. State: TRC 545.060(a) uses 'and' between requirements, so both (1) failing to drive entirely within lane AND (2) unsafe movement must be violated for offense.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 409,
            category: "lane-usage",
            difficulty: "advanced",
            question: "When can motorcycles legally ride two abreast per TRC 545.0605 (effective 9/1/23)?",
            options: ["Never allowed", "In single lane but not more than two", "Only on highways", "Only during emergencies"],
            correct: 1,
            explanation: "Motorcycles may ride two abreast in a single lane but not more than two. Lane splitting (operating between lanes) is prohibited. Motorcycles entitled to full use of lane.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 410,
            category: "lane-usage",
            difficulty: "intermediate",
            question: "On a three-lane roadway, what happens when two vehicles try to enter the same middle lane from different sides?",
            options: ["Left vehicle has right-of-way", "Right vehicle has right-of-way", "First to signal has right-of-way", "Both must yield"],
            correct: 0,
            explanation: "Per TRC 545.061, vehicle attempting to enter from right must yield to vehicle attempting to enter from left when changing lanes on roadway with three or more lanes.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 411,
            category: "passing",
            difficulty: "advanced",
            question: "List the five situations where passing (being left of center) is prohibited.",
            options: ["No passing zone, intersection, bridge, hill, curve", "No passing zone, within 100' of intersection/RR crossing, within 100' of bridge/viaduct/tunnel, hill crest/curve with obstructed view within 500', approaching intersection/RR crossing with obstructed view within 500'", "Any solid line, intersection, construction zone, school zone, residential area", "Double yellow, single yellow, white lines, construction zones, urban areas"],
            correct: 1,
            explanation: "Five prohibited times per TRC 545.055-545.056: (1) no passing zone, (2) within 100' of intersection/RR crossing, (3) within 100' of bridge/viaduct/tunnel, (4) hill crest/curve with view obstructed within 500', (5) view obstructed within 500' approaching intersection/RR crossing.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 412,
            category: "turning",
            difficulty: "advanced",
            question: "What is the minimum visibility requirement for U-turns per TRC 545.102?",
            options: ["200 feet", "300 feet", "500 feet", "1000 feet"],
            correct: 2,
            explanation: "500 feet. U-turns permitted but must not be made near curve or crest of grade if visibility is reduced to below 500 feet for vehicle approaching from either direction.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 413,
            category: "signaling",
            difficulty: "advanced",
            question: "Per Mahaffey v. State, when is turn signal NOT required?",
            options: ["Always required when changing direction", "Following curve in roadway or merging into ending lane", "Only at intersections", "During emergency maneuvers"],
            correct: 1,
            explanation: "Following curve in roadway or merging into ending lane doesn't require signal per Mahaffey v. State. Turn means alter from direct course. Following roadway curve or lane ending is direct course.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 414,
            category: "signaling",
            difficulty: "intermediate",
            question: "What distance must turn signals be used for turns per TRC 545.104?",
            options: ["50 feet", "100 feet", "200 feet", "No specific distance"],
            correct: 1,
            explanation: "100 feet. Intent to turn right or left must be signaled for the last 100 feet of movement. Lane changes have no distance requirement but must signal before crossing lines.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 415,
            category: "right-of-way",
            difficulty: "advanced",
            question: "At an open T-intersection, which vehicle has right-of-way?",
            options: ["Vehicle turning left", "Vehicle on terminating road", "Vehicle on through roadway", "Vehicle that arrives first"],
            correct: 2,
            explanation: "Vehicle on through roadway has ROW. Per TRC 545.151(e), at uncontrolled T-intersection, vehicle on roadway terminating must stop and yield to vehicle on through roadway.",
            objective: "22.11",
            module: "4"
        },
        {
            id: 416,
            category: "right-of-way",
            difficulty: "advanced",
            question: "When vehicles approach an open intersection on roads of equal size, what is the rule?",
            options: ["Yield to left", "Yield to vehicle from immediate right if in hazardous proximity", "First to arrive has ROW", "Larger vehicle has ROW"],
            correct: 1,
            explanation: "Per TRC 545.151(d), operator must stop and yield ROW to vehicle approaching from immediate right if vehicle is in hazardous proximity. Both vehicles must stop first.",
            objective: "22.11",
            module: "4"
        },
        {
            id: 417,
            category: "speed",
            difficulty: "intermediate",
            question: "What are the prima facie speed limits on unnumbered county/farm-to-market roads outside urban districts?",
            options: ["55 mph day/50 mph night", "60 mph day/55 mph night", "65 mph day/60 mph night", "70 mph day/65 mph night"],
            correct: 1,
            explanation: "60 mph day/55 mph night per TRC 545.352. Numbered highways are 70/65, urban districts are 30 mph.",
            objective: "22.9",
            module: "4"
        },

        // MODULE 5 PRACTICE QUESTIONS - Based on Module 5 Review Questions
        {
            id: 501,
            category: "emergency-vehicles",
            difficulty: "advanced",
            question: "An authorized emergency vehicle may exceed the speed limit when:",
            options: ["Responding to emergency only", "Pursuing violator, responding to emergency, going to fire alarm, directing traffic, or conducting police escort", "Only with lights and sirens", "Any time while on duty"],
            correct: 1,
            explanation: "Per TRC 546.002, five circumstances allow conduct: responding to emergency, pursuing violator, going to (not from) fire alarm, directing/diverting traffic for public safety, conducting police escort.",
            objective: "22.16",
            module: "5"
        },
        {
            id: 502,
            category: "emergency-vehicles",
            difficulty: "advanced",
            question: "Which emergency vehicle conduct is always permissible regardless of circumstances?",
            options: ["Exceeding speed limit", "Running red lights", "Parking or standing irrespective of TRC provisions", "Disregarding traffic direction rules"],
            correct: 2,
            explanation: "Per TRC 546.001, parking/standing irrespective of TRC provisions is always permissible. Conducts 2-4 (red lights, speed, direction) only permissible under the five 546.002 circumstances.",
            objective: "22.16",
            module: "5"
        },
        {
            id: 503,
            category: "emergency-vehicles",
            difficulty: "intermediate",
            question: "A volunteer firefighter in a private vehicle responding to emergency may:",
            options: ["Use any emergency vehicle privileges", "Only use visual signals (emergency lights)", "Use sirens but not lights", "No special privileges"],
            correct: 1,
            explanation: "Per TRC 546.004(a), volunteer firefighter in private vehicle may engage in 546.001 conduct ONLY when using visual signals (emergency lights). Cannot use other privileges without proper signals.",
            objective: "22.16",
            module: "5"
        },
        {
            id: 504,
            category: "emergency-vehicles",
            difficulty: "advanced",
            question: "When may police operate emergency vehicles without audible/visual signals per TRC 546.004(c)?",
            options: ["Never", "Only during pursuits", "When knowledge would cause suspect to destroy evidence/escape OR traffic conditions would increase collision risk", "Only with supervisor approval"],
            correct: 2,
            explanation: "Two circumstances: (1) responding to emergency/pursuing with probable cause that knowledge would cause suspect to destroy evidence/escape, OR (2) traffic conditions would increase collision potential or extend pursuit duration.",
            objective: "22.16",
            module: "5"
        },
        {
            id: 505,
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "A farm tractor operating on highway is exempt from which equipment requirements?",
            options: ["All Chapter 547 requirements", "All except 547.371 and 547.372", "Only lighting requirements", "No exemptions"],
            correct: 1,
            explanation: "Per TRC 547.002, farm tractors are exempt from Chapter 547 except sections 547.371 and 547.372. Most equipment requirements don't apply.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 506,
            category: "lighting",
            difficulty: "advanced",
            question: "When must vehicle lights be activated per TRC 547.302?",
            options: ["Only at nighttime", "Nighttime OR when visibility insufficient/atmospheric conditions unfavorable so person/vehicle not discernible at 1,000 feet", "Only in bad weather", "Anytime on highway"],
            correct: 1,
            explanation: "Two conditions: (1) nighttime (1/2 hour after sunset to 1/2 hour before sunrise), OR (2) insufficient light/unfavorable atmospheric conditions where person/vehicle not clearly discernible at 1,000 feet ahead.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 507,
            category: "lighting",
            difficulty: "intermediate",
            question: "How many high-intensity lamps (>300 candlepower) may be lighted on the front of a vehicle?",
            options: ["No limit", "Two", "Four", "Six"],
            correct: 2,
            explanation: "Per TRC 547.302(d), not more than four headlamps or lamps projecting beams >300 candlepower may be lighted at one time on front. Only applies when actually lighted while operating.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 508,
            category: "lighting",
            difficulty: "advanced",
            question: "What color must lighting devices mounted on the rear of a vehicle be per TRC 547.303?",
            options: ["Red only", "Red, unless expressly provided otherwise; signaling devices may be red, amber, or yellow", "Any color", "Red or amber only"],
            correct: 1,
            explanation: "Unless expressly provided otherwise, rear lighting devices must be or reflect red. Exception: signaling devices (turn signals) on rear may be red, amber, or yellow.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 509,
            category: "lighting",
            difficulty: "advanced",
            question: "What are the TRC height requirements for taillamps per TRC 547.322?",
            options: ["15-72 inches", "24-54 inches", "12-60 inches", "18-84 inches"],
            correct: 0,
            explanation: "15-72 inches per TRC 547.322. Must be red light visible 1,000 feet from rear. Word Association: TRC Taillamps → 15-72 inches → red → 1000 feet.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 510,
            category: "lighting",
            difficulty: "advanced",
            question: "What distance must license plate lamps illuminate the plate per TRC 547.322(f)?",
            options: ["25 feet", "50 feet", "100 feet", "150 feet"],
            correct: 1,
            explanation: "50 feet. Must emit white light making rear license plate clearly legible at 50 feet from rear. Word Association: TRC LP Lamp → white light → 50 feet.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 511,
            category: "lighting",
            difficulty: "advanced",
            question: "At what distance must stop lamps be visible per TRC 547.323?",
            options: ["200 feet", "300 feet", "500 feet", "1000 feet"],
            correct: 1,
            explanation: "300 feet. Red or amber light visible in normal sunlight at 300 feet from rear when service brake applied. Word Association: TRC stop lamps → two on rear → red or amber → 300 feet.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 512,
            category: "lighting",
            difficulty: "advanced",
            question: "When were high-mounted stop lamps first required on passenger cars per federal standards?",
            options: ["September 1, 1980", "September 1, 1985", "September 1, 1990", "September 1, 1993"],
            correct: 1,
            explanation: "September 1, 1985 for passenger cars. September 1, 1993 for MPVs/trucks/buses <80\" wide and ≤10,000 GVWR. Not required for >10,000 GVWR or ≥80\" wide.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 513,
            category: "lighting",
            difficulty: "advanced",
            question: "What boat trailer lighting exemption applies during daytime per TRC 547.304?",
            options: ["No exemptions", "≤3,000 lbs: no fixed electric lights required; 3,001-4,499 lbs: only stop lamps and turn signals", "All trailers exempt during day", "Only applies at night"],
            correct: 1,
            explanation: "During daytime/good visibility: boat trailers ≤3,000 lbs need no fixed electric lights, 3,001-4,499 lbs need only stop lamps and turn signals. At nighttime, all require full lighting like other trailers.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 514,
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "What is prohibited regarding required lamp effectiveness per TRC 547.320?",
            options: ["Using aftermarket equipment", "Operating vehicle with lamp/device/equipment that impairs effectiveness of required lamp", "Adding extra lights", "Modifying headlights"],
            correct: 1,
            explanation: "Cannot operate vehicle equipped with lamp/device/equipment that impairs effectiveness of required lamp, reflective device, or warning device. Examples: smoked covers, tinted lenses, obstructing stickers.",
            objective: "22.17",
            module: "5"
        },
        // Additional Module 5 questions from student handout review questions
        {
            id: 515,
            category: "lighting",
            difficulty: "intermediate",
            question: "Turn signal lamps must be visible at what distance per TRC 547.324?",
            options: ["200 feet", "300 feet if <80\" wide, 500 feet if ≥80\" wide", "500 feet", "1000 feet"],
            correct: 1,
            explanation: "If vehicle <80\" wide: visible 300 feet front and rear. If ≥80\" wide: visible 500 feet front and rear. White or amber to front, red or amber to rear (TRC allows, but federal standards require amber front).",
            objective: "22.17",
            module: "5"
        },
        {
            id: 516,
            category: "lighting",
            difficulty: "advanced",
            question: "What are the TRC mounting requirements for reflectors per TRC 547.325?",
            options: ["15-60 inches", "15-72 inches", "24-54 inches", "12-60 inches"],
            correct: 0,
            explanation: "15-60 inches per TRC 547.325. At least two red reflectors on rear, visible at night 100-600 feet when in front of lawful lower beam headlamps. Word Association: TRC reflectors → 15-60 inches → at least 2 → red → 100-600 feet.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 517,
            category: "lighting",
            difficulty: "advanced",
            question: "When must high-beam headlamps be dimmed per TRC 547.333?",
            options: ["300 feet approaching from front, 500 feet following", "500 feet approaching from front, 300 feet following", "1000 feet either direction", "Only when other driver flashes lights"],
            correct: 1,
            explanation: "Dim high beams within 500 feet when approaching vehicle from front (meeting), 300 feet when approaching from rear (following). Word Association: dim high beams → 500' meeting → 300' following.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 518,
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "What are the TRC requirements for fog lamps per TRC 547.328?",
            options: ["No more than 2, mounted 12-30 inches, white or yellow", "No more than 4, any height, any color", "Required equipment on all vehicles", "No restrictions"],
            correct: 0,
            explanation: "No more than 2 fog lamps, mounted 12-30 inches, white or yellow color per SAE J583 adopted in DPS Admin Code. May be used with low beam headlamps. Word Association: fog lamps → no more than 2 → 12-30 inches → white or yellow.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 519,
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "What are the requirements for auxiliary driving lamps per TRC 547.330?",
            options: ["No more than 2, 16-42 inches, white, with high beams only", "Unlimited number, any height", "No more than 4, any color", "Prohibited on all vehicles"],
            correct: 0,
            explanation: "No more than 2 auxiliary driving lamps, mounted 16-42 inches, white color, used only with high-beam headlights when high beams are authorized. Word Association: auxiliary driving lamps → no more than 2 → 16-42 inches → white → with high beams only.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 520,
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "What audible distance is required for vehicle horns per TRC 547.501?",
            options: ["100 feet", "200 feet", "300 feet", "500 feet"],
            correct: 1,
            explanation: "Horn must emit sound audible under normal conditions at distance of at least 200 feet. Vehicles may not be equipped with siren, whistle, or bell unless authorized emergency vehicle or commercial theft alarm. Word Association: audible warning device → 200 feet → no siren, whistle, or bell.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 521,
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "Which vehicles must display hazard lamps when stopped on roadway per TRC 547.503?",
            options: ["All vehicles", "Trucks, buses, truck-tractors, trailers ≥80\" wide or 30 feet long", "Only emergency vehicles", "Only commercial vehicles"],
            correct: 1,
            explanation: "Trucks, buses, truck-tractors, trailers, semitrailers, pole trailers ≥80\" wide or 30 feet long must immediately display hazard warning lamps when stopped on roadway/shoulder, unless in urban district, loading passengers, avoiding traffic, complying with officer/signal, or displaying other warning devices.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 522,
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "How long can exhaust emit visible smoke before violation per TRC 547.605?",
            options: ["5 seconds", "10 seconds", "15 seconds", "No time limit"],
            correct: 1,
            explanation: "Violation if vehicle emits visible smoke for 10 seconds or longer, OR emits smoke that remains suspended in air for 10 seconds or longer before dissipating (except when downshifting/lower gears needed for momentum). Word Association: exhaust emission → after 1967 → 10 seconds or longer.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 523,
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "Safety guards/mudflaps must be suspended within how many inches of the ground per TRC 547.606?",
            options: ["6 inches", "8 inches (12 inches with admin code tolerance)", "10 inches", "15 inches"],
            correct: 1,
            explanation: "8 inches per TRC 547.606, but admin code allows 4\" additional tolerance (effectively 12\" when standing still). Must be at least as wide as tires, made of material that stays in place, rigid enough to prevent debris transmission.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 524,
            category: "vehicle-equipment",
            difficulty: "intermediate",
            question: "Which vehicles are exempt from safety guard/mudflap requirements?",
            options: ["Truck-tractors operated alone, pole trailers, recreational vehicles, buses", "No vehicles exempt", "Only emergency vehicles", "Only farm equipment"],
            correct: 0,
            explanation: "Four exemptions: (1) Truck-tractors operated alone, (2) Pole trailers, (3) Recreational vehicles (admin code), (4) Buses (admin code). Other large vehicles with 4+ tires or 2+ super singles on rearmost axle require safety guards/mudflaps.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 525,
            category: "lighting",
            difficulty: "advanced",
            question: "What is required view distance for vehicle mirrors per TRC 547.602?",
            options: ["100 feet", "200 feet", "300 feet", "500 feet"],
            correct: 1,
            explanation: "Mirror must reflect to operator a view of highway for distance of at least 200 feet from rear of vehicle. Word Association: mirror required → 200 foot view.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 526,
            category: "lighting",
            difficulty: "advanced",
            question: "What vehicles require clearance and side marker lamps per TRC 547.352?",
            options: ["All vehicles", "Buses, trucks, trailers, semitrailers ≥80\" wide", "Only commercial vehicles", "Vehicles over 10,000 lbs"],
            correct: 1,
            explanation: "Buses, trucks, trailers, semitrailers ≥80\" wide require: 2 clearance lamps front (amber), 2 clearance lamps rear (red), 4 side marker lamps (2 amber front, 2 red rear), 4 side reflectors, hazard lamps. Also ID lamps required by federal standards.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 527,
            category: "motorcycle-operations",
            difficulty: "advanced",
            question: "When must motorcycle headlamps be illuminated per TRC 547.801?",
            options: ["Only at night", "At all times except motorcycles manufactured before 1975", "Only in bad weather", "Never required"],
            correct: 1,
            explanation: "Motorcycle may not be operated at any time unless at least one headlamp is illuminated, except motorcycles manufactured before model year 1975. Motorcycles also require multi-beam headlamps (except ≤250cc and mopeds).",
            objective: "22.22",
            module: "5"
        },
        {
            id: 528,
            category: "emergency-vehicles",
            difficulty: "advanced",
            question: "Does TRC 546 relieve emergency vehicle operators from duty of care?",
            options: ["Yes, complete immunity", "No, still have duty to operate with appropriate regard for safety and consequences of reckless disregard", "Only during pursuits", "Only with supervisor approval"],
            correct: 1,
            explanation: "Per TRC 546.005, Chapter 546 does NOT relieve operator from: (1) duty to operate with appropriate regard for safety of all persons, or (2) consequences of reckless disregard for safety of others.",
            objective: "22.16",
            module: "5"
        },
        {
            id: 529,
            category: "vehicle-equipment",
            difficulty: "advanced",
            question: "What defines a 'slow-moving vehicle' per TRC 547.001?",
            options: ["Any vehicle going under speed limit", "Motor vehicle designed for maximum 25 mph OR vehicle/implement towed by animal or motor vehicle designed for maximum 25 mph", "Vehicles with mechanical problems", "Farm equipment only"],
            correct: 1,
            explanation: "Two types: (A) motor vehicle designed to operate at maximum 25 mph (not including Segway), OR (B) vehicle/implement/machinery towed by animal or motor vehicle designed for maximum 25 mph. Must display slow-moving emblem and may use improved shoulder.",
            objective: "22.17",
            module: "5"
        },
        {
            id: 530,
            category: "lighting",
            difficulty: "advanced",
            question: "What color lights may highway maintenance/construction vehicles and service vehicles flash per TXDOT standards?",
            options: ["Red and blue only", "Amber required, blue permitted in specific circumstances", "Any color", "White only"],
            correct: 1,
            explanation: "Must flash amber lights and may flash blue lights when: removing snow/ice, mobile operations, responding to/parked at incident, employees in traffic lane, working near shoulder. Red or white flashing lights prohibited for these vehicles.",
            objective: "22.17",
            module: "5"
        },

        // MODULE 6 PRACTICE QUESTIONS - TRC Chapters 548-551A: Vehicle Inspections, Collisions, Bicycles, Low-Powered Vehicles
        {
            id: 601,
            category: "vehicle-inspections",
            difficulty: "advanced",
            question: "Which vehicles are NOT subject to annual safety inspection per TRC 548.052?",
            options: ["All vehicles must be inspected", "Trailers ≤7,500 lbs, farm trailers, dealer temporary tags, machinery license vehicles, one-trip permits", "Only commercial vehicles exempt", "Only emergency vehicles exempt"],
            correct: 1,
            explanation: "Key exemptions: trailers/semitrailers/pole trailers/mobile homes ≤7,500 lbs actual/registered weight, farm trailers, dealer temporary tags, machinery license, one-trip permits, antique license, custom vehicle license. Vehicles with 72/144-hour permits and buyer's temporary tags still require inspection.",
            objective: "22.17",
            module: "6"
        },
        {
            id: 602,
            category: "vehicle-inspections",
            difficulty: "intermediate",
            question: "What is a commercial motor vehicle per TRC 548.001?",
            options: ["Any vehicle used for business", "Self-propelled/towed vehicle >26,000 lbs, designed for >15 passengers, or transporting hazmat requiring placards (except farm vehicles <48,000 lbs)", "Only trucks over 10,000 lbs", "Any vehicle requiring CDL"],
            correct: 1,
            explanation: "CMV definition: vehicle used on public highway to transport passengers/cargo if: (A) ≥26,000 lbs gross/registered weight/GVWR, (B) designed/used for >15 passengers including driver, OR (C) transports hazmat requiring placards. Exception: farm vehicles <48,000 lbs are NOT CMVs.",
            objective: "22.17",
            module: "6"
        },
        {
            id: 603,
            category: "collision-investigation",
            difficulty: "advanced",
            question: "Where does TRC Chapter 550 apply for collision reporting?",
            options: ["Only on highways", "Roads owned by water control district, private business access areas (not residential/fee parking), highways, public places", "Everywhere", "Only public roads"],
            correct: 1,
            explanation: "Chapter 550 applies to: (1) Roads owned/controlled by water control district, (2) Private access ways/parking areas provided for business clients (except private residential or fee parking), (3) Highways or other public places. Broader than most TRC chapters.",
            objective: "22.30",
            module: "6"
        },
        {
            id: 604,
            category: "collision-investigation",
            difficulty: "advanced",
            question: "What are the penalties for Fail to Stop and Render Aid with injury per TRC 550.021?",
            options: ["All Class C misdemeanors", "Death: F2, Serious Bodily Injury: F3, Other injury: F3 (reduced penalties)", "All felonies are the same level", "Only applies to fatal crashes"],
            correct: 1,
            explanation: "550.021 penalty levels: Death = 2nd Degree Felony, Serious Bodily Injury = 3rd Degree Felony (SBI defined in PC 1.07), Other injuries = 3rd Degree Felony with reduced confinement and fine. Driver must have knowledge crash occurred.",
            objective: "22.30",
            module: "6"
        },
        {
            id: 605,
            category: "collision-investigation",
            difficulty: "advanced",
            question: "What are the penalties for Fail to Stop and Render Aid property damage only per TRC 550.022?",
            options: ["Always Class C", "Damage <$200: Class C, Damage ≥$200: Class B", "Always Class B", "Same as injury crashes"],
            correct: 1,
            explanation: "550.022 applies when collision involves another vehicle driven/attended by person but no injuries. Penalties: damage <$200 = Class C Misdemeanor, damage ≥$200 = Class B Misdemeanor. Must immediately stop, return if unable to initially stop, remain until giving required info.",
            objective: "22.30",
            module: "6"
        },
        {
            id: 606,
            category: "collision-investigation",
            difficulty: "advanced",
            question: "When must law enforcement be immediately notified of a collision per TRC 550.026?",
            options: ["All crashes", "Only fatal crashes", "Crashes resulting in injury/death OR damage so vehicle cannot be normally/safely driven", "Only crashes on highways"],
            correct: 2,
            explanation: "TRC 550.026 requires immediate law enforcement notification for crashes resulting in: (1) injury or death, OR (2) damage to vehicle so it cannot be normally or safely driven. These are the ONLY circumstances requiring crash report to authorities. Violation is Class C Misdemeanor.",
            objective: "22.30",
            module: "6"
        },
        {
            id: 607,
            category: "collision-investigation",
            difficulty: "advanced",
            question: "Where may peace officers NOT investigate crashes per TRC 550.041?",
            options: ["Private property", "Privately owned residential parking areas and privately owned fee parking lots", "Anywhere outside city limits", "School parking lots"],
            correct: 1,
            explanation: "Two locations where crashes are NOT investigable under TRC authority: (1) privately owned residential parking areas, (2) privately owned parking lots where fee is charged for parking/storing vehicles. May still investigate for PC violations, but not as motor vehicle crashes under TRC.",
            objective: "22.30",
            module: "6"
        },
        {
            id: 608,
            category: "collision-investigation",
            difficulty: "intermediate",
            question: "When must officer submit written collision report per TRC 550.062?",
            options: ["Within 5 days", "No later than 10th day after crash date", "Within 24 hours", "Within 30 days"],
            correct: 1,
            explanation: "Officer who investigates collision must make written report if collision resulted in injury/death OR property damage ≥$1,000 apparent extent. Report must be submitted no later than 10th day after crash date on TXDOT-approved form (CR-3).",
            objective: "22.30",
            module: "6"
        },
        {
            id: 609,
            category: "bicycle-operations",
            difficulty: "intermediate",
            question: "What rights and duties do bicycle operators have per TRC 551.101?",
            options: ["No rights or duties", "Same rights and duties as vehicle drivers unless provision alters or nature cannot apply", "Only follow bicycle-specific laws", "Same as pedestrians"],
            correct: 1,
            explanation: "Person operating bicycle has same rights and duties applicable to vehicle driver, unless law provision alters right/duty or right/duty by nature cannot apply to bicycle. Example: must stop at stop signs, but don't need to remove keys or set parking brake.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 610,
            category: "bicycle-operations",
            difficulty: "advanced",
            question: "When may bicycles move from right edge of roadway per TRC 551.103?",
            options: ["Never", "Passing vehicle, preparing to turn left, unsafe road conditions, or outside lane <14 feet wide without bike lane", "Only when turning", "Any time"],
            correct: 1,
            explanation: "Bicycles slower than traffic must ride near right curb/edge but may move from right edge when: (1) passing vehicle same direction, (2) preparing left turn, (3) roadway condition prevents safe riding near right, (4) outside lane <14 feet wide without adjacent bike lane (can use entire lane).",
            objective: "22.18",
            module: "6"
        },
        {
            id: 611,
            category: "bicycle-operations",
            difficulty: "advanced",
            question: "What lighting is required for bicycles at nighttime per TRC 551.104?",
            options: ["No lighting required", "White light visible 500 feet front, red reflector visible 50-300 feet rear OR red lamp visible 500 feet rear", "Only reflectors", "Same as motor vehicles"],
            correct: 1,
            explanation: "Nighttime bicycle requirements: brake capable of making wheel skid on dry/level/clean pavement, PLUS white lamp visible 500 feet to front, AND red reflector visible 50-300 feet rear OR red lamp visible 500 feet rear. Flashing lights are permitted on bicycles.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 612,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "Where may Electric Personal Assistive Mobility Devices (Segways) be operated per TRC 551.202?",
            options: ["Anywhere", "Sidewalk if available; if no sidewalk, residential street/roadway/highway ≤30 mph; bicycle paths", "Only on sidewalks", "Only on roads"],
            correct: 1,
            explanation: "EPAMD (Segway) must be operated on sidewalk if available unless crossing highway. If no sidewalk, may operate on residential street/roadway/highway ≤30 mph. May operate on bicycle paths. If on highway, ride close to right edge. Word Association: EPAMD → sidewalk if available → highway ≤30 mph.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 613,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What are the two types of Neighborhood Electric Vehicle operation per TRC 551.303-304?",
            options: ["Only one type", "Registered (like car): license/registration/insurance required, ≤45 mph roads, ≤35 mph speed; Limited: master planned community, beach, golf course", "Only registered operation allowed", "No restrictions"],
            correct: 1,
            explanation: "Two NEV operation types: (1) Registered (551.303): like car, requires license/registration/insurance, only highways ≤45 mph, ≤35 mph speed. (2) Limited (551.304): like golf cart, no registration/insurance needed, master planned community, beach, or golf course transportation ≤35 mph roads within 2 miles daytime.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 614,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What are the three circumstances for golf cart limited operation per TRC 551.403?",
            options: ["Only golf courses", "Master planned community, public/private beach, golf course transportation ≤35 mph roads within 5 miles daytime", "Anywhere with low speed limits", "Only private property"],
            correct: 1,
            explanation: "Golf cart limited operation (551.403): (1) master planned community, (2) public/private beach, OR (3) transportation to/from golf course on highway ≤35 mph during daytime within 5 miles of usual parking location. Golf cart license plate required for beach/golf use, not required in master planned community ≤35 mph.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 615,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What four vehicles are considered off-highway vehicles per TRC 551A.001?",
            options: ["Only ATVs", "All-terrain vehicle, sand rail, recreational off-highway vehicle, utility vehicle", "Motorcycles and ATVs", "Any vehicle used off-road"],
            correct: 1,
            explanation: "Four off-highway vehicles: (1) All-terrain vehicle (3+ tires, designed for off-highway, not farming/lawn care, ≤50\" wide), (2) Sand rail (sandy terrain, tubular frame, roll cage, 700-2000 lbs), (3) Recreational off-highway vehicle (4+ tires, off-highway, not farming/lawn care), (4) Utility vehicle (≥4 tires, utility work, not recreational).",
            objective: "22.18",
            module: "6"
        },
        {
            id: 616,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What equipment is required for off-highway vehicles on public land/highway per TRC 551A.071?",
            options: ["No requirements", "Brake system, muffler system, spark arrester", "Only brakes", "Same as cars"],
            correct: 1,
            explanation: "OHV equipment requirements for public off-highway land/beach/highway: (1) brake system, (2) muffler system, (3) spark arrester. Also must display lighted headlight/taillight during nighttime and reduced visibility. Violation to operate with modified exhaust cutout/bypass or removed/modified spark arrester.",
            objective: "22.18",
            module: "6"
        },

        // ADDITIONAL COMPREHENSIVE MODULE 6 PRACTICE QUESTIONS

        // CHAPTER 548 - VEHICLE INSPECTIONS (Additional Questions)
        {
            id: 617,
            category: "vehicle-inspections",
            difficulty: "intermediate",
            question: "Which permit vehicles require annual safety inspection?",
            options: ["None require inspection", "72-hour permits, 144-hour permits, 30-day permits, buyer's temporary tags", "Only 30-day permits", "Only dealer temporary tags"],
            correct: 1,
            explanation: "Vehicles bearing 72-hour permits, 144-hour permits, 30-day permits, and buyer's temporary tags ARE required to have annual safety inspection. Dealer temporary tags are EXEMPT. Check inspection status at MyTXCar.org.",
            objective: "22.17",
            module: "6"
        },
        {
            id: 618,
            category: "vehicle-inspections",
            difficulty: "advanced",
            question: "What makes a farm vehicle NOT a commercial motor vehicle per TRC 548.001?",
            options: ["All farm vehicles are CMVs", "Farm vehicles with gross weight, registered weight, or GVWR <48,000 lbs are NOT CMVs", "Only registered weight matters", "Farm vehicles are always exempt"],
            correct: 1,
            explanation: "Farm vehicles with gross weight, registered weight, OR gross weight rating of LESS than 48,000 pounds are NOT considered commercial motor vehicles. This affects inspection requirements since CMVs have different inspection process (548.201).",
            objective: "22.17",
            module: "6"
        },
        {
            id: 619,
            category: "vehicle-inspections",
            difficulty: "intermediate",
            question: "How many items are inspected during annual safety inspection per TRC 548.051?",
            options: ["10 items", "12 items", "15 items", "20 items"],
            correct: 2,
            explanation: "15 items inspected: tires, wheel assembly, safety guards/flaps, brake system, steering system, lighting equipment, horns/warning devices, mirrors, windshield wipers, sunscreening devices, front seat belts, exhaust system, emission system, fuel tank cap, emissions control equipment (some items don't apply to EVs).",
            objective: "22.17",
            module: "6"
        },
        {
            id: 620,
            category: "vehicle-inspections",
            difficulty: "basic",
            question: "What inspection requirements apply to mopeds per TRC 548.051(b)?",
            options: ["Same as cars", "Same as motorcycles but only brakes, headlamps, rear lamps, reflectors required", "No inspection required", "Only brake inspection"],
            correct: 1,
            explanation: "Mopeds are subject to inspection like motorcycles, but only four items required to be inspected: brakes, headlamps, rear lamps, and reflectors. Streamlined process compared to full 15-item vehicle inspection.",
            objective: "22.17",
            module: "6"
        },

        // CHAPTER 550 - COLLISION REPORTS (Additional Questions)
        {
            id: 621,
            category: "collision-investigation",
            difficulty: "advanced",
            question: "Must driver have knowledge of crash for TRC 550.021 offense?",
            options: ["No knowledge required", "Yes, courts require driver knowledge that crash occurred as element of offense", "Only for felony level", "Knowledge not addressed in statute"],
            correct: 1,
            explanation: "Although no culpable mental state in statute, courts held driver must have KNOWLEDGE crash occurred as element (Baker v. State, Goss v. State, Mayer v. State). Driver can be non-contact unit that contributed to crash and fled (Gillie v. State).",
            objective: "22.30",
            module: "6"
        },
        {
            id: 622,
            category: "collision-investigation",
            difficulty: "advanced",
            question: "What defines metropolitan area for freeway movement requirements per TRC 550.022(b)?",
            options: ["Any city area", "Area with municipality ≥100,000 population plus adjacent municipalities/unincorporated urban districts", "Only areas over 500,000 population", "All freeway areas"],
            correct: 1,
            explanation: "Metropolitan area (541.101) = area containing at least one municipality with population ≥100,000 AND includes adjacent municipalities and unincorporated urban districts. In these areas, vehicles that can be 'normally and safely driven' must move ASAP after freeway crashes.",
            objective: "22.30",
            module: "6"
        },
        {
            id: 623,
            category: "collision-investigation",
            difficulty: "intermediate",
            question: "What information must be exchanged after crashes per TRC 550.023?",
            options: ["Only insurance", "Name, driver license number, address, registration, insurance information", "Only name and phone", "Whatever parties want to exchange"],
            correct: 1,
            explanation: "Required information exchange: name, driver license number, address, registration, and insurance information to other parties involved. Also required to render aid or make arrangements for medical aid (generally call 911) for injured parties.",
            objective: "22.30",
            module: "6"
        },
        {
            id: 624,
            category: "collision-investigation",
            difficulty: "intermediate",
            question: "What are penalties for striking unattended vehicle and leaving per TRC 550.024?",
            options: ["Always Class C", "Damage <$200: Class C, Damage ≥$200: Class B", "Always Class B", "Same as injury crashes"],
            correct: 1,
            explanation: "550.024 penalties for striking unattended vehicle: damage <$200 = Class C Misdemeanor, damage ≥$200 = Class B Misdemeanor. Must attempt to locate owner, leave information in conspicuous place if owner not found.",
            objective: "22.30",
            module: "6"
        },
        {
            id: 625,
            category: "collision-investigation",
            difficulty: "intermediate",
            question: "What are penalties for striking highway fixtures per TRC 550.025?",
            options: ["No penalties", "Damage <$200: Class C, Damage ≥$200: Class B", "Always felony", "Civil matter only"],
            correct: 1,
            explanation: "550.025 penalties for striking fixtures/structures/landscaping adjacent to highway: damage <$200 = Class C Misdemeanor, damage ≥$200 = Class B Misdemeanor. Must make reasonable efforts to locate/notify owner and provide identifying information.",
            objective: "22.30",
            module: "6"
        },

        // CHAPTER 551 - BICYCLES (Additional Questions)
        {
            id: 626,
            category: "bicycle-operations",
            difficulty: "intermediate",
            question: "Can bicycles ride two abreast in traffic per TRC 551.103(c)?",
            options: ["Never allowed", "May ride two abreast in single lane if not impeding traffic", "Only on bike paths", "Only with permits"],
            correct: 1,
            explanation: "Bicycles may ride two abreast as long as they ride in single lane and do not impede traffic. No more than two abreast unless on roadway part exclusively for bicycles. Both riders must still follow right-edge positioning rules.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 627,
            category: "bicycle-operations",
            difficulty: "advanced",
            question: "Why are flashing lights permitted on bicycles?",
            options: ["They're not permitted", "TRC 547.305 only prohibits flashing lights on motor vehicles; 547.002 exempts bicycles from Chapter 547", "Special exemption for safety", "Only during emergencies"],
            correct: 1,
            explanation: "TRC 547.305 prohibits flashing red, white, or blue lamps on MOTOR VEHICLES only. TRC 547.002 exempts bicycles from Chapter 547 provisions. Therefore, bicycles may have flashing white front lights or flashing red rear lights.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 628,
            category: "bicycle-operations",
            difficulty: "intermediate",
            question: "What age restriction exists for Class 3 electric bicycles per TRC 551.107?",
            options: ["No age restriction", "Must be at least 15 years old", "Must be at least 16 years old", "Must be at least 18 years old"],
            correct: 1,
            explanation: "Person must be at least 15 years old to operate Class 3 electric bicycle. Class 3 = equipped with motor assisting only when pedaling, top assisted speed >20 but <28 mph. Electric bicycles exempt from registration, license, and insurance requirements.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 629,
            category: "bicycle-operations",
            difficulty: "basic",
            question: "Is riding a bicycle with no hands a violation per TRC 551.102(c)?",
            options: ["Yes, always a violation", "No, unless carrying object preventing at least one hand on handlebars", "Only on highways", "Only at night"],
            correct: 1,
            explanation: "Riding no-hands is NOT a violation unless person is carrying object that prevents them from placing at least one hand on handlebars. TRC 551.102(c) prohibits carrying objects interfering with handling, not hands-free riding itself.",
            objective: "22.18",
            module: "6"
        },

        // MOTOR-ASSISTED SCOOTERS
        {
            id: 630,
            category: "low-powered-vehicles",
            difficulty: "intermediate",
            question: "Where may motor-assisted scooters operate per TRC 551.352?",
            options: ["Anywhere", "Streets/highways ≤35 mph, sidewalks, bike paths", "Only sidewalks", "Only private property"],
            correct: 1,
            explanation: "Motor-assisted scooters may operate on streets/highways with speed limit ≤35 mph, sidewalks, and bike paths. Generally treated like bicycles. Cannot operate on roads >35 mph speed limit.",
            objective: "22.18",
            module: "6"
        },

        // POCKET BIKES
        {
            id: 631,
            category: "low-powered-vehicles",
            difficulty: "basic",
            question: "Where may pocket bikes/minimotorbikes operate per TRC 551.353?",
            options: ["Any highway", "NOT authorized on any highway, road, street, bike path, or sidewalk - private property only", "Only bike paths", "Streets under 25 mph"],
            correct: 1,
            explanation: "Pocket bikes/minimotorbikes are NOT authorized to operate on any highway, road, street, bike path, or sidewalk. Should only be operated off-road on private property. Not street legal under any circumstances.",
            objective: "22.18",
            module: "6"
        },

        // GOLF CARTS (Additional Questions)
        {
            id: 632,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What equipment is required for municipal/county golf cart operation per TRC 551.4041?",
            options: ["No special equipment", "Headlamps, taillamps, reflectors, parking brake, mirrors", "Only lights", "Same as cars"],
            correct: 1,
            explanation: "Golf carts operated under TRC 551.404 (municipal/county ordinance) must have: headlamps, taillamps, reflectors, parking brake, mirrors. Also requires golf cart license plate, insurance, licensed driver. May cross intersections with roads >35 mph.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 633,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "When is golf cart license plate NOT required per TRC 551.403(b)?",
            options: ["Never required", "In master planned community with speed limit ≤35 mph", "Always required", "Only for registered golf carts"],
            correct: 1,
            explanation: "Golf cart license plate NOT required when operated in master planned community with speed limit ≤35 mph. IS required for beach operation and golf course transportation. License plate is identifying plate, not registration, costs $10, non-expiring.",
            objective: "22.18",
            module: "6"
        },

        // OFF-HIGHWAY VEHICLES (Additional Questions)
        {
            id: 634,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What highway crossing restrictions apply to OHVs per TRC 551A.034?",
            options: ["Can cross anywhere", "NEVER cross interstate/controlled access; divided highways only at intersections; others with complete stop/yield/90-degree angle", "Only at intersections", "No crossing allowed"],
            correct: 1,
            explanation: "OHV highway crossing rules: NEVER cross interstate or controlled access highway. Can cross divided highway ONLY at intersection. Can cross other highways at non-intersection with complete stop, yield ROW, 90-degree angle crossing, lights activated.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 635,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What safety certificate requirements apply to OHV operation per TRC 551A.031?",
            options: ["Always required", "Required on public off-highway vehicle land or beach; not required for highway operation", "Never required", "Only for under 18"],
            correct: 1,
            explanation: "Off-highway vehicle safety certificate required when operating on public off-highway vehicle land or beach. If no certificate, must be under direct supervision of adult with certificate. Certificate NOT required for authorized highway operation.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 636,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What agricultural/utility OHV requirements exist per TRC 551A.057?",
            options: ["No special requirements", "Orange flag ≥6 ft high, lights illuminated, daytime only, ≤25 miles, license/insurance required", "Only license required", "Same as regular operation"],
            correct: 1,
            explanation: "Agricultural/utility OHV operation: triangular orange flag ≥6 feet high at rear, headlights/taillights illuminated, daytime only, ≤25 miles origin to destination, driver license and insurance required. NO OHV license plate, helmet, eye protection, certification, or seatbelts required.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 637,
            category: "low-powered-vehicles",
            difficulty: "intermediate",
            question: "What law enforcement OHV distance limitation exists per TRC 551A.058?",
            options: ["No limit", "≤10 miles from origin to destination", "≤25 miles", "≤5 miles"],
            correct: 1,
            explanation: "Law enforcement/emergency services OHV operation limited to ≤10 miles from origin to destination (vs. 25 miles for agricultural/utility). Requires orange flag ≥6 ft high, lights illuminated, driver license. No interstate/limited-access highways.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 638,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "When do OHVs NOT need helmet/eye protection per TRC 551A.072(b)?",
            options: ["Never exempt", "4-wheel vehicles with bench/bucket seats, seat belts, and roll bar/cage", "Only on private property", "Only for agricultural use"],
            correct: 1,
            explanation: "Helmet and eye protection NOT required for 4-wheel OHVs equipped with bench or bucket seats, seat belts, AND roll bar or roll cage. Also exempt: agricultural/utility workers (551A.057). Otherwise, DOT helmet, eye protection, and seat belts (if equipped) required.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 639,
            category: "low-powered-vehicles",
            difficulty: "intermediate",
            question: "What passenger restrictions apply to OHVs per TRC 551A.074?",
            options: ["No restrictions", "Cannot carry passengers unless vehicle designed by manufacturer to transport passengers", "Only one passenger allowed", "Passengers allowed with helmets"],
            correct: 1,
            explanation: "Cannot carry passengers on OHV operated on public off-highway vehicle land, beach, or highway UNLESS vehicle is designed by manufacturer to transport passengers. Must be factory-designed for passengers, not aftermarket modifications.",
            objective: "22.18",
            module: "6"
        },

        // ELECTRIC PERSONAL ASSISTIVE MOBILITY DEVICES (SEGWAYS)
        {
            id: 640,
            category: "low-powered-vehicles",
            difficulty: "intermediate",
            question: "What road speed limit restriction applies to EPAMDs per TRC 551.202?",
            options: ["No speed limit restriction", "May operate on highways ≤30 mph if no sidewalk available", "Any speed limit", "Only 25 mph or less"],
            correct: 1,
            explanation: "EPAMD (Segway) must operate on sidewalk if available. If no sidewalk, may operate on residential street/roadway/highway with speed limit ≤30 mph. May also operate on bicycle paths. Word Association: EPAMD → sidewalk if available → highway ≤30 mph if no sidewalk.",
            objective: "22.18",
            module: "6"
        },

        // NEIGHBORHOOD ELECTRIC VEHICLES (Additional Questions)
        {
            id: 641,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What speed restrictions apply to registered NEVs per TRC 551.303?",
            options: ["No restrictions", "Only highways ≤45 mph, operate ≤35 mph", "Any highway", "Only 25 mph roads"],
            correct: 1,
            explanation: "Registered NEV operation (551.303): like car, requires license/registration/insurance, may only operate on highways with speed limit ≤45 mph, may only operate at speeds ≤35 mph. TXDOT/county/municipality may prohibit operation if deemed unsafe.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 642,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What are the three unregistered NEV operation circumstances per TRC 551.304?",
            options: ["Only golf courses", "Master planned community, public/private beach, golf course transportation ≤35 mph roads within 2 miles daytime", "Anywhere under 35 mph", "Only private property"],
            correct: 1,
            explanation: "Unregistered NEV operation (551.304): like golf cart, no registration/insurance needed (but driver license required for public highway). Three circumstances: (1) master planned community, (2) public/private beach, (3) golf course transportation ≤35 mph within 2 miles daytime.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 617,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What safety apparel is required for off-highway vehicle operators per TRC 551A.072?",
            options: ["No requirements", "DOT helmet, eye protection, seat belts if equipped (except 4-wheel vehicles with bucket seats and roll bar/cage)", "Only helmets", "Only for minors"],
            correct: 1,
            explanation: "OHV safety apparel on public land/beach/highway: DOT helmet, eye protection, seat belts if equipped. Exception: not required for 4-wheel vehicle with bench/bucket seats, seat belts, and roll bar/cage. Agricultural/utility work under 551A.057 doesn't require safety equipment.",
            objective: "22.18",
            module: "6"
        },
        {
            id: 618,
            category: "low-powered-vehicles",
            difficulty: "advanced",
            question: "What distance limitations apply to off-highway vehicle highway use per TRC 551A.057-058?",
            options: ["No limits", "Agricultural/utility work: 25 miles, Law enforcement: 10 miles", "Same limits for all uses", "Only 5 miles for any use"],
            correct: 1,
            explanation: "OHV highway distance limits: Agricultural/utility work (551A.057): ≤25 miles from origin to destination. Law enforcement (551A.058): ≤10 miles from origin to destination. Both require triangular orange flag ≥6 feet high, headlights/taillights illuminated, daytime operation, not on interstate/limited-access highway.",
            objective: "22.18",
            module: "6"
        },

        // MODULE 7 PRACTICE QUESTIONS - TRC Chapters 552-724, HSC Chapter 365: Pedestrians, Financial Responsibility, Size/Weight, Helmets, Privileged Parking, Implied Consent, Litter

        // CHAPTER 552 - PEDESTRIANS
        {
            id: 701,
            category: "pedestrians",
            difficulty: "basic",
            question: "If no specific pedestrian signal is present, when may pedestrians cross per TRC 552.001?",
            options: ["Any time", "Must comply with red/green traffic signals for other traffic", "Only when no vehicles present", "Never without pedestrian signal"],
            correct: 1,
            explanation: "Per TRC 552.001, if no specific pedestrian signal present, pedestrians must comply with red/green traffic signals for other traffic. Green signal = may proceed across roadway in crosswalk. Red or yellow signal = may not enter roadway.",
            objective: "22.19",
            module: "7"
        },
        {
            id: 702,
            category: "pedestrians",
            difficulty: "intermediate",
            question: "What happens if pedestrian signal changes from Walk to Wait while crossing per TRC 552.002?",
            options: ["Must immediately return to start", "May continue to sidewalk or safety island", "Must stop in crosswalk", "Violation has occurred"],
            correct: 1,
            explanation: "Per TRC 552.002, pedestrian may not BEGIN crossing when 'Don't Walk' (solid red hand) or 'Wait' (flashing red hand) signals present. If already partially crossed when wait signal appears, should proceed to sidewalk or safety island.",
            objective: "22.19",
            module: "7"
        },
        {
            id: 703,
            category: "pedestrians",
            difficulty: "advanced",
            question: "What enhanced penalties apply for crosswalk violations per TRC 552.003(d)?",
            options: ["No enhanced penalties", "Maximum fine $500 and 30 hours community service if serious bodily injury/death to visually impaired/disabled person", "Double fine for any injury", "Automatic license suspension"],
            correct: 1,
            explanation: "Per TRC 552.003(d), if crosswalk violation causes serious bodily injury or death to visually impaired or disabled person, maximum fine is $500 and 30 hours community service may be required to organization serving visually impaired or disabled persons.",
            objective: "22.19",
            module: "7"
        },
        {
            id: 704,
            category: "pedestrians",
            difficulty: "intermediate",
            question: "Where must pedestrians cross between adjacent signalized intersections per TRC 552.005(b)?",
            options: ["Anywhere along the roadway", "Only in crosswalks (jaywalking prohibition)", "Only at intersections", "Wherever traffic permits"],
            correct: 1,
            explanation: "Per TRC 552.005(b), if pedestrian crossing roadway between adjacent intersections that both have traffic control signals, pedestrian may only cross in crosswalk. Failure to do so is commonly called 'jaywalking.'",
            objective: "22.19",
            module: "7"
        },
        {
            id: 705,
            category: "pedestrians",
            difficulty: "basic",
            question: "If no sidewalk available, where must pedestrians walk per TRC 552.006(b)?",
            options: ["Right side with traffic", "Left side facing traffic unless obstructed/unsafe", "Anywhere on roadway", "Must stay off roadway"],
            correct: 1,
            explanation: "Per TRC 552.006(b), if sidewalk not available, pedestrians may walk on roadway but must walk on LEFT side of roadway or shoulder facing traffic unless that area is obstructed or unsafe.",
            objective: "22.19",
            module: "7"
        },
        {
            id: 706,
            category: "pedestrians",
            difficulty: "advanced",
            question: "What is the current enforcement guidance for TRC 552.007 solicitation law?",
            options: ["Actively enforced", "DPS OGC discourages enforcement due to constitutional challenges", "Only enforced with local permission", "Enhanced penalties apply"],
            correct: 1,
            explanation: "Although TRC 552.007 remains in law books, several civil courts held it unconstitutional (1st Amendment violation). Texas DPS Office of General Counsel guidance (7/14/2023) discourages enforcement action under 552.007. Other agencies should consult their legal counsel.",
            objective: "22.19",
            module: "7"
        },
        {
            id: 707,
            category: "pedestrians",
            difficulty: "basic",
            question: "What speed limit applies to motorized mobility devices per TRC 552A.0101?",
            options: ["15 mph", "Not capable of speeds exceeding 8 mph", "25 mph", "No speed limit"],
            correct: 1,
            explanation: "Per TRC 552A.0101, motorized mobility device means device designed for disabled persons transportation that is not capable of speeds exceeding 8 mph. Also has 3+ wheels, battery-powered motor, ≤1 forward gear. Operator considered pedestrian.",
            objective: "22.19",
            module: "7"
        },

        // CHAPTER 600 - MISCELLANEOUS PROVISIONS
        {
            id: 708,
            category: "miscellaneous-provisions",
            difficulty: "basic",
            question: "Who is responsible for removing glass from highway after vehicle removal per TRC 600.001(b)?",
            options: ["Highway department", "Police officers", "Person who removes the wrecked/damaged vehicle", "Vehicle owner"],
            correct: 2,
            explanation: "Per TRC 600.001(b), person who removes wrecked or damaged vehicle from highway is required to remove glass or another injurious substance dropped on highway from the vehicle. Cleanup responsibility goes with vehicle removal.",
            objective: "22.28",
            module: "7"
        },

        // CHAPTER 601 - FINANCIAL RESPONSIBILITY
        {
            id: 709,
            category: "financial-responsibility",
            difficulty: "intermediate",
            question: "How many acceptable forms of financial responsibility exist per TRC 601.051?",
            options: ["3 forms", "5 forms", "7 forms", "Only insurance"],
            correct: 1,
            explanation: "Per TRC 601.051, five acceptable forms: (1) motor vehicle liability insurance policy, (2) surety bond, (3) $55,000 deposit with state comptroller, (4) $55,000 deposit with county judge, (5) self-insurance. Most people use insurance.",
            objective: "22.26",
            module: "7"
        },
        {
            id: 710,
            category: "financial-responsibility",
            difficulty: "advanced",
            question: "What case law requires asking about all financial responsibility methods?",
            options: ["Miranda v. State", "Sanchez v. State", "Terry v. Ohio", "Mapp v. Ohio"],
            correct: 1,
            explanation: "Sanchez v. State: Officer only asked for insurance, didn't ask about other 4 methods. Conviction overturned - no probable cause established. Must ask about ALL five methods of financial responsibility before citing to establish probable cause.",
            objective: "22.26",
            module: "7"
        },
        {
            id: 711,
            category: "financial-responsibility",
            difficulty: "intermediate",
            question: "What deposit amount is required for state/county financial responsibility per TRC 601.122-123?",
            options: ["$25,000", "$55,000", "$75,000", "$100,000"],
            correct: 1,
            explanation: "Per TRC 601.122-123, financial responsibility may be maintained by $55,000 cash deposit with state comptroller OR $55,000 cash deposit with county judge. Certificate issued for proof to officers.",
            objective: "22.26",
            module: "7"
        },
        {
            id: 712,
            category: "financial-responsibility",
            difficulty: "advanced",
            question: "How many vehicles required for self-insurance eligibility per TRC 601.124?",
            options: ["15 vehicles", "More than 25 vehicles", "50 vehicles", "100 vehicles"],
            correct: 1,
            explanation: "Per TRC 601.124, person in whose name MORE than 25 motor vehicles are registered may qualify as self-insurer. DPS must be satisfied person has ability to pay judgments. Common for fleet owners with significant resources.",
            objective: "22.26",
            module: "7"
        },
        {
            id: 713,
            category: "financial-responsibility",
            difficulty: "basic",
            question: "What are penalties for first offense failure to maintain financial responsibility per TRC 601.191?",
            options: ["$50-$100", "$175-$350", "$350-$1,000", "License suspension only"],
            correct: 1,
            explanation: "Per TRC 601.191, first offense: fine $175-$350. Previous conviction: fine $350-$1,000. Indigent first offender: court may lower fine. Citation must indicate officer unable to verify through FRVP database.",
            objective: "22.26",
            module: "7"
        },

        // CHAPTER 621 - SIZE AND WEIGHT
        {
            id: 714,
            category: "size-weight",
            difficulty: "intermediate",
            question: "What is maximum width for passenger vehicles per TRC 621.201?",
            options: ["96 inches", "102 inches", "108 inches", "No limit"],
            correct: 0,
            explanation: "Per TRC 621.201(b), passenger vehicle and its load may not be greater than 8 feet (96 inches). May carry load extending 3 inches left or 6 inches right of fenders if total width ≤96 inches.",
            objective: "22.28",
            module: "7"
        },
        {
            id: 715,
            category: "size-weight",
            difficulty: "intermediate",
            question: "What is maximum width for vehicles other than passenger vehicles per TRC 621.201?",
            options: ["96 inches", "102 inches", "108 inches", "120 inches"],
            correct: 1,
            explanation: "Per TRC 621.201(a), vehicle other than passenger vehicle, including load but excluding safety devices, may not be greater than 102 inches. Side mirrors are safety devices and don't count toward width.",
            objective: "22.28",
            module: "7"
        },
        {
            id: 716,
            category: "size-weight",
            difficulty: "advanced",
            question: "What is maximum length for motor vehicle per TRC 621.203?",
            options: ["40 feet", "45 feet", "50 feet", "No limit"],
            correct: 1,
            explanation: "Per TRC 621.203, motor vehicle other than truck-tractor may not be longer than 45 feet. Truck-tractor has no length limitation. When truck-tractor combined with trailer, only trailer has specific maximum length.",
            objective: "22.28",
            module: "7"
        },
        {
            id: 717,
            category: "size-weight",
            difficulty: "advanced",
            question: "What is maximum load extension beyond rear per TRC 621.206?",
            options: ["3 feet", "4 feet", "5 feet", "6 feet"],
            correct: 1,
            explanation: "Per TRC 621.206, vehicle may not carry load extending more than 3 feet beyond front or more than 4 feet beyond rear, except as permitted by other law. Even if properly marked, extensions beyond these limits illegal unless specifically excepted.",
            objective: "22.28",
            module: "7"
        },
        {
            id: 718,
            category: "size-weight",
            difficulty: "basic",
            question: "What is maximum vehicle height per TRC 621.207?",
            options: ["13 feet", "14 feet", "15 feet", "16 feet"],
            correct: 1,
            explanation: "Per TRC 621.207, vehicle and its load may not be higher than 14 feet. Operator of vehicle higher than 13'6\" must ensure vehicle will pass through each vertical clearance without touching structure.",
            objective: "22.28",
            module: "7"
        },

        // CHAPTER 661 - MOTORCYCLE HELMETS
        {
            id: 719,
            category: "motorcycle-helmets",
            difficulty: "basic",
            question: "What helmet requirement applies to motorcycle operators under 21 per TRC 661.003?",
            options: ["No helmet required", "Helmet required without exception", "Helmet required only on highways", "Only if no insurance"],
            correct: 1,
            explanation: "Per TRC 661.003, anyone under 21 years of age is required to wear protective headgear without exception. DOT-approved helmet required (DOT sticker on back indicates compliance with safety standards).",
            objective: "22.22",
            module: "7"
        },
        {
            id: 720,
            category: "motorcycle-helmets",
            difficulty: "advanced",
            question: "What two exemptions allow 21+ riders to not wear helmets per TRC 661.003?",
            options: ["License and registration", "Completed motorcycle safety training course OR covered by health insurance", "Insurance and training only", "No exemptions exist"],
            correct: 1,
            explanation: "Per TRC 661.003, person 21+ not required to wear helmet if: (1) completed motorcycle safety training course OR (2) covered by health insurance that provides care if incapacitated by motorcycle injury. Display certificate or insurance evidence.",
            objective: "22.22",
            module: "7"
        },
        {
            id: 721,
            category: "motorcycle-helmets",
            difficulty: "intermediate",
            question: "How are fully enclosed autocycles treated for helmet purposes per TRC 661.0015?",
            options: ["Same as motorcycles", "Not subject to helmet laws", "Only driver needs helmet", "Special autocycle helmet required"],
            correct: 1,
            explanation: "Per TRC 661.0015(b), fully or partially enclosed autocycles are NOT subject to helmet laws. Open autocycles treated like motorcycles - under 21 must wear helmet, 21+ exempt with training or insurance.",
            objective: "22.22",
            module: "7"
        },

        // CHAPTER 681 - PRIVILEGED PARKING
        {
            id: 722,
            category: "privileged-parking",
            difficulty: "advanced",
            question: "When did disabled veteran plate requirements change per TRC 681.008?",
            options: ["No change occurred", "January 1, 2022", "January 1, 2020", "January 1, 2023"],
            correct: 1,
            explanation: "Per TRC 681.008, effective January 1, 2022, vehicles with Disabled Veteran license plates only receive privileged parking if plate bears international symbol of access. Previously all Disabled Veteran plates had privileges.",
            objective: "22.23",
            module: "7"
        },
        {
            id: 723,
            category: "privileged-parking",
            difficulty: "advanced",
            question: "What fine range applies to disabled parking violations per TRC 681.011(g)?",
            options: ["$200-$300", "$300-$500", "$500-$750", "$750-$1,000"],
            correct: 2,
            explanation: "Per TRC 681.011(g), fine for disabled parking offenses is $500-$750. Subsequent convictions earn higher fines and possibility of community service. Vehicle owner presumed to be person who left vehicle standing.",
            objective: "22.23",
            module: "7"
        },
        {
            id: 724,
            category: "privileged-parking",
            difficulty: "advanced",
            question: "When must officers seize disabled parking placards per TRC 681.012?",
            options: ["Officer discretion", "SHALL seize if violation under 681.011(a)/(d) occurs in presence", "Only with warrant", "Never seize placards"],
            correct: 1,
            explanation: "Per TRC 681.012, officer SHALL seize placard if violation under 681.011(a)/(d) occurs in presence (using/lending placard illegally). Within 48 hours determine probable cause. If PC found: destroy within 5 days. Only applies to placards, not plates.",
            objective: "22.23",
            module: "7"
        },

        // CHAPTER 683 - ABANDONED VEHICLES
        {
            id: 725,
            category: "abandoned-vehicles",
            difficulty: "basic",
            question: "How long must vehicle be unattended on highway ROW to be abandoned per TRC 683.002?",
            options: ["24 hours", "48 hours", "72 hours", "1 week"],
            correct: 1,
            explanation: "Per TRC 683.002, vehicle is abandoned if left unattended on highway right-of-way for more than 48 hours. Exception: unattended on turnpike project ROW for more than 24 hours. Most circumstances use 48-hour timeframe.",
            objective: "22.24",
            module: "7"
        },
        {
            id: 726,
            category: "abandoned-vehicles",
            difficulty: "intermediate",
            question: "How long after taking custody must notice be sent per TRC 683.012?",
            options: ["5 days", "10 days", "15 days", "30 days"],
            correct: 1,
            explanation: "Per TRC 683.012(b), law enforcement must send notice of abandonment to last known registered owner and lienholder no later than 10th day after abandoned vehicle was taken into custody.",
            objective: "22.24",
            module: "7"
        },

        // CHAPTER 724 - IMPLIED CONSENT
        {
            id: 727,
            category: "implied-consent",
            difficulty: "advanced",
            question: "When SHALL officer require blood specimen per TRC 724.012(a-1)?",
            options: ["Any DWI arrest", "Arrest + refusal + crash + reasonable belief death/serious bodily injury will result", "Only with warrant", "Never required"],
            correct: 1,
            explanation: "Per TRC 724.012(a-1), officer SHALL require blood if: (1) arrest for DWI/BWI, (2) person refuses voluntary specimen, (3) crash occurred reasonably believed from offense, (4) officer reasonably believes death/serious bodily injury will result from crash.",
            objective: "22.29",
            module: "7"
        },
        {
            id: 728,
            category: "implied-consent",
            difficulty: "advanced",
            question: "What case established warrant requirement for blood draws?",
            options: ["Miranda v. Arizona", "Missouri v. McNeely", "Terry v. Ohio", "Mapp v. Ohio"],
            correct: 1,
            explanation: "Missouri v. McNeely (2013): Supreme Court ruled inadequate exigency when officer took mandatory specimen without warrant. Must consider magistrate availability, alcohol metabolism, officer assistance. Texas follows McNeely - exigent circumstances very difficult to establish.",
            objective: "22.29",
            module: "7"
        },
        {
            id: 729,
            category: "implied-consent",
            difficulty: "intermediate",
            question: "How many people authorized to take blood specimens per TRC 724.017?",
            options: ["3 people", "5 people", "7 people", "Any medical personnel"],
            correct: 1,
            explanation: "Per TRC 724.017, five authorized: (1) physician, (2) qualified technician (phlebotomist), (3) registered professional nurse, (4) licensed vocational nurse, (5) EMT-intermediate/paramedic if authorized by medical director. Must be sanitary place.",
            objective: "22.29",
            module: "7"
        },
        {
            id: 730,
            category: "implied-consent",
            difficulty: "advanced",
            question: "How long to submit refusal report per TRC 724.032?",
            options: ["24 hours", "5 business days", "10 days", "30 days"],
            correct: 1,
            explanation: "Per TRC 724.032, arresting officer must make written report (DIC-23) of refusal to department director within 5 business days. Also must serve DIC-25 suspension notice. Word Association: Written Report of Refusal → DIC-23 → 5 Business Days.",
            objective: "22.29",
            module: "7"
        },

        // HSC CHAPTER 365 - LITTER
        {
            id: 731,
            category: "litter",
            difficulty: "basic",
            question: "What two categories comprise litter per HSC 365.011(6)?",
            options: ["Organic and inorganic", "Decayable waste and nondecayable solid waste", "Biodegradable and permanent", "Natural and manufactured"],
            correct: 1,
            explanation: "Per HSC 365.011(6), litter includes: (A) decayable waste from establishments/residences (not sewage/body waste/industrial), (B) nondecayable solid waste: combustible, noncombustible, and discarded manufactured materials.",
            objective: "22.5",
            module: "7"
        },
        {
            id: 732,
            category: "litter",
            difficulty: "advanced",
            question: "What offense level for littering 100 pounds per HSC 365.012?",
            options: ["Class C Misdemeanor", "Class B Misdemeanor", "Class A Misdemeanor", "State Jail Felony"],
            correct: 2,
            explanation: "Per HSC 365.012, 100 pounds falls in range: ≥500 lbs but <1000 lbs = Class A Misdemeanor. Levels: <5 lbs = Class C, >5 but <500 lbs = Class B, ≥500 but <1000 lbs = Class A, ≥1000 lbs = State Jail Felony.",
            objective: "22.5",
            module: "7"
        },
        {
            id: 733,
            category: "litter",
            difficulty: "intermediate",
            question: "What special litter offense exists per HSC 365.012(a-1)?",
            options: ["Littering from vehicle", "Discarding lighted material causing fire", "Commercial littering", "Repeat offender enhancement"],
            correct: 1,
            explanation: "Per HSC 365.012(a-1), person commits offense if discards lighted litter (match, cigarette, cigar) and fire is ignited as result. This is Class B Misdemeanor regardless of weight/volume of litter discarded.",
            objective: "22.5",
            module: "7"
        },

        // MODULE 7 REVIEW QUESTIONS FROM HANDOUT
        {
            id: 734,
            category: "pedestrians",
            difficulty: "basic",
            question: "If a pedestrian wants to cross in a crosswalk at an intersection where there is not a specific pedestrian control signal, the pedestrian has no traffic control and may cross at any time.",
            options: ["True", "False"],
            correct: 1,
            explanation: "FALSE. Per TRC 552.001, if specific pedestrian signal not present, pedestrians must comply with red and green traffic signals for other traffic on that roadway. Pedestrian facing red/yellow may not enter roadway.",
            objective: "22.19",
            module: "7"
        },
        {
            id: 735,
            category: "pedestrians",
            difficulty: "basic",
            question: "If a sidewalk is present, a pedestrian walking along a highway is not required to use the sidewalk as long as they walk along the left side of the roadway facing approaching traffic.",
            options: ["True", "False"],
            correct: 1,
            explanation: "FALSE. Per TRC 552.006(a), if sidewalk is available, pedestrian is required to walk on sidewalk rather than in roadway. Only when sidewalk NOT available may pedestrian walk on left side facing traffic.",
            objective: "22.19",
            module: "7"
        },
        {
            id: 736,
            category: "size-weight",
            difficulty: "intermediate",
            question: "The maximum width for a passenger vehicle is _____ and may have load extending _____ inches left or _____ inches right.",
            options: ["96 inches; 3 inches; 6 inches", "102 inches; 6 inches; 3 inches", "8 feet; no extension", "96 inches; 6 inches; 3 inches"],
            correct: 0,
            explanation: "Per TRC 621.201, passenger vehicle max width 96 inches including load. May carry load extending 3 inches to left or 6 inches to right as long as overall width doesn't exceed 96 inches.",
            objective: "22.28",
            module: "7"
        },
        {
            id: 737,
            category: "motorcycle-helmets",
            difficulty: "basic",
            question: "A motorcycle operator or passenger under 21 years of age must wear an approved helmet without exception when riding on the highway.",
            options: ["True", "False"],
            correct: 0,
            explanation: "TRUE. Per TRC 661.003, anyone under 21 years of age is required to wear protective headgear without exception. Only those 21+ can be exempt with safety training or health insurance.",
            objective: "22.22",
            module: "7"
        },
        {
            id: 738,
            category: "abandoned-vehicles",
            difficulty: "basic",
            question: "A vehicle can be considered abandoned after being left unattended on highway right-of-way for more than _____ hours. On turnpike project: _____ hours.",
            options: ["24 hours; 12 hours", "48 hours; 24 hours", "72 hours; 48 hours", "24 hours; 48 hours"],
            correct: 1,
            explanation: "Per TRC 683.002, vehicle abandoned if left unattended on highway right-of-way for more than 48 hours, OR more than 24 hours on turnpike project right-of-way.",
            objective: "22.24",
            module: "7"
        },
        {
            id: 739,
            category: "financial-responsibility",
            difficulty: "intermediate",
            question: "If a person maintains financial responsibility by depositing cash with the state or county judge, the deposit must be in the amount of:",
            options: ["$25,000", "$35,000", "$55,000", "$75,000"],
            correct: 2,
            explanation: "Per TRC 601.122 and 601.123, cash deposit with state comptroller or county judge must be $55,000. This covers liabilities same as insurance policy.",
            objective: "22.26",
            module: "7"
        },
        {
            id: 740,
            category: "implied-consent",
            difficulty: "intermediate",
            question: "All reports related to DWI suspect's refusal to provide specimen shall be forwarded to the Department not later than:",
            options: ["24 hours", "3 business days", "5 business days", "10 days"],
            correct: 2,
            explanation: "Per TRC 724.032, arresting officer must make written report (DIC-23) of refusal to department director within 5 business days after arrest.",
            objective: "22.29",
            module: "7"
        },
        {
            id: 741,
            category: "litter",
            difficulty: "basic",
            question: "Only non-decayable waste is considered 'litter'.",
            options: ["True", "False"],
            correct: 1,
            explanation: "FALSE. Per HSC 365.011(6), litter includes BOTH (A) decayable waste (animal/vegetable waste from establishments, food preparation) AND (B) nondecayable solid waste (paper, metal, appliances, etc.).",
            objective: "22.5",
            module: "7"
        },

        // MODULE 3 REVIEW QUESTIONS FROM HANDOUT
        {
            id: 755,
            category: "definitions",
            difficulty: "basic",
            question: "A person 'steering' a vehicle being towed with a tow chain is the operator of that vehicle.",
            options: ["True", "False"],
            correct: 1,
            explanation: "FALSE. Per TRC 541.001(1-a), operator means person who drives or has physical control of vehicle. Person steering vehicle being towed does not have control of movement - the towing vehicle does.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 756,
            category: "definitions",
            difficulty: "intermediate",
            question: "Which of the following is not an authorized emergency vehicle?",
            options: ["Police vehicle on routine patrol", "Tissue bank vehicle making emergency delivery", "Volunteer firefighter returning from fire", "Private ambulance parked while paramedics eat"],
            correct: 0,
            explanation: "A) Police vehicle on routine patrol. Per TRC 541.201, authorized emergency vehicle includes tissue bank emergency deliveries, volunteer firefighter vehicles responding/returning from emergency, and ambulances. Routine patrol is not emergency use.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 757,
            category: "definitions",
            difficulty: "basic",
            question: "A physician responding to an emergency in his personal vehicle would be considered to be operating an authorized emergency vehicle.",
            options: ["True", "False"],
            correct: 1,
            explanation: "FALSE. Per TRC 541.201, physician's personal vehicle not listed as authorized emergency vehicle. Only specific vehicle types listed qualify for emergency vehicle privileges.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 758,
            category: "definitions",
            difficulty: "basic",
            question: "A bus is a motor vehicle designed to transport how many people?",
            options: ["More than 10 passengers", "More than 15 passengers", "More than 20 passengers", "More than 25 passengers"],
            correct: 1,
            explanation: "More than 15 passengers, including the driver. Per TRC 541.201(3), bus means motor vehicle designed to transport more than 15 passengers including driver.",
            objective: "22.2",
            module: "3"
        },
        {
            id: 759,
            category: "definitions",
            difficulty: "basic",
            question: "When a charter bus company is hired by a school to take children on field trip, that bus is considered to be a school bus.",
            options: ["True", "False"],
            correct: 1,
            explanation: "FALSE. Per TRC 541.201(20), school bus means motor vehicle designed to transport students to/from school or school-related activity. Charter bus hired by school doesn't meet definition - it's operated by charter company, not school.",
            objective: "22.2",
            module: "3"
        },

        // MODULE 4 REVIEW QUESTIONS FROM HANDOUT
        {
            id: 760,
            category: "vehicle-operations",
            difficulty: "basic",
            question: "An operator passing another vehicle shall return to an authorized lane of travel before coming within _____ of an approaching vehicle.",
            options: ["100 feet", "200 feet", "300 feet", "500 feet"],
            correct: 1,
            explanation: "200 feet. Per TRC 545.053(c), operator passing shall return to authorized lane before coming within 200 feet of approaching vehicle in opposite direction.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 761,
            category: "vehicle-operations",
            difficulty: "basic",
            question: "It is a violation for an operator to cross over a double yellow no passing zone center stripe to turn left into a private drive.",
            options: ["True", "False"],
            correct: 1,
            explanation: "FALSE. Per TRC 545.057, operator may drive to left of center when safely turning left. Double yellow lines prohibit passing, not left turns into driveways.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 762,
            category: "vehicle-operations",
            difficulty: "basic",
            question: "An operator on a roadway divided into two or more clearly marked lanes shall drive entirely within a single lane and may not move from the lane unless movement can be made safely.",
            options: ["True", "False"],
            correct: 0,
            explanation: "TRUE. Per TRC 545.060(a), operator shall drive as nearly as practicable entirely within single lane and may not move unless movement can be made safely.",
            objective: "22.9",
            module: "4"
        },
        {
            id: 763,
            category: "vehicle-operations",
            difficulty: "basic",
            question: "Following another vehicle with following distance of less than _____ constitutes prima facie evidence of 'Following Too Closely'.",
            options: ["3 seconds", "200 feet", "Four car-lengths", "A specific following distance is not specified in the law"],
            correct: 3,
            explanation: "A specific following distance is not specified in the law. Per TRC 545.062, offense is following more closely than reasonable and prudent considering speed, traffic, road conditions. No specific distance in statute.",
            objective: "22.9",
            module: "4"
        },

        // MODULE 5 REVIEW QUESTIONS FROM HANDOUT
        {
            id: 764,
            category: "emergency-vehicles",
            difficulty: "intermediate",
            question: "Which of the following situations does not permit an authorized emergency vehicle to disregard a red traffic signal?",
            options: ["Police catching violator for routine traffic stop", "Volunteer firefighter responding to fire alarm", "Police escorting oversized load", "Physician responding to emergency"],
            correct: 0,
            explanation: "A) Police officer catching up to violator for routine traffic stop. Per TRC 546.002, conduct permitted only when responding to emergency call, pursuing suspected violator, or responding to but not returning from fire alarm. Routine traffic stops don't qualify.",
            objective: "22.16",
            module: "5"
        },
        {
            id: 765,
            category: "emergency-vehicles",
            difficulty: "basic",
            question: "The operator of an authorized emergency vehicle may proceed past a red light or stop sign, but only after:",
            options: ["Changing siren tone", "Yelling 'clear' loudly", "Slowing down", "Slowing as necessary for safe operation"],
            correct: 3,
            explanation: "Slowing as necessary for safe operation. Per TRC 546.001(2), may proceed past red signal/stop sign only after slowing as necessary for safe operation. Must ensure safety before proceeding.",
            objective: "22.16",
            module: "5"
        },
        {
            id: 766,
            category: "vehicle-equipment",
            difficulty: "basic",
            question: "A slow moving vehicle is designed to operate at a maximum speed of:",
            options: ["20 MPH", "25 MPH", "30 MPH", "35 MPH"],
            correct: 1,
            explanation: "25 MPH. Per TRC 547.001(6), slow-moving vehicle means vehicle designed to operate at maximum speed of 25 MPH or less.",
            objective: "22.17",
            module: "5"
        },

        // MODULE 6 REVIEW QUESTIONS FROM HANDOUT  
        {
            id: 767,
            category: "collisions",
            difficulty: "basic",
            question: "A driver is required to immediately stop at scene of collision any time they are involved in crash with another vehicle that is attended by a person, even if other person is not injured.",
            options: ["True", "False"],
            correct: 0,
            explanation: "TRUE. Per TRC 550.021, operator of vehicle involved in accident resulting in injury/death OR damage to attended vehicle shall immediately stop at scene or return immediately to scene.",
            objective: "22.30",
            module: "6"
        },
        {
            id: 768,
            category: "bicycle-operations",
            difficulty: "basic",
            question: "A person riding a bicycle must abide by all traffic laws except those laws that by their nature cannot apply to a bicycle.",
            options: ["True", "False"],
            correct: 0,
            explanation: "TRUE. Per TRC 551.101, person operating bicycle has all rights and duties applicable to driver of vehicle except those provisions that by their nature cannot apply. Bicycles follow traffic laws.",
            objective: "22.19",
            module: "6"
        },
        {
            id: 769,
            category: "low-powered-vehicles",
            difficulty: "basic",
            question: "An electric personal assistive mobility device may only be operated on a roadway with speed limit of _____ or less.",
            options: ["25 MPH", "30 MPH", "35 MPH", "40 MPH"],
            correct: 1,
            explanation: "30 MPH or less. Per TRC 551.202(b), EPAMD may not operate on roadway with speed limit >30 MPH.",
            objective: "22.19",
            module: "6"
        },

        // ADDITIONAL MODULE 7 REVIEW QUESTIONS - MISSING ONES
        {
            id: 742,
            category: "pedestrians",
            difficulty: "intermediate",
            question: "A pedestrian does not commit a violation if they begin crossing in a crosswalk after the pedestrian control signal displays a flashing red hand as long as they make it across before the solid red hand is displayed.",
            options: ["True", "False"],
            correct: 1,
            explanation: "FALSE. Per TRC 552.002, pedestrian may not begin crossing when 'Don't Walk' (solid red hand) or 'Wait' (flashing red hand) signals are present. If already partially crossed when wait signal displayed, should proceed to sidewalk or safety island.",
            objective: "22.19",
            module: "7"
        },
        {
            id: 743,
            category: "pedestrians",
            difficulty: "basic",
            question: "What is the maximum speed for a motorized mobility device and how are they treated?",
            options: ["15 mph; like bicycles", "8 mph; like pedestrians", "25 mph; like motor vehicles", "No speed limit; like wheelchairs"],
            correct: 1,
            explanation: "Per TRC 552A.0101, motorized mobility device not capable of speeds exceeding 8 mph and operator considered pedestrian. Device has 3+ wheels, battery-powered motor, ≤1 forward gear, designed for disabled persons.",
            objective: "22.19",
            module: "7"
        },
        {
            id: 744,
            category: "financial-responsibility",
            difficulty: "intermediate",
            question: "How many acceptable methods exist for establishing financial responsibility?",
            options: ["3 methods", "5 methods", "7 methods", "Only insurance allowed"],
            correct: 1,
            explanation: "Per TRC 601.051, five methods: (1) insurance policy, (2) surety bond, (3) $55,000 deposit with state comptroller, (4) $55,000 deposit with county judge, (5) self-insurance (25+ vehicles).",
            objective: "22.26",
            module: "7"
        },
        {
            id: 745,
            category: "financial-responsibility",
            difficulty: "basic",
            question: "Prior to issuing a citation for failure to maintain financial responsibility, a peace officer must attempt to verify financial responsibility through the Financial Responsibility Verification Program.",
            options: ["True", "False"],
            correct: 0,
            explanation: "TRUE. Per TRC 601.053(c), prior to issuing citation, peace officer must attempt to verify through FRVP. For DPS officers, occurs automatically when running license plate. Citation must indicate officer unable to verify through database.",
            objective: "22.26",
            module: "7"
        },
        {
            id: 746,
            category: "financial-responsibility",
            difficulty: "basic",
            question: "A person must have at least 26 vehicles registered in their name to be a candidate for self-insurance.",
            options: ["True", "False"],
            correct: 1,
            explanation: "FALSE. Per TRC 601.124, person in whose name MORE than 25 motor vehicles are registered may qualify. So 26+ vehicles qualifies, but statement says 'at least 26' which is technically correct for qualification.",
            objective: "22.26",
            module: "7"
        },
        {
            id: 747,
            category: "size-weight",
            difficulty: "basic",
            question: "What is the maximum width for a vehicle that is not a passenger vehicle?",
            options: ["96 inches", "102 inches", "108 inches", "No limit"],
            correct: 1,
            explanation: "Per TRC 621.201, vehicles other than passenger vehicles: ≤102 inches including load but excluding safety devices (mirrors don't count). No left/right extension limits if total ≤102 inches.",
            objective: "22.28",
            module: "7"
        },
        {
            id: 748,
            category: "size-weight",
            difficulty: "intermediate",
            question: "What is the maximum length for a truck tractor?",
            options: ["45 feet", "59 feet", "65 feet", "No limit"],
            correct: 3,
            explanation: "Per TRC 621.203, there is NO length limitation for truck-tractor. Only motor vehicles (other than truck-tractors) limited to 45 feet. When combined with trailers, only trailers have specific length limits.",
            objective: "22.28",
            module: "7"
        },
        {
            id: 749,
            category: "miscellaneous-provisions",
            difficulty: "basic",
            question: "An electric bicycle has a top assisted speed of _____ MPH or less.",
            options: ["20 MPH", "25 MPH", "28 MPH", "30 MPH"],
            correct: 2,
            explanation: "Per TRC 664.001, electric bicycle has top assisted speed of 28 MPH or less. Also has fully operable pedals and electric motor <750 watts. Must be ≥15 years old to operate Class 3 electric bicycle.",
            objective: "22.19",
            module: "7"
        },
        {
            id: 750,
            category: "privileged-parking",
            difficulty: "intermediate",
            question: "A vehicle displaying disabled license plates may park in a disabled parking spot even if the vehicle is not being operated by or for the person with a disability at the time.",
            options: ["True", "False"],
            correct: 1,
            explanation: "FALSE. Per TRC 681.006 and 681.011(a), vehicle may utilize disabled parking only if BOTH: (1) operated by or for disabled person AND (2) displays disabled plate/placard. Having plates alone insufficient.",
            objective: "22.23",
            module: "7"
        },
        {
            id: 751,
            category: "privileged-parking",
            difficulty: "basic",
            question: "A person with a disability may park in a disabled parking spot even if they have not obtained disabled license plates or a disabled parking placard.",
            options: ["True", "False"],
            correct: 1,
            explanation: "FALSE. Per TRC 681.011(b), offense if vehicle standing in disabled space and NOT displaying disabled plates/placard. Must have proper identification displayed regardless of disability status.",
            objective: "22.23",
            module: "7"
        },
        {
            id: 752,
            category: "miscellaneous-provisions",
            difficulty: "basic",
            question: "The Texas Driver Responsibility Program was repealed effective:",
            options: ["January 1, 2019", "September 1, 2019", "January 1, 2020", "Still in effect"],
            correct: 1,
            explanation: "Per TRC 708, Driver Responsibility Program repealed effective September 1, 2019. All DRP surcharge assessments waived, no future charges. Individuals still responsible for other fines/fees not related to DRP.",
            objective: "22.21",
            module: "7"
        },
        {
            id: 753,
            category: "implied-consent",
            difficulty: "intermediate",
            question: "If a DWI suspect refuses to provide a specimen, an officer may take a mandatory specimen only if:",
            options: ["Officer has probable cause", "Suspect is unconscious", "Officer obtains warrant OR has probable cause of exigent circumstances", "Crash involved fatality"],
            correct: 2,
            explanation: "Per TRC 724.012(e), officer may not require specimen unless: (1) obtains warrant OR (2) has probable cause exigent circumstances exist. Missouri v. McNeely: exigent circumstances very difficult to establish.",
            objective: "22.29",
            module: "7"
        },
        {
            id: 754,
            category: "litter",
            difficulty: "basic",
            question: "The level of offense for littering is determined by the:",
            options: ["Size or shape of litter", "Weight or volume of litter", "Flammability of litter", "Cost to clean up"],
            correct: 1,
            explanation: "Per HSC 365.012, offense level based on weight or volume: <5 lbs/5 gal = Class C, 5-500 lbs or 5-100 cubic feet = Class B, 500-1000 lbs or 100-200 cubic feet = Class A, ≥1000 lbs or ≥200 cubic feet = State Jail Felony.",
            objective: "22.5",
            module: "7"
        }
    ],

    // Learning objectives mapping for Module 1
    objectives: {
        "22.2": "Define the following terms in the TC: Bodily Injury, Serious Bodily Injury, Individual, Public Place, Death",
        "22.25": "Discuss the requirement for registration of vehicles",
        "22.27": "Given a situation involving warning signs and devices, determine if a violation of law exists",
        "22.30": "Illustrate a working knowledge of the laws, methods, and techniques relative to crash investigation to include when and where the TC applies in crash investigation"
    },

    // Category definitions for the app interface
    categories: {
        "penal-code": {
            name: "Penal Code",
            description: "Foundational definitions that enhance TRC violations",
            icon: "fas fa-gavel",
            color: "#dc3545"
        },
        "warning-devices": {
            name: "Warning Devices",
            description: "TRC 472 - Construction zones, barricades, and flaggers",
            icon: "fas fa-exclamation-triangle",
            color: "#ffc107"
        },
        "registration": {
            name: "Registration",
            description: "TRC 502 - Vehicle registration requirements and exemptions",
            icon: "fas fa-clipboard-list",
            color: "#007bff"
        },
        "dealer-plates": {
            name: "Dealer Plates",
            description: "TRC 503 - Metal plates, temporary tags, and dealer violations",
            icon: "fas fa-car-side",
            color: "#6f42c1"
        },
        "license-plates": {
            name: "License Plates",
            description: "TRC 504 - Display requirements and plate violations",
            icon: "fas fa-id-badge",
            color: "#e83e8c"
        },
        "licensing": {
            name: "Driver's Licenses",
            description: "TRC 521 - Driver's license requirements, exemptions, and violations",
            icon: "fas fa-id-card",
            color: "#20c997"
        },
        "commercial-vehicles": {
            name: "Commercial Driver's Licenses",
            description: "TRC 522 - CDL requirements, classifications, and violations",
            icon: "fas fa-truck",
            color: "#fd7e14"
        },
        "definitions": {
            name: "TRC Definitions",
            description: "TRC 541 - Fundamental definitions used throughout transportation code",
            icon: "fas fa-book",
            color: "#17a2b8"
        },
        "vehicle-definitions": {
            name: "Vehicle Classifications",
            description: "TRC 541 - Vehicle types and classifications",
            icon: "fas fa-cars",
            color: "#28a745"
        },
        "general-provisions": {
            name: "General Provisions",
            description: "TRC 542 - General traffic law provisions and authority",
            icon: "fas fa-balance-scale",
            color: "#6c757d"
        },
        "arrest-prosecution": {
            name: "Arrest & Prosecution",
            description: "TRC 543 - Procedures for arrest and prosecution of traffic violators",
            icon: "fas fa-handcuffs",
            color: "#343a40"
        },
        "traffic-control": {
            name: "Traffic Signs & Signals",
            description: "TRC 544 - Traffic control devices, signs, signals, and markings",
            icon: "fas fa-traffic-light",
            color: "#007bff"
        },
        "vehicle-operations": {
            name: "Vehicle Operations",
            description: "TRC 545 - Basic vehicle operation rules and roadway positioning",
            icon: "fas fa-road",
            color: "#495057"
        },
        "passing": {
            name: "Passing Rules",
            description: "TRC 545 - Safe passing procedures and requirements",
            icon: "fas fa-arrow-left",
            color: "#6f42c1"
        },
        "speed": {
            name: "Speed Regulations",
            description: "TRC 545 - Speed limits and reasonable/prudent speed requirements",
            icon: "fas fa-tachometer-alt",
            color: "#dc3545"
        },
        "following": {
            name: "Following Distance",
            description: "TRC 545 - Safe following distance requirements",
            icon: "fas fa-car-crash",
            color: "#ffc107"
        },
        "lane-usage": {
            name: "Lane Usage",
            description: "TRC 545 - Lane discipline and roadway positioning rules",
            icon: "fas fa-road",
            color: "#17a2b8"
        },
        "motorcycle-operations": {
            name: "Motorcycle Operations",
            description: "TRC 545 - Special rules for motorcycle operation",
            icon: "fas fa-motorcycle",
            color: "#fd7e14"
        },
        "turning": {
            name: "Turning Rules",
            description: "TRC 545 - Proper turning procedures and requirements",
            icon: "fas fa-share",
            color: "#20c997"
        },
        "signaling": {
            name: "Signaling Requirements",
            description: "TRC 545 - Turn signal and hand signal requirements",
            icon: "fas fa-hand-paper",
            color: "#e83e8c"
        },
        "right-of-way": {
            name: "Right-of-Way",
            description: "TRC 545 - Right-of-way rules at intersections",
            icon: "fas fa-hand-point-right",
            color: "#28a745"
        },
        "emergency-vehicles": {
            name: "Emergency Vehicles",
            description: "TRC 546 - Operation of authorized emergency vehicles and signal requirements",
            icon: "fas fa-ambulance",
            color: "#dc3545"
        },
        "vehicle-equipment": {
            name: "Vehicle Equipment",
            description: "TRC 547 - Vehicle equipment definitions, requirements, and exemptions",
            icon: "fas fa-tools",
            color: "#6c757d"
        },
        "lighting": {
            name: "Vehicle Lighting",
            description: "TRC 547 - Comprehensive lighting requirements, restrictions, and standards",
            icon: "fas fa-lightbulb",
            color: "#ffc107"
        },
        "vehicle-inspections": {
            name: "Vehicle Inspections",
            description: "TRC 548 - Vehicle inspection requirements and exemptions",
            icon: "fas fa-clipboard-check",
            color: "#007bff"
        },
        "collision-investigation": {
            name: "Collision Investigation",
            description: "TRC 550 - Collision reporting, investigation authority, and driver duties",
            icon: "fas fa-car-crash",
            color: "#343a40"
        },
        "bicycle-operations": {
            name: "Bicycle Operations",
            description: "TRC 551 - Bicycle rights, duties, and safety equipment requirements",
            icon: "fas fa-bicycle",
            color: "#17a2b8"
        },
        "low-powered-vehicles": {
            name: "Low-Powered Vehicles",
            description: "TRC 551 & 551A - NEVs, golf carts, EPAMDs, motor-assisted scooters, and off-highway vehicles",
            icon: "fas fa-golf-ball",
            color: "#20c997"
        },
        "pedestrians": {
            name: "Pedestrians",
            description: "TRC 552 & 552A - Pedestrian rights, duties, and positioning requirements",
            icon: "fas fa-walking",
            color: "#28a745"
        },
        "miscellaneous-provisions": {
            name: "Miscellaneous Provisions",
            description: "TRC 600 - Material removal and highway cleanup responsibilities",
            icon: "fas fa-broom",
            color: "#6f42c1"
        },
        "financial-responsibility": {
            name: "Financial Responsibility",
            description: "TRC 601 - Motor vehicle insurance and financial responsibility requirements",
            icon: "fas fa-shield-alt",
            color: "#007bff"
        },
        "size-weight": {
            name: "Size and Weight",
            description: "TRC 621 - Vehicle size, weight, and dimension limitations",
            icon: "fas fa-ruler-combined",
            color: "#fd7e14"
        },
        "motorcycle-helmets": {
            name: "Motorcycle Helmets",
            description: "TRC 661 - Protective headgear requirements for motorcycle operators and passengers",
            icon: "fas fa-motorcycle",
            color: "#e83e8c"
        },
        "privileged-parking": {
            name: "Privileged Parking",
            description: "TRC 681 - Disabled parking regulations and enforcement",
            icon: "fas fa-wheelchair",
            color: "#17a2b8"
        },
        "abandoned-vehicles": {
            name: "Abandoned Vehicles",
            description: "TRC 683 - Abandoned motor vehicle definitions and removal authority",
            icon: "fas fa-car-crash",
            color: "#6c757d"
        },
        "implied-consent": {
            name: "Implied Consent",
            description: "TRC 724 - DWI specimen collection and refusal procedures",
            icon: "fas fa-vial",
            color: "#dc3545"
        },
        "litter": {
            name: "Litter",
            description: "HSC 365 - Litter definitions, disposal prohibitions, and penalties",
            icon: "fas fa-trash",
            color: "#28a745"
        }
    },

    // Module organization for easy reference
    modules: {
        "1": {
            title: "Warning Devices, Registration, Dealer Plates, License Plates",
            chapters: ["PC 1.07", "PC 19.04-19.05", "PC 49.07-49.08", "TRC 472", "TRC 502", "TRC 503", "TRC 504"],
            description: "Foundation module covering Penal Code definitions and Texas Transportation Code Chapters 472, 502, 503, and 504"
        },
        "2": {
            title: "Driver's Licenses and Commercial Driver's Licenses",
            chapters: ["TRC 521", "TRC 522"],
            description: "Comprehensive coverage of driver's license requirements, exemptions, and commercial driver's license regulations"
        },
        "3": {
            title: "Definitions, General Provisions, Arrest & Prosecution, Traffic Control",
            chapters: ["TRC 541", "TRC 542", "TRC 543", "TRC 544"],
            description: "Foundation definitions and core traffic law provisions including arrest procedures and traffic control devices"
        },
        "4": {
            title: "Operation and Movement of Vehicles",
            chapters: ["TRC 545"],
            description: "Comprehensive coverage of vehicle operation rules including roadway positioning, passing, speed regulations, and following distance"
        },
        "5": {
            title: "Emergency Vehicles and Vehicle Equipment",
            chapters: ["TRC 546", "TRC 547"],
            description: "Emergency vehicle operations, permissible conduct, and comprehensive vehicle equipment and lighting requirements"
        },
        "6": {
            title: "Vehicle Inspections, Collisions, Bicycles & Low-Powered Vehicles",
            chapters: ["TRC 548", "TRC 550", "TRC 551", "TRC 551A"],
            description: "Vehicle inspection requirements, collision investigation and reporting, bicycle operations, and low-powered vehicle regulations including NEVs, golf carts, and off-highway vehicles"
        },
        "7": {
            title: "Pedestrians, Financial Responsibility, Size/Weight, Miscellaneous Provisions",
            chapters: ["TRC 552", "TRC 601", "TRC 621", "TRC 661", "TRC 681", "TRC 682", "TRC 683", "TRC 724", "HSC 365"],
            description: "Pedestrian safety and responsibilities, motor vehicle financial responsibility, vehicle size and weight regulations, motorcycle helmet requirements, privileged parking, abandoned vehicles, implied consent laws, and litter provisions"
        }
    }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = studyData;
} else {
    window.studyData = studyData;
}
