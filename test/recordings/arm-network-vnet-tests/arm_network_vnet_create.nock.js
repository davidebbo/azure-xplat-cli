// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreatevnet3558?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreatevnet3558' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31948',
  'x-ms-request-id': 'e93f8562-38b4-48de-bf20-c54148171321',
  'x-ms-correlation-request-id': 'e93f8562-38b4-48de-bf20-c54148171321',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090853Z:e93f8562-38b4-48de-bf20-c54148171321',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 09:08:52 GMT',
  connection: 'close',
  'content-length': '116' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreatevnet3558?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreatevnet3558' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31948',
  'x-ms-request-id': 'e93f8562-38b4-48de-bf20-c54148171321',
  'x-ms-correlation-request-id': 'e93f8562-38b4-48de-bf20-c54148171321',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090853Z:e93f8562-38b4-48de-bf20-c54148171321',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 09:08:52 GMT',
  connection: 'close',
  'content-length': '116' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreatevnet3558?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet3558\",\"name\":\"xplatTestGCreatevnet3558\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '211',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1186',
  'x-ms-request-id': '99557875-d51b-4968-a5d0-f007a3838cbc',
  'x-ms-correlation-request-id': '99557875-d51b-4968-a5d0-f007a3838cbc',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090856Z:99557875-d51b-4968-a5d0-f007a3838cbc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 09:08:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreatevnet3558?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet3558\",\"name\":\"xplatTestGCreatevnet3558\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '211',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1186',
  'x-ms-request-id': '99557875-d51b-4968-a5d0-f007a3838cbc',
  'x-ms-correlation-request-id': '99557875-d51b-4968-a5d0-f007a3838cbc',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090856Z:99557875-d51b-4968-a5d0-f007a3838cbc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 09:08:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet3558/providers/Microsoft.Network/virtualnetworks/xplatTestVnet8173?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '3b11365b-4679-4690-862e-4474ce3e9f2d',
  'x-ms-correlation-request-id': '3b11365b-4679-4690-862e-4474ce3e9f2d',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090857Z:3b11365b-4679-4690-862e-4474ce3e9f2d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 09:08:56 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet3558/providers/Microsoft.Network/virtualnetworks/xplatTestVnet8173?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '3b11365b-4679-4690-862e-4474ce3e9f2d',
  'x-ms-correlation-request-id': '3b11365b-4679-4690-862e-4474ce3e9f2d',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090857Z:3b11365b-4679-4690-862e-4474ce3e9f2d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 09:08:56 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet3558/providers/Microsoft.Network/virtualnetworks/xplatTestVnet8173?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"xplatTestVnet8173\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet3558/providers/Microsoft.Network/virtualNetworks/xplatTestVnet8173\",\r\n  \"etag\": \"W/\\\"ad9cd3ff-6178-4ccc-bf4c-fa4429e9f75c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '581',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '5c105f3d-3d13-4053-9106-c1cddee7f6f0',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/5c105f3d-3d13-4053-9106-c1cddee7f6f0?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1190',
  'x-ms-correlation-request-id': '55857f79-7d85-45da-8256-71a03f1f5fa9',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090903Z:55857f79-7d85-45da-8256-71a03f1f5fa9',
  date: 'Mon, 27 Apr 2015 09:09:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet3558/providers/Microsoft.Network/virtualnetworks/xplatTestVnet8173?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"xplatTestVnet8173\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet3558/providers/Microsoft.Network/virtualNetworks/xplatTestVnet8173\",\r\n  \"etag\": \"W/\\\"ad9cd3ff-6178-4ccc-bf4c-fa4429e9f75c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '581',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '5c105f3d-3d13-4053-9106-c1cddee7f6f0',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/5c105f3d-3d13-4053-9106-c1cddee7f6f0?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1190',
  'x-ms-correlation-request-id': '55857f79-7d85-45da-8256-71a03f1f5fa9',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090903Z:55857f79-7d85-45da-8256-71a03f1f5fa9',
  date: 'Mon, 27 Apr 2015 09:09:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/5c105f3d-3d13-4053-9106-c1cddee7f6f0?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8d128a39-dee4-44ae-9c0b-b742c2c97f49',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31963',
  'x-ms-correlation-request-id': '0a4c4440-bdd8-4d30-b9ff-a0b024537e58',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090914Z:0a4c4440-bdd8-4d30-b9ff-a0b024537e58',
  date: 'Mon, 27 Apr 2015 09:09:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/5c105f3d-3d13-4053-9106-c1cddee7f6f0?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8d128a39-dee4-44ae-9c0b-b742c2c97f49',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31963',
  'x-ms-correlation-request-id': '0a4c4440-bdd8-4d30-b9ff-a0b024537e58',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090914Z:0a4c4440-bdd8-4d30-b9ff-a0b024537e58',
  date: 'Mon, 27 Apr 2015 09:09:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet3558/providers/Microsoft.Network/virtualnetworks/xplatTestVnet8173?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet8173\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet3558/providers/Microsoft.Network/virtualNetworks/xplatTestVnet8173\",\r\n  \"etag\": \"W/\\\"a0faf883-585c-42da-974e-c0c30031f334\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '582',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"a0faf883-585c-42da-974e-c0c30031f334"',
  'x-ms-request-id': 'e18e64dc-20ff-4f8d-987a-2d1b6f85883d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31949',
  'x-ms-correlation-request-id': 'af41ce48-b9f7-4b0a-98e4-d592e2b89809',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090915Z:af41ce48-b9f7-4b0a-98e4-d592e2b89809',
  date: 'Mon, 27 Apr 2015 09:09:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet3558/providers/Microsoft.Network/virtualnetworks/xplatTestVnet8173?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet8173\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet3558/providers/Microsoft.Network/virtualNetworks/xplatTestVnet8173\",\r\n  \"etag\": \"W/\\\"a0faf883-585c-42da-974e-c0c30031f334\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '582',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"a0faf883-585c-42da-974e-c0c30031f334"',
  'x-ms-request-id': 'e18e64dc-20ff-4f8d-987a-2d1b6f85883d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31949',
  'x-ms-correlation-request-id': 'af41ce48-b9f7-4b0a-98e4-d592e2b89809',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090915Z:af41ce48-b9f7-4b0a-98e4-d592e2b89809',
  date: 'Mon, 27 Apr 2015 09:09:15 GMT',
  connection: 'close' });
 return result; }]];