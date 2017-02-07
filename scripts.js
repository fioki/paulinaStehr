$(document).ready(function(){

  // event handler for checkboxes with name "size"
  $('input[type="checkbox"]').click(function(){
    // by default, hide everything
    $('div.product').hide();

    // iterate through only the checked checkboxes
    $('input[type="checkbox"]:checked').each(function(){
      var checkedVal = $(this).val(); // value of checked box

      // show products matching that value
      switch(checkedVal) {
        case 'black':
          $('div.product.black').show();
          break;
        case 'white':
          $('div.product.white').show();
          break;
        case 'tee':
          $('div.product.tee').show();
          break;
        case 'jacket':
          $('div.product.jacket').show();
          break;
      }
    });
  });

  // by default, check all the boxes
  $('input[name="size"]').each(function(){
    $(this).prop("checked", true); // check the box
  })

});
