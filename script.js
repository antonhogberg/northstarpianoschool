let previousSixStarCount = parseInt(localStorage.getItem('sixStarCount')) || 0;
let previousPart1SixStarCount = parseInt(localStorage.getItem('part1SixStarCount')) || 0;
let previousPart2SixStarCount = parseInt(localStorage.getItem('part2SixStarCount')) || 0;
let previousPart3SixStarCount = parseInt(localStorage.getItem('part3SixStarCount')) || 0;
let previousPart4SixStarCount = parseInt(localStorage.getItem('part4SixStarCount')) || 0;

const translations = {
    en: {
        menuFrontPage: "Star Overview",
        menuChapter: "Chapter",
        menuStudents: "For Teachers",
        menuStarMap: "Star Map",
        menuChapters: "Chapters",
        menuFAQ: "FAQ",
        menuRemove: "Remove student",
        menuPrivacyPolicy: "Privacy Policy",
        popupWelcome: "Welcome to North Star Piano School!",
        popupIntro: "You’ve just embarked on your piano journey as an Explorer! The Star Map is your guide—it’s there to show you which exercise to do next as you progress through the seven chapters, earning stars and advancing through ranks like Star Cadet, Star Officer, and beyond.",
        popupTeacherNote: "You can also focus on a specific chapter if Scales or Chords is what you want to excel at. Visit the chapter pages to start earning stars, check your progress on the Star Overview page, or manage students on the For Teachers page.",
        popupEnterName: "Let’s get started—add your name below to begin your adventure!",
        rankExplorer: "Explorer",
        rankStarCadet: "Star Cadet",
        rankStarOfficer: "Star Officer",
        rankStarCaptain: "Star Captain",
        rankStarCommander: "Star Commander",
        rankStarAdmiral: "Star Admiral",
        rankAchievementMessage: "Congratulations [userName]!",
        rankAchievementSubtitle: "You’ve achieved the rank of Star Cadet!",
        textboxExplorer: "You’re embarking on your piano adventure, learning notes, scales, chords, and arpeggios step by step. Complete 16 exercises to claim the Star Cadet rank!",
        textboxStarCadet: "You’ve displayed steadfast resolve, securing six stars over 16 exercises in the North Star Piano School. Complete Part 1 in all seven chapters to claim Star Officer!",
        textboxStarOfficer: "With thorough dedication, you’ve learned key names, scales, root chords, and several pieces. Stand proud as a Star Officer of the North Star Piano School—conquer Part 2 in every chapter for Star Captain!",
        textboxStarCaptain: "You’ve taken up sight-reading, play songs with chords, and perform classical works. Stand proud as a Star Captain of the North Star Piano School—complete Part 3 in every chapter for Star Commander!",
        textboxStarCommander: "With skill, you handle chords and arpeggios in all inversions, command scales across the piano, recognize note intervals, and boast a vast repertoire. Stand proud as a Star Commander of the North Star Piano School—conquer Part 4 in all chapters for Star Admiral!",
        textboxStarAdmiral: "Your relentless focus, dedication, and mastery have crowned you a piano virtuoso. Claim your place as Star Admiral of the North Star Piano School, master of all chapters!",
        chapter1: "Chapter 1",
        chapter2: "Chapter 2",
        chapter3: "Chapter 3",
        chapter4: "Chapter 4",
        chapter5: "Chapter 5",
        chapter6: "Chapter 6",
        chapter7: "Chapter 7",
        chapterName1: "Note Reading",
        chapterName2: "Piano Technique",
        chapterName3: "Major Scales",
        chapterName4: "Minor Scales",
        chapterName5: "Chords",
        chapterName6: "Arpeggios",
        chapterName7: "Repertoire",
        addButton: "Add",
        studentNamePlaceholder: "Enter student name",
        studentsLabel: "Delete Student",
        addNewStudent: "Add a new student",
        addStudentSuccess: "New Star Student created!",
        addStudentDuplicate: "Student name already exists! Please choose a different name.",
        addStudentNoName: "Please enter a name!",
        addStudentConsentPrompt: "You are adding ‘{name}’ to track their piano progress locally on your device. In regions like the EU, you need their consent (or parental consent for minors under 13). Alternatively, use an anonymous ID (e.g., ‘Student123’) if consent isn’t obtained. Continue?",
        addStudentCancelled: "Student addition cancelled.",
        notesLabel: "Notes: ",
        notesTitle: "Notes: ",
        notesPlaceholder: "Add notes about the student’s homework, progress, or other details here. Notes are saved automatically, and upon export, the student can see your notes.",
        congratsMessage: "🌟 Congratulations! You’ve completed the Star Map! 🌟",
        faqTitle: "Frequently Asked Questions",
        faqQ1: "How do I use the Star Map to earn stars?",
        faqA1: "Go to the Star Map in the menu and scroll left to see an explanation on how to use the Star Map.",
        faqQ2: "Can I add my students, and is there a limit to how many I can add?",
        faqA2: "Yes, you can add students in For Teachers: type the student’s name, press Add, and switch between students anytime in the menu—data is saved locally and automatically. There’s no limit to how many students you can add!",
        faqQ3: "Can I share a student’s progress with them, if they want to see the stars on their own iPad?",
        faqA3: "Yes, you can share a student’s progress! On the For Teachers page, select the student and generate a QR code. The student can scan the QR code using their iPad’s camera to import their progress, or you can share the link via AirDrop, SMS, or email for them to open on their device. The data stays on the iPads and is not stored online.",
        faqQ4: "Why can't I click the stars in Star Overview?",
        faqA4: "The stars on the Rank Badge in Star Overview are not clickable—they light up automatically as you earn stars on the Chapter pages and Star Map.",
        faqQ5: "How does the ranking system work in North Star Piano School?",
        faqA5: "The Rank Badge has a lower field with 16 small stars. For each exercise you complete (earning 6 stars), one of these small stars lights up. When the lower field is full, you achieve the Star Cadet rank, and the badge on the right updates from empty stars to golden stars. The Rank Badge also features four chevrons, each with large stars that light up when you complete all four exercises in a Part. The first chevron’s seven stars correspond to Part 1 across all seven chapters, the second chevron to Part 2, and so on. As you fill a chevron with stars, you advance in rank: you become a Star Officer after Part 1, Star Captain after Part 2, Star Commander after Part 3, and when you reach the highest rank after Part 4, you become a Star Admiral. The badge on the right gains a matching chevron for each Part you complete, showing your current rank!",
        faqQ6: "How much time should I spend practicing each day?",
        faqA6: "We recommend practicing 15–30 minutes per day in addition to the time you spend on pieces, depending on your level and age. Beginners can start with 15 minutes, while more advanced students can aim for 30 minutes. Try to practice daily to make steady progress, and focus on your active exercises to earn stars.",
        faqQ7: "Can I use North Star Piano School if I already know how to play the piano, and how advanced are the exercises?",
        faqA7: "Yes, even if you already know how to play the piano, you can use North Star Piano School! The exercises are divided into four parts with different levels: Part 1 is for beginners, Part 2 is for slightly more experienced students, Part 3 is for advanced students, and Part 4 features mostly very advanced exercises for experienced pianists. Start with exercises that match your level, or begin from the start to collect some easy stars. Earn stars to climb ranks and improve your skills, regardless of your level.",
        faqQ8: "How many ranks are there?",
        faqA8: "There are six ranks in North Star Piano School: Explorer, Star Cadet, Star Officer, Star Captain, Star Commander, and Star Admiral. You climb ranks by earning stars in exercises, and the highest rank, Star Admiral, is achieved by earning six stars in every exercise in every chapter.",
        faqQ9: "Do I need a piano to use North Star Piano School?",
        faqA9: "To use North Star Piano School, you need access to a piano or keyboard to practice the exercises in the North Star Piano School. A keyboard with at least 61 keys works well for beginners, but a piano is ideal for developing proper technique. You don’t need to own a piano—you can use one at a school or rent one if needed.",
        faqQ10: "What should I do if I have technical issues with the website?",
        faqA10: "If you have technical issues with the website, try refreshing the page or checking your internet connection. If the problem persists, contact us at contact@northstarpianoschool.com, and we’ll assist you. Also, make sure not to clear your browser’s cache, as it will remove your progress.",
        faqQ11: "Can I send suggestions or questions?",
        faqA11: "Yes, feel free to email: contact@northstarpianoschool.com",
        faqQ12: "Why did my progress disappear?",
        faqA12: "If you cleared your browser history, all star data was removed as it’s stored in the browser’s cache. If you imported a user with your name from another device via a QR code created on the For Teachers page, your user data was overwritten by the imported user.",
        faqQ13: "Is my student data stored online? Is it safe?",
        faqA13: "Your student data (name or anonymous ID, notes, and stars) is stored locally in your browser’s localStorage, not online, ensuring privacy. When sharing progress, data is encoded into a secure QR code or link, readable only by the importing device. Teachers must obtain student consent (or parental consent for minors) before adding names, or use an anonymous ID (e.g., ‘Student123’). Use the <a href='students.html'>Delete Student on the For Teachers-page</a> to delete data. See our <a href='privacy-policy.html'>Privacy Policy</a> for details.",
        faqQ14: "Do I need permission to add my students’ data, and why is local storage required?",
        faqA14: "Yes, teachers must obtain consent from students (or parents for minors under 13) or another lawful basis (e.g., lesson contract) before adding names to the platform, or use an anonymous ID (e.g., ‘Student123’) if consent isn’t obtained, especially in regions like the EU. Data is stored locally in your browser’s localStorage, which is essential for tracking progress across 112 exercises (e.g., level 5/6 for exercise 1:1:1). Without localStorage, progress cannot be saved, making the platform unusable. Use the <a href='students.html'>Delete Student on the For Teachers-page</a> to delete data or see our <a href='privacy-policy.html'>Privacy Policy</a> for more info.",
        exportTitle: "Export Student Data",
        exportInfo: "Tap the button below to share the current student to another device. The recipient just needs to scan the QR code or open the link to add the student automatically!",
        exportInfoText: "(Exports: Name, Notes & Stars)",
        studentModeInfoText: "If you check <b>Fixed Gold Stars</b> and click <b>Share</b>, you will get a QR-code that the student can scan with their iPad's camera so they can see their progress at home.<br><br>" +
"On the student’s iPad, existing gold stars will appear as locked. The student can instead tap to add <b>silver stars</b> for levels they’re working on at home.<br><br>" +
"At the next lesson, you can review the silver stars to see which levels the student has completed—and confirm progress by tapping gold stars on your device.<br><br>" +
"To update the student's version with their newly earned gold stars, simply export again with Locked Gold Stars checked.<br><br>" +
"These exports does not affect your own device, where you can continue managing gold stars freely.<br><br>" +
"If you want to transfer a user to another device and keep tapping gold stars there, uncheck <b>Locked Gold Stars</b> before sharing.",
        creatingLink: "Generating link, please wait…",
        copyLinkSuccess: "Link copied to clipboard! Paste to share.",
        scanOrShare: "Scan the QR code or...",
        shareButtonExport: "Share via AirDrop / Message / QR-code",
        shareButtonQR: "Share student via AirDrop / Message",
        removeStudentTitle: "Remove student",
        removeStudentButton: "Remove student",
        confirmRemoveMessage: "Press the button below to remove ",
        confirmRemoveButton: "Remove ",
        removeCurrentStudent: "Remove current student: ",
        removeCurrentStudentNone: "Remove current student: None",
        starMapDescription: "Welcome to the Star Map! Click on each star to track your progress in North Star Piano School. Earn up to six stars per exercise by practicing in the Piano School. Scroll to explore all chapters and exercises.",
        starMapTitle: "Using the Star Map",
        starMapBullet1: "<strong>Lesson plan:</strong> With beginners I usually start with Chapters 1 & 2. Those who have progressed a bit further also begin Chapters 3 & 5, and once they’ve completed 5:1:1 we start Chapter 6 as well. Chapter 4 (minor scales) is started when the student wants a change from the major scales. Use at most 30–40% of the lesson time to check the exercises assigned as homework and, if they are completely done with an exercise (6 gold stars), shortly introduce the next exercise. The bulk repetition on the exercises should be done at home so that most of the lesson time can be spent on Chapter 7 (Repertoire) or other pieces. In Chapter 1 it’s helpful to sneak-start Part 4 (Rhythm) early. If the student needs a break from Part 1 (Keys) or Part 2 (Notes), spend a couple of weeks on Part 4 instead. Likewise with Chapter 2’s Part 2 (Pedals).",
        starMapBullet2: "<strong>Start with star 1:1:1:</strong> Navigate to exercise 1:1:1 in The North Star Piano School. The number codes are written as Chapter:Part:Exercise (e.g., 1:1:1 is Chapter 1, Part 1, Exercise 1). Follow the book’s instructions to complete the exercise and earn gold stars. Return to the Star Map and click star 1:1:1 to display your gold stars. If you click too many, keep clicking to reset.",
        starMapBullet3: "<strong>Homework:</strong> The teacher clicks the chapters the student has for homework so they glow in gold. When students import their users on their iPads, they see which chapters are assigned for homework based on which ones are glowing.",
        starMapBullet4: "<strong>Daily practice:</strong> Work on all the glowing chapters for a while each day. When you reach the sixth star in an exercise, continue with the next exercise in that chapter.",
        starMapBullet5: "<strong>See your rank:</strong> Click Star Overview in the menu to see your rank. The more exercises in which you earn six stars, the higher your rank!",
        loading: "Loading student data...",
        success: "Your stars are updated, welcome",
        error: "Invalid link. No student was added.",
        studentModeLabel: "Fixed gold stars",
        noConsentTitle: "Welcome Back Later",
        noConsentMessage: "We’re sorry you couldn’t accept our privacy policy at this time. North Star Piano School uses local storage on your device to track progress in 112 piano exercises, which is essential for the platform to work. Without agreeing, your progress can’t be saved locally, but we’d love to welcome you back when you’re ready! Visit our <a href='faq.html'>FAQ</a> or view our Privacy Policy to learn more.",
        consentMessage: "Welcome to North Star Piano School! This website uses local storage to save names, progress, and notes in your browser. This means teachers storing their students’ names and other data must agree to our Privacy Policy to comply with GDPR or other similar laws regarding data storage. <br><strong style=\"color: #ff0000;\">If you’re a student using the platform only for yourself, you’re not directly affected by the Privacy Policy and can simply click I Accept!</strong><br> Teachers: Obtain students’ consent (or parental consent for children under 13) before adding names, or use an anonymous ID (e.g., ‘Student123’) if you cannot obtain consent. No data is stored online. No data is collected by North Star Piano School. Agree to start your piano journey!",
        consentAccept: "I Agree!",
        consentReject: "I Don’t Agree",
        consentPolicyLink: "Privacy Policy",
        privacyPolicyTitle: "Privacy Policy",
        effectiveDate: "Effective Date",
        whoWeAre: "Who We Are",
        whoWeAreText: "North Star Piano School provides this educational platform for piano teachers and students who want to track their progress in the piano school’s 112 exercises. We do not collect, store, or access any user data. Contact us at <a href='mailto:contact@northstarpianoschool.com'>contact@northstarpianoschool.com</a>.",
        ourRole: "Our Role",
        ourRoleText: "We provide a platform that allows users (primarily piano teachers) to store student data locally in their browser’s localStorage. This is essential for tracking progress, the core purpose of our site. We do not have access to this data, as it is stored only on the user’s device, not on servers or databases.",
        teachersRole: "Piano Teachers’ Role and Responsibilities",
        teachersRoleText: "Piano teachers using our platform act as <strong>data controllers</strong> under GDPR. They:<ul><li>Input student data (e.g., names, progress, notes) into localStorage to track progress in 112 exercises.</li><li>Must obtain <strong>permission</strong> (e.g., consent, contract, or legitimate interest) to store student data. For minors under 13 in Sweden (or 16 in some EU countries), <strong>parental consent</strong> is required.</li><li>In regions requiring consent (e.g., EU), teachers may use an <strong>anonymous ID</strong> (e.g., ‘Student123’) instead of a student’s name if consent cannot be obtained, ensuring compliance with local laws.</li><li>Are responsible for informing students/parents about data processing and ensuring compliance with data protection laws (e.g., GDPR).</li></ul>",
        dataProcessed: "Data Processed",
        dataProcessedText: "Teachers may store the following data locally via our platform:<ul><li><strong>Student Names or Anonymous IDs</strong>: To identify students (e.g., “Alice” or “Student123”).</li><li><strong>Progress</strong>: Star ratings for exercises (e.g., level 5 of 6 for exercise 1:1:1).</li><li><strong>Notes</strong>: Teacher notes about students.</li><li><strong>Language Preference</strong>: Chosen language (e.g., Swedish or English).</li></ul>This data is necessary to use the platform, as tracking progress is its core function.",
        purpose: "Purpose",
        purposeText: "Teachers use this data to monitor student progress across 112 exercises and personalize lessons. Language settings enhance usability. Without localStorage, progress cannot be saved, rendering the platform unusable.",
        legalBasis: "Legal Basis",
        legalBasisText: "Teachers must process data based on a lawful basis, such as:<ul><li><strong>Consent</strong>: Obtained from students or parents (for minors).</li><li><strong>Contract</strong>: To fulfill lesson agreements requiring progress tracking.</li><li><strong>Legitimate Interest</strong>: For progress tracking, if balanced with student rights.</li></ul>Our platform prompts teachers to confirm they have permission or use anonymous IDs before adding students.",
        storage: "Storage",
        storageText: "All data is stored locally in the user’s browser localStorage, not on servers or databases. Clearing your browser cache or using the <a href='students.html'>Delete Student on the For Teachers-page</a> deletes all or specific student data.",
        sharing: "Sharing",
        sharingText: "No data is shared with North Star Piano School or third parties. Teachers may share progress via secure QR codes or links, processed client-side and readable only by the importing device (e.g., a student’s iPad).",
        retention: "Retention",
        retentionText: "Data remains in localStorage until you clear your browser cache or delete users via <a href='students.html'>Delete Student on the For Teachers-page</a>. Withdrawing consent by clearing the cache deletes all data and prevents further use of the platform.",
        yourRights: "Your Rights",
        yourRightsText: "Under GDPR, you have the right to: <ul><li><strong>Access</strong>: View data via browser developer tools.</li><li><strong>Delete</strong>: Use <a href='students.html'>Delete Student on the For Teachers-page</a> or clear your browser cache.</li><li><strong>Withdraw Consent</strong>: Clear your browser cache (e.g., Chrome: Settings > Privacy > Clear browsing data > Cookies and other site data) to delete all data and withdraw consent.</li><li><strong>Opt-Out</strong>: Without consenting to local storage, the platform is unusable, as it’s essential for tracking progress. You may choose not to use the platform.</li></ul>Contact your teacher for data requests or email <a href='mailto:contact@northstarpianoschool.com'>contact@northstarpianoschool.com</a>.",
        security: "Security",
        securityText: "Data is stored locally, reducing risks. QR code/link exports are encoded securely to prevent unauthorized access.",
        minors: "Minors",
        minorsText: "For students under 13, teachers must obtain parental consent before adding their data, or use an anonymous ID (e.g., ‘Student123’). Without consent, the platform cannot be used for minors.",
        usingWithoutStorage: "Using the Platform Without Local Storage",
        usingWithoutStorageText: "The platform’s purpose is to track progress for 112 piano exercises (e.g., level 5/6 for exercise 1:1:1). localStorage is essential to save this progress. Without consenting to local storage, the platform cannot function, and no data is stored. You may choose not to use the platform.",
        contactUs: "Contact Us",
        contactUsText: "For questions about our platform, email <a href='mailto:contact@northstarpianoschool.com'>contact@northstarpianoschool.com</a>. For data concerns, contact your piano teacher, as they control the data.",
        noConsentError: "Sorry, you need to agree to the privacy policy before creating a user.",
        noConsentOptOut: "This platform requires local storage to track your progress, which is essential for its functionality. If you do not consent, you cannot use the platform. Please accept the Privacy Policy to continue or choose not to use the site.",
        practiceStreak: "Practice Streak:",
        daysInRow: "days in a row.",
        totalGoldStars: "Total gold stars earned:",
        rankBadgePopupTitle: "How the Rank Badge Works",
        rankBadgePopupText: "The Rank Badge tracks your piano journey! The bottom field has 16 small stars that light up one by one as you complete exercises by earning six stars each. Go to Star Map or Chapter 1-7 in the menu to gain stars. Finish 16 exercises to become a <strong>Star Cadet</strong>! Your next goal is the first chevron, with seven large gold stars. These light up as you complete all four exercises in Part 1 of each chapter (seven chapters total). Master them all to earn the rank of <strong>Star Officer</strong>!",
        closeButton: "Close",
        removeButton: "Delete",
        menuHome: "Home",
        homeTitle: "Home",
        homeWelcome: "North Star Piano School",
        homeIntro: "Watch Johannes showcase the book to Franz in the video below.",
        appleBooksText: "Buy the Book"
    },
    sv: {
        menuFrontPage: "Stjärnöversikt",
        menuChapter: "Kapitel",
        menuStudents: "För lärare",
        menuStarMap: "Stjärnkartan",
        menuChapters: "Kapitel",
        menuFAQ: "Vanliga frågor",
        menuRemove: "Radera elev",
        menuPrivacyPolicy: "Integritetspolicy",
        popupWelcome: "Välkommen till Nordstjärnans Pianoskola!",
        popupIntro: "Du har nu påbörjat din pianoresa som en Upptäckare! Stjärnkartan är din guide – den visar dig vilken övning du ska göra härnäst medan du navigerar dig fram genom bokens sju kapitel, samlar guldstjärnor och klättrar i rang, från Stjärnkadett till Stjärnofficer och vidare.",
        popupTeacherNote: "Du kan också fokusera på ett specifikt kapitel om du vill bli extra bra på t.ex. skalor eller ackord. Besök kapitel-sidorna för att börja samla guldstjärnor, se dina framsteg på stjärnöversikt-sidan, eller hantera elever på sidan för lärare.",
        popupEnterName: "Låt oss sätta igång – skriv in ditt namn nedan för att starta ditt äventyr!",
        rankExplorer: "Upptäckare",
        rankStarCadet: "Stjärnkadett",
        rankStarOfficer: "Stjärnofficer",
        rankStarCaptain: "Stjärnkapten",
        rankStarCommander: "Stjärnkommendör",
        rankStarAdmiral: "Stjärnamiral",
        rankAchievementMessage: "Grattis [userName]!",
        rankAchievementSubtitle: "Du har uppnått rangen Stjärnkadett!",
        textboxExplorer: "Ditt pianoäventyr har startat, och du upptäcker noter, skalor, ackord och arpeggion i din egen takt. Klarar du 16 övningar blir du Stjärnkadett!",
        textboxStarCadet: "Du har visat järnvilja och samlat sex guldstjärnor i 16 övningar i Nordstjärnans Pianoskola. Klarar du Del 1 i alla sju kapitel blir du Stjärnofficer!",
        textboxStarOfficer: "Med stort fokus och noggrannhet har du lärt dig tangentnamn, skalor, grundackord och flera stycken. Var stolt, för nu är du stjärnofficer i Nordstjärnans Pianoskola – klara av Del 2 i alla kapitel och bli Stjärnkapten!",
        textboxStarCaptain: "Med stort fokus har du lärt dig notläsning och kan nu spela låtar med ackord och framföra klassiska verk. Var stolt, för nu är du Stjärnkapten i Nordstjärnans Pianoskola – klara av Del 3 i alla kapitel och bli Stjärnkommendör!",
        textboxStarCommander: "Du har fått bra grepp om ackord och arpeggion i alla omvändningar och kan spela skalor, känna igen intervall och framföra hela konserter på egen hand. Var stolt, för nu är du Stjärnkommendör i Nordstjärnans Pianoskola – klara av Del 4 i alla kapitel och bli Stjärnamiral!",
        textboxStarAdmiral: "Dina ansträngningar och ditt fokus har gjort dig till en pianovirtuos. Du är nu Stjärnamiral i Nordstjärnans Pianoskola.",
        chapter1: "Kapitel 1",
        chapter2: "Kapitel 2",
        chapter3: "Kapitel 3",
        chapter4: "Kapitel 4",
        chapter5: "Kapitel 5",
        chapter6: "Kapitel 6",
        chapter7: "Kapitel 7",
        chapterName1: "Notläsning",
        chapterName2: "Övning",
        chapterName3: "Durskalor",
        chapterName4: "Mollskalor",
        chapterName5: "Ackord",
        chapterName6: "Arpeggion",
        chapterName7: "Repertoar",
        addButton: "Lägg till",
        studentNamePlaceholder: "Skriv elevens namn",
        studentsLabel: "Radera elev",
        addNewStudent: "Lägg till en ny elev",
        addStudentSuccess: "Ny stjärnelev skapad!",
        addStudentDuplicate: "Elevnamnet finns redan! Välj ett annat namn.",
        addStudentNoName: "Vänligen ange ett namn!",
        addStudentConsentPrompt: "Du lägger till ‘{name}’ för att spåra deras pianoprogress lokalt på din enhet. I regioner som EU behöver du deras samtycke (eller förälders samtycke för barn under 13). Alternativt, använd ett anonymt ID (t.ex. ‘elev123’) om samtycke saknas. Fortsätta?",
        addStudentCancelled: "Skapande av användare avbröts.",
        notesLabel: "Anteckningar: ",
        notesTitle: "Anteckningar: ",
        notesPlaceholder: "Skriv dina anteckningar om elevens läxor m.m. här. Anteckningarna sparas automatiskt och vid export kan eleven se dina anteckningar.",        
        saveNotesButton: "Spara anteckningar",
        congratsMessage: "🌟 Grattis! Du har slutfört Stjärnkartan! 🌟",
        faqTitle: "Vanliga frågor",
        faqQ1: "Hur använder jag Stjärnkartan?",
        faqA1: "Gå till Stjärnkartan i menyn och scrolla till vänster för att se en förklaring till hur du använder Stjärnkartan.",
        faqQ2: "Kan jag lägga till mina elever och finns det en gräns för hur många jag kan lägga till?",
        faqA2: "Ja, du kan lägga till elever på För lärare-sidan: skriv elevens namn i det första fältet, tryck lägg till, och skifta mellan elever när du vill i menyn—data sparas lokalt och automatiskt. Det finns ingen gräns för hur många elever du kan lägga till!",
        faqQ3: "Kan jag dela en elevs framsteg med dem, om de vill se sina guldstjärnor på sin egen iPad?",
        faqA3: "Ja, du kan dela en elevs framsteg! På För lärare-sidan, välj eleven och generera en delningslänk eller QR-kod. Eleven kan skanna QR-koden med sin iPads kameraapp för att importera sina framsteg, eller så kan du skicka importlänken via SMS, e-post eller AirDrop för att de ska kunna öppna den på sin enhet. När framstegen är importerade kan de se sina guldstjärnor och framsteg på sin egen iPad och även klicka på nya stjärnor själva—era konton är inte länkade. Vid nästa lektion kan du exportera elevens data igen till deras iPad, och din version kommer att skriva över elevens version, så att deras framsteg hålls uppdaterade med dina register.",
        faqQ4: "Varför kan jag inte klicka på stjärnorna på Stjärnöversikt-sidan?",
        faqA4: "Stjärnorna på rangmärket i stjärnöversikt är inte klickbara – de tänds automatiskt när du samlar guldstjärnor på kapitel-sidorna och i Stjärnkartan.",
        faqQ5: "Hur fungerar rangsystemet i Nordstjärnans Pianoskola?",
        faqA5: "Rangmärket har ett nedre fält med 16 små stjärnor. För varje övning som du slutför (får 6 guldstjärnor på) – tänds en av dessa små stjärnor. När det nedre fältet är fullt uppnår du Stjärnkadett-rangen, och märket till höger uppdateras från tomma stjärnor till guldstjärnor. I rangmärket finns också fyra chevroner, där varje chevron har stora stjärnor som tänds när du slutför alla fyra övningar i en del. Den första chevronens sju stjärnor motsvarar Del 1 i alla sju kapitel, den andra chevronen Del 2, och så vidare. När du fyller en chevron med guldstjärnor klättrar du i rang: du blir Stjärnofficer efter Del 1, Stjärnkapten efter Del 2, Stjärnkommendör efter Del 3 och når du den högsta rangen, efter Del 4, blir du Stjärnamiral. Märket till höger får en motsvarande chevron för varje del du slutför, vilket visar din nuvarande rang!",
        faqQ6: "Hur mycket tid bör jag lägga på att öva varje dag?",
        faqA6: "Vi rekommenderar att du övar 15–30 minuter per dag utöver den tid du lägger på stycken, beroende på din nivå och ålder. Nybörjare kan börja med 15 minuter, medan mer avancerade elever kan sikta på 30 minuter. Försök att öva varje dag för att göra stadiga framsteg, och fokusera på dina aktiva övningar för att tjäna guldstjärnor.",
        faqQ7: "Kan jag använda Nordstjärnans Pianoskola om jag redan kan spela piano, och hur avancerade är övningarna?",
        faqA7: "Ja, om du redan kan spela piano kan du ändå använda Nordstjärnans Pianoskola! Övningarna är uppdelade i fyra delar med olika nivåer: Del 1 är för nybörjare, Del 2 är för något mer erfarna elever, Del 3 är för avancerade elever, och Del 4 är överlag väldigt avancerade övningar för erfarna pianister. Börja med övningar som matchar din nivå eller starta från början för att samla några lätta guldstjärnor. Samla guldstjärnor för att klättra i rang och förbättra dina färdigheter, oavsett din nivå!",
        faqQ8: "Hur många ranger finns det?",
        faqA8: "Det finns sex ranger i Nordstjärnans Pianoskola: Upptäckare, Stjärnkadett, Stjärnofficer, Stjärnkapten, Stjärnkommendör och Stjärnamiral. Du klättrar i rang genom att tjäna guldstjärnor i övningar, och den högsta rangen, Stjärnamiral, uppnår du genom att få sex guldstjärnor på alla övningar i alla kapitel.",
        faqQ9: "Behöver jag ett piano för att använda Nordstjärnans Pianoskola?",
        faqA9: "För att använda Nordstjärnans Pianoskola behöver du tillgång till ett piano eller ett keyboard för att öva på övningarna i Nordstjärnans Pianoskola. Ett keyboard med minst 61 tangenter fungerar bra för nybörjare, men ett piano är idealiskt för att utveckla rätt teknik. Du behöver inte äga ett piano—du kan använda ett på en skola eller hyra ett om det behövs.",
        faqQ10: "Vad gör jag om jag har tekniska problem med hemsidan?",
        faqA10: "Om du har tekniska problem med hemsidan, prova att ladda om sidan eller kontrollera din internetanslutning. Om problemet kvarstår, kontakta oss på info@pianoskola.com så hjälper vi dig. Se också till att inte rensa webbläsarens cache, eftersom det tar bort dina framsteg.",
        faqQ11: "Kan jag skicka förslag och frågor?",
        faqA11: "Ja, maila gärna: info@pianoskola.com",
        faqQ12: "Varför försvann mina framsteg?",
        faqA12: "Om du har rensat din historik i din webbläsare så försvann all data som visar stjärnor eftersom denna lagras i webbläsarens cacheminne. Om du har importerat en användare med ditt namn från en annan enhet via en länk eller QR-kod som skapats på För lärare-sidan så har din användare skrivits över av den importerade användaren.",
        faqQ13: "Lagras min elevdata online? Är det GDPR-vänligt?",
        faqA13: "Din elevdata (namn eller anonymt ID, anteckningar och guldstjärnor) lagras endast lokalt i din webbläsare, inte online. Vid export kodas datan till en säker QR-kod eller länk, som endast den importerande enheten kan läsa. Lärare måste skaffa elevens samtycke (eller förälders samtycke för barn) innan de lägger till namn, eller använda ett anonymt ID (t.ex. ‘elev123’). Använd <a href='students.html'>radera användare-sidan</a> för att ta bort data. Se vår <a href='privacy-policy.html'>integritetspolicy</a> för detaljer.",
        faqQ14: "Behöver jag tillstånd för att lägga till mina elevers data, och varför krävs lokal lagring?",
        faqA14: "Ja, lärare måste skaffa samtycke från elever (eller föräldrar för barn under 13) eller en annan laglig grund (t.ex. lektionsavtal) innan de lägger till namn i plattformen, eller använda ett anonymt ID (t.ex. ‘elev123’) om samtycke saknas, särskilt i regioner som EU. Data lagras lokalt i din webbläsares localStorage, vilket är nödvändigt för att spåra framsteg i 112 övningar (t.ex. nivå 5/6 för övning 1:1:1). Utan localStorage kan framsteg inte sparas, vilket gör plattformen oanvändbar. Använd <a href='students.html'>Radera elev på För lärare-sidan</a>  för att ta bort data eller se vår <a href='privacy-policy.html'>integritetspolicy</a> för mer.",
        exportTitle: "Exportera elevdata",
        exportInfo: "Genom att trycka på knappen nedan kan du dela den aktuella eleven till en annan enhet. Mottagaren behöver bara öppna länken – eleven läggs automatiskt till!",
        exportInfoText: "(exporterar: namn, anteckningar & guldstjärnor)",
        studentModeInfoText: "Om du markerar <b>”Låsta guldstjärnor”</b> och klickar på <b>Dela</b> så skapas en QR-kod som eleven kan scanna med sin iPads kamera.<br><br>" +
"På elevens iPad visas då befintliga guldstjärnor som låsta. Eleven kan istället klicka fram <b>silverstjärnor</b> för nya nivåer de övar på hemma.<br><br>" +
"Vid nästa lektion kan du granska silverstjärnorna, bekräfta elevens framsteg och klicka fram nya guldstjärnor på din enhet.<br><br>" +
"Exportera sedan igen med <b>”Låsta guldstjärnor”</b> för att uppdatera elevens version med de nya guldstjärnorna.<br><br>" +
"Vill du bara flytta en användare till en annan enhet och fortsätta lägga till guldstjärnor där? Avmarkera då <b>”Låsta guldstjärnor”</b> innan du klickar på <b>Dela</b>.",
        creatingLink: "Skapar länk, vänta…",
        copyLinkSuccess: "Länk kopierad till urklipp! Klistra in för att dela.",
        scanOrShare: "Skanna QR-koden eller...",
        shareButtonExport: "Dela via AirDrop / meddelande / QR-kod",
        shareButtonQR: "Dela elev via AirDrop / meddelande",
        removeStudentTitle: "Radera elev",
        removeStudentButton: "Radera elev",
        confirmRemoveMessage: "Tryck på knappen nedan för att radera ",
        confirmRemoveButton: "Radera ",
        removeCurrentStudent: "Radera aktuell elev: ",
        removeCurrentStudentNone: "Radera aktuell elev: ingen",
        starMapDescription: "Välkommen till Stjärnkartan! Klicka på varje stjärna för att följa dina framsteg i Nordstjärnans Pianoskola. Förtjäna upp till sex guldstjärnor per övning genom att öva i pianoskolan. Scrolla för att utforska alla kapitel och övningar.",
        starMapTitle: "Såhär använder du Stjärnkartan",
        starMapBullet1: "<strong>Lektionsupplägg:</strong> Med nybörjare brukar jag börja med Kapitel 1 & 2. De som kommit lite längre får även påbörja Kapitel 3 & 5 och när de klarat 5:1:1 börjar vi på Kapitel 6 också. Kapitel 4 (mollskalor) startas när eleven vill ha omväxling från durskalorna. Använd max 30-40% av lektionstiden för att kontrollera övningarna eleven haft i läxa och ev. introducera nästa övning om de är helt klara med en uppgift (6 guldstjärnor). Mängdövningen på övningarna får eleven göra hemma så att större delen av lektionstiden kan läggas på Kapitel 7 (Repertoar) eller andra stycken. I Kapitel 1 är det nyttigt att smygstarta Del 4 (Rytm) tidigt. Behöver eleven en paus från Del 1 (Tangenter) eller Del 2 (Noter) så lägg ett par veckor på Del 4 istället. Likadant med Kapitel 2’s Del 2 (Pedaler).",
        starMapBullet2: "<strong>Börja med stjärna 1:1:1:</strong> Navigera till övning 1:1:1 i Nordstjärnans Pianoskola. Sifferkoder anges som Kapitel:Del:Övning (t.ex. 1:1:1 är Kapitel 1, Del 1, Övning 1). Följ bokens instruktioner för att slutföra övningen och få guldstjärnor. Återvänd till Stjärnkartan, klicka på stjärna 1:1:1 för att få fram dina guldstjärnor. Klickar du fram för många, fortsätt klicka för att nollställa.",
        starMapBullet3: "<strong>Läxa:</strong> Läraren klickar på de kapitel som eleven har i läxa så att de lyser i guld. När eleverna importerar sina användare på sina iPads så ser de vilka kapitel de har i läxa, utifrån vilka som lyser.",
        starMapBullet4: "<strong>Daglig övning:</strong> Jobba med alla lysande kapitel en stund varje dag. Når du den stjätte stjärnan i en övning, fortsätt då med nästa övning i det kapitlet.",
        starMapBullet5: "<strong>Se din rang:</strong> Klicka på Stjärnöversikt i menyn för att se din rang. Ju fler övningar du får sex stjärnor i, desto mer ökar du i rang!",
        loading: "Laddar elevdata...",
        success: "Dina framgångar är uppdaterade, välkommen",
        error: "Ogiltig länk. Ingen elev lades till.",
        studentModeLabel: "Låsta guldstjärnor",
        noConsentTitle: "Välkommen tillbaka senare",
        noConsentMessage: "Vi är ledsna att du inte kunde godkänna vår integritetspolicy just nu. Nordstjärnans Pianoskola använder lokal lagring på din enhet för att spåra framsteg i 112 pianövningar, vilket är nödvändigt för att plattformen ska fungera. Utan att godkänna detta kan dina framsteg inte sparas lokalt, men vi välkomnar dig gärna tillbaka när du är redo! Besök vår <a href='faq.html'>FAQ</a> eller visa vår integritetspolicy för att läsa mer.",
        consentMessage: "Välkommen till Nordstjärnans Pianoskola! Hemsidan använder lokal lagring för att spara namn, framsteg och anteckningar i webbläsaren. Detta innebär att lärare som lagrar sina elevers namn och andra data behöver godkänna vår integritetspolicy för att följa GDPR eller andra liknande lagar om datalagring. <br><strong style=\"color: #ff0000;\">Är du en elev som bara har dig själv som användare så berörs du inte direkt av integritetspolicyn och kan bara trycka Jag godkänner!</strong><br> Lärare: Skaffa elevers samtycke (eller förälders samtycke för barn under 13 år) innan du lägger till namn, eller använd ett anonymt ID (t.ex. ‘elev123’) om du inte kan få samtycke. Ingen data lagras online. Ingen data samlas in av Nordstjärnans Pianoskola. Godkänn för att börja din pianoresa!",
        consentAccept: "Jag godkänner!",
        consentReject: "Jag godkänner inte",
        consentPolicyLink: "Integritetspolicy",
        privacyPolicyTitle: "Integritetspolicy",
        effectiveDate: "Ikraftträdandedatum",
        whoWeAre: "Vilka vi är",
        whoWeAreText: "Nordstjärnans Pianoskola tillhandahåller den här utbildningsplattformen för pianolärare och elever som vill spåra sina framsteg i pianoskolans 112 övningar. Vi samlar inte in, lagrar eller får åtkomst till någon användardata. Kontakta oss på <a href='mailto:info@pianoskola.com'>info@pianoskola.com</a>.",
        ourRole: "Vår roll",
        ourRoleText: "Vi tillhandahåller en plattform som låter användare (främst pianolärare) lagra elevdata lokalt i deras webbläsares localStorage. Detta är nödvändigt för att spåra framsteg, vilket är plattformens kärnfunktion. Vi har ingen åtkomst till denna data, eftersom den endast lagras på användarens enhet, inte på servrar eller i databaser.",
        teachersRole: "Pianolärares roll och ansvar",
        teachersRoleText: "Pianolärare som använder vår plattform agerar som <strong>personuppgiftsansvariga</strong> enligt GDPR. De:<ul><li>Matar in elevdata (t.ex. namn, framsteg, anteckningar) i localStorage för att spåra framsteg i 112 övningar.</li><li>Måste skaffa <strong>tillstånd</strong> (t.ex. samtycke, avtal eller legitimt intresse) för att lagra elevdata. För barn under 13 i Sverige (eller 16 i vissa EU-länder) krävs <strong>föräldrars samtycke</strong>.</li><li>I regioner som kräver samtycke (t.ex. EU) kan lärare använda ett <strong>anonymt ID</strong> (t.ex. ‘elev123’) istället för elevens namn om samtycke inte kan erhållas, för att säkerställa efterlevnad av lokala lagar.</li><li>Ansvarar för att informera elever/föräldrar om databehandling och säkerställa efterlevnad av dataskyddslagar (t.ex. GDPR).</li></ul>",
        dataProcessed: "Data som behandlas",
        dataProcessedText: "Lärare kan lagra följande data lokalt via vår plattform:<ul><li><strong>Elevnamn eller anonyma ID:n</strong>: För att identifiera elever (t.ex. “Alice” eller “elev123”).</li><li><strong>Framsteg</strong>: Stjärnbetyg för övningar (t.ex. nivå 5 av 6 för övning 1:1:1).</li><li><strong>Anteckningar</strong>: Lärares anteckningar om elever.</li><li><strong>Språkval</strong>: Valt språk (t.ex. svenska eller engelska).</li></ul>Denna data är nödvändig för att använda plattformen, eftersom spårning av framsteg är dess kärnfunktion.",
        purpose: "Syfte",
        purposeText: "Lärare använder denna data för att övervaka elevers framsteg i 112 övningar och anpassa lektioner. Språkinställningar förbättrar användbarheten. Utan localStorage kan framsteg inte sparas, vilket gör plattformen oanvändbar.",
        legalBasis: "Rättslig grund",
        legalBasisText: "Lärare måste behandla data baserat på en rättslig grund, såsom:<ul><li><strong>Samtycke</strong>: Erhållet från elever eller föräldrar (för barn).</li><li><strong>Avtal</strong>: För att uppfylla lektionsavtal som kräver spårning av framsteg.</li><li><strong>Legitimt intresse</strong>: För spårning av framsteg, om det balanseras med elevers rättigheter.</li></ul>Vår plattform uppmanar lärare att bekräfta att de har tillstånd eller använder anonyma ID:n innan de lägger till elever.",
        storage: "Lagring",
        storageText: "All data lagras lokalt i användarens webbläsares localStorage, inte på servrar eller i databaser. Att rensa webbläsarens cache eller använda <a href='students.html'>Radera elev på För lärare-sidan</a> tar bort all data.",
        sharing: "Delning",
        sharingText: "Ingen data delas med Nordstjärnans Pianoskola eller tredje parter. Lärare kan dela framsteg via säkra QR-koder eller länkar, behandlade klient-side och läsbara endast av den importerande enheten (t.ex. en elevs iPad).",
        retention: "Lagringstid",
        retentionText: "Data finns kvar i localStorage tills du rensar webbläsarens cache eller tar bort användare via <a href='students.html'>Radera elev på För lärare-sidan</a>. Återkallande av samtycke genom att rensa cachen raderar all data och förhindrar vidare användning av plattformen.",
        yourRights: "Dina rättigheter",
        yourRightsText: "Enligt GDPR har du rätt att: <ul><li><strong>Tillgång</strong>: Se data via webbläsarens utvecklarverktyg.</li><li><strong>Radera</strong>: Använd <a href='students.html'>Radera elev på För lärare-sidan</a> eller rensa webbläsarens cache.</li><li><strong>Återkalla samtycke</strong>: Rensa webbläsarens cache (t.ex. Chrome: Inställningar > Sekretess > Rensa webbinformation > Cookies och annan webbplatsdata) för att radera all data och återkalla samtycke.</li><li><strong>Välja bort</strong>: Utan samtycke till lokal lagring är plattformen oanvändbar, eftersom det är nödvändigt för att spåra framsteg. Du kan välja att inte använda plattformen.</li></ul>Kontakta din lärare för databehov eller maila <a href='mailto:info@pianoskola.com'>info@pianoskola.com</a>.",
        security: "Säkerhet",
        securityText: "Data lagras lokalt, vilket minskar risker. QR-kod/länkexport är kodade säkert för att förhindra obehörig åtkomst.",
        minors: "Barn",
        minorsText: "För elever under 13 måste lärare skaffa föräldrars samtycke innan de lägger till deras data, eller använda ett anonymt ID (t.ex. ‘Elev123’). Utan samtycke kan plattformen inte användas för minderåriga.",
        usingWithoutStorage: "Att använda plattformen utan lokal lagring",
        usingWithoutStorageText: "Plattformens syfte är att spåra framsteg för 112 pianövningar (t.ex. nivå 5/6 för övning 1:1:1). localStorage är nödvändigt för att spara dessa framsteg. Utan samtycke till lokal lagring kan plattformen inte användas, och ingen data lagras. Du kan välja att inte använda plattformen.",
        contactUs: "Kontakta oss",
        contactUsText: "För frågor om vår plattform, maila <a href='mailto:info@pianoskola.com'>info@pianoskola.com</a>. För databehov, kontakta din pianolärare, eftersom de kontrollerar datan.",
        noConsentError: "Du måste godkänna integritetspolicyn innan du kan skapa en användare.",
        noConsentOptOut: "Denna plattform kräver lokal lagring för att spåra dina framsteg, vilket är nödvändigt för dess funktionalitet. Om du inte samtycker kan du inte använda plattformen. Vänligen acceptera integritetspolicyn för att fortsätta eller välj att inte använda webbplatsen",
        practiceStreak: "Övningsstreak:",
        daysInRow: "dagar i rad.",
        totalGoldStars: "Guldstjärnor intjänade:",
        rankBadgePopupTitle: "Så fungerar rangmärket",
        rankBadgePopupText: "Rangmärket visar dina framgångar! Det nedre fältet har 16 små stjärnor som tänds en efter en när du slutför övningar genom att få sex guldstjärnor per övning. Gå till Stjärnkartan eller Kapitel 1-7 i menyn för att klicka fram dina guldstjärnor. Slutför 16 övningar för att bli <strong>Stjärnkadett</strong>! Ditt nästa mål är första chevronen, med sju stora stjärnor. Dessa tänds när du slutför alla fyra övningar i Del 1 i varje Kapitel (totalt sju kapitel). Bemästra dem alla för att uppnå rangen <strong>Stjärnofficer</strong>!",
        closeButton: "Stäng",
        removeButton: "Radera",
        menuHome: "Startsida",
        homeTitle: "Startsida",
        homeWelcome: "Nordstjärnans Pianoskola",
        homeIntro: "Titta på videon nedan för att se Johannes förklara boken för Franz.",
        appleBooksText: "Köp Pianoskolan"
    }
};

const menuHtml = `
    <nav class="hamburger-nav">
        <div class="menu" id="main-menu">
            <div class="student-select-container">
                <select id="globalStudentSelect"></select>
            </div>
            <div class="menu-content">
                <a href="index.html" class="menu-link" data-translate="menuHome"></a>
                <a href="starmap.html#svg-start" class="menu-link" data-translate="menuStarMap"></a>
                <div class="menu-item">
                    <span class="chapters-toggle" data-translate="menuChapters"></span>
                    <ul class="submenu">
                        <li><a href="chapter1.html" class="menu-link"><span data-translate="menuChapter"></span></a></li>
                        <li><a href="chapter2.html" class="menu-link"><span data-translate="menuChapter"></span></a></li>
                        <li><a href="chapter3.html" class="menu-link"><span data-translate="menuChapter"></span></a></li>
                        <li><a href="chapter4.html" class="menu-link"><span data-translate="menuChapter"></span></a></li>
                        <li><a href="chapter5.html" class="menu-link"><span data-translate="menuChapter"></span></a></li>
                        <li><a href="chapter6.html" class="menu-link"><span data-translate="menuChapter"></span></a></li>
                        <li><a href="chapter7.html" class="menu-link"><span data-translate="menuChapter"></span></a></li>
                    </ul>
                </div>
                <a href="students.html" class="menu-link" data-translate="menuStudents"></a>
                <a href="ranks.html" class="menu-link" data-translate="menuFrontPage"></a>
                <a href="faq.html" class="menu-link" data-translate="menuFAQ"></a>
                <a href="privacy-policy.html" class="menu-link" data-translate="menuPrivacyPolicy"></a>
                <div class="language-switcher">
                    <span class="flag" onclick="switchLanguage('en')">🇬🇧</span>
                    <span class="flag" onclick="switchLanguage('sv')">🇸🇪</span>
                </div>
                <div class="practice-stats">
                    <p data-translate="practiceStreak" style="text-align: center; margin: 10px 0 5px 0;"></p>
                    <p id="streakNumber" style="text-align: center; font-size: 32px; margin: 5px 0; color: #ffd700;">0</p>
                    <p data-translate="daysInRow" style="text-align: center; margin: 5px 0 10px 0;"></p>
                    <p data-translate="totalGoldStars" style="text-align: center; margin: 10px 0 5px 0;"></p>
                    <p id="goldStarsNumber" style="text-align: center; font-size: 24px; margin: 5px 0; color: #ffd700;">0<span style="color: #ffd700;"> ★</span></p>
                </div>
            </div>
        </div>
    </nav>
`;

function injectMenu() {
    console.log('injectMenu called');
    const placeholder = document.getElementById('menu-placeholder');
    if (!placeholder) {
        console.error('Menu placeholder not found');
        return;
    }

    placeholder.innerHTML = menuHtml;
    console.log('Menu HTML injected');

    const hamburger = document.getElementById('menuButton');
    const menu = document.querySelector('.menu');

    if (!hamburger || !menu) {
        console.error('Menu elements missing:', { hamburger: !!hamburger, menu: !!menu });
        return;
    }

    console.log('Menu initialized with left: -250px via CSS');

    const newHamburger = hamburger.cloneNode(true);
    hamburger.parentNode.replaceChild(newHamburger, hamburger);

    newHamburger.addEventListener('click', () => {
        console.log('Hamburger clicked');
        const isExpanded = newHamburger.getAttribute('aria-expanded') === 'true';
        newHamburger.setAttribute('aria-expanded', !isExpanded);
        newHamburger.classList.toggle('active');
        if (!isExpanded) {
            menu.classList.add('active');
            menu.animate([{ left: '-250px' }, { left: '0' }], { duration: 300, easing: 'ease-in-out', fill: 'forwards' });
            console.log('Menu opened');
            if (typeof updateDropdown === 'function') {
                console.log('Calling updateDropdown when menu opens');
                updateDropdown();
            }
        } else {
            menu.animate([{ left: '0' }, { left: '-250px' }], { duration: 300, easing: 'ease-in-out', fill: 'forwards' }).onfinish = () => {
                menu.classList.remove('active');
                console.log('Menu closed');
            };
        }
    });

    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', () => {
            console.log(`Menu link clicked: ${link.getAttribute('href')}`);
            newHamburger.setAttribute('aria-expanded', 'false');
            newHamburger.classList.remove('active');
            menu.animate([{ left: '0' }, { left: '-250px' }], { duration: 300, easing: 'ease-in-out', fill: 'forwards' }).onfinish = () => {
                menu.classList.remove('active');
                console.log('Menu closed after link click');
            };
        });
    });

    document.addEventListener('click', (e) => {
        if (!newHamburger.contains(e.target) && !menu.contains(e.target)) {
            console.log('Clicked outside menu');
            newHamburger.setAttribute('aria-expanded', 'false');
            newHamburger.classList.remove('active');
            menu.animate([{ left: '0' }, { left: '-250px' }], { duration: 300, easing: 'ease-in-out', fill: 'forwards' }).onfinish = () => {
                menu.classList.remove('active');
                console.log('Menu closed due to outside click');
            };
        }
    });

    const chaptersToggle = document.querySelector('.chapters-toggle');
    const submenu = document.querySelector('.submenu');
    if (chaptersToggle && submenu) {
        chaptersToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Chapters toggle clicked');
            const isSubmenuOpen = submenu.classList.contains('open');
            if (isSubmenuOpen) {
                submenu.classList.remove('open');
                console.log('Submenu closed');
            } else {
                submenu.style.display = 'block';
                submenu.offsetHeight;
                submenu.classList.add('open');
                console.log('Submenu opened');
            }
            chaptersToggle.parentElement.classList.toggle('active');
        });
    } else {
        console.warn('Chapters toggle or submenu not found:', { chaptersToggle: !!chaptersToggle, submenu: !!submenu });
    }

    const lang = localStorage.getItem('language') || 'sv';
    switchLanguage(lang);
    setActivePage();
    updateStreakDisplay(); // Initial streak display update
}

function updateStreakDisplay() {
    console.log('updateStreakDisplay called');
    const streakNumber = document.getElementById('streakNumber');
    const goldStarsNumber = document.getElementById('goldStarsNumber');
    if (!streakNumber || !goldStarsNumber) {
        console.warn('Streak display elements not found:', { streakNumber: !!streakNumber, goldStarsNumber: !!goldStarsNumber });
        return;
    }

    // Re-fetch studentsData to ensure we have the latest state
    const studentsData = JSON.parse(localStorage.getItem('starAcademyStudents')) || { students: {}, currentStudent: '' };
    const currentStudent = studentsData.currentStudent;
    if (!currentStudent || !studentsData.students[currentStudent]) {
        console.log('No current student, setting streak to 0');
        streakNumber.textContent = '0';
        goldStarsNumber.innerHTML = '0<span style="color: #ffd700;"> ★</span>';
        return;
    }

    const practiceLog = studentsData.students[currentStudent].practiceLog || { streak: 0, totalGoldStars: 0 };
    streakNumber.textContent = practiceLog.streak.toString();
    goldStarsNumber.innerHTML = `${practiceLog.totalGoldStars.toString()}<span style="color: #ffd700;"> ★</span>`;
    console.log(`Updated streak display: streak=${practiceLog.streak}, totalGoldStars=${practiceLog.totalGoldStars}`);
}

function initializeConsentPopup() {
    if (window.consentInitialized) {
        console.log('Consent popup already initialized, skipping');
        return;
    }
    window.consentInitialized = true;

    localStorage.removeItem('cookieconsent_status');

    const currentPath = window.location.pathname.toLowerCase();
    const isRelevantPage = currentPath.includes('chapter') || currentPath.includes('starmap.html') || currentPath.includes('students.html'); // NEW: Added starmap and students
    if (!isRelevantPage) {
        console.log('Not a relevant page for consent popup:', currentPath);
        return;
    }

    const consentGiven = localStorage.getItem('consentGiven') === 'true';
    if (consentGiven) {
        console.log('Consent already given, initializing name popup');
        if (typeof handleUserNamePopup === 'function') handleUserNamePopup();
        return;
    }

    const lang = localStorage.getItem('language') || 'sv';
    const consentPopup = document.getElementById('consentPopup');
    const consentMessage = document.getElementById('consentMessage');
    const consentAcceptButton = document.getElementById('consentAcceptButton');
    const consentRejectButton = document.getElementById('consentRejectButton');
    const consentPolicyLink = document.getElementById('consentPolicyLink');

    if (!consentPopup || !consentMessage || !consentAcceptButton || !consentRejectButton || !consentPolicyLink) {
        console.error('Consent popup elements not found:', {
            consentPopup: !!consentPopup,
            consentMessage: !!consentMessage,
            consentAcceptButton: !!consentAcceptButton,
            consentRejectButton: !!consentRejectButton,
            consentPolicyLink: !!consentPolicyLink
        });
        return;
    }

    console.log('Consent popup translations:', {
        message: translations[lang].consentMessage,
        accept: translations[lang].consentAccept,
        reject: translations[lang].consentReject,
        policyLink: translations[lang].consentPolicyLink
    });

    consentMessage.innerHTML = translations[lang].consentMessage;
    consentAcceptButton.textContent = translations[lang].consentAccept;
    consentRejectButton.textContent = translations[lang].consentReject;
    consentPolicyLink.textContent = translations[lang].consentPolicyLink;

    consentPopup.style.display = 'flex';
    document.body.classList.add('popup-open');

    consentAcceptButton.addEventListener('click', () => {
        console.log('User consented');
        localStorage.setItem('consentGiven', 'true');
        localStorage.removeItem('cookieconsent_status');
        consentPopup.style.display = 'none';
        document.body.classList.remove('popup-open');
        window.consentInitialized = false;
        // NEW: Handle pendingName for students.html
        const pendingName = localStorage.getItem('pendingName');
        if (pendingName && currentPath.includes('students.html')) {
            localStorage.removeItem('pendingName');
            const nameInput = document.getElementById('newStudentName');
            if (nameInput) {
                nameInput.value = pendingName;
                if (typeof addStudent === 'function') {
                    addStudent(null);
                }
            }
        } else if (typeof handleUserNamePopup === 'function') {
            handleUserNamePopup();
        }
    });

    consentRejectButton.addEventListener('click', () => {
        console.log('User rejected consent');
        alert(translations[lang].noConsentOptOut || 'You must accept the privacy policy to use this platform.');
        localStorage.removeItem('consentGiven');
        localStorage.removeItem('cookieconsentPolicy');
        consentPopup.style.display = 'flex';
    });

    consentPolicyLink.style.pointerEvents = 'auto';
    consentPolicyLink.addEventListener('click', (e) => {
        console.log('Privacy policy link clicked, target:', e.target);
        console.log('showPrivacyPolicyPopup exists:', typeof showPrivacyPolicyPopup === 'function');
        if (typeof showPrivacyPolicyPopup === 'function') {
            showPrivacyPolicyPopup();
        } else {
            console.error('showPrivacyPolicyPopup is not defined');
        }
    });
}

function initializeRankBadgePopup() {
    console.log('initializeRankBadgePopup called');
    const overlay = document.getElementById('rankBadgeOverlay');
    const popup = document.getElementById('rankBadgePopup');
    const title = document.getElementById('rankBadgePopupTitle');
    const text = document.getElementById('rankBadgePopupText');
    const closeTop = document.getElementById('closeRankBadgePopupTop');
    const closeBottom = document.getElementById('closeRankBadgePopupBottom');

    if (!overlay || !popup || !title || !text || !closeTop || !closeBottom) {
        console.error('Rank badge popup elements not found:', {
            overlay: !!overlay,
            popup: !!popup,
            title: !!title,
            text: !!text,
            closeTop: !!closeTop,
            closeBottom: !!closeBottom
        });
        return;
    }

    const lang = localStorage.getItem('language') || 'sv';
    title.textContent = translations[lang].rankBadgePopupTitle;
    text.innerHTML = translations[lang].rankBadgePopupText;
    closeBottom.textContent = translations[lang].closeButton;

    overlay.addEventListener('click', () => {
        console.log('Rank badge overlay clicked');
        popup.style.display = 'flex';
        popup.style.opacity = '0';
        setTimeout(() => {
            popup.style.opacity = '1';
            popup.style.transition = 'opacity 0.3s ease-in';
        }, 10);
    });

    closeTop.addEventListener('click', () => {
        popup.style.opacity = '0';
        setTimeout(() => {
            popup.style.display = 'none';
            popup.style.transition = '';
        }, 300);
    });

    closeBottom.addEventListener('click', () => {
        popup.style.opacity = '0';
        setTimeout(() => {
            popup.style.display = 'none';
            popup.style.transition = '';
        }, 300);
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.opacity = '0';
            setTimeout(() => {
                popup.style.display = 'none';
                popup.style.transition = '';
            }, 300);
        }
    });
}

function showPrivacyPolicyPopup() {
    const lang = localStorage.getItem('language') || 'sv';
    const popup = document.createElement('div');
    popup.id = 'privacyPolicyPopup';
    // Remove className = 'student-popup' to avoid conflicting styles
    popup.innerHTML = `
        <div class="privacy-popup-content">
            <button id="closePrivacyPopup">×</button>
            <h1 data-translate="privacyPolicyTitle"></h1>
            <h2 data-translate="effectiveDate"></h2>
            <p>${translations[lang].effectiveDate}: June 02, 2025</p>
            <h2 data-translate="whoWeAre"></h2>
            <p data-translate="whoWeAreText"></p>
            <h2 data-translate="ourRole"></h2>
            <p data-translate="ourRoleText"></p>
            <h2 data-translate="teachersRole"></h2>
            <p data-translate="teachersRoleText"></p>
            <h2 data-translate="dataProcessed"></h2>
            <p data-translate="dataProcessedText"></p>
            <h2 data-translate="purpose"></h2>
            <p data-translate="purposeText"></p>
            <h2 data-translate="legalBasis"></h2>
            <p data-translate="legalBasisText"></p>
            <h2 data-translate="storage"></h2>
            <p data-translate="storageText"></p>
            <h2 data-translate="sharing"></h2>
            <p data-translate="sharingText"></p>
            <h2 data-translate="retention"></h2>
            <p data-translate="retentionText"></p>
            <h2 data-translate="yourRights"></h2>
            <p data-translate="yourRightsText"></p>
            <h2 data-translate="security"></h2>
            <p data-translate="securityText"></p>
            <h2 data-translate="minors"></h2>
            <p data-translate="minorsText"></p>
            <h2 data-translate="usingWithoutStorage"></h2>
            <p data-translate="usingWithoutStorageText"></h2>
            <h2 data-translate="contactUs"></h2>
            <p data-translate="contactUsText"></p>
        </div>
    `;
    document.documentElement.appendChild(popup);
    popup.style.display = 'flex';
    document.body.classList.add('popup-open');

    switchLanguage(lang);

    const closePopup = () => {
        popup.style.display = 'none';
        document.body.classList.remove('popup-open');
        if (popup.parentNode) {
            popup.parentNode.removeChild(popup);
        }
    };

    document.getElementById('closePrivacyPopup').addEventListener('click', closePopup);
    popup.addEventListener('click', (e) => {
        if (!popup.querySelector('.privacy-popup-content').contains(e.target)) {
            closePopup();
        }
    });
}

// Initialize popup and video handling on DOM load
document.addEventListener('DOMContentLoaded', () => {
  if (typeof initializeConsentPopup === 'function') {
    initializeConsentPopup();
  }

  function updateAppleBooksLink(lang) {
    const appleBooksLink = document.getElementById('appleBooksLink');
    if (appleBooksLink) {
      const urls = {
        sv: 'https://books.apple.com/se/book/stj%C3%A4rnakademiens-pianoskola/id1586033171',
        en: 'https://books.apple.com/se/book/star-academy-piano-school/id1587056173'
      };
      appleBooksLink.href = urls[lang] || urls.sv;
    }
  }

  const lang = localStorage.getItem('language') || 'sv';
  updateAppleBooksLink(lang);

  const originalSwitchLanguage = window.switchLanguage;
  window.switchLanguage = function(newLang) {
    originalSwitchLanguage(newLang);
    updateAppleBooksLink(newLang);
  };

  // Video and fallback handling
  const videoIframe = document.getElementById('index-video');
  const fallbackLink = document.querySelector('.video-fallback-link');
  if (videoIframe && fallbackLink) {
    const videoPlayer = new Vimeo.Player(videoIframe);

    videoPlayer.on('error', (error) => {
      console.error('Vimeo player error:', error);
      videoIframe.style.display = 'none';
      fallbackLink.style.display = 'block';
    });

    videoPlayer.getPaused().then(paused => {
      if (paused) {
        videoPlayer.play().catch(err => {
          console.error('Autoplay failed:', err);
          videoIframe.style.display = 'none';
          fallbackLink.style.display = 'block';
        });
      }
    });

    // Optional: Check if video is loaded and visible
    videoPlayer.on('loaded', () => {
      console.log('Vimeo player loaded for video:', videoIframe.dataset.vimeoId);
    });
  }
});

function checkAndShowRankAchievementPopup(
    sixStarCount, 
    previousSixStarCount, 
    part1SixStarCount, 
    previousPart1SixStarCount, 
    part2SixStarCount, 
    previousPart2SixStarCount, 
    part3SixStarCount, 
    previousPart3SixStarCount, 
    part4SixStarCount, 
    previousPart4SixStarCount, 
    fromStarClick
) {
    let studentsData = JSON.parse(localStorage.getItem('starAcademyStudents')) || { students: {}, currentStudent: '' };
    const currentStudent = studentsData.currentStudent;

    if (!currentStudent || !studentsData.students[currentStudent]) {
        console.log('No current student or student data found:', { currentStudent, studentsData });
        return;
    }

    const language = localStorage.getItem('language') || 'sv';

    console.log('Checking rank achievement popup:', { 
        sixStarCount, 
        previousSixStarCount, 
        part1SixStarCount, 
        previousPart1SixStarCount, 
        part2SixStarCount, 
        previousPart2SixStarCount, 
        part3SixStarCount, 
        previousPart3SixStarCount, 
        part4SixStarCount, 
        previousPart4SixStarCount, 
        fromStarClick 
    });

    // Only show popup if triggered by a star click
    if (fromStarClick) {
        const rankPopup = document.getElementById('rankAchievementPopup');
        const rankMessage = document.getElementById('rankAchievementMessage');
        const rankSubtitle = document.getElementById('rankAchievementSubtitle');
        const rankPopupDescription = document.getElementById('rankAchievementDescription');
        const rankImage = document.querySelector('#rankAchievementPopup .rank-badge-image');

        if (rankPopup && rankMessage && rankSubtitle && rankPopupDescription && rankImage) {
            // Star Cadet (16 six-stars)
            if (sixStarCount === 16 && previousSixStarCount < 16) {
                console.log('Showing rank achievement popup for Star Cadet');
                rankMessage.textContent = translations[language].rankAchievementMessage.replace('[userName]', currentStudent);
                rankSubtitle.textContent = translations[language].rankAchievementSubtitle;
                rankPopupDescription.textContent = translations[language].textboxStarCadet;
                rankImage.src = 'rank0.png';

                setTimeout(() => {
                    rankPopup.style.display = 'flex';
                    document.body.classList.add('popup-open');
                    const rect = rankPopup.getBoundingClientRect();
                    console.log('Star Cadet popup displayed:', {
                        display: rankPopup.style.display,
                        width: rect.width,
                        height: rect.height,
                        top: rect.top,
                        left: rect.left
                    });
                }, 100);

                const closePopup = () => {
                    console.log('Closing rank popup');
                    rankPopup.style.display = 'none';
                    document.body.classList.remove('popup-open');
                };

                const closeButton = document.getElementById('closeRankPopup');
                if (closeButton) {
                    closeButton.removeEventListener('click', closePopup);
                    closeButton.addEventListener('click', closePopup);
                }

                rankPopup.removeEventListener('click', window.rankPopupClickListener);
                window.rankPopupClickListener = (event) => {
                    console.log('Click event on rankPopup, target:', event.target);
                    if (event.target === rankPopup) {
                        closePopup();
                    }
                };
                rankPopup.addEventListener('click', window.rankPopupClickListener);
            }
            // Star Officer (all Part 1 stars at six stars)
            else if (part1SixStarCount === 28 && previousPart1SixStarCount < 28) {
                console.log('Showing rank achievement popup for Star Officer');
                rankMessage.textContent = translations[language].rankAchievementMessage.replace('[userName]', currentStudent);
                rankSubtitle.textContent = translations[language].rankStarOfficer;
                rankPopupDescription.textContent = translations[language].textboxStarOfficer;
                rankImage.src = 'rank1.png';

                setTimeout(() => {
                    rankPopup.style.display = 'flex';
                    document.body.classList.add('popup-open');
                    const rect = rankPopup.getBoundingClientRect();
                    console.log('Star Officer popup displayed:', {
                        display: rankPopup.style.display,
                        width: rect.width,
                        height: rect.height,
                        top: rect.top,
                        left: rect.left
                    });
                }, 100);

                const closePopup = () => {
                    console.log('Closing rank popup');
                    rankPopup.style.display = 'none';
                    document.body.classList.remove('popup-open');
                };

                const closeButton = document.getElementById('closeRankPopup');
                if (closeButton) {
                    closeButton.removeEventListener('click', closePopup);
                    closeButton.addEventListener('click', closePopup);
                }

                rankPopup.removeEventListener('click', window.rankPopupClickListener);
                window.rankPopupClickListener = (event) => {
                    console.log('Click event on rankPopup, target:', event.target);
                    if (event.target === rankPopup) {
                        closePopup();
                    }
                };
                rankPopup.addEventListener('click', window.rankPopupClickListener);
            }
            // Star Captain (all Part 2 stars at six stars)
            else if (part2SixStarCount === 28 && previousPart2SixStarCount < 28) {
                console.log('Showing rank achievement popup for Star Captain');
                rankMessage.textContent = translations[language].rankAchievementMessage.replace('[userName]', currentStudent);
                rankSubtitle.textContent = translations[language].rankStarCaptain;
                rankPopupDescription.textContent = translations[language].textboxStarCaptain;
                rankImage.src = 'rank2.png';

                setTimeout(() => {
                    rankPopup.style.display = 'flex';
                    document.body.classList.add('popup-open');
                    const rect = rankPopup.getBoundingClientRect();
                    console.log('Star Captain popup displayed:', {
                        display: rankPopup.style.display,
                        width: rect.width,
                        height: rect.height,
                        top: rect.top,
                        left: rect.left
                    });
                }, 100);

                const closePopup = () => {
                    console.log('Closing rank popup');
                    rankPopup.style.display = 'none';
                    document.body.classList.remove('popup-open');
                };

                const closeButton = document.getElementById('closeRankPopup');
                if (closeButton) {
                    closeButton.removeEventListener('click', closePopup);
                    closeButton.addEventListener('click', closePopup);
                }

                rankPopup.removeEventListener('click', window.rankPopupClickListener);
                window.rankPopupClickListener = (event) => {
                    console.log('Click event on rankPopup, target:', event.target);
                    if (event.target === rankPopup) {
                        closePopup();
                    }
                };
                rankPopup.addEventListener('click', window.rankPopupClickListener);
            }
            // Star Commander (all Part 3 stars at six stars)
            else if (part3SixStarCount === 28 && previousPart3SixStarCount < 28) {
                console.log('Showing rank achievement popup for Star Commander');
                rankMessage.textContent = translations[language].rankAchievementMessage.replace('[userName]', currentStudent);
                rankSubtitle.textContent = translations[language].rankStarCommander;
                rankPopupDescription.textContent = translations[language].textboxStarCommander;
                rankImage.src = 'rank3.png';

                setTimeout(() => {
                    rankPopup.style.display = 'flex';
                    document.body.classList.add('popup-open');
                    const rect = rankPopup.getBoundingClientRect();
                    console.log('Star Commander popup displayed:', {
                        display: rankPopup.style.display,
                        width: rect.width,
                        height: rect.height,
                        top: rect.top,
                        left: rect.left
                    });
                }, 100);

                const closePopup = () => {
                    console.log('Closing rank popup');
                    rankPopup.style.display = 'none';
                    document.body.classList.remove('popup-open');
                };

                const closeButton = document.getElementById('closeRankPopup');
                if (closeButton) {
                    closeButton.removeEventListener('click', closePopup);
                    closeButton.addEventListener('click', closePopup);
                }

                rankPopup.removeEventListener('click', window.rankPopupClickListener);
                window.rankPopupClickListener = (event) => {
                    console.log('Click event on rankPopup, target:', event.target);
                    if (event.target === rankPopup) {
                        closePopup();
                    }
                };
                rankPopup.addEventListener('click', window.rankPopupClickListener);
            }
            // Star Admiral (all Part 4 stars at six stars)
            else if (part4SixStarCount === 28 && previousPart4SixStarCount < 28) {
                console.log('Showing rank achievement popup for Star Admiral');
                rankMessage.textContent = translations[language].rankAchievementMessage.replace('[userName]', currentStudent);
                rankSubtitle.textContent = translations[language].rankStarAdmiral;
                rankPopupDescription.textContent = translations[language].textboxStarAdmiral;
                rankImage.src = 'rank4.png';

                setTimeout(() => {
                    rankPopup.style.display = 'flex';
                    document.body.classList.add('popup-open');
                    const rect = rankPopup.getBoundingClientRect();
                    console.log('Star Admiral popup displayed:', {
                        display: rankPopup.style.display,
                        width: rect.width,
                        height: rect.height,
                        top: rect.top,
                        left: rect.left
                    });
                }, 100);

                const closePopup = () => {
                    console.log('Closing rank popup');
                    rankPopup.style.display = 'none';
                    document.body.classList.remove('popup-open');
                };

                const closeButton = document.getElementById('closeRankPopup');
                if (closeButton) {
                    closeButton.removeEventListener('click', closePopup);
                    closeButton.addEventListener('click', closePopup);
                }

                rankPopup.removeEventListener('click', window.rankPopupClickListener);
                window.rankPopupClickListener = (event) => {
                    console.log('Click event on rankPopup, target:', event.target);
                    if (event.target === rankPopup) {
                        closePopup();
                    }
                };
                rankPopup.addEventListener('click', window.rankPopupClickListener);
            }
        } else {
            console.log('Popup elements not found:', {
                rankPopup: !!rankPopup,
                rankMessage: !!rankMessage,
                rankSubtitle: !!rankSubtitle,
                rankPopupDescription: !!rankPopupDescription,
                rankImage: !!rankImage
            });
        }
    } else {
        console.log('Popup not triggered:', { 
            sixStarCount, 
            previousSixStarCount, 
            part1SixStarCount, 
            previousPart1SixStarCount, 
            part2SixStarCount, 
            previousPart2SixStarCount, 
            part3SixStarCount, 
            previousPart3SixStarCount, 
            part4SixStarCount, 
            previousPart4SixStarCount, 
            fromStarClick 
        });
    }
}

function updateStarStates(studentsDataParam, fromStarClick = false) {
    const studentsData = studentsDataParam || JSON.parse(localStorage.getItem('starAcademyStudents')) || { students: {}, currentStudent: '' };
    const progress = studentsData.students[studentsData.currentStudent]?.progress || {};

    const allExercises = [];
    for (let chapter = 1; chapter <= 7; chapter++) {
        for (let part = 1; part <= 4; part++) {
            for (let exercise = 1; exercise <= 4; exercise++) {
                allExercises.push(`exercise${chapter}:${part}:${exercise}`);
            }
        }
    }

    let sixStarCount = 0;
    let part1SixStarCount = 0;
    let part2SixStarCount = 0;
    let part3SixStarCount = 0;
    let part4SixStarCount = 0;
    allExercises.forEach(exerciseKey => {
        const state = progress[exerciseKey] || "0";
        if (state === "6") {
            sixStarCount++;
            if (exerciseKey.match(/exercise\d+:1:\d+/)) {
                part1SixStarCount++;
            } else if (exerciseKey.match(/exercise\d+:2:\d+/)) {
                part2SixStarCount++;
            } else if (exerciseKey.match(/exercise\d+:3:\d+/)) {
                part3SixStarCount++;
            } else if (exerciseKey.match(/exercise\d+:4:\d+/)) {
                part4SixStarCount++;
            }
        }
    });

    console.log('Updating star states:', { 
        sixStarCount, 
        previousSixStarCount, 
        part1SixStarCount, 
        previousPart1SixStarCount, 
        part2SixStarCount, 
        previousPart2SixStarCount, 
        part3SixStarCount, 
        previousPart3SixStarCount, 
        part4SixStarCount, 
        previousPart4SixStarCount, 
        fromStarClick 
    });

    checkAndShowRankAchievementPopup(
        sixStarCount, 
        previousSixStarCount, 
        part1SixStarCount, 
        previousPart1SixStarCount, 
        part2SixStarCount, 
        previousPart2SixStarCount, 
        part3SixStarCount, 
        previousPart3SixStarCount, 
        part4SixStarCount, 
        previousPart4SixStarCount, 
        fromStarClick
    );
    previousSixStarCount = sixStarCount;
    previousPart1SixStarCount = part1SixStarCount;
    previousPart2SixStarCount = part2SixStarCount;
    previousPart3SixStarCount = part3SixStarCount;
    previousPart4SixStarCount = part4SixStarCount;
    localStorage.setItem('sixStarCount', sixStarCount);
    localStorage.setItem('part1SixStarCount', part1SixStarCount);
    localStorage.setItem('part2SixStarCount', part2SixStarCount);
    localStorage.setItem('part3SixStarCount', part3SixStarCount);
    localStorage.setItem('part4SixStarCount', part4SixStarCount);

    for (let i = 1; i <= 16; i++) {
        const bottomStar = document.getElementById(`bottom_star${i}`);
        if (bottomStar) {
            console.log(`Found bottom_star${i}`);
            if (i <= sixStarCount) {
                bottomStar.setAttribute("fill", "#ffd700");
                bottomStar.setAttribute("stroke", "#000000");
                bottomStar.setAttribute("stroke-width", "1");
            } else {
                bottomStar.setAttribute("fill", "#000000");
                bottomStar.removeAttribute("stroke");
                bottomStar.removeAttribute("stroke-width");
            }
        } else {
            console.warn(`bottom_star${i} not found`);
        }
    }

    const chevronMappings = {
        'chevron1_star1': ['exercise1:1:1', 'exercise1:1:2', 'exercise1:1:3', 'exercise1:1:4'],
        'chevron1_star2': ['exercise2:1:1', 'exercise2:1:2', 'exercise2:1:3', 'exercise2:1:4'],
        'chevron1_star3': ['exercise3:1:1', 'exercise3:1:2', 'exercise3:1:3', 'exercise3:1:4'],
        'chevron1_star4': ['exercise4:1:1', 'exercise4:1:2', 'exercise4:1:3', 'exercise4:1:4'],
        'chevron1_star5': ['exercise5:1:1', 'exercise5:1:2', 'exercise5:1:3', 'exercise5:1:4'],
        'chevron1_star6': ['exercise6:1:1', 'exercise6:1:2', 'exercise6:1:3', 'exercise6:1:4'],
        'chevron1_star7': ['exercise7:1:1', 'exercise7:1:2', 'exercise7:1:3', 'exercise7:1:4'],
        'chevron2_star1': ['exercise1:2:1', 'exercise1:2:2', 'exercise1:2:3', 'exercise1:2:4'],
        'chevron2_star2': ['exercise2:2:1', 'exercise2:2:2', 'exercise2:2:3', 'exercise2:2:4'],
        'chevron2_star3': ['exercise3:2:1', 'exercise3:2:2', 'exercise3:2:3', 'exercise3:2:4'],
        'chevron2_star4': ['exercise4:2:1', 'exercise4:2:2', 'exercise4:2:3', 'exercise4:2:4'],
        'chevron2_star5': ['exercise5:2:1', 'exercise5:2:2', 'exercise5:2:3', 'exercise5:2:4'],
        'chevron2_star6': ['exercise6:2:1', 'exercise6:2:2', 'exercise6:2:3', 'exercise6:2:4'],
        'chevron2_star7': ['exercise7:2:1', 'exercise7:2:2', 'exercise7:2:3', 'exercise7:2:4'],
        'chevron3_star1': ['exercise1:3:1', 'exercise1:3:2', 'exercise1:3:3', 'exercise1:3:4'],
        'chevron3_star2': ['exercise2:3:1', 'exercise2:3:2', 'exercise2:3:3', 'exercise2:3:4'],
        'chevron3_star3': ['exercise3:3:1', 'exercise3:3:2', 'exercise3:3:3', 'exercise3:3:4'],
        'chevron3_star4': ['exercise4:3:1', 'exercise4:3:2', 'exercise4:3:3', 'exercise4:3:4'],
        'chevron3_star5': ['exercise5:3:1', 'exercise5:3:2', 'exercise5:3:3', 'exercise5:3:4'],
        'chevron3_star6': ['exercise6:3:1', 'exercise6:3:2', 'exercise6:3:3', 'exercise6:3:4'],
        'chevron3_star7': ['exercise7:3:1', 'exercise7:3:2', 'exercise7:3:3', 'exercise7:3:4'],
        'chevron4_star1': ['exercise1:4:1', 'exercise1:4:2', 'exercise1:4:3', 'exercise1:4:4'],
        'chevron4_star2': ['exercise2:4:1', 'exercise2:4:2', 'exercise2:4:3', 'exercise2:4:4'],
        'chevron4_star3': ['exercise3:4:1', 'exercise3:4:2', 'exercise3:4:3', 'exercise3:4:4'],
        'chevron4_star4': ['exercise4:4:1', 'exercise4:4:2', 'exercise4:4:3', 'exercise4:4:4'],
        'chevron4_star5': ['exercise5:4:1', 'exercise5:4:2', 'exercise5:4:3', 'exercise5:4:4'],
        'chevron4_star6': ['exercise6:4:1', 'exercise6:4:2', 'exercise6:4:3', 'exercise6:4:4'],
        'chevron4_star7': ['exercise7:4:1', 'exercise7:4:2', 'exercise7:4:3', 'exercise7:4:4']
    };

    for (const [chevronStar, exercises] of Object.entries(chevronMappings)) {
        const star = document.getElementById(chevronStar);
        if (star) {
            console.log(`Found ${chevronStar}`);
            const allSix = exercises.every(exercise => progress[exercise] === "6");
            if (allSix) {
                star.setAttribute("fill", "#ffd700");
                star.setAttribute("stroke", "#000000");
                star.setAttribute("stroke-width", "1");
            } else {
                star.setAttribute("fill", "#000000");
                star.removeAttribute("stroke");
                star.removeAttribute("stroke-width");
            }
        } else {
            console.warn(`${chevronStar} not found`);
        }
    }

    const rankImage = document.getElementById('rankImage');
    const rankTitle = document.getElementById('rankTitle');
    const rankDescription = document.getElementById('rankDescription');

    if (rankImage && rankTitle && rankDescription) {
        const lang = localStorage.getItem('language') || 'sv';
        const chevron1Complete = [1, 2, 3, 4, 5, 6, 7].every(chapter => 
            chevronMappings[`chevron1_star${chapter}`].every(exercise => progress[exercise] === "6")
        );
        const chevron2Complete = [1, 2, 3, 4, 5, 6, 7].every(chapter => 
            chevronMappings[`chevron2_star${chapter}`].every(exercise => progress[exercise] === "6")
        );
        const chevron3Complete = [1, 2, 3, 4, 5, 6, 7].every(chapter => 
            chevronMappings[`chevron3_star${chapter}`].every(exercise => progress[exercise] === "6")
        );
        const chevron4Complete = [1, 2, 3, 4, 5, 6, 7].every(chapter => 
            chevronMappings[`chevron4_star${chapter}`].every(exercise => progress[exercise] === "6")
        );

        let newRank;
        if (chevron4Complete) {
            rankImage.src = 'rank4.png';
            newRank = translations[lang].rankStarAdmiral;
            rankTitle.textContent = newRank;
            rankDescription.textContent = translations[lang].textboxStarAdmiral;
        } else if (chevron3Complete) {
            rankImage.src = 'rank3.png';
            newRank = translations[lang].rankStarCommander;
            rankTitle.textContent = newRank;
            rankDescription.textContent = translations[lang].textboxStarCommander;
        } else if (chevron2Complete) {
            rankImage.src = 'rank2.png';
            newRank = translations[lang].rankStarCaptain;
            rankTitle.textContent = newRank;
            rankDescription.textContent = translations[lang].textboxStarCaptain;
        } else if (chevron1Complete) {
            rankImage.src = 'rank1.png';
            newRank = translations[lang].rankStarOfficer;
            rankTitle.textContent = newRank;
            rankDescription.textContent = translations[lang].textboxStarOfficer;
        } else if (sixStarCount >= 16) {
            rankImage.src = 'rank0.png';
            newRank = translations[lang].rankStarCadet;
            rankTitle.textContent = newRank;
            rankDescription.textContent = translations[lang].textboxStarCadet;
        } else {
            rankImage.src = 'rank-start.png';
            newRank = translations[lang].rankExplorer;
            rankTitle.textContent = newRank;
            rankDescription.textContent = translations[lang].textboxExplorer;
        }

        if (studentsData.currentStudent) {
            studentsData.students[studentsData.currentStudent].rank = newRank;
            localStorage.setItem('starAcademyStudents', JSON.stringify(studentsData));
        }
    }
}

function switchLanguage(lang) {
    const newLang = lang || (localStorage.getItem('language') === 'sv' ? 'en' : 'sv');
    localStorage.setItem('language', newLang);

    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[newLang][key]) {
            if (element.tagName === 'TITLE') {
                element.textContent = translations[newLang][key];
            } else {
                element.innerHTML = translations[newLang][key];
            }
        }
    });

    document.querySelectorAll('.menu-link').forEach(link => {
        const href = link.getAttribute('href')?.toLowerCase();
        if (href === 'index.html') {
            link.textContent = translations[newLang].menuHome;
        } else if (href === 'ranks.html') {
            link.textContent = translations[newLang].menuFrontPage;
        } else if (href === 'students.html') {
            link.textContent = translations[newLang].menuStudents;
        } else if (href === 'starmap.html#svg-start') {
            link.textContent = translations[newLang].menuStarMap;
        } else if (href === 'faq.html') {
            link.textContent = translations[newLang].menuFAQ;
        } else if (href === 'remove.html') {
            link.textContent = translations[newLang].menuRemove;
        } else if (href === 'privacy-policy.html') {
            link.textContent = translations[newLang].menuPrivacyPolicy;
        } else {
            const chapterNum = href?.match(/chapter(\d+)\.html/)?.[1];
            if (chapterNum) {
                const span = link.querySelector('span');
                if (span) span.textContent = `${translations[newLang].menuChapter} ${chapterNum}`;
                else link.textContent = `${translations[newLang].menuChapter} ${chapterNum}`;
            }
        }
    });

    const chaptersToggle = document.querySelector('.chapters-toggle');
    if (chaptersToggle) chaptersToggle.textContent = translations[newLang].menuChapters;

    const popupWelcome = document.getElementById('popupWelcome');
    const popupIntro = document.getElementById('popupIntro');
    const popupTeacherNote = document.getElementById('popupTeacherNote');
    const popupEnterName = document.getElementById('popupEnterName');
    const submitNameButton = document.getElementById('submitNameButton');
    if (popupWelcome) popupWelcome.textContent = translations[newLang].popupWelcome;
    if (popupIntro) popupIntro.textContent = translations[newLang].popupIntro;
    if (popupTeacherNote) popupTeacherNote.textContent = translations[newLang].popupTeacherNote;
    if (popupEnterName) popupEnterName.textContent = translations[newLang].popupEnterName;
    if (submitNameButton) submitNameButton.textContent = translations[newLang].addButton;

    const congratsMessage = document.getElementById('congratsMessage');
    if (congratsMessage) congratsMessage.textContent = translations[newLang].congratsMessage;

    const qrInstruction = document.getElementById('qrInstruction');
    if (qrInstruction) qrInstruction.textContent = translations[newLang].scanOrShare;

    const chapterNumber = document.querySelector('.chapter-number');
    const chapterName = document.querySelector('.chapter-name');
    if (chapterNumber && chapterName) {
        const chapterNum = window.location.pathname.match(/chapter(\d+)\.html/)?.[1];
        if (chapterNum) {
            chapterNumber.textContent = translations[newLang][`chapter${chapterNum}`];
            chapterName.textContent = translations[newLang][`chapterName${chapterNum}`];
        }
    }

    const rankTitle = document.getElementById('rankTitle');
    const rankDescription = document.getElementById('rankDescription');
    if (rankTitle && rankDescription) updateStarStates();

    const studentsPageTitle = document.getElementById('studentsPageTitle');
    const studentsLabel = document.getElementById('studentsLabel');
    const newStudentInput = document.getElementById('newStudentName');
    const addButton = document.getElementById('addStudentButton');
    const removeButton = document.getElementById('removeStudentButton');
    const addStudentLabel = document.getElementById('addStudentLabel');
    const studentNotes = document.getElementById('studentNotes');
    const saveNotesButton = document.getElementById('saveNotesButton');
    const studentModeLabel = document.getElementById('studentModeLabel');
    if (studentsPageTitle && studentsLabel) {
        studentsPageTitle.textContent = translations[newLang].menuStudents;
        studentsLabel.textContent = translations[newLang].studentsLabel;
        newStudentInput.placeholder = translations[newLang].studentNamePlaceholder;
        addButton.textContent = translations[newLang].addButton;
        if (removeButton) removeButton.textContent = translations[newLang].removeButton;
        addStudentLabel.textContent = translations[newLang].addNewStudent;
        studentNotes.placeholder = translations[newLang].notesPlaceholder;
        if (saveNotesButton) saveNotesButton.textContent = translations[newLang].saveNotesButton;
        if (studentModeLabel) studentModeLabel.textContent = translations[newLang].studentModeLabel;
    }

    const faqTitle = document.querySelector('h1[data-translate="faqTitle"]');
    const faqQuestions = document.querySelectorAll('.faq-question[data-translate]');
    const faqAnswers = document.querySelectorAll('.faq-answer[data-translate]');
    if (faqTitle) faqTitle.textContent = translations[newLang].faqTitle;
    faqQuestions.forEach(question => {
        const key = question.getAttribute('data-translate');
        if (translations[newLang][key]) question.childNodes[0].textContent = translations[newLang][key];
    });
    faqAnswers.forEach(answer => {
        const key = answer.getAttribute('data-translate');
        if (translations[newLang][key]) answer.innerHTML = translations[newLang][key];
    });

    const titleContainerH1 = document.querySelector('.title-container h1[data-translate]');
    if (titleContainerH1) {
        const key = titleContainerH1.getAttribute('data-translate');
        if (translations[newLang][key]) titleContainerH1.textContent = translations[newLang][key];
    }

    const removeStudentTitle = document.querySelector('h1[data-translate="removeStudentTitle"]');
    const confirmRemoveMessage = document.querySelector('p[data-translate="confirmRemoveMessage"]');
    if (removeStudentTitle) removeStudentTitle.textContent = translations[newLang].removeStudentTitle;
    if (confirmRemoveMessage) {
        const selectedStudent = window.studentsData.currentStudent || '';
        confirmRemoveMessage.textContent = `${translations[newLang].confirmRemoveMessage}${selectedStudent ? ` ${selectedStudent}.` : '.'}`;
    }

    const removeStudentButton = document.getElementById('removeStudentButton');
    const currentPath = window.location.pathname.toLowerCase();
    if (removeStudentButton && window.studentsData) {
        if (currentPath.includes('remove.html')) {
            if (window.studentsData.currentStudent) {
                removeStudentButton.textContent = `${translations[newLang].removeCurrentStudent}${window.studentsData.currentStudent}`;
            } else {
                removeStudentButton.textContent = translations[newLang].removeCurrentStudentNone;
            }
        } else if (currentPath.includes('students.html')) {
            removeStudentButton.textContent = translations[newLang].removeButton;
        }
    }

    const starMapTitle = document.querySelector('h3[data-translate="starMapTitle"]');
    if (starMapTitle) starMapTitle.textContent = translations[newLang].starMapTitle;
    document.querySelectorAll('.star-map-steps p[data-translate]').forEach(p => {
        const key = p.getAttribute('data-translate');
        if (translations[newLang][key]) {
            p.innerHTML = translations[newLang][key];
        }
    });

    const exportTitle = document.getElementById('exportTitle');
    const exportInfo = document.getElementById('exportInfo');
    const exportInfoText = document.querySelector('p[data-translate="exportInfoText"]');
    const shareExportButton = document.getElementById('shareExportButton');
    const shareButtonInQR = document.getElementById('shareButtonInQR');
    const exportStatus = document.getElementById('exportStatus');
    if (exportTitle) exportTitle.textContent = translations[newLang].exportTitle;
    if (exportInfo) exportInfo.textContent = translations[newLang].exportInfo;
    if (exportInfoText) exportInfoText.textContent = translations[newLang].exportInfoText;
    if (shareExportButton) shareExportButton.textContent = translations[newLang].shareButtonExport;
    if (shareButtonInQR) shareButtonInQR.textContent = translations[newLang].shareButtonQR;
    if (exportStatus) exportStatus.textContent = translations[newLang].creatingLink;

    const rankPopup = document.getElementById('rankAchievementPopup');
    const rankMessage = document.getElementById('rankAchievementMessage');
    const rankSubtitle = document.getElementById('rankAchievementSubtitle');
    const rankPopupDescription = document.getElementById('rankAchievementDescription');
    const currentStudent = window.studentsData?.currentStudent || '';
    if (rankPopup && rankMessage && rankSubtitle && rankPopupDescription && rankPopup.style.display === 'flex') {
        rankMessage.textContent = translations[newLang].rankAchievementMessage.replace('[userName]', currentStudent);
        rankSubtitle.textContent = translations[newLang].rankAchievementSubtitle;
        rankPopupDescription.textContent = translations[newLang].textboxStarCadet;
    }

    const loaderText = document.getElementById('loaderText');
    if (loaderText) {
        loaderText.textContent = translations[newLang].loading;
    }

    const studentPopup = document.getElementById('studentPopup');
    if (studentPopup && studentPopup.classList.contains('show')) {
        const popupContent = studentPopup.querySelector('.student-popup-content p');
        const name = studentPopup.dataset.name;
        const isError = studentPopup.dataset.isError === 'true';
        const starSVG = '<svg class="popup-star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
        if (name) {
            popupContent.innerHTML = `${starSVG} ${translations[newLang].success} ${name}! ${starSVG}`;
        } else if (isError) {
            popupContent.textContent = translations[newLang].error;
        }
    }

    const userNameDisplay = document.getElementById('userNameDisplay');
    if (userNameDisplay) {
        userNameDisplay.textContent = window.studentsData?.currentStudent || '';
    }

    if (localStorage.getItem('consentGiven') !== 'true' && window.cookieconsent && window.cookieconsent.element) {
        console.log('Updating consent popup text for language:', newLang);
        const popup = window.cookieconsent.element;
        const message = popup.querySelector('.cc-message');
        const dismiss = popup.querySelector('.cc-dismiss');
        const deny = popup.querySelector('.cc-deny');
        const link = popup.querySelector('.cc-link');
        if (message) message.innerHTML = translations[newLang].consentMessage;
        if (dismiss) dismiss.textContent = translations[newLang].consentAccept;
        if (deny) deny.textContent = translations[newLang].consentReject;
        if (link) link.textContent = translations[newLang].consentPolicyLink;
    }

    if (typeof loadNotes === 'function' && window.location.pathname.toLowerCase().includes('students.html')) {
        loadNotes();
    }

    updateStreakDisplay();
}


function setInitialLanguage() {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    let lang = hash === 'swedish' ? 'sv' : hash === 'english' ? 'en' : null;
    if (!lang) lang = localStorage.getItem('language') || 'sv';
    switchLanguage(lang);
}

function setActivePage() {
    const currentPath = window.location.pathname.toLowerCase();
    const links = document.querySelectorAll('.menu-link');
    links.forEach(link => {
        const href = link.getAttribute('href')?.toLowerCase();
        if (href && (currentPath.endsWith(href.replace('#svg-start', '')) || (currentPath === '/' && href === 'index.html'))) {
            link.classList.add('active-page');
        }
    });
}

function handleUserNamePopup() {
    if (window.isImporting) {
        console.log('Delaying handleUserNamePopup until import completes');
        const checkImport = () => {
            if (!window.isImporting) {
                console.log('Import completed, proceeding with handleUserNamePopup');
                proceedWithPopup();
            } else {
                setTimeout(checkImport, 100);
            }
        };
        checkImport();
    } else {
        proceedWithPopup();
    }

    function proceedWithPopup() {
        let studentsData = JSON.parse(localStorage.getItem('starAcademyStudents')) || {
            students: {},
            currentStudent: ''
        };
        const userNameDisplay = document.getElementById('userNameDisplay');
        const namePopup = document.getElementById('namePopup');
        const nameInput = document.getElementById('nameInput');
        const submitBtn = document.getElementById('submitNameButton');
        const menu = document.querySelector('.menu');

        if (!namePopup || !nameInput || !submitBtn) {
            console.warn('namePopup, nameInput, or submitNameButton not found in DOM, skipping popup:', {
                namePopup: !!namePopup,
                nameInput: !!nameInput,
                submitBtn: !!submitBtn,
                page: window.location.pathname,
                bodyChildCount: document.body.childElementCount
            });
            return;
        }

        const updateMenuHeight = () => {
            if (menu) {
                menu.style.height = `${window.innerHeight}px`;
            }
        };

        window.addEventListener('resize', updateMenuHeight);
        window.addEventListener('orientationchange', updateMenuHeight);

        // Show namePopup if no current student
        if (!studentsData.currentStudent) {
            console.log('Showing namePopup for new user');
            namePopup.style.display = 'flex';
            document.body.classList.add('popup-open');
            const rect = namePopup.getBoundingClientRect();
            console.log('Name popup displayed:', {
                display: namePopup.style.display,
                width: rect.width,
                height: rect.height,
                top: rect.top,
                left: rect.left
            });
            updateMenuHeight();

            // Ensure input and button are enabled
            nameInput.disabled = false;
            submitBtn.disabled = false;
        } else if (userNameDisplay) {
            userNameDisplay.textContent = studentsData.currentStudent;
            console.log('Set userNameDisplay to:', studentsData.currentStudent);
        }

        window.saveName = function() {
            // Prevent saving if no consent
            if (localStorage.getItem('consentGiven') !== 'true') {
                console.log('Cannot save name: consent not given');
                alert(translations[localStorage.getItem('language') || 'sv'].consentMessage);
                return;
            }

            const name = nameInput.value.trim();
            if (name) {
                studentsData.students[name] = {
                    name: name,
                    progress: {},
                    rank: "Explorer"
                };
                for (let chapter = 1; chapter <= 7; chapter++) {
                    for (let part = 1; part <= 4; part++) {
                        for (let exercise = 1; exercise <= 4; exercise++) {
                            const key = `exercise${chapter}:${part}:${exercise}`;
                            studentsData.students[name].progress[key] = "0";
                        }
                    }
                }
                studentsData.currentStudent = name;
                localStorage.setItem('starAcademyStudents', JSON.stringify(studentsData));
                if (userNameDisplay) userNameDisplay.textContent = name;
                namePopup.style.display = 'none';

                setTimeout(() => {
                    document.body.classList.remove('popup-open');
                    const isMobilePortrait = window.matchMedia('(max-width: 767px) and (orientation: portrait)').matches;
                    if (!isMobilePortrait) {
                        window.scrollTo(0, 0);
                        const container = document.querySelector('.chapter-container');
                        if (container) container.scrollTop = 0;
                        setTimeout(() => {
                            document.body.style.overflow = 'hidden';
                        }, 50);
                    } else {
                        document.body.style.overflow = '';
                    }
                }, 100);

                updateMenuHeight();

                const successPopup = document.createElement('div');
                successPopup.id = 'studentPopup';
                successPopup.className = 'student-popup';
                const starSVG = '<svg class="popup-star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
                successPopup.innerHTML = `
                    <div class="student-popup-content">
                        <p>${starSVG} ${translations[localStorage.getItem('language') || 'sv'].addStudentSuccess} ${starSVG}</p>
                    </div>
                `;
                document.body.appendChild(successPopup);
                successPopup.style.display = 'flex';
                successPopup.style.opacity = '1';
                document.body.classList.add('popup-open');
                updateMenuHeight();
                setTimeout(() => {
                    successPopup.style.transition = 'opacity 1s ease';
                    successPopup.style.opacity = '0';
                    setTimeout(() => {
                        successPopup.style.display = 'none';
                        document.body.classList.remove('popup-open');
                        document.body.removeChild(successPopup);
                        updateMenuHeight();
                    }, 1000);
                }, 2000);

                if (typeof updateDropdown === 'function') {
                    console.log('Calling updateDropdown after saving name');
                    updateDropdown();
                } else {
                    console.error('updateDropdown not defined');
                }

                updateStarStates();
                if (window.location.pathname.toLowerCase().includes('starmap.html') && typeof window.initializeStarMap === 'function') {
                    console.log('Calling initializeStarMap after saving name');
                    window.initializeStarMap();
                }
            } else {
                alert(translations[localStorage.getItem('language') || 'sv'].addStudentNoName);
            }
        };

        const submitBtnHandler = document.querySelector('button[onclick="saveName()"]');
        if (submitBtnHandler) {
            submitBtnHandler.removeEventListener('click', window.saveName);
            submitBtnHandler.addEventListener('click', window.saveName);
            console.log('Submit button listener added');
        }
        if (nameInput) {
            nameInput.removeEventListener('keypress', handleEnterKey);
            nameInput.addEventListener('keypress', handleEnterKey);
            function handleEnterKey(e) {
                if (e.key === 'Enter') window.saveName();
            }
            console.log('Enter key listener added');
        }

        namePopup.removeEventListener('click', window.namePopupClickListener);
        window.namePopupClickListener = (event) => {
            console.log('Click event on namePopup, target:', event.target);
            if (event.target === namePopup) {
                console.log('Ignoring overlay click for namePopup to prevent accidental closure');
            }
        };
        namePopup.addEventListener('click', window.namePopupClickListener);
    }
}

function waitForDOM() {
    return new Promise(resolve => {
        if (document.readyState === 'complete') resolve();
        else {
            window.addEventListener('load', () => setTimeout(resolve, 0));
            document.addEventListener('DOMContentLoaded', () => {
                if (document.readyState === 'complete') resolve();
            });
        }
    });
}

function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const faqAnswer = faqItem.querySelector('.faq-answer');
            const isActive = faqItem.classList.contains('active');

            if (isActive) {
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
                requestAnimationFrame(() => {
                    faqAnswer.style.maxHeight = '0';
                    faqItem.classList.remove('active');
                });
            } else {
                faqAnswer.style.display = 'block';
                const fullHeight = faqAnswer.scrollHeight + 20;
                faqItem.classList.add('active');
                faqAnswer.style.maxHeight = fullHeight + 'px';
                faqAnswer.addEventListener('transitionend', function resetHeight() {
                    faqAnswer.style.maxHeight = '200px';
                    faqAnswer.removeEventListener('transitionend', resetHeight);
                }, { once: true });
            }
        });
    });
}

// Define initializeAppContent globally
window.initializeAppContent = function() {
    console.log('initializeAppContent called');
    updateStarStates();
    const studentsData = JSON.parse(localStorage.getItem('starAcademyStudents')) || { students: {}, currentStudent: '' };
    const userNameDisplay = document.getElementById('userNameDisplay');
    if (userNameDisplay && studentsData.currentStudent) {
        userNameDisplay.textContent = studentsData.currentStudent;
    }
};

// Main initialization
waitForDOM().then(() => {
    console.log('waitForDOM resolved');
    previousSixStarCount = parseInt(localStorage.getItem('sixStarCount')) || 0;
    previousPart1SixStarCount = parseInt(localStorage.getItem('part1SixStarCount')) || 0;
    previousPart2SixStarCount = parseInt(localStorage.getItem('part2SixStarCount')) || 0;
    previousPart3SixStarCount = parseInt(localStorage.getItem('part3SixStarCount')) || 0;
    previousPart4SixStarCount = parseInt(localStorage.getItem('part4SixStarCount')) || 0;

    injectMenu();
    setInitialLanguage();
    
    const path = window.location.pathname.toLowerCase();
    if (path.includes('chapter') || path.includes('starmap.html')) {
        initializeConsentPopup();
    }

    const globalSelect = document.getElementById('globalStudentSelect');
    const userNameDisplay = document.getElementById('userNameDisplay');
    if (globalSelect) {
        if (typeof updateDropdown === 'function') updateDropdown();
        globalSelect.addEventListener('change', (event) => {
            const selectedValue = event.target.value;
            if (path.includes('starmap.html')) {
                const url = new URL(window.location);
                url.searchParams.set('newUser', selectedValue);
                window.location.href = url.toString();
            } else {
                switchStudent(selectedValue);
            }
        });
    }

    if (path.includes('chapter') && typeof window.initializeChapter === 'function') {
        console.log('Navigating to chapter page');
        setTimeout(() => {
            window.initializeChapter();
            if (userNameDisplay) {
                userNameDisplay.textContent = JSON.parse(localStorage.getItem('starAcademyStudents'))?.currentStudent || '';
            }
        }, 100);
    }

    if (!window.isImporting) window.initializeAppContent();

    if (path.includes('ranks.html')) {
        initializeRankBadgePopup();
        if (typeof initializeFrontPage === 'function') initializeFrontPage();
    }

    if (path.includes('starmap.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const newUser = urlParams.get('newUser');
        if (newUser) {
            switchStudent(newUser);
            const cleanUrl = window.location.pathname + (window.location.hash || '');
            window.history.replaceState({}, document.title, cleanUrl);
        }

        const starMapContainer = document.querySelector('.star-map-container');
        const infoOverlay = document.querySelector('.info-overlay');
        if (starMapContainer && infoOverlay) {
            localStorage.setItem('infoOverlayHidden', 'false');
            window.addEventListener('pageshow', (event) => {
                if (event.persisted) window.location.reload();
            });

            if (window.starMapScrollListener) {
                starMapContainer.removeEventListener('scroll', window.starMapScrollListener);
            }
            if (window.infoOverlayClickListener) {
                infoOverlay.removeEventListener('click', window.infoOverlayClickListener);
            }

            const isMobile = window.matchMedia("(max-width: 767px) and (orientation: portrait)").matches;
            const scrollTarget = isMobile ? 300 : 500;
            const threshold = 50;
            let isInitialScroll = true;

            // 🔧 Only do the initial scroll when the hash equals '#svg-start',
            // and do it after the height settle (your setter runs at 200ms).
            if (window.location.hash === '#svg-start') {
                setTimeout(() => {
                    starMapContainer.scrollTo({ left: scrollTarget, behavior: 'smooth' });
                    setTimeout(() => (isInitialScroll = false), 500);
                }, 250);
            } else {
                // No hash → don't auto-scroll, and allow overlay logic immediately
                isInitialScroll = false;
            }

            window.starMapScrollListener = () => {
                if (isInitialScroll) return;
                if (localStorage.getItem('infoOverlayHidden') === 'true') return;
                const scrollLeft = starMapContainer.scrollLeft;
                if (scrollLeft > scrollTarget + threshold || scrollLeft < scrollTarget - threshold) {
                    infoOverlay.classList.add('hidden');
                    localStorage.setItem('infoOverlayHidden', 'true');
                } else {
                    infoOverlay.classList.remove('hidden');
                }
            };
            starMapContainer.addEventListener('scroll', window.starMapScrollListener);

            window.infoOverlayClickListener = () => {
                starMapContainer.scrollTo({ left: 0, behavior: 'smooth' });
                localStorage.setItem('infoOverlayHidden', 'true');
                infoOverlay.classList.add('hidden');
            };
            infoOverlay.addEventListener('click', window.infoOverlayClickListener);

            setTimeout(() => {
                if (
                    Math.abs(starMapContainer.scrollLeft - scrollTarget) < threshold &&
                    localStorage.getItem('infoOverlayHidden') === 'false'
                ) {
                    infoOverlay.classList.remove('hidden');
                }
            }, 600);
        }

        const starMapSvg = document.getElementById('starMap');
        if (starMapSvg && typeof window.initializeStarMap === 'function') {
            const studentsData = JSON.parse(localStorage.getItem('starAcademyStudents')) || { students: {}, currentStudent: '' };
            if (studentsData.currentStudent) {
                setTimeout(() => {
                    window.initializeStarMap();
                    if (userNameDisplay) userNameDisplay.textContent = studentsData.currentStudent || '';
                }, 100);
            }
        }
    }

    if (path.includes('faq.html')) initializeFAQ();

    if (path.includes('remove.html')) {
        window.removePageInitialized = false;
        setTimeout(() => initializeRemovePage(), 100);
    }

    const header = document.querySelector('.title-container');
    if (header) {
        let initialViewportHeight = window.innerHeight;
        let reRenderInterval = null;

        const forceHeaderRender = () => {
            header.style.opacity = '0.99';
            header.offsetHeight;
            header.style.opacity = '1';
        };

        const checkKeyboardState = () => {
            const currentViewportHeight = window.innerHeight;
            if (currentViewportHeight < initialViewportHeight * 0.9) {
                if (!reRenderInterval) reRenderInterval = setInterval(forceHeaderRender, 100);
            } else {
                if (reRenderInterval) {
                    clearInterval(reRenderInterval);
                    reRenderInterval = null;
                    forceHeaderRender();
                }
            }
        };

        window.addEventListener('resize', checkKeyboardState);
        window.addEventListener('orientationchange', checkKeyboardState);
        setTimeout(forceHeaderRender, 100);
    }

    const setStarMapHeight = () => {
        const starMapContainer = document.querySelector('.star-map-container');
        const titleContainer  = document.querySelector('.title-container');
        const body            = document.body;
        if (!starMapContainer || !titleContainer || !body) return;

        if (!window.initialTitleHeight) {
            window.initialTitleHeight = titleContainer.getBoundingClientRect().height;
        }
        const titleHeight = window.initialTitleHeight;

        const viewportHeight = (window.visualViewport && window.visualViewport.height) || window.innerHeight;

        const marginTop = 10;
        const gap = 20;
        const topBase = titleHeight + marginTop;

        const bodyBorderWidth = parseFloat(getComputedStyle(body).borderWidth) || 0;
        const containerBorderWidth = parseFloat(getComputedStyle(starMapContainer).borderWidth) || 0;
        const totalBodyBorder = bodyBorderWidth * 2;
        const totalContainerBorder = containerBorderWidth * 2;

        const isMobilePortrait = window.matchMedia('(max-width: 767px) and (orientation: portrait)').matches;
        const isIPadLandscape  = window.matchMedia('(min-width: 768px) and (max-width: 1400px) and (orientation: landscape)').matches;

        if (isIPadLandscape) {
            const adjustedTop    = titleHeight + gap;
            const adjustedHeight = viewportHeight - adjustedTop - gap - totalBodyBorder;
            starMapContainer.style.top    = `${adjustedTop}px`;
            starMapContainer.style.height = `${Math.max(0, adjustedHeight)}px`;
            starMapContainer.style.bottom = `${gap + bodyBorderWidth}px`;
        } else {
            const availableHeight = viewportHeight - topBase - totalBodyBorder - 10;
            starMapContainer.style.top    = `${topBase}px`;
            starMapContainer.style.height = `${Math.max(0, availableHeight)}px`;
            starMapContainer.style.bottom = 'auto';
        }

        starMapContainer.style.position  = 'fixed';
        starMapContainer.style.transform = 'none';
        starMapContainer.scrollTop = 0;

        const starMapSvg = starMapContainer.querySelector('svg#starMap');
        if (starMapSvg) {
            starMapSvg.removeAttribute('width');
            starMapSvg.removeAttribute('height');
            starMapSvg.style.width  = 'auto';
            starMapSvg.style.height = '100%';
        }
    };

    setTimeout(() => {
        setStarMapHeight();
        window.addEventListener('resize', setStarMapHeight);
        window.addEventListener('orientationchange', setStarMapHeight);
    }, 200);
});

document.addEventListener('DOMContentLoaded', () => {
  const iframes = document.querySelectorAll('.responsive-video');
  iframes.forEach((iframe, index) => {
    console.log(`Video ${index + 1} laddad:`, iframe.src);
  });
});

(function () {
  function ensureFaqArrows() {
    document.querySelectorAll('.faq-question').forEach(q => {
      if (!q.querySelector('.faq-arrow')) {
        q.insertAdjacentHTML('beforeend', ' <span class="faq-arrow">▼</span>');
      }
    });
  }
  document.addEventListener('DOMContentLoaded', ensureFaqArrows);
  const faqContainer = document.querySelector('.faq-container');
  if (faqContainer) {
    const mo = new MutationObserver(() => ensureFaqArrows());
    mo.observe(faqContainer, { childList: true, subtree: true, characterData: true });
  }
  document.addEventListener('languageChanged', ensureFaqArrows);
})();
