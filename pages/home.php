<div class="container">
	
	<div class="row">
		
		<div id="logo-container">
			<img src="<?php echo SITE_URL; ?>img/logo-v2.png" width="390" height="250" />
		</div>
		
	</div>

	<div class="row" id="user-form">	
	
		<h2>Find all the elements in your name:</h2>
		
			<form role="form" id="submit_name">
			  <div class="form-group">
				<label for="name">Your name:</label><br />
				<input type="input" class="form-control bb-form" id="name" placeholder="Enter your name">
				<button type="submit" class="btn btn-default bb-submit">Submit</button>
			  </div>
			</form>
		
		<div id="warning-holder"></div>
	
	</div>
	
	<div class="row" id="social-buttons">
		<div id="share">
			<form role="form" action="<?php echo SITE_URL; ?>" id="share_form" method="post">
				<input type="hidden" name="orig_name" id="orig_name" value="">
				<input type="hidden" name="html_name" id="html_name" value="">
				<button type="submit" class="btn btn-primary" name="share_submit">
				  <span class="glyphicon glyphicon-share"></span> Save &amp; share
				</button>
				<button type="submit" class="btn btn-primary" name="download_image">
				  	<span class="glyphicon glyphicon-download"></span> Download image
				</button>
			</form>
		</div>
	</div>
	
	<div class="row" id="results_container">
		
		<div id="results"></div>
	
		<div id="elements-container"></div>
			
	</div>
	
</div>
