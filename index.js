const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there 👋
⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
---
⏰ Updated on ${new Date().toUTCString()}

![Progress Bar CI](https://github.com/song-zian/song-zian/workflows/Progress%20Bar%20CI/badge.svg)

### My GitHub Contributions

![](https://raw.githubusercontent.com/song-zian/song-zian/main/assets/github-contribution-grid-snake.svg)
    
![song-zian's GitHub stats](https://github-readme-stats.vercel.app/api?username=song-zian&show_icons=true)
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=song-zian&layout=compact)

⭐️ From [song-zian](https://github.com/song-zian)

console.log(readme)
