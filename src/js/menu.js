function toggleMenu() {
	$('#toggle-menu').click(function () {
		$('#main-menu').toggle();
		$('.fa-bars').toggle();
		$('.fa-times').toggle();
	});
}

module.exports = {
	toggleMenu: toggleMenu
};