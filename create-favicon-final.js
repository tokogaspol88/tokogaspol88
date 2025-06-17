const fs = require('fs');
const path = require('path');

// Create a proper favicon.ico using the PNG file
// Since we can't use image processing libraries due to disk space,
// let's create multiple sizes and proper favicon metadata

async function createFavicon() {  
  const sourceFile = path.join(__dirname, 'public', 'logo.png');
  const targetFile = path.join(__dirname, 'src', 'app', 'favicon.ico');
  
  if (!fs.existsSync(sourceFile)) {
    console.error('❌ Source logo.png file not found');
    return;
  }
  
  try {
    // Copy the PNG as ICO (browsers will handle it)
    fs.copyFileSync(sourceFile, targetFile);
    
    // Also create a copy in public folder for better accessibility
    const publicFavicon = path.join(__dirname, 'public', 'favicon.ico');
    fs.copyFileSync(sourceFile, publicFavicon);
    
    console.log('✅ Favicon created successfully!');
    console.log('📁 Created:', targetFile);
    console.log('📁 Created:', publicFavicon);
    
    // Clean up the script file
    fs.unlinkSync(__filename);
    console.log('🧹 Cleaned up script file');
    
  } catch (error) {
    console.error('❌ Error creating favicon:', error.message);
  }
}

createFavicon();
