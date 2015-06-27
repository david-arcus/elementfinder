<?php

function db_connect() {
	// Connect to db
	try {
		$connection = new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME, DB_USER, DB_PASS);
	} catch (PDOException $e) {
		print "Error!: " . $e->getMessage() . "<br/>";
		die();
	}

	return $connection;	
}

function validateNumber($number) {
	
	// check number is valid
	if (filter_var($number, FILTER_SANITIZE_NUMBER_INT) != $number) {
		header('Location: ' . SITE_URL);
		exit;
	}
	
}

function getPage($id) {
	
	validateNumber($id);
	
	switch ($id) {
		case 1:
			$page_title = 'Home';
			$page_path = 'pages/home.php';
			break;
		case 2:
			// handle empty 'sid' value (share id)
			if (empty($_GET['sid'])) {
				header('Location: ' . SITE_URL);
				exit;
			}
			$page_path = 'pages/share.php';
			break;
		case 3:
			if (empty($_GET['sid'])) {
				header('Location: ' . SITE_URL);
				exit;
			}
			$page_title = 'Your image';
			$page_path = 'pages/download.php';
			break;
		default:
			$page_title = 'Home';
			$page_path = 'pages/home.php';
	}
	
	return array($page_title, $page_path);
	
}

function isHomePage() {
	
	if (!isset($_GET['p']) || $_GET['p'] == 1) {
		
		return true;	
		
	} else {
		
		return false;
		
	}
	
}

function isDownloadPage() {
	
	if (isset($_GET['p']) && $_GET['p'] == 3) {
		
		return true;	
		
	} else {
		
		return false;
		
	}
}
