// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
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
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname9626285541571304?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:40:48 GMT',
  etag: '"0x8D40DC1973F8077"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ff6d0f99-0001-0009-35aa-3f8c89000000',
  'x-ms-version': '2015-12-11',
  'x-ms-snapshot': '2016-11-16T01:40:55.0873812Z',
  date: 'Wed, 16 Nov 2016 01:40:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname9626285541571304?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:40:48 GMT',
  etag: '"0x8D40DC1973F8077"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ff6d0f99-0001-0009-35aa-3f8c89000000',
  'x-ms-version': '2015-12-11',
  'x-ms-snapshot': '2016-11-16T01:40:55.0873812Z',
  date: 'Wed, 16 Nov 2016 01:40:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname9626285541571304?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:40:48 GMT',
  etag: '"0x8D40DC1973F8077"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '664b34e6-0001-0024-27aa-3f0f49000000',
  'x-ms-version': '2015-12-11',
  'x-ms-snapshot': '2016-11-16T01:40:55.7134828Z',
  date: 'Wed, 16 Nov 2016 01:40:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname9626285541571304?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:40:48 GMT',
  etag: '"0x8D40DC1973F8077"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '664b34e6-0001-0024-27aa-3f0f49000000',
  'x-ms-version': '2015-12-11',
  'x-ms-snapshot': '2016-11-16T01:40:55.7134828Z',
  date: 'Wed, 16 Nov 2016 01:40:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname9626285541571304?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:40:48 GMT',
  etag: '"0x8D40DC1973F8077"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '896baef3-0001-0019-3caa-3fba6f000000',
  'x-ms-version': '2015-12-11',
  'x-ms-snapshot': '2016-11-16T01:40:56.3195781Z',
  date: 'Wed, 16 Nov 2016 01:40:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname9626285541571304?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:40:48 GMT',
  etag: '"0x8D40DC1973F8077"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '896baef3-0001-0019-3caa-3fba6f000000',
  'x-ms-version': '2015-12-11',
  'x-ms-snapshot': '2016-11-16T01:40:56.3195781Z',
  date: 'Wed, 16 Nov 2016 01:40:55 GMT',
  connection: 'close' });
 return result; }]];