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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/invalidDestinationAddressPrefixName?api-version=2017-03-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/invalidDestinationAddressPrefixName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '314',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '33a752af-28f6-45b0-9f68-0a3f3de53580',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '5149dd97-be0b-4c93-a415-d724f3134ab1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170605T071615Z:5149dd97-be0b-4c93-a415-d724f3134ab1',
  date: 'Mon, 05 Jun 2017 07:16:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/invalidDestinationAddressPrefixName?api-version=2017-03-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/invalidDestinationAddressPrefixName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '314',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '33a752af-28f6-45b0-9f68-0a3f3de53580',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '5149dd97-be0b-4c93-a415-d724f3134ab1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170605T071615Z:5149dd97-be0b-4c93-a415-d724f3134ab1',
  date: 'Mon, 05 Jun 2017 07:16:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/invalidDestinationAddressPrefixName?api-version=2017-03-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"SecurityRuleInvalidAddressPrefix\",\r\n    \"message\": \"Security rule /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/invalidDestinationAddressPrefixName has invalid Address prefix. Value provided: 10.0.0.0/42\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '388',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '157803fb-b15e-4df1-ae90-4e938904ca31',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'd2ec915a-7148-4eec-b6cc-cfb7cc5be382',
  'x-ms-routing-request-id': 'WESTEUROPE:20170605T071617Z:d2ec915a-7148-4eec-b6cc-cfb7cc5be382',
  date: 'Mon, 05 Jun 2017 07:16:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/invalidDestinationAddressPrefixName?api-version=2017-03-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"SecurityRuleInvalidAddressPrefix\",\r\n    \"message\": \"Security rule /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/invalidDestinationAddressPrefixName has invalid Address prefix. Value provided: 10.0.0.0/42\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '388',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '157803fb-b15e-4df1-ae90-4e938904ca31',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'd2ec915a-7148-4eec-b6cc-cfb7cc5be382',
  'x-ms-routing-request-id': 'WESTEUROPE:20170605T071617Z:d2ec915a-7148-4eec-b6cc-cfb7cc5be382',
  date: 'Mon, 05 Jun 2017 07:16:16 GMT',
  connection: 'close' });
 return result; }]];