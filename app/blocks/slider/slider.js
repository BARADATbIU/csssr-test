export default function slider() {
	const sliderEl = document.querySelector('.slider__box');
	const switchEl = sliderEl.querySelector('.slider__switch');
	const widthSwitch = switchEl.offsetWidth;
	const widthSlider = sliderEl.offsetWidth;

	function mouseDownListener(e) {
		e.preventDefault();

		function getCoords(elem) {
			const box = elem.getBoundingClientRect();
			return {
				left: box.left + pageXOffset
			};
		}

		const switchElCoords = getCoords(switchEl);
		const shiftX = e.pageX - switchElCoords.left;
		const sliderElCoords = getCoords(sliderEl);

		function mouseMoveListener(ev) {
			ev.preventDefault();

			let newLeft = ev.pageX - shiftX - sliderElCoords.left;

			const leftEdge = -(widthSwitch / 2);
			const rightEdge = widthSlider - widthSwitch / 2;

			if (newLeft < leftEdge) {
				newLeft = leftEdge;
			}

			if (newLeft > rightEdge) {
				newLeft = rightEdge;
			}

			switchEl.style.left = newLeft + 'px';
		}

		document.addEventListener('mousemove', mouseMoveListener);

		function mouseUpListener() {
			document.removeEventListener('mousemove', mouseMoveListener);
			document.removeEventListener('mouseup', mouseUpListener);
		}

		document.addEventListener('mouseup', mouseUpListener);

		return false;
	}

	switchEl.addEventListener('mousedown', mouseDownListener);

	switchEl.addEventListener('dragstart', () => false);
}
