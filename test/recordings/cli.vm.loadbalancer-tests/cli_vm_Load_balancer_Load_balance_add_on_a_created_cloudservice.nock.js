// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website', 'website'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '1c37430aebbc8a08b4b2517708da546e',
  date: 'Mon, 16 Mar 2015 18:37:58 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices/clitestvmVnet4408/deploymentslots/Production')
  .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>clitestvmVnet4408</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>bcea734a65ce4047a8664bbc52d5e5b0</PrivateID><Status>Running</Status><Label>Y2xpdGVzdHZtVm5ldDQ0MDg=</Label><Url>http://clitestvmvnet4408.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJjbGl0ZXN0dm1WbmV0NDQwOCI+DQogICAgPEluc3RhbmNlcyBjb3VudD0iMSIgLz4NCiAgPC9Sb2xlPg0KPC9TZXJ2aWNlQ29uZmlndXJhdGlvbj4=</Configuration><RoleInstanceList><RoleInstance><RoleName>clitestvmVnet4408</RoleName><InstanceName>clitestvmVnet4408</InstanceName><InstanceStatus>RoleStateUnknown</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Small</InstanceSize><InstanceStateDetails/><IpAddress>10.32.0.4</IpAddress><PowerState>Starting</PowerState><GuestAgentStatus><ProtocolVersion>1.0</ProtocolVersion><Timestamp>2015-03-16T18:37:13Z</Timestamp><GuestAgentVersion>Unknown</GuestAgentVersion><Status>NotReady</Status><FormattedMessage><Language>en-US</Language><Message>Status not available for role clitestvmVnet4408.</Message></FormattedMessage></GuestAgentStatus></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>clitestvmVnet4408</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><SubnetNames/></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>clitestvmVnet4408-clitestvmVnet4408-0-201503161836450963</DiskName><MediaLink>https://clitestvm523814264783346.blob.core.windows.net/vhd-store/clitestvmVnet4408-bb7774495c75bfe4.vhd</MediaLink><SourceImageName>0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</SourceImageName><OS>Linux</OS><IOType>Standard</IOType></OSVirtualHardDisk><RoleSize>Small</RoleSize><ProvisionGuestAgent>true</ProvisionGuestAgent></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><VirtualNetworkName>testvnet2708</VirtualNetworkName><CreatedTime>2015-03-16T18:36:42Z</CreatedTime><LastModifiedTime>2015-03-16T18:37:13Z</LastModifiedTime><ExtendedProperties/><VirtualIPs><VirtualIP><Address>23.101.193.162</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>__PseudoBackEndContractVip</Name></VirtualIP></VirtualIPs><InternalDnsSuffix>clitestvmVnet4408.d9.internal.cloudapp.net</InternalDnsSuffix><LoadBalancers/><VirtualNetworkId>b4da6e93-2c7e-4704-ac50-745b138aefd4</VirtualNetworkId></Deployment>", { 'cache-control': 'no-cache',
  'content-length': '3009',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '805e3670ef4a8b77a8580ef6dd6b7687',
  date: 'Mon, 16 Mar 2015 18:37:59 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '20076e6904b587909ff88be6023d2afa',
  date: 'Mon, 16 Mar 2015 18:37:59 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices/clitestvmVnet4408/deployments/clitestvmVnet4408/loadbalancers', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '7d0496c78a738132832368931d654364',
  date: 'Mon, 16 Mar 2015 18:38:00 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'aafa746abe8c8fe5a02c57466db69639',
  date: 'Mon, 16 Mar 2015 18:38:31 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/operations/7d0496c78a738132832368931d654364')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>7d0496c7-8a73-8132-8323-68931d654364</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'fc19c13d25b48542b1c3d8df6fb5316a',
  date: 'Mon, 16 Mar 2015 18:38:31 GMT' });
 return result; }]];