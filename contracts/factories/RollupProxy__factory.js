"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RollupProxy__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint64",
                        name: "confirmPeriodBlocks",
                        type: "uint64",
                    },
                    {
                        internalType: "uint64",
                        name: "extraChallengeTimeBlocks",
                        type: "uint64",
                    },
                    {
                        internalType: "address",
                        name: "stakeToken",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "baseStake",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "wasmModuleRoot",
                        type: "bytes32",
                    },
                    {
                        internalType: "address",
                        name: "owner",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "loserStakeEscrow",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "chainId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint64",
                        name: "genesisBlockNum",
                        type: "uint64",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "delayBlocks",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "futureBlocks",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "delaySeconds",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "futureSeconds",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct ISequencerInbox.MaxTimeVariation",
                        name: "sequencerInboxMaxTimeVariation",
                        type: "tuple",
                    },
                ],
                internalType: "struct Config",
                name: "config",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "contract IBridge",
                        name: "bridge",
                        type: "address",
                    },
                    {
                        internalType: "contract ISequencerInbox",
                        name: "sequencerInbox",
                        type: "address",
                    },
                    {
                        internalType: "contract IInbox",
                        name: "inbox",
                        type: "address",
                    },
                    {
                        internalType: "contract IOutbox",
                        name: "outbox",
                        type: "address",
                    },
                    {
                        internalType: "contract IRollupEventInbox",
                        name: "rollupEventInbox",
                        type: "address",
                    },
                    {
                        internalType: "contract IChallengeManager",
                        name: "challengeManager",
                        type: "address",
                    },
                    {
                        internalType: "contract IRollupAdmin",
                        name: "rollupAdminLogic",
                        type: "address",
                    },
                    {
                        internalType: "contract IRollupUser",
                        name: "rollupUserLogic",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "validatorUtils",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "validatorWalletCreator",
                        type: "address",
                    },
                ],
                internalType: "struct ContractDependencies",
                name: "connectedContracts",
                type: "tuple",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address",
            },
        ],
        name: "BeaconUpgraded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "UpgradedSecondary",
        type: "event",
    },
    {
        stateMutability: "payable",
        type: "fallback",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b50604051620010a1380380620010a1833981016040819052620000349162000896565b60c08101516040516329ce5f2b60e01b9062000057908590859060240162000a89565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925260e08401518583015192516001600160a01b039093166024840152909163189acdbd60e31b9060440160408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915260a08601516200011660017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610462000b87565b6000805160206200101a8339815191521462000136576200013662000bad565b6200016360017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd62000b87565b6000805160206200103a8339815191521462000183576200018362000bad565b620001b060017f2b1dbce74324248c222f0ec2d5ed7bd323cfc425b336f0253c5ccfda7265546e62000b87565b6000805160206200108183398151915214620001d057620001d062000bad565b620001db8162000204565b620001e9858560006200025f565b620001f7838360006200029c565b5050505050505062000c45565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6200022f620002a7565b604080516001600160a01b03928316815291841660208301520160405180910390a16200025c81620002e0565b50565b6200026a8362000395565b600082511180620002785750805b156200029757620002958383620003d760201b620000291760201c565b505b505050565b6200026a8362000406565b6000620002d16000805160206200101a83398151915260001b6200044860201b620000551760201c565b546001600160a01b0316919050565b6001600160a01b0381166200034b5760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b80620003746000805160206200101a83398151915260001b6200044860201b620000551760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b620003a0816200044b565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060620003ff83836040518060600160405280602781526020016200105a60279139620004ee565b9392505050565b6200041181620005d4565b6040516001600160a01b038216907ff7eed2a7fabbf1bec8d55ed5e785cc76622376dde5df4ff15470551e030b813490600090a250565b90565b62000461816200068760201b620000581760201c565b620004c55760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840162000342565b80620003746000805160206200103a83398151915260001b6200044860201b620000551760201c565b60606001600160a01b0384163b620005585760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b606482015260840162000342565b600080856001600160a01b03168560405162000575919062000bf2565b600060405180830381855af49150503d8060008114620005b2576040519150601f19603f3d011682016040523d82523d6000602084013e620005b7565b606091505b509092509050620005ca82828662000696565b9695505050505050565b620005ea816200068760201b620000581760201c565b6200065e5760405162461bcd60e51b815260206004820152603760248201527f455243313936373a206e6577207365636f6e6461727920696d706c656d656e7460448201527f6174696f6e206973206e6f74206120636f6e7472616374000000000000000000606482015260840162000342565b80620003746000805160206200108183398151915260001b6200044860201b620000551760201c565b6001600160a01b03163b151590565b60608315620006a7575081620003ff565b825115620006b85782518084602001fd5b8160405162461bcd60e51b815260040162000342919062000c10565b60405161014081016001600160401b03811182821017156200070657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160401b03811681146200072457600080fd5b919050565b80516001600160a01b03811681146200072457600080fd5b6000608082840312156200075457600080fd5b604051608081016001600160401b03811182821017156200078557634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006101408284031215620007ca57600080fd5b620007d4620006d4565b9050620007e18262000729565b8152620007f16020830162000729565b6020820152620008046040830162000729565b6040820152620008176060830162000729565b60608201526200082a6080830162000729565b60808201526200083d60a0830162000729565b60a08201526200085060c0830162000729565b60c08201526200086360e0830162000729565b60e08201526101006200087881840162000729565b908201526101206200088c83820162000729565b9082015292915050565b6000808284036102e0811215620008ac57600080fd5b6101a080821215620008bd57600080fd5b620008c7620006d4565b9150620008d4856200070c565b8252620008e4602086016200070c565b6020830152620008f76040860162000729565b604083015260608501516060830152608085015160808301526200091e60a0860162000729565b60a08301526200093160c0860162000729565b60c083015260e085015160e0830152610100620009508187016200070c565b90830152610120620009658787830162000741565b81840152508193506200097b86828701620007b6565b925050509250929050565b80516001600160a01b031682526020810151620009ae60208401826001600160a01b03169052565b506040810151620009ca60408401826001600160a01b03169052565b506060810151620009e660608401826001600160a01b03169052565b50608081015162000a0260808401826001600160a01b03169052565b5060a081015162000a1e60a08401826001600160a01b03169052565b5060c081015162000a3a60c08401826001600160a01b03169052565b5060e081015162000a5660e08401826001600160a01b03169052565b50610100818101516001600160a01b038116848301525050610120818101516001600160a01b0381168483015262000295565b82516001600160401b031681526102e08101602084015162000ab660208401826001600160401b03169052565b50604084015162000ad260408401826001600160a01b03169052565b50606084015160608301526080840151608083015260a084015162000b0260a08401826001600160a01b03169052565b5060c084015162000b1e60c08401826001600160a01b03169052565b5060e084015160e08301526101008085015162000b45828501826001600160401b03169052565b5050610120848101518051848301526020810151610140850152604081015161016085015260608101516101808501525050620003ff6101a083018462000986565b60008282101562000ba857634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b60005b8381101562000be057818101518382015260200162000bc6565b83811115620002955750506000910152565b6000825162000c0681846020870162000bc3565b9190910192915050565b602081526000825180602084015262000c3181604085016020870162000bc3565b601f01601f19169190910160400192915050565b6103c58062000c556000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610067565b61012e565b565b606061004e838360405180606001604052806027815260200161036960279139610152565b9392505050565b90565b6001600160a01b03163b151590565b600060043610156100ad5760405162461bcd60e51b815260206004820152600b60248201526a4e4f5f46554e435f53494760a81b60448201526064015b60405180910390fd5b6000336100b861022d565b6001600160a01b031614156100d4576100cf610260565b6100dc565b6100dc610288565b90506100e781610058565b6101295760405162461bcd60e51b815260206004820152601360248201527215105491d15517d393d517d0d3d395149050d5606a1b60448201526064016100a4565b919050565b3660008037600080366000845af43d6000803e80801561014d573d6000f35b3d6000fd5b606061015d84610058565b6101b85760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016100a4565b600080856001600160a01b0316856040516101d39190610319565b600060405180830381855af49150503d806000811461020e576040519150601f19603f3d011682016040523d82523d6000602084013e610213565b606091505b50915091506102238282866102b0565b9695505050505050565b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b546001600160a01b0316919050565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc610251565b60007f2b1dbce74324248c222f0ec2d5ed7bd323cfc425b336f0253c5ccfda7265546d610251565b606083156102bf57508161004e565b8251156102cf5782518084602001fd5b8160405162461bcd60e51b81526004016100a49190610335565b60005b838110156103045781810151838201526020016102ec565b83811115610313576000848401525b50505050565b6000825161032b8184602087016102e9565b9190910192915050565b60208152600082518060208401526103548160408501602087016102e9565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122060f5deee0a99bbc2c2d0731e05f3c9710ab8e2c75e0cbc20f8935a93229d0b0164736f6c63430008090033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c65642b1dbce74324248c222f0ec2d5ed7bd323cfc425b336f0253c5ccfda7265546d";
const isSuperArgs = (xs) => xs.length > 1;
class RollupProxy__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "RollupProxy";
    }
    deploy(config, connectedContracts, overrides) {
        return super.deploy(config, connectedContracts, overrides || {});
    }
    getDeployTransaction(config, connectedContracts, overrides) {
        return super.getDeployTransaction(config, connectedContracts, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.RollupProxy__factory = RollupProxy__factory;
RollupProxy__factory.bytecode = _bytecode;
RollupProxy__factory.abi = _abi;
