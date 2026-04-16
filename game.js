var canvas, context, player1, timer, interval = 1000/60;

canvas = document.getElementById("canvas")
context = canvas.getContext("2d")


player1 = new GameObject(50,canvas.height/2,150,15,"#7a2876")
ball = new GameObject();

ball.vx = 5;
ball.vy = 0;

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    player1.drawRect();
    ball.drawCircle();
    ball.move();

    if(w)
    {
        player1.y -= 5;
    }

    if(s)
    {
        player1.y += 5;
    }

    if (player1.y < player1.height / 2) {
        player1.y = player1.height / 2;
    }
    if (player1.y > canvas.height - player1.height / 2) {
        player1.y = canvas.height - player1.height / 2;
    }

    if (ball.x + ball.radius > canvas.width) {
        ball.x = canvas.width - ball.radius;
        ball.vx *= -1;
    }
    if (ball.x - ball.radius < 0) {
        ball.x = canvas.width / 2;
        ball.vx *= -1;
    }

    if (ball.y + ball.radius > canvas.height) {
        ball.y = canvas.height - ball.radius;
        ball.vy *= -1;
    }
    if (ball.y - ball.radius < 0) {
        ball.y = ball.radius;
        ball.vy *= -1;
    }

    paddleLeft = player1.x - player1.width/2;
    paddleRight = player1.x + player1.width/2;
    paddleTop = player1.y - player1.height/2;
    paddleBottom = player1.y + player1.height/2;

    if (
        ball.x - ball.radius < paddleRight &&
        ball.y > paddleTop &&
        ball.y < paddleBottom
    ) {
        ball.x = paddleRight + ball.radius; 
        ball.vx *= -1;
    }

}