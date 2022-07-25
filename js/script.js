$(function ($) {
	$("#banner").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		nextArrow: '<i class="fas fa-long-arrow-alt-right banner_right"></i>',
		prevArrow: '<i class="fas fa-long-arrow-alt-left banner_left"></i>',
		dotsClass: "banner_dots",
	});
	$(".team_content").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: ".team_member",
	});
	$(".team_member").slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		// autoplay: true,
		centerMode: true,
		centerPadding: "0px",
		asNavFor: ".team_content",
		nextArrow: '<i class="fas fa-long-arrow-alt-right"></i>',
		prevArrow: '<i class="fas fa-long-arrow-alt-left"></i>',

		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					// slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					// slidesToScroll: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					// slidesToScroll: 1,
				},
			},
		],
	});

	// init Isotope
	var $grid = $(".grid").isotope({
		itemSelector: ".element-item",
		layoutMode: "fitRows",
	});

	var filterFns = {};
	$(".filters-button-group").on("click", "button", function () {
		var filterValue = $(this).attr("data-filter");
		// use filterFn if matches value
		filterValue = filterFns[filterValue] || filterValue;
		$grid.isotope({ filter: filterValue });
	});
	// change is-checked class on buttons
	$(".button-group").each(function (i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on("click", "button", function () {
			$buttonGroup.find(".is-checked").removeClass("is-checked");
			$(this).addClass("is-checked");
		});
	});

	// Progressbar
	$("#web,#graphics,#seo,#marketing").LineProgressbar({
		ShowProgressCount: true,
		duration: 1000,
		fillBackgroundColor: "#3498db",
		backgroundColor: "#EEEEEE",
		radius: "0px",
		height: "10px",
		width: "100%",
	});
	$("#web").LineProgressbar({
		percentage: 90, // 90%
	});
	$("#graphics").LineProgressbar({
		percentage: 80,
	});
	$("#seo").LineProgressbar({
		percentage: 70,
	});
	$("#marketing").LineProgressbar({
		percentage: 60,
	});

	// smooth scrolling
	$(".nav-pills li a").on("click", function (event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top,
				},
				800,
				function () {
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				}
			);
		}
	});
});
