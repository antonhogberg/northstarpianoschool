const starImages = [
  ['gold0_silver0.png', 'gold0_silver1.png', 'gold0_silver2.png', 'gold0_silver3.png', 'gold0_silver4.png', 'gold0_silver5.png', 'gold0_silver6.png'],
  ['gold1_silver0.png', 'gold1_silver1.png', 'gold1_silver2.png', 'gold1_silver3.png', 'gold1_silver4.png', 'gold1_silver5.png'],
  ['gold2_silver0.png', 'gold2_silver1.png', 'gold2_silver2.png', 'gold2_silver3.png', 'gold2_silver4.png'],
  ['gold3_silver0.png', 'gold3_silver1.png', 'gold3_silver2.png', 'gold3_silver3.png'],
  ['gold4_silver0.png', 'gold4_silver1.png', 'gold4_silver2.png'],
  ['gold5_silver0.png', 'gold5_silver1.png'],
  ['gold6_silver0.png']
];

const progressionPath = [
  // Chapter 1
  { star: '1:1:1', nextStar: '1:1:2', lines: ['line-1-1-1-to-1-1-2'] },
  { star: '1:1:2', nextStar: '1:1:3', lines: ['line-1-1-2-to-1-1-3'] },
  { star: '1:1:3', nextStar: '1:1:4', lines: ['line-1-1-3-to-1-1-4'] },
  { star: '1:1:4', nextStar: '1:2:1', lines: ['line-1-1-4-to-1-2-1'] },
  { star: '1:2:1', nextStar: '1:2:2', lines: ['line-1-2-1-to-1-2-2'] },
  { star: '1:2:2', nextStar: '1:2:3', lines: ['line-1-2-2-to-1-2-3'] },
  { star: '1:2:3', nextStar: '1:2:4', lines: ['line-1-2-3-to-1-2-4'] },
  { star: '1:2:4', nextStar: '1:3:1', lines: ['line-1-2-4-to-1-3-1'] },
  { star: '1:3:1', nextStar: '1:3:2', lines: ['line-1-3-1-to-1-3-2'] },
  { star: '1:3:2', nextStar: '1:3:3', lines: ['line-1-3-2-to-1-3-3'] },
  { star: '1:3:3', nextStar: '1:3:4', lines: ['line-1-3-3-to-1-3-4'] },
  { star: '1:3:4', nextStar: '1:4:1', lines: ['line-1-3-4-to-1-4-1'] },
  { star: '1:4:1', nextStar: '1:4:2', lines: ['line-1-4-1-to-1-4-2'] },
  { star: '1:4:2', nextStar: '1:4:3', lines: ['line-1-4-2-to-1-4-3'] },
  { star: '1:4:3', nextStar: '1:4:4', lines: ['line-1-4-3-to-1-4-4'] },
  { star: '1:4:4', nextStar: '2:1:1', lines: [] },
  // Chapter 2
  { star: '2:1:1', nextStar: '2:1:2', lines: ['line-2-1-1-to-2-1-2'] },
  { star: '2:1:2', nextStar: '2:1:3', lines: ['line-2-1-2-to-2-1-3'] },
  { star: '2:1:3', nextStar: '2:1:4', lines: ['line-2-1-3-to-2-1-4'] },
  { star: '2:1:4', nextStar: '2:2:1', lines: ['line-2-1-4-to-2-2-1'] },
  { star: '2:2:1', nextStar: '2:2:2', lines: ['line-2-2-1-to-2-2-2'] },
  { star: '2:2:2', nextStar: '2:2:3', lines: ['line-2-2-2-to-2-2-3'] },
  { star: '2:2:3', nextStar: '2:2:4', lines: ['line-2-2-3-to-2-2-4'] },
  { star: '2:2:4', nextStar: '2:3:1', lines: ['line-2-2-4-to-2-3-1'] },
  { star: '2:3:1', nextStar: '2:3:2', lines: ['line-2-3-1-to-2-3-2'] },
  { star: '2:3:2', nextStar: '2:3:3', lines: ['line-2-3-2-to-2-3-3'] },
  { star: '2:3:3', nextStar: '2:3:4', lines: ['line-2-3-3-to-2-3-4'] },
  { star: '2:3:4', nextStar: '2:4:1', lines: ['line-2-3-4-to-2-4-1'] },
  { star: '2:4:1', nextStar: '2:4:2', lines: ['line-2-4-1-to-2-4-2'] },
  { star: '2:4:2', nextStar: '2:4:3', lines: ['line-2-4-2-to-2-4-3'] },
  { star: '2:4:3', nextStar: '2:4:4', lines: ['line-2-4-3-to-2-4-4'] },
  { star: '2:4:4', nextStar: '3:1:1', lines: [] },
  // Chapter 3
  { star: '3:1:1', nextStar: '3:1:2', lines: ['line-3-1-1-to-3-1-2'] },
  { star: '3:1:2', nextStar: '3:1:3', lines: ['line-3-1-2-to-3-1-3'] },
  { star: '3:1:3', nextStar: '3:1:4', lines: ['line-3-1-3-to-3-1-4'] },
  { star: '3:1:4', nextStar: '3:2:1', lines: ['line-3-1-4-to-3-2-1'] },
  { star: '3:2:1', nextStar: '3:2:2', lines: ['line-3-2-1-to-3-2-2'] },
  { star: '3:2:2', nextStar: '3:2:3', lines: ['line-3-2-2-to-3-2-3'] },
  { star: '3:2:3', nextStar: '3:2:4', lines: ['line-3-2-3-to-3-2-4'] },
  { star: '3:2:4', nextStar: '3:3:1', lines: ['line-3-2-4-to-3-3-1'] },
  { star: '3:3:1', nextStar: '3:3:2', lines: ['line-3-3-1-to-3-3-2'] },
  { star: '3:3:2', nextStar: '3:3:3', lines: ['line-3-3-2-to-3-3-3'] },
  { star: '3:3:3', nextStar: '3:3:4', lines: ['line-3-3-3-to-3-3-4'] },
  { star: '3:3:4', nextStar: '3:4:1', lines: ['line-3-3-4-to-3-4-1'] },
  { star: '3:4:1', nextStar: '3:4:2', lines: ['line-3-4-1-to-3-4-2'] },
  { star: '3:4:2', nextStar: '3:4:3', lines: ['line-3-4-2-to-3-4-3'] },
  { star: '3:4:3', nextStar: '3:4:4', lines: ['line-3-4-3-to-3-4-4'] },
  { star: '3:4:4', nextStar: '4:1:1', lines: [] },
  // Chapter 4
  { star: '4:1:1', nextStar: '4:1:2', lines: ['line-4-1-1-to-4-1-2'] },
  { star: '4:1:2', nextStar: '4:1:3', lines: ['line-4-1-2-to-4-1-3'] },
  { star: '4:1:3', nextStar: '4:1:4', lines: ['line-4-1-3-to-4-1-4'] },
  { star: '4:1:4', nextStar: '4:2:1', lines: ['line-4-1-4-to-4-2-1'] },
  { star: '4:2:1', nextStar: '4:2:2', lines: ['line-4-2-1-to-4-2-2'] },
  { star: '4:2:2', nextStar: '4:2:3', lines: ['line-4-2-2-to-4-2-3'] },
  { star: '4:2:3', nextStar: '4:2:4', lines: ['line-4-2-3-to-4-2-4'] },
  { star: '4:2:4', nextStar: '4:3:1', lines: ['line-4-2-4-to-4-3-1'] },
  { star: '4:3:1', nextStar: '4:3:2', lines: ['line-4-3-1-to-4-3-2'] },
  { star: '4:3:2', nextStar: '4:3:3', lines: ['line-4-3-2-to-4-3-3'] },
  { star: '4:3:3', nextStar: '4:3:4', lines: ['line-4-3-3-to-4-3-4'] },
  { star: '4:3:4', nextStar: '4:4:1', lines: ['line-4-3-4-to-4-4-1'] },
  { star: '4:4:1', nextStar: '4:4:2', lines: ['line-4-4-1-to-4-4-2'] },
  { star: '4:4:2', nextStar: '4:4:3', lines: ['line-4-4-2-to-4-4-3'] },
  { star: '4:4:3', nextStar: '4:4:4', lines: ['line-4-4-3-to-4-4-4'] },
  { star: '4:4:4', nextStar: '5:1:1', lines: [] },
  // Chapter 5
  { star: '5:1:1', nextStar: '5:1:2', lines: ['line-5-1-1-to-5-1-2'] },
  { star: '5:1:2', nextStar: '5:1:3', lines: ['line-5-1-2-to-5-1-3'] },
  { star: '5:1:3', nextStar: '5:1:4', lines: ['line-5-1-3-to-5-1-4'] },
  { star: '5:1:4', nextStar: '5:2:1', lines: ['line-5-1-4-to-5-2-1'] },
  { star: '5:2:1', nextStar: '5:2:2', lines: ['line-5-2-1-to-5-2-2'] },
  { star: '5:2:2', nextStar: '5:2:3', lines: ['line-5-2-2-to-5-2-3'] },
  { star: '5:2:3', nextStar: '5:2:4', lines: ['line-5-2-3-to-5-2-4'] },
  { star: '5:2:4', nextStar: '5:3:1', lines: ['line-5-2-4-to-5-3-1'] },
  { star: '5:3:1', nextStar: '5:3:2', lines: ['line-5-3-1-to-5-3-2'] },
  { star: '5:3:2', nextStar: '5:3:3', lines: ['line-5-3-2-to-5-3-3'] },
  { star: '5:3:3', nextStar: '5:3:4', lines: ['line-5-3-3-to-5-3-4'] },
  { star: '5:3:4', nextStar: '5:4:1', lines: ['line-5-3-4-to-5-4-1'] },
  { star: '5:4:1', nextStar: '5:4:2', lines: ['line-5-4-1-to-5-4-2'] },
  { star: '5:4:2', nextStar: '5:4:3', lines: ['line-5-4-2-to-5-4-3'] },
  { star: '5:4:3', nextStar: '5:4:4', lines: ['line-5-4-3-to-5-4-4'] },
  { star: '5:4:4', nextStar: '6:1:1', lines: [] },
  // Chapter 6
  { star: '6:1:1', nextStar: '6:1:2', lines: ['line-6-1-1-to-6-1-2'] },
  { star: '6:1:2', nextStar: '6:1:3', lines: ['line-6-1-2-to-6-1-3'] },
  { star: '6:1:3', nextStar: '6:1:4', lines: ['line-6-1-3-to-6-1-4'] },
  { star: '6:1:4', nextStar: '6:2:1', lines: ['line-6-1-4-to-6-2-1'] },
  { star: '6:2:1', nextStar: '6:2:2', lines: ['line-6-2-1-to-6-2-2'] },
  { star: '6:2:2', nextStar: '6:2:3', lines: ['line-6-2-2-to-6-2-3'] },
  { star: '6:2:3', nextStar: '6:2:4', lines: ['line-6-2-3-to-6-2-4'] },
  { star: '6:2:4', nextStar: '6:3:1', lines: ['line-6-2-4-to-6-3-1'] },
  { star: '6:3:1', nextStar: '6:3:2', lines: ['line-6-3-1-to-6-3-2'] },
  { star: '6:3:2', nextStar: '6:3:3', lines: ['line-6-3-2-to-6-3-3'] },
  { star: '6:3:3', nextStar: '6:3:4', lines: ['line-6-3-3-to-6-3-4'] },
  { star: '6:3:4', nextStar: '6:4:1', lines: ['line-6-3-4-to-6-4-1'] },
  { star: '6:4:1', nextStar: '6:4:2', lines: ['line-6-4-1-to-6-4-2'] },
  { star: '6:4:2', nextStar: '6:4:3', lines: ['line-6-4-2-to-6-4-3'] },
  { star: '6:4:3', nextStar: '6:4:4', lines: ['line-6-4-3-to-6-4-4'] },
  { star: '6:4:4', nextStar: '7:1:1', lines: [] },
  // Chapter 7
  { star: '7:1:1', nextStar: '7:1:2', lines: ['line-7-1-1-to-7-1-2'] },
  { star: '7:1:2', nextStar: '7:1:3', lines: ['line-7-1-2-to-7-1-3'] },
  { star: '7:1:3', nextStar: '7:1:4', lines: ['line-7-1-3-to-7-1-4'] },
  { star: '7:1:4', nextStar: '7:2:1', lines: ['line-7-1-4-to-7-2-1'] },
  { star: '7:2:1', nextStar: '7:2:2', lines: ['line-7-2-1-to-7-2-2'] },
  { star: '7:2:2', nextStar: '7:2:3', lines: ['line-7-2-2-to-7-2-3'] },
  { star: '7:2:3', nextStar: '7:2:4', lines: ['line-7-2-3-to-7-2-4'] },
  { star: '7:2:4', nextStar: '7:3:1', lines: ['line-7-2-4-to-7-3-1'] },
  { star: '7:3:1', nextStar: '7:3:2', lines: ['line-7-3-1-to-7-3-2'] },
  { star: '7:3:2', nextStar: '7:3:3', lines: ['line-7-3-2-to-7-3-3'] },
  { star: '7:3:3', nextStar: '7:3:4', lines: ['line-7-3-3-to-7-3-4'] },
  { star: '7:3:4', nextStar: '7:4:1', lines: ['line-7-3-4-to-7-4-1'] },
  { star: '7:4:1', nextStar: '7:4:2', lines: ['line-7-4-1-to-7-4-2'] },
  { star: '7:4:2', nextStar: '7:4:3', lines: ['line-7-4-2-to-7-4-3'] },
  { star: '7:4:3', nextStar: '7:4:4', lines: ['line-7-4-3-to-7-4-4'] },
  { star: '7:4:4', nextStar: null, lines: [] }
];

function preloadImages() {
  console.log('Preloading star images');
  const preloadPromises = [];
  starImages.forEach((goldLevelImages, goldLevel) => {
    goldLevelImages.forEach((image, silverLevel) => {
      const img = new Image();
      preloadPromises.push(
        new Promise((resolve, reject) => {
          img.src = image;
          img.onload = () => {
            console.log(`Loaded image: ${image}`);
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to preload image: ${image}`);
            reject();
          };
        })
      );
    });
  });
  Promise.all(preloadPromises).then(() => console.log('All images preloaded')).catch(err => console.error('Some images failed to preload', err));
}

function initializeStarMap() {
  console.log('initializeStarMap called');
  const svgElement = document.getElementById('starMap');
  if (!svgElement) {
    console.error('Star Map SVG element not found');
    return;
  }
  preloadImages();
  initializeSvg(document);
}

function createStarElement(doc, starId, goldLevel, silverLevel, x, y, width, height, initialOpacity = 1) {
  const starElement = doc.createElementNS('http://www.w3.org/2000/svg', 'image');
  starElement.setAttribute('id', `star-${starId.replace(/:/g, '-')}`);
  starElement.setAttribute('x', x);
  starElement.setAttribute('y', y);
  starElement.setAttribute('width', width);
  starElement.setAttribute('height', height);
  const image = starImages[goldLevel][silverLevel] || 'white-star.png';
  starElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', image);
  starElement.onerror = () => {
    console.error(`Failed to load image for star-${starId}: ${image}`);
    starElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'white-star.png');
  };
  starElement.style.cursor = 'pointer';
  starElement.style.opacity = initialOpacity;
  return starElement;
}

function updatePracticeLog(studentsData, currentStudent) {
  if (!studentsData.students[currentStudent]) {
    console.warn(`Student ${currentStudent} not found in studentsData`);
    return studentsData;
  }
  if (!studentsData.students[currentStudent].practiceLog) {
    studentsData.students[currentStudent].practiceLog = {
      dates: [],
      streak: 0,
      totalGoldStars: 0
    };
  }
  const practiceLog = studentsData.students[currentStudent].practiceLog;
  const today = new Date().toISOString().split('T')[0];
  const progress = studentsData.students[currentStudent].progress || {};
  const totalGoldStars = Object.values(progress).reduce((sum, stars) => sum + (parseInt(stars) || 0), 0);
  practiceLog.totalGoldStars = totalGoldStars;
  console.log(`Recalculated totalGoldStars: ${totalGoldStars}`);
  if (!practiceLog.dates.includes(today)) {
    practiceLog.dates.push(today);
    practiceLog.dates.sort();
    let streak = 0;
    let currentDate = new Date(today);
    for (let i = practiceLog.dates.length - 1; i >= 0; i--) {
      const logDate = new Date(practiceLog.dates[i]);
      const diffDays = Math.round((currentDate - logDate) / (1000 * 60 * 60 * 24));
      console.log(`Comparing dates: ${currentDate.toISOString().split('T')[0]} - ${logDate.toISOString().split('T')[0]} = ${diffDays} days`);
      if (diffDays === 0) {
        streak++;
        currentDate = logDate;
      } else if (diffDays === 1) {
        streak++;
        currentDate = logDate;
      } else {
        break;
      }
    }
    practiceLog.streak = streak;
    console.log(`Updated streak to ${streak}`);
  } else {
    console.log(`Today (${today}) already in practiceLog.dates, streak unchanged: ${practiceLog.streak}`);
  }
  return studentsData;
}

function handleStarClick(event, star, exerciseKey, lineElements, doc, parent, x, y, width, height) {
  const starElement = event.currentTarget;
  let studentsData = JSON.parse(localStorage.getItem('starAcademyStudents')) || { students: {}, currentStudent: '' };
  const currentStudent = studentsData.currentStudent;
  if (!currentStudent || !studentsData.students[currentStudent]) {
    console.warn(`No current student set or student data missing, ignoring click for ${exerciseKey}`);
    return;
  }
  const progress = studentsData.students[currentStudent]?.progress || {};
  const silverProgress = studentsData.students[currentStudent]?.silverProgress || {};
  const studentMode = studentsData.students[currentStudent]?.studentMode || false;
  console.log(`Star ${star} clicked, studentMode=${studentMode}, currentStudent=${currentStudent}`);
  let goldLevel = progress[exerciseKey] ? parseInt(progress[exerciseKey]) : 0;
  let silverLevel = silverProgress[exerciseKey] ? parseInt(silverProgress[exerciseKey]) : 0;
  let newGoldLevel = goldLevel;
  let newSilverLevel = silverLevel;
  let isException = false;
  if (studentMode && goldLevel === 6) {
    console.log(`Student mode: Fade effect for goldLevel=6, no state change for ${exerciseKey}`);
    isException = true;
  } else if (studentMode) {
    const maxSilver = 6 - goldLevel;
    newSilverLevel = (silverLevel + 1) % (maxSilver + 1);
    if (newSilverLevel === 0 && silverLevel === maxSilver) {
      isException = true;
    }
    silverProgress[exerciseKey] = newSilverLevel.toString();
    studentsData.students[currentStudent].silverProgress = silverProgress;
    console.log(`Student mode: Updated silverLevel=${newSilverLevel} for ${exerciseKey}`);
  } else {
    newGoldLevel = (goldLevel + 1) % 7;
    newSilverLevel = 0;
    if (goldLevel === 6 && newGoldLevel === 0) {
      isException = true;
    }
    progress[exerciseKey] = newGoldLevel.toString();
    silverProgress[exerciseKey] = '0';
    studentsData.students[currentStudent].progress = progress;
    studentsData.students[currentStudent].silverProgress = silverProgress;
    console.log(`Normal mode: Updated goldLevel=${newGoldLevel}, silverLevel=0 for ${exerciseKey}`);
  }
  if (isException) {
    starElement.style.transition = 'opacity 0.4s ease-in-out';
    starElement.style.opacity = '0';
    setTimeout(() => {
      starElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', starImages[newGoldLevel][newSilverLevel] || 'white-star.png');
      starElement.onerror = () => {
        console.error(`Failed to load image for star-${star}: ${starImages[newGoldLevel][newSilverLevel]}`);
        starElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'white-star.png');
      };
      starElement.style.opacity = '1';
      starElement.style.transition = '';
    }, 400);
  } else {
    const overlayStarElement = createStarElement(doc, `${star}-overlay`, newGoldLevel, newSilverLevel, x, y, width, height, 0);
    overlayStarElement.style.transition = 'opacity 0.4s ease-in-out';
    parent.appendChild(overlayStarElement);
    starElement.removeEventListener('click', starElement.clickHandler);
    setTimeout(() => {
      overlayStarElement.style.opacity = '1';
      setTimeout(() => {
        parent.removeChild(starElement);
        overlayStarElement.setAttribute('id', `star-${star.replace(/:/g, '-')}`);
        overlayStarElement.style.transition = '';
        const clickHandler = (e) => handleStarClick(e, star, exerciseKey, lineElements, doc, parent, x, y, width, height);
        overlayStarElement.removeEventListener('click', overlayStarElement.clickHandler);
        overlayStarElement.addEventListener('click', clickHandler);
        overlayStarElement.clickHandler = clickHandler;
        console.log(`Reattached click handler for star-${star}`);
      }, 400);
    }, 10);
  }
  lineElements.forEach(lineElement => {
    console.log(`Updating line ${lineElement.id} for star-${star}, goldLevel=${newGoldLevel}`);
    if (!lineElement) {
      console.error(`Line element not found for star-${star}`);
      return;
    }
    if (newGoldLevel === 6) {
      lineElement.setAttribute('filter', 'url(#golden-glow)');
      lineElement.setAttribute('style', 'fill:none;fill-opacity:1;stroke:#FFD700;stroke-width:1;stroke-linecap:square;stroke-dasharray:none;stroke-opacity:1');
      console.log(`Applied golden-glow filter and stroke #FFD700 to ${lineElement.id}`);
    } else {
      lineElement.removeAttribute('filter');
      lineElement.setAttribute('style', 'fill:none;fill-opacity:1;stroke:#FFFFFF;stroke-width:1;stroke-linecap:square;stroke-dasharray:none;stroke-opacity:1');
      console.log(`Removed filter and set stroke #FFFFFF for ${lineElement.id}`);
    }
    const computedStyle = getComputedStyle(lineElement);
    console.log(`Computed style for ${lineElement.id}: stroke=${computedStyle.stroke}, filter=${computedStyle.filter}, visibility=${computedStyle.visibility}, opacity=${computedStyle.opacity}`);
  });
  if (!(studentMode && goldLevel === 6)) {
    try {
      studentsData = updatePracticeLog(studentsData, currentStudent);
      console.log(`Before saving to localStorage: ${JSON.stringify(studentsData.students[currentStudent])}`);
      localStorage.setItem('starAcademyStudents', JSON.stringify(studentsData));
      console.log(`Successfully saved starAcademyStudents after star click for ${exerciseKey}`);
      const savedData = JSON.parse(localStorage.getItem('starAcademyStudents'));
      console.log(`After saving, localStorage contains: ${JSON.stringify(savedData.students[currentStudent])}`);
    } catch (e) {
      console.error(`Failed to save starAcademyStudents in starmap.js: ${e.message}`);
      console.error(`Error stack: ${e.stack}`);
      console.error(`Attempted to save: ${JSON.stringify(studentsData)}`);
      return;
    }
  }
  checkCompletion(studentsData);
  if (typeof window.updateStarStates === 'function') {
    console.log(`Calling updateStarStates for star ${star} with fromStarClick`);
    window.updateStarStates(studentsData, true);
  } else {
    console.error('updateStarStates not defined');
  }
  if (typeof window.updateStreakDisplay === 'function') {
    console.log('Calling updateStreakDisplay after star click');
    setTimeout(() => {
      window.updateStreakDisplay();
    }, 50);
  } else {
    console.error('updateStreakDisplay not defined');
  }
}

function handleChapterTitleClick(event, chapter) {
  console.log(`Chapter title ${chapter} clicked`);
  let studentsData = JSON.parse(localStorage.getItem('starAcademyStudents')) || { students: {}, currentStudent: '' };
  const currentStudent = studentsData.currentStudent;
  if (!currentStudent || !studentsData.students[currentStudent]) {
    console.warn(`No current student set or student data missing, ignoring click for chapter ${chapter}`);
    return;
  }
  const chapterTitles = studentsData.students[currentStudent].chapterTitles || {};
  const currentState = chapterTitles[chapter] || false;
  const newState = !currentState;
  chapterTitles[chapter] = newState;
  studentsData.students[currentStudent].chapterTitles = chapterTitles;
  try {
    localStorage.setItem('starAcademyStudents', JSON.stringify(studentsData));
    console.log(`Saved chapter title state: ${chapter}=${newState}`);
  } catch (e) {
    console.error(`Failed to save chapter title state: ${e.message}`);
    return;
  }
  const titleElement = event.currentTarget;
  if (newState) {
    titleElement.setAttribute('filter', 'url(#text-glow)');
    console.log(`Applied text-glow filter to ${chapter}`);
  } else {
    titleElement.removeAttribute('filter');
    console.log(`Removed text-glow filter from ${chapter}`);
  }
  const computedStyle = getComputedStyle(titleElement);
  console.log(`Computed style for ${chapter}: filter=${computedStyle.filter}, visibility=${computedStyle.visibility}, opacity=${computedStyle.opacity}`);
}

function initializeSvg(doc) {
  console.log('initializeSvg called');
  const studentsData = JSON.parse(localStorage.getItem('starAcademyStudents')) || { students: {}, currentStudent: '' };
  if (!studentsData.currentStudent) {
    console.warn('No current student set; star map initialization aborted');
    return;
  }
  const styleElement = doc.createElementNS('http://www.w3.org/2000/svg', 'style');
  styleElement.textContent = `
    image {
      pointer-events: all;
      transition: opacity 0.4s ease-in-out;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      user-select: none;
      touch-action: manipulation;
      outline: none;
    }
    image.non-clickable {
      pointer-events: auto;
    }
    path {
      transition: stroke 0.3s ease-in-out !important;
    }
    text.chapter-title {
      cursor: pointer;
      pointer-events: all;
      transition: filter 0.3s ease-in-out;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      user-select: none;
      touch-action: manipulation;
    }
  `;
  const starMapSvg = doc.getElementById('starMap');
  const existingStyles = starMapSvg.querySelectorAll('style');
  existingStyles.forEach(style => style.remove());
  starMapSvg.appendChild(styleElement);

  // Initialize chapter titles
  for (let chapter = 1; chapter <= 7; chapter++) {
    const titleElement = doc.getElementById(`title-${chapter}`);
    if (!titleElement) {
      console.error(`Chapter title title-${chapter} not found in SVG`);
      continue;
    }
    titleElement.classList.add('chapter-title');
    const chapterTitles = studentsData.students[studentsData.currentStudent]?.chapterTitles || {};
    const isGlowing = chapterTitles[`chapter${chapter}`] || false;
    console.log(`Initializing title-${chapter}: isGlowing=${isGlowing}`);
    if (isGlowing) {
      titleElement.setAttribute('filter', 'url(#text-glow)');
    } else {
      titleElement.removeAttribute('filter');
    }
    const computedStyle = getComputedStyle(titleElement);
    console.log(`Computed style for title-${chapter}: filter=${computedStyle.filter}, visibility=${computedStyle.visibility}, opacity=${computedStyle.opacity}`);
    titleElement.removeEventListener('click', titleElement.clickHandler);
    const clickHandler = (e) => handleChapterTitleClick(e, `chapter${chapter}`);
    titleElement.addEventListener('click', clickHandler);
    titleElement.clickHandler = clickHandler;
    console.log(`Attached click handler for title-${chapter}`);
  }

  progressionPath.forEach(({ star, lines }) => {
    const starElement = doc.getElementById(`star-${star.replace(/:/g, '-')}`);
    const lineElements = lines.map(line => {
      const lineEl = doc.getElementById(line);
      if (!lineEl) console.error(`Line ${line} not found for star-${star}`);
      return lineEl;
    }).filter(line => line);
    if (!starElement) {
      console.error(`Star-${star} not found in SVG`);
      return;
    }
    const exerciseKey = `exercise${star}`;
    const progress = studentsData.students[studentsData.currentStudent]?.progress || {};
    const silverProgress = studentsData.students[studentsData.currentStudent]?.silverProgress || {};
    const studentMode = studentsData.students[studentsData.currentStudent]?.studentMode || false;
    const goldLevel = progress[exerciseKey] ? parseInt(progress[exerciseKey]) : 0;
    const silverLevel = silverProgress[exerciseKey] ? parseInt(silverProgress[exerciseKey]) : 0;
    console.log(`Star-${star}: goldLevel=${goldLevel}, silverLevel=${silverLevel}, studentMode=${studentMode}, image=${starImages[goldLevel][silverLevel] || 'white-star.png'}`);
    const x = starElement.getAttribute('x');
    const y = starElement.getAttribute('y');
    const width = starElement.getAttribute('width');
    const height = starElement.getAttribute('height');
    const parent = starElement.parentNode;
    const newStarElement = createStarElement(doc, star, goldLevel, silverLevel, x, y, width, height);
    if (studentMode && goldLevel === 6) {
      newStarElement.classList.add('non-clickable');
    }
    parent.replaceChild(newStarElement, starElement);
    lineElements.forEach(lineElement => {
      console.log(`Initializing line ${lineElement.id} for star-${star}, goldLevel=${goldLevel}`);
      if (goldLevel === 6) {
        lineElement.setAttribute('filter', 'url(#golden-glow)');
        lineElement.setAttribute('style', 'fill:none;fill-opacity:1;stroke:#FFD700;stroke-width:1;stroke-linecap:square;stroke-dasharray:none;stroke-opacity:1');
        console.log(`Applied golden-glow filter and stroke #FFD700 to ${lineElement.id}`);
      } else {
        lineElement.setAttribute('style', 'fill:none;fill-opacity:1;stroke:#FFFFFF;stroke-width:1;stroke-linecap:square;stroke-dasharray:none;stroke-opacity:1');
        lineElement.removeAttribute('filter');
        console.log(`Removed filter and set stroke #FFFFFF for ${lineElement.id}`);
      }
      const computedStyle = getComputedStyle(lineElement);
      console.log(`Computed style for ${lineElement.id}: stroke=${computedStyle.stroke}, filter=${computedStyle.filter}, visibility=${computedStyle.visibility}, opacity=${computedStyle.opacity}`);
    });
    newStarElement.addEventListener('click', (e) => handleStarClick(e, star, exerciseKey, lineElements, doc, parent, x, y, width, height));
    console.log(`Attached click handler for star-${star} during initialization`);
  });
  window.removeEventListener('storage', window.storageListener);
  window.storageListener = (event) => {
    if (event.key === 'starAcademyStudents') {
      const updatedStudentsData = JSON.parse(event.newValue) || { students: {}, currentStudent: '' };
      const updatedProgress = updatedStudentsData.students[updatedStudentsData.currentStudent]?.progress || {};
      const updatedSilverProgress = updatedStudentsData.students[updatedStudentsData.currentStudent]?.silverProgress || {};
      const updatedStudentMode = updatedStudentsData.students[updatedStudentsData.currentStudent]?.studentMode || false;
      const updatedChapterTitles = updatedStudentsData.students[updatedStudentsData.currentStudent]?.chapterTitles || {};
      // Update chapter titles
      for (let chapter = 1; chapter <= 7; chapter++) {
        const titleElement = doc.getElementById(`title-${chapter}`);
        if (!titleElement) {
          console.error(`Chapter title title-${chapter} not found in SVG during storage update`);
          continue;
        }
        const isGlowing = updatedChapterTitles[`chapter${chapter}`] || false;
        console.log(`Updating title-${chapter}: isGlowing=${isGlowing}`);
        if (isGlowing) {
          titleElement.setAttribute('filter', 'url(#text-glow)');
        } else {
          titleElement.removeAttribute('filter');
        }
        const computedStyle = getComputedStyle(titleElement);
        console.log(`Computed style for title-${chapter}: filter=${computedStyle.filter}, visibility=${computedStyle.visibility}, opacity=${computedStyle.opacity}`);
        titleElement.removeEventListener('click', titleElement.clickHandler);
        const clickHandler = (e) => handleChapterTitleClick(e, `chapter${chapter}`);
        titleElement.addEventListener('click', clickHandler);
        titleElement.clickHandler = clickHandler;
        console.log(`Reattached click handler for title-${chapter} in storage listener`);
      }
      progressionPath.forEach(({ star, lines }) => {
        const starElement = doc.getElementById(`star-${star.replace(/:/g, '-')}`);
        const lineElements = lines.map(line => {
          const lineEl = doc.getElementById(line);
          if (!lineEl) console.error(`Line ${line} not found for star-${star} in storage listener`);
          return lineEl;
        }).filter(line => line);
        if (!starElement) {
          console.error(`Star-${star} not found in SVG during storage update`);
          return;
        }
        const exerciseKey = `exercise${star}`;
        const updatedGoldLevel = updatedProgress[exerciseKey] ? parseInt(updatedProgress[exerciseKey]) : 0;
        const updatedSilverLevel = updatedSilverProgress[exerciseKey] ? parseInt(updatedSilverProgress[exerciseKey]) : 0;
        const x = starElement.getAttribute('x');
        const y = starElement.getAttribute('y');
        const width = starElement.getAttribute('width');
        const height = starElement.getAttribute('height');
        const parent = starElement.parentNode;
        const newStarElement = createStarElement(doc, star, updatedGoldLevel, updatedSilverLevel, x, y, width, height);
        if (updatedStudentMode && updatedGoldLevel === 6) {
          newStarElement.classList.add('non-clickable');
        }
        parent.replaceChild(newStarElement, starElement);
        newStarElement.addEventListener('click', (e) => handleStarClick(e, star, exerciseKey, lineElements, doc, parent, x, y, width, height));
        console.log(`Reattached click handler for star-${star} in storage listener`);
        lineElements.forEach(lineElement => {
          console.log(`Updating line ${lineElement.id} for star-${star}, goldLevel=${updatedGoldLevel} in storage listener`);
          if (updatedGoldLevel === 6) {
            lineElement.setAttribute('filter', 'url(#golden-glow)');
            lineElement.setAttribute('style', 'fill:none;fill-opacity:1;stroke:#FFD700;stroke-width:1;stroke-linecap:square;stroke-dasharray:none;stroke-opacity:1');
            console.log(`Applied golden-glow filter and stroke #FFD700 to ${lineElement.id}`);
          } else {
            lineElement.setAttribute('style', 'fill:none;fill-opacity:1;stroke:#FFFFFF;stroke-width:1;stroke-linecap:square;stroke-dasharray:none;stroke-opacity:1');
            lineElement.removeAttribute('filter');
            console.log(`Removed filter and set stroke #FFFFFF for ${lineElement.id}`);
          }
          const computedStyle = getComputedStyle(lineElement);
          console.log(`Computed style for ${lineElement.id}: stroke=${computedStyle.stroke}, filter=${computedStyle.filter}, visibility=${computedStyle.visibility}, opacity=${computedStyle.opacity}`);
        });
      });
      checkCompletion(updatedStudentsData);
      const globalSelect = document.getElementById('globalStudentSelect');
      const userNameDisplay = document.getElementById('userNameDisplay');
      if (globalSelect && typeof updateDropdown === 'function') {
        console.log('Storage event: Updating dropdown');
        updateDropdown();
      }
      if (userNameDisplay) {
        console.log('Storage event: Updating userNameDisplay');
        userNameDisplay.textContent = updatedStudentsData.currentStudent || '';
      }
      if (typeof window.updateStreakDisplay === 'function') {
        console.log('Storage event: Updating streak display');
        window.updateStreakDisplay();
      }
    }
  };
  window.addEventListener('storage', window.storageListener);
  checkCompletion(studentsData);
}

function checkCompletion(studentsData) {
  const allStarsAtSix = progressionPath.every(({ star }) => {
    const progress = studentsData.students[studentsData.currentStudent]?.progress || {};
    const exerciseKey = `exercise${star}`;
    return (progress[exerciseKey] ? parseInt(progress[exerciseKey]) : 0) === 6;
  });
  if (allStarsAtSix) {
    const overlay = document.getElementById('congratulationsOverlay');
    if (overlay) {
      overlay.style.display = 'flex';
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 5000);
    }
  }
}

window.initializeStarMap = initializeStarMap;