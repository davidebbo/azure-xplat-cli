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
nock('http://login.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/common/oauth2/token', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1430136561\",\"not_before\":\"1430132661\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDMwMTMyNjYxLCJuYmYiOjE0MzAxMzI2NjEsImV4cCI6MTQzMDEzNjU2MSwidmVyIjoiMS4wIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3Iiwib2lkIjoiYzA3MjA3YTUtNWUzNi00NzcxLTgwMmUtMGZiYzMzOTNiYjhlIiwidXBuIjoidi1zcmViYW5AbWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzM0ZGRjhENzVDNzk0Iiwic3ViIjoiUGIzbnRtN0Y5R3JGSmVDSVQzT0VXT2cwZ0xJSV9WVk4tMjUwRThZanhXVSIsImdpdmVuX25hbWUiOiJTcmVla2FudGgiLCJmYW1pbHlfbmFtZSI6IkJhbmRhcnUiLCJuYW1lIjoiU3JlZWthbnRoIEJhbmRhcnUgKEJSSUxMSU8gTExDKSIsImFtciI6WyJwd2QiXSwiZ3JvdXBzIjpbImNjOWY4YTZjLWU5YzEtNGUzNC05ZWEwLTJjMTUxZGZhNjNmYiIsIjdjOGFjYjRjLWRhM2UtNDc4ZS1hYTkyLWVjMmZkMzU4ZjkyZCIsIjE1ODJhMTEyLTI2MGQtNGQxNy1hMzUxLTRjMjcyNDE0ZDBjNSIsImNmOWU2ZTYyLTczNGQtNDgxYS1hMTJhLTNkYzQ3NzZlZGNkYiIsIjBkODY0Njc2LTdmNTUtNDY5NC05MGYyLTViNzVlYjc3YjM0MiIsImY0NDQ0ZGFlLTRiY2UtNDAyZi1iNTRiLWYxMjQ2MWEzNmJiYyIsIjQ5MTk4YTc2LTE3ZTUtNDI0OS1iOTU3LWRjNzhlMThhNWE3NyIsIjM0MGZmN2EzLWIxYzMtNGEyMS1iMzQ5LWEzYzVkZGRkMGQ3MyIsImU3NmFiMzFlLWRkNTgtNDBlMi1hN2MxLTNlYmIwMjkyMTIxMSIsIjFjYjdlNWEwLWE3ODctNGNjOS04ZWNlLThhZWFjNGRlNjRhMSIsIjFjZDA1YzcwLWE2NDMtNDZmMC1iYjkxLTY0OGE1MGJiZDRiYyIsImEzNDY5ZDVkLTg1M2EtNDkyYi05NjVmLWZlZDdhYzI4NTk1YSIsIjdkYjNlOTYzLTAyNGItNGU0NS1hZWQ3LTU0YzAzMDBmMWNhNiIsImE3MTAyNjhkLTUxYTktNDQ0Ny1iZjIwLTVjNDI4ZmQ3MDQ3YyIsIjM1MDQxMWQ4LTY1YzktNDM4Zi1hMWFmLWNlOTA2MDZkYzkxNCIsIjZjZWQyZmQ1LTkzMTAtNDdmNy1iNjBjLTUyN2NlOWI3NzFlZSIsImYwNjU2NTY4LWY1OWMtNDA1Mi05ZjFjLTk5NDIxNjVmNTdkYSIsIjJjYzE4NzVlLWUzZmItNDFlYS04MzcyLWI1NjkwZThjOTQyMSIsIjZlZGFmNDQwLTZmOTQtNDY5Ni04OTQ5LWI2ZDRmZWM3MDkzMCIsIjFhNjEyZjkxLWI5ZjAtNGIyZS1hNGQ4LWRmMzJjZjk4ODdlZSIsIjNjNGZjZTQ2LTUzYzktNDlmNy05YmNjLWU5OTdkYzU2OGMwOSIsIjIwNjUxMzVkLTUxNjUtNDFkNi05Mjc3LThlMTQ5ZmMzM2VmOCIsIjBjY2ZkNzA1LTM1MTktNDU1OC05NDc0LWNiOTQzNmRhMGU4ZiIsImRkNWE3ZjlmLTQ0MTAtNDQ3MC1iNWExLThlMjAwZmM3NDA5ZSIsIjAzNTNhNTAzLWNiOTAtNDAxYS1iN2ZjLTA2YjY1ZTFhNDJiNiIsIjgwYTFmNDdiLWI5ZDUtNDZlYi04ZjEzLTEzMGI5OThmZDc4ZSIsIjA2ZDYwMjEzLWVhNTEtNDQyYS05Y2EwLTQ2ZTdkNGNhOGJkYyIsImRlMTY0NTBkLWRkODMtNDA1Ny04YmRiLTk3ZmZiMjJiZjNlZSJdLCJ1bmlxdWVfbmFtZSI6InYtc3JlYmFuQG1pY3Jvc29mdC5jb20iLCJhcHBpZCI6IjA0YjA3Nzk1LThkZGItNDYxYS1iYmVlLTAyZjllMWJmN2I0NiIsImFwcGlkYWNyIjoiMCIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsImFjciI6IjEifQ.WhvaGximqRdG79QicJNOFhrVjPSm5zfCVMvymVCDMDLl_cMutnnblRILrz-dZMzzStiN-oheHE7968TOwI99K-WV55Izj6qFHmTdsF9sD8FzuAXN2FSgzQRWje9o9flvlaY6uJe96MWxqiLEbKtlfDa1J7PUqv_4lIVOnGNRgyGbFZA6Y_hP8rXFYmmM8f_e0JRvM06YASjLn_ZAku5LaM6kU2wGIKk2szyfeZ546W9utYuNxHObVF2a72mCtGFZJCahSzBpPf6_0KmIvjEoNtwiOMTGcm82H_tNlY4TirxNJEpY-T2aSkVWyv10Sx5qEpxYLj2QcXpdefyTaa88iA\",\"refresh_token\":\"AAABAAAAvPM1KaPlrEqdFSBzjqfTGMAKVzzdtE7wj_YGMYcCs1AQxI8Y1gMVsc4wm6Z6IvwJfqIswFzc8JvNCQlgJ1MDmhTAFlreb1Q2Na4oYvdrV-3JFU1vUmYgpu1QpSIZ93lY2Xv5VLLN1QyVmPbNKPAh22ucAQyrRlVbsaocelRR-VBGGScaT1etQDeIM0gvZEf0iHRHZN_joxmpRumJN5EVGiFU1dFr0Q3LThuZ4Ig2fOhyzbt9fpVZgFkqjh8GxOJmE1XgkNCi5DciMV2CyN8lNGnI4LQA9qKz8QbEWdJnEUKzY09PVN3JrWADux0GQgshO2f_ASwWwPvvd7Es3E1f4IWMShL78MAcyweBrpYoI9r02_E_OQLC0zUAajVjKBQAnQQeYDIDCjnNhwakrD7v5CQZVHJ1WkxZtuntWK7IbxGMULkSqadwU8_SlPd0uKuNVZUtrb3DEyDQqKpZZ98CymirQkkQUVVAV-WRsDYoCxTZ3-doHe9cfL58ljI33Rn43QbmBScnOXo0yBhbrxaXIoYRlRpMwAjr4z6Zv1nV10EgAA\",\"scope\":\"user_impersonation\",\"pwd_exp\":\"31627459\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '5636d21d-f5a5-4c94-a267-78c23e5f0fb3',
  'client-request-id': '6cb563ec-38bd-4ea4-aa26-56f0974b51d8',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_7',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 27 Apr 2015 11:09:20 GMT',
  connection: 'close',
  'content-length': '3572' });
 return result; },
function (nock) { 
var result = 
nock('https://login.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/common/oauth2/token', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1430136561\",\"not_before\":\"1430132661\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDMwMTMyNjYxLCJuYmYiOjE0MzAxMzI2NjEsImV4cCI6MTQzMDEzNjU2MSwidmVyIjoiMS4wIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3Iiwib2lkIjoiYzA3MjA3YTUtNWUzNi00NzcxLTgwMmUtMGZiYzMzOTNiYjhlIiwidXBuIjoidi1zcmViYW5AbWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzM0ZGRjhENzVDNzk0Iiwic3ViIjoiUGIzbnRtN0Y5R3JGSmVDSVQzT0VXT2cwZ0xJSV9WVk4tMjUwRThZanhXVSIsImdpdmVuX25hbWUiOiJTcmVla2FudGgiLCJmYW1pbHlfbmFtZSI6IkJhbmRhcnUiLCJuYW1lIjoiU3JlZWthbnRoIEJhbmRhcnUgKEJSSUxMSU8gTExDKSIsImFtciI6WyJwd2QiXSwiZ3JvdXBzIjpbImNjOWY4YTZjLWU5YzEtNGUzNC05ZWEwLTJjMTUxZGZhNjNmYiIsIjdjOGFjYjRjLWRhM2UtNDc4ZS1hYTkyLWVjMmZkMzU4ZjkyZCIsIjE1ODJhMTEyLTI2MGQtNGQxNy1hMzUxLTRjMjcyNDE0ZDBjNSIsImNmOWU2ZTYyLTczNGQtNDgxYS1hMTJhLTNkYzQ3NzZlZGNkYiIsIjBkODY0Njc2LTdmNTUtNDY5NC05MGYyLTViNzVlYjc3YjM0MiIsImY0NDQ0ZGFlLTRiY2UtNDAyZi1iNTRiLWYxMjQ2MWEzNmJiYyIsIjQ5MTk4YTc2LTE3ZTUtNDI0OS1iOTU3LWRjNzhlMThhNWE3NyIsIjM0MGZmN2EzLWIxYzMtNGEyMS1iMzQ5LWEzYzVkZGRkMGQ3MyIsImU3NmFiMzFlLWRkNTgtNDBlMi1hN2MxLTNlYmIwMjkyMTIxMSIsIjFjYjdlNWEwLWE3ODctNGNjOS04ZWNlLThhZWFjNGRlNjRhMSIsIjFjZDA1YzcwLWE2NDMtNDZmMC1iYjkxLTY0OGE1MGJiZDRiYyIsImEzNDY5ZDVkLTg1M2EtNDkyYi05NjVmLWZlZDdhYzI4NTk1YSIsIjdkYjNlOTYzLTAyNGItNGU0NS1hZWQ3LTU0YzAzMDBmMWNhNiIsImE3MTAyNjhkLTUxYTktNDQ0Ny1iZjIwLTVjNDI4ZmQ3MDQ3YyIsIjM1MDQxMWQ4LTY1YzktNDM4Zi1hMWFmLWNlOTA2MDZkYzkxNCIsIjZjZWQyZmQ1LTkzMTAtNDdmNy1iNjBjLTUyN2NlOWI3NzFlZSIsImYwNjU2NTY4LWY1OWMtNDA1Mi05ZjFjLTk5NDIxNjVmNTdkYSIsIjJjYzE4NzVlLWUzZmItNDFlYS04MzcyLWI1NjkwZThjOTQyMSIsIjZlZGFmNDQwLTZmOTQtNDY5Ni04OTQ5LWI2ZDRmZWM3MDkzMCIsIjFhNjEyZjkxLWI5ZjAtNGIyZS1hNGQ4LWRmMzJjZjk4ODdlZSIsIjNjNGZjZTQ2LTUzYzktNDlmNy05YmNjLWU5OTdkYzU2OGMwOSIsIjIwNjUxMzVkLTUxNjUtNDFkNi05Mjc3LThlMTQ5ZmMzM2VmOCIsIjBjY2ZkNzA1LTM1MTktNDU1OC05NDc0LWNiOTQzNmRhMGU4ZiIsImRkNWE3ZjlmLTQ0MTAtNDQ3MC1iNWExLThlMjAwZmM3NDA5ZSIsIjAzNTNhNTAzLWNiOTAtNDAxYS1iN2ZjLTA2YjY1ZTFhNDJiNiIsIjgwYTFmNDdiLWI5ZDUtNDZlYi04ZjEzLTEzMGI5OThmZDc4ZSIsIjA2ZDYwMjEzLWVhNTEtNDQyYS05Y2EwLTQ2ZTdkNGNhOGJkYyIsImRlMTY0NTBkLWRkODMtNDA1Ny04YmRiLTk3ZmZiMjJiZjNlZSJdLCJ1bmlxdWVfbmFtZSI6InYtc3JlYmFuQG1pY3Jvc29mdC5jb20iLCJhcHBpZCI6IjA0YjA3Nzk1LThkZGItNDYxYS1iYmVlLTAyZjllMWJmN2I0NiIsImFwcGlkYWNyIjoiMCIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsImFjciI6IjEifQ.WhvaGximqRdG79QicJNOFhrVjPSm5zfCVMvymVCDMDLl_cMutnnblRILrz-dZMzzStiN-oheHE7968TOwI99K-WV55Izj6qFHmTdsF9sD8FzuAXN2FSgzQRWje9o9flvlaY6uJe96MWxqiLEbKtlfDa1J7PUqv_4lIVOnGNRgyGbFZA6Y_hP8rXFYmmM8f_e0JRvM06YASjLn_ZAku5LaM6kU2wGIKk2szyfeZ546W9utYuNxHObVF2a72mCtGFZJCahSzBpPf6_0KmIvjEoNtwiOMTGcm82H_tNlY4TirxNJEpY-T2aSkVWyv10Sx5qEpxYLj2QcXpdefyTaa88iA\",\"refresh_token\":\"AAABAAAAvPM1KaPlrEqdFSBzjqfTGMAKVzzdtE7wj_YGMYcCs1AQxI8Y1gMVsc4wm6Z6IvwJfqIswFzc8JvNCQlgJ1MDmhTAFlreb1Q2Na4oYvdrV-3JFU1vUmYgpu1QpSIZ93lY2Xv5VLLN1QyVmPbNKPAh22ucAQyrRlVbsaocelRR-VBGGScaT1etQDeIM0gvZEf0iHRHZN_joxmpRumJN5EVGiFU1dFr0Q3LThuZ4Ig2fOhyzbt9fpVZgFkqjh8GxOJmE1XgkNCi5DciMV2CyN8lNGnI4LQA9qKz8QbEWdJnEUKzY09PVN3JrWADux0GQgshO2f_ASwWwPvvd7Es3E1f4IWMShL78MAcyweBrpYoI9r02_E_OQLC0zUAajVjKBQAnQQeYDIDCjnNhwakrD7v5CQZVHJ1WkxZtuntWK7IbxGMULkSqadwU8_SlPd0uKuNVZUtrb3DEyDQqKpZZ98CymirQkkQUVVAV-WRsDYoCxTZ3-doHe9cfL58ljI33Rn43QbmBScnOXo0yBhbrxaXIoYRlRpMwAjr4z6Zv1nV10EgAA\",\"scope\":\"user_impersonation\",\"pwd_exp\":\"31627459\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '5636d21d-f5a5-4c94-a267-78c23e5f0fb3',
  'client-request-id': '6cb563ec-38bd-4ea4-aa26-56f0974b51d8',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_7',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 27 Apr 2015 11:09:20 GMT',
  connection: 'close',
  'content-length': '3572' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/armrestestingpubgrp?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'armrestestingpubgrp' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31933',
  'x-ms-request-id': '74e3088b-7c06-4b94-a622-f2b5c734ddbc',
  'x-ms-correlation-request-id': '74e3088b-7c06-4b94-a622-f2b5c734ddbc',
  'x-ms-routing-request-id': 'EASTASIA:20150427T110921Z:74e3088b-7c06-4b94-a622-f2b5c734ddbc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 11:09:20 GMT',
  connection: 'close',
  'content-length': '111' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/armrestestingpubgrp?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'armrestestingpubgrp' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31933',
  'x-ms-request-id': '74e3088b-7c06-4b94-a622-f2b5c734ddbc',
  'x-ms-correlation-request-id': '74e3088b-7c06-4b94-a622-f2b5c734ddbc',
  'x-ms-routing-request-id': 'EASTASIA:20150427T110921Z:74e3088b-7c06-4b94-a622-f2b5c734ddbc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 11:09:20 GMT',
  connection: 'close',
  'content-length': '111' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/armrestestingpubgrp?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp\",\"name\":\"armrestestingpubgrp\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '201',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1173',
  'x-ms-request-id': 'db361bb7-2ddb-4d84-a65c-205196667e7d',
  'x-ms-correlation-request-id': 'db361bb7-2ddb-4d84-a65c-205196667e7d',
  'x-ms-routing-request-id': 'EASTASIA:20150427T110923Z:db361bb7-2ddb-4d84-a65c-205196667e7d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 11:09:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/armrestestingpubgrp?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp\",\"name\":\"armrestestingpubgrp\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '201',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1173',
  'x-ms-request-id': 'db361bb7-2ddb-4d84-a65c-205196667e7d',
  'x-ms-correlation-request-id': 'db361bb7-2ddb-4d84-a65c-205196667e7d',
  'x-ms-routing-request-id': 'EASTASIA:20150427T110923Z:db361bb7-2ddb-4d84-a65c-205196667e7d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 11:09:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip5044/?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'd5998456-8385-4461-a8b0-85946293f73a',
  'x-ms-correlation-request-id': 'd5998456-8385-4461-a8b0-85946293f73a',
  'x-ms-routing-request-id': 'EASTASIA:20150427T110925Z:d5998456-8385-4461-a8b0-85946293f73a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 11:09:24 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip5044/?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'd5998456-8385-4461-a8b0-85946293f73a',
  'x-ms-correlation-request-id': 'd5998456-8385-4461-a8b0-85946293f73a',
  'x-ms-routing-request-id': 'EASTASIA:20150427T110925Z:d5998456-8385-4461-a8b0-85946293f73a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 27 Apr 2015 11:09:24 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip5044/?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armpublicip5044\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip5044\",\r\n  \"etag\": \"W/\\\"a9043ce5-91f4-4888-929d-d7ffadcf5252\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip5416\",\r\n      \"fqdn\": \"dnstestpubip5416.westus.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '594',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '36f139aa-d23f-45d0-8baf-327829846f83',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/36f139aa-d23f-45d0-8baf-327829846f83?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1177',
  'x-ms-correlation-request-id': '10bf33a8-e240-4018-918d-d3db608804a2',
  'x-ms-routing-request-id': 'EASTASIA:20150427T110931Z:10bf33a8-e240-4018-918d-d3db608804a2',
  date: 'Mon, 27 Apr 2015 11:09:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip5044/?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armpublicip5044\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip5044\",\r\n  \"etag\": \"W/\\\"a9043ce5-91f4-4888-929d-d7ffadcf5252\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip5416\",\r\n      \"fqdn\": \"dnstestpubip5416.westus.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '594',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '36f139aa-d23f-45d0-8baf-327829846f83',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/36f139aa-d23f-45d0-8baf-327829846f83?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1177',
  'x-ms-correlation-request-id': '10bf33a8-e240-4018-918d-d3db608804a2',
  'x-ms-routing-request-id': 'EASTASIA:20150427T110931Z:10bf33a8-e240-4018-918d-d3db608804a2',
  date: 'Mon, 27 Apr 2015 11:09:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/36f139aa-d23f-45d0-8baf-327829846f83?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8ec7aa85-aa8a-44f9-9a78-5db5f22f20b7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31939',
  'x-ms-correlation-request-id': '9de96818-eece-4f47-803c-ba0d9b96d4e6',
  'x-ms-routing-request-id': 'EASTASIA:20150427T110942Z:9de96818-eece-4f47-803c-ba0d9b96d4e6',
  date: 'Mon, 27 Apr 2015 11:09:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/36f139aa-d23f-45d0-8baf-327829846f83?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8ec7aa85-aa8a-44f9-9a78-5db5f22f20b7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31939',
  'x-ms-correlation-request-id': '9de96818-eece-4f47-803c-ba0d9b96d4e6',
  'x-ms-routing-request-id': 'EASTASIA:20150427T110942Z:9de96818-eece-4f47-803c-ba0d9b96d4e6',
  date: 'Mon, 27 Apr 2015 11:09:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip5044/?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicip5044\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip5044\",\r\n  \"etag\": \"W/\\\"73cc9adf-84aa-4468-be2c-c1927fdd42e1\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"ipAddress\": \"104.42.191.243\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip5416\",\r\n      \"fqdn\": \"dnstestpubip5416.westus.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '631',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"73cc9adf-84aa-4468-be2c-c1927fdd42e1"',
  'x-ms-request-id': '1dd04c43-1d91-4cf4-aa4f-7a91ec05b069',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31942',
  'x-ms-correlation-request-id': '23d5b882-90d0-4e8c-994c-46df2aac56ef',
  'x-ms-routing-request-id': 'EASTASIA:20150427T110943Z:23d5b882-90d0-4e8c-994c-46df2aac56ef',
  date: 'Mon, 27 Apr 2015 11:09:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip5044/?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicip5044\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip5044\",\r\n  \"etag\": \"W/\\\"73cc9adf-84aa-4468-be2c-c1927fdd42e1\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"ipAddress\": \"104.42.191.243\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip5416\",\r\n      \"fqdn\": \"dnstestpubip5416.westus.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '631',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"73cc9adf-84aa-4468-be2c-c1927fdd42e1"',
  'x-ms-request-id': '1dd04c43-1d91-4cf4-aa4f-7a91ec05b069',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31942',
  'x-ms-correlation-request-id': '23d5b882-90d0-4e8c-994c-46df2aac56ef',
  'x-ms-routing-request-id': 'EASTASIA:20150427T110943Z:23d5b882-90d0-4e8c-994c-46df2aac56ef',
  date: 'Mon, 27 Apr 2015 11:09:43 GMT',
  connection: 'close' });
 return result; }]];