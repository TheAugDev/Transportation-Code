// Additional Advanced Property Offenses Questions
// Complex scenarios and edge cases for comprehensive TCOLE preparation

const advancedPropertyQuestions = [
    // Complex Criminal Mischief Scenarios
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

    // Complex Arson Scenarios
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

    // Complex Animal Cruelty Scenarios
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

    // Complex Police Service Animal Scenarios
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

    // Complex Graffiti and Aggregation Scenarios
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

    // Complex Railroad and Transportation Scenarios
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

    // Comprehensive Scenario Questions
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

    // Edge Cases and Technical Applications
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

    // Professional Application Questions
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
    }
];

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = advancedPropertyQuestions;
} else {
    window.advancedPropertyQuestions = advancedPropertyQuestions;
}
