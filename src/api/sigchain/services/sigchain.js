'use strict';

/**
 * sigchain service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sigchain.sigchain');
