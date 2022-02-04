/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TypedMemView, TypedMemViewInterface } from "../TypedMemView";

const _abi = [
  {
    inputs: [],
    name: "NULL",
    outputs: [
      {
        internalType: "bytes29",
        name: "",
        type: "bytes29",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60cd610025600b82828239805160001a60731461001857fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063f26be3fc146038575b600080fd5b603e6073565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009092168252519081900360200190f35b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008156fea2646970667358221220b07daa2cfa732a0712e14f333f7fb26a0736db4a4fce155c515a5dd1fc062de564736f6c63430007060033";

export class TypedMemView__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TypedMemView> {
    return super.deploy(overrides || {}) as Promise<TypedMemView>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TypedMemView {
    return super.attach(address) as TypedMemView;
  }
  connect(signer: Signer): TypedMemView__factory {
    return super.connect(signer) as TypedMemView__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TypedMemViewInterface {
    return new utils.Interface(_abi) as TypedMemViewInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TypedMemView {
    return new Contract(address, _abi, signerOrProvider) as TypedMemView;
  }
}