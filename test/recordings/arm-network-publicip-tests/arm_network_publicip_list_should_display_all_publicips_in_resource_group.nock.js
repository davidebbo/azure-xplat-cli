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
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses?api-version=2016-09-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-ip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/test-ip\",\r\n      \"etag\": \"W/\\\"054cf84e-f78f-478a-bcb2-3be8be5d110e\\\"\",\r\n      \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n      \"location\": \"westus\",\r\n      \"tags\": {\r\n        \"tag1\": \"aaa\",\r\n        \"tag2\": \"bbb\",\r\n        \"tag3\": \"ccc\"\r\n      },\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"82c1b2fa-7f26-4ac8-b943-e5e7f1350cfd\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 15,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"bar-domain6869\",\r\n          \"fqdn\": \"bar-domain6869.westus.validation.cloudapp.azure.com\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '889',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b0bf85b9-6d37-4127-91c9-e327229afd5d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'e49bd908-1082-41b7-91df-8abd39b2ccee',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T182705Z:e49bd908-1082-41b7-91df-8abd39b2ccee',
  date: 'Wed, 07 Dec 2016 18:27:04 GMT' });
 return result; }]];