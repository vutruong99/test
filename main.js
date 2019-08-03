$('.wrapper a').on('click', function (e) {
 if (this.hash !== '') {
		e.preventDefault();

		const hash = this.hash;

	 $('html, body')
		 .animate({
			 scrollTop: $(hash).offset().top
		 },800);
	}
});

function greeting() {
  var time = today.getHours();
  document.getElementById("greeting").innerHTML = "Good afternoon";
}
