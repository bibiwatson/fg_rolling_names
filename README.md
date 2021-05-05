# fg_rolling_names

# Requeriments

Python v3.9.5

NodeJS v8.17.0

Tesseract from <a href="https://digi.bib.uni-mannheim.de/tesseract/" target="_blank">here</a>

Add Tesseract to your Environment  Variables

# Project Instalation
In the root folder run this command

`npm install --g --production windows-build-tools` (this will install all the needed dependencies for the project also it can take a while, just be patient xD)


# Add your desired name to the list

Go to the file *findmynameplease.js* and replace the content of line 35 for your desired name

Examples:

Original

`if(text.indexOf('Fall Gal') >= 0 || text.indexOf('Fall Guy') >= 0)`

Custom

`if(text.indexOf('Fall Guy') >= 0 || text.indexOf('Crazy Little Friend') >= 0)`

`if(text.indexOf('Fall Guy') >= 0)`

# Roll names
1. Execute Fall Guys client
2. Go to profile to the screen where the names are rolled
3. Open a terminal
4. Place directory into project root folder
5. Run command `node findmynameplease`
6. Focus game screen
7. Wait for your name to appear on screen

If you want to exit the process focus terminal and press `Ctrl + C` 