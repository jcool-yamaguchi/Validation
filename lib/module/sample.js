const inputFirstName = document.getElementById('inputFirstName');
const inputLastName = document.getElementById('inputLastName');
const inputKana = document.getElementById('inputKana');
const inputTel = document.getElementById('inputTel');
const inputMail = document.getElementById('inputMail');

const nameRegex = /^[^\x20-\x7e]*$/;
const kanaRegex = /^[ァ-ンヴー]*$/;
const telRegex = /^0\d{9,10}$/;
const emailRegex = /[!#-9A-~]+@+[a-z0-9]+.+[^.]$/i;

const errMsgKana = document.querySelector('.err-msg-kana');
const errMsgTel = document.querySelector('.err-msg-tel');
const errMsgMail = document.querySelector('.err-msg-mail');


const checkKana = () => {
  inputKana.addEventListener('change', () => {
    //空白 かつ　正規表現
    if (inputKana.value !== "" && telRegex.test(inputKana.value)) {
      errMsgKana.classList.contains('form-invalid') ? errMsgKana.classList.remove('form-invalid') : ''
      return
    } else {
      errMsgKana.classList.add('form-invalid')
    }
  })
}
checkKana()

const checkTel = () => {
  inputTel.addEventListener('change', () => {
    if (inputTel.value !== "" && telRegex.test(inputTel.value)) {
      errMsgTel.classList.contains('form-invalid') ? errMsgTel.classList.remove('form-invalid') : ''
      return
    } else {
      errMsgTel.classList.add('form-invalid')
    }
  })
}
checkTel()


const checkMail = () => {
  inputMail.addEventListener('change', () => {
    if (inputMail.value !== "" && emailRegex.test(inputMail.value)) {
      errMsgMail.classList.contains('form-invalid') ? errMsgMail.classList.remove('form-invalid') : ''
      return
    } else {
      //クラス追加
      errMsgMail.classList.add('form-invalid')
    }
  })
}
checkMail()