import { NextResponse } from "next/server";
import fs from 'fs';


export async function GET(request) {
 

    try {
        const folderPath = './public/img';
        const files = await fs.promises.readdir(folderPath);
        const imageFiles = files.filter(file => /\.(png|jpe?g|svg)$/i.test(file));
        const imageArray = imageFiles.map(file => ({
          src: `/img/${file}`, // Adjusted src path
          alt: file,
        }));
    
        // Randomize the order of imageArray
        const shuffledArray = shuffle(imageArray);
    
    return NextResponse.json({
        shuffledArray
    });
      } catch (error) {
        console.error('Error reading images:', error);
        return [];
      }



    // Your logic here
    
}



function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
