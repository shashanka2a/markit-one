// Simple script to generate favicon.ico from SVG
// This requires sharp: npm install sharp --save-dev
// Run: node scripts/generate-favicon.js

const fs = require('fs');
const path = require('path');

// For now, we'll use the SVG directly
// In production, you can use sharp or another tool to convert SVG to ICO
// For immediate use, the SVG icon will work in modern browsers

console.log('Favicon generation: Using SVG icon (icon.svg)');
console.log('For ICO format, install sharp and convert:');
console.log('npm install sharp --save-dev');

