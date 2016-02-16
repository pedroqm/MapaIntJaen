

$(function(){

    var puntos=[["baeza","2000",243.82,216.57,"<span style=\"font-weight:bold;\">Baeza </span><br />Texto de ejemplo"],["baeza2","2000",243.82,246.57,"<span style=\"font-weight:bold;\">Baeza2 </span><br />Texto de ejemplo"]] ;
  
    var prueba="baeza";
    
    $('#refresh').on('click', function() {
	
		// Update some plots and areas attributes ...
		var updatedOptions = {'plots' : {}};
		
		updatedOptions.plots["rennes"] = {
			tooltip : {
				content : "Rennes (2)"
			},
			attrs: {
				fill : "#f38a03"
			}
			, text : {position : "top"}
			, size : 5
		};
    
		
		// add some new plots ...
        for(var i=0; i<=1;i++){
          
          
		var newPlots = {
    
		
            	i: {
                value: ""+puntos[i][1]+"",
				latitude: puntos[i][2],
                longitude: puntos[i][3],
                href: "#",
                tooltip: {
                    content: puntos[i][4]
                }
            },
           
		}
        }
		// and delete some others ...
		var deletedPlots = ["paris", "lyon"];
        
		$(".mapcontainer").trigger('update', [updatedOptions, newPlots, deletedPlots, {animDuration : 1000}]);
	});
});

