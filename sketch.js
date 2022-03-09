//pizza Ingredients
var base , sause , toppings 
var sSauces , sToppings, sCheese; 
//pizza = base + sause + toppings
var pBase , pSause , pToppings,  pFinal;

//burger Ingredients
var bun, tikki;
//burger = lower bun + tikki(salad)  + top bun 
var bBun, bTikki, bFinal;

//sandwitch Ingredients
var bread, cheese; 
// sandwitch = bread + veggies + cheese
var sBread, sCheese, sFinal;


//stage= 0... initial 
//stage=1 ... sauce
//stage =2 .. toppings
//stage = 3 ... final

var stage = 0;


function preload(){

//steps of improvemnets 

pBase = loadImage("Images/PImages/pBase.png");
pSauce = loadImage("Images/PImages/pSauce.png");
pFinal = loadImage("Images/PImages/pFinal.png");
pBackground = loadImage("Images/pBackground.webp");
pToppings = loadImage("Images/PImages/pToppings.png");
}

function setup(){
    createCanvas(1000,600);
    sSauces= createSprite(800,159,150,150);
    sToppings = createSprite(464,103,250,150);
    sCheese = createSprite(580,442,50,100);
    
    //sprite.visible = false ... To make the sprite invisible 
    sSauces.visible = false;
    sToppings.visible = false;
    sCheese.visible = false;

   
    
    
    pizza = createSprite(200,379,370,330);
    //sprite.addImage(image_name)
    pizza.addImage(pBase);
    //sprite.scale = 
    pizza.scale = 0.82;
}


function draw(){
background(pBackground);
console.log(mouseX +  "," + mouseY);

//mousePressedOver(sprite)
//function keyPressed(){} 

// == comparision operator 
// && AND operator 
// || OR operator

if(mousePressedOver(sSauces) && stage == 0){
pizza.addImage(pSauce);  
pizza.scale = 0.82;
stage = 1;

}

if(mousePressedOver(sToppings) && stage == 1 ){
    pizza.addImage(pToppings);
    pizza.scale = 1.1;
    stage = 2;
    }

if(mousePressedOver(sCheese) && stage == 2){
pizza.addImage(pFinal);
pizza.scale = 0.82;
stage = 3;
}






drawSprites();


}