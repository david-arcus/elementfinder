<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Find all the elements from the periodic table in your name and see them displayed &mdash; Breaking Bad style.">
<!--<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1 ">-->

<title><?php echo $page_title; ?> &ndash; <?php echo SITE_NAME; ?></title>

<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="<?php echo SITE_URL; ?>css/style.css">

<meta property="og:image" content="<?php echo SITE_URL; ?>img/logo-v2.png" />
<meta property="og:url" content="<?php echo $fb_url; ?>" />
<meta property="og:title" content="Breaking Bad element finder<?php echo $fb_name; ?>" />
<meta property="og:description" content="Find all the elements from the periodic table in your name and see them displayed &mdash; Breaking Bad style. <?php echo $fb_name_long; ?>" />
<meta property="og:type" content="website"/>

</head>
    
<body <?php echo (isDownloadPage() ? 'class="download-page"' : ''); ?>>

<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<?php if (isHomePage()): ?>

<div id="facebook">
<div class="fb-like" data-href="<?php echo $fb_url; ?>" data-width="300" data-layout="standard" data-action="like" data-show-faces="true" data-share="true" data-colorscheme="dark"></div>
</div>

<?php endif; ?>

<?php if (!isDownloadPage()): ?>

<video id="smoke" autoplay loop>
  <source src="<?php echo SITE_URL; ?>vid/smoke.mp4" type="video/mp4">
  <source src="<?php echo SITE_URL; ?>vid/smoke.webm" type="video/webm">
  <source src="<?php echo SITE_URL; ?>vid/smoke.ogv" type="video/ogg">
</video>

<?php endif; ?>

	<div style="width:728px; height:90px; margin:10px auto;">

		<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
		<!-- bb-home -->
		<ins class="adsbygoogle"
			style="display:inline-block;width:728px;height:90px"
			data-ad-client="ca-pub-0814562275699383"
			data-ad-slot="5132538978"></ins>
		<script>
			(adsbygoogle = window.adsbygoogle || []).push({});
		</script>	

	</div>


