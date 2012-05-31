$(document).ready(function() {

	$('.keyword').change(function() {
		// Append the company with the correct image result
		newGenderDemographicsSrc = "../../images/eval/" + $(this).val() + "_gender_demographics.jpg";
		newMapDemographicsId = "../../images/eval/" + $(this).val() + "_map_demographics.jpg";
		newIncomeDemographicsId = "../../images/eval/" + $(this).val() + "_income_demographics.jpg";
		newAgeDemographicsId = "../../images/eval/" + $(this).val() + "_age_demographics.jpg";
		
		// Change the source of the image
		$("#gender_demographics").attr("src",newGenderDemographicsSrc);
		$("#map_demographics").attr("src",newMapDemographicsId);
		$("#income_demographics").attr("src",newIncomeDemographicsId);
		$("#age_demographics").attr("src",newAgeDemographicsId);
	});
	
});