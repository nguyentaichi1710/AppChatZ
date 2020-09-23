export const sendMessage = (obj) => {
  return {
    type: 'SEND_MESSAGE',
    payload: obj,
  };
};

export default sendMessage;
