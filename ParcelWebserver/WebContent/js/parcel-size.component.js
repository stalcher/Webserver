
angular.
  module('parcelConfig').
  component('parcelSize', {
	  transclude: true,
	  template:
    	'<div class="w3-panel w3-card-2">'+
    		'<div class="w3-container w3-teal">'+
    			'<h2>Paketgröße</h2>'+
    		'</div>' +
    		
    		'<form class="w3-container">'+
    		
    
   			 '<div class="w3-row">'+
   		  	
   		  	'<label>Länge</label>'+
   		  	'<input class="w3-input" id="cfg-size-leength"  type="text" placeholder="0" ng-model="$ctrl.parcel.size.leength">'+
   		  
   		  '</div>'+  
   		
   		
   		  '<div class="w3-row">'+
   		  	
   		  	'<label>Breite</label>'+
   		  	'<input class="w3-input" id="cfg-size-width"  type="text" placeholder="0" ng-model="$ctrl.parcel.size.width">'+
   		  
   		  '</div>'+
	   	  '<div class="w3-row">'+
			 
			  	'<label>Tiefe</label>'+
			  	'<input class="w3-input" id="cfg-size-depth"  type="text" placeholder="0" ng-model="$ctrl.parcel.size.depth">'+
			 
		  '</div>'+
	
		  '<div class="w3-row">'+
			 
		  '<button class="w3-button w3-teal" type="button">Größe berechnen</button>'+ 
		  '<label>  Paketgröße: </label>'+			 
		  '</div>'+
	
		  
		  '<div class="w3-row">'+
		 ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;'+
		  '</div>'+
		  
		  
		
   		  '</form>'+
   		  '</div>',
    	
    controller: function ParcelSizeController($rootScope) {
    this.parcel = {
    	size: {length: '', width: '', depth: ''}
    
    	
    };
      //$rootScope.sender = this.parcel.sent;
      //$rootScope.recipient = this.parcel.recipient;
      $rootScope.parcelsize = this.parcel;
    }
  });
  
 
  