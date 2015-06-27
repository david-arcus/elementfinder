<?php require_once 'inc/config.php'; ?>
<?php require_once('inc/WkHtmlToPdf.php');

$id = $_GET['id'];

validateNumber($id);

$pdf = new WkHtmlToPdf(array(
    'margin-top'    => 0,
    'margin-right'  => 0,
    'margin-bottom' => 0,
    'margin-left'   => 0,
	'orientation' => 'landscape'
));

// Set default page options for all following pages
$pdf->setPageOptions(array(
    'disable-smart-shrinking',
));

// Add a page. To override above page defaults, you could add
// another $options array as second argument.
$pdf->addPage('http://www.elementfinder.info/download/' . $id);

$pdf->saveAs('download/'.$id.'.pdf');

$im = new imagick();
$im->setResolution(72,72);
$im->readimage('download/'.$id . '.pdf[0]'); 
$im->setImageFormat('jpeg');
$im->borderImage("#FFFFFF", 1, 1); 
$im->trimImage(0); 
$im->setImagePage(0, 0, 0, 0);
//$im->writeImage('download/'.$id . '.jpg'); 

unlink('download/'.$id.'.pdf');

header('Content-Type: image/jpg');
echo $im;
$im->clear(); 
$im->destroy();


// Add a HTML file, a HTML string or a page from a URL

/*

$pdf = new WkHtmlToPdf;

// Add a HTML file, a HTML string or a page from a URL
$pdf->addPage('http://google.com');

// Add a cover (same sources as above are possible)
$pdf->addCover('mycover.html');

// Add a Table of contents
$pdf->addToc();

// Save the PDF
$pdf->saveAs('/tmp/new.pdf');

// ... or send to client for inline display
$pdf->send();

// ... or send to client as file download
$pdf->send('test.pdf');

*/