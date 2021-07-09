import * as Yup from 'yup';
import 'yup-phone';

const errorMessageInvalidPhone = 'Вы ввели не корректный номер телефона';
const errorMessageRequiredName = 'Введите имя';
const erroeMessageTooLong = 'Имя слишком длинное';
const erroeMessageTooShort = 'Имя слишком короткое';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, erroeMessageTooShort)
    .max(20, erroeMessageTooLong)
    .required(errorMessageRequiredName),
  tel: Yup.string().phone('', false, errorMessageInvalidPhone).required(),
});

export default DisplayingErrorMessagesSchema;
