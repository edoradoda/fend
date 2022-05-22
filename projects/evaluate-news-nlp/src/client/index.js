import { checkForName } from './js/nameChecker'
import { checkForText } from './js/textChecker'
import { handleSubmit } from './js/formHandler'
import { showResult } from './js/showResult'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import  Logo from './images/logo.png';

const element= document.getElementById("logo");
element.src=Logo;

export {
    checkForName,
    handleSubmit,
    checkForText,
    showResult

}

// alert("I EXIST");