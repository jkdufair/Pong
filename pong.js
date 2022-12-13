var moveBall = () => {
    var ball = document.querySelector('#ball');
    var ballRect = ball.getBoundingClientRect();

	var board = document.querySelector('#board');
	var boardRect = board.getBoundingClientRect();

	if (ballRect.right < boardRect.right) {
		// move ball 10 to right
		ball.style.left = ballRect.left + 10 + "px";
		ball.style.top = ballRect.top + 1 + "px";
	}

	requestAnimationFrame(() => { moveBall() })
}

window.addEventListener('load', moveBall)