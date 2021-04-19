import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import { HardhatUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-etherscan";
import "solidity-coverage";
import "hardhat-gas-reporter";


//import {task, usePlugin} from "@nomiclabs/buidler/config";
//import {BuidlerConfig} from "@nomiclabs/buidler/config";
//import dotenv from "dotenv";

//dotenv.config();
//usePlugin("@nomiclabs/buidler-waffle");
//usePlugin("@nomiclabs/buidler-etherscan");

// This is a sample Buidler task. To learn how to create your own go to
// https://buidler.dev/guides/create-task.html
/* task("accounts", "Prints the list of accounts", async (taskArgs, bre) => {
    const accounts = await bre.ethers.getSigners();

    for (const account of accounts) {
        console.log(await account.getAddress());
    }
}); */
const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    solidity: {
        compilers: [{
            version: "0.6.12", settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        }],
    },
    networks: {
        hardhat: {
            accounts: {
                count: 100,
            },
            blockGasLimit: 12500000
        },
        forknet: {
            url: "http://localhost:8545"
            //url: process.env.FORKNET_NODE_URL!,
            //accounts: { mnemonic: process.env.MNEMONIC! },
            //timeout: 0,
        },
        mainnet: {
            url: "http://localhost:8545"
            //url: process.env.MAINNET_NODE_URL!,
            //accounts: { mnemonic: process.env.MNEMONIC! },
            //timeout: 0,
        },
        coverage: {
            url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
        },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY!
    },
    mocha: {
        timeout: 0,
        bail: true
    },
    gasReporter: {
        enabled: true
    }
};

export default config;

/*
const config: BuidlerConfig = {
    defaultNetwork: "buidlerevm",
    networks: {
        buidlerevm: {
            chainId: 31337,
            blockGasLimit: 12500000,
        },
        ganache: {
            url: "http://localhost:8545",
            accounts: { mnemonic: process.env.MNEMONIC! },
            timeout: 0,
        },
        forknet: {
            url: process.env.FORKNET_NODE_URL!,
            accounts: { mnemonic: process.env.MNEMONIC! },
            timeout: 0,
        },
        mainnet: {
            url: process.env.MAINNET_NODE_URL!,
            accounts: { mnemonic: process.env.MNEMONIC! },
            timeout: 0,
        },
    },
    solc: {
        version: "0.6.11",
        optimizer: {
            enabled: true,
            runs: 200,
        },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY!
    }
};

export default config;
*/
