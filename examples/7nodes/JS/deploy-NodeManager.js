ac = eth.accounts[0];
web3.eth.defaultAccount = ac;
var abi = [{"constant":false,"inputs":[{"name":"_enodeId","type":"string"},{"name":"_orgId","type":"string"},{"name":"_status","type":"uint256"}],"name":"updateNodeStatus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_enodeId","type":"string"}],"name":"getNodeStatus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"enodeId","type":"string"}],"name":"getNodeDetails","outputs":[{"name":"_orgId","type":"string"},{"name":"_enodeId","type":"string"},{"name":"_nodeStatus","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_enodeId","type":"string"},{"name":"_orgId","type":"string"}],"name":"addOrgNode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_enodeId","type":"string"},{"name":"_orgId","type":"string"}],"name":"approveNode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"nodeIndex","type":"uint256"}],"name":"getNodeDetailsFromIndex","outputs":[{"name":"_orgId","type":"string"},{"name":"_enodeId","type":"string"},{"name":"_nodeStatus","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_enodeId","type":"string"},{"name":"_orgId","type":"string"}],"name":"addNode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNumberOfNodes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_enodeId","type":"string"},{"name":"_orgId","type":"string"}],"name":"addAdminNode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_permUpgradable","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_enodeId","type":"string"},{"indexed":false,"name":"_orgId","type":"string"}],"name":"NodeProposed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_enodeId","type":"string"},{"indexed":false,"name":"_orgId","type":"string"}],"name":"NodeApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_enodeId","type":"string"},{"indexed":false,"name":"_orgId","type":"string"}],"name":"NodeDeactivated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_enodeId","type":"string"},{"indexed":false,"name":"_orgId","type":"string"}],"name":"NodeActivated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_enodeId","type":"string"},{"indexed":false,"name":"_orgId","type":"string"}],"name":"NodeBlacklisted","type":"event"}];
var bytecode = "0x608060405234801561001057600080fd5b506040516020806123168339810180604052602081101561003057600080fd5b505160008054600160a060020a03909216600160a060020a03199092169190911790556122b4806100626000396000f3fe608060405234801561001057600080fd5b50600436106100975760003560e060020a9004806386bc36521161006a57806386bc36521461046557806397c07a9b14610592578063a97a4406146105af578063b81c806a146106dc578063e3b09d84146106e457610097565b80630cc501461461009c578063397eeccb146101605780633f0e0e47146102185780633f5e1a45146103a3575b600080fd5b61015e600480360360608110156100b257600080fd5b8101906020810181356401000000008111156100cd57600080fd5b8201836020820111156100df57600080fd5b8035906020019184600183028401116401000000008311171561010157600080fd5b91939092909160208101903564010000000081111561011f57600080fd5b82018360208201111561013157600080fd5b8035906020019184600183028401116401000000008311171561015357600080fd5b9193509150356107a6565b005b6102066004803603602081101561017657600080fd5b81019060208101813564010000000081111561019157600080fd5b8201836020820111156101a357600080fd5b803590602001918460018302840111640100000000831117156101c557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610e9d945050505050565b60408051918252519081900360200190f35b6102be6004803603602081101561022e57600080fd5b81019060208101813564010000000081111561024957600080fd5b82018360208201111561025b57600080fd5b8035906020019184600183028401116401000000008311171561027d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610f5f945050505050565b604051808060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156103055781810151838201526020016102ed565b50505050905090810190601f1680156103325780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b8381101561036557818101518382015260200161034d565b50505050905090810190601f1680156103925780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b61015e600480360360408110156103b957600080fd5b8101906020810181356401000000008111156103d457600080fd5b8201836020820111156103e657600080fd5b8035906020019184600183028401116401000000008311171561040857600080fd5b91939092909160208101903564010000000081111561042657600080fd5b82018360208201111561043857600080fd5b8035906020019184600183028401116401000000008311171561045a57600080fd5b5090925090506110fb565b61015e6004803603604081101561047b57600080fd5b81019060208101813564010000000081111561049657600080fd5b8201836020820111156104a857600080fd5b803590602001918460018302840111640100000000831117156104ca57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561051d57600080fd5b82018360208201111561052f57600080fd5b8035906020019184600183028401116401000000008311171561055157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611461945050505050565b6102be600480360360208110156105a857600080fd5b5035611822565b61015e600480360360408110156105c557600080fd5b8101906020810181356401000000008111156105e057600080fd5b8201836020820111156105f257600080fd5b8035906020019184600183028401116401000000008311171561061457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561066757600080fd5b82018360208201111561067957600080fd5b8035906020019184600183028401116401000000008311171561069b57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506119b1945050505050565b610206611d41565b61015e600480360360408110156106fa57600080fd5b81019060208101813564010000000081111561071557600080fd5b82018360208201111561072757600080fd5b8035906020019184600183028401116401000000008311171561074957600080fd5b91939092909160208101903564010000000081111561076757600080fd5b82018360208201111561077957600080fd5b8035906020019184600183028401116401000000008311171561079b57600080fd5b509092509050611d48565b6000809054906101000a9004600160a060020a0316600160a060020a0316630e32cf906040518163ffffffff1660e060020a02815260040160206040518083038186803b1580156107f657600080fd5b505afa15801561080a573d6000803e3d6000fd5b505050506040513d602081101561082057600080fd5b5051600160a060020a0316331461083657600080fd5b84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525060405185516002955091935085925060209081019182918401908083835b602083106108a55780518252601f199092019160209182019101610886565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120815260200190815260200160002054600014151515610949576040805160e560020a62461bcd02815260206004820152601860248201527f456e6f6465206973206e6f7420696e20746865206c6973740000000000000000604482015290519081900360640190fd5b6109bc86868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8a01819004810282018101909252888152925088915087908190840183828082843760009201919091525061202292505050565b1515610a12576040805160e560020a62461bcd02815260206004820152601f60248201527f4e6f646520646f6573206e6f742062656c6f6e6720746f20746865206f726700604482015290519081900360640190fd5b8160031480610a215750816004145b80610a2c5750816005145b1515610a82576040805160e560020a62461bcd02815260206004820152601160248201527f696e76616c6964206f7065726174696f6e000000000000000000000000000000604482015290519081900360640190fd5b8160031415610c1457610aca86868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610e9d92505050565b600214610b21576040805160e560020a62461bcd02815260206004820152601660248201527f4f702063616e6e6f7420626520706572666f726d656400000000000000000000604482015290519081900360640190fd5b60036001610b6488888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061213a92505050565b81548110610b6e57fe5b9060005260206000209060030201600201819055507fc6c3720fe673e87bb26e06be713d514278aa94c3939cfe7c64b9bea4d486824a868686866040518080602001806020018381038352878782818152602001925080828437600083820152601f01601f191690910184810383528581526020019050858580828437600083820152604051601f909101601f19169092018290039850909650505050505050a1610e95565b8160041415610da657610c5c86868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610e9d92505050565b600314610cb3576040805160e560020a62461bcd02815260206004820152601660248201527f4f702063616e6e6f7420626520706572666f726d656400000000000000000000604482015290519081900360640190fd5b60026001610cf688888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061213a92505050565b81548110610d0057fe5b9060005260206000209060030201600201819055507f49796be3ca168a59c8ae46c75a36a9bb3a84753d3e12a812f93ae010e783b14f868686866040518080602001806020018381038352878782818152602001925080828437600083820152601f01601f191690910184810383528581526020019050858580828437600083820152604051601f909101601f19169092018290039850909650505050505050a1610e95565b60056001610de988888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061213a92505050565b81548110610df357fe5b9060005260206000209060030201600201819055507f4714623279994517c446c8fb72c3fdaca26434da1e2490d3976fe0cd880cfa7a868686866040518080602001806020018381038352878782818152602001925080828437600083820152601f01601f191690910184810383528581526020019050858580828437600083820152604051601f909101601f19169092018290039850909650505050505050a15b505050505050565b600060026000836040516020018082805190602001908083835b60208310610ed65780518252601f199092019160209182019101610eb7565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528051906020012081526020019081526020016000205460001415610f3057506000610f5a565b6001610f3b8361213a565b81548110610f4557fe5b90600052602060002090600302016002015490505b919050565b606080600080610f6e8561213a565b9050600181815481101515610f7f57fe5b9060005260206000209060030201600101600182815481101515610f9f57fe5b9060005260206000209060030201600001600183815481101515610fbf57fe5b60009182526020918290206002600390920201810154845460408051601f6000196101006001861615020190931694909404918201859004850284018501905280835290928591908301828280156110585780601f1061102d57610100808354040283529160200191611058565b820191906000526020600020905b81548152906001019060200180831161103b57829003601f168201915b5050855460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152959850879450925084019050828280156110e65780601f106110bb576101008083540402835291602001916110e6565b820191906000526020600020905b8154815290600101906020018083116110c957829003601f168201915b50505050509150935093509350509193909250565b6000809054906101000a9004600160a060020a0316600160a060020a0316630e32cf906040518163ffffffff1660e060020a02815260040160206040518083038186803b15801561114b57600080fd5b505afa15801561115f573d6000803e3d6000fd5b505050506040513d602081101561117557600080fd5b5051600160a060020a0316331461118b57600080fd5b83838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525060405185516002955091935085925060209081019182918401908083835b602083106111fa5780518252601f1990920191602091820191016111db565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120815260200190815260200160002054600014151561129d576040805160e560020a62461bcd02815260206004820152601460248201527f456e6f646520697320696e20746865206c697374000000000000000000000000604482015290519081900360640190fd5b60038054600101908190556040516002906000908890889060200180838380828437808301925050509250505060405160208183030381529060405280519060200120815260200190815260200160002081905550600160606040519081016040528087878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505090825250604080516020601f8801819004810282018101909252868152918101919087908790819084018382808284376000920182905250938552505060026020938401525083546001810180865594825290829020835180516003909302909101926113a7928492909101906121c7565b5060208281015180516113c092600185019201906121c7565b50604082015181600201555050507f0413ce00d5de406d9939003416263a7530eaeb13f9d281c8baeba1601def960d858585856040518080602001806020018381038352878782818152602001925080828437600083820152601f01601f191690910184810383528581526020019050858580828437600083820152604051601f909101601f19169092018290039850909650505050505050a15050505050565b6000809054906101000a9004600160a060020a0316600160a060020a0316630e32cf906040518163ffffffff1660e060020a02815260040160206040518083038186803b1580156114b157600080fd5b505afa1580156114c5573d6000803e3d6000fd5b505050506040513d60208110156114db57600080fd5b5051600160a060020a031633146114f157600080fd5b8160026000826040516020018082805190602001908083835b602083106115295780518252601f19909201916020918201910161150a565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052805190602001208152602001908152602001600020546000141515156115cd576040805160e560020a62461bcd02815260206004820152601860248201527f456e6f6465206973206e6f7420696e20746865206c6973740000000000000000604482015290519081900360640190fd5b6115d78383612022565b151561162d576040805160e560020a62461bcd02815260206004820152601f60248201527f4e6f646520646f6573206e6f742062656c6f6e6720746f20746865206f726700604482015290519081900360640190fd5b61163683610e9d565b6001146116775760405160e560020a62461bcd0281526004018080602001828103825260298152602001806122606029913960400191505060405180910390fd5b60006116828461213a565b9050600260018281548110151561169557fe5b9060005260206000209060030201600201819055507f0413ce00d5de406d9939003416263a7530eaeb13f9d281c8baeba1601def960d6001828154811015156116da57fe5b90600052602060002090600302016000016001838154811015156116fa57fe5b90600052602060002090600302016001016040518080602001806020018381038352858181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156117985780601f1061176d57610100808354040283529160200191611798565b820191906000526020600020905b81548152906001019060200180831161177b57829003601f168201915b505083810382528454600260001961010060018416150201909116048082526020909101908590801561180c5780601f106117e15761010080835404028352916020019161180c565b820191906000526020600020905b8154815290600101906020018083116117ef57829003601f168201915b505094505050505060405180910390a150505050565b606080600060018481548110151561183657fe5b906000526020600020906003020160010160018581548110151561185657fe5b906000526020600020906003020160000160018681548110151561187657fe5b60009182526020918290206002600390920201810154845460408051601f60001961010060018616150201909316949094049182018590048502840185019052808352909285919083018282801561190f5780601f106118e45761010080835404028352916020019161190f565b820191906000526020600020905b8154815290600101906020018083116118f257829003601f168201915b5050855460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529598508794509250840190508282801561199d5780601f106119725761010080835404028352916020019161199d565b820191906000526020600020905b81548152906001019060200180831161198057829003601f168201915b505050505091509250925092509193909250565b6000809054906101000a9004600160a060020a0316600160a060020a0316630e32cf906040518163ffffffff1660e060020a02815260040160206040518083038186803b158015611a0157600080fd5b505afa158015611a15573d6000803e3d6000fd5b505050506040513d6020811015611a2b57600080fd5b5051600160a060020a03163314611a4157600080fd5b8160026000826040516020018082805190602001908083835b60208310611a795780518252601f199092019160209182019101611a5a565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052805190602001208152602001908152602001600020546000141515611b1c576040805160e560020a62461bcd02815260206004820152601460248201527f456e6f646520697320696e20746865206c697374000000000000000000000000604482015290519081900360640190fd5b60038054600101908190556040518451600291600091879160209081019182918401908083835b60208310611b625780518252601f199092019160209182019101611b43565b51815160209384036101000a60001901801990921691161790526040805192909401828103601f1901835284528151918101919091208652858101969096525092830160009081209590955550508051606081018252868152808301869052600191810182905281548083018084559290945280518051929491937fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf660039093029290920192611c1592849201906121c7565b506020828101518051611c2e92600185019201906121c7565b50604082015181600201555050507fb1a7eec7dd1a516c3132d6d1f770758b19aa34c3a07c138caf662688b7e3556f8383604051808060200180602001838103835285818151815260200191508051906020019080838360005b83811015611ca0578181015183820152602001611c88565b50505050905090810190601f168015611ccd5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611d00578181015183820152602001611ce8565b50505050905090810190601f168015611d2d5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1505050565b6003545b90565b6000809054906101000a9004600160a060020a0316600160a060020a0316630e32cf906040518163ffffffff1660e060020a02815260040160206040518083038186803b158015611d9857600080fd5b505afa158015611dac573d6000803e3d6000fd5b505050506040513d6020811015611dc257600080fd5b5051600160a060020a03163314611dd857600080fd5b83838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525060405185516002955091935085925060209081019182918401908083835b60208310611e475780518252601f199092019160209182019101611e28565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052805190602001208152602001908152602001600020546000141515611eea576040805160e560020a62461bcd02815260206004820152601460248201527f456e6f646520697320696e20746865206c697374000000000000000000000000604482015290519081900360640190fd5b60038054600101908190556040516002906000908890889060200180838380828437808301925050509250505060405160208183030381529060405280519060200120815260200190815260200160002081905550600160606040519081016040528087878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505090825250604080516020601f880181900481028201810190925286815291810191908790879081908401838280828437600092018290525093855250506002602093840152508354600181018086559482529082902083518051600390930290910192611ff4928492909101906121c7565b50602082810151805161200d92600185019201906121c7565b50604082015181600201555050505050505050565b6000816040516020018082805190602001908083835b602083106120575780518252601f199092019160209182019101612038565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120600161209d8561213a565b815481106120a757fe5b906000526020600020906003020160010160405160200180828054600181600116156101000203166002900480156121165780601f106120f4576101008083540402835291820191612116565b820191906000526020600020905b815481529060010190602001808311612102575b50509150506040516020818303038152906040528051906020012014905092915050565b6000600160026000846040516020018082805190602001908083835b602083106121755780518252601f199092019160209182019101612156565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120815260200190815260200160002054039050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061220857805160ff1916838001178555612235565b82800160010185558215612235579182015b8281111561223557825182559160200191906001019061221a565b50612241929150612245565b5090565b611d4591905b80821115612241576000815560010161224b56fe4e6f6465206e65656420746f20626520696e2050656e64696e67417070726f76616c20737461747573a165627a7a7230582057af51d02c575050fc395775bd797a32011e11df43d5980de8babb400873841f0029";
var simpleContract = web3.eth.contract(abi);
var a = simpleContract.new("0x1932c48b2bf8102ba33b4a6b545c32236e342f34", {from:web3.eth.accounts[0], data: bytecode, gas: 7200000}, function(e, contract) {
	if (e) {
		console.log("err creating contract", e);
	} else {
		if (!contract.address) {
			console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
		} else {
			console.log("Contract mined! Address: " + contract.address);
			console.log(contract);
		}
	}
});
