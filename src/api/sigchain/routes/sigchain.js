'use strict';

/**
 * sigchain router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::sigchain.sigchain');
