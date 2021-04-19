import { ExecOptionsWithStringEncoding } from "child_process";
import {utils} from "ethers";

export interface MissionPool {
    assetName: string;
    assetAddress: string;
    sporePool: string;
    mushroomFactory: string;
    rateVote: string;
}

export interface EnokiAddresses {
    sporeToken: string;
    presale: string;
    missionsProxy: string;
    missionsLogic: string;
    lpTokenVesting: string;
    sporePoolLogic: string;
    sporePoolEthLogic: string;
    mushroomFactoryLogic: string;
    enokiGeyserEscrow: string;
    enokiGeyserProxy: string;
    enokiGeyserLogic: string;
    enokiToken: string;
    enokiDaoAgent: string;
    devFundPaymentSplitter: string;
    devFundEthVesting: string;
    devMultisig: string;
    proxyAdmin: string;
    bannedContractProxy: string;
    bannedContractLogic: string;
    centralizedRateVoteLogic: string;
    centralizedRateVoteProxy: string;
    mushroomNftProxy: string;
    mushroomNftLogic: string;
    metadataResolverProxy: string;
    metadataResolverLogic: string;
    mushroomAdapterProxy: string;
    mushroomAdapterLogic: string;
    missionPools: MissionPool[]
}

/* export const deployed: EnokiAddresses = {
    sporeToken: utils.getAddress("0xa4Bad5d040d4464EC5CE130987731F2f428c9307"),
    presale: utils.getAddress("0xAa402E8a2E9A5825578850008896C492483F1607"),
    missionsProxy: utils.getAddress("0x1c586b2Ff4e13211aAe187244aef8D4312515151"),
    missionsLogic: utils.getAddress("0x86Cf5Ff6186f42C208f5005151391C5b7344864B"),
    lpTokenVesting: utils.getAddress("0x27b85fd1e4d89f729db3dbaee8a7245ce349e28a"),
    enokiGeyserEscrow: utils.getAddress("0xb0aeCC06f79d3a480E9bE21da8908E8087c49669"),
    enokiGeyserProxy: utils.getAddress("0xf616AA8c22F100fc8D479dCfc1BD905b4D6Fa591"),
    enokiGeyserLogic: utils.getAddress("0x25868456df5d0Eb687E8e2578884bF9171B8bdBa"),
    enokiToken: utils.getAddress("0x886058deded1325a27697122512f618db590ea32"),
    enokiDaoAgent: utils.getAddress("0x37e52356b6602028c7e6cb2803ea0e024a621fd4"),
    devFundPaymentSplitter: utils.getAddress("0xa2bA49EAE61F38Fa07E716D3210E0ca7868c744D"),
    devFundEthVesting: utils.getAddress("0xdb6D78F9C091c5B78319B921Cdde107d1Abf347F"),
    devMultisig: utils.getAddress("0x4f8fDC5D03B21aE85c5E451efE454D6e550fF761"),
    proxyAdmin: utils.getAddress("0x8a51e4C8EAaF044Ec82A11Ac3a991B1B2c247325"),
    bannedContractProxy: utils.getAddress("0x185d8B73D389Bb233328533CDFe8cc3A57E1fb54"),
    bannedContractLogic: utils.getAddress("0xe15b59c65e58416E37E83D5d2C095b4817e75766"),
    mushroomNftProxy: utils.getAddress("0x3De05fbaeeefB97B51fF6518E0f7F51F27d14ce7"),
    mushroomNftLogic: utils.getAddress("0xf43691c1CB3cFDd3aCE0fef2f41Ab08D8273Fcc0"),
    metadataResolverProxy: utils.getAddress("0xa6e8E562a7253DF0f93567E9430Ee880535225BC"),
    metadataResolverLogic: utils.getAddress("0x94586f68d6a331c6758701C0267A35b722E21958"),
    mushroomAdapterProxy: utils.getAddress("0xb3c8Bc203407BAc5bAFF494E87EF25f5d2EA1F12"),
    mushroomAdapterLogic: utils.getAddress("0xC2437749Eb51480F2A01a7bC5702843fc1E3B7c2"),
} */

export const deployed: EnokiAddresses =
{
    sporeToken: utils.getAddress("0xa4Bad5d040d4464EC5CE130987731F2f428c9307"),
    presale: utils.getAddress("0xAa402E8a2E9A5825578850008896C492483F1607"),
    missionsProxy: utils.getAddress("0x1c586b2Ff4e13211aAe187244aef8D4312515151"),
    missionsLogic: utils.getAddress("0x86Cf5Ff6186f42C208f5005151391C5b7344864B"),
    lpTokenVesting: utils.getAddress("0x27B85fD1E4D89f729DB3dBAeE8A7245CE349e28A"),
    sporePoolLogic: utils.getAddress("0x2A2AE317cB41aB066663da5f12779f9f70a51302"),
    sporePoolEthLogic: utils.getAddress("0x2F151438D1549556163f3b6740944241809d2E01"),
    mushroomFactoryLogic: utils.getAddress("0x3C0cb9C732372A851F883b7B90F76A201c6832De"),
    mushroomNftLogic: utils.getAddress("0xc210027395608059681199265409a2b5309e4686"),
    mushroomNftProxy: utils.getAddress("0x2a4D9Aa94f7d5Ee5651EbcF94D6e12CD34232433"),
    metadataResolverLogic: utils.getAddress("0x2caD77c7B09d88dE5203E7de8A2e629d2E67656E"),
    metadataResolverProxy: utils.getAddress("0x57FbB17a0cc4DfD4d88CC3bdFd10Ae4b64a483E2"),
    mushroomAdapterLogic: utils.getAddress("0xd39C0AE274dce3D070C90DCc67BBb25C0A038C22"),
    mushroomAdapterProxy: utils.getAddress("0xA336a449b155249654BfE129875D6c3CfD82A16f"),
    bannedContractLogic: utils.getAddress("0x3C0cb9C732372A851F883b7B90F76A201c6832De"),
    bannedContractProxy: utils.getAddress("0xadfe24DEa1E94247642fdB8A6077ec91AaD6a0d8"),
    centralizedRateVoteLogic: utils.getAddress("0x98084f164Ce6F801F84Deb389b19Ab502380E5D9"),
    centralizedRateVoteProxy: utils.getAddress("0xfBF304Ba4670622478ab7755058125a8Df379826"),
    enokiGeyserEscrow: utils.getAddress("0xb0aeCC06f79d3a480E9bE21da8908E8087c49669"),
    enokiGeyserProxy: utils.getAddress("0xf616AA8c22F100fc8D479dCfc1BD905b4D6Fa591"),
    enokiGeyserLogic: utils.getAddress("0xe45Bba22B783175710f69FB6757ad471a0Cb58C3"),
    enokiToken: utils.getAddress("0x886058DeDEd1325A27697122512F618db590eA32"),
    enokiDaoAgent: utils.getAddress("0x37e52356b6602028c7E6Cb2803ea0e024a621Fd4"),
    devFundPaymentSplitter: utils.getAddress("0xa2bA49EAE61F38Fa07E716D3210E0ca7868c744D"),
    devFundEthVesting: utils.getAddress("0xdb6D78F9C091c5B78319B921Cdde107d1Abf347F"),
    devMultisig: utils.getAddress("0x4f8fDC5D03B21aE85c5E451efE454D6e550fF761"),
    proxyAdmin: utils.getAddress("0x8a51e4C8EAaF044Ec82A11Ac3a991B1B2c247325"),
    //deployerAddress: "0xe9673e2806305557Daa67E3207c123Af9F95F9d2",
    missionPools: [
        {
            assetName: "ETH",
            assetAddress: "0x0000000000000000000000000000000000000000",
            sporePool: "0xAC49Bd103CA6C1812a2a71bfF43B3fffe553B6D8",
            mushroomFactory: "0xF19532A791A2EaC4c1Be5716831d5B948E5fae2f",
            rateVote: "0x76353F2A5d6bfA0198f2bb7379eDb33bBec03c44"
        },
        {
            assetName: "FARM",
            assetAddress: "0xa0246c9032bC3A600820415aE600c6388619A14D",
            sporePool: "0xEA46c37eBD7630B6DDCb10EaC597C37d5F887C53",
            mushroomFactory: "0x49129E70401b69CC167427B28F1Ce57e77750Cd8",
            rateVote: "0xbe4287e48e1738a52c28e99dB44A0DB4d3D7cA82"
        },
        {
            assetName: "SPORE",
            assetAddress: "0xa4Bad5d040d4464EC5CE130987731F2f428c9307",
            sporePool: "0x91a73ca83Ada33800C8bFA982f3998Df5a7afA90",
            mushroomFactory: "0xB06d29e05DaAf4674519DB7B5AA948d36B350eE1",
            rateVote: "0x794AB1847B8ac28635CFeB0600C942Ed5cc4847A"
        },
        {
            assetName: "ENOKI<>ETH_Uni_LP",
            assetAddress: "0x284fa4627AF7Ad1580e68481D0f9Fc7e5Cf5Cf77",
            sporePool: "0x0C9a62478cAF29157543d89AdADf32bAC5cd4ba9",
            mushroomFactory: "0xa9cfCc5a540724f95d72DF490e4F55d79BB14c78",
            rateVote: "0x9347921cE1a6286dEAEf224da93fcF5F59B4277C"
        },
        {
            assetName: "SPORE<>ETH_Uni_LP",
            assetAddress: "0x3eb9833BBEA994287A2227E3fEBa0D3Dc5D99F05",
            sporePool: "0x3350438bd37BA0Ff3700b406A8d9B40c62684794",
            mushroomFactory: "0x6A37023F78A0cB39688B2fCDcA2Daab10AE4470e",
            rateVote: "0xF7d100E0386d3d2C68d39A6c7f0Dda801182B84F"
        }
    ]
}