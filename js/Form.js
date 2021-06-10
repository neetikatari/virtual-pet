class Form{
    constructor(){
        
    }
    display(){
        var feedDogButton = createButton(" Feed The Dog")
        feedDogButton.position(380,120)
        feedDogButton.mousePressed(()=>{
            gameState= 1
            this.feedFood()
        })
    
        var addFoodButton = createButton(" Add Food for Dog")
        addFoodButton.position(500,120)
        addFoodButton.mousePressed(()=>{
            gameState= 2
            this.addfood()
        })
    
        var bathButton = createButton("take bath ")
        bathButton.position(640,120)
        bathButton.mousePressed(()=>{
            gameState= 3
        })
    
        var sleep = createButton("Go to bed")
        sleep.position(400,160)
        sleep.mousePressed(()=>{
            gameState= 4
        })
    


        var play = createButton("play ")
        play.position(510,160)
        play.mousePressed(()=>{
            gameState= 5
        })
    

        var playPark = createButton("play in park ")
        playPark.position(580,160)
        playPark.mousePressed(()=>{
            gameState= 6
        })
    
    }

    //to add more food for dog
    addfood(){
        db.ref("/").update({"food":food+1})
    }
    //to feed dog
    feedFood(){
        db.ref("/").update({"food":food-1})
    }
}