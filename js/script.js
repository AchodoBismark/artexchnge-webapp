$("ul.nav-tabs a").click(function (e) {
    e.preventDefault();  
      $(this).tab('show');
  });
  import {MDCTextField} from '@material/textfield';
  const textField = new MDCTextField(document.querySelector('.mdc-text-field'));