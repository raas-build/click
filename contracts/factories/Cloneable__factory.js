"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloneable__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "isMaster",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x6080604052348015600f57600080fd5b506000805460ff1916600117905560868061002b6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80636f791d2914602d575b600080fd5b60336047565b604080519115158252519081900360200190f35b60005460ff169056fea26469706673582212209c4423140c1c6cef987783aaf0cc62c2e9e3adbb4ceaa2f73a18a5ed247b9bd164736f6c634300060b0033";
const isSuperArgs = (xs) => xs.length > 1;
class Cloneable__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "Cloneable";
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
exports.Cloneable__factory = Cloneable__factory;
Cloneable__factory.bytecode = _bytecode;
Cloneable__factory.abi = _abi;
