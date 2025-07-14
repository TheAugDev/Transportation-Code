// TCOLE Content Parser - Automatically converts study handout text into flashcards and quiz questions
// Simply paste your study content into the text files and this parser will handle the rest!

class TCOLEContentParser {
    constructor() {
        this.flashcards = [];
        this.practiceQuestions = [];
        this.categoryMapping = {
            // Penal Code categories
            'assault': 'assault-offenses',
            'aggravated assault': 'assault-offenses', 
            'family violence': 'assault-offenses',
            'murder': 'homicide-offenses',
            'manslaughter': 'homicide-offenses',
            'homicide': 'homicide-offenses',
            'theft': 'theft-offenses',
            'robbery': 'theft-offenses',
            'burglary': 'theft-offenses',
            'controlled substance': 'drug-offenses',
            'marijuana': 'drug-offenses',
            'cocaine': 'drug-offenses',
            'weapon': 'weapon-offenses',
            'firearm': 'weapon-offenses',
            'deadly weapon': 'weapon-offenses',
            'disorderly conduct': 'public-order',
            'public intoxication': 'public-order',
            'riot': 'public-order',
            'sexual assault': 'sexual-offenses',
            'indecency': 'sexual-offenses',
            'criminal mischief': 'property-crimes',
            'graffiti': 'property-crimes',
            'dwi': 'dwi-offenses',
            'driving while intoxicated': 'dwi-offenses',
            'intoxication': 'dwi-offenses',
            'evading': 'escape-offenses',
            'resisting arrest': 'escape-offenses',
            
            // Criminal Procedure categories
            'search': 'search-seizure',
            'seizure': 'search-seizure',
            'warrant': 'search-seizure',
            'vehicle search': 'vehicle-traffic-stops',
            'traffic stop': 'vehicle-traffic-stops',
            'automobile exception': 'vehicle-traffic-stops',
            'passenger rights': 'vehicle-traffic-stops',
            'vehicle seizure': 'vehicle-traffic-stops',
            'traffic enforcement': 'vehicle-traffic-stops',
            'arrest': 'arrest-procedures',
            'miranda': 'arrest-procedures',
            'magistrate': 'arrest-procedures',
            'evidence': 'evidence-rules',
            'chain of custody': 'evidence-rules',
            'court': 'court-procedures',
            'trial': 'court-procedures',
            
            // General Topics categories
            'report': 'report-writing',
            'documentation': 'report-writing',
            'patrol': 'patrol-procedures',
            'building search': 'patrol-procedures',
            'vehicle stop': 'patrol-procedures',
            'constitutional': 'constitutional-law',
            '4th amendment': 'constitutional-law',
            '5th amendment': 'constitutional-law',
            'ethics': 'ethics-professionalism',
            'professional': 'ethics-professionalism',
            'traffic': 'traffic-enforcement'
        };
    }

    // Main parsing function - paste your content and this handles everything!
    parseContent(rawContent, mainCourse = 'penal-code') {
        console.log('🔄 Parsing content for:', mainCourse);
        console.log('📝 Content length:', rawContent.length);
        
        // Reset arrays for new content
        this.flashcards = [];
        this.practiceQuestions = [];
        
        // Clean and normalize the content
        const cleanContent = this.cleanContent(rawContent);
        console.log('🧹 Cleaned content length:', cleanContent.length);
        
        // Extract sections/chapters
        const sections = this.extractSections(cleanContent);
        console.log('📚 Extracted sections:', sections.length);
        console.log('📚 Section titles:', sections.map(s => s.title));
        
        if (sections.length === 0) {
            console.log('⚠️ No sections found, creating single section from entire content');
            // If no sections found, treat entire content as one section
            sections.push({
                title: 'Vehicle Traffic Stops Content',
                content: cleanContent,
                category: 'vehicle-traffic-stops'
            });
            console.log('✅ Created default section with', cleanContent.length, 'characters');
        }
        
        // Generate flashcards and questions for each section
        sections.forEach((section, index) => {
            console.log(`📖 Processing section ${index + 1}: ${section.title} (${section.content.length} chars)`);
            this.generateFlashcardsFromSection(section, mainCourse);
            this.generateQuestionsFromSection(section, mainCourse);
        });
        
        console.log(`✅ Generated ${this.flashcards.length} flashcards and ${this.practiceQuestions.length} questions`);
        
        return {
            flashcards: this.flashcards,
            practiceQuestions: this.practiceQuestions
        };
    }

    cleanContent(content) {
        // Remove extra whitespace, normalize line breaks
        return content
            .replace(/\r\n/g, '\n')
            .replace(/\n{3,}/g, '\n\n')
            .replace(/\s{2,}/g, ' ')
            .trim();
    }

    extractSections(content) {
        const sections = [];
        
        // Split by common section patterns for law enforcement content
        const sectionPatterns = [
            /(?:^\d+\.\d+\.?\s+[A-Z][A-Z\s]+)/gm,  // Like "49.01. DEFINITIONS"
            /(?:^[A-Z][A-Z\s]{10,}$)/gm,           // All caps titles
            /(?:^Scenario\s+#?\d+)/gm,             // Scenarios
            /(?:^CHAPTER|ARTICLE|SECTION)\s+\d+/gm,
            /(?:Carroll Doctrine|Arizona v\.|Texas v\.|Wyoming v\.)/gm // Case law
        ];
        
        let currentSection = null;
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
            const trimmedLine = line.trim();
            if (!trimmedLine) return;
            
            // Check if this line starts a new section
            const isNewSection = sectionPatterns.some(pattern => {
                pattern.lastIndex = 0; // Reset regex
                return pattern.test(trimmedLine);
            });
            
            if (isNewSection) {
                console.log('📄 Found new section:', trimmedLine);
                
                // Save previous section
                if (currentSection && currentSection.content.trim().length > 0) {
                    sections.push(currentSection);
                }
                
                // Start new section
                currentSection = {
                    title: trimmedLine,
                    content: '',
                    category: this.detectCategory(trimmedLine)
                };
            } else if (currentSection) {
                currentSection.content += line + '\n';
            } else {
                // No section started yet, create a default one
                currentSection = {
                    title: 'Introduction',
                    content: line + '\n',
                    category: 'vehicle-traffic-stops'
                };
            }
        });
        
        // Don't forget the last section
        if (currentSection && currentSection.content.trim().length > 0) {
            sections.push(currentSection);
        }
        
        console.log(`📚 Extracted ${sections.length} sections:`, sections.map(s => s.title));
        return sections;
    }

    detectCategory(text) {
        const lowerText = text.toLowerCase();
        
        for (const [keyword, category] of Object.entries(this.categoryMapping)) {
            if (lowerText.includes(keyword)) {
                return category;
            }
        }
        
        // Default category based on content patterns
        if (lowerText.includes('pc ') || lowerText.includes('penal code')) {
            return 'assault-offenses'; // Default PC category
        } else if (lowerText.includes('ccp') || lowerText.includes('criminal procedure')) {
            return 'arrest-procedures'; // Default CCP category
        } else {
            return 'general-topics'; // Default general category
        }
    }

    generateFlashcardsFromSection(section, mainCourse) {
        const content = section.content;
        const category = section.category;
        
        console.log(`🃏 Generating flashcards for: ${section.title}`);
        console.log(`📝 Section content length: ${content.length}`);
        console.log(`📂 Category: ${category}, Main course: ${mainCourse}`);
        
        // Count flashcards before generation
        const initialCount = this.flashcards.length;
        
        // Extract key definitions and elements
        const definitions = this.extractDefinitions(content);
        const elements = this.extractElements(content);
        const penalties = this.extractPenalties(content);
        const scenarios = this.extractScenarios(content);
        
        console.log(`📝 Found: ${definitions.length} definitions, ${elements.length} elements, ${penalties.length} penalties, ${scenarios.length} scenarios`);
        
        // Create flashcards for definitions
        definitions.forEach(def => {
            this.flashcards.push({
                id: this.generateId(),
                mainCategory: mainCourse,
                category: category,
                difficulty: 'basic',
                question: `Define "${def.term}" according to ${section.title}`,
                answer: def.definition,
                objective: `Understanding ${def.term}`,
                module: this.getModuleFromCategory(category)
            });
        });
        
        // Create flashcards for elements
        elements.forEach(element => {
            this.flashcards.push({
                id: this.generateId(),
                mainCategory: mainCourse,
                category: category,
                difficulty: 'intermediate',
                question: `What are the elements of ${element.offense}?`,
                answer: element.elements.join('; '),
                objective: `Elements of ${element.offense}`,
                module: this.getModuleFromCategory(category)
            });
        });
        
        // Create flashcards for penalties
        penalties.forEach(penalty => {
            this.flashcards.push({
                id: this.generateId(),
                mainCategory: mainCourse,
                category: category,
                difficulty: 'basic',
                question: `What is the punishment for ${penalty.offense}?`,
                answer: penalty.punishment,
                objective: `Punishment ranges`,
                module: this.getModuleFromCategory(category)
            });
        });
        
        // Create flashcards for key concepts from section content
        const keyPoints = this.extractKeyPoints(content, section.title);
        keyPoints.forEach(point => {
            this.flashcards.push({
                id: this.generateId(),
                mainCategory: mainCourse,
                category: category,
                difficulty: 'intermediate',
                question: point.question,
                answer: point.answer,
                objective: point.objective,
                module: this.getModuleFromCategory(category)
            });
        });
        
        // Log the final count
        const finalCount = this.flashcards.length;
        const generated = finalCount - initialCount;
        console.log(`✅ Generated ${generated} flashcards for section "${section.title}"`);
        if (generated > 0) {
            console.log(`📋 Sample flashcard:`, this.flashcards[finalCount - 1]);
        }
    }

    generateQuestionsFromSection(section, mainCourse) {
        const content = section.content;
        const category = section.category;
        
        console.log(`❓ Generating quiz questions for: ${section.title}`);
        
        // Extract key components for question generation
        const definitions = this.extractDefinitions(content);
        const elements = this.extractElements(content);
        const penalties = this.extractPenalties(content);
        const scenarios = this.createScenarios(section);
        
        console.log(`📊 Question sources: ${definitions.length} definitions, ${elements.length} elements, ${penalties.length} penalties, ${scenarios.length} scenarios`);
        
        // Generate multiple choice questions from definitions
        definitions.forEach(def => {
            // Create definition-based question
            this.practiceQuestions.push({
                id: this.generateId(),
                mainCategory: mainCourse,
                category: category,
                difficulty: 'basic',
                type: 'multiple-choice',
                question: `According to ${section.title}, what does "${def.term}" mean?`,
                options: this.generateDefinitionOptions(def.definition, definitions),
                correctAnswer: 0,
                explanation: `${def.term}: ${def.definition}`,
                objective: `Understanding key definitions`,
                module: this.getModuleFromCategory(category)
            });
            
            // Create term identification question
            this.practiceQuestions.push({
                id: this.generateId(),
                mainCategory: mainCourse,
                category: category,
                difficulty: 'basic',
                type: 'multiple-choice',
                question: `Which term is defined as: "${def.definition}"?`,
                options: this.generateTermOptions(def.term, definitions),
                correctAnswer: 0,
                explanation: `The definition describes "${def.term}"`,
                objective: `Term identification`,
                module: this.getModuleFromCategory(category)
            });
        });
        
        // Generate questions about offense elements
        elements.forEach(element => {
            this.practiceQuestions.push({
                id: this.generateId(),
                mainCategory: mainCourse,
                category: category,
                difficulty: 'intermediate',
                type: 'multiple-choice',
                question: `What are the essential elements of ${element.offense}?`,
                options: this.generateElementOptions(element.elements),
                correctAnswer: 0,
                explanation: `Elements: ${element.elements.join(', ')}`,
                objective: `Understanding offense elements`,
                module: this.getModuleFromCategory(category)
            });
        });
        
        // Generate penalty questions
        penalties.forEach(penalty => {
            this.practiceQuestions.push({
                id: this.generateId(),
                mainCategory: mainCourse,
                category: category,
                difficulty: 'basic',
                type: 'multiple-choice',
                question: `What is the punishment classification for ${penalty.offense}?`,
                options: this.generatePenaltyOptions(penalty.punishment),
                correctAnswer: 0,
                explanation: `${penalty.offense} is classified as: ${penalty.punishment}`,
                objective: `Punishment classifications`,
                module: this.getModuleFromCategory(category)
            });
        });
        
        // Generate scenario-based questions
        scenarios.forEach(scenario => {
            this.practiceQuestions.push({
                id: this.generateId(),
                mainCategory: mainCourse,
                category: category,
                difficulty: 'intermediate',
                question: scenario.question,
                options: scenario.options,
                correctAnswer: scenario.correct,
                explanation: scenario.explanation,
                objective: scenario.objective,
                module: this.getModuleFromCategory(category)
            });
        });
        
        // Generate true/false questions
        this.generateTrueFalseQuestions(content, section, mainCourse, category);
    }

    extractDefinitions(content) {
        const definitions = [];
        
        console.log('🔍 Extracting definitions from content...');
        
        // Look for definition patterns
        const defPatterns = [
            /(?:"([^"]+)"\s+means?\s+([^.]+)\.)/gi,
            /(?:([A-Z][A-Z\s]+)\s+means?\s+([^.]+)\.)/gi,
            /(?:\(?\d+\)?\s*"?([^"]+)"?\s+means?\s+([^.]+)\.)/gi,
            /(?:^([A-Z][A-Za-z\s]+):\s*([^•\n]+))/gm, // For "Term: definition" format
            /(?:•\s*([A-Z][A-Za-z\s]+):\s*([^•\n]+))/gm // For bullet point definitions
        ];
        
        defPatterns.forEach((pattern, index) => {
            let match;
            console.log(`🔍 Trying pattern ${index + 1}...`);
            while ((match = pattern.exec(content)) !== null) {
                const term = match[1].trim();
                const definition = match[2].trim();
                
                // Filter out very short or invalid definitions
                if (term.length > 2 && definition.length > 10) {
                    definitions.push({
                        term: term,
                        definition: definition
                    });
                    console.log(`✅ Found definition: "${term}" = "${definition.substring(0, 50)}..."`);
                }
            }
        });
        
        console.log(`📖 Total definitions found: ${definitions.length}`);
        return definitions;
    }

    extractElements(content) {
        const elements = [];
        
        // Look for numbered elements like (1), (2), (3)
        const elementPattern = /(?:commits?\s+an?\s+offense\s+if[^:]*:?\s*)((?:\(\d+\)[^(]*(?=\(|$))+)/gi;
        let match;
        
        while ((match = elementPattern.exec(content)) !== null) {
            const elementText = match[1];
            const elementList = elementText.match(/\(\d+\)[^(]*/g) || [];
            
            if (elementList.length > 0) {
                elements.push({
                    offense: this.extractOffenseName(content),
                    elements: elementList.map(el => el.replace(/^\(\d+\)\s*/, '').trim())
                });
            }
        }
        
        return elements;
    }

    extractPenalties(content) {
        const penalties = [];
        
        // Look for penalty patterns
        const penaltyPatterns = [
            /(Class\s+[ABC]\s+misdemeanor)/gi,
            /(felony\s+of\s+the\s+(?:first|second|third)\s+degree)/gi,
            /(state\s+jail\s+felony)/gi,
            /(fine\s+not\s+to\s+exceed\s+\$[\d,]+)/gi
        ];
        
        penaltyPatterns.forEach(pattern => {
            let match;
            while ((match = pattern.exec(content)) !== null) {
                penalties.push({
                    offense: this.extractOffenseName(content),
                    punishment: match[1]
                });
            }
        });
        
        return penalties;
    }

    extractOffenseName(content) {
        // Try to find the offense name at the beginning of the content
        const nameMatch = content.match(/^([A-Z][A-Z\s]+)(?:\n|$)/);
        return nameMatch ? nameMatch[1].trim() : 'Unknown Offense';
    }

    createScenarios(section) {
        const scenarios = [];
        
        // Generate basic scenario based on section content
        const scenario = {
            question: `Officer Smith encounters a situation involving ${section.title}. Based on the law, what should the officer consider?`,
            options: [
                'No legal authority to act',
                'Must obtain a warrant first',
                'Has probable cause to investigate',
                'Should request backup immediately'
            ],
            correct: 'C',
            explanation: `Based on ${section.title}, officers have specific authority and procedures to follow.`,
            objective: `Application of ${section.title}`
        };
        
        scenarios.push(scenario);
        return scenarios;
    }

    getModuleFromCategory(category) {
        const moduleMap = {
            'assault-offenses': 'Assault & Family Violence',
            'homicide-offenses': 'Assault & Family Violence',
            'theft-offenses': 'Property Crimes',
            'drug-offenses': 'Drugs',
            'weapon-offenses': 'Weapons',
            'public-order': 'Public Order',
            'sexual-offenses': 'Sexual Offenses',
            'property-crimes': 'Property Crimes',
            'dwi-offenses': 'DWI & Intoxication',
            'escape-offenses': 'Arrest & Resistance',
            'search-seizure': 'Search & Seizure',
            'vehicle-traffic-stops': 'Arrest, Search, & Seizure for Vehicles & Traffic Stops',
            'arrest-procedures': 'Arrest Procedures',
            'evidence-rules': 'Evidence',
            'court-procedures': 'Court Procedures',
            'report-writing': 'Report Writing',
            'patrol-procedures': 'Patrol',
            'constitutional-law': 'Constitutional Law',
            'ethics-professionalism': 'Ethics',
            'traffic-enforcement': 'Traffic Enforcement'
        };
        
        return moduleMap[category] || 'General';
    }

    generateId() {
        return Date.now() + Math.random().toString(36).substr(2, 9);
    }

    // Function to load preset content (workaround for local file loading issues)
    async loadPresetContent(contentType) {
        console.log('🔄 Loading preset content for:', contentType);
        
        const presetContent = {
            'vehicle-traffic-stops': `
ARREST, SEARCH, & SEIZURE FOR VEHICLES & TRAFFIC STOPS

Introduction
Arrest, Search, & Seizure for Vehicles & Traffic Stops

REMEMBER Traffic Stops are NOT FOREVER?
• Investigative detentions beyond a traffic violation REQUIRE further reasonable suspicion
• YOU MUST BUILD the REASONABLE SUSPICION DURING THE STOP ROUTINE
• A traffic stop that turns into an investigative stop must have new reasonable suspicion to detain beyond the reasonable time needed to handle the initial traffic violation.

3 Good Questions for Checking Reasonable Suspicion Stops:
• What about the occupant caught your attention?
• What was inconsistent with innocent conduct (unordinary from the norm)?
• What was consistent with criminal conduct?

Unit Goal: Narcotic interdiction/investigation techniques and procedures.

15.14. Identify the incidence of drug interdiction and common characteristics of drug smugglers and their vehicles.

How the vehicle is being operated:
• Not consistent with traffic flow: driver is overly cautious, slow, or fast
• Driver/passengers repeatedly look at police car through mirrors or by turning around
• Unusual pull-over behavior
• Exiting suddenly or Hiding
• Traffic violations
• Quick exits from the vehicle after the stop
• Unusual circumstances or items in the vehicle

Vehicles used as load cars for narcotics:
• Reliable vehicle with large capacity
• Inconspicuous vehicle to blend in
• False compartments in interior or exterior
• Vehicle trim on the side of a pickup (for example) does not line up due to the lowering or raising the cab to accommodate false compartments
• Lug nuts or vehicle body screws and bolts appear to have been tampered with/tool markings
• Vehicle not registered to driver (rental car or another third-party owner)
• Driver does not know who the vehicle belongs to

Actions of the driver:
• Nervousness • Fidgeting • Eye contact

From drug interdiction incident to routine patrol, always be observant. Keep eyes, ears, and nose open, in addition to asking questions.

15.15. Identify factors contributing to probable cause in drug investigation and appropriate interview techniques.

Typical characteristics of drug smugglers:
• Extended travel without luggage or minimal luggage
• Luggage carried on back seat
• Empty suitcases/bags
• Appears nervous upon contact with officer
• Driver attempts to separate from the vehicle (may not claim ownership of anything, exit quickly upon being stopped, physically move away from vehicle)

Factors contributing to probable cause:
• Nervousness of suspect
• Lack of identification/incorrect identification
• Lack of registration and/or insurance
• Appearance of vehicle
• Stories given by suspects do not match or make sense
• Pungent odor of certain controlled substances emanating from the vehicle
• Driver states he does not have a key to trunk or other compartments such as glove box
• Vehicle appears to be heavily laden

Interview techniques:
• Separate suspects and compare answers (including answers to the following items)
• Establish identity of driver and or passenger
• Inquire as to origin destination and purpose of trip
• Ask for registration and insurance
• Inquire about the ownership of vehicle
• Ask for rental agreement (if rental car) to verify dates match stated agenda
• Be aware for uncooperative, evasive, or implausible answers
• Be aware of their Risk Zones (Face/chest, waist, hands, & stance)?
• Criminal history and wanted checks?
• Continually compare what you have seen & heard already
• Plain view/smell
• Consent or probable cause searches

Warrantless Searches of Motor Vehicles

Carroll Doctrine: Automobile Exception (Carroll v U.S., 1925)
• Probable cause that a vehicle contains evidence/contraband would allow for a warrantless search of a readily mobile vehicle
• There is lessened expectation of privacy for motor vehicles in public areas

PC and Automobile Searches:
• What about any containers (locked or unlocked) therein, in which the contraband or evidence would fit?
• Officers may search vehicles, bumper to bumper, & any containers inside (locked/unlocked), where RELATED contraband/evidence would fit

What if the PC is specifically related to a container inside a vehicle?
• Police may search the container, but the search is limited to the specific container, unless there is PC for the vehicle as well.

10.8. Describe the basic criteria for warrantless search.

The Carroll Doctrine (1925):
• Officers can search an automobile without a warrant if the officer has probable cause for the search.
• The mobility of the vehicle prevented officers from being able to obtain a warrant.

Wyoming v Houghton, 1999:
• U.S. v Ross, 1982 permitted warrantless searches of all containers in a car if there is probable cause to search the car.
• Houghton decided that there is no distinction made between containers owned by the driver and those owned by anyone else. As long as there is probable cause to search the car, any containers in the car may be searched, regardless of ownership. There is a reduced expectation of privacy in things a person carries in a car.
• With PC, the car may be searched bumper to bumper and any containers inside (locked or unlocked) that evidence or contraband related to the PC would fit.

California v Acevedo, 1991:
If the police have probable cause to believe that a container in a moveable car contains contraband, they may search the container without a warrant. However, their search must be limited to that specific container, unless they have probable cause to believe that the car itself contains contraband, too.

What if the vehicle is parked in the driveway/curtilage of a house?
• Curtilage: area of open space surrounding a dwelling, immediately adjacent & considered part of the house.

Collins v Virginia (2018):
The automobile exception to the warrant requirement of the Fourth Amendment to the United States Constitution does not allow a warrantless search of a vehicle located within a home or its curtilage.

Texas v Brown (1983):
The plain-view exception applied because (1) the items were in plain view through the vehicle's window; (2) Officer had probable cause, based on his prior narcotics experience, to believe that the tied-off balloon contained narcotics; and (3) Officer had access to view the items pursuant to a lawful driver's license checkpoint detention. SO even though he couldn't see the drugs, the plain view of the container type made it "immediately apparent" to the officer that contraband was inside.

Vehicle Searches Incidental to Lawful Arrest

Arrested Occupants: passenger compartment of a motor vehicle may be searched incident to arrest, only if (Arizona v Gant):
• officers can demonstrate the reason to believe evidence of the crime for which the suspect was arrested will be found in the car.

Arizona v. Gant (2009):
• Police may search a vehicle after a recent occupant's arrest only if the arrestee is within reaching distance of the passenger compartment at the time of the search or there is a reasonable to believe that crime-related evidence is located in the vehicle.
• If valid, a search incident to an arrest would include the arrestee's person and the area within his immediate control/the passenger compartment of a vehicle.
• The case simply says you must be able to reasonably articulate why you expected the search incidental to an arrest of any occupant would reveal evidence related to the arrest reason. If valid the search incident to the arrest would be limited to the passenger compartment of the vehicle.

Colorado v Bertine: Impounds & Inventories
Impounds and Inventory Searches:
• There must be an agency policy to make the inventory legal
• Locked containers within the vehicle are fair game, if allowed by policy.
• Unreasonably impounded vehicles, based solely on department policy, but not normal practice, will not be a sufficient basis
• They should NOT be used to get around the limitations of a search incident to arrest.

Colorado v. Bertine, 1987:
A police officer's warrantless inventory search of closed containers inside an automobile, if pursuant to an established departmental inventory policy, does not violate the 4th Amendment. Reasonable police regulations relating to inventory procedures administered in good faith satisfy the 4th Amendment. Inventory-search procedures are NOT investigatory. They serve the interests of protecting seized property against of claims of property lost, stolen, damage or vandalism.

Can Police Frisk a Vehicle?

Michigan v. Long, 1983:
A limited search of the passenger compartment of a motor vehicle for weapons. If officers reasonably believe a suspect is dangerous, it is consistent with Terry to permit a search of a vehicle's passenger compartment if a law-enforcement reasonably believes a suspect is dangerous and may gain immediate control of weapons. The search must be limited to those areas in which a weapon may be placed or hidden.

15.16. Identify and explain the common places of concealment of controlled substances and dangerous drugs on or in persons, places, and things.

In vehicles:
• Glove box
• Under or inside of dash
• Under carpet
• Gas tanks
• Hub caps
• Headliner
• A/C ducts or vents
• Trunk
• Console/cupholders
• Door panels
• Spare tire
• Engine compartment
• Ash tray
• Luggage/bags/personal items
• Decorations
• Miscellaneous items (food packages, boxes, etc.)

Intoxication & Vehicle Related Offenses

49.01. DEFINITIONS
(1) "Alcohol concentration" = the number of grams of alcohol per:
(A) 210 liters of breath;
(B) 100 milliliters of blood; or
(C) 67 milliliters of urine.

(2) "Intoxicated" means:
(A) not having the normal use of mental or physical faculties by the introduction of alcohol, a controlled substance, a drug, a dangerous drug, a combination of two or more of those substances, or any other substance into the body; or
(B) having an alcohol concentration of 0.08 or more.

(3) "Motor vehicle" defined by 32.34(a): 2) device in, on, or by which a person or property is or may be transported or drawn on a highway, except a device used exclusively on stationary rails or tracks.

(4) "Watercraft" a vessel, 1 or more water skis, an aquaplane, or another device used for transporting or carrying a person on water, other than a device propelled only by the current of water.

(5) "Amusement ride" has the meaning assigned by Section 2151.002, Occupations Code.

(6) "Mobile amusement ride" has the meaning assigned by Section 2151.002, Occupations Code.

49.11. PROOF OF MENTAL STATE UNNECESSARY.
(a) Notwithstanding Section 6.02(b), proof of a culpable mental state is not required for conviction of an offense under this chapter.
(b) Subsection (a) does not apply to an offense under Section 49.031 (POSSESSION OF ALCOHOLIC BEVERAGE IN MOTOR VEHICLE)

49.02. PUBLIC INTOXICATION
(a) appears in a public place while intoxicated to the degree that the person may endanger the person or another.

Class C misdemeanor

Defense Arguments & Enhancements:
(a-1) For this section, Alcoholic Beverage Code licensed premises are public places
(b) defense that the alcohol/other substance was for therapeutic purposes and part of professional medical treatment by a licensed physician.
(d) PI is NOT a lesser included offense under PC 49.04: DWI
(e) This offense, when committed by one under 21, is punished the same as ABC 106.071 (18-20 with 2 prior convictions)
• Class B with community service and classes
• DL suspension term

Public Intoxication: CCP 14.031

Officers who believe it's unnecessary for protection of the person or others may then release the PI ADULT (not a child) to:
• an ADULT who agrees to assume responsibility
• An approved dependency program AND the person is VOLUNTARILY admitted, or
• Verbally/voluntary consents to a sobering supervision facility & is admitted

Officer/agency may not be held liable for damages resulting from this release

Magistrates may release the person under the same considerations
Prior releases may not be considered for future arrests/releases

Must take offender before Magistrate: CCP 14.06

Officers charging a Class C, except Public Intoxication: may, instead of arresting, issue a citation, containing:
• notice of the time & place a person must appear before a magistrate;
• the name and address of the person charged;
• the offense charged;
• Info on full payment alternatives, if convicted & is unable to pay; and
• the FV admonishment, in boldfaced, underlined type, or capital letters

CCP 14.06: The Family Violence Admonishment:
"If you are convicted of a misdemeanor offense involving violence where you are or were a spouse, intimate partner, parent, or guardian of the victim or are or were involved in another, similar relationship with the victim, it may be unlawful for you to possess or purchase a firearm, including a handgun or long gun, or ammunition, pursuant to federal law under 18 U.S.C. Section 922(g)(9) or Section 46.04(b), Texas Penal Code. If you have any questions whether these laws make it illegal for you to possess or purchase a firearm, you should consult an attorney."

How Does the Notice to Appear Work?

543.003. NOTICE TO APPEAR: NOT TAKEN BEFORE MAGISTRATE.
Officers who arrest for a transportation violation AND do not take the person before a magistrate (Stop becomes an arrest when the citation is presented to the violator)
• Shall issue a written notice to appear

TC 543.004: Officers shall issue written notices to appear for:
Speeding, using a wireless communication device, or open container AND
The violator complies by making the written notice to appear (WPTA)

If an out of state resident or vehicle, then this only applies if required under 703: NONRESIDENT VIOLATOR COMPACT OF 1977

What is the Law on a Refusal to Sign a Citation?

TC 543.005: To secure release, the person arrested MUST:
• Make the WPTA by signing the written notice prepared by the officer
• Officer shall retain the original and deliver a copy to the person arrested.
• The officer shall then promptly release the person from custody.

TC 543.008: Violation by officers of a provision of 543.003-543.007 is misconduct & officers are subject to removal from their position.

Must take offender before Magistrate: CCP 14.06

If a person resides in the county of the offense, officers may issue a citation for some Class A or B misdemeanors:
• Possession of marijuana
• Possession of a Controlled Substance Weight for Penalty Group 2
• Criminal Mischief and Graffiti
• Theft and Theft of Service
• Driving While License Invalid

If the local county DA's office approves & accepts this procedure

49.031. POSSESSION OF ALCOHOLIC BEVERAGE IN MOTOR VEHICLE

(b) knowingly possesses an open container in a passenger area of a motor vehicle that is located on a public highway, regardless of whether the vehicle is being operated or is stopped or parked. Possession by a person of one or more open containers in a single criminal episode is a single offense.

(1) "Open container" = bottle, can, or other that contains any amount of alcoholic beverage and is/has been opened, has a broken seal, or contents are partially removed.

(2) "Passenger area of a motor vehicle" area of a MV designed for the seating of the operator and passengers. It does not include:
(A) a glove compartment or similar container that is locked;
(B) the trunk of a vehicle; or
(C) area behind the last upright seat; if the vehicle does not have a trunk.

(3) "Public highway" = entire width between and adjacent to the boundary lines of any public road, street, highway, interstate, or other publicly maintained way if open for public motor vehicle travel and includes the right-of-way of a public highway.

(d) Class C misdemeanor
(e) Peace officer shall issue the written notice to appear, and if the person complies, (s)he shall be released

Defense Arguments & Enhancements:
(c) exception if a passenger in:
(1) the passenger area of a bus, taxicab, or limousine; or
(2) the living quarters of a motorized house coach or motorized house trailer, including a self-contained camper, a motor home, or a recreational vehicle.

49.04. DRIVING WHILE INTOXICATED.
(a) A person commits an offense if the person is intoxicated while operating a motor vehicle in a public place.

(b) Except as provided by Subsections (c) and (d) and Section 49.09, an offense under this section is a Class B misdemeanor, with a minimum term of confinement of 72 hours.

(c) If it is shown on the trial of an offense under this section that at the time of the offense the person operating the motor vehicle had an open container of alcohol in the person's immediate possession, the offense is a Class B misdemeanor, with a minimum term of confinement of six days.

(d) If it is shown on the trial of an offense under this section that an analysis of a specimen of the person's blood, breath, or urine showed an alcohol concentration level of 0.15 or more at the time the analysis was performed, the offense is a Class A misdemeanor.

49.045. DRIVING WHILE INTOXICATED WITH CHILD PASSENGER.
(a) A person commits an offense if:
(1) the person is intoxicated while operating a motor vehicle in a public place; and
(2) the vehicle being operated by the person is occupied by a passenger who is younger than 15 years of age.

(b) An offense under this section is a state jail felony.

10.4. Identify the necessary conditions for arrest.

The 11 Police Warrantless Arrest Powers for On-duty when there is PC of:
1. PC of felony with escape risk
2. Out of state fugitive, charged with death penalty/1 year prison crime
3. Offense within view/presence
4. Felony/Peace Breach in view of Magistrate & their verbal order
5. Suspicious place/circumstance, with Felony/Peace Breach, AND a reasonable arrest urgency
6. Felony admission with other PC
7. Prevent consequences of Theft
8. NON-Family violence assault & PC of further BI to the victim
9. Any family violence offense
10. Emergency Call Interference
11. Protective Orders with PC: shall arrest if in your presence

CCP 14.03: Officer MAY Arrest w/o Warrant
Persons in suspicious places/circumstances which reasonably show guilt of some:
• Felony, Breach of the peace, PC CH. 42: DISORDERLY CONDUCT & RELATED OFFENSES, or
• PC 49.02: Public Intoxication
• Or threaten or about to commit some offense

DYAR v. STATE: Texas Court of Criminal Appeals, April 23, 2003:
When police have probable cause to believe that person "X" has committed a felony or breach of the peace and is found in "Y" location under "suspicious circumstances" and there is no time to obtain a warrant because:
1) the person will not otherwise remain at "Y" location;
2) the evidence of the crime will otherwise disappear; or
3) the person poses a continuing, present threat to others,
THEN Police may arrest "X" without a warrant.
• Without exigent circumstances 14.03 does not allow for the warrantless arrest
• You must be able to articulate the need to take immediate enforcement action
• DWI collision investigations are a common application of this arrest power

49.05. FLYING WHILE INTOXICATED
(a) A person commits an offense if the person is intoxicated while operating an aircraft.
(b) Except as provided by Section 49.09, an offense under this section is a Class B misdemeanor, with a minimum term of confinement of 72 hours.

49.06. BOATING WHILE INTOXICATED
(a) A person commits an offense if the person is intoxicated while operating a watercraft.
(b) Except as provided by Section 49.09, an offense under this section is a Class B misdemeanor, with a minimum term of confinement of 72 hours.

49.061. BOATING WHILE INTOXICATED WITH CHILD PASSENGER
(a) A person commits an offense if:
(1) the person is intoxicated while operating a watercraft; and
(2) the watercraft being operated by the person is occupied by a passenger who is younger than 15 years of age.
(b) An offense under this section is a state jail felony.

49.065. ASSEMBLING OR OPERATING AN AMUSEMENT RIDE WHILE INTOXICATED
(a) A person commits an offense if the person is intoxicated while operating an amusement ride or while assembling a mobile amusement ride.
(b) Except as provided by Subsection (c) and Section 49.09, an offense under this section is a Class B misdemeanor with a minimum term of confinement of 72 hours.
(c) If it is shown on the trial of an offense under this section that at the time of the offense the person operating the amusement ride or assembling the mobile amusement ride had an open container of alcohol in the person's immediate possession, the offense is a Class B misdemeanor with a minimum term of confinement of six days.

49.07. INTOXICATION ASSAULT
(a) A person commits an offense if the person, by accident or mistake:
(1) while operating an aircraft, watercraft, or amusement ride while intoxicated, or while operating a motor vehicle in a public place while intoxicated, by reason of that intoxication causes serious bodily injury to another; or
(2) as a result of assembling a mobile amusement ride while intoxicated causes serious bodily injury to another.

(b) In this section, "serious bodily injury" means injury that creates a substantial risk of death or that causes serious permanent disfigurement or protracted loss or impairment of the function of any bodily member or organ.

(c) Except as provided by Section 49.09, an offense under this section is a felony of the third degree.

49.08. INTOXICATION MANSLAUGHTER
(a) A person commits an offense if the person:
(1) operates a motor vehicle in a public place, operates an aircraft, a watercraft, or an amusement ride, or assembles a mobile amusement ride; and
(2) is intoxicated and by reason of that intoxication causes the death of another by accident or mistake.

(b) Except as provided by Section 49.09, an offense under this section is a felony of the second degree.

49.12. APPLICABILITY TO CERTAIN CONDUCT
Sections 49.07 and 49.08 do not apply to injury to or the death of an unborn child if the conduct charged is conduct committed by the mother of the unborn child.

49.09. ENHANCED OFFENSES AND PENALTIES
• 1 Prior DWI/FWI/BWI or Assemble = Class A Misd.
• 1 Prior Intox.MS = 3rd Degree Felony
• 2 Prior DWI/FWI/BWI or Assemble = 3rd Degree Felony
• Intox Assault w/ SBI to Firefighter/EMS = 2nd Degree Felony
• Intox Assault w/ SBI to LEO/Judge = 1st Degree Felony
• Intox Manslaughter to LEO/Firefighter, EMS = 1st Degree Felony
• Any second conviction within 5 years of 1st conviction, requires interlock on any vehicle owned or operated.

49.10. NO DEFENSE
In a prosecution under Section 49.031, 49.04, 49.045, 49.05, 49.06, 49.061, 49.065, 49.07, or 49.08, the fact that the defendant is or has been entitled to use the alcohol, controlled substance, drug, dangerous drug, or other substance is not a defense.

20.05. SMUGGLING OF PERSONS
(a) A person commits an offense if the person knowingly:
(1) uses a motor vehicle, aircraft, watercraft, or other means of conveyance to transport an individual with the intent to:
(A) conceal the individual from a peace officer or special investigator; or
(B) flee from a person the actor knows is a peace officer or special investigator attempting to lawfully arrest or detain the actor;
(2) encourages or induces a person to enter or remain in this country in violation of federal law by concealing, harboring, or shielding that person from detection; or
(3) assists, guides, or directs two or more individuals to enter or remain on agricultural land without the effective consent of the owner.

(b) Subject to Subsections (b-1) and (b-2), an offense under this section is a felony of the third degree with a term of imprisonment of 10 years, except that the offense is:
(1) a felony of the second degree with a minimum term of imprisonment of 10 years if:
(A) the actor commits the offense in a manner that creates a substantial likelihood that the smuggled individual will suffer serious bodily injury or death;
(B) the smuggled individual is a child younger than 18 years of age at the time of the offense;
(C) the offense was committed with the intent to obtain a pecuniary benefit;
(D) during the commission of the offense the actor, another party to the offense, or an individual assisted, guided, or directed by the actor knowingly possessed a firearm; or
(E) the actor commits the offense under Subsection (a)(1)(B); or
(2) a felony of the first degree with a minimum term of imprisonment of 10 years if:
(A) it is shown on the trial of the offense that, as a direct result of the commission of the offense, the smuggled individual became a victim of sexual assault, as defined by Section 22.011, or aggravated sexual assault, as defined by Section 22.021; or
(B) the smuggled individual suffered serious bodily injury or death.

(c) It is an affirmative defense to prosecution of an offense under this section, other than an offense punishable under Subsection (b)(1)(A) or (b)(2), that the actor is related to the smuggled individual within the second degree of consanguinity or, at the time of the offense, within the second degree of affinity.

20.06. CONTINUOUS SMUGGLING OF PERSONS
(a) A person commits an offense if, during a period that is 10 or more days in duration, the person engages two or more times in conduct that constitutes an offense under Section 20.05.

(e) Except as provided by Subsections (f) and (g), an offense under this section is a felony of the second degree with a minimum term of imprisonment of 10 years.

(f) An offense under this section is a felony of the first degree with a minimum term of imprisonment of 10 years if:
(1) the conduct constituting an offense under Section 20.05 is conducted in a manner that creates a substantial likelihood that the smuggled individual will suffer serious bodily injury or death; or
(2) the smuggled individual is a child younger than 18 years of age at the time of the offense.

(g) An offense under this section is a felony of the first degree, punishable by imprisonment in the Texas Department of Criminal Justice for life or for any term of not more than 99 years or less than 25 years, if:
(1) it is shown on the trial of the offense that, as a direct result of the commission of the offense, the smuggled individual became a victim of sexual assault, as defined by Section 22.011, or aggravated sexual assault, as defined by Section 22.021; or
(2) the smuggled individual suffered serious bodily injury or death.

20A.02. TRAFFICKING OF PERSONS
(a) A person commits an offense if the person knowingly:
(1) traffics another person with the intent that the trafficked person engage in forced labor or services;
(2) receives a benefit from participating in a venture that involves an activity described by (1), including by receiving labor or services the person knows are forced labor or services;
(3) traffics another person and, through force, fraud, or coercion, causes the trafficked person to engage in conduct prohibited by:
(A) Section 43.02 (Prostitution);
(B) Section 43.03 (Promotion of Prostitution);
(B-1) Section 43.031 (Online Promotion of Prostitution);
(C) Section 43.04 (Aggravated Promotion of Prostitution);
(C-1) Section 43.041 (Aggravated Online Promotion of Prostitution); or
(D) Section 43.05 (Compelling Prostitution);
(4) receives a benefit from participating in a venture that involves an activity described by Subdivision (3) or engages in sexual conduct with a person trafficked in the manner described in Subdivision (3);

"Traffic" means to transport, entice, recruit, harbor, provide, or otherwise obtain another person by any means.

(b) Except for (b-1), an offense is a felony of the second degree. An offense under this section is a felony of the first degree if:
(2) the commission of the offense results in serious bodily injury to or the death of the person who is trafficked;
(3) the commission of the offense results in the death of an unborn child of the person who is trafficked; or
(4) the actor: (A) used or exhibited a deadly weapon during the commission of the offense; (B) intentionally, knowingly, or recklessly impeded the normal breathing or circulation of the blood of the trafficked person by applying pressure to the person's throat or neck or by blocking the person's nose or mouth; or (C) recruited, enticed, or obtained the trafficked person from a shelter or facility operating as a residential treatment center that serves runaway youth, foster children, the homeless, or persons subjected to human trafficking, domestic violence, or sexual assault.

(5) traffics a child or disabled individual with the intent that the trafficked child or disabled individual engage in forced labor or services;
(6) receives a benefit from participating in a venture that involves an activity described by Subdivision (5), including by receiving labor or services the person knows are forced labor or services;
(7) traffics a child or disabled individual and by any means causes the trafficked child or disabled individual to engage in, or become the victim of, conduct prohibited by: (A) Section 21.02 (Continuous Sexual Abuse of Young Child or Disabled Individual); (B) Section 21.11 (Indecency with a Child); (C) Section 22.011 (Sexual Assault); (D) Section 22.021 (Aggravated Sexual Assault); (E) Section 43.02 (Prostitution); (E-1) Section 43.021 (Solicitation of Prostitution); (F) Section 43.03 (Promotion of Prostitution); (F-1) Section 43.031 (Online Promotion of Prostitution); (G) Section 43.04 (Aggravated Promotion of Prostitution); (G-1) Section 43.041 (Aggravated Online Promotion of Prostitution); (H) Section 43.05 (Compelling Prostitution); (I) Section 43.25 (Sexual Performance by a Child); (J) Section 43.251 (Employment Harmful to Children); or (K) Section 43.26 (Possession or Promotion of Child Pornography); or
(8) receives a benefit from participating in a venture that involves an activity described by Subdivision (7) or engages in sexual conduct with a child or disabled individual trafficked in the manner described in Subdivision (7).

20A.03. CONTINUOUS TRAFFICKING OF PERSONS
(a) A person commits an offense if, during a period that is 30 or more days in duration, the person engages two or more times in conduct that constitutes an offense under Section 20A.02 against one or more victims.

(e) An offense under this section is a felony of the first degree, punishable by imprisonment in the Texas Department of Criminal Justice for life or for any term of not more than 99 years or less than 25 years.

PRACTICAL SCENARIOS

Scenario #1: While on patrol, the student/officer observes the suspect walking along the side of the roadway with the appearance of being lost. The student/officer stops to assist the suspect and upon approach, the student/officer discovers the suspect to be highly intoxicated and disoriented. The confirms the subject's intoxication through standard sobriety tests.
• 49.02 Public Intoxication

Scenario #2: The student/officer observes a vehicle traveling over the posted speed limit and conducts a stop on the vehicle. Upon approach, the student/officer observes an open/uncapped liquor bottle in the center console of the vehicle, but the driver is eventually cleared of driving while intoxicated after the student/officer conducts a field sobriety test on the subject.
• 49.031 Possession of Alcoholic Beverage in Motor Vehicle

Scenario #3: The student/officer responds to a motor vehicle involving injuries. Upon arrival to the accident scene, the victim was struck by the suspect's vehicle while legally crossing the street, suffering only minor abrasions. After the investigation, the suspect was determined to be too intoxicated to operate a motor vehicle.
• 49.07 Intoxication Assault

Scenario #4: The student/officer conducts a traffic stop on a local highway for a defective tail lamp. Upon approaching the vehicle, the student/officer hears screaming and knocking from inside of the trunk. The officer removes the suspect driver and opens the trunk. The student/officer observes a female and two small children inside of the trunk. The officer learns from the female that she is trying to enter the United States illegally and has paid the suspect $2,000 to bring her and her children into the country. The driver says that he did not know they were in his truck. He claims they must have hidden inside his truck when he stopped somewhere. He gives consent to search the vehicle, and during the search, the student officer finds $2,000 beneath the driver's seat.
• Sec. 20.05. Smuggling of Persons

Scenario #5: The Boozer Sooner - Home from OU and after a breakup, college student, Willie Ralph, drives himself to the R-Bar to meet up with some friends and have some drinks. After a long night of drinking, Willie exits the bar and is talking with his friends. Willie is slurring his speech, seems to be swaying quite a bit, and appears to be stumbling slightly while he walks. After talking with his friends, Willie walks to his car, gets inside, turns the key in the ignition, and backs out of the parking space. He manages to get on to Eagle Dr. and starts heading towards his house, when he gets a call from his 14-year-old niece, Nita Ralph, who needs a ride home. Willie goes and picks up Nita. As Willie comes up to the stop light at an intersection, he doesn't notice the red light and continues through the intersection, causing a collision with a vehicle that was traveling through it, with the right of way. Nita suffers a minor cut to her face and willie has a large laceration to his face and a broken ankle. No one is injured in the other vehicle.

Scenario #6: The student/officer conducted a traffic stop for a stop sign violation. Upon making contact with the driver, the driver advised that he was running a quick errand and did not have any identification on his person. He further stated that his name was Joe Smith, D.O.B. 06/06/1966. During the investigation, the student/officer was able to verify the driver's identity as James Smith, D.O.B. 03/26/1970. Mr. Smith was found to have an outstanding warrant for a probation violation.
• Sec. 38.02. Failure to Identify

Scenario #10: Officers are at residence because of a reported disturbance. While at the location, Officers see Tim Smith drive up in a car and park it in the driveway. As Tim steps out of the car, Officers recognize him as Tim Smith, the owner of the residence. They also know that he has a current outstanding warrant for driving without a license. Officers arrest Tim for the outstanding warrant and search his car. Inside they find a handgun and a bag of meth in a jacket pocket, which was sitting in the backseat area.
• Are the officers' actions legally justified? Explain your answer.

In the following scenarios, the student will:
• ID the offense and if it's a Class C/Arrestable Misdemeanor/Felony.
• Is there sufficient probable cause and can/should a warrantless arrest be made?
• Discuss any special handling of suspect(s) and potential evidence recovery
• Answer any additional questions noted for the scenario.
            `
        };
        
        const content = presetContent[contentType];
        if (content) {
            console.log('✅ Found preset content, parsing...');
            return this.parseContent(content.trim(), 'criminal-procedure');
        } else {
            console.log('⚠️ No preset content found for:', contentType);
            return { flashcards: [], practiceQuestions: [] };
        }
    }

    // Function to load and parse content from text files
    async loadFromFile(filePath, mainCourse) {
        try {
            console.log('🔍 Attempting to load file:', filePath);
            
            // For local file system, we need to read the file differently
            // Since fetch() doesn't work with local files in browsers, we'll use a different approach
            let content = '';
            
            try {
                // Try fetch first (might work in some contexts)
                const response = await fetch(filePath);
                if (response.ok) {
                    content = await response.text();
                    console.log('📄 File loaded via fetch, length:', content.length);
                } else {
                    throw new Error('Fetch failed with status: ' + response.status);
                }
            } catch (fetchError) {
                console.log('⚠️ Fetch failed, trying alternative method:', fetchError.message);
                
                // Alternative: Try to read the file using XMLHttpRequest
                return new Promise((resolve, reject) => {
                    const xhr = new XMLHttpRequest();
                    xhr.open('GET', filePath, true);
                    xhr.onreadystatechange = () => {
                        if (xhr.readyState === 4) {
                            if (xhr.status === 200 || xhr.status === 0) {
                                try {
                                    content = xhr.responseText;
                                    console.log('📄 File loaded via XHR, length:', content.length);
                                    
                                    // Process the content
                                    const result = this.processFileContent(content, mainCourse);
                                    resolve(result);
                                } catch (error) {
                                    console.error('❌ Error processing content:', error);
                                    resolve({ flashcards: [], practiceQuestions: [] });
                                }
                            } else {
                                console.error('❌ XHR failed with status:', xhr.status);
                                resolve({ flashcards: [], practiceQuestions: [] });
                            }
                        }
                    };
                    xhr.onerror = () => {
                        console.error('❌ XHR network error');
                        resolve({ flashcards: [], practiceQuestions: [] });
                    };
                    xhr.send();
                });
            }
            
            // If fetch worked, process the content
            if (content) {
                return this.processFileContent(content, mainCourse);
            }
            
        } catch (error) {
            console.error('❌ Error loading file:', filePath, error);
            return { flashcards: [], practiceQuestions: [] };
        }
    }

    // Helper method to process file content
    processFileContent(content, mainCourse) {
        console.log('🔍 Processing file content, length:', content.length);
        
        // Extract content after the "PASTE YOUR STUDY HANDOUT CONTENT BELOW:" marker
        const marker = 'PASTE YOUR STUDY HANDOUT CONTENT BELOW:';
        const startIndex = content.indexOf(marker);
        
        if (startIndex !== -1) {
            console.log('✅ Found content marker at position:', startIndex);
            const actualContent = content.substring(startIndex + marker.length)
                .replace(/={30,}/g, '') // Remove divider lines
                .replace(/\[Replace this text[^\]]*\]/g, '') // Remove placeholder text
                .trim();
            
            console.log('📝 Extracted content length:', actualContent.length);
            console.log('📝 First 200 chars:', actualContent.substring(0, 200));
            
            if (actualContent && actualContent.length > 50) {
                console.log('✅ Content is valid, parsing...');
                return this.parseContent(actualContent, mainCourse);
            } else {
                console.log('⚠️ Content too short or empty');
            }
        } else {
            console.log('⚠️ Content marker not found in file');
        }
        
        console.log('⚠️ No valid content found in file');
        return { flashcards: [], practiceQuestions: [] };
    }

    generateDefinitionOptions(correctDefinition, allDefinitions) {
        const options = [correctDefinition];
        
        // Add 3 other definitions as distractors
        const otherDefs = allDefinitions
            .filter(def => def.definition !== correctDefinition)
            .map(def => def.definition)
            .slice(0, 3);
            
        // If we don't have enough real definitions, create plausible distractors
        while (options.length < 4) {
            if (otherDefs.length > options.length - 1) {
                options.push(otherDefs[options.length - 1]);
            } else {
                options.push(this.generatePlausibleDistractor(correctDefinition));
            }
        }
        
        // Shuffle options but keep track of correct answer
        return this.shuffleOptions(options);
    }

    generateTermOptions(correctTerm, allDefinitions) {
        const options = [correctTerm];
        
        // Add 3 other terms as distractors
        const otherTerms = allDefinitions
            .filter(def => def.term !== correctTerm)
            .map(def => def.term)
            .slice(0, 3);
            
        while (options.length < 4) {
            if (otherTerms.length > options.length - 1) {
                options.push(otherTerms[options.length - 1]);
            } else {
                options.push(`Alternative Term ${options.length}`);
            }
        }
        
        return this.shuffleOptions(options);
    }

    generateElementOptions(correctElements) {
        const elementString = correctElements.join(', ');
        const options = [elementString];
        
        // Create variations with missing or incorrect elements
        if (correctElements.length > 1) {
            // Missing one element
            options.push(correctElements.slice(1).join(', '));
            // Different order
            options.push([...correctElements].reverse().join(', '));
            // With extra element
            options.push([...correctElements, 'Intent to commit fraud'].join(', '));
        } else {
            options.push('No elements required');
            options.push('Intent and knowledge only');
            options.push('Physical presence only');
        }
        
        return this.shuffleOptions(options);
    }

    generatePenaltyOptions(correctPenalty) {
        const commonPenalties = [
            'Class C misdemeanor',
            'Class B misdemeanor', 
            'Class A misdemeanor',
            'State jail felony',
            'Third degree felony',
            'Second degree felony',
            'First degree felony',
            'Capital felony'
        ];
        
        const options = [correctPenalty];
        
        // Add similar penalty levels as distractors
        const otherPenalties = commonPenalties
            .filter(penalty => penalty !== correctPenalty)
            .slice(0, 3);
            
        options.push(...otherPenalties);
        
        return this.shuffleOptions(options.slice(0, 4));
    }

    generateTrueFalseQuestions(content, section, mainCourse, category) {
        // Extract statements that can be turned into true/false questions
        const statements = content.match(/([A-Z][^.!?]*[.!?])/g) || [];
        
        statements.slice(0, 5).forEach(statement => {
            const cleanStatement = statement.trim();
            if (cleanStatement.length > 20 && cleanStatement.length < 200) {
                this.practiceQuestions.push({
                    id: this.generateId(),
                    mainCategory: mainCourse,
                    category: category,
                    difficulty: 'basic',
                    type: 'true-false',
                    question: `True or False: ${cleanStatement}`,
                    options: ['True', 'False'],
                    correctAnswer: 0, // Assume true, can be adjusted based on content analysis
                    explanation: `This statement is from ${section.title}`,
                    objective: `Understanding key principles`,
                    module: this.getModuleFromCategory(category)
                });
            }
        });
    }

    shuffleOptions(options) {
        // Simple shuffle while keeping the first option as correct
        const correct = options[0];
        const others = options.slice(1).sort(() => Math.random() - 0.5);
        return [correct, ...others];
    }

    generatePlausibleDistractor(original) {
        // Generate a plausible but incorrect definition
        const commonPhrases = [
            'a person who intentionally',
            'an act committed with knowledge',
            'conduct that occurs when',
            'behavior involving the unlawful'
        ];
        
        return commonPhrases[Math.floor(Math.random() * commonPhrases.length)] + ' [incorrect definition]';
    }

    extractScenarios(content) {
        const scenarios = [];
        const scenarioMatches = content.match(/Scenario\s+#?\d+[:\s]*([^#]+?)(?=Scenario|$)/gs) || [];
        
        scenarioMatches.forEach(scenarioText => {
            scenarios.push({
                text: scenarioText.trim(),
                type: 'practical'
            });
        });
        
        return scenarios;
    }

    extractKeyPoints(content, sectionTitle) {
        const keyPoints = [];
        
        console.log('🔍 Extracting key points from content...');
        
        // Extract numbered lists and bullet points - improved patterns
        const listPatterns = [
            /(?:^|\n)•\s*(.+?)(?=\n|$)/gm,           // Bullet points
            /(?:^|\n)-\s*(.+?)(?=\n|$)/gm,           // Dash points
            /(?:^|\n)\d+\.\s*(.+?)(?=\n|$)/gm,       // Numbered lists
            /(?:^|\n)[A-Z][^:\n]{10,}(?=\n|$)/gm     // Standalone important lines
        ];
        
        listPatterns.forEach((pattern, index) => {
            let match;
            console.log(`🔍 Trying key points pattern ${index + 1}...`);
            while ((match = pattern.exec(content)) !== null) {
                const cleanItem = match[1] ? match[1].trim() : match[0].trim();
                if (cleanItem.length > 15 && cleanItem.length < 300) {
                    keyPoints.push({
                        question: `According to ${sectionTitle}, what is important to remember about: ${cleanItem.substring(0, 60)}...?`,
                        answer: cleanItem,
                        objective: `Key concepts from ${sectionTitle}`
                    });
                    console.log(`✅ Found key point: "${cleanItem.substring(0, 50)}..."`);
                }
            }
        });
        
        // Extract case law points with better patterns
        const casePatterns = [
            /([\w\s]+v\.?\s+[\w\s]+(?:\(\d{4}\))?)[:\s]*([^:\n]+)/g,
            /(Carroll Doctrine|Arizona v\.|Texas v\.|Wyoming v\.|California v\.|Colorado v\.|Michigan v\.)[^:]*:?\s*([^.\n]+\.)/g
        ];
        
        casePatterns.forEach((pattern, index) => {
            let match;
            console.log(`🔍 Trying case law pattern ${index + 1}...`);
            while ((match = pattern.exec(content)) !== null) {
                const caseName = match[1].trim();
                const caseRule = match[2].trim();
                if (caseRule.length > 20) {
                    keyPoints.push({
                        question: `What did ${caseName} establish?`,
                        answer: caseRule,
                        objective: `Case law understanding`
                    });
                    console.log(`✅ Found case law: "${caseName}" = "${caseRule.substring(0, 50)}..."`);
                }
            }
        });
        
        // Extract specific TCOLE learning objectives
        const objectivePattern = /(\d+\.\d+\.)\s*([^.]+\.)/g;
        let match;
        while ((match = objectivePattern.exec(content)) !== null) {
            const objectiveNumber = match[1];
            const objectiveText = match[2].trim();
            if (objectiveText.length > 20) {
                keyPoints.push({
                    question: `What does learning objective ${objectiveNumber} require you to understand?`,
                    answer: objectiveText,
                    objective: `TCOLE Learning Objectives`
                });
                console.log(`✅ Found learning objective: "${objectiveNumber}" = "${objectiveText.substring(0, 50)}..."`);
            }
        }
        
        console.log(`🎯 Total key points extracted: ${keyPoints.length}`);
        return keyPoints;
    }
}

// Global instance for use in the application
window.contentParser = new TCOLEContentParser();

console.log('✅ TCOLE Content Parser loaded - Ready to convert your study handouts!');
