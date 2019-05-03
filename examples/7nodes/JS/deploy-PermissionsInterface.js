ac = eth.accounts[0];
web3.eth.defaultAccount = ac;
var abi = [{"constant":true,"inputs":[],"name":"getPermissionsImpl","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_orgId","type":"string"},{"name":"_enodeId","type":"string"},{"name":"_status","type":"uint256"}],"name":"updateNodeStatus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_orgManager","type":"address"},{"name":"_rolesManager","type":"address"},{"name":"_acctManager","type":"address"},{"name":"_voterManager","type":"address"},{"name":"_nodeManager","type":"address"},{"name":"_breadth","type":"uint256"},{"name":"_depth","type":"uint256"}],"name":"init","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_orgId","type":"string"},{"name":"_account","type":"address"}],"name":"approveAdminRole","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_nwAdminOrg","type":"string"},{"name":"_nwAdminRole","type":"string"},{"name":"_oAdminRole","type":"string"}],"name":"setPolicy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_acct","type":"address"},{"name":"_orgId","type":"string"},{"name":"_roleId","type":"string"}],"name":"assignAccountRole","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_orgId","type":"string"},{"name":"_account","type":"address"},{"name":"_roleId","type":"string"}],"name":"assignAdminRole","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"updateNetworkBootStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNetworkBootStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_permImplementation","type":"address"}],"name":"setPermImplementation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_roleId","type":"string"},{"name":"_orgId","type":"string"},{"name":"_access","type":"uint256"},{"name":"_voter","type":"bool"},{"name":"_admin","type":"bool"}],"name":"addNewRole","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_orgId","type":"string"},{"name":"_status","type":"uint256"}],"name":"approveOrgStatus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"},{"name":"_orgId","type":"string"}],"name":"validateAccount","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_acct","type":"address"}],"name":"addAdminAccounts","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_orgId","type":"string"},{"name":"_enodeId","type":"string"},{"name":"_account","type":"address"}],"name":"approveOrg","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_orgId","type":"string"},{"name":"_account","type":"address"},{"name":"_status","type":"uint256"}],"name":"updateAccountStatus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_orgId","type":"string"},{"name":"_enodeId","type":"string"},{"name":"_account","type":"address"}],"name":"addOrg","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"},{"name":"_orgId","type":"string"}],"name":"isOrgAdmin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_roleId","type":"string"},{"name":"_orgId","type":"string"}],"name":"removeRole","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_pOrg","type":"string"},{"name":"_orgId","type":"string"},{"name":"_enodeId","type":"string"},{"name":"_account","type":"address"}],"name":"addSubOrg","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_orgId","type":"string"},{"name":"_enodeId","type":"string"}],"name":"addNode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_orgId","type":"string"},{"name":"_status","type":"uint256"}],"name":"updateOrgStatus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"isNetworkAdmin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_enodeId","type":"string"}],"name":"addAdminNodes","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_orgId","type":"string"}],"name":"getPendingOp","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_permImplUpgradeable","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
var bytecode = "0x608060405234801561001057600080fd5b506040516020806124208339810180604052602081101561003057600080fd5b505160028054600160a060020a031916600160a060020a039092169190911790556123c0806100606000396000f3fe608060405234801561001057600080fd5b50600436106101775760003560e060020a900480636b568d76116100e2578063a63430121161009b578063bb3b6e8011610075578063bb3b6e8014610e23578063d1aa0c2014610e93578063e5e5b85d14610eb9578063f346a3a714610f2957610177565b8063a634301214610b82578063a64d286014610c44578063a97a440614610d6157610177565b80636b568d76146107db57806371f57931146108915780637e461258146108b757806384b7a84a146109825780638f362a3e14610a015780639bd3810114610acc57610177565b806343de646c1161013457806343de646c1461058057806344478e791461064f5780634cbfa82e1461066b578063511bbd9f1461067357806351f604c3146106995780635be9672c1461076b57610177565b806303ed69331461017c5780630cc50146146101a05780630fd07ea41461026457806316724c44146102b65780631b6102201461032f5780632f7f0a1214610443575b600080fd5b610184611097565b60408051600160a060020a039092168252519081900360200190f35b610262600480360360608110156101b657600080fd5b8101906020810181356401000000008111156101d157600080fd5b8201836020820111156101e357600080fd5b8035906020019184600183028401116401000000008311171561020557600080fd5b91939092909160208101903564010000000081111561022357600080fd5b82018360208201111561023557600080fd5b8035906020019184600183028401116401000000008311171561025757600080fd5b9193509150356110a6565b005b610262600480360360e081101561027a57600080fd5b50600160a060020a0381358116916020810135821691604082013581169160608101358216916080820135169060a08101359060c00135611199565b610262600480360360408110156102cc57600080fd5b8101906020810181356401000000008111156102e757600080fd5b8201836020820111156102f957600080fd5b8035906020019184600183028401116401000000008311171561031b57600080fd5b919350915035600160a060020a031661124c565b6102626004803603606081101561034557600080fd5b81019060208101813564010000000081111561036057600080fd5b82018360208201111561037257600080fd5b8035906020019184600183028401116401000000008311171561039457600080fd5b9193909290916020810190356401000000008111156103b257600080fd5b8201836020820111156103c457600080fd5b803590602001918460018302840111640100000000831117156103e657600080fd5b91939092909160208101903564010000000081111561040457600080fd5b82018360208201111561041657600080fd5b8035906020019184600183028401116401000000008311171561043857600080fd5b509092509050611311565b6102626004803603606081101561045957600080fd5b600160a060020a03823516919081019060408101602082013564010000000081111561048457600080fd5b82018360208201111561049657600080fd5b803590602001918460018302840111640100000000831117156104b857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561050b57600080fd5b82018360208201111561051d57600080fd5b8035906020019184600183028401116401000000008311171561053f57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061141f945050505050565b6102626004803603606081101561059657600080fd5b8101906020810181356401000000008111156105b157600080fd5b8201836020820111156105c357600080fd5b803590602001918460018302840111640100000000831117156105e557600080fd5b91939092600160a060020a038335169260408101906020013564010000000081111561061057600080fd5b82018360208201111561062257600080fd5b8035906020019184600183028401116401000000008311171561064457600080fd5b509092509050611564565b610657611639565b604080519115158252519081900360200190f35b6106576116be565b6102626004803603602081101561068957600080fd5b5035600160a060020a0316611741565b610262600480360360a08110156106af57600080fd5b8101906020810181356401000000008111156106ca57600080fd5b8201836020820111156106dc57600080fd5b803590602001918460018302840111640100000000831117156106fe57600080fd5b91939092909160208101903564010000000081111561071c57600080fd5b82018360208201111561072e57600080fd5b8035906020019184600183028401116401000000008311171561075057600080fd5b91935091508035906020810135151590604001351515611787565b6102626004803603604081101561078157600080fd5b81019060208101813564010000000081111561079c57600080fd5b8201836020820111156107ae57600080fd5b803590602001918460018302840111640100000000831117156107d057600080fd5b919350915035611871565b610657600480360360408110156107f157600080fd5b600160a060020a03823516919081019060408101602082013564010000000081111561081c57600080fd5b82018360208201111561082e57600080fd5b8035906020019184600183028401116401000000008311171561085057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611914945050505050565b610262600480360360208110156108a757600080fd5b5035600160a060020a0316611a16565b610262600480360360608110156108cd57600080fd5b8101906020810181356401000000008111156108e857600080fd5b8201836020820111156108fa57600080fd5b8035906020019184600183028401116401000000008311171561091c57600080fd5b91939092909160208101903564010000000081111561093a57600080fd5b82018360208201111561094c57600080fd5b8035906020019184600183028401116401000000008311171561096e57600080fd5b919350915035600160a060020a0316611a95565b6102626004803603606081101561099857600080fd5b8101906020810181356401000000008111156109b357600080fd5b8201836020820111156109c557600080fd5b803590602001918460018302840111640100000000831117156109e757600080fd5b9193509150600160a060020a038135169060200135611b6a565b61026260048036036060811015610a1757600080fd5b810190602081018135640100000000811115610a3257600080fd5b820183602082011115610a4457600080fd5b80359060200191846001830284011164010000000083111715610a6657600080fd5b919390929091602081019035640100000000811115610a8457600080fd5b820183602082011115610a9657600080fd5b80359060200191846001830284011164010000000083111715610ab857600080fd5b919350915035600160a060020a0316611c38565b61065760048036036040811015610ae257600080fd5b600160a060020a038235169190810190604081016020820135640100000000811115610b0d57600080fd5b820183602082011115610b1f57600080fd5b80359060200191846001830284011164010000000083111715610b4157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611d0d945050505050565b61026260048036036040811015610b9857600080fd5b810190602081018135640100000000811115610bb357600080fd5b820183602082011115610bc557600080fd5b80359060200191846001830284011164010000000083111715610be757600080fd5b919390929091602081019035640100000000811115610c0557600080fd5b820183602082011115610c1757600080fd5b80359060200191846001830284011164010000000083111715610c3957600080fd5b509092509050611d90565b61026260048036036080811015610c5a57600080fd5b810190602081018135640100000000811115610c7557600080fd5b820183602082011115610c8757600080fd5b80359060200191846001830284011164010000000083111715610ca957600080fd5b919390929091602081019035640100000000811115610cc757600080fd5b820183602082011115610cd957600080fd5b80359060200191846001830284011164010000000083111715610cfb57600080fd5b919390929091602081019035640100000000811115610d1957600080fd5b820183602082011115610d2b57600080fd5b80359060200191846001830284011164010000000083111715610d4d57600080fd5b919350915035600160a060020a0316611e5a565b61026260048036036040811015610d7757600080fd5b810190602081018135640100000000811115610d9257600080fd5b820183602082011115610da457600080fd5b80359060200191846001830284011164010000000083111715610dc657600080fd5b919390929091602081019035640100000000811115610de457600080fd5b820183602082011115610df657600080fd5b80359060200191846001830284011164010000000083111715610e1857600080fd5b509092509050611f5e565b61026260048036036040811015610e3957600080fd5b810190602081018135640100000000811115610e5457600080fd5b820183602082011115610e6657600080fd5b80359060200191846001830284011164010000000083111715610e8857600080fd5b919350915035612028565b61065760048036036020811015610ea957600080fd5b5035600160a060020a03166120cb565b61026260048036036020811015610ecf57600080fd5b810190602081018135640100000000811115610eea57600080fd5b820183602082011115610efc57600080fd5b80359060200191846001830284011164010000000083111715610f1e57600080fd5b509092509050612164565b610f9960048036036020811015610f3f57600080fd5b810190602081018135640100000000811115610f5a57600080fd5b820183602082011115610f6c57600080fd5b80359060200191846001830284011164010000000083111715610f8e57600080fd5b509092509050612210565b60405180806020018060200185600160a060020a0316600160a060020a03168152602001848152602001838103835287818151815260200191508051906020019080838360005b83811015610ff8578181015183820152602001610fe0565b50505050905090810190601f1680156110255780820380516001836020036101000a031916815260200191505b50838103825286518152865160209182019188019080838360005b83811015611058578181015183820152602001611040565b50505050905090810190601f1680156110855780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b600054600160a060020a031690565b6000546040517fdbfad71100000000000000000000000000000000000000000000000000000000815260448101839052336064820181905260806004830190815260848301889052600160a060020a039093169263dbfad711928992899289928992899290918190602481019060a401898980828437600083820152601f01601f191690910184810383528781526020019050878780828437600081840152601f19601f82011690508083019250505098505050505050505050600060405180830381600087803b15801561117a57600080fd5b505af115801561118e573d6000803e3d6000fd5b505050505050505050565b60008054604080517f0fd07ea4000000000000000000000000000000000000000000000000000000008152600160a060020a038b811660048301528a8116602483015289811660448301528881166064830152878116608483015260a4820187905260c4820186905291519190921692630fd07ea49260e4808201939182900301818387803b15801561122b57600080fd5b505af115801561123f573d6000803e3d6000fd5b5050505050505050505050565b6000546040517f88843041000000000000000000000000000000000000000000000000000000008152600160a060020a03838116602483015233604483018190526060600484019081526064840187905291909316926388843041928792879287929091908190608401868680828437600081840152601f19601f82011690508083019250505095505050505050600060405180830381600087803b1580156112f457600080fd5b505af1158015611308573d6000803e3d6000fd5b50505050505050565b6000546040517f1b61022000000000000000000000000000000000000000000000000000000000815260606004820190815260648201889052600160a060020a0390921691631b610220918991899189918991899189918190602481019060448101906084018a8a80828437600083820152601f01601f191690910185810384528881526020019050888880828437600083820152601f01601f191690910185810383528681526020019050868680828437600081840152601f19601f8201169050808301925050509950505050505050505050600060405180830381600087803b1580156113ff57600080fd5b505af1158015611413573d6000803e3d6000fd5b50505050505050505050565b600080546040517f8baa8191000000000000000000000000000000000000000000000000000000008152600160a060020a038681166004830190815233606484018190526080602485019081528851608486015288519390951695638baa8191958a958a958a9593604483019260a4019160208901918190849084905b838110156114b457818101518382015260200161149c565b50505050905090810190601f1680156114e15780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b838110156115145781810151838201526020016114fc565b50505050905090810190601f1680156115415780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b1580156112f457600080fd5b6000546040517f404bf3eb000000000000000000000000000000000000000000000000000000008152600160a060020a038581166024830152336064830181905260806004840190815260848401899052919093169263404bf3eb9289928992899289928992918190604481019060a401898980828437600083820152601f01601f191690910184810383528681526020019050868680828437600081840152601f19601f82011690508083019250505098505050505050505050600060405180830381600087803b15801561117a57600080fd5b60008060009054906101000a9004600160a060020a0316600160a060020a03166344478e796040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561168d57600080fd5b505af11580156116a1573d6000803e3d6000fd5b505050506040513d60208110156116b757600080fd5b5090919050565b60008060009054906101000a9004600160a060020a0316600160a060020a0316634cbfa82e6040518163ffffffff1660e060020a02815260040160206040518083038186803b15801561171057600080fd5b505afa158015611724573d6000803e3d6000fd5b505050506040513d602081101561173a57600080fd5b5051905090565b600254600160a060020a0316331461175857600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6000546040517f1b04c27600000000000000000000000000000000000000000000000000000000815260448101859052831515606482015282151560848201523360a4820181905260c06004830190815260c483018a9052600160a060020a0390931692631b04c276928b928b928b928b928b928b928b9291908190602481019060e4018b8b80828437600083820152601f01601f191690910184810383528981526020019050898980828437600081840152601f19601f8201169050808301925050509a5050505050505050505050600060405180830381600087803b15801561122b57600080fd5b6000546040517fb554656400000000000000000000000000000000000000000000000000000000815260248101839052336044820181905260606004830190815260648301869052600160a060020a039093169263b5546564928792879287928190608401868680828437600081840152601f19601f82011690508083019250505095505050505050600060405180830381600087803b1580156112f457600080fd5b60008054604080517f6b568d76000000000000000000000000000000000000000000000000000000008152600160a060020a0386811660048301908152602483019384528651604484015286519190941693636b568d76938893889360649091019060208501908083838c5b83811015611998578181015183820152602001611980565b50505050905090810190601f1680156119c55780820380516001836020036101000a031916815260200191505b50935050505060206040518083038186803b1580156119e357600080fd5b505afa1580156119f7573d6000803e3d6000fd5b505050506040513d6020811015611a0d57600080fd5b50519392505050565b60008054604080517f71f57931000000000000000000000000000000000000000000000000000000008152600160a060020a038581166004830152915191909216926371f57931926024808201939182900301818387803b158015611a7a57600080fd5b505af1158015611a8e573d6000803e3d6000fd5b5050505050565b6000546040517f3bc07dea000000000000000000000000000000000000000000000000000000008152600160a060020a0383811660448301523360648301819052608060048401908152608484018990529190931692633bc07dea9289928992899289928992918190602481019060a401898980828437600083820152601f01601f191690910184810383528781526020019050878780828437600081840152601f19601f82011690508083019250505098505050505050505050600060405180830381600087803b15801561117a57600080fd5b6000546040517f04e81f1e000000000000000000000000000000000000000000000000000000008152600160a060020a0384811660248301526044820184905233606483018190526080600484019081526084840188905291909316926304e81f1e92889288928892889290819060a401878780828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b158015611c1a57600080fd5b505af1158015611c2e573d6000803e3d6000fd5b5050505050505050565b6000546040517ff922f802000000000000000000000000000000000000000000000000000000008152600160a060020a038381166044830152336064830181905260806004840190815260848401899052919093169263f922f8029289928992899289928992918190602481019060a401898980828437600083820152601f01601f191690910184810383528781526020019050878780828437600081840152601f19601f82011690508083019250505098505050505050505050600060405180830381600087803b15801561117a57600080fd5b60008054604080517f9bd38101000000000000000000000000000000000000000000000000000000008152600160a060020a0386811660048301908152602483019384528651604484015286519190941693639bd38101938893889360649091019060208501908083838c83811015611998578181015183820152602001611980565b6000546040517f5ca5adbe000000000000000000000000000000000000000000000000000000008152336044820181905260606004830190815260648301879052600160a060020a0390931692635ca5adbe928892889288928892919081906024810190608401888880828437600083820152601f01601f191690910184810383528681526020019050868680828437600081840152601f19601f820116905080830192505050975050505050505050600060405180830381600087803b158015611c1a57600080fd5b6000546040517f90894f0d000000000000000000000000000000000000000000000000000000008152600160a060020a038381166064830152336084830181905260a06004840190815260a484018b905291909316926390894f0d928b928b928b928b928b928b928b929081906024810190604481019060c4018c8c80828437600083820152601f01601f191690910185810384528a815260200190508a8a80828437600083820152601f01601f191690910185810383528881526020019050888880828437600081840152601f19601f8201169050808301925050509b505050505050505050505050600060405180830381600087803b15801561122b57600080fd5b6000546040517f59a260a3000000000000000000000000000000000000000000000000000000008152336044820181905260606004830190815260648301879052600160a060020a03909316926359a260a3928892889288928892919081906024810190608401888880828437600083820152601f01601f191690910184810383528681526020019050868680828437600081840152601f19601f820116905080830192505050975050505050505050600060405180830381600087803b158015611c1a57600080fd5b6000546040517f3cf5f33b00000000000000000000000000000000000000000000000000000000815260248101839052336044820181905260606004830190815260648301869052600160a060020a0390931692633cf5f33b928792879287928190608401868680828437600081840152601f19601f82011690508083019250505095505050505050600060405180830381600087803b1580156112f457600080fd5b60008054604080517fd1aa0c20000000000000000000000000000000000000000000000000000000008152600160a060020a0385811660048301529151919092169163d1aa0c20916024808301926020929190829003018186803b15801561213257600080fd5b505afa158015612146573d6000803e3d6000fd5b505050506040513d602081101561215c57600080fd5b505192915050565b6000546040517fe5e5b85d00000000000000000000000000000000000000000000000000000000815260206004820190815260248201849052600160a060020a039092169163e5e5b85d91859185918190604401848480828437600081840152601f19601f8201169050808301925050509350505050600060405180830381600087803b1580156121f457600080fd5b505af1158015612208573d6000803e3d6000fd5b505050505050565b600080546040517ff346a3a700000000000000000000000000000000000000000000000000000000815260206004820190815260248201859052606093849390928392600160a060020a039092169163f346a3a791899189918190604401848480828437600081840152601f19601f820116905080830192505050935050505060006040518083038186803b1580156122a857600080fd5b505afa1580156122bc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260808110156122e557600080fd5b8101908080516401000000008111156122fd57600080fd5b8201602081018481111561231057600080fd5b815164010000000081118282018710171561232a57600080fd5b5050929190602001805164010000000081111561234657600080fd5b8201602081018481111561235957600080fd5b815164010000000081118282018710171561237357600080fd5b50506020820151604090920151949b909a509098509296509194505050505056fea165627a7a72305820b6b7e2247b363bac70ba7e4077e4bc5e4bdba020df4deb3806947c647ca6ce970029";
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