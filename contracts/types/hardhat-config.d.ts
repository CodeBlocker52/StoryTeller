declare module "hardhat/config" {
  import { HardhatUserConfig } from "hardhat/types";
  export function task(name: string, description?: string): TaskDefinition;
  export interface TaskDefinition {
    addParam(name: string, description?: string, defaultValue?: any): TaskDefinition;
    setAction<T>(
      action: (taskArgs: T, hre: HardhatRuntimeEnvironment, runSuper: RunSuperFunction) => Promise<void>,
    ): TaskDefinition;
  }
  export interface HardhatRuntimeEnvironment {
    viem: {
      getContractAt: (contractName: string, address: string) => Promise<any>;
      // Add other methods and properties of 'viem' here as needed
    };
    // Define the properties and methods you need from the HardhatRuntimeEnvironment
    // For example:
    // getContractFactory: (name: string) => Promise<ContractFactory>;
  }
  export interface RunSuperFunction {
    (): Promise<void>;
  }
}
