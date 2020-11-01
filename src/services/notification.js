import Alert from 'react-s-alert';

const notification = (type, message, additionalInfo) => {
  Alert[type](null, {
    customFields: {
      title: type[0].toUpperCase() + type.slice(1),
      message: message,
      info: additionalInfo,
    },
  });
};

export default notification;
