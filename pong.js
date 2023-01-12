var leftPaddleDirection = 'none';
var rightPaddleDirection = 'none';
var boardDiv;
var boardRect;

var gameStart = () => {
	boardDiv = document.querySelector('#board');
	boardRect = boardDiv.getBoundingClientRect();
	moveBall();
}

var moveBall = () => {
	// var ballDiv = document.querySelector('#ball');
	// var ballRect = ballDiv.getBoundingClientRect();

	// if (ballRect.right < boardRect.right) {
	// 	// move ball 10 to right
	// 	ballDiv.style.left = ballRect.left + 10 + 'px';
	// 	ballDiv.style.top = ballRect.top - 3 + 'px';
	// }

	if (leftPaddleDirection != 'none') {
		var leftPaddleDiv = document.querySelector('#left-paddle')
		var leftPaddleRect = leftPaddleDiv.getBoundingClientRect()
		if (leftPaddleDirection == 'up') {
			if (leftPaddleRect.top >= boardRect.top + 20) {
				leftPaddleDiv.style.top = leftPaddleRect.top - 7 + 'px'
			}
		} else {
			if (leftPaddleRect.bottom <= boardRect.bottom - 20) {
				leftPaddleDiv.style.top = leftPaddleRect.top + 7 + 'px'
			}
		}
	}

	if (rightPaddleDirection != 'none') {
		var rightPaddleDiv = document.querySelector('#right-paddle')
		var rightPaddleRect = rightPaddleDiv.getBoundingClientRect()
		if (rightPaddleDirection == 'up') {
			if (rightPaddleRect.top >= boardRect.top + 20) {
				rightPaddleDiv.style.top = rightPaddleRect.top - 7 + 'px'
			}
		} else {
			if(rightPaddleRect.bottom <= boardRect.bottom - 20) {
				rightPaddleDiv.style.top = rightPaddleRect.top + 7 + 'px'
			}
		}
	}
	requestAnimationFrame(() => { moveBall() })
}

window.addEventListener('load', gameStart)

document.addEventListener('keydown', e => {
	if (e.key == 'q') {
		leftPaddleDirection = 'up'
	}

	if (e.key == 'a') {
		leftPaddleDirection = 'down'
	}

	if (e.key == 'o') {
		rightPaddleDirection = 'up'
	}

	if (e.key == 'l') {
		rightPaddleDirection = 'down'
	}
});

document.addEventListener('keyup', e => {
	if (e.key == 'q' || e.key == 'a') {
		leftPaddleDirection = 'none'
	}

	if (e.key == 'o' || e.key == 'l') {
		rightPaddleDirection = 'none'
	}
});
