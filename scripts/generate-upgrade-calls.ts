import {deployCore} from "./deploy/deployCore";
import {run, ethers} from "@nomiclabs/buidler";
import {EnokiSystem} from "./systems/EnokiSystem";
import {Configs, WHALES} from "./config/launchConfig";
import {deployed} from "./deploy/deployed";
import { deployPools } from "./deploy/deployPools";
import Web3 from "web3";
import { deployMushroomStaking } from "./deploy/deployMushroomStaking";
import { generateUpgradeCalls } from "./deploy/generateUpgradeCalls";

async function main() {
    const jsonRpcProvider = ethers.provider;

    const [first, deployer] = await ethers.getSigners();
    
    console.log('Deployer: ', await deployer.getAddress());


    let enoki = EnokiSystem.fromDeployed(
        Configs.MAINNET,
        jsonRpcProvider,
        deployer,
        {testmode: true},
        'pools2.json'
    );

    const updated = await generateUpgradeCalls(enoki, true);
    enoki = updated.enoki;
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
