'use strict';

/**
 * postlar service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::postlar.postlar');
