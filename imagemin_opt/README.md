# Image Optimizer App

This app optimizes `.jpg` and `.png` images using the imagemin library along with the imagemin-mozjpeg and imagemin-pngquant plugins. By optimizing images, you can reduce their file sizes while maintaining the visual quality, which helps to improve website performance and loading times.

## Prerequisites

Before running the app, make sure you have Node.js installed on your system. You can check if Node.js is installed by running the following command in your terminal:

    $ node -v

## Installation

First, clone the repository or download the source code to your local machine.

Navigate to the project directory in your terminal and run the following command to install the necessary dependencies:

    $ npm install

This will install the imagemin, imagemin-mozjpeg, and imagemin-pngquant libraries, as well as any other required dependencies.

## Usage
- Place the `.jpg` and `.png` images you want to optimize in the `./images` directory.

- Run the following command in your terminal:

    $ node index.mjs

The optimized images will be saved in the `build/images` directory.

## Configuration

You can customize the quality level of the optimized images by modifying the quality value in the `index.mjs` file:

    imageminMozjpeg({ quality: 80 }), // Change the quality value for .jpg images as needed
    imageminPngquant({ quality: [0.1, 0.3] }) // Change the quality range for .png images as needed

Higher quality values result in larger file sizes and better visual quality, while lower values result in smaller file sizes and reduced visual quality.