let min = Math.ceil(1);
let max = Math.floor(6);
let HP = 100;
let turn = 1;
//gets an integer between min and max, inclusive
//load a bullet into the revolver
let loadBullet = Math.floor(Math.random() * (max-min + 1) + min);

function shoot(){
    //where the hammer is currently at 
    let hammer = Math.floor(Math.random() * (max-min+1) +min);
    while(HP != 0) { 
    if(hammer === loadBullet) { 
        console.log("Rest in peace, asshole");
        HP = 0;
        // console.log(`round in chamber ${loadBullet}`)
        // console.log(`hammer on chamber ${hammer}`)
    }
        else {
        console.log("You're alive , for now")
        // console.log(`round in chamber ${loadBullet}`)
        // console.log(`hammer on chamber ${hammer}`)
        hammer--
        if(hammer === 1) {
            hammer = 6;
        }
        turn++
    }
    console.log(`You've stayed alive for ${turn} turns `)
}
}

shoot();


//we load just one bullet in a random chamber