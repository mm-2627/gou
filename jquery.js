$(function(){
	$(window).on('load scroll',function (){ /*リロードとスクロールした時にイベント発動*/
		$('.animation').each(function(){ /*each:繰り返し*/
			//ターゲットの位置を取得
			var target = $(this).offset().top; /*offset:X,Y座標取得*/
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height){
				//クラスを付与
				$(this).addClass('active');
			}
		});
	});
});
