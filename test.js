$("#element").click(function(){
    $(this).data('clicked', true);
});
if($('#element').data('clicked')) {
    alert('yes');
}
