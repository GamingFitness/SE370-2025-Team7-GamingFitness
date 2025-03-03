// Define the Actor class for representing animated non player sprites
class Actor {
    constructor(name,sprite_json, x, y, height, width, x_v,start_state,anim_change, exist, ID) {
        // Initialize Actor properties
        this.name = name;
        this.sprite_json = sprite_json; // Sprite JSON data
        this.x = x; // Initial x-coordinate
        this.y = y; // Initial y-coordinate
        this.state = start_state; // Initial state of the actor
        this.root_e = "TenderBud"; // Root element in the sprite JSON

        //NEW
        this.anim_change = anim_change;


        this.cur_frame = 0; // Current frame of animation

        // Store current frame data
        this.cur_bk_data = null;

        // Velocity in the x and y directions
        this.x_v = x_v;
        this.y_v = 0;

        //NEW length and width to be updated constantly
        this.height = height;
        this.width = width;

        this.exist = exist;

        //NEW
        this.ID = ID;
    }


    // Method to draw the actor on the canvas
    draw() {
        var ctx = context; // Get the canvas context


        

        
        if(this.exist == "True"){

        //NEW sets frame to 0 so newly set animation can play in full
        if(this.anim_change == "True"){
            this.cur_frame = 0;
            this.anim_change = "False";
        }

        // Check if the current frame exceeds the total frames of the current animation state
        if (this.cur_frame >= this.sprite_json[this.root_e][this.state].length && this.state != "Shooting"){
            this.cur_frame = 0; // Reset to the first frame if exceeded
        } 
        
        if(this.cur_frame >= this.sprite_json[this.root_e][this.state].length && this.state == "Shooting"){
            this.state = "Idle";
        }


        // Preload sprite images if not already loaded
        //if (this.sprite_json[this.root_e][this.state][this.cur_frame]['img'] == null) {

            for (let i = 0; i < this.sprite_json[this.root_e][this.state].length; i++) {
                // Load image for each frame of animation
                this.sprite_json[this.root_e][this.state][i]['img'] = new Image();
                // Set image source
                this.sprite_json[this.root_e][this.state][i]['img'].src = this.name + '/' + this.root_e + '/' + this.state + '/' + i + '.png';
            }
        //}


        // Draw the current frame of the sprite at its position
        ctx.drawImage(this.sprite_json[this.root_e][this.state][this.cur_frame]['img'], this.x, this.y);



//===================BOUNDRIES======================  

        // Handle boundary conditions to keep the actor within the canvas
        if (this.x >= (window.innerWidth - this.sprite_json[this.root_e][this.state][this.cur_frame]['w'])) {
            // If actor moves beyond the right boundary
            console.log("BOUNDRY HIT");

            //Check if projectile crossed boundry
            if(this.ID == "PROJECTILE"){
                this.exist = "False";
            }

            //this.exist = "False";
            this.x_v = this.y_v = 0;
            this.x = (window.innerWidth - this.sprite_json[this.root_e][this.state][this.cur_frame]['w']) - 1;
            //this.state = 'Idle';
            this.cur_frame = 0;

            //drawables[FOREGROUND].pop();

        } else if (this.x <= 0) {
            // If actor moves beyond the left boundary
            console.log("BOUNDRY HIT");

            //Check if projectile crossed boundry
            if(this.ID == "PROJECTILE"){
                this.exist = "False";
            }

            //this.exist = "False";
            this.x_v = this.y_v = 0;
            this.x = 1;
            //this.state = 'Idle';
            this.cur_frame = 0;
        } else if (this.y >= (window.innerHeight - this.sprite_json[this.root_e][this.state][this.cur_frame]['h'])) {
            // If actor moves beyond the bottom boundary
            this.x_v = this.y_v = 0;
            this.y = (window.innerHeight - this.sprite_json[this.root_e][this.state][this.cur_frame]['h']) - 1;
            //this.state = 'Idle';
            this.cur_frame = 0;
        } else if (this.y <= 0) {
            // If actor moves beyond the top boundary
            this.x_v = this.y_v = 0;
            this.y = 1;
            //this.state = 'Idle';
            this.cur_frame = 0;
        } else {
            // If actor is within the canvas boundaries, update its position based on velocity
            this.x = this.x + this.x_v;
            this.y = this.y + this.y_v;
        }

        //Lenght Width update!!!
    //### WAS THERE IN OG COMMENTED OUT WITH THIS ONE
        this.height = this.sprite_json[this.root_e][this.state][this.cur_frame]['h'];
        this.width = this.sprite_json[this.root_e][this.state][this.cur_frame]['w'];



//===================COLLISION/PROJECTILE======================
    

    //need to check ID of current projectile
    //drawables[FOREGROUND][2].changeAnimation('Damaged');
    if(this.ID == "PROJECTILE"){

        for(let i = 1; i < drawables[FOREGROUND].length; i++){
            console.log("================");
            console.log("ARRAY ELEMENT: " + i);
            console.log(drawables[FOREGROUND][i].ID);
            console.log("================");
            if(
                this.x + this.width >= drawables[FOREGROUND][i].x &&
                this.x <= drawables[FOREGROUND][i].x + drawables[FOREGROUND][i].width &&
                this.y + this.height >= drawables[FOREGROUND][i].y && 
                this.y <= drawables[FOREGROUND][i].y + drawables[FOREGROUND][i].height
            ){
                
                //ENEMY HIT
                if(drawables[FOREGROUND][i].ID == "ENEMY"){
                    drawables[FOREGROUND][i].changeAnimation('Damaged');
                    setTimeout(() => {
                        drawables[FOREGROUND][i].exist = "False";
                    }, 1000);

                    //drawables[FOREGROUND].splice(i,1);
                }
            }

        }
    }



/*
    if(drawables[FOREGROUND][2]!= null && drawables[FOREGROUND][2].exist == "True"){
        if(
            drawables[FOREGROUND][1].x + drawables[FOREGROUND][1].width >= drawables[FOREGROUND][2].x &&
            drawables[FOREGROUND][1].x <= drawables[FOREGROUND][2].x + drawables[FOREGROUND][2].width &&
            drawables[FOREGROUND][1].y + drawables[FOREGROUND][1].height >= drawables[FOREGROUND][2].y && 
            drawables[FOREGROUND][1].y <= drawables[FOREGROUND][2].y + drawables[FOREGROUND][2].height
        ){
    
            console.log("COLLISION DETECTED")


            setInterval(function(){
                drawables[FOREGROUND][1].state = "Damaged";
            }, 50);
            
                        
            if(drawables[FOREGROUND][1].cur_frame >= this.sprite_json[this.root_e][this.state].length){
                drawables[FOREGROUND][1].exist = "False";
            }
        }
    }
*/


//===================COLLISION/CHARACTERS======================
    /*
        if(
            drawables[FOREGROUND][0].x + drawables[FOREGROUND][0].width >= drawables[FOREGROUND][1].x &&
            drawables[FOREGROUND][0].x <= drawables[FOREGROUND][1].x + drawables[FOREGROUND][1].width &&
            drawables[FOREGROUND][0].y + drawables[FOREGROUND][0].height >= drawables[FOREGROUND][1].y && 
            drawables[FOREGROUND][0].y <= drawables[FOREGROUND][1].y + drawables[FOREGROUND][1].height
        ){
    
            console.log("COLLISION DETECTED")
                
            //X Axis collision
            if(drawables[FOREGROUND][0].x > drawables[FOREGROUND][1].x || drawables[FOREGROUND][0].x <= drawables[FOREGROUND][1].x){
    
                console.log("COLLISION X Axis")
    
                //BOUNCED BACK
                drawables[FOREGROUND][0].x = drawables[FOREGROUND][0].x - 5
                drawables[FOREGROUND][1].x = drawables[FOREGROUND][1].x + 5
                    
                     
                if(drawables[FOREGROUND][0].x > drawables[FOREGROUND][1].x){
                    console.log("COLLISION: [Right]")
                }
                else if(drawables[FOREGROUND][0].x <= drawables[FOREGROUND][1].x){
                    console.log("COLLISION: [Left]")
                }
                
            }
    
                
                //Y Axis collision
                else if(drawables[FOREGROUND][0].y > drawables[FOREGROUND][1].y || drawables[FOREGROUND][0].y <= drawables[FOREGROUND][1].y){      
                    console.log("Y Axis Collision")
                    drawables[FOREGROUND][0].y = drawables[FOREGROUND][0].y - 5
                    drawables[FOREGROUND][1].y = drawables[FOREGROUND][1].y + 5
                   
                    
                if(drawables[FOREGROUND][0].y > drawables[FOREGROUND][1].y){
                    console.log("COLLISION: [Top]")
                }
                else if(drawables[FOREGROUND][0].y <= drawables[FOREGROUND][1].y){
                    console.log("COLLISION: [Bottom]")
                }
                    
            }
                
            //console.log("===============OMG COLLISON!!!HOLY SHITTT==============")
        }
    */




        /*
        if(drawables[FOREGROUND][2]!= null && drawables[FOREGROUND][2].exist == "True"){

            //console.log("THUNDER BULLET:")
            //console.log(drawables[FOREGROUND][2])

            //console.log("MIGHT GOLEM:")
            //console.log(drawables[FOREGROUND][1])
            
            if(
                drawables[FOREGROUND][1].x < drawables[FOREGROUND][2].x + drawables[FOREGROUND][2].width &&
                drawables[FOREGROUND][1].x + drawables[FOREGROUND][1].width > drawables[FOREGROUND][2].x //&&
                //drawables[FOREGROUND][1].y + drawables[FOREGROUND][1].height >= drawables[FOREGROUND][2].y && 
                //drawables[FOREGROUND][1].y <= drawables[FOREGROUND][2].y + drawables[FOREGROUND][2].height
            ){

                console.log("COLLISION DETECTED")
            }
        }
        for(let i = 1; i < drawables[FOREGROUND].length; i++){
            for(let j = 2; j < drawables[FOREGROUND].length; j++){
            if (i>j){
            if(
                drawables[FOREGROUND][i].x + drawables[FOREGROUND][i].width >= drawables[FOREGROUND][j].x &&
                drawables[FOREGROUND][i].x <= drawables[FOREGROUND][j].x + drawables[FOREGROUND][j].width &&
                drawables[FOREGROUND][i].y + drawables[FOREGROUND][i].height >= drawables[FOREGROUND][j].y && 
                drawables[FOREGROUND][i].y <= drawables[FOREGROUND][j].y + drawables[FOREGROUND][j].height
            ){

                //console.log("COLLISION DETECTED")

                //setInterval(function(){
                drawables[FOREGROUND][1].state = "Damaged";
            //}, 50);
                
                if(drawables[FOREGROUND][1].cur_frame >= this.sprite_json[this.root_e][this.state].length){
                    drawables[FOREGROUND][1].exist = "False";
                }
            
                
                
                    
                
                
                //console.log("===============OMG COLLISON!!!HOLY SHITTT==============")
            }
            }
            }
        }
        */

        // Increment the current frame counter
        this.cur_frame = this.cur_frame + 1;

        // Removes sprites removed during program
        /*
        for(let i = 1; i < drawables[FOREGROUND].length; i++){
            if(drawables[FOREGROUND][i].exist == "False"){
                drawables[FOREGROUND].splice(i,1);
            }
        }
        */
       
        // Return false to prevent browser default behavior
        return false;
        }
    }

    
    // Method to change animations on the canvas
    changeAnimation(newState) {
        this.state = newState;
        this.anim_change = 'True'

        //NEW preloads the first frame of shooting animation to avoid blank frame
        this.sprite_json[this.root_e][this.state][0]['img'] = new Image();
        // Set image source
        this.sprite_json[this.root_e][this.state][0]['img'].src = this.name + '/' + this.root_e + '/' + this.state + '/' + 0 + '.png';
    }
}







// Define the Background class for representing the background image
class Background {
    constructor(path, frames) {
        // Initialize Background properties
        this.path = path; // Path to the background image
        this.cur_frame = 0; // Current frame of the background animation
        this.numFrames = frames; // Total number of frames
        this.skippedFrames = 0; // Counter for skipped frames
        this.img_data = []; // Array to store image data
    }

    // Method to draw the background on the canvas
    draw() {
        var ctx = context; // Get the canvas context

        // Load the current frame of the background image if not already loaded
        if (this.img_data[this.cur_frame] == null) {
            this.img_data[this.cur_frame] = new Image();
            this.img_data[this.cur_frame].src = 'imgs/' + this.path + '/default/' + (this.cur_frame + 1) + '.png';
        }

        // Draw the current frame of the background image on the canvas
        ctx.drawImage(this.img_data[this.cur_frame], 0, 0, canvas.width, canvas.height);

        // Increment the frame counter or reset it if reaching the end of the animation
        if (this.skippedFrames > 10) {
            this.cur_frame = this.cur_frame + 1;
            this.skippedFrames = 0;
        } else
            this.skippedFrames++;

        // Reset the frame counter if it exceeds the total number of frames
        if (this.cur_frame >= this.numFrames)
            this.cur_frame = 0;
    }
}
