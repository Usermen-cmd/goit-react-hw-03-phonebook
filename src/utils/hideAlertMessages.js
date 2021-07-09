const hideAlertMessages = context => {
  const setTimeOutId = setTimeout(() => {
    if (context.state.toggleMessage) {
      context.setState({ toggleMessage: false });
    }
    clearTimeout(setTimeOutId);
  }, 2000);
};

export default hideAlertMessages;
