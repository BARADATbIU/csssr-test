export default function about() {
	const inputBox = document.querySelector('.about__block');
	let lastInputEl = inputBox.lastElementChild;
	const inputElMaxLength = lastInputEl.getAttribute('maxlength');

	function addInput() {
		const inputElValueLength = lastInputEl.value.length;
		const newInput = lastInputEl.cloneNode();
		newInput.value = '';

		if (inputElValueLength === Number(inputElMaxLength)) {
			lastInputEl = inputBox.appendChild(newInput);
			lastInputEl.focus();

			lastInputEl.addEventListener('input', addInput);
		}
	}

	lastInputEl.addEventListener('input', addInput);
}
