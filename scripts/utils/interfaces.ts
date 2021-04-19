import {utils} from "ethers";

import IERC20 from "../../artifacts/@openzeppelin/contracts-ethereum-package/contracts/token/ERC20/IERC20.sol/IERC20.json";
import SporeToken from "../../artifacts/contracts/SporeToken.sol/SporeToken.json";
import SporePresale from "../../artifacts/contracts/SporePresale.sol/SporePresale.json";

import GeyserEscrow from "../../artifacts/contracts/GeyserEscrow.sol/GeyserEscrow.json";

import EthVesting from "../../artifacts/contracts/EthVesting.sol/EthVesting.json";
import BannedContractList from "../../artifacts/contracts/BannedContractList.sol/BannedContractList.json";

import TokenVesting from "../../artifacts/contracts/TokenVesting.sol/TokenVesting.json";
import PaymentSplitter from "../../artifacts/contracts/PaymentSplitter.sol/PaymentSplitter.json";
import SporePool from "../../artifacts/contracts/SporePool.sol/SporePool.json";
import MushroomFactory from "../../artifacts/contracts/MushroomFactory.sol/MushroomFactory.json";

import Agent from "../../dependency-artifacts/aragon/Agent.json";
import MiniMeToken from "../../dependency-artifacts/aragon/MiniMeToken.json";
import RateVote from "../../artifacts/contracts/RateVote.sol/RateVote.json";

import EnokiGeyser from "../../artifacts/contracts/EnokiGeyser.sol/EnokiGeyser.json";
import Mission from "../../artifacts/contracts/Mission.sol/Mission.json";
import MetadataResolver from "../../artifacts/contracts/metadata/MetadataResolver.sol/MetadataResolver.json";
import MushroomAdapter from "../../artifacts/contracts/metadata/adapters/MushroomAdapter.sol/MushroomAdapter.json";

import ProxyAdmin from "../../dependency-artifacts/open-zeppelin-upgrades/ProxyAdmin.json";
import AdminUpgradeabilityProxy from "../../dependency-artifacts/open-zeppelin-upgrades/AdminUpgradeabilityProxy.json";

import UniswapV2Pair from "../../dependency-artifacts/uniswap/UniswapV2Pair.json";
import UniswapV2Router from "../../dependency-artifacts/uniswap/UniswapV2Router02.json";
import UniswapV2Factory from "../../dependency-artifacts/uniswap/UniswapV2Factory.json";

import MushroomNFT from "../../artifacts/contracts/MushroomNFT.sol/MushroomNFT.json";
import CentralizedRateVote from "../../artifacts/contracts/CentralizedRateVote.sol/CentralizedRateVote.json";

export const presaleIface = new utils.Interface(SporePresale.abi);
export const proxyAdminIface = new utils.Interface(ProxyAdmin.abi);
export const sporeTokenIface = new utils.Interface(SporeToken.abi);
export const erc20Iface = new utils.Interface(IERC20.abi);
export const uniswapRouterIface = new utils.Interface(UniswapV2Router.abi);
export const geyserEscrowIface = new utils.Interface(GeyserEscrow.abi);
export const missionIface = new utils.Interface(Mission.abi);
export const rateVoteIFace = new utils.Interface(RateVote.abi);

export const sporePoolIface = new utils.Interface(SporePool.abi);
export const mushroomFactoryIface = new utils.Interface(MushroomFactory.abi);
export const bannedContractListIface = new utils.Interface(BannedContractList.abi);

export const mushroomNftIface = new utils.Interface(MushroomNFT.abi);
export const metadataResolverIface = new utils.Interface(MetadataResolver.abi);
export const mushroomAdapterIface = new utils.Interface(MushroomAdapter.abi);

export const centralizedRateVoteIface = new utils.Interface(CentralizedRateVote.abi);