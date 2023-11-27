
const par = require('./numeros.js');

const Logger = require('logplease');
const logger = Logger.create('utils');
console.log(par.esPar(2));

if(par.esPar(2)===true)
    {
        console.log('QUE SII')
        logger.info('El numero es par');
    }

    else
    {
        logger.warn('El numero es impar');
    }


if(par.esPar(3)===true)
    {
        console.log('QUE SII')
        logger.info('El numero es par');
    }

    else
    {
        logger.warn('El numero es impar');
    }


if(par.esPar(101)===true)
    {
        console.log('QUE SII')
        logger.info('El numero es par');
    }

    else
    {
        logger.warn('El numero es impar');
    }



if(par.esPar(201)===true)
    {
        console.log('QUE SII')
        logger.info('El numero es par');
    }

    else
    {
        logger.warn('El numero es impar');
    }

if(par.esPar(202)===true)
    {
        console.log('QUE SII')
        logger.info('El numero es par');
    }

    else
    {
        logger.warn('El numero es impar');
    }


if(par.esPar(100)===true)
    {
        console.log('QUE SII')
        logger.info('El numero es par');
    }

    else
    {
        logger.warn('El numero es impar');
    }
