ac = eth.accounts[0];
web3.eth.defaultAccount = ac;
var abi = [{"constant":true,"inputs":[{"name":"_orgId","type":"string"},{"name":"_address","type":"address"}],"name":"checkIfVoterExists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_orgId","type":"string"}],"name":"getPendingOpDetails","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_orgId","type":"string"}],"name":"getVoteCount","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_orgId","type":"string"},{"name":"_address","type":"address"}],"name":"addVoter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_orgId","type":"string"},{"name":"_address","type":"address"}],"name":"deleteVoter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_orgId","type":"string"}],"name":"getNumberOfValidVoters","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_orgId","type":"string"}],"name":"getNumberOfVoters","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_authOrg","type":"string"},{"name":"_vAccount","type":"address"},{"name":"_pendingOp","type":"uint256"}],"name":"processVote","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_orgId","type":"string"}],"name":"checkVotingAccountExists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_authOrg","type":"string"},{"name":"_orgId","type":"string"},{"name":"_enodeId","type":"string"},{"name":"_account","type":"address"},{"name":"_pendingOp","type":"uint256"}],"name":"addVotingItem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_permUpgradable","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_orgId","type":"string"},{"indexed":false,"name":"_address","type":"address"}],"name":"VoterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_orgId","type":"string"},{"indexed":false,"name":"_address","type":"address"}],"name":"VoterDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_orgId","type":"string"}],"name":"VotingItemAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_orgId","type":"string"}],"name":"VoteProcessed","type":"event"}];
var bytecode = "0x6080604052600060035534801561001557600080fd5b506040516020806120f68339810180604052602081101561003557600080fd5b505160008054600160a060020a03909216600160a060020a031990921691909117905561208f806100676000396000f3fe608060405234801561001057600080fd5b50600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900480637ca4cfee116100835780637ca4cfee1461046f5780639b904f0a146104f1578063b021386414610561578063cb2c45dc146105e0578063e98ac22d14610650576100ba565b8062b813df146100bf578063014e6acc14610184578063069953a7146102f25780635607395b1461037b57806359cbd6fe146103f6575b600080fd5b610170600480360360408110156100d557600080fd5b8101906020810181356401000000008111156100f057600080fd5b82018360208201111561010257600080fd5b8035906020019184600183028401116401000000008311171561012457600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955050509035600160a060020a031691506107739050565b604080519115158252519081900360200190f35b6101f46004803603602081101561019a57600080fd5b8101906020810181356401000000008111156101b557600080fd5b8201836020820111156101c757600080fd5b803590602001918460018302840111640100000000831117156101e957600080fd5b509092509050610825565b60405180806020018060200185600160a060020a0316600160a060020a03168152602001848152602001838103835287818151815260200191508051906020019080838360005b8381101561025357818101518382015260200161023b565b50505050905090810190601f1680156102805780820380516001836020036101000a031916815260200191505b50838103825286518152865160209182019188019080838360005b838110156102b357818101518382015260200161029b565b50505050905090810190601f1680156102e05780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b6103626004803603602081101561030857600080fd5b81019060208101813564010000000081111561032357600080fd5b82018360208201111561033557600080fd5b8035906020019184600183028401116401000000008311171561035757600080fd5b509092509050610a33565b6040805192835260208301919091528051918290030190f35b6103f46004803603604081101561039157600080fd5b8101906020810181356401000000008111156103ac57600080fd5b8201836020820111156103be57600080fd5b803590602001918460018302840111640100000000831117156103e057600080fd5b919350915035600160a060020a0316610ac7565b005b6103f46004803603604081101561040c57600080fd5b81019060208101813564010000000081111561042757600080fd5b82018360208201111561043957600080fd5b8035906020019184600183028401116401000000008311171561045b57600080fd5b919350915035600160a060020a03166111cf565b6104df6004803603602081101561048557600080fd5b8101906020810181356401000000008111156104a057600080fd5b8201836020820111156104b257600080fd5b803590602001918460018302840111640100000000831117156104d457600080fd5b5090925090506113f0565b60408051918252519081900360200190f35b6104df6004803603602081101561050757600080fd5b81019060208101813564010000000081111561052257600080fd5b82018360208201111561053457600080fd5b8035906020019184600183028401116401000000008311171561055657600080fd5b509092509050611457565b6101706004803603606081101561057757600080fd5b81019060208101813564010000000081111561059257600080fd5b8201836020820111156105a457600080fd5b803590602001918460018302840111640100000000831117156105c657600080fd5b9193509150600160a060020a0381351690602001356114be565b610170600480360360208110156105f657600080fd5b81019060208101813564010000000081111561061157600080fd5b82018360208201111561062357600080fd5b8035906020019184600183028401116401000000008311171561064557600080fd5b50909250905061191a565b6103f4600480360360a081101561066657600080fd5b81019060208101813564010000000081111561068157600080fd5b82018360208201111561069357600080fd5b803590602001918460018302840111640100000000831117156106b557600080fd5b9193909290916020810190356401000000008111156106d357600080fd5b8201836020820111156106e557600080fd5b8035906020019184600183028401116401000000008311171561070757600080fd5b91939092909160208101903564010000000081111561072557600080fd5b82018360208201111561073757600080fd5b8035906020019184600183028401116401000000008311171561075957600080fd5b9193509150600160a060020a03813516906020013561198b565b60008061077f84611cc4565b905060018181548110151561079057fe5b60009182526020808320600160a060020a03871684526009600b90930201919091019052604090205415156107c957600091505061081f565b60006107d58585611d51565b90506001828154811015156107e657fe5b90600052602060002090600b02016008018181548110151561080457fe5b60009182526020909120015460a060020a900460ff16925050505b92915050565b606080600080600061086c87878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611cc492505050565b905060018181548110151561087d57fe5b90600052602060002090600b02016004016000016001828154811015156108a057fe5b90600052602060002090600b02016004016001016001838154811015156108c357fe5b600091825260209091206006600b90920201015460018054600160a060020a0390921691859081106108f157fe5b60009182526020918290206007600b909202010154845460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152919286919083018282801561098c5780601f106109615761010080835404028352916020019161098c565b820191906000526020600020905b81548152906001019060200180831161096f57829003601f168201915b5050865460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815295995088945092508401905082828015610a1a5780601f106109ef57610100808354040283529160200191610a1a565b820191906000526020600020905b8154815290600101906020018083116109fd57829003601f168201915b5050505050925094509450945094505092959194509250565b6000806000610a7785858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611cc492505050565b9050600181815481101515610a8857fe5b90600052602060002090600b020160030154600182815481101515610aa957fe5b90600052602060002090600b02016002015492509250509250929050565b6002600084846040516020018083838082843780830192505050925050506040516020818303038152906040528051906020012081526020019081526020016000205460001415610e185760038054600101908190556040516002906000908690869060200180838380828437808301925050509250505060405160208183030381529060405280519060200120815260200190815260200160002081905550600060018054809190600101610b7d9190611dd8565b90508383600183815481101515610b9057fe5b60009182526020909120610baa93600b9092020191611e09565b5060018082815481101515610bbb57fe5b90600052602060002090600b02016001018190555060018082815481101515610be057fe5b90600052602060002090600b0201600201819055506000600182815481101515610c0657fe5b90600052602060002090600b0201600301819055506020604051908101604052806000815250600182815481101515610c3b57fe5b90600052602060002090600b02016004016000019080519060200190610c62929190611e87565b506040805160208101909152600081526001805483908110610c8057fe5b90600052602060002090600b02016004016001019080519060200190610ca7929190611e87565b506000600182815481101515610cb957fe5b600091825260208220600b9190910201600601805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0393909316929092179091556001805483908110610d0657fe5b600091825260209091206007600b9092020101556001805482908110610d2857fe5b90600052602060002090600b020160010154600182815481101515610d4957fe5b60009182526020808320600160a060020a03871684526009600b9093020191909101905260409020556001805482908110610d8057fe5b6000918252602080832060408051808201909152600160a060020a0387811682526001828501818152600b9690960290930160080180549384018155865292909420935193018054925173ffffffffffffffffffffffffffffffffffffffff19909316939091169290921774ff0000000000000000000000000000000000000000191660a060020a9115159190910217905550611159565b6000610e5984848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611cc492505050565b9050600181815481101515610e6a57fe5b60009182526020808320600160a060020a03861684526009600b9093020191909101905260409020541515610fe7576001805482908110610ea757fe5b600091825260209091206001600b909202018101805482019055805482908110610ecd57fe5b90600052602060002090600b020160010154600182815481101515610eee57fe5b60009182526020808320600160a060020a03871684526009600b9093020191909101905260409020556001805482908110610f2557fe5b6000918252602080832060408051808201909152600160a060020a0387811682526001828501818152600b969096029093016008018054808501825590875293909520905192018054935173ffffffffffffffffffffffffffffffffffffffff19909416929094169190911774ff0000000000000000000000000000000000000000191660a060020a9215159290920291909117909155805482908110610fc857fe5b600091825260209091206002600b909202010180546001019055611157565b600061102a85858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250879250611d51915050565b905060018281548110151561103b57fe5b90600052602060002090600b02016008018181548110151561105957fe5b60009182526020909120015460a060020a900460ff161515600114156110c9576040805160e560020a62461bcd02815260206004820152600f60248201527f616c7265616479206120766f7465720000000000000000000000000000000000604482015290519081900360640190fd5b600180838154811015156110d957fe5b90600052602060002090600b0201600801828154811015156110f757fe5b6000918252602090912001805491151560a060020a0274ff000000000000000000000000000000000000000019909216919091179055600180548390811061113b57fe5b600091825260209091206002600b909202010180546001019055505b505b60408051600160a060020a03831660208201528181529081018390527f424f3ad05c61ea35cad66f22b70b1fad7250d8229921238078c401db36d34574908490849084908060608101858580828437600083820152604051601f909101601f1916909201829003965090945050505050a1505050565b82828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250849250611213915083905082610773565b151560011461126c576040805160e560020a62461bcd02815260206004820152600f60248201527f6d757374206265206120766f7465720000000000000000000000000000000000604482015290519081900360640190fd5b60006112ad86868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611cc492505050565b905060006112f287878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250899250611d51915050565b905060018281548110151561130357fe5b6000918252602082206002600b90920201018054600019019055600180548490811061132b57fe5b90600052602060002090600b02016008018281548110151561134957fe5b9060005260206000200160000160146101000a81548160ff0219169083151502179055507f654cd85d9b2abaf3affef0a047625d088e6e4d0448935c9b5016b5f5aa0ca3b6878787604051808060200183600160a060020a0316600160a060020a031681526020018281038252858582818152602001925080828437600083820152604051601f909101601f1916909201829003965090945050505050a150505050505050565b6000600161143384848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611cc492505050565b8154811061143d57fe5b90600052602060002090600b020160020154905092915050565b6000600161149a84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611cc492505050565b815481106114a457fe5b90600052602060002090600b020160010154905092915050565b600084848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250869250611504915083905082610773565b151560011461155d576040805160e560020a62461bcd02815260206004820152600f60248201527f6d757374206265206120766f7465720000000000000000000000000000000000604482015290519081900360640190fd5b61159e87878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250889250611da2915050565b15156001146115f7576040805160e560020a62461bcd02815260206004820152601260248201527f6e6f7468696e6720746f20617070726f76650000000000000000000000000000604482015290519081900360640190fd5b600061163888888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611cc492505050565b905060018181548110151561164957fe5b60009182526020808320848452600a600b909302019190910181526040808320600160a060020a038a16845290915290205460ff161515600114156116d8576040805160e560020a62461bcd02815260206004820152601260248201527f63616e6e6f7420646f75626c6520766f74650000000000000000000000000000604482015290519081900360640190fd5b60018054829081106116e657fe5b600091825260209091206003600b909202010180546001908101909155805481908390811061171157fe5b60009182526020808320858452600b92909202909101600a0181526040808320600160a060020a038b168452825291829020805460ff19169315159390931790925580518281529182018990527f87999b54e45aa02834a1265e356d7bcdceb72b8cbb4396ebaeba32a103b43508918a918a919081908101848480828437600083820152604051601f909101601f19169092018290039550909350505050a160026001828154811015156117c157fe5b90600052602060002090600b0201600201548115156117dc57fe5b046001828154811015156117ec57fe5b90600052602060002090600b020160030154111561190a57604080516020810190915260008152600180548390811061182157fe5b90600052602060002090600b02016004016000019080519060200190611848929190611e87565b50604080516020810190915260008152600180548390811061186657fe5b90600052602060002090600b0201600401600101908051906020019061188d929190611e87565b50600060018281548110151561189f57fe5b600091825260208220600b9190910201600601805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03939093169290921790915560018054839081106118ec57fe5b600091825260209091206007600b9092020101555060019250611910565b60009350505b5050949350505050565b60008061195c84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611cc492505050565b9050600060018281548110151561196f57fe5b90600052602060002090600b0201600201541191505092915050565b6119ca88888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509250611da2915050565b1515611a0a5760405160e560020a62461bcd0281526004018080602001828103825260308152602001806120346030913960400191505060405180910390fd5b6000611a4b89898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611cc492505050565b90508686600183815481101515611a5e57fe5b90600052602060002090600b02016004016000019190611a7f929190611e09565b508484600183815481101515611a9157fe5b90600052602060002090600b02016004016001019190611ab2929190611e09565b5082600182815481101515611ac357fe5b90600052602060002090600b020160040160020160006101000a815481600160a060020a030219169083600160a060020a0316021790555081600182815481101515611b0b57fe5b6000918252602082206007600b9092020101919091555b6001805483908110611b3057fe5b90600052602060002090600b020160080180549050811015611c32576001805483908110611b5a57fe5b90600052602060002090600b020160080181815481101515611b7857fe5b60009182526020909120015460a060020a900460ff1615611c2a576000600183815481101515611ba457fe5b90600052602060002090600b0201600a0160008481526020019081526020016000206000600185815481101515611bd757fe5b90600052602060002090600b020160080184815481101515611bf557fe5b600091825260208083209190910154600160a060020a031683528201929092526040019020805460ff19169115159190911790555b600101611b22565b506000600182815481101515611c4457fe5b90600052602060002090600b0201600301819055507f5bfaebb5931145594f63236d2a59314c4dc6035b65d0ca4cee9c7298e2f06ca3898960405180806020018281038252848482818152602001925080828437600083820152604051601f909101601f19169092018290039550909350505050a1505050505050505050565b6000600160026000846040516020018082805190602001908083835b60208310611cff5780518252601f199092019160209182019101611ce0565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120815260200190815260200160002054039050919050565b600080611d5d84611cc4565b905060018082815481101515611d6f57fe5b60009182526020808320600160a060020a03881684526009600b9093020191909101905260409020540391505092915050565b6000816001611db085611cc4565b81548110611dba57fe5b90600052602060002090600b02016004016003015414905092915050565b815481835581811115611e0457600b0281600b028360005260206000209182019101611e049190611ef5565b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611e4a5782800160ff19823516178555611e77565b82800160010185558215611e77579182015b82811115611e77578235825591602001919060010190611e5c565b50611e83929150611f87565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611ec857805160ff1916838001178555611e77565b82800160010185558215611e77579182015b82811115611e77578251825591602001919060010190611eda565b611f8491905b80821115611e83576000611f0f8282611fa1565b60006001830181905560028301819055600383018190556004830190611f358282611fa1565b611f43600183016000611fa1565b5060028101805473ffffffffffffffffffffffffffffffffffffffff1916905560006003909101819055611f7b906008840190611fe8565b50600b01611efb565b90565b611f8491905b80821115611e835760008155600101611f8d565b50805460018160011615610100020316600290046000825580601f10611fc75750611fe5565b601f016020900490600052602060002090810190611fe59190611f87565b50565b5080546000825590600052602060002090810190611fe59190611f8491905b80821115611e8357805474ffffffffffffffffffffffffffffffffffffffffff1916815560010161200756fe4974656d732070656e64696e6720617070726f76616c2e204e6577206974656d2063616e6e6f74206265206164646564a165627a7a7230582074bf9a718096ff3372e8c304f7b6c35e56fc7018a940d19a3c7a8cc76941b7590029";
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