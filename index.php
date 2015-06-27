<?php require_once 'inc/config.php'; ?>
<?php 
	
	if (isset($_GET['p'])) {
		
		list($page_title, $page_path) = getPage($_GET['p']);
		
	} else {
		
		list($page_title, $page_path) = getPage(1); // 1 is home
		
	}
	
	if (isset($_POST['share_submit'])) {
		
		saveName($_POST['orig_name'], $_POST['html_name']);

	}
	
	if (isset($_POST['download_image'])) {
		
		downloadImage($_POST['orig_name'], $_POST['html_name']);

	}
	
	$fb_url = SITE_URL;
	$fb_name = '';
		
	// handle share and download page
	if (isHomePage() == false) {
		
		list($share_id, $orig_name, $html_name, $share_date) = getName($_GET['sid']);
		$page_title = ucwords($orig_name);
		
		$fb_url = SITE_URL . 'share/' . $share_id;
		$fb_name = ': ' . $page_title;
		$fb_name_long = 'See how many elements ' . $page_title . ' has in their name!';
		
	}

?>
<?php require_once 'inc/header.php'; ?>
<?php require_once $page_path; ?>
<?php require_once 'inc/footer.php'; ?>