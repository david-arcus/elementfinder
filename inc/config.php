<?php
switch ( $_SERVER['SERVER_NAME'] ) {

	case 'localhost' :
		define( 'SITE_URL', 'http://elementfinder.local' );
		break;

	default :
		define( 'SITE_URL', 'http://www.elementfinder.info/' );
		break;
		
}

define( 'SITE_NAME', 'Breaking Bad element finder');

// db connection
require_once('leaflet.php');

// db calls
require_once('db-functions.php');

// sweet sweet functions
require_once('functions.php');