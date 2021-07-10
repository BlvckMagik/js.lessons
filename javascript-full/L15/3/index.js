const createLogger = () => {
  const allLogs = [];

  function warn(mes) {
    allLogs.push({ message: mes, dateTime: new Date(), type: 'warn' });
  }

  function error(mes) {
    allLogs.push({ message: mes, dateTime: new Date(), type: 'error' });
  }

  function log(mes) {
    allLogs.push({ message: mes, dateTime: new Date(), type: 'log' });
  }

  function getRecords(incomingType) {
    if (incomingType) {
      return allLogs.filter(el => el.type === incomingType).reverse();
    }
    return allLogs.reverse();
  }

  return { warn, error, log, getRecords };
};

const logger = createLogger();
logger.warn('kaka');
logger.warn('kaka2');
logger.log('kaka2');
logger.error('rat');
console.log(logger.getRecords());
