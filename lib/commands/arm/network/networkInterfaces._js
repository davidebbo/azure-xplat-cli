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
var validation = require('../../../util/validation');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var networkInterfaces = network.category('nic')
    .description($('Commands to manage network interfaces'));

  networkInterfaces.command('create [resource-group] [name] [location]')
    .description($('Create a network interface'))
    .usage('[options] <resource-group> <name> <location>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the network interface'))
    .option('-l, --location <location>', $('the location'))
    .option('-w, --network-security-group-id [network-security-group-id]', $('sets network security group id. This' +
      '\n     option is mutually exclusive with --network-security-group-name'))
    .option('-o, --network-security-group-name [network-security-group-name]', $('sets network security group name. This' +
      '\n     option is mutually exclusive with --network-security-group-id'))
    .option('-d, --lb-address-pool-ids [lb-address-pool-ids]', $('the reference of' +
      '\n     LoadBalancerBackendAddressPool resource'))
    .option('-e, --lb-inbound-nat-rule-ids [lb-inbound-nat-rule-ids]', $('a list of references of' +
      '\n     LoadBalancerInboundNatRules'))
    .option('-a, --private-ip-address [private-ip-address]', $('private IP address of the IP' +
      '\n     configuration'))
    .option('-b, --private-ip-version [private-ip-version]', $('available from Api-Version 2016-03-30' +
      '\n     onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6.' +
      '\n     Default is taken as IPv4.  Possible values are: \'IPv4\' and \'IPv6\''))
    .option('-k, --subnet-name [subnet-name]', $('sets subnet name. This option is' +
      '\n     mutually exclusive with --subnet-id'))
    .option('-m, --subnet-vnet-name [subnet-vnet-name]', $('name of the virtual network that contains subnet'))
    .option('-u, --subnet-id [subnet-id]', $('sets subnet id. This option is mutually' +
      '\n     exclusive with --subnet-name'))
    .option('-i, --public-ip-id [public-ip-id]', $('sets public ip address id. This option' +
      '\n     is mutually exclusive with --public-ip-name'))
    .option('-p, --public-ip-name [public-ip-name]', $('sets public ip address name. This' +
      '\n     option is mutually exclusive with --public-ip-id'))
    .option('-c, --ip-config-name [ip-config-name]', $('sets ip configurations name'))
    .option('-r, --internal-dns-name-label [internal-dns-name-label]', $('relative DNS name for this NIC used for' +
      '\n     internal communications between VMs in the same virtual network'))
    .option('-j, --enable-accelerated-networking [enable-accelerated-networking]', $('if the network interface is accelerated' +
      '\n     networking enabled'))
    .option('-f, --enable-ip-forwarding [enable-ip-forwarding]', $('indicates whether IP forwarding is' +
      '\n     enabled on this network interface'))
    .option('-t, --tags [tags]', $(constants.help.tags.create))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, location, options, _) {
      var index = 0;
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
      options.location = cli.interaction.promptIfNotGiven($('location : '), location, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkInterface;
      var progress = cli.interaction.progress(util.format($('Looking up the network interface "%s"'), name));
      try {
        networkInterface = networkManagementClient.networkInterfaces.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkInterface = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (networkInterface) {
        throw new Error(util.format($('network interface with name "%s" already exists in the resource group "%s"'), name, resourceGroup));
      }

      var parameters = {};
      if(options.location) {
        parameters.location = options.location;
      }

      if(!parameters.networkSecurityGroup) {
        parameters.networkSecurityGroup = {};
      }
      if(options.networkSecurityGroupId) {
        if(options.networkSecurityGroupName) {
          cli.output.warn($('--network-security-group-name parameter will be ignored because --network-security-group-id and --network-security-group-name are mutually exclusive'));
        }
        parameters.networkSecurityGroup.id = options.networkSecurityGroupId;
      } else if(options.networkSecurityGroupName) {
        var idContainernetworkSecurityGroup = networkManagementClient.networkSecurityGroups.get(resourceGroup, options.networkSecurityGroupName, _);
        parameters.networkSecurityGroup.id = idContainernetworkSecurityGroup.id;
      }

      if(!parameters.ipConfigurations) {
        parameters.ipConfigurations = [];
      }
      if(!parameters.ipConfigurations[index]) {
        parameters.ipConfigurations[index] = {};
        parameters.ipConfigurations[index].name = 'default-ip-config';
      }
      if(options.lbAddressPoolIds) {
        parameters.ipConfigurations[index].loadBalancerBackendAddressPools = options.lbAddressPoolIds.split(',').map(function(item) { return { id: item }; });
      }

      if(options.lbInboundNatRuleIds) {
        parameters.ipConfigurations[index].loadBalancerInboundNatRules = options.lbInboundNatRuleIds.split(',').map(function(item) { return { id: item }; });
      }

      if(options.privateIpAddress) {
        parameters.ipConfigurations[index].privateIPAddress = options.privateIpAddress;
        if (!options.privateIpVersion || (options.privateIpVersion && options.privateIpVersion.toLowerCase() != 'ipv6')) {
          parameters.ipConfigurations[index].privateIPAllocationMethod = 'Static';
        }
      }

      if(options.privateIpVersion) {
        parameters.ipConfigurations[index].privateIPAddressVersion = validation.isIn(options.privateIpVersion, ['IPv4', 'IPv6'], '--private-ip-version');
      }

      if(!parameters.ipConfigurations[index].subnet) {
        parameters.ipConfigurations[index].subnet = {};
      }
      if(options.subnetId) {
        if(options.subnetName) {
          cli.output.warn($('--subnet-name parameter will be ignored because --subnet-id and --subnet-name are mutually exclusive'));
        }
        parameters.ipConfigurations[index].subnet.id = options.subnetId;
      } else if(options.subnetName) {
        var idContainersubnet = networkManagementClient.subnets.get(resourceGroup, options.subnetVnetName, options.subnetName, _);
        parameters.ipConfigurations[index].subnet.id = idContainersubnet.id;
      }

      if(!parameters.ipConfigurations[index].publicIPAddress) {
        parameters.ipConfigurations[index].publicIPAddress = {};
      }
      if(options.publicIpId) {
        if(options.publicIpName) {
          cli.output.warn($('--public-ip-name parameter will be ignored because --public-ip-id and --public-ip-name are mutually exclusive'));
        }
        parameters.ipConfigurations[index].publicIPAddress.id = options.publicIpId;
      } else if(options.publicIpName) {
        var idContainerpublicIPAddress = networkManagementClient.publicIPAddresses.get(resourceGroup, options.publicIpName, _);
        parameters.ipConfigurations[index].publicIPAddress.id = idContainerpublicIPAddress.id;
      }

      if(options.ipConfigName) {
        parameters.ipConfigurations[index].name = options.ipConfigName;
      }

      if(!parameters.dnsSettings) {
        parameters.dnsSettings = {};
      }
      if(options.internalDnsNameLabel) {
        parameters.dnsSettings.internalDnsNameLabel = options.internalDnsNameLabel;
      }

      if(options.enableAcceleratedNetworking) {
        parameters.enableAcceleratedNetworking = utils.parseBool(options.enableAcceleratedNetworking);
      }

      if(options.enableIpForwarding) {
        parameters.enableIPForwarding = utils.parseBool(options.enableIpForwarding);
      }

      if(options.tags && utils.argHasValue(options.tags)) {
        tagUtils.appendTags(parameters, options);
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating network interface "%s"'), name));
      try {
        networkInterface = networkManagementClient.networkInterfaces.createOrUpdate(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(networkInterface, generatorUtils.traverse);
    });

  networkInterfaces.command('set [resource-group] [name]')
    .description($('Update a network interface'))
    .usage('[options] <resource-group> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the network interface'))
    .option('-w, --network-security-group-id [network-security-group-id]', $('sets network security group id. This' +
      '\n     option is mutually exclusive with --network-security-group-name'))
    .option('-o, --network-security-group-name [network-security-group-name]', $('sets network security group name. This' +
      '\n     option is mutually exclusive with --network-security-group-id'))
    .option('-r, --internal-dns-name-label [internal-dns-name-label]', $('relative DNS name for this NIC used for' +
      '\n     internal communications between VMs in the same virtual network'))
    .option('-j, --enable-accelerated-networking [enable-accelerated-networking]', $('if the network interface is accelerated' +
      '\n     networking enabled'))
    .option('-f, --enable-ip-forwarding [enable-ip-forwarding]', $('indicates whether IP forwarding is' +
      '\n     enabled on this network interface'))
    .option('-t, --tags [tags]', $(constants.help.tags.create))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkInterface;
      var progress = cli.interaction.progress(util.format($('Looking up the network interface "%s"'), name));
      try {
        networkInterface = networkManagementClient.networkInterfaces.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkInterface = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!networkInterface) {
        throw new Error(util.format($('network interface with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      var parameters = networkInterface;
      if(!parameters.networkSecurityGroup) {
        parameters.networkSecurityGroup = {};
      }
      if(options.networkSecurityGroupId) {
        if(options.networkSecurityGroupName) {
          cli.output.warn($('--network-security-group-name parameter will be ignored because --network-security-group-id and --network-security-group-name are mutually exclusive'));
        }
        if(!utils.argHasValue(options.networkSecurityGroupId)) {
          delete parameters.networkSecurityGroup;
        } else {
          parameters.networkSecurityGroup.id = options.networkSecurityGroupId;
        }
      } else if(options.networkSecurityGroupName) {
        if(!utils.argHasValue(options.networkSecurityGroupName)) {
          delete parameters.networkSecurityGroup;
        } else {
          var idContainernetworkSecurityGroup = networkManagementClient.networkSecurityGroups.get(resourceGroup, options.networkSecurityGroupName, _);
          parameters.networkSecurityGroup.id = idContainernetworkSecurityGroup.id;
        }
      }

      if(!parameters.dnsSettings) {
        parameters.dnsSettings = {};
      }
      if(options.internalDnsNameLabel) {
        parameters.dnsSettings.internalDnsNameLabel = options.internalDnsNameLabel;
      }

      if(options.enableAcceleratedNetworking) {
        parameters.enableAcceleratedNetworking = utils.parseBool(options.enableAcceleratedNetworking);
      }

      if(options.enableIpForwarding) {
        parameters.enableIPForwarding = utils.parseBool(options.enableIpForwarding);
      }

      if(options.tags && utils.argHasValue(options.tags)) {
        tagUtils.appendTags(parameters, options);
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating network interface "%s"'), name));
      try {
        networkInterface = networkManagementClient.networkInterfaces.createOrUpdate(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(networkInterface, generatorUtils.traverse);
    });

  networkInterfaces.command('delete [resource-group] [name]')
    .description($('Delete a network interface'))
    .usage('[options] <resource-group> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the network interface'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkInterface;
      var progress = cli.interaction.progress(util.format($('Looking up the network interface "%s"'), name));
      try {
        networkInterface = networkManagementClient.networkInterfaces.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkInterface = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!networkInterface) {
        throw new Error(util.format($('network interface with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete network interface "%s"? [y/n] '), name), _)) {
        cli.output.info(util.format($('network interface "%s" was not deleted and still exists in the resource group "%s"'), name, resourceGroup));
        return;
      }

      progress = cli.interaction.progress(util.format($('Deleting network interface "%s"'), name));
      try {
        networkInterface = networkManagementClient.networkInterfaces.deleteMethod(resourceGroup, name, _);
        cli.output.info(util.format($('network interface "%s" was successfully deleted from resource group "%s"'), name, resourceGroup));
      } finally {
        progress.end();
      }
    });

  var effectiveRouteTable = networkInterfaces.category('effective-route-table')
    .description($('Commands to manage effective route table'));

  effectiveRouteTable.command('show [resource-group] [nic-name]')
    .description($('Perform show operation on a network interface'))
    .usage('[options] <resource-group> <nic-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-c, --nic-name <nic-name>', $('the nic name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, nicName, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      nicName = cli.interaction.promptIfNotGiven($('nic name : '), nicName, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkInterface;

      var progress = cli.interaction.progress(util.format($('Looking up the network interface "%s"'), nicName));
      try {
        networkInterface = networkManagementClient.networkInterfaces.get(resourceGroup, nicName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkInterface = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!networkInterface) {
        throw new Error(util.format($('a network interface with name "%s" not found in the resource group "%s"'), nicName, resourceGroup));
      }
      progress = cli.interaction.progress(util.format($('Performing show operation on a network interface "%s"'), nicName));
      try {
        networkInterface = networkManagementClient.networkInterfaces.getEffectiveRouteTable(resourceGroup, nicName, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(networkInterface, generatorUtils.traverse);
    });

  var effectiveNetworkSecurityGroups = networkInterfaces.category('effective-nsg')
    .description($('Commands to manage effective nsg'));

  effectiveNetworkSecurityGroups.command('list [resource-group] [nic-name]')
    .description($('Perform list operation on a network interface'))
    .usage('[options] <resource-group> <nic-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-c, --nic-name <nic-name>', $('the nic name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, nicName, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      nicName = cli.interaction.promptIfNotGiven($('nic name : '), nicName, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var networkInterface;

      var progress = cli.interaction.progress(util.format($('Looking up the network interface "%s"'), nicName));
      try {
        networkInterface = networkManagementClient.networkInterfaces.get(resourceGroup, nicName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          networkInterface = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!networkInterface) {
        throw new Error(util.format($('a network interface with name "%s" not found in the resource group "%s"'), nicName, resourceGroup));
      }
      progress = cli.interaction.progress(util.format($('Performing list operation on a network interface "%s"'), nicName));
      try {
        networkInterface = networkManagementClient.networkInterfaces.listEffectiveNetworkSecurityGroups(resourceGroup, nicName, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(networkInterface, generatorUtils.traverse);
    });
};
