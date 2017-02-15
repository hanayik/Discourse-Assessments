// var content = document.getElementById("contentDiv")
// var instructions = 'PNT instructions!'
// var beepSound = path.join(__dirname, 'assets', 'beep.wav')
// exp = new experiment('pnt')
// console.log(exp)
// exp.getRootPath()
// exp.getMediaPath()
// stimfile = path.resolve(exp.mediapath, 'stim.csv')
// console.log(stimfile)
// trials = readCSV(stimfile)
// //Number(picNum.value)
// maxTrials = trials.length
// var t = -1
// //showNextTrial()
//
//
// function showNextTrial() {
//   closeNav()
//   clearScreen()
//   t += 1
//   if (t > maxTrials) {
//     clearScreen()
//     t = maxTrials+1
//     return false
//   }
//   picNum.value = t
//   var img = document.createElement("img")
//   img.src = path.join(exp.mediapath, 'pics', trials[t].PictureName.trim() + '.png')
//   playAudio(path.join(exp.mediapath, 'beep.wav'))
//   content.appendChild(img)
//   return getTime()
// }
//
//
// function showPreviousTrial() {
//   closeNav()
//   t -= 1
//   if (t < 0) {
//     t=0
//   }
//   picNum.value = t
//   clearScreen()
//   var img = document.createElement("img")
//   img.src = path.join(exp.mediapath, 'pics', trials[t].PictureName.trim() + '.png')
//   playAudio(path.join(exp.mediapath, 'beep.wav'))
//   content.appendChild(img)
//   return getTime()
// }
//
// // outline
// // 1) show instructions
// // onset = showInstructions(instructions)
// // 2) wait for click, or kb event to remove instructions
// // 3) start camera recording
// // 4) show picture + beep sound
// //showPicture()
// // 5) wait for picture timeout or button press to move on
// // 6) repeat step 5 for all stimuli read from csv
// // 7) stop recording
// // 8) clear screen to polar logo
