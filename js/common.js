$(function() {

	$(".range-5").slider({
		min: 0,
		max: 280,
		values: [0, 280],
		range: true,
		animate: "fast",
		slide : function(event, ui) {
			$(".range-input-left").val(ui.values[ 0 ]);
			$(".range-input-right").val(ui.values[ 1 ]);
		}
	});
	$(".range-input-left").val($(".range-5").slider("values", 0));
	$(".range-input-right").val($(".range-5").slider("values", 1));
	$(".range-container-5 input").change(function() {
		var input_left = $(".range-input-left").val().replace(/[^0-9]/g, ''),
		opt_left = $(".range-5").slider("option", "min"),
		where_right = $(".range-5").slider("values", 1),
		input_right = $(".range-input-right").val().replace(/[^0-9]/g, ''),
		opt_right = $(".range-5").slider("option", "max"),
		where_left = $(".range-5").slider("values", 0);
		if (input_left > where_right) {
				input_left = where_right;
		}
		if (input_left < opt_left) {
				input_left = opt_left;
		}
		if (input_left == "") {
		input_left = 0;
		}
		if (input_right < where_left) {
				input_right = where_left;
		}
		if (input_right > opt_right) {
				input_right = opt_right;
		}
		if (input_right == "") {
		input_right = 0;
		}
		$(".range-input-left").val(input_left);
		$(".range-input-right").val(input_right);
		if (input_left != where_left) {
				$(".range-5").slider("values", 0, input_left);
		}
		if (input_right != where_right) {
				$(".range-5").slider("values", 1, input_right);
		}
	});

});
