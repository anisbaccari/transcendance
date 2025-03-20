/*  ===== INPUTS ======= */
let r_score = 0;
let l_score = 0;
//// BALL 
let ballPosition =new BABYLON.Vector3(0.2, 0, 0.1);

window.addEventListener('keydown', (e) => {
            switch (e.key) {
                case "w":
                case "W":
                    r_paddle.position.z+=1;                    
                    break;
                case "s":
                case "S":
                    r_paddle.position.z-=1;
                   break;
                case "ArrowUp":
                    l_paddle.position.z+=1
                    break;
                case "ArrowDown":
                    l_paddle.position.z-=1
                    break;
                }
 });
 scene.registerBeforeRender(() =>{
 //   ball.position.addInPlace(ballPosition);
      // Check for collisions with the paddles or boundaries
    if (ball.position.z >= g_height / 2 || ball.position.z <= -g_height / 2) {
        ballPosition.z *= -1; // Reverse direction on z-axis
    }
    if (ball.position.x >= g_width / 2 || ball.position.x <= -g_width / 2) {
        if(ball.position.x >= g_width / 2 ){
            l_score++;
            console.log("Left score : ", l_score);
        }
        if(ball.position.x <= g_width / 2 ){
            r_score++;
            console.log(" Right score : ", r_score);
        }
        ballPosition.x *= -1; // Reverse direction on x-axis
    }
});