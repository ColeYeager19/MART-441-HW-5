// JavaScript Document

// create an array of image names that correspond to the image tags
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12", "image13", "image14", "image15", "image16", "image17", "image18", "image19", "image20","image21", "image22", "image23", "image24"];
// create a variable with the blank image name
var blankImagePath = "images/Blank.jpg";
// create a empty array for the actual images
var actualImages = new Array();
    
function printBlanks()
{
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src="Blank.jpg";
    }
    
}

function createRandomImageArray()
{
    // create an array of actual images	
	var actualImagePath = ["MountainDog.jpg", "Husky.jpg", "BlackLab.jpg", "CockerSpaniel.jpg", "GermanShepard.jpg", "KingCharles.jpg", "GoldenRetriever.jpeg", "ChocolateLab.jpg", "Boz.jpg", "BorderCollie.jpg", "Akita.jpg", "Raccoon.jpg"];
	var count = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    // create a while statement to check to see if our actual image array is full
    while(actualImages.length < 24)
    {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
          // create an if statement that says if the total number added is less than 2, then
        // add the image to the actual image array
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
        
}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];
	if (flipBack == "") {flipBack = actualImages[number];
						flipBackCounter = number;
						}
	else {if (flipBack != actualImages[number]){ 
												
												document.getElementById(imageTags[number]).src = "Blank.jpg";
												document.getElementById(imageTags[flipBackCounter]).src = "Blank.jpg";
												flipBack = "";
												flipBackCounter = 0;
												}
else {flipBack = "";
flipBackCounter = 0;
	}
	}    
}

var flipBack = "";
var flipBackCounter = 0;

