const fs = require('fs');
const path = require('path');

// Since ImageMagick is not available, let's create a simple script to copy the PNG to ico
// Note: This is a simple workaround. The browser will display the PNG even with .ico extension
const sourceFile = path.join(__dirname, 'public', 'logo.png');
const targetFile = path.join(__dirname, 'src', 'app', 'favicon.ico');

if (fs.existsSync(sourceFile)) {
  try {
    // Copy the PNG file as favicon.ico
    fs.copyFileSync(sourceFile, targetFile);
    console.log('✅ Favicon created successfully!');
    console.log(`📁 Source: ${sourceFile}`);
    console.log(`📁 Target: ${targetFile}`);
  } catch (error) {
    console.error('❌ Error creating favicon:', error.message);
  }
} else {
  console.error('❌ Source logo.png file not found at:', sourceFile);
}
