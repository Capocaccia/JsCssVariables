var inputs = document.querySelectorAll('.controls input');

inputs.forEach((input) => {
	input.addEventListener('change', handleUpdate);
	input.addEventListener('mousemove', handleUpdate);	
});

function handleUpdate(){
	const suffix = this.dataset.sizing;
	if(this.name == 'blur' || this.name == 'spacing'){
		this.name == 'spacing' ? setSpacing(this) : setBlur(this);
	} else {
		setBaseColor(this);
	}
}

function setSpacing(element){
	document.documentElement.style.setProperty(`--${element.name}`, element.value + element.dataset.sizing);
}

function setBlur(element){
	document.documentElement.style.setProperty(`--${element.name}`, element.value + element.dataset.sizing);
}


function setBaseColor(element){
	document.documentElement.style.setProperty(`--${element.name}`, element.value);
}