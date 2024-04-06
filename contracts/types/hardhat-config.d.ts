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
    export interface HardhatRuntimeEnvironment {
    viem: {
      getContractAt: (contractName: string, address: string) => Promise<any>;
     
    };
  }
  export interface RunSuperFunction {
    (): Promise<void>;
  }
}
