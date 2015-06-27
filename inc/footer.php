<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>

<script src="<?php echo SITE_URL; ?>js/main.js"></script>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-45991977-1', 'elementfinder.info');
  ga('send', 'pageview');

</script>

<?php 
/*
<script type="text/javascript" language="javascript">
<!--
// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature by Andrew Moulden, Site Engineering Ltd
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
{ coded = "uFLBn.ouzvo.Bp@stuvN.LIt"
  key = "ps6jGSTFuNEmvdZQweOLVDYPMnyAXK75Bf3tzokghH94qralCUiW81J2xcb0RI"
  shift=coded.length
  link=""
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {     
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
  }
document.write("<div id='contact'>Site by <a href='mailto:"+link+"'>dave</a></div>")
}
//-->
</script><noscript><div id='contact'>Sorry, you need Javascript on to email me.</div></noscript>
*/
?>

<?php if (isDownloadPage() == true): ?>
<div id="website-watermark">elementfinder.info</div>
<?php else: ?>
<div id="contact">Site by <a href="http://www.davidarcus.co.nz">dave</a></div>
<?php endif; ?>


</body>
</html>
