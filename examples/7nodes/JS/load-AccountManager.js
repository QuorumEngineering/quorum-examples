ac = eth.accounts[0];
web3.eth.defaultAccount = ac;
var abi = [{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_orgId","type":"string"},{"name":"_roleId","type":"string"},{"name":"_adminRole","type":"bool"}],"name":"assignAccountRole","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_orgId","type":"string"}],"name":"removeExistingAdmin","outputs":[{"name":"voterUpdate","type":"bool"},{"name":"acct","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_acct","type":"address"}],"name":"getAccountDetails","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNumberOfAccounts","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_acct","type":"address"},{"name":"_orgId","type":"string"}],"name":"validateAccount","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_acct","type":"address"}],"name":"getAccountRole","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_orgId","type":"string"},{"name":"_account","type":"address"},{"name":"_status","type":"uint256"}],"name":"updateAccountStatus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_orgId","type":"string"}],"name":"orgAdminExists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"aIndex","type":"uint256"}],"name":"getAccountDetailsFromIndex","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_orgId","type":"string"},{"name":"_address","type":"address"}],"name":"addNewAdmin","outputs":[{"name":"voterUpdate","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_nwAdminRole","type":"string"},{"name":"_oAdminRole","type":"string"}],"name":"setDefaults","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"revokeAccountRole","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_orgId","type":"string"},{"name":"_roleId","type":"string"},{"name":"_status","type":"uint256"}],"name":"assignAdminRole","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_acct","type":"address"},{"name":"_orgId","type":"string"},{"name":"_ultParent","type":"string"}],"name":"checkOrgAdmin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_permUpgradable","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"},{"indexed":false,"name":"_orgId","type":"string"},{"indexed":false,"name":"_roleId","type":"string"},{"indexed":false,"name":"_orgAdmin","type":"bool"},{"indexed":false,"name":"_status","type":"uint256"}],"name":"AccountAccessModified","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"},{"indexed":false,"name":"_orgId","type":"string"},{"indexed":false,"name":"_roleId","type":"string"},{"indexed":false,"name":"_orgAdmin","type":"bool"}],"name":"AccountAccessRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"},{"indexed":false,"name":"_orgId","type":"string"},{"indexed":false,"name":"_status","type":"uint256"}],"name":"AccountStatusChanged","type":"event"}];
var a = web3.eth.contract(abi).at("0x9d13c6d3afe1721beef56b55d303b09e021e27ab");
