/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var constants = require('./constants');
var generatorUtils = require('../../../util/generatorUtils');
var tagUtils = require('../tag/tagUtils');
var util = require('util');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var localNetworkGateways = network.category('local-gateway')
    .description($('Commands to manage local network gateways'));

  localNetworkGateways.command('create [resource-group] [name] [location] [ip-address]')
    .description($('Create a local network gateway'))
    .usage('[options] <resource-group> <name> <location> <ip-address>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the local network gateway'))
    .option('-l, --location <location>', $('the location'))
    .option('-a, --address-space [address-space]', $('a list of address blocks reserved for' +
      '\n     this virtual network in CIDR notation'))
    .option('-i, --ip-address <ip-address>', $('ip address of local network gateway'))
    .option('-j, --asn [asn]', $('the BGP speaker\'s ASN'))
    .option('-b, --bgp-peering-address [bgp-peering-address]', $('the BGP peering address and BGP' +
      '\n     identifier of this BGP speaker'))
    .option('-w, --peer-weight [peer-weight]', $('the weight added to routes learned from' +
      '\n     this BGP speaker'))
    .option('-t, --tags [tags]', $(constants.help.tags.create))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, location, ipAddress, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
      options.location = cli.interaction.promptIfNotGiven($('location : '), location, _);
      options.ipAddress = cli.interaction.promptIfNotGiven($('ip address : '), ipAddress, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var localNetworkGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the local network gateway "%s"'), name));
      try {
        localNetworkGateway = networkManagementClient.localNetworkGateways.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          localNetworkGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (localNetworkGateway) {
        throw new Error(util.format($('local network gateway with name "%s" already exists in the resource group "%s"'), name, resourceGroup));
      }

      var parameters = {};
      if(options.location) {
        parameters.location = options.location;
      }

      if(!parameters.localNetworkAddressSpace) {
        parameters.localNetworkAddressSpace = {};
      }
      if(options.addressSpace) {
        parameters.localNetworkAddressSpace.addressPrefixes = [];
        parameters.localNetworkAddressSpace.addressPrefixes = parameters.localNetworkAddressSpace.addressPrefixes.concat(options.addressSpace.split(','));
      }

      if(options.ipAddress) {
        parameters.gatewayIpAddress = options.ipAddress;
      }

      if(!parameters.bgpSettings) {
        parameters.bgpSettings = {};
      }
      if(options.asn) {
        parameters.bgpSettings.asn = parseInt(options.asn, 10);
      }

      if(options.bgpPeeringAddress) {
        parameters.bgpSettings.bgpPeeringAddress = options.bgpPeeringAddress;
      }

      if(options.peerWeight) {
        parameters.bgpSettings.peerWeight = parseInt(options.peerWeight, 10);
      }

      if(options.tags && utils.argHasValue(options.tags)) {
        tagUtils.appendTags(parameters, options);
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating local network gateway "%s"'), name));
      try {
        localNetworkGateway = networkManagementClient.localNetworkGateways.createOrUpdate(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(localNetworkGateway, generatorUtils.traverse);
    });

  localNetworkGateways.command('set [resource-group] [name]')
    .description($('Update a local network gateway'))
    .usage('[options] <resource-group> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the local network gateway'))
    .option('-a, --address-space [address-space]', $('a list of address blocks reserved for' +
      '\n     this virtual network in CIDR notation'))
    .option('-i, --ip-address [ip-address]', $('ip address of local network gateway'))
    .option('-j, --asn [asn]', $('the BGP speaker\'s ASN'))
    .option('-b, --bgp-peering-address [bgp-peering-address]', $('the BGP peering address and BGP' +
      '\n     identifier of this BGP speaker'))
    .option('-w, --peer-weight [peer-weight]', $('the weight added to routes learned from' +
      '\n     this BGP speaker'))
    .option('-t, --tags [tags]', $(constants.help.tags.create))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var localNetworkGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the local network gateway "%s"'), name));
      try {
        localNetworkGateway = networkManagementClient.localNetworkGateways.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          localNetworkGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!localNetworkGateway) {
        throw new Error(util.format($('local network gateway with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      var parameters = localNetworkGateway;
      if(!parameters.localNetworkAddressSpace) {
        parameters.localNetworkAddressSpace = {};
      }
      if(options.addressSpace) {
        if(!utils.argHasValue(options.addressSpace)) {
          delete parameters.localNetworkAddressSpace.addressPrefixes;
        } else {
          if(localNetworkGateway && localNetworkGateway.localNetworkAddressSpace && localNetworkGateway.localNetworkAddressSpace.addressPrefixes) {
            parameters.localNetworkAddressSpace.addressPrefixes = localNetworkGateway.localNetworkAddressSpace.addressPrefixes;
          } else {
            parameters.localNetworkAddressSpace.addressPrefixes = [];
          }
          parameters.localNetworkAddressSpace.addressPrefixes = parameters.localNetworkAddressSpace.addressPrefixes.concat(options.addressSpace.split(','));
        }
      }

      if(options.ipAddress) {
        parameters.gatewayIpAddress = options.ipAddress;
      }

      if(!parameters.bgpSettings) {
        parameters.bgpSettings = {};
      }
      if(options.asn) {
        parameters.bgpSettings.asn = parseInt(options.asn, 10);
      }

      if(options.bgpPeeringAddress) {
        parameters.bgpSettings.bgpPeeringAddress = options.bgpPeeringAddress;
      }

      if(options.peerWeight) {
        parameters.bgpSettings.peerWeight = parseInt(options.peerWeight, 10);
      }

      if(options.tags && utils.argHasValue(options.tags)) {
        tagUtils.appendTags(parameters, options);
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating local network gateway "%s"'), name));
      try {
        localNetworkGateway = networkManagementClient.localNetworkGateways.createOrUpdate(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(localNetworkGateway, generatorUtils.traverse);
    });

  localNetworkGateways.command('delete [resource-group] [name]')
    .description($('Delete a local network gateway'))
    .usage('[options] <resource-group> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the local network gateway'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var localNetworkGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the local network gateway "%s"'), name));
      try {
        localNetworkGateway = networkManagementClient.localNetworkGateways.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          localNetworkGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!localNetworkGateway) {
        throw new Error(util.format($('local network gateway with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete local network gateway "%s"? [y/n] '), name), _)) {
        cli.output.info(util.format($('local network gateway "%s" was not deleted and still exists in the resource group "%s"'), name, resourceGroup));
        return;
      }

      progress = cli.interaction.progress(util.format($('Deleting local network gateway "%s"'), name));
      try {
        localNetworkGateway = networkManagementClient.localNetworkGateways.deleteMethod(resourceGroup, name, _);
        cli.output.info(util.format($('local network gateway "%s" was successfully deleted from resource group "%s"'), name, resourceGroup));
      } finally {
        progress.end();
      }
    });

  localNetworkGateways.command('show [resource-group] [name]')
    .description($('Show a local network gateway'))
    .usage('[options] <resource-group> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the local network gateway'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var localNetworkGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the local network gateway "%s"'), name));
      try {
        localNetworkGateway = networkManagementClient.localNetworkGateways.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          localNetworkGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!localNetworkGateway) {
        cli.output.warn(util.format($('local network gateway with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      cli.interaction.formatOutput(localNetworkGateway, generatorUtils.traverse);
    });

  localNetworkGateways.command('list [resource-group]')
    .description($('List local network gateways'))
    .usage('[options] <resource-group>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, options, _) {
      options.resourceGroup = resourceGroup;
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var localNetworkGateway = null;
      var progress;
      try {
        if(typeof networkManagementClient.localNetworkGateways.listAll != 'function') {
          resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
          progress = cli.interaction.progress($('Getting the local network gateways'));
          localNetworkGateway = networkManagementClient.localNetworkGateways.list(resourceGroup,  _);
        } else {
          if(options.resourceGroup) {
            progress = cli.interaction.progress($('Getting the local network gateways'));
            localNetworkGateway = networkManagementClient.localNetworkGateways.list(resourceGroup,  _);
          } else {
            progress = cli.interaction.progress($('Getting the local network gateways'));
            localNetworkGateway = networkManagementClient.localNetworkGateways.listAll(_);
          }
        }
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(localNetworkGateway, function(localNetworkGateway) {
        if (!localNetworkGateway || localNetworkGateway.length === 0) {
          cli.output.warn($('No local network gateways found'));
        } else {
          cli.output.table(localNetworkGateway, function (row, item) {
            generatorUtils.showTableRow(row, item);
          });
        }
      });
    });
};
