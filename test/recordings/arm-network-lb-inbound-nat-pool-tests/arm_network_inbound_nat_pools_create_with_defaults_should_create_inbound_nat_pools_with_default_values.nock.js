// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"082d9442-b628-4792-878c-64a41eaa88f4\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"877f0d98-99b0-4765-a40a-afff24c33349\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"082d9442-b628-4792-878c-64a41eaa88f4\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1375',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"082d9442-b628-4792-878c-64a41eaa88f4"',
  'x-ms-request-id': 'aafe75c6-0b5f-4667-afc3-49f1659033dd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '1528dd89-87fb-433c-86a1-356c5c5523a8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170605T075109Z:1528dd89-87fb-433c-86a1-356c5c5523a8',
  date: 'Mon, 05 Jun 2017 07:51:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"082d9442-b628-4792-878c-64a41eaa88f4\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"877f0d98-99b0-4765-a40a-afff24c33349\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"082d9442-b628-4792-878c-64a41eaa88f4\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1375',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"082d9442-b628-4792-878c-64a41eaa88f4"',
  'x-ms-request-id': 'aafe75c6-0b5f-4667-afc3-49f1659033dd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '1528dd89-87fb-433c-86a1-356c5c5523a8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170605T075109Z:1528dd89-87fb-433c-86a1-356c5c5523a8',
  date: 'Mon, 05 Jun 2017 07:51:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"95045ca6-bff5-4f68-8f4b-625cd3e1be05\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"877f0d98-99b0-4765-a40a-afff24c33349\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"95045ca6-bff5-4f68-8f4b-625cd3e1be05\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"inboundNatPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolsDefaultName\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": [\r\n      {\r\n        \"name\": \"inboundNatPoolsDefaultName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolsDefaultName\",\r\n        \"etag\": \"W/\\\"95045ca6-bff5-4f68-8f4b-625cd3e1be05\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendPortRangeStart\": 1,\r\n          \"frontendPortRangeEnd\": 65534,\r\n          \"backendPort\": 80,\r\n          \"protocol\": \"Tcp\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2524',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c984930d-3991-41ea-9143-80fb41218787',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/c984930d-3991-41ea-9143-80fb41218787?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '922b23bc-83ad-42b4-95d1-fbe903c0659f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170605T075110Z:922b23bc-83ad-42b4-95d1-fbe903c0659f',
  date: 'Mon, 05 Jun 2017 07:51:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"95045ca6-bff5-4f68-8f4b-625cd3e1be05\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"877f0d98-99b0-4765-a40a-afff24c33349\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"95045ca6-bff5-4f68-8f4b-625cd3e1be05\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"inboundNatPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolsDefaultName\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": [\r\n      {\r\n        \"name\": \"inboundNatPoolsDefaultName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolsDefaultName\",\r\n        \"etag\": \"W/\\\"95045ca6-bff5-4f68-8f4b-625cd3e1be05\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendPortRangeStart\": 1,\r\n          \"frontendPortRangeEnd\": 65534,\r\n          \"backendPort\": 80,\r\n          \"protocol\": \"Tcp\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2524',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c984930d-3991-41ea-9143-80fb41218787',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/c984930d-3991-41ea-9143-80fb41218787?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '922b23bc-83ad-42b4-95d1-fbe903c0659f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170605T075110Z:922b23bc-83ad-42b4-95d1-fbe903c0659f',
  date: 'Mon, 05 Jun 2017 07:51:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"95045ca6-bff5-4f68-8f4b-625cd3e1be05\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"877f0d98-99b0-4765-a40a-afff24c33349\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"95045ca6-bff5-4f68-8f4b-625cd3e1be05\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"inboundNatPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolsDefaultName\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": [\r\n      {\r\n        \"name\": \"inboundNatPoolsDefaultName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolsDefaultName\",\r\n        \"etag\": \"W/\\\"95045ca6-bff5-4f68-8f4b-625cd3e1be05\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendPortRangeStart\": 1,\r\n          \"frontendPortRangeEnd\": 65534,\r\n          \"backendPort\": 80,\r\n          \"protocol\": \"Tcp\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2524',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"95045ca6-bff5-4f68-8f4b-625cd3e1be05"',
  'x-ms-request-id': '1b0ae18f-2e54-4478-b38d-3f61022b9685',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '555ee4ba-987d-42ea-bfe8-e2fbcd231427',
  'x-ms-routing-request-id': 'WESTEUROPE:20170605T075110Z:555ee4ba-987d-42ea-bfe8-e2fbcd231427',
  date: 'Mon, 05 Jun 2017 07:51:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"95045ca6-bff5-4f68-8f4b-625cd3e1be05\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"877f0d98-99b0-4765-a40a-afff24c33349\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"95045ca6-bff5-4f68-8f4b-625cd3e1be05\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"inboundNatPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolsDefaultName\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": [\r\n      {\r\n        \"name\": \"inboundNatPoolsDefaultName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolsDefaultName\",\r\n        \"etag\": \"W/\\\"95045ca6-bff5-4f68-8f4b-625cd3e1be05\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendPortRangeStart\": 1,\r\n          \"frontendPortRangeEnd\": 65534,\r\n          \"backendPort\": 80,\r\n          \"protocol\": \"Tcp\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2524',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"95045ca6-bff5-4f68-8f4b-625cd3e1be05"',
  'x-ms-request-id': '1b0ae18f-2e54-4478-b38d-3f61022b9685',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '555ee4ba-987d-42ea-bfe8-e2fbcd231427',
  'x-ms-routing-request-id': 'WESTEUROPE:20170605T075110Z:555ee4ba-987d-42ea-bfe8-e2fbcd231427',
  date: 'Mon, 05 Jun 2017 07:51:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"95045ca6-bff5-4f68-8f4b-625cd3e1be05\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"877f0d98-99b0-4765-a40a-afff24c33349\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"95045ca6-bff5-4f68-8f4b-625cd3e1be05\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"inboundNatPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolsDefaultName\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": [\r\n      {\r\n        \"name\": \"inboundNatPoolsDefaultName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolsDefaultName\",\r\n        \"etag\": \"W/\\\"95045ca6-bff5-4f68-8f4b-625cd3e1be05\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendPortRangeStart\": 1,\r\n          \"frontendPortRangeEnd\": 65534,\r\n          \"backendPort\": 80,\r\n          \"protocol\": \"Tcp\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2524',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"95045ca6-bff5-4f68-8f4b-625cd3e1be05"',
  'x-ms-request-id': '5cbfc83c-d24f-449d-9cca-981318d4320c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '17b56f55-8e9d-46eb-9c6d-6efd47f306b9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170605T075112Z:17b56f55-8e9d-46eb-9c6d-6efd47f306b9',
  date: 'Mon, 05 Jun 2017 07:51:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"95045ca6-bff5-4f68-8f4b-625cd3e1be05\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"877f0d98-99b0-4765-a40a-afff24c33349\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"95045ca6-bff5-4f68-8f4b-625cd3e1be05\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"inboundNatPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolsDefaultName\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": [\r\n      {\r\n        \"name\": \"inboundNatPoolsDefaultName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/inboundNatPools/inboundNatPoolsDefaultName\",\r\n        \"etag\": \"W/\\\"95045ca6-bff5-4f68-8f4b-625cd3e1be05\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendPortRangeStart\": 1,\r\n          \"frontendPortRangeEnd\": 65534,\r\n          \"backendPort\": 80,\r\n          \"protocol\": \"Tcp\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2524',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"95045ca6-bff5-4f68-8f4b-625cd3e1be05"',
  'x-ms-request-id': '5cbfc83c-d24f-449d-9cca-981318d4320c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '17b56f55-8e9d-46eb-9c6d-6efd47f306b9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170605T075112Z:17b56f55-8e9d-46eb-9c6d-6efd47f306b9',
  date: 'Mon, 05 Jun 2017 07:51:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"cc3bd225-4f00-4349-8714-3ceec774dacb\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"877f0d98-99b0-4765-a40a-afff24c33349\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"cc3bd225-4f00-4349-8714-3ceec774dacb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1375',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a37875cf-f8d8-4ab4-b0b5-4fd4937b8cdc',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/a37875cf-f8d8-4ab4-b0b5-4fd4937b8cdc?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'a6009a3c-7e71-4424-88c8-cf0f06a38900',
  'x-ms-routing-request-id': 'WESTEUROPE:20170605T075113Z:a6009a3c-7e71-4424-88c8-cf0f06a38900',
  date: 'Mon, 05 Jun 2017 07:51:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"cc3bd225-4f00-4349-8714-3ceec774dacb\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"877f0d98-99b0-4765-a40a-afff24c33349\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"cc3bd225-4f00-4349-8714-3ceec774dacb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1375',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a37875cf-f8d8-4ab4-b0b5-4fd4937b8cdc',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/a37875cf-f8d8-4ab4-b0b5-4fd4937b8cdc?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'a6009a3c-7e71-4424-88c8-cf0f06a38900',
  'x-ms-routing-request-id': 'WESTEUROPE:20170605T075113Z:a6009a3c-7e71-4424-88c8-cf0f06a38900',
  date: 'Mon, 05 Jun 2017 07:51:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"cc3bd225-4f00-4349-8714-3ceec774dacb\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"877f0d98-99b0-4765-a40a-afff24c33349\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"cc3bd225-4f00-4349-8714-3ceec774dacb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1375',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"cc3bd225-4f00-4349-8714-3ceec774dacb"',
  'x-ms-request-id': 'f31d8a79-bc00-4445-a772-d6369627c14b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': 'a5d56808-0c5b-4df8-8691-bcfac49b2162',
  'x-ms-routing-request-id': 'WESTEUROPE:20170605T075114Z:a5d56808-0c5b-4df8-8691-bcfac49b2162',
  date: 'Mon, 05 Jun 2017 07:51:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"cc3bd225-4f00-4349-8714-3ceec774dacb\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"877f0d98-99b0-4765-a40a-afff24c33349\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"cc3bd225-4f00-4349-8714-3ceec774dacb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1375',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"cc3bd225-4f00-4349-8714-3ceec774dacb"',
  'x-ms-request-id': 'f31d8a79-bc00-4445-a772-d6369627c14b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': 'a5d56808-0c5b-4df8-8691-bcfac49b2162',
  'x-ms-routing-request-id': 'WESTEUROPE:20170605T075114Z:a5d56808-0c5b-4df8-8691-bcfac49b2162',
  date: 'Mon, 05 Jun 2017 07:51:13 GMT',
  connection: 'close' });
 return result; }]];