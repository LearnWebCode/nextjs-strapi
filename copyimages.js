const fs = require("fs-extra")

async function copyFolder(source, target) {
  try {
    await fs.remove(target)
    await fs.copy(source, target)
  } catch (err) {
    console.error(err)
  }
}

const sourceDir = "/Users/brad/Desktop/our-backend/public/uploads"
const targetDir = "/Users/brad/Desktop/our-project/public/uploads"

copyFolder(sourceDir, targetDir)
