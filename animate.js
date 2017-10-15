$(document).ready(function(){
   $('#example3')
  .progress({
    total: 3
  });
    $("#button1").click(function(){
      $('#example3').progress('increment');
       $('#page1').transition('fade right');
      $("#page2").transition('fly left');
    });
    $("#button2").click(function(){
      $('#example3').progress('increment');
       $('#page2').transition('fade right');
      $("#page3").transition('fly left');
    });
    $("#button3").click(function(){
      $('#example3').progress('increment');
       $('#page3').transition('fade right');
    });
});
