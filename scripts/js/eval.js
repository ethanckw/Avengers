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
	
	$('.param_input').change(function() {
		var ageMax = $("#age_max").val();
		var ageMin = $("#age_min").val();
		var incomeMin = $("#income_min").val();
		var incomeMax = $("#income_max").val();
		
		var tlAudience = parseInt(10.2345 * (ageMax - ageMin) * (incomeMax - incomeMin));
		var cmAudience = parseInt(tlAudience/1015);
		var qasAudience = parseInt(tlAudience*1.015);
		
		$("#tl_audience").html(tlAudience);
		$("#tl_cost").html();
		$("#cm_audience").html(cmAudience);
		$("#cm_cost").html();
		$("#qas_audience").html(qasAudience);
		$("#qas_cost").html();
	});
	
});