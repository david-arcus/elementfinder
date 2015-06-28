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

<?php if (isDownloadPage()): ?>
<div id="website-watermark">elementfinder.info</div>
<?php else: ?>
<div id="contact">Site by <a href="http://www.davidarcus.co.nz">dave</a></div>
<?php endif; ?>


</body>
</html>
