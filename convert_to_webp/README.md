# Image Converter App

This app converts `.jpg` images to `.webp` format using the sharp library. By converting images to .webp format, you can reduce their file sizes while maintaining the visual quality, which helps to improve website performance and loading times.

## Prerequisites

Before running the app, make sure you have Node.js installed on your system. You can check if Node.js is installed by running the following command in your terminal:

    $ node -v

## Installation

First, clone the repository or download the source code to your local machine.

Navigate to the project directory in your terminal and run the following command to install the necessary dependencies:

    $ npm install

This will install the sharp library and any other required dependencies.

## Usage

Place the `.jpg` images you want to convert in the `./images` directory.

Run the following command in your terminal:

    $ node index.mjs

The converted `.webp` images will be saved in the `./output` directory.

## Configuration

You can customize the quality level of the converted images by modifying the quality value in the `index.mjs` file:

    $ .webp({ quality: 80 }) // Change the quality value as needed

Higher quality values result in larger file sizes and better visual quality, while lower values result in smaller file sizes and reduced visual quality.