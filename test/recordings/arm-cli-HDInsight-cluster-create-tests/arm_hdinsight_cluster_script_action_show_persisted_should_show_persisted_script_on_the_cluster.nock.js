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
  process.env['AZURE_ARM_HDI_TEST_LOCATION'] = 'westeurope';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestRgHDInsightClusterCreate5990/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate8208/scriptActions?api-version=2015-03-01-preview')
  .reply(200, "{\"value\":[{\"name\":\"testscriptname\",\"uri\":\"https://hdiconfigactions.blob.core.windows.net/linuxsampleconfigaction/sample.sh\",\"parameters\":\"\",\"roles\":[\"headnode\",\"workernode\"],\"applicationName\":null}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'eea6b2d4-ed26-4f10-a17b-03f17ae75fc7',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '07d6bf2b-67fc-4d7e-8870-177d5a0ef602',
  'x-ms-routing-request-id': 'WESTEUROPE:20160905T085303Z:07d6bf2b-67fc-4d7e-8870-177d5a0ef602',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Sep 2016 08:53:02 GMT' });
 return result; }]];