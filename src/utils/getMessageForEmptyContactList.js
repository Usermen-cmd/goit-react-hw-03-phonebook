const getMessageForEmptyContactList = (contacts, filtredContactList) => {
  const messageOption = contacts?.length > filtredContactList?.length;
  return messageOption
    ? 'В списке контактов нет такого имени'
    : 'Вы не добавили ни одного контакта';
};
export default getMessageForEmptyContactList;
