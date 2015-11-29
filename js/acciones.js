// JavaScript Document
$(document).ready(function(e) {
 function CaF(grados)
  { 
   return ((parseInt(grados)*1.8)+32);
  }
  
  function FaC(grados)
  {
	 return ((parseInt(grados)-32)/1.8);
  }
  
  function KaC(grados)
  {
	  return(parseInt(grados)-273.15);
  }
  
  function CaK(grados)
  {
	  return(parseInt(grados)+273.15);
  }
  
  function FaK(grados)
  {
	  return 5/(9*((parseInt(grados)-32)+273.15));
  }
  
   function KaF(grados)
  {
	  return (1.8*(parseInt(grados)-273.15)+32);
  }
	  
//document.addEventListener("deviceready",function(){
	$('.opcion').on('tap', function ()
	{
	 conversion=$(this).attr('id');

	 operacion=$(this).html();
	 unidad1="° "+operacion.substring(0,operacion.search(' a '));
	 unidad2="° "+ operacion.substring(operacion.search(' a ')+3,operacion.length);
	 $('#mypanel').panel('close');
	 $('#De').html(unidad1);
	 $('#A').html(unidad2);
	 switch (conversion)
	 {
		 case 'CaF':
	
		 $('#txtresTemp').val(CaF($('#txtcanTemp').val()));
		  
		 break;
		 case 'FaC':
	
		 $('#txtresTemp').val(FaC($('#txtcanTemp').val()));
		  
		 break;
		 
		 case 'KaC':
	
		 $('#txtresTemp').val(KaC($('#txtcanTemp').val()));
		  
		 break;
		 
		 case 'CaK':
	
		 $('#txtresTemp').val(CaK($('#txtcanTemp').val()));
		  
		 break;
		 
		 case 'FaK':
	
		 $('#txtresTemp').val(FaK($('#txtcanTemp').val()));
		  
		 break;
		 
		 case 'KaF':
	
		 $('#txtresTemp').val(KaF($('#txtcanTemp').val()));
		  
		 break;
	 }
	 
	});
	
	
//}); 
});

