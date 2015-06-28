<?php 

// db setup
require_once 'inc/config.php'; 
    
// show relevant page on id
if (isset($_GET['p'])) {
    list($page_title, $page_path) = getPage($_GET['p']);
} else {
    list($page_title, $page_path) = getPage(1); // 1 is home
}

// save shared name and redirect to share page
if (isset($_POST['share_submit'])) {
    saveName($_POST['orig_name'], $_POST['html_name']);
}

// run wkHtmlToPdf to convert page contents to pdf, then turn that into a jpg
// TODO: skip the PDF part
if (isset($_POST['download_image'])) {
    downloadImage($_POST['orig_name'], $_POST['html_name']);
}

// handle share and download page
$fb_url = SITE_URL;
$fb_name = '';

if (!isHomePage()) {

    list($share_id, $orig_name, $html_name, $share_date) = getName($_GET['sid']);
    $page_title = ucwords($orig_name);

    $fb_url = SITE_URL . 'share/' . $share_id;
    $fb_name = ': ' . $page_title;
    $fb_name_long = 'See how many elements ' . $page_title . ' has in their name!';

}

// display page
require_once 'inc/header.php';
require_once $page_path;
require_once 'inc/footer.php';
