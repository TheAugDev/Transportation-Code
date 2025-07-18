// Property and Trespassing Offenses - Practice Questions
// Generated from TCOLE/BPOC Student Handout Content
// Chapters 28, 30, and 42

const propertyOffensesQuestions = [
    // Professional vs Semi-Professional vs Street Thieves
    {
        id: 5001,
        category: "criminal-types",
        difficulty: "intermediate",
        question: "What is considered the 'Achilles Heel' of burglary and theft crimes?",
        options: [
            "Gaining entry to the premises",
            "Disposal of the stolen property",
            "Avoiding eyewitnesses during the crime",
            "Planning the operation"
        ],
        correct: 1,
        explanation: "The disposal of stolen property is the weakness (Achilles Heel) of property crimes. Professional criminals often work with fences to dispose of stolen goods.",
        objective: "32.7"
    },
    {
        id: 5002,
        category: "criminal-types",
        difficulty: "basic",
        question: "Which type of thief is MOST likely to be armed and take reckless chances to avoid apprehension?",
        options: [
            "Professional thief",
            "Semi-professional thief", 
            "Street thief",
            "White collar criminal"
        ],
        correct: 2,
        explanation: "Street thieves often carry weapons and take reckless chances to avoid apprehension. They are usually stealing for trading material to procure narcotics or alcohol.",
        objective: "32.8"
    },
    {
        id: 5003,
        category: "criminal-types",
        difficulty: "intermediate",
        question: "A professional thief will rarely be armed because:",
        options: [
            "They prefer non-violent crimes",
            "Weapons are too expensive",
            "They would get more time for a weapon charge than the theft charge",
            "It makes the crime more noticeable"
        ],
        correct: 2,
        explanation: "Professional thieves rarely carry weapons since they would get more time for a weapon charge than the theft charge. They prefer to use their mind to outwit officers.",
        objective: "32.8"
    },
    {
        id: 5004,
        category: "criminal-types",
        difficulty: "intermediate",
        question: "Semi-professional (unskilled) thieves differ from professional thieves in that they:",
        options: [
            "Are more involved in planning and preparation",
            "Are less likely to resort to violence",
            "Are more interested in getting money for drugs",
            "Work alone and never with accomplices"
        ],
        correct: 2,
        explanation: "Semi-professional thieves may be more interested in getting money for drugs, are less involved in planning, and are more likely to resort to violence against victims.",
        objective: "32.7"
    },

    // Chapter 28 Definitions
    {
        id: 5005,
        category: "property-definitions",
        difficulty: "basic",
        question: "Under Penal Code 28.01, 'Property' includes all of the following EXCEPT:",
        options: [
            "Real property",
            "Tangible personal property",
            "A document representing anything of value",
            "Services rendered by a person"
        ],
        correct: 3,
        explanation: "Property means: (A) real property; (B) tangible or intangible personal property, including anything severed from land; or (C) a document, including money, that represents or embodies anything of value. Services are not included.",
        objective: "8.15"
    },
    {
        id: 5006,
        category: "property-definitions",
        difficulty: "basic",
        question: "A 'Habitation' under PC 28.01 means:",
        options: [
            "Any building used for business purposes",
            "A structure or vehicle adapted for overnight accommodation of persons",
            "Only single-family residential homes",
            "Any fenced area around a building"
        ],
        correct: 1,
        explanation: "Habitation means a structure or vehicle that is adapted for the overnight accommodation of persons and includes each separately secured portion and connected structures.",
        objective: "8.15"
    },
    {
        id: 5007,
        category: "property-definitions",
        difficulty: "intermediate",
        question: "Under PC 28.05, having an interest in property that is damaged or destroyed:",
        options: [
            "Is always a complete defense to prosecution",
            "Is a defense only if you own more than 50% of the property",
            "Is NO defense if another person also has an interest you're not entitled to infringe",
            "Is only a defense for family members"
        ],
        correct: 2,
        explanation: "PC 28.05 states it is NO defense to prosecution that the actor has an interest in the property if another person also has an interest that the actor is not entitled to infringe.",
        objective: "8.15"
    },

    // Pecuniary Loss Calculations
    {
        id: 5008,
        category: "pecuniary-loss",
        difficulty: "intermediate",
        question: "Under PC 28.06, if property is DESTROYED, the amount of pecuniary loss is:",
        options: [
            "Always the original purchase price",
            "The fair market value at the time and place of destruction",
            "The sentimental value to the owner",
            "The cost to repair the property"
        ],
        correct: 1,
        explanation: "If property is destroyed, pecuniary loss is the fair market value at the time and place of destruction, or if that cannot be ascertained, the cost of replacing the property within a reasonable time.",
        objective: "8.15"
    },
    {
        id: 5009,
        category: "pecuniary-loss",
        difficulty: "intermediate",
        question: "Under PC 28.06, if property is DAMAGED (not destroyed), the amount of pecuniary loss is:",
        options: [
            "The fair market value at the time of damage",
            "The cost of repairing or restoring the damaged property within a reasonable time",
            "The replacement cost of the entire item",
            "The original purchase price minus depreciation"
        ],
        correct: 1,
        explanation: "If property is damaged, the pecuniary loss is the cost of repairing or restoring the damaged property within a reasonable time after the damage occurred.",
        objective: "8.15"
    },
    {
        id: 5010,
        category: "pecuniary-loss",
        difficulty: "advanced",
        question: "If the amount of pecuniary loss cannot be ascertained by the criteria in PC 28.06(a)-(c), the loss is deemed to be:",
        options: [
            "Less than $100",
            "Greater than $750 but less than $2,500",
            "Greater than $2,500 but less than $30,000",
            "Determined by the victim's estimate"
        ],
        correct: 1,
        explanation: "PC 28.06(d) states that if pecuniary loss cannot be ascertained by the specified criteria, the amount is deemed to be greater than $750 but less than $2,500.",
        objective: "8.15"
    },

    // Value Ladder Chart
    {
        id: 5011,
        category: "offense-levels",
        difficulty: "basic",
        question: "According to the Basic Value Loss Ladder Chart, a loss of $1,200 would be what level offense?",
        options: [
            "Class C misdemeanor",
            "Class B misdemeanor", 
            "Class A misdemeanor",
            "State Jail Felony"
        ],
        correct: 2,
        explanation: "According to the value ladder, $750 to less than $2,500 is a Class A misdemeanor. $1,200 falls within this range.",
        objective: "8.15"
    },
    {
        id: 5012,
        category: "offense-levels",
        difficulty: "basic",
        question: "A property loss of $45,000 would result in what degree felony?",
        options: [
            "State Jail Felony",
            "3rd Degree Felony", 
            "2nd Degree Felony",
            "1st Degree Felony"
        ],
        correct: 1,
        explanation: "According to the value ladder, $30,000 to less than $150,000 is a 3rd Degree Felony. $45,000 falls within this range.",
        objective: "8.15"
    },

    // Criminal Mischief PC 28.03
    {
        id: 5013,
        category: "criminal-mischief",
        difficulty: "basic",
        question: "Criminal Mischief under PC 28.03 includes all of the following EXCEPT:",
        options: [
            "Intentionally damaging tangible property without consent",
            "Tampering with property causing pecuniary loss or substantial inconvenience",
            "Making markings on tangible property without consent",
            "Recklessly damaging property during a lawful arrest"
        ],
        correct: 3,
        explanation: "Criminal Mischief requires acting without effective consent and involves intentional or knowing conduct in damaging, tampering with, or marking property. Reckless damage during lawful duties may have different provisions.",
        objective: "8.15"
    },
    {
        id: 5014,
        category: "criminal-mischief",
        difficulty: "intermediate",
        question: "Criminal Mischief involving damage to a habitation by a firearm or explosive weapon with less than $2,500 damage is:",
        options: [
            "Class A misdemeanor",
            "State Jail Felony",
            "3rd Degree Felony",
            "2nd Degree Felony"
        ],
        correct: 1,
        explanation: "PC 28.03(b)(4)(B) makes it a State Jail Felony if the property damaged is a habitation and the damage is caused by a firearm or explosive weapon, even if the loss is less than $2,500.",
        objective: "8.15"
    },
    {
        id: 5015,
        category: "criminal-mischief",
        difficulty: "advanced",
        question: "Under PC 28.03, criminal mischief involving livestock and introducing mad cow disease is:",
        options: [
            "State Jail Felony",
            "3rd Degree Felony",
            "2nd Degree Felony", 
            "1st Degree Felony"
        ],
        correct: 3,
        explanation: "PC 28.03(i) makes it a 1st Degree Felony if the property is livestock and damage is caused by introducing bovine spongiform encephalopathy (mad cow disease).",
        objective: "8.15"
    },
    {
        id: 5016,
        category: "criminal-mischief",
        difficulty: "intermediate",
        question: "Criminal mischief involving a fence containing cattle, bison, horses, sheep, swine, goats, or exotic livestock is enhanced to:",
        options: [
            "Class A misdemeanor regardless of damage amount",
            "State Jail Felony if damage is less than $2,500",
            "3rd Degree Felony regardless of damage amount",
            "Enhancement depends only on the dollar amount"
        ],
        correct: 1,
        explanation: "PC 28.03(b)(4)(C) enhances criminal mischief to a State Jail Felony if the property was a fence used for production or containment of specified livestock, even if damage is less than $2,500.",
        objective: "8.15"
    },
    {
        id: 5017,
        category: "criminal-mischief",
        difficulty: "intermediate",
        question: "Under PC 28.03(c), it is presumed a person has knowingly tampered with utility property if the service has been:",
        options: [
            "Temporarily interrupted for maintenance",
            "Diverted from passing through a metering device",
            "Disconnected by the utility company for non-payment",
            "Reduced due to high demand periods"
        ],
        correct: 1,
        explanation: "PC 28.03(c) creates a presumption of knowing tampering if communication or supply has been diverted from a metering device, prevented from being correctly registered, or activated without a meter.",
        objective: "8.15"
    },
    {
        id: 5018,
        category: "criminal-mischief",
        difficulty: "advanced",
        question: "When multiple items are damaged in one scheme under PC 28.03(e), the amounts:",
        options: [
            "Must be charged as separate offenses",
            "Can be aggregated to determine the grade of offense",
            "Are limited to the highest single item value",
            "Cannot exceed $30,000 total"
        ],
        correct: 1,
        explanation: "PC 28.03(e) allows aggregation of pecuniary loss amounts when multiple items are damaged pursuant to one scheme or continuing course of conduct to determine the grade of offense.",
        objective: "8.15"
    },

    // Graffiti PC 28.08
    {
        id: 5019,
        category: "graffiti",
        difficulty: "basic",
        question: "Graffiti under PC 28.08 requires the use of:",
        options: [
            "Any marking device",
            "Paint, indelible marker, or etching/engraving device", 
            "Only spray paint",
            "Permanent materials only"
        ],
        correct: 1,
        explanation: "PC 28.08 specifically requires markings made with paint, an indelible marker, or an etching or engraving device without effective consent of the owner.",
        objective: "8.15"
    },
    {
        id: 5020,
        category: "graffiti",
        difficulty: "intermediate",
        question: "Graffiti on a school, place of worship, or public monument with $800 damage is:",
        options: [
            "Class A misdemeanor",
            "State Jail Felony",
            "3rd Degree Felony",
            "Follows normal value ladder"
        ],
        correct: 1,
        explanation: "PC 28.08(d) enhances graffiti to a State Jail Felony if made on specified locations (school, worship, burial, monument, community center) and the loss is $750 or more but less than $30,000.",
        objective: "8.15"
    },
    {
        id: 5021,
        category: "graffiti",
        difficulty: "basic",
        question: "An 'indelible marker' under PC 28.08 is defined as:",
        options: [
            "Any permanent marker",
            "A device that makes marks more difficult to erase than ordinary ink",
            "Only markers containing alcohol-based ink",
            "Markers that cannot be removed at all"
        ],
        correct: 1,
        explanation: "PC 28.08(e)(3) defines indelible marker as a device making marks with paint or ink specifically formulated to be more difficult to erase, wash out, or remove than ordinary products.",
        objective: "8.15"
    },

    // Reckless Damage PC 28.04
    {
        id: 5022,
        category: "reckless-damage",
        difficulty: "basic",
        question: "Reckless Damage or Destruction under PC 28.04 is:",
        options: [
            "Always a Class C misdemeanor",
            "Enhanced based on dollar amount like other property crimes",
            "A felony if it involves a vehicle",
            "Only applicable to real property"
        ],
        correct: 0,
        explanation: "PC 28.04 is always a Class C misdemeanor, regardless of the amount of damage. It requires recklessly damaging or destroying property without effective consent.",
        objective: "8.15"
    },

    // Railroad Property PC 28.07
    {
        id: 5023,
        category: "railroad-property",
        difficulty: "basic",
        question: "Under PC 28.07, 'Railroad property' includes:",
        options: [
            "Only the trains and rail cars",
            "Trains, tracks, bridges, and right-of-way owned or used by a railroad",
            "Only the tracks and rails",
            "Property within 100 feet of railroad tracks"
        ],
        correct: 1,
        explanation: "PC 28.07(a)(1) defines railroad property as trains, equipment, rolling stock, AND railroad tracks, rails, bridges, trestles, or right-of-way owned or used by a railroad.",
        objective: "8.15"
    },
    {
        id: 5024,
        category: "railroad-property",
        difficulty: "intermediate",
        question: "Throwing an object at a train under PC 28.07 is:",
        options: [
            "Class C misdemeanor",
            "Class B misdemeanor unless bodily injury occurs",
            "Always a felony",
            "State Jail Felony"
        ],
        correct: 1,
        explanation: "PC 28.07(c) makes throwing an object at a train a Class B misdemeanor, unless the person causes bodily injury to another, which enhances it to a 3rd Degree Felony.",
        objective: "8.15"
    },
    {
        id: 5025,
        category: "railroad-property",
        difficulty: "intermediate",
        question: "Simply entering or remaining on railroad property knowing it is railroad property is:",
        options: [
            "Class C misdemeanor",
            "Class B misdemeanor",
            "Class A misdemeanor", 
            "Not an offense if no damage occurs"
        ],
        correct: 0,
        explanation: "PC 28.07(d) makes entering or remaining on railroad property knowing it is railroad property a Class C misdemeanor, regardless of whether damage occurs.",
        objective: "8.15"
    },
    {
        id: 5026,
        category: "railroad-property",
        difficulty: "advanced",
        question: "Railroad employees are exempt from PC 28.07(b)(2)(A) if they have the right to engage in such conduct under:",
        options: [
            "Their employment contract",
            "State transportation regulations",
            "The Railway Labor Act",
            "Federal Railroad Administration rules"
        ],
        correct: 2,
        explanation: "PC 28.07(f) provides an exception for railroad employees or labor representatives who have the right to engage in conduct under the Railway Labor Act (45 U.S.C. Section 151 et seq.).",
        objective: "8.15"
    },

    // Arson PC 28.02
    {
        id: 5027,
        category: "arson",
        difficulty: "basic",
        question: "Under PC 28.02(a), Arson requires starting a fire or explosion with intent to:",
        options: [
            "Cause fear in others",
            "Destroy or damage specified property",
            "Create a public disturbance",
            "Collect insurance money"
        ],
        correct: 1,
        explanation: "PC 28.02(a) requires starting a fire or explosion with intent to destroy or damage vegetation, fence, or structure on open-space land, or buildings/habitations/vehicles under specified circumstances.",
        objective: "8.15"
    },
    {
        id: 5028,
        category: "arson",
        difficulty: "intermediate",
        question: "Arson under PC 28.02(a) is generally a _____ unless enhanced:",
        options: [
            "State Jail Felony",
            "3rd Degree Felony",
            "2nd Degree Felony",
            "1st Degree Felony"
        ],
        correct: 2,
        explanation: "PC 28.02(d) makes Arson under subsection (a) a 2nd Degree Felony, unless enhanced to 1st Degree Felony for bodily injury/death or targeting habitation/place of worship.",
        objective: "8.15"
    },
    {
        id: 5029,
        category: "arson",
        difficulty: "intermediate",
        question: "Arson is enhanced to a 1st Degree Felony if:",
        options: [
            "The fire spreads beyond the intended target",
            "Bodily injury or death occurs OR the target was a habitation/place of worship",
            "Property damage exceeds $300,000",
            "Multiple structures are involved"
        ],
        correct: 1,
        explanation: "PC 28.02(d) enhances Arson to 1st Degree Felony if bodily injury or death occurs by reason of the offense, OR if the intended target was a habitation or place of assembly or worship.",
        objective: "8.15"
    },
    {
        id: 5030,
        category: "arson",
        difficulty: "advanced",
        question: "Under PC 28.02(a-1), recklessly starting a fire while manufacturing controlled substances is:",
        options: [
            "Class A misdemeanor",
            "State Jail Felony unless bodily injury/death occurs",
            "3rd Degree Felony",
            "2nd Degree Felony"
        ],
        correct: 1,
        explanation: "PC 28.02(e) makes Arson under (a-1) a State Jail Felony, except it becomes a 3rd Degree Felony if bodily injury or death was suffered by any person.",
        objective: "8.15"
    },
    {
        id: 5031,
        category: "arson",
        difficulty: "intermediate",
        question: "It is an exception to Arson charges if the fire was:",
        options: [
            "Accidental",
            "Part of controlled burning of open-space land",
            "Started by lightning",
            "Started for warmth during cold weather"
        ],
        correct: 1,
        explanation: "PC 28.02(b) provides an exception for fires that are part of the controlled burning of open-space land. Additionally, (c) provides a defense if proper permits were obtained.",
        objective: "8.15"
    },

    // Animal Cruelty - Livestock PC 42.09
    {
        id: 5032,
        category: "animal-cruelty",
        difficulty: "basic",
        question: "Under PC 42.09, 'Livestock animal' includes:",
        options: [
            "Only cattle, sheep, and swine",
            "Cattle, sheep, swine, goats, horses, and poultry commonly raised for consumption",
            "All farm animals including chickens and turkeys",
            "Any animal kept on agricultural property"
        ],
        correct: 1,
        explanation: "PC 42.09(b)(5) defines livestock animal as cattle, sheep, swine, goats, ratites, poultry commonly raised for consumption, horses/ponies/mules/donkeys, and native/nonnative hoofstock or fowl raised under agricultural practices.",
        objective: "8.15"
    },
    {
        id: 5033,
        category: "animal-cruelty",
        difficulty: "intermediate",
        question: "Torturing a livestock animal under PC 42.09(a)(1) is:",
        options: [
            "Class A misdemeanor",
            "State Jail Felony",
            "3rd Degree Felony",
            "2nd Degree Felony"
        ],
        correct: 1,
        explanation: "PC 42.09(c) makes torture of livestock animals a State Jail Felony, enhanced to 3rd Degree Felony with two prior convictions under this section or 42.092.",
        objective: "8.15"
    },
    {
        id: 5034,
        category: "animal-cruelty",
        difficulty: "intermediate",
        question: "Failing to provide necessary food, water, or care to livestock in your custody is:",
        options: [
            "Class A misdemeanor",
            "State Jail Felony",
            "3rd Degree Felony",
            "Not an offense if the animal survives"
        ],
        correct: 0,
        explanation: "PC 42.09(c) makes failing to provide necessary food, water, or care a Class A misdemeanor, enhanced to State Jail Felony with two prior convictions.",
        objective: "8.15"
    },
    {
        id: 5035,
        category: "animal-cruelty",
        difficulty: "advanced",
        question: "It is a defense to livestock cruelty prosecution if the conduct was:",
        options: [
            "Done by a family member",
            "Generally accepted animal husbandry or agriculture practice",
            "Done to protect other animals",
            "Done with veterinary supervision"
        ],
        correct: 1,
        explanation: "PC 42.09(f)(2) provides an exception for generally accepted and lawful animal husbandry or agriculture practices involving livestock animals.",
        objective: "8.15"
    },
    {
        id: 5036,
        category: "animal-cruelty",
        difficulty: "intermediate",
        question: "Using a live livestock animal as a lure in dog race training is:",
        options: [
            "Class A misdemeanor",
            "State Jail Felony", 
            "3rd Degree Felony",
            "Legal if the animal is not harmed"
        ],
        correct: 1,
        explanation: "PC 42.09(a)(7) makes using a live livestock animal as a lure in dog race training a State Jail Felony, enhanced to 3rd Degree Felony with prior convictions.",
        objective: "8.15"
    },
    {
        id: 5037,
        category: "animal-cruelty",
        difficulty: "advanced",
        question: "Tripping a horse is a defense if done for:",
        options: [
            "Training purposes",
            "Entertainment at rodeos",
            "Identifying ownership or giving veterinary care",
            "Controlling aggressive behavior"
        ],
        correct: 2,
        explanation: "PC 42.09(d) provides a defense to horse tripping if the actor tripped the horse for the purpose of identifying the ownership of the horse or giving veterinary care to the horse.",
        objective: "8.15"
    },

    // Animal Cruelty - Non-livestock PC 42.092
    {
        id: 5038,
        category: "animal-cruelty",
        difficulty: "basic",
        question: "Under PC 42.092, an 'Animal' means:",
        options: [
            "Any living creature",
            "A domesticated living creature and wild creatures previously captured",
            "Only pets like dogs and cats",
            "Any creature except livestock"
        ],
        correct: 1,
        explanation: "PC 42.092(a)(2) defines animal as a domesticated living creature, including stray or feral cats/dogs, and wild living creatures previously captured, but NOT uncaptured wild creatures or livestock.",
        objective: "8.15"
    },
    {
        id: 5039,
        category: "animal-cruelty",
        difficulty: "intermediate",
        question: "Torturing a non-livestock animal under PC 42.092(b)(1) is:",
        options: [
            "Class A misdemeanor",
            "State Jail Felony",
            "3rd Degree Felony",
            "2nd Degree Felony"
        ],
        correct: 2,
        explanation: "PC 42.092(c-1) makes torture or cruel killing of non-livestock animals a 3rd Degree Felony, enhanced to 2nd Degree Felony with prior convictions under specified subsections.",
        objective: "8.15"
    },
    {
        id: 5040,
        category: "animal-cruelty",
        difficulty: "intermediate",
        question: "It is a defense to non-livestock animal cruelty if the animal was:",
        options: [
            "A stray animal",
            "On your property injuring your livestock and discovered in the act",
            "Aggressive toward humans",
            "Old and suffering"
        ],
        correct: 1,
        explanation: "PC 42.092(e)(1) provides a defense if the animal was discovered on the person's property injuring/killing livestock or damaging crops and was killed/injured when discovered in the act.",
        objective: "8.15"
    },
    {
        id: 5041,
        category: "animal-cruelty",
        difficulty: "advanced",
        question: "A 'Trap-Neuter-Return Program' under PC 42.092:",
        options: [
            "Is illegal under Texas law",
            "Provides a defense for abandonment charges when properly executed",
            "Only applies to cats",
            "Requires court approval"
        ],
        correct: 1,
        explanation: "PC 42.092(e-1) provides a defense to abandonment charges if a stray/feral animal was released pursuant to a Trap-Neuter-Return Program involving trapping, veterinary care, sterilization, marking, and return.",
        objective: "8.15"
    },

    // Police Service Animals PC 38.151
    {
        id: 5042,
        category: "police-service-animals",
        difficulty: "basic",
        question: "Under PC 38.151, a 'Police service animal' means:",
        options: [
            "Only police dogs",
            "Dogs and horses used by police",
            "A dog, horse, or other domesticated animal specially trained for law enforcement use",
            "Any animal owned by a police department"
        ],
        correct: 2,
        explanation: "PC 38.151(a)(3) defines police service animal as a dog, horse, or other domesticated animal that is specially trained for use by a handler or rider for law enforcement purposes.",
        objective: "8.15"
    },
    {
        id: 5043,
        category: "police-service-animals",
        difficulty: "basic",
        question: "Taunting, tormenting, or striking a police service animal is:",
        options: [
            "Class C misdemeanor",
            "Class B misdemeanor",
            "Class A misdemeanor",
            "State Jail Felony"
        ],
        correct: 0,
        explanation: "PC 38.151(c)(1) makes recklessly taunting, tormenting, or striking a police service animal a Class C misdemeanor.",
        objective: "8.15"
    },
    {
        id: 5044,
        category: "police-service-animals",
        difficulty: "intermediate",
        question: "Injuring or killing a police service animal is enhanced to what level?",
        options: [
            "Class A misdemeanor",
            "State Jail Felony",
            "3rd Degree Felony",
            "2nd Degree Felony"
        ],
        correct: 3,
        explanation: "PC 38.151(c)(5) makes injuring or killing a police service animal a 2nd Degree Felony if it causes material and permanent injury affecting its police service.",
        objective: "8.15"
    },

    // Scenario-Based Questions (Rivals Rivalry Cases)
    {
        id: 5045,
        category: "property-scenarios",
        difficulty: "intermediate",
        question: "High schoolers use chalk to mark up a rival school's walls with slogans and drawings, costing $300 to clean. This is most likely:",
        options: [
            "Criminal Mischief Class B",
            "Criminal Mischief Class A", 
            "Graffiti Class B",
            "Graffiti Class A"
        ],
        correct: 0,
        explanation: "Chalk markings would fall under Criminal Mischief rather than Graffiti (which requires paint, indelible marker, or etching device). $300 damage falls in the $100-$750 range = Class B misdemeanor.",
        objective: "8.15"
    },
    {
        id: 5046,
        category: "property-scenarios",
        difficulty: "intermediate",
        question: "A person throws a match in a dumpster, starting a fire that costs the city $1,300 in response costs. This is most likely:",
        options: [
            "Criminal Mischief Class A",
            "Arson State Jail Felony",
            "Arson 2nd Degree Felony",
            "Reckless Damage Class C"
        ],
        correct: 0,
        explanation: "This appears to be reckless or intentional property damage rather than arson (which requires specific intent to destroy/damage). $1,300 falls in the $750-$2,500 range = Class A Criminal Mischief.",
        objective: "8.15"
    },
    {
        id: 5047,
        category: "property-scenarios",
        difficulty: "advanced",
        question: "Using spray paint on a school causing $500 damage, then using permanent marker on cemetery tombstones causing $250 damage:",
        options: [
            "Two separate Class B Graffiti charges",
            "Can be aggregated as one Graffiti Class A charge",
            "School graffiti enhanced to State Jail Felony, cemetery graffiti Class B",
            "Both are Criminal Mischief, not Graffiti"
        ],
        correct: 2,
        explanation: "Both involve graffiti tools (spray paint/permanent marker). School graffiti with $500 damage at a protected location ($750+ at school/worship/burial/monument) = SJF enhancement. Cemetery graffiti with $250 = Class B.",
        objective: "8.15"
    },
    {
        id: 5048,
        category: "property-scenarios",
        difficulty: "intermediate",
        question: "Toilet papering and egging 9 houses at $50 damage per location ($450 total) could be charged as:",
        options: [
            "Nine separate Class C Criminal Mischief charges",
            "One Class B Criminal Mischief charge with aggregated damages",
            "Class A Criminal Mischief due to multiple victims",
            "Reckless Damage since it's less serious"
        ],
        correct: 1,
        explanation: "PC 28.03(e) allows aggregation of damages when multiple properties are damaged pursuant to one scheme. $450 total falls in $100-$750 range = Class B Criminal Mischief.",
        objective: "8.15"
    }
];

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = propertyOffensesQuestions;
} else {
    window.propertyOffensesQuestions = propertyOffensesQuestions;
}
