var novastl = require('novastl')('eu-central-1')
    , config = require('./config')

var vpc = novastl.Vpc({
    cidr: config.vpcCidrBlock,
    publicSubnets: config.publicSubnets,
    privateSubnets: config.privateSubnets
});

console.log(vpc.toResourceGroup().toJson());











