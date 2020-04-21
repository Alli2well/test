$(function(){
  $('.application-file-input').change(function(){
    var filename = $(this).val();
    var visibleUpload = $(this).parent();
    var filenameTarget = visibleUpload.children('.filename')
    var defaultLabel = visibleUpload.children('.default-label')
    if (filename) {
      filename = filename.replace('C:\\fakepath\\', '');
      filenameTarget.text(filename).show();
      visibleUpload.addClass('has-file');
      defaultLabel.hide();
    } else {
      visibleUpload.removeClass('has-file')
      filenameTarget.hide();
      defaultLabel.show();
    }
  });

  var requiredCheckboxes = $('.required-field :checkbox[required]');
  requiredCheckboxes.change(function(){
    if(requiredCheckboxes.is(':checked')) {
      requiredCheckboxes.removeAttr('required');
    }
    else {
      requiredCheckboxes.attr('required', 'required');
    }
  });
});


