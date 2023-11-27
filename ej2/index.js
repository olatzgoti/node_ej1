
const Logger = require('logplease');
const logger = Logger.create('utils');
logger.debug(`hola mundo de node`);
//logger.log(`This is a log message`); // alias for debug()
logger.info(`Noticias de ultima hora, nodejs me encanta`);
logger.warn(`Tirando warnings como campeones`);
logger.error(`algo no esta bien!!`);



console.log('Hola mundo de node');