"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyAdmin__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "contract TransparentUpgradeableProxy",
                name: "proxy",
                type: "address",
            },
            {
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "changeProxyAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract TransparentUpgradeableProxy",
                name: "proxy",
                type: "address",
            },
        ],
        name: "getProxyAdmin",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract TransparentUpgradeableProxy",
                name: "proxy",
                type: "address",
            },
        ],
        name: "getProxyImplementation",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract TransparentUpgradeableProxy",
                name: "proxy",
                type: "address",
            },
            {
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "upgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract TransparentUpgradeableProxy",
                name: "proxy",
                type: "address",
            },
            {
                internalType: "address",
                name: "implementation",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "upgradeAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6107408061007e6000396000f3fe60806040526004361061006b5760003560e01c8063204e1c7a14610070578063715018a6146100a65780637eff275e146100bd5780638da5cb5b146100dd5780639623609d146100f257806399a88ec414610105578063f2fde38b14610125578063f3b7dead14610145575b600080fd5b34801561007c57600080fd5b5061009061008b3660046104f6565b610165565b60405161009d919061051a565b60405180910390f35b3480156100b257600080fd5b506100bb6101f6565b005b3480156100c957600080fd5b506100bb6100d836600461052e565b61023a565b3480156100e957600080fd5b506100906102cb565b6100bb61010036600461057d565b6102da565b34801561011157600080fd5b506100bb61012036600461052e565b610370565b34801561013157600080fd5b506100bb6101403660046104f6565b6103cb565b34801561015157600080fd5b506100906101603660046104f6565b61046b565b6000806000836001600160a01b031660405161018b90635c60da1b60e01b815260040190565b600060405180830381855afa9150503d80600081146101c6576040519150601f19603f3d011682016040523d82523d6000602084013e6101cb565b606091505b5091509150816101da57600080fd5b808060200190518101906101ee9190610653565b949350505050565b336101ff6102cb565b6001600160a01b03161461022e5760405162461bcd60e51b815260040161022590610670565b60405180910390fd5b6102386000610491565b565b336102436102cb565b6001600160a01b0316146102695760405162461bcd60e51b815260040161022590610670565b6040516308f2839760e41b81526001600160a01b03831690638f2839709061029590849060040161051a565b600060405180830381600087803b1580156102af57600080fd5b505af11580156102c3573d6000803e3d6000fd5b505050505050565b6000546001600160a01b031690565b336102e36102cb565b6001600160a01b0316146103095760405162461bcd60e51b815260040161022590610670565b60405163278f794360e11b81526001600160a01b03841690634f1ef28690349061033990869086906004016106a5565b6000604051808303818588803b15801561035257600080fd5b505af1158015610366573d6000803e3d6000fd5b5050505050505050565b336103796102cb565b6001600160a01b03161461039f5760405162461bcd60e51b815260040161022590610670565b604051631b2ce7f360e11b81526001600160a01b03831690633659cfe69061029590849060040161051a565b336103d46102cb565b6001600160a01b0316146103fa5760405162461bcd60e51b815260040161022590610670565b6001600160a01b03811661045f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610225565b61046881610491565b50565b6000806000836001600160a01b031660405161018b906303e1469160e61b815260040190565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038116811461046857600080fd5b60006020828403121561050857600080fd5b8135610513816104e1565b9392505050565b6001600160a01b0391909116815260200190565b6000806040838503121561054157600080fd5b823561054c816104e1565b9150602083013561055c816104e1565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561059257600080fd5b833561059d816104e1565b925060208401356105ad816104e1565b9150604084013567ffffffffffffffff808211156105ca57600080fd5b818601915086601f8301126105de57600080fd5b8135818111156105f0576105f0610567565b604051601f8201601f19908116603f0116810190838211818310171561061857610618610567565b8160405282815289602084870101111561063157600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b60006020828403121561066557600080fd5b8151610513816104e1565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60018060a01b038316815260006020604081840152835180604085015260005b818110156106e1578581018301518582016060015282016106c5565b818111156106f3576000606083870101525b50601f01601f19169290920160600194935050505056fea26469706673582212208359527d705e3a7f02ce70ba36485ac49e86845670e6ec95b6948c464899cbdd64736f6c63430008090033";
const isSuperArgs = (xs) => xs.length > 1;
class ProxyAdmin__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "ProxyAdmin";
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
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
exports.ProxyAdmin__factory = ProxyAdmin__factory;
ProxyAdmin__factory.bytecode = _bytecode;
ProxyAdmin__factory.abi = _abi;
