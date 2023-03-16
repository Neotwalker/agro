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

	$('.quantity .minus').click(function() {
		let $input = $(this).parent().find('.quantity--input');
		let count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
	});

	$('.quantity .plus').click(function() {
		let $input = $(this).parent().find('.quantity--input');
		let count = parseInt($input.val()) + 1;
		count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
		$input.val(parseInt(count));
	});

	$('.quantity .quantity--input').bind("change keyup input click", function() {
		if (this.value.match(/[^0-9]/g)) {
				this.value = this.value.replace(/[^0-9]/g, '');
		}
		if (this.value == "") {
				this.value = 1;
		}
		if (this.value > parseInt($(this).data('max-count'))) {
				this.value = parseInt($(this).data('max-count'));
		}
	});

	$(".tab-1").click(function(e) {
		$(".tab").removeClass('active');
		$(this).addClass('active');
	
		$('.text').removeClass('active');
		$('.tab-1').addClass('active');
	});

	$(".tab-2").click(function(e) {
		$(".tab").removeClass('active');
		$(this).addClass('active');
	
		$('.text').removeClass('active');
		$('.tab-2').addClass('active');
	});

	$(".tab-3").click(function(e) {
		$(".tab").removeClass('active');
		$(this).addClass('active');
	
		$('.text').removeClass('active');
		$('.tab-3').addClass('active');
	});

	$(".tab-4").click(function(e) {
		$(".tab").removeClass('active');
		$(this).addClass('active');
	
		$('.text').removeClass('active');
		$('.tab-4').addClass('active');
	});

	$(".tab-5").click(function(e) {
		$(".cat").removeClass('active');
		$(this).addClass('active');
	
		$('.info-1').removeClass('active');
		$('.tab-5').addClass('active');
	});

	$(".tab-6").click(function(e) {
		$(".cat").removeClass('active');
		$(this).addClass('active');
	
		$('.info-1').removeClass('active');
		$('.tab-6').addClass('active');
	});

	$(".tab-7").click(function(e) {
		$(".cat").removeClass('active');
		$(this).addClass('active');
	
		$('.info-1').removeClass('active');
		$('.tab-7').addClass('active');
	});

	$(".tab-8").click(function(e) {
		$(".cat").removeClass('active');
		$(this).addClass('active');
	
		$('.info-1').removeClass('active');
		$('.tab-8').addClass('active');
	});
	
	$('.dropdown--first').click(function(){
		$(this).toggleClass('active');
		$('.dropdown--years').toggleClass('active');
	});

	let counter = 1;
	$(document).on('click', '.add--place', function(){
		var $clone = $('.clone').last().clone();

		$clone.find('input').each(function() {
      var name = $(this).attr('name');
      $(this).attr('name', name + counter);
    });

		$('.clone').find('.add--place').remove();
		
		if (!$clone.find('.delete--place').length) {
			$clone.append('<span class="delete--place">Удалить место</span>'); // добавляем кнопку удаления
		}
		$clone.appendTo('form .block');
		if ($('.clone').length === 1) {
			// если есть только один блок, добавляем кнопку "add-place"
			$('<span class="add--place">Добавить место</span>').appendTo('form .block');
		}
		counter++;
	});
	
	$(document).on('click', '.delete--place', function(){
		$(this).parent('.clone').remove(); // удаляем блок при нажатии на кнопку удаления
		$('.clone:not(:last)').find('.add--place').remove();
		if ($('.clone').length === 1) {
			// если есть только один блок, добавляем кнопку "add-place"
			$('<span class="add--place">Добавить место</span>').appendTo('.clone:last');
		}
	});

});
