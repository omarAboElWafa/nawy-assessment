const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const librariesDir = path.join(__dirname, '..', 'libraries');

console.log(`Libraries directory: ${librariesDir}`);

if (!fs.existsSync(librariesDir)) {
  console.error(`Libraries directory does not exist: ${librariesDir}`);
  process.exit(1);
}

fs.readdirSync(librariesDir).forEach((dir) => {
  const fullPath = path.join(librariesDir, dir);
  console.log(`Checking directory: ${fullPath}`);
  if (
    fs.statSync(fullPath).isDirectory() &&
    fs.existsSync(path.join(fullPath, 'package.json'))
  ) {
    console.log(`Installing dependencies for ${dir}...`);
    try {
      execSync('npm install', { cwd: fullPath, stdio: 'inherit' });
    } catch (error) {
      console.error(
        `Failed to install dependencies for ${dir}: ${error.message}`,
      );
      process.exit(1);
    }
  }
});
