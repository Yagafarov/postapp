'use strict';

/**
 * sensor-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sensor-data.sensor-data');
