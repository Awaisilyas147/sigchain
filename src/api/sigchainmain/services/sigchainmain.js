'use strict';

/**
 * sigchainmain service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sigchainmain.sigchainmain');
