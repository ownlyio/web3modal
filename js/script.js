let cacheVersion;
let ownContractAddress;
let titansContract;
let titansContractAddress;
let titansContractAbi;
let mustachiosContract;
let mustachiosContractAddress;
let mustachiosContractAbi;
let genesisBlockContract;
let genesisBlockContractAddress;
let genesisBlockContractAbi;
let sagesRantContract;
let sagesRantContractAddress;
let sagesRantContractAbi;
let ownlyHouseOfArtContract;
let ownlyHouseOfArtContractAddress;
let ownlyHouseOfArtContractAbi;
let rewardsContract;
let rewardsContractAddress;
let rewardsContractAbi;
let chenInkContract;
let chenInkContractAddress;
let chenInkContractAbi;
let marketplaceBinanceContractAddress;
let marketplaceBinanceContract;
let marketplaceBinanceAbi;
let marketplaceEthereumContractAddress;
let marketplaceEthereumContract;
let marketplaceEthereumAbi;
let marketplacePolygonContractAddress;
let marketplacePolygonContract;
let marketplacePolygonAbi;
let marketplaceContracts;
let collectionContract;
let sparkSwapContractAddress;
let sparkSwapContract;
let sparkSwapContractAbi;
let url;
let rpcEndpointBsc;
let blockchainExplorerBsc;
let chainIDBsc;
let rpcEndpointEth;
let blockchainExplorerEth;
let chainIDEth;
let rpcEndpointMatic;
let blockchainExplorerMatic;
let chainIDMatic;
let ownlyAPI;
let web3Bsc;
let web3Eth;
let web3Matic;
let web3;
let ownContract;
let ownContractAbi;
let approveButton;
let listingPrice;
let currentPage;
let address = false;
let loading_interval;
let isConnectedToMetamask = false;
let content;
let hasMarketplaceEthereumContract = false;
let hasMarketplacePolygonContract = false;
let searchTimeout;
let mainWalletAddress;
let marketItemsEth;
let localStorage;
let tokensContainerInitialContent;

let initializeEnvVariables = () => {
    let currentURL = window.location.href;

    if(currentURL.includes("ownly.market")) {
    // if(true) {
        titansContractAddress = "0x804efc52BFa9B85A86219c191d51147566f3B327";
        titansContractAbi = [{"inputs":[{"internalType":"address","name":"admin_","type":"address"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenURI","type":"string"}],"name":"createToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unsetPause","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        mustachiosContractAddress = "0x9e7a3A2e0c60c70eFc115BF03e6c544Ef07620E5";
        mustachiosContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PROVENANCE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastMintedTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"max_mustachios","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintMustachio","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveMustachios","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintPrice","type":"uint256"}],"name":"setMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        genesisBlockContractAddress = "0x2C51aF2916eb9CF6392768158eAa39306779EE85";
        genesisBlockContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PROVENANCE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"mintMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        sagesRantContractAddress = "0x6BE5A289FADfFB9BC8ad508682dffBB6Fa440298";
        sagesRantContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PROVENANCE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"mintMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        ownlyHouseOfArtContractAddress = "0xF8167889B4431d61e1eD667b836AFec84EB01576";
        ownlyHouseOfArtContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PROVENANCE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"mintMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        chenInkContractAddress = "0x804efc52BFa9B85A86219c191d51147566f3B327";
        chenInkContractAbi = [{"constant":true,"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"baseURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"mintTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"baseTokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contractURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"approved","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"}];

        rewardsContractAddress = "0x3E191Ed002F3e62144f488d14Acf1B0B404bDF99";
        rewardsContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"burnBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"mintBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}];

        ownContractAddress = "0x7665CB7b0d01Df1c9f9B9cC66019F00aBD6959bA";
        ownContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

        marketplaceBinanceContractAddress = "0x6fCdeF3F1ee15109Aa91e7195834438264e91744";
        marketplaceBinanceAbi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"string","name":"currency","type":"string"},{"indexed":false,"internalType":"uint256","name":"listingPrice","type":"uint256"}],"name":"MarketItemCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"},{"internalType":"address","name":"_owner","type":"address"}],"name":"addNftFirstOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"cancelMarketItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"a","type":"string"},{"internalType":"string","name":"b","type":"string"}],"name":"compareStrings","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"}],"name":"createMarketItem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"string","name":"currency","type":"string"}],"name":"createMarketSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"fetchMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyNFTs","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"marketItemId","type":"uint256"}],"name":"getMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"getNftFirstOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_listingPrice","type":"uint256"}],"name":"setListingPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}];

        if(hasMarketplaceEthereumContract) {
            marketplaceEthereumContractAddress = "0xB781092d4056FF0447C3Ef9acf25A2173CeE13a8";
            marketplaceEthereumAbi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"listingPrice","type":"uint256"}],"name":"MarketItemCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"cancelMarketItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"createMarketItem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"createMarketSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"fetchMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyNFTs","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"marketItemId","type":"uint256"}],"name":"getMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_listingPrice","type":"uint256"}],"name":"setListingPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}];
        }

        if(hasMarketplacePolygonContract) {
            marketplacePolygonContractAddress = "";
            marketplacePolygonAbi = [];
        }

        rpcEndpointEth = "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
        rpcEndpointBsc = "https://bsc-dataseed.binance.org/";
        rpcEndpointMatic = "https://polygon-rpc.com/";

        blockchainExplorerEth = "https://etherscan.io/";
        blockchainExplorerBsc = "https://bscscan.com/";
        blockchainExplorerMatic = "https://polygonscan.com/";

        chainIDEth = 1;
        chainIDBsc = 56;
        chainIDMatic = 137;

        url = "https://ownly.market/";
        ownlyAPI = "https://ownly.tk/";
        mainWalletAddress = "0x672b733C5350034Ccbd265AA7636C3eBDDA2223B";
    } else {
        titansContractAddress = "0xB9f74a918d3bF21be452444e65039e6365DF9B98";
        titansContractAbi = [{"inputs":[{"internalType":"address","name":"admin_","type":"address"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenURI","type":"string"}],"name":"createToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unsetPause","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        mustachiosContractAddress = "0x421dC2b62713223491Daf075C23B39EF0E340E94";
        mustachiosContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PROVENANCE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastMintedTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"max_mustachios","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintMustachio","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveMustachios","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintPrice","type":"uint256"}],"name":"setMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
        
        genesisBlockContractAddress = "0xbE76ACbd4fE046e1dD2e89f5978DA1c81C41f311";
        genesisBlockContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PROVENANCE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"mintMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        sagesRantContractAddress = "0x3cAdd328751F218D00676a52fa37bd9DD907be43";
        sagesRantContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PROVENANCE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"mintMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        ownlyHouseOfArtContractAddress = "0x75862066c869875A3725B6669a30059F3C7D4C15";
        ownlyHouseOfArtContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PROVENANCE_HASH","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"mintMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

        chenInkContractAddress = "0x01d46447398Cc1ea64356d10D975f652874eF361";
        chenInkContractAbi = [{"constant":true,"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"baseURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"mintTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"baseTokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contractURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"approved","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"}];

        rewardsContractAddress = "0xe26Bbc6af3ec3c2b80971910A12eddd1626B28c1";
        rewardsContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"burnBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"mintBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}];

        ownContractAddress = "0xC3Df366fAf79c6Caff3C70948363f00b9Ac55FEE";
        ownContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

        marketplaceBinanceContractAddress = "0x08dE2F3295D0a3280601A2Fd72Ce44124391ff1e";
        marketplaceBinanceAbi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"string","name":"currency","type":"string"},{"indexed":false,"internalType":"uint256","name":"listingPrice","type":"uint256"}],"name":"MarketItemCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"},{"internalType":"address","name":"_owner","type":"address"}],"name":"addNftFirstOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"cancelMarketItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"a","type":"string"},{"internalType":"string","name":"b","type":"string"}],"name":"compareStrings","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"}],"name":"createMarketItem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"string","name":"currency","type":"string"}],"name":"createMarketSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"fetchMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyNFTs","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"marketItemId","type":"uint256"}],"name":"getMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct Marketplace.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"getNftFirstOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_listingPrice","type":"uint256"}],"name":"setListingPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}];

        marketplaceEthereumContractAddress = "0x1861C868b6A3ebD312559888d59a08f4A8929980";
        marketplaceEthereumAbi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"string","name":"currency","type":"string"},{"indexed":false,"internalType":"uint256","name":"listingPrice","type":"uint256"}],"name":"MarketItemCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"MarketItemSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"},{"internalType":"address","name":"_owner","type":"address"}],"name":"addNftFirstOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"cancelMarketItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"a","type":"string"},{"internalType":"string","name":"b","type":"string"}],"name":"compareStrings","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"}],"name":"createMarketItem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"string","name":"currency","type":"string"}],"name":"createMarketSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContractAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"fetchMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct MarketplaceEth.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct MarketplaceEth.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyNFTs","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct MarketplaceEth.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"marketItemId","type":"uint256"}],"name":"getMarketItem","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"currency","type":"string"},{"internalType":"uint256","name":"listingPrice","type":"uint256"},{"internalType":"bool","name":"cancelled","type":"bool"}],"internalType":"struct MarketplaceEth.MarketItem","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"getNftFirstOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_listingPrice","type":"uint256"}],"name":"setListingPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}];

        marketplacePolygonContractAddress = "";
        marketplacePolygonAbi = [];

        rpcEndpointEth = "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
        rpcEndpointBsc = "https://data-seed-prebsc-2-s2.binance.org:8545/";
        rpcEndpointMatic = "https://rpc-mumbai.matic.today";

        blockchainExplorerEth = "https://rinkeby.etherscan.io/";
        blockchainExplorerBsc = "https://testnet.bscscan.com/";
        blockchainExplorerMatic = "https://mumbai.polygonscan.com/";

        chainIDEth = 4;
        chainIDBsc = 97;
        chainIDMatic = 80001;

        url = "http://ownlyio.marketplace.test/";
        ownlyAPI = "http://ownly-api.test/";
        mainWalletAddress = "0x768532c218f4f4e6E4960ceeA7F5a7A947a1dd61";
    }

    sparkSwapContractAddress = "0xeB98E6e5D34c94F56708133579abB8a6A2aC2F26";
    sparkSwapContractAbi = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

    $(".website-home-link").attr("href", url);
    cacheVersion = $("#script").attr("src").split("?v=")[1];
    $("#app-version").text(cacheVersion);

    localStorage = window.localStorage;
};
let initiate_loading_page = () => {
    loading_interval = setInterval(function() {
        if($("#loading-ownly").css('opacity') === "1") {
            $("#loading-ownly").css('opacity', '0.3');
        } else {
            $("#loading-ownly").css('opacity', '1');
        }
    }, 1100);

    let all = document.getElementsByTagName("*");
    for (let i=0, max=all.length; i < max; i++)
    {
        loading_set_ele(all[i]);
    }
};
let loading_check_element = (ele) => {
    let all = document.getElementsByTagName("*");
    let per_inc=100/all.length;

    if($(ele).on())
    {
        let prog_width=per_inc+Number(document.getElementById("progress_width").value);
        document.getElementById("progress_width").value=prog_width;
        $("#loading-page-progress-bar").css("width", prog_width + "%")
    } else {
        loading_set_ele(ele);
    }
}
let loading_set_ele = (set_element) => {
    loading_check_element(set_element);
}
let close_loading_page = () => {
    let loadingOwnlyContainer = $("#loading-ownly-container");

    loadingOwnlyContainer.removeClass("d-flex");
    loadingOwnlyContainer.addClass("d-none");

    clearInterval(loading_interval);
};
let initializeTooltip = function() {
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
};
let findGetParameter = (parameterName) => {
    let result = null,
        tmp = [];
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
};
let numberFormat = function(x, decimal) {
    x = parseFloat(x);
    let parts = x;

    if(decimal !== false) {
        parts = parts.toFixed(decimal)
    }

    parts = parts.toString().split(".");

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if(decimal !== 0) {
        return parts.join(".");
    } else {
        return parts[0];
    }
};
let initializePage = () => {
    let app = $("#app");
    let pageContent = $("#page-content");

    let network = findGetParameter("network");
    let contract = findGetParameter("contract");
    let token = findGetParameter("token");
    let collection = findGetParameter("collection");
    let profile = findGetParameter("profile");
    let tab = findGetParameter("tab");
    let page = findGetParameter("page");
    let sales = findGetParameter("sales");

    if(network && contract && token) {
        pageContent.load(url + "js/../token.html?v=" + cacheVersion, async function() {
            currentPage = "token";

            contract = web3Bsc.utils.toChecksumAddress(contract);

            await updateConnectToWallet();

            displayToken(network, contract, token);

            if(contract === titansContractAddress && network === "bsc") {
                collection = "titans-of-industry";
            } else if(contract === mustachiosContractAddress && network === "eth") {
                collection = "the-mustachios";
            } else if(contract === chenInkContractAddress && network === "eth" && token <= 53) {
                collection = "cryptosolitaire";
            } else if(contract === chenInkContractAddress && network === "eth" && token >= 54) {
                collection = "inkvadyrz";
            } else if(contract === rewardsContractAddress && network === "matic") {
                collection = "rewards";
            } else if(contract === genesisBlockContractAddress && network === "eth") {
                collection = "genesis-block";
            } else if(contract === sagesRantContractAddress && network === "eth") {
                collection = "the-sages-rant-collectibles";
            } else if(contract === ownlyHouseOfArtContractAddress && network === "eth") {
                collection = "oha";
            }

            $(".about-the-collection[data-collection='" + collection + "']").removeClass("d-none");

            displayArtistSection((collection === "rewards" || collection === "the-sages-rant-collectibles") ? "the-mustachios" : collection);
            displayTokens(network, token, "all", collection, []);

            app.removeClass("d-none");
        });
    } else if(profile) {
        pageContent.load(url + "js/../profile.html?v=" + cacheVersion, async function() {
            $("#pills-account-settings-tab").attr("href", "?profile=" + profile);
            $("#pills-owned-tab").attr("href", "?profile=" + profile + "&tab=owned");
            $("#pills-favorites-tab").attr("href", "?profile=" + profile + "&tab=favorites");

            if(tab === "owned") {
                currentPage = "profile:owned";

                $("#pills-owned-tab").addClass("active");
                $("#owned-container").removeClass("d-none");

                await updateConnectToWallet();

                displayProfilePage(profile, page, 'owned');
            } else if(tab === "favorites") {
                currentPage = "profile:favorites";

                await updateConnectToWallet();

                $("#pills-favorites-tab").addClass("active");
                $("#favorites-container").removeClass("d-none");

                displayProfilePage(profile, page, 'favorited');
            } else {
                currentPage = "profile:settings";

                $("#pills-account-settings-tab").addClass("active");
                $("#account-settings-container").removeClass("d-none");

                await updateConnectToWallet();

                displayProfilePage(profile, page, 'owned');
            }
        });
    } else if(sales) {
        pageContent.load(url + "js/../sales.html?v=" + cacheVersion, async function() {
            displaySales(page);
            app.removeClass("d-none");
        });
    } else if(collection || !collection) {
        pageContent.load(url + "js/../home.html?v=" + cacheVersion, async function() {
            tokensContainerInitialContent = $("#tokens-container").html();
            initializeTooltip();

            if(!collection) {
                collection = "oha";
            }

            currentPage = "home";

            network = getCollectionNetwork(collection);
            displayTokens(network, 0, "all", collection, [], page);
            displayCollectionProperties(collection);

            $(".header-collection").addClass("d-none");
            $(".header-collection[data-collection='" + collection + "']").removeClass("d-none");

            if(collection === "rewards") {
                $("#artist-section").addClass("d-none");
            } else {
                displayArtistSection((collection === "the-sages-rant-collectibles") ? "the-mustachios" : collection);
            }

            if(collection === "oha") {
                start_countdown();
            }

            $(".collection-tab[data-collection='" + collection + "']").addClass("active");

            $(".collection-dropdown-item[data-collection='" + collection + "']").addClass("active");

            $(".collection-section").addClass("d-none");
            $(".collection-section[data-collection='" + collection + "']").removeClass("d-none");

            let filterByProperties = $("#filter-by-properties");
            filterByProperties.attr("data-network", network);
            filterByProperties.attr("data-collection", collection);

            app.removeClass("d-none");
        });
    }

    $(".replace-host").each(function() {
        $(this).attr("href", $(this).attr("href").replace("http://ownlyio.dev-marketplace.test/", url));
    });
};
// let connectToMetamask = async () => {
//     if(!isConnectedToMetamask) {
//         if (window.ethereum) {
//             try {
//                 ethereum.on('accountsChanged', (accounts) => {
//                     address = (accounts.length > 0) ? accounts[0] : false;
//
//                     updateConnectToWallet();
//                     initializePage();
//                 });
//
//                 ethereum.on('chainChanged', (_chainId) => window.location.reload());
//
//                 web3Bsc = new Web3(ethereum);
//
//                 initializeContracts();
//
//                 return true;
//             } catch (error) {
//                 $("#modal-no-metamask-installed").modal("show");
//                 return false;
//             }
//         } else {
//             $("#modal-no-metamask-installed").modal("show");
//             return false;
//         }
//     } else {
//         return true;
//     }
// };
let updateConnectToWallet = async () => {
    // let accounts = await web3Eth.eth.getAccounts();
    // address = (accounts.length > 0) ? accounts[0] : false;
    //
    // console.log(address);

    if(!address) {
        try {
            // accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            // address = (accounts.length > 0) ? accounts[0] : false;
        } catch(e) {}
    }

    if(address) {
        $("#connect-wallet-container").addClass("d-none");

        let accountAddress = $("#account-address");

        let content = ' <div class="d-flex align-items-center">';
        content += '        <div class="background-image-cover" id="profile-photo" style="width:35px; height:35px; border-radius:50%; border:1px solid #aaaaaa">';
        content += '            <svg data-jdenticon-value="" class="jdenticon w-100 h-100" style="border-radius:50%">';
        content += '                Fallback text or image for browsers not supporting inline svg.';
        content += '            </svg>';
        content += '        </div>';
        content += '        <span class="font-size-90 ps-2">' + shortenAddress(web3Bsc.utils.toChecksumAddress(address), 5, 5) + "&nbsp;" + '</span>';
        content += '    </div>';

        accountAddress.html(content);
        accountAddress.removeClass("d-none");

        jdenticon.update("#profile-photo .jdenticon", address.toString());

        accountAddress.attr("href", "?profile=" + address);

        let form_data = new FormData();
        form_data.append('address', address);

        $.ajax({
            url: ownlyAPI + "api/get-account-settings",
            method: "POST",
            cache: false,
            contentType: false,
            processData: false,
            data: form_data
        }).done(async function(response) {
            if(response.data && response.data.photo) {
                let profilePhoto = $("#profile-photo");

                profilePhoto.html("");
                profilePhoto.css("background-image", "url(" + response.data.photo + ")");
            }
        }).fail(function(error) {
            console.log(error);
        });
    } else {
        $("#account-address").addClass("d-none");
        $("#connect-wallet-container").removeClass("d-none");
    }
};
let initializeWeb3 = async () => {
    try {
        ethereum.on('accountsChanged', (accounts) => {
            address = (accounts.length > 0) ? accounts[0] : false;

            updateConnectToWallet();
            initializePage();
        });

        ethereum.on('chainChanged', (_chainId) => window.location.reload());
    } catch (error) {}

    web3Bsc = new Web3(rpcEndpointBsc);
    web3Eth = new Web3(rpcEndpointEth);
    web3Matic = new Web3(rpcEndpointMatic);

    web3 = {
        bsc: new Web3(rpcEndpointBsc),
        eth: new Web3(rpcEndpointEth),
        matic: new Web3(rpcEndpointMatic)
    };

    let getStakingData = function(address, staking_type, page) {
        $.get("https://api.covalenthq.com/v1/56/address/" + address + "/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=true&no-logs=false&page-number=" + page + "&key=ckey_994c8fdd549f44fa9b2b27f59a0", async function(data) {
            let events = ["Staked", "RewardPaid"];

            if(data) {
                let items = data.data.items;
                let transactions = [];

                for(let i = 0; i < items.length; i++) {
                    if(staking_type === "liquidity") {
                        let j = items[i].log_events.length - 1;

                        if(events.includes(items[i].log_events[j].decoded.name)) {
                            transactions.push(items[i].log_events[j]);
                        }
                    } else if(staking_type === "pool-based") {
                        for(let j = 0; j < items[i].log_events.length; j++) {
                            if(items[i].log_events[j].decoded && items[i].log_events[j].decoded.name === "Transfer") {
                                transactions.push(items[i]);
                                break;
                            }
                        }
                    }
                }

                $.post(ownlyAPI + "api/add-staking-transactions", {
                    transactions: JSON.stringify(transactions),
                    staking: address
                }, function(data) {
                    let earners = data.earners;

                    let web3 = new Web3("https://bsc-dataseed.binance.org/");
                    let stakingContract;
                    if(staking_type === "liquidity") {
                        stakingContract = new web3.eth.Contract([{"inputs":[{"internalType":"address","name":"_rewardsDistribution","type":"address"},{"internalType":"address","name":"_rewardsToken","type":"address"},{"internalType":"address","name":"_stakingToken","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getRewardForDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardsDistribution","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardsDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardsToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"stakeWithPermit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}], address);
                    } else if(staking_type === "pool-based") {
                        stakingContract = new web3.eth.Contract([{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenRecovered","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AdminTokenRecovery","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolLimitPerUser","type":"uint256"}],"name":"NewPoolLimit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"rewardPerBlock","type":"uint256"}],"name":"NewRewardPerBlock","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"}],"name":"NewStartAndEndBlocks","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"RewardsStop","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"PRECISION_FACTOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SPARKPOOLV2_FACTORY","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"accTokenPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"hasUserLimit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IBEP20","name":"_stakedToken","type":"address"},{"internalType":"contract IBEP20","name":"_rewardToken","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"},{"internalType":"uint256","name":"_poolLimitPerUser","type":"uint256"},{"internalType":"address","name":"_admin","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isInitialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastRewardBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLimitPerUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"}],"name":"recoverWrongTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakedToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stopReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_hasUserLimit","type":"bool"},{"internalType":"uint256","name":"_poolLimitPerUser","type":"uint256"}],"name":"updatePoolLimitPerUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"}],"name":"updateRewardPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"}],"name":"updateStartAndEndBlocks","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}], address);
                    }

                    for(let i = 0; i < earners.length; i++) {
                        if(staking_type === "liquidity") {
                            stakingContract.methods.earned(earners[i]).call()
                                .then(function(earned) {
                                    stakingContract.methods.balanceOf(earners[i]).call()
                                        .then(function(staked) {
                                            $.post(ownlyAPI + "api/update-staking-earnings", {
                                                staking: address,
                                                address: earners[i],
                                                earned: earned,
                                                staked: staked
                                            }, function(data) {

                                            }).fail(function(error) {
                                                console.log(error);
                                            });
                                        });
                                });
                        } else if(staking_type === "pool-based") {
                            stakingContract.methods.pendingReward(earners[i]).call()
                                .then(function(earned) {
                                    stakingContract.methods.userInfo(earners[i]).call()
                                        .then(function(staked) {
                                            $.post(ownlyAPI + "api/update-staking-earnings", {
                                                staking: address,
                                                address: earners[i],
                                                earned: earned,
                                                staked: staked[0]
                                            }, function(data) {

                                            }).fail(function(error) {
                                                console.log(error);
                                            });
                                        });
                                });
                        }
                    }
                }).fail(function(error) {
                    console.log(error);
                });

                if(data.data.pagination.has_more) {
                    setTimeout(function() {
                        getStakingData(address, staking_type, page + 1);
                    }, 5000);
                }
            }
        });
    }

    // getStakingData("0xda687D1d31392B957166f6C16E508b484f3A70cb", "liquidity", 0);
    // getStakingData("0x5950060609b2037330c16491aa9f2cd3ed6db154", "pool-based",  0);
};
let initializeContracts = () => {
    titansContract = new web3Bsc.eth.Contract(titansContractAbi, titansContractAddress);
    mustachiosContract = new web3Eth.eth.Contract(mustachiosContractAbi, mustachiosContractAddress);
    genesisBlockContract = new web3Eth.eth.Contract(genesisBlockContractAbi, genesisBlockContractAddress);
    sagesRantContract = new web3Eth.eth.Contract(sagesRantContractAbi, sagesRantContractAddress);
    ownlyHouseOfArtContract = new web3Eth.eth.Contract(ownlyHouseOfArtContractAbi, ownlyHouseOfArtContractAddress);
    chenInkContract = new web3Eth.eth.Contract(chenInkContractAbi, chenInkContractAddress);
    rewardsContract = new web3Matic.eth.Contract(rewardsContractAbi, rewardsContractAddress);
    ownContract = new web3Bsc.eth.Contract(ownContractAbi, ownContractAddress);
    sparkSwapContract = new (new Web3("https://bsc-dataseed.binance.org/")).eth.Contract(sparkSwapContractAbi, sparkSwapContractAddress);

    marketplaceBinanceContract = new web3Bsc.eth.Contract(marketplaceBinanceAbi, marketplaceBinanceContractAddress);

    if(hasMarketplaceEthereumContract) {
        marketplaceEthereumContract = new web3Eth.eth.Contract(marketplaceEthereumAbi, marketplaceEthereumContractAddress);
    }

    if(hasMarketplacePolygonContract) {
        marketplacePolygonContract = new web3Eth.eth.Contract(marketplacePolygonAbi, marketplacePolygonContractAddress);
    }

    marketplaceContracts = {
        bsc: marketplaceBinanceContract,
        eth: marketplaceEthereumContract,
        matic: marketplacePolygonContract
    };
};
let initializeListingPrice = () => {
    marketplaceBinanceContract.methods.getListingPrice().call()
        .then(function(data) {
            listingPrice = data;
        });
};
let displayArtistSection = function(collection) {
    $("#artist-section").load(url + "js/../artist.html?v=" + cacheVersion, function() {
        $(".artist-container[data-collection='" + collection + "']").removeClass("d-none");

        if(collection === "oha") {
            $("#meet-the-artist-text").text("MEET THE ARTISTS");
        }

        Ellipsis({
            class: '.ellipsis',
            lines: 3
        });
    });
};
let displayTokens = async (network, excludedToken, type, collection, filters, page) => {
    let chainId;
    if(network === "eth") {
        chainId = chainIDEth;
    } else if(network === "matic") {
        chainId = chainIDMatic;
    }

    $.get(ownlyAPI + "api/get-tokens/" + collection, {
        address: address,
        page: page,
        excludedToken: excludedToken,
        filters: JSON.stringify(filters)
    }, async function(data) {
        let metadata = data.tokens.data;

        generatePagination(data.tokens, url + '?collection=' + collection);

        if(metadata.length === 0) {
            $("#loading-container").addClass("d-none");
            $("#tokens-container").html('<div class="text-center text-color-7 font-size-160 my-5 py-5">No items to display</div>');
            $(".property-filter-item").prop("disabled", false);
            return 0;
        }

        collectionContract = new web3[network].eth.Contract(JSON.parse(data.collection.abi), data.collection.contract_address);

        let view = (localStorage.getItem("view")) ? localStorage.getItem("view") : 'large-grid';
        $(".change-token-view").removeClass("active");
        $(".change-token-view[value='" + view + "']").addClass("active");
        $("#view-options-container").removeClass("d-none");

        let getOwnerOf = function(marketItem, metadata) {
            collectionContract.methods.ownerOf(metadata.token_id).call()
                .then(async function(owner) {
                    update_token_transaction(data.collection.chain_id, data.collection.contract_address, metadata.token_id, metadata.to, owner);
                    let content = await formatTokenCards(excludedToken, type, metadata.token_id, marketItem, metadata, owner, data.collection.contract_address, network);

                    content = (view === "list") ? generateListView(content) : content;

                    $("#loading-container").addClass("d-none");
                    $(".property-filter-item").prop("disabled", false);

                    if(type === "all") {
                        $("#tokens-container").html($("#tokens-container").html() + content);
                    } else if(type === "owned") {
                        $("#owned-tokens-container").html($("#owned-tokens-container").html() + content);
                    } else if(type === "favorites") {
                        $("#favorite-tokens-container").html($("#favorite-tokens-container").html() + content);
                    }
                });
        };

        for(let i = 0; i < metadata.length; i++) {
            if(marketplaceContracts[network]) {
                marketplaceContracts[network].methods.fetchMarketItem(data.collection.contract_address, metadata[i].token_id).call()
                    .then(async function(marketItem) {
                        getOwnerOf(marketItem, metadata[i]);
                    });
            } else {
                let marketItem = true;
                getOwnerOf(marketItem, metadata[i]);
            }
        }
    });
};
let displayCollectionProperties = function(collection) {
    $.get(ownlyAPI + "api/get-collection-properties/" + collection, async function(data) {
        let properties = data.properties;
        let content = '';

        for(let i in properties) {
            if (properties.hasOwnProperty(i)) {
                content += '        <div class="col-6 col-sm-4 col-md-3 col-xl-2 mb-3">';
                content += '            <div class="text-color-5 font-size-90 px-1 mb-2">' + i + '</div>';
                content += '            <div class="px-1" style="max-height:130px; overflow-y:scroll">';

                let property = properties[i];

                for (let j in property) {
                    if (property.hasOwnProperty(j)) {
                        content += '        <div class="form-check form-switch">';
                        content += '            <input class="form-check-input property-filter-item" type="checkbox" role="switch" id="' + i + '-' + j + '" data-property="' + i + '" data-value="' + j + '">';
                        content += '            <label class="form-check-label font-size-80" for="' + i + '-' + j + '" style="margin-top:5px">' + j + ' (' + property[j] + ')</label>';
                        content += '        </div>';
                    }
                }

                content += '            </div>';
                content += '        </div>';
            }
        }

        $("#property-filter-items").html(content);
    });
};
let displayOwnedTokens = async function(profile, page) {
    $.get(ownlyAPI + "api/owned_tokens/" + ((profile) ? profile : "0") + ((page) ? ("?page=" + page) : ""), async function(ownedTokens) {
        let metadata = ownedTokens.data;

        generatePagination(ownedTokens, url + '?profile=' + profile + "&tab=owned");

        for(let i = 0; i < metadata.length; i++) {
            console.log(metadata[i]);
            if(parseInt(metadata[i].chain_id) === chainIDBsc) {
                marketplaceBinanceContract.methods.fetchMarketItem(metadata[i].contract_address, metadata[i].id).call()
                    .then(async function(marketItem) {
                        let content = await formatTokenCards(null, "owned", metadata[i].id, marketItem, metadata[i], profile, metadata[i].contract_address, "bsc");
                        $("#owned-tokens-container").html($("#owned-tokens-container").html() + content);
                    });
            } else if(parseInt(metadata[i].chain_id) === chainIDEth) {
                if(hasMarketplaceEthereumContract) {
                    marketplaceEthereumContract.methods.fetchMarketItem(metadata[i].contract_address, metadata[i].id).call()
                        .then(async function(marketItem) {
                            let content = await formatTokenCards(null, "owned", metadata[i].id, marketItem, metadata[i], profile, metadata[i].contract_address, "eth");
                            $("#owned-tokens-container").html($("#owned-tokens-container").html() + content);
                        });
                } else {
                    let marketItem = false;
                    let content = await formatTokenCards(null, "owned", metadata[i].id, marketItem, metadata[i], profile, metadata[i].contract_address, "eth");
                    $("#owned-tokens-container").html($("#owned-tokens-container").html() + content);
                }
            } else if(parseInt(metadata[i].chain_id) === chainIDMatic) {
                if(hasMarketplacePolygonContract) {
                    marketplacePolygonContract.methods.fetchMarketItem(metadata[i].contract_address, metadata[i].id).call()
                        .then(async function(marketItem) {
                            let content = await formatTokenCards(null, "owned", metadata[i].id, marketItem, metadata[i], profile, metadata[i].contract_address, "eth");
                            $("#owned-tokens-container").html($("#owned-tokens-container").html() + content);
                        });
                } else {
                    let marketItem = false;
                    let content = await formatTokenCards(null, "owned", metadata[i].id, marketItem, metadata[i], profile, metadata[i].contract_address, "eth");
                    $("#owned-tokens-container").html($("#owned-tokens-container").html() + content);
                }
            }
        }

        if(metadata.length === 0) {
            let content = ' <div class="d-flex flex-column align-items-center py-5 mb-5">';
            content += '        <div class="mb-4">';
            content += '            <i class="far fa-images text-color-5 font-size-600"></i>';
            content += '        </div>';
            content += '        <div>No owned tokens from our collections yet.<div>';
            content += '    </div>';

            $("#owned-tokens-container").html(content);
        } else {
            $("#loading-container-owned-tokens").removeClass("d-flex");
            $("#loading-container-owned-tokens").addClass("d-none");
        }
    });
};
let displayFavoritedTokens = async function(profile, page) {
    $.post(ownlyAPI + "api/get-market-item-user-favorites" + ((page) ? ("?page=" + page) : ""), {
        address: profile
    }, async function(favoritedTokens) {
        content = '';

        let metadata = favoritedTokens.data;

        generatePagination(favoritedTokens, url + '?profile=' + profile + "&tab=favorites");

        for(let i = 0; i < metadata.length; i++) {
            if(parseInt(metadata[i].chain_id) === chainIDBsc) {
                marketplaceBinanceContract.methods.fetchMarketItem(metadata[i].contract_address, metadata[i].id).call()
                    .then(async function(marketItem) {
                        let content = await formatTokenCards(null, "favorites", metadata[i].id, marketItem, metadata[i], metadata[i].to, metadata[i].contract_address, "bsc");
                        $("#favorite-tokens-container").html($("#favorite-tokens-container").html() + content);
                    });
            } else if(parseInt(metadata[i].chain_id) === chainIDEth) {
                if(hasMarketplaceEthereumContract) {
                    marketplaceEthereumContract.methods.fetchMarketItem(metadata[i].contract_address, metadata[i].id).call()
                        .then(async function(marketItem) {
                            let content = await formatTokenCards(null, "favorites", metadata[i].id, marketItem, metadata[i], metadata[i].to, metadata[i].contract_address, "eth");
                            $("#favorite-tokens-container").html($("#favorite-tokens-container").html() + content);
                        });
                } else {
                    let marketItem = false;
                    let content = await formatTokenCards(null, "owned", metadata[i].id, marketItem, metadata[i], metadata[i].to, metadata[i].contract_address, "eth");
                    $("#favorite-tokens-container").html($("#favorite-tokens-container").html() + content);
                }
            } else if(parseInt(metadata[i].chain_id) === chainIDMatic) {
                if(hasMarketplacePolygonContract) {
                    marketplacePolygonContract.methods.fetchMarketItem(metadata[i].contract_address, metadata[i].id).call()
                        .then(async function(marketItem) {
                            let content = await formatTokenCards(null, "favorites", metadata[i].id, marketItem, metadata[i], metadata[i].to, metadata[i].contract_address, "eth");
                            $("#favorite-tokens-container").html($("#favorite-tokens-container").html() + content);
                        });
                } else {
                    let marketItem = false;
                    let content = await formatTokenCards(null, "favorites", metadata[i].id, marketItem, metadata[i], metadata[i].to, metadata[i].contract_address, "eth");
                    $("#favorite-tokens-container").html($("#favorite-tokens-container").html() + content);
                }
            }
        }

        if(metadata.length === 0) {
            let content = ' <div class="d-flex flex-column align-items-center py-5 mb-5">';
            content += '        <div class="mb-4">';
            content += '            <i class="far fa-images text-color-3 font-size-600"></i>';
            content += '        </div>';
            content += '        <div>No added favorite tokens yet.<div>';
            content += '    </div>';

            $("#favorite-tokens-container").html(content);
        } else {
            $("#loading-container-favorite-tokens").removeClass("d-flex");
            $("#loading-container-favorite-tokens").addClass("d-none");
        }
    }).fail(function(error) {
        console.log(error);
    });
};
let formatTokenCards = async function(excludedToken, type, i, marketItem, metadata, owner, contractAddress, network) {
    let chainId;
    let explorerName;
    let blockchainExplorer;
    if(network === "bsc") {
        chainId = chainIDBsc;
        explorerName = "BscScan";
        blockchainExplorer = blockchainExplorerBsc;
    } else if(network === "eth") {
        chainId = chainIDEth;
        explorerName = "Etherscan";
        blockchainExplorer = blockchainExplorerEth;
    } else if(network === "matic") {
        chainId = chainIDMatic;
        explorerName = "PolygonScan";
        blockchainExplorer = blockchainExplorerMatic;
    }

    let view = localStorage.getItem('view');
    if(!view) {
        view = "large-grid";
        localStorage.setItem('view', view);
    }
    view = (excludedToken) ? "small-grid" : view;

    let grid = "col-sm-6 col-xl-4";
    let fontSize = "font-size-100";
    let descriptionHeight = "min-height:51px; max-height:51px";
    if(view === "small-grid") {
        grid = "col-6 col-sm-4 col-xl-3"
        fontSize = "font-size-80";
        descriptionHeight = "min-height:43px; max-height:43px";
    } else if(view === "list") {
        grid = "col-xl-4"
    }

    let padding_top = "100%";
    let link = '?network=' + network + '&contract=' + contractAddress + '&token=' + i;

    let content = '    <div class="' + grid + ' ' + fontSize + ' ' + ((excludedToken) ? 'mb-4' : 'mb-5') + ' pb-md-3 px-lg-4">';
    content += '        <div class="token-card" data-token-id="' + i + '">';
    content += '            <a href="' + link + '" class="link token-image-link">';
    if(metadata.thumbnail.includes(".mp4")) {
        content += '            <div class="w-100 shadow-sm border-1 position-relative mb-3" style="padding-top:' + padding_top + '; border:1px solid #cccccc; background-color:rgba(0,0,0,0.01); border-radius:10px">';
        content += '                <div class="d-flex justify-content-center align-items-center w-100 h-100" style="position:absolute; top:0; left:0">';
        content += '                    <div>';
        content += '                        <video autoplay loop muted preload class="w-100" style="border-radius:10px"><source src="' + metadata.thumbnail + '" type="video/mp4"></video>';
        content += '                    </div>';
        content += '                </div>';
        content += '            </div>';
    } else {
        content += '            <div class="w-100 background-image-contain token-image shadow-sm border-1 mb-3" style="background-image:url(\'' + metadata.thumbnail + '\'); padding-top:' + padding_top + '; border:1px solid #cccccc; background-color:rgba(0,0,0,0.01); border-radius:10px"></div>';
    }
    content += '            </a>';
    content += '            <div class="d-flex flex-column justify-content-between h-100 token-header">';
    content += '                <div class="d-flex justify-content-between">';
    content += '                    <div class="d-flex align-items-center mb-1" style="min-height:61px">';
    content += '                        <a href="' + link + '" class="font-size-160 neo-bold token-name link text-color-6 text-decoration-none">' + metadata.name + '</a>';
    content += '                    </div>';
    content += '                    <div class="d-flex align-items-center py-1 ps-3 add-to-favorites-container">';
    content += '                        <div class="">';
    content += '                            <button class="btn add-to-favorites p-0 m-0" data-contract-address="' + contractAddress + '" data-token-id="' + i +'" data-status="' + ((metadata.favorite_status) ? 1 : 0) + '" style="width:24px; height:24px; border-radius:50%; box-shadow: none">';
    content += '                                <i class="' + ((metadata.favorite_status) ? 'fas' : 'far') + ' fa-heart font-size-140 text-color-1"></i>';
    content += '                            </button>';
    content += '                        </div>';
    content += '                        <div class="ps-2 font-size-90 text-color-1 favorites-count">' + metadata.favorite_count + '</div>';
    content += '                    </div>';
    content += '                </div>';
    content += '            </div>';
    content += '            <div class="token-body">';
    if(metadata.supply === undefined || metadata.supply === 1) {
        content += '            <div class="font-size-110 mb-2 pb-1">1 of 1 - Single Edition</div>';
    } else {
        content += '            <div class="font-size-110 mb-2 pb-1">Multiple Editions</div>';
    }
    content += '                <div class="font-size-90 mb-4 token-description-truncated overflow-hidden" style="' + descriptionHeight + '">' + metadata.description + '</div>';
    content += '            </div>';

    // Bruteforce display for genesis block
    let soldGenesisBlock = [3];

    content += '            <div class="token-footer">';
    if(owner === mainWalletAddress && network === "eth") {
        let price = 0;

        try {
            await $.get("https://api.opensea.io/api/v1/asset/" + contractAddress + "/" + i, async function(data) {
                if(data && data.orders && data.orders.length > 0) {
                    price = web3Bsc.utils.fromWei(data.orders[0].base_price, "ether");
                }
            });
        } catch (error) {}

        content += '                <div class="row align-items-center">';
        content += '                    <div class="col-6">';
        if(price > 0) {
            content += '                    <div class="d-flex align-items-end mb-1">';
            content += '                        <div class="font-size-100 font-size-md-110">Price:</div>';
            content += '                        <div class="ps-2 ms-1">';
            content += '                            <img src="img/tokens/ETH.png" width="30" />';
            content += '                        </div>';
            content += '                    </div>';
            content += '                    <div class="font-size-160 font-size-md-180 neo-black">' + price + ' ETH</div>';
        }
        content += '                    </div>';
        content += '                    <div class="col-6 button-container">';
        content += '                        <a href="https://opensea.io/assets/' + contractAddress + '/' + i + '" class="btn btn-custom-2 w-100 line-height-110 font-size-90 font-size-lg-110 font-size-xl-110 font-size-xxl-120 neo-bold link" style="border-radius:15px">OWN NOW</a>';
        content += '                    </div>';
        content += '                </div>';
    } else {
        if(parseInt(marketItem.itemId)) {
            content += '                <div class="row align-items-center">';
            content += '                    <div class="col-6">';
            content += '                        <div class="d-flex align-items-end mb-1">';
            content += '                            <div class="font-size-100 font-size-md-110">Price:</div>';
            if(marketItem.currency === "OWN") {
                content += '                        <div class="ps-2 ms-1">';
                content += '                            <img src="img/ownly/own-token.png" width="30" />';
                content += '                        </div>';
            } else if(marketItem.currency === "BNB") {
                content += '                        <div class="ps-2 ms-1">';
                content += '                            <img src="img/bnb/bnb.webp" width="30" />';
                content += '                        </div>';
            }
            content += '                        </div>';
            content += '                        <div class="font-size-160 font-size-md-180 neo-black">' + web3Bsc.utils.fromWei(marketItem.price, "ether") + ' ' + ((hasMarketplaceEthereumContract) ? marketItem.currency : ((marketItem.currency) ? marketItem.currency : "BNB")) + '</div>';
            content += '                    </div>';
            if(contractAddress === titansContractAddress) {
                content += '                <div class="col-6 button-container">';
                if(address && web3Bsc.utils.toChecksumAddress(owner) === web3Bsc.utils.toChecksumAddress(address)) {
                    content += '                <button class="btn btn-custom-3 w-100 line-height-110 font-size-90 font-size-lg-110 font-size-xl-110 font-size-xxl-120 neo-bold link cancel-market-item-confirmation" data-item-id="' + marketItem.itemId + '" style="border-radius:15px">CANCEL</button>';
                } else {
                    content += '                <button class="btn btn-custom-2 w-100 line-height-110 font-size-90 font-size-lg-110 font-size-xl-110 font-size-xxl-120 neo-bold link create-market-sale-confirmation" data-item-id="' + marketItem.itemId + '" data-price="' + marketItem.price + '" data-currency="' + marketItem.currency + '" style="border-radius:15px">OWN NOW</button>';
                }
            }
            content += '                    </div>';
            content += '                </div>';
            content += '                <div class="owner d-none">' + owner + '</div>';
        } else {
            if(chainId !== chainIDMatic) {
                content += '                <div class="row align-items-center" style="min-height:69px">';
                content += '                    <div class="col-6">';
                content += '                        <div>';
                content += '                            <a href="' + blockchainExplorer + "tx/" + metadata.transaction_hash + '" target="_blank" class="link-color-4 font-size-90 text-decoration-none transaction-hash">View on ' + explorerName + '</a>';
                content += '                        </div>';
                content += '                        <div class="font-size-100 neo-bold">Owner</div>';
                content += '                        <div class="font-size-90 owner-address"><a href="' + url + '?profile=' + owner + '" class="link-color-4 text-decoration-none">' + shortenAddress(web3Bsc.utils.toChecksumAddress(owner), 5, 5) + '</a></div>';
                content += '                    </div>';
                content += '                    <div class="col-6">';
                if(hasMarketplaceEthereumContract || contractAddress === titansContractAddress) {
                    if(address && web3Bsc.utils.toChecksumAddress(owner) === web3Bsc.utils.toChecksumAddress(address)) {
                        content += '                <button class="btn btn-custom-4 w-100 line-height-110 font-size-90 font-size-lg-110 font-size-xl-110 font-size-xxl-120 neo-bold create-market-item-confirmation" data-token-id="' + i + '" style="border-radius:15px">SELL NOW</button>';
                    } else {
                        content += '                <div class="w-100 line-height-110 font-size-90 font-size-lg-110 font-size-xl-110 font-size-xxl-120 text-center neo-bold link" style="border-radius:5px; background-color:#e1e3e3; border-color:#c7c9c9; padding-top:6px; padding-bottom:6px; line-height:1.5">SOLD OUT</div>';
                    }
                }

                // Bruteforce display for genesis block
                if(web3Bsc.utils.toChecksumAddress(contractAddress) === web3Bsc.utils.toChecksumAddress(genesisBlockContractAddress) && soldGenesisBlock.includes(i)) {
                    content += '                <div class="w-100 line-height-110 font-size-90 font-size-lg-110 font-size-xl-110 font-size-xxl-120 text-center neo-bold link" style="border-radius:5px; background-color:#e1e3e3; border-color:#c7c9c9; padding-top:6px; padding-bottom:6px; line-height:1.5">SOLD OUT</div>';
                }

                content += '                    </div>';
                content += '                </div>';
            }
        }
    }
    content += '                </div>';
    content += '            </div>';
    content += '        </div>';
    content += '    </div>';

    if(address && owner.toLowerCase() === address.toLowerCase()) {
        $(".token-card[data-token-id='" + i + "']").find("#create-market-item-confirmation").removeClass("d-none");
    }

    return content;
};
let generateListView = function(content) {
    let temp = $("#temp");
    temp.html(content);

    content = '     <div class="col-12 mb-4 font-size-100 font-size-md-100">';
    content += '        <div class="d-flex align-items-start align-items-md-center">';
    content += '            <div class="mt-2 list-token-image-container">' + temp.find(".token-image-link").html() + '</div>';
    content += '            <div class="flex-fill px-4">';
    content += '                <div class="">' + temp.find(".token-header").html() + '</div>';
    content += '                <div class="row align-items-center">';
    content += '                    <div class="col-12 col-md-6 pe-4 list-token-body">' + temp.find(".token-body").html() + '</div>';
    content += '                    <div class="col-12 col-md-6 ps-4">' + temp.find(".token-footer").html() + '</div>';
    content += '                </div>';
    content += '            </div>';
    content += '        </div>';
    content += '    </div>';

    return content;
};
let generatePagination = function(pagination, pageUrl) {
    let paginationContainer = $("#pagination-container");
    paginationContainer.addClass("d-none");

    if(pagination.last_page > 1) {
        let interval = 2;
        let from = pagination.current_page - interval;
        if (from < 1) {
            from = 1;
        }

        let to = pagination.current_page + interval;
        if (to > pagination.last_page) {
            to = pagination.last_page;
        }

        let content = ' <div class="d-flex justify-content-center">';
        content += '        <nav aria-label="Page navigation example">';
        content += '            <ul class="pagination">';

        if (pagination.current_page > 1) {
            content += '            <li class="page-item">';
            content += '                <a href="' + pageUrl + '&page=1' + '" class="page-link px-3 py-2">';
            content += '                    <span aria-hidden="true">«</span>';
            content += '                </a>';
            content += '            </li>';

            content += '            <li class="page-item">';
            content += '                <a href="' + pageUrl + '&page=' + ((pagination.current_page - 1 === 0) ? 1 : pagination.current_page - 1) + '" class="page-link px-3 py-2">';
            content += '                    <span aria-hidden="true">‹</span>';
            content += '                </a>';
            content += '            </li>';
        }

        for(let i = from; i <= to; i++) {
            let current_page = pagination.current_page === i;

            content += '            <li class="page-item ' + (current_page ? 'active' : '') + '">';
            content += '                <a href="' + (!current_page ? (pageUrl + '&page=' + i) : '#') + '" class="page-link px-3 py-2">' + i + '</a>';
            content += '            </li>';
        }

        if(pagination.current_page < pagination.last_page) {
            content += '            <li class="page-item">';
            content += '                <a href="' + pageUrl + '&page=' + ((pagination.current_page + 1 > pagination.last_page) ? pagination.last_page : pagination.current_page + 1) + '" class="page-link px-3 py-2">';
            content += '                    <span aria-hidden="true">›</span>';
            content += '                </a>';
            content += '            </li>';

            content += '            <li class="page-item">';
            content += '                <a href="' + pageUrl + '&page=' + pagination.last_page + '" class="page-link px-3 py-2">';
            content += '                    <span aria-hidden="true">»</span>';
            content += '                </a>';
            content += '            </li>';
        }

        content += '            </ul>';
        content += '        </nav>';
        content += '    </div>';

        paginationContainer.html(content);
        paginationContainer.removeClass("d-none");
    }
};
let displayToken = (network, contractAddress, token) => {
    if(contractAddress === titansContractAddress && network === "bsc") {
        displayTitanToken(token);
    } else if(contractAddress === mustachiosContractAddress && network === "eth") {
        displayMustachioToken(token);
    } else if(contractAddress === chenInkContractAddress && network === "eth") {
        displayChenInkToken(token);
    } else if(contractAddress === rewardsContractAddress && network === "matic") {
        displayRewardToken(token);
    } else if(contractAddress === genesisBlockContractAddress && network === "eth") {
        displayGenesisBlockToken(token);
    } else if(contractAddress === sagesRantContractAddress && network === "eth") {
        displaySagesRantToken(token);
    } else if(contractAddress === ownlyHouseOfArtContractAddress && network === "eth") {
        displayOwnlyHouseOfArtToken(token);
    }
};
let displayTitanToken = (token) => {
    $.get(ownlyAPI + "api/titan/" + ((address) ? address : "0") + "/" + titansContractAddress + "/" + token, async function(metadata) {
        displayTokenMetadata(chainIDBsc, metadata, titansContractAddress, token);

        marketplaceBinanceContract.methods.fetchMarketItem(titansContractAddress, token).call()
            .then(function(marketItem) {
                titansContract.methods.ownerOf(token).call()
                    .then(async function(owner) {
                        update_token_transaction(chainIDBsc, titansContractAddress, metadata.id, metadata.to, owner);
                        displayTokenDetails(metadata, marketItem, token, owner, titansContractAddress, "bsc");
                    });
            });
    });
};
let displayMustachioToken = (token) => {
    $.get(ownlyAPI + "api/mustachio/" + ((address) ? address : "0") + "/" + mustachiosContractAddress + "/" + token, async function(metadata) {
        displayTokenMetadata(chainIDEth, metadata, mustachiosContractAddress, token);

        $("#additional-assets-container").removeClass("d-none");
        $("#transparent-bg-mustachio-preload").attr("src", metadata.trans_bg);
        $("#transparent-bg-mustachio").attr("href", metadata.trans_bg);

        if(hasMarketplaceEthereumContract) {
            marketplaceEthereumContract.methods.fetchMarketItem(mustachiosContractAddress, token).call()
                .then(function(marketItem) {
                    mustachiosContract.methods.ownerOf(token).call()
                        .then(async function(owner) {
                            update_token_transaction(chainIDEth, mustachiosContractAddress, metadata.id, metadata.to, owner);
                            displayTokenDetails(metadata, marketItem, token, owner, mustachiosContractAddress, "eth");
                        });
                });
        } else {
            let marketItem = false;
            mustachiosContract.methods.ownerOf(token).call()
                .then(async function(owner) {
                    update_token_transaction(chainIDEth, mustachiosContractAddress, metadata.id, metadata.to, owner);
                    displayTokenDetails(metadata, marketItem, token, owner, mustachiosContractAddress, "eth");
                });
        }
    });
};
let displayGenesisBlockToken = (token) => {
    $.get(ownlyAPI + "api/genesis-block-token/" + ((address) ? address : "0") + "/" + genesisBlockContractAddress + "/" + token, async function(metadata) {
        displayTokenMetadata(chainIDEth, metadata, genesisBlockContractAddress, token);

        if(hasMarketplaceEthereumContract) {
            marketplaceEthereumContract.methods.fetchMarketItem(genesisBlockContractAddress, token).call()
                .then(function(marketItem) {
                    genesisBlockContract.methods.ownerOf(token).call()
                        .then(async function(owner) {
                            update_token_transaction(chainIDEth, genesisBlockContractAddress, metadata.id, metadata.to, owner);
                            displayTokenDetails(metadata, marketItem, token, owner, genesisBlockContractAddress, "eth");
                        });
                });
        } else {
            let marketItem = false;
            genesisBlockContract.methods.ownerOf(token).call()
                .then(async function(owner) {
                    update_token_transaction(chainIDEth, genesisBlockContractAddress, metadata.id, metadata.to, owner);
                    displayTokenDetails(metadata, marketItem, token, owner, genesisBlockContractAddress, "eth");
                });
        }
    });
};
let displaySagesRantToken = (token) => {
    $.get(ownlyAPI + "api/sages-rant-collectible/" + ((address) ? address : "0") + "/" + sagesRantContractAddress + "/" + token, async function(metadata) {
        displayTokenMetadata(chainIDEth, metadata, sagesRantContractAddress, token);

        if(hasMarketplaceEthereumContract) {
            marketplaceEthereumContract.methods.fetchMarketItem(sagesRantContractAddress, token).call()
                .then(function(marketItem) {
                    sagesRantContract.methods.ownerOf(token).call()
                        .then(async function(owner) {
                            update_token_transaction(chainIDEth, sagesRantContractAddress, metadata.id, metadata.to, owner);
                            displayTokenDetails(metadata, marketItem, token, owner, sagesRantContractAddress, "eth");
                        });
                });
        } else {
            let marketItem = false;
            sagesRantContract.methods.ownerOf(token).call()
                .then(async function(owner) {
                    update_token_transaction(chainIDEth, sagesRantContractAddress, metadata.id, metadata.to, owner);
                    displayTokenDetails(metadata, marketItem, token, owner, sagesRantContractAddress, "eth");
                });
        }
    });
};
let displayOwnlyHouseOfArtToken = (token) => {
    $.get(ownlyAPI + "api/oha-token/" + ((address) ? address : "0") + "/" + ownlyHouseOfArtContractAddress + "/" + token, async function(metadata) {
        displayTokenMetadata(chainIDEth, metadata, ownlyHouseOfArtContractAddress, token);

        if(hasMarketplaceEthereumContract) {
            marketplaceEthereumContract.methods.fetchMarketItem(ownlyHouseOfArtContractAddress, token).call()
                .then(function(marketItem) {
                    ownlyHouseOfArtContract.methods.ownerOf(token).call()
                        .then(async function(owner) {
                            update_token_transaction(chainIDEth, ownlyHouseOfArtContractAddress, metadata.id, metadata.to, owner);
                            displayTokenDetails(metadata, marketItem, token, owner, ownlyHouseOfArtContractAddress, "eth");
                        });
                });
        } else {
            let marketItem = false;
            ownlyHouseOfArtContract.methods.ownerOf(token).call()
                .then(async function(owner) {
                    update_token_transaction(chainIDEth, ownlyHouseOfArtContractAddress, metadata.id, metadata.to, owner);
                    displayTokenDetails(metadata, marketItem, token, owner, ownlyHouseOfArtContractAddress, "eth");
                });
        }
    });
};
let displayChenInkToken = (token) => {
    $.get(ownlyAPI + "api/cryptosolitaire/" + ((address) ? address : "0") + "/" + chenInkContractAddress + "/" + token, async function(metadata) {
        displayTokenMetadata(chainIDEth, metadata, chenInkContractAddress, token);

        if(hasMarketplaceEthereumContract) {
            marketplaceEthereumContract.methods.fetchMarketItem(chenInkContractAddress, token).call()
                .then(function(marketItem) {
                    chenInkContract.methods.ownerOf(token).call()
                        .then(async function(owner) {
                            update_token_transaction(chainIDEth, chenInkContractAddress, metadata.id, metadata.to, owner);
                            displayTokenDetails(metadata, marketItem, token, owner, chenInkContractAddress, "eth");
                        });
                });
        } else {
            let marketItem = false;
            chenInkContract.methods.ownerOf(token).call()
                .then(async function(owner) {
                    update_token_transaction(chainIDEth, chenInkContractAddress, metadata.id, metadata.to, owner);
                    displayTokenDetails(metadata, marketItem, token, owner, chenInkContractAddress, "eth");
                });
        }
    });
};
let displayRewardToken = (token) => {
    $.get(ownlyAPI + "api/reward/" + ((address) ? address : "0") + "/" + rewardsContractAddress + "/" + token, async function(metadata) {
        displayTokenMetadata(chainIDMatic, metadata, rewardsContractAddress, token);

        if(hasMarketplacePolygonContract) {
            marketplacePolygonContract.methods.fetchMarketItem(rewardsContractAddress, token).call()
                .then(function(marketItem) {
                    rewardsContract.methods.ownerOf(token).call()
                        .then(async function(owner) {
                            update_token_transaction(chainIDMatic, rewardsContractAddress, metadata.id, metadata.to, owner);
                            displayTokenDetails(metadata, marketItem, token, owner, rewardsContractAddress, "matic");
                        });
                });
        } else {
            let marketItem = false;
            let owner = "0x768532c218f4f4e6E4960ceeA7F5a7A947a1dd61";
            // rewardsContract.methods.ownerOf(token).call()
            //     .then(async function(owner) {
                    update_token_transaction(chainIDMatic, rewardsContractAddress, metadata.id, metadata.to, owner);
                    displayTokenDetails(metadata, marketItem, token, owner, rewardsContractAddress, "matic");
                // });
        }
    });
};
let displayTokenMetadata = function(chainID, metadata, contractAddress, token) {
    let content = '';
    if(metadata.thumbnail.includes(".mp4")) {
        content += '    <div class="w-100 shadow-sm border-1 position-relative bg-color-1 mb-3" style="padding-top:100%; border:1px solid #cccccc; background-color:rgba(0,0,0,0.01); border-radius:10px">';
        content += '        <div class="d-flex justify-content-center align-items-center w-100 h-100" style="position:absolute; top:0; left:0">';
        content += '            <video controls autoPlay loop muted preload class="w-100" id="token-video" style="border-radius:10px">';
        content += '                <source src="' + metadata.thumbnail + '" type="video/mp4">';
        content += '            </video>';
        content += '        </div>';
        content += '    </div>';

        $("#token-asset-container").html(content);
    } else {
        let tokenImage = $("#token-image");
        tokenImage.attr("src", metadata.thumbnail);
        tokenImage.removeClass("d-none");
    }

    $("#token-name").text(metadata.name);
    $("#token-description").text(metadata.description);
    $("#token-id").text(token);
    $(".create-market-item-confirmation").attr("data-token-id", token);

    $("#token-original-image").attr("href", metadata.image);
    $("#token-original-image-preload").attr("src", metadata.image);

    let addToFavoritesButton = $(".add-to-favorites");
    addToFavoritesButton.attr("data-contract-address", contractAddress);
    addToFavoritesButton.attr("data-token-id", token);

    if(metadata.favorite_status) {
        addToFavoritesButton.find("i").addClass("fas");
    } else {
        addToFavoritesButton.find("i").addClass("far");
    }

    $(".favorites-count").text(metadata.favorite_count);

    let attributes = JSON.parse(metadata.attributes);
    content = '';

    for(let i = 0; i < attributes.length; i++) {
        content += '    <div class="col-md-6 col-xl-4 p-2">';
        content += '        <div class="card bg-light h-100">';
        content += '            <div class="card-body h-100">';
        content += '                <div class="d-flex justify-content-center align-items-center h-100">';
        content += '                    <div class="text-center">';
        content += '                        <div class="neo-bold font-size-80 mb-1 text-uppercase text-color-7">' + attributes[i].trait_type + '</div>';
        content += '                        <div class="font-size-100">' + attributes[i].value + '</div>';
        content += '                    </div>';
        content += '                </div>';
        content += '            </div>';
        content += '        </div>';
        content += '    </div>';
    }
    $("#token-attributes").html(content);
};
let displayTokenDetails = async function(metadata, marketItem, token, owner, contractAddress, network) {
    let chainId;
    let blockchainExplorer;
    let token_type;
    let token_network;

    if(network === 'bsc') {
        chainId = chainIDBsc;
        blockchainExplorer = blockchainExplorerBsc;
        token_type = "BEP-721";
        token_network = "Binance Smart Chain";
    } else if(network === 'eth') {
        chainId = chainIDEth;
        blockchainExplorer = blockchainExplorerEth;
        token_type = "ERC-721";
        token_network = "Ethereum Mainnet";
    } else {
        chainId = chainIDMatic;
        blockchainExplorer = blockchainExplorerMatic;
        token_type = "ERC-1155";
        token_network = "Polygon Network";
    }

    let tokenCollectionName = $("#token-collection-name");

    if(contractAddress === titansContractAddress && network === "bsc") {
        tokenCollectionName.text("Titans of Industry");
        tokenCollectionName.attr("href", "?collection=titans-of-industry");
    } else if(contractAddress === mustachiosContractAddress && network === "eth") {
        tokenCollectionName.text("The Mustachios");
        tokenCollectionName.attr("href", "?collection=the-mustachios");
    } else if(contractAddress === chenInkContractAddress && network === "eth" && token <= 53) {
        tokenCollectionName.text("CryptoSolitaire");
        tokenCollectionName.attr("href", "?collection=cryptosolitaire");
    } else if(contractAddress === chenInkContractAddress && network === "eth" && token >= 54) {
        tokenCollectionName.text("Inkvadyrz");
        tokenCollectionName.attr("href", "?collection=inkvadyrz");
    } else if(contractAddress === rewardsContractAddress && network === "matic") {
        tokenCollectionName.text("Ownly Rewards");
        tokenCollectionName.attr("href", "?collection=rewards");
    } else if(contractAddress === genesisBlockContractAddress && network === "eth") {
        tokenCollectionName.text("Genesis Block");
        tokenCollectionName.attr("href", "?collection=genesis-block");
    } else if(contractAddress === sagesRantContractAddress && network === "eth") {
        tokenCollectionName.text("The Sages Rant Collectibles");
        tokenCollectionName.attr("href", "?collection=the-sages-rant-collectibles");
    } else if(contractAddress === ownlyHouseOfArtContractAddress && network === "eth") {
        tokenCollectionName.text("Ownly House of Art");
        tokenCollectionName.attr("href", "?collection=oha");
    }

    $("#token-owner").html('<a href="' + blockchainExplorer + 'address/' + owner + '" target="_blank" class="link-color-3">' + shortenAddress(web3Bsc.utils.toChecksumAddress(owner), 5, 5) + '</a>');
    $("#token-type").text(token_type);
    $("#token-network").text(token_network);
    $("#token-contract-address").html('<a href="' + blockchainExplorer + 'address/' + contractAddress + '" target="_blank" class="link-color-3">' + shortenAddress(web3Bsc.utils.toChecksumAddress(contractAddress), 5, 5) + '</a>');

    let transferTokenShowModal = $("#transfer-token-show-modal");
    transferTokenShowModal.attr("data-chain-id", chainId);
    transferTokenShowModal.attr("data-contract-address", contractAddress);
    transferTokenShowModal.attr("data-token-id", token);

    if(address && web3Bsc.utils.toChecksumAddress(address) === owner) {
        $("#transfer-token-container").removeClass("d-none");
        initializeTooltip();
    }

    // Bruteforce display for genesis block
    let soldGenesisBlock = [3];
    let soldSagesRantCollectible = [];
    let soldOwnlyHouseOfArt = [];

    if(contractAddress === chenInkContractAddress && token >= 1 && token <= 53) {
        $(".token-price").html("");
        $(".token-price-currency").attr("src", "img/tokens/ETH.png");

        let content = '<a href="https://opensea.io/assets/' + chenInkContractAddress + '/' + token + '" class="btn btn-custom-2 w-100 font-size-100 font-size-md-120 neo-bold link" style="border-radius:15px">OWN NOW</a>';

        $("#create-market-sale-container .text-end").html(content);
        $("#create-market-sale-container").removeClass("d-none");
    } else if(contractAddress === genesisBlockContractAddress && !soldGenesisBlock.includes(token)) {
        let genesisBlockPrice = 1.5;
        if(token >= 1 && token <= 3) {
            genesisBlockPrice = 0.5;
        } else if(token >= 4 && token <= 6) {
            genesisBlockPrice = 0.8;
        } else if(token >= 7 && token <= 8) {
            genesisBlockPrice = 1;
        }

        let tokenPrice = $(".token-price");
        tokenPrice.html(genesisBlockPrice + " ETH");

        $(".token-price-currency").attr("src", "img/tokens/ETH.png");

        let content = '<a href="https://opensea.io/assets/' + genesisBlockContractAddress + '/' + token + '" class="btn btn-custom-2 w-100 font-size-100 font-size-md-120 neo-bold link" style="border-radius:15px">OWN NOW</a>';

        $("#create-market-sale-container .text-end").html(content);
        $("#create-market-sale-container").removeClass("d-none");
    } else if(contractAddress === sagesRantContractAddress && !soldSagesRantCollectible.includes(token)) {
        let sagesRantCollectiblePrice = 0.1;

        let tokenPrice = $(".token-price");
        tokenPrice.html(sagesRantCollectiblePrice + " ETH");

        $(".token-price-currency").attr("src", "img/tokens/ETH.png");

        let content = '<a href="https://opensea.io/assets/' + genesisBlockContractAddress + '/' + token + '" class="btn btn-custom-2 w-100 font-size-100 font-size-md-120 neo-bold link" style="border-radius:15px">BID NOW</a>';

        $("#create-market-sale-container .fw-bold").html("Bid Price:");
        $("#create-market-sale-container .text-end").html(content);
        $("#create-market-sale-container").removeClass("d-none");
    } else if(contractAddress === ownlyHouseOfArtContractAddress && !soldOwnlyHouseOfArt.includes(token)) {
        let tokenPrice = $(".token-price");
        tokenPrice.html("1 ETH");

        $(".token-price-currency").attr("src", "img/tokens/ETH.png");

        let content = '<a href="https://opensea.io/assets/' + ownlyHouseOfArtContractAddress + '/' + token + '" class="btn btn-custom-2 w-100 font-size-100 font-size-md-120 neo-bold link" style="border-radius:15px">OWN NOW</a>';

        $("#create-market-sale-container .fw-bold").html("Price:");
        $("#create-market-sale-container .text-end").html(content);
        $("#create-market-sale-container").removeClass("d-none");
    } else {
        if(parseInt(marketItem.itemId)) {
            let tokenPrice = $(".token-price");
            tokenPrice.html(web3Bsc.utils.fromWei(marketItem.price, "ether") + " " + ((hasMarketplaceEthereumContract) ? marketItem.currency : "BNB"));
            tokenPrice.removeClass("d-none");

            if(hasMarketplaceEthereumContract) {
                if(marketItem.currency === "OWN") {
                    $(".token-price-currency").attr("src", "img/ownly/own-token.png");
                } else {
                    $(".token-price-currency").attr("src", "img/bnb/bnb.webp");
                }
            } else {
                $(".token-price-currency").attr("src", "img/bnb/bnb.webp");
            }

            if(address && web3Bsc.utils.toChecksumAddress(owner) === web3Bsc.utils.toChecksumAddress(address)) {
                $(".cancel-market-item-confirmation").attr("data-item-id", parseInt(marketItem.itemId));
                $("#cancel-market-item-container").removeClass("d-none");
            } else {
                let createMarketSaleConfirmationButton = $(".create-market-sale-confirmation");
                createMarketSaleConfirmationButton.attr("data-item-id", marketItem.itemId);
                createMarketSaleConfirmationButton.attr("data-price", marketItem.price);
                createMarketSaleConfirmationButton.attr("data-currency", marketItem.currency);
                $("#create-market-sale-container").removeClass("d-none");
            }
        } else {
            let transactionHash = $(".token-transaction-hash");

            transactionHash.attr("href", blockchainExplorer + "tx/" + metadata.transaction_hash);
            transactionHash.removeClass("d-none");

            $(".owner-address").text(shortenAddress(web3Bsc.utils.toChecksumAddress(owner), 5, 5));

            if(address && web3Bsc.utils.toChecksumAddress(owner) === web3Bsc.utils.toChecksumAddress(address)) {
                if((chainId === chainIDEth && hasMarketplaceEthereumContract) || (chainId === chainIDMatic && hasMarketplacePolygonContract) || chainId === chainIDBsc) {
                    $("#create-market-item-container").removeClass("d-none");
                } else {
                    $("#sold-out-container").removeClass("d-none");
                }
            } else {
                $("#sold-out-container").removeClass("d-none");
            }
        }
    }

    $("#token-loading").addClass("d-none");

    let transfers_content = '   <thead>';
    transfers_content += '          <tr>';
    transfers_content += '              <th style="vertical-align:middle">From</th>';
    transfers_content += '              <th style="vertical-align:middle">To</th>';
    transfers_content += '              <th style="vertical-align:middle">Price</th>';
    transfers_content += '              <th style="vertical-align:middle; min-width:110px">Date</th>';
    transfers_content += '          </tr>';
    transfers_content += '      </thead>';
    transfers_content += '      <tbody>';
    for(let j = 0; j < metadata.transfers.length; j++) {
        transfers_content += '      <tr>';
        transfers_content += '          <td style="vertical-align:middle">';
        transfers_content += '              <a href="' + blockchainExplorer + 'address/' + metadata.transfers[j].from + '" target="_blank" class="link-color-3">' + shortenAddress(web3Bsc.utils.toChecksumAddress(metadata.transfers[j].from), 4, 4) + '</a>';
        transfers_content += '          </td>';
        transfers_content += '          <td style="vertical-align:middle">';
        transfers_content += '              <a href="' + blockchainExplorer + 'address/' + metadata.transfers[j].to + '" target="_blank" class="link-color-3">' + shortenAddress(web3Bsc.utils.toChecksumAddress(metadata.transfers[j].to), 4, 4) + '</a>';
        transfers_content += '          </td>';
        transfers_content += '          <td class="text-end" style="vertical-align:middle">' + numberFormat(parseFloat(metadata.transfers[j].value).toString(), false) + ' <img src="img/tokens/' + metadata.transfers[j].currency + '.png" class="me-1" width="20" alt="' + metadata.transfers[j].currency + '" /> (' + metadata.transfers[j].currency + ')</td>';
        transfers_content += '          <td style="vertical-align:middle">' + moment(metadata.transfers[j].signed_at).format('llll') + '</td>';
        transfers_content += '      </tr>';
    }
    transfers_content += '      </tbody>';
    $("#transfer-history").html(transfers_content);
};
let shortenAddress = (address, prefixCount, postfixCount) => {
    let prefix = address.substr(0, prefixCount);
    let postfix = address.substr(address.length - postfixCount, address.length);

    return prefix + "..." + postfix;
};
let getTokenTransfers = async (owner, chainId, contractAddress, token) => {
    let transaction_hashes = [];

    await $.get("https://api.covalenthq.com/v1/" + chainId + "/tokens/" + contractAddress + "/nft_transactions/" + token + "/?&key=ckey_994c8fdd549f44fa9b2b27f59a0", async function(data) {
        if(data) {
            for(let j = 0; j < data.data.items[0].nft_transactions.length; j++) {
                for(let k = 0; k < data.data.items[0].nft_transactions[j].log_events.length; k++) {
                    if(data.data.items[0].nft_transactions[j].log_events[k].decoded) {
                        if(data.data.items[0].nft_transactions[j].log_events[k].decoded.name === "Transfer" || data.data.items[0].nft_transactions[j].log_events[k].decoded.name === "TransferSingle") {
                            transaction_hashes.push(data.data.items[0].nft_transactions[j].log_events[k]);
                        }
                    }
                }
            }
        } else {
            await getTokenTransfers(owner, network, contractAddress, token);
        }
    });

    return transaction_hashes;
};
let update_token_transaction = function(chainID, contractAddress, tokenId, owner, currentOwner) {
    if(!owner || (owner && web3Bsc.utils.toChecksumAddress(owner) !== web3Bsc.utils.toChecksumAddress(currentOwner))) {
        $.post(ownlyAPI + "api/token_transfer/update_token_transaction", {
            chain_id: chainID,
            contract_address: contractAddress,
            token_id: tokenId,
            owner: currentOwner
        });
    }
};
let update_buying_token = async function() {
    let buyingPriceLoadingContainer = $("#buying-price-loading-container");
    buyingPriceLoadingContainer.removeClass("d-none");

    $(".buying-price-container").addClass("d-none");

    let createMarketSale = $(".create-market-sale");
    let price = createMarketSale.attr("data-price");
    let currency = createMarketSale.attr("data-currency");

    let token = $("input[name='buy_through_token']:checked").val();

    if(currency === "BNB" && token === "OWN") {
        await sparkSwapContract.methods.getAmountsIn(price, ["0x7665CB7b0d01Df1c9f9B9cC66019F00aBD6959bA", "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"]).call()
            .then(async function(amounts) {
                let ownPrice = web3Bsc.utils.fromWei(amounts[0], "ether");

                let buyingPriceContainerBnbToOwn = $(".buying-price-container[data-currency='BNB-OWN']");
                buyingPriceContainerBnbToOwn.find(".bnb-price").text(web3Bsc.utils.fromWei(price, "ether"));
                buyingPriceContainerBnbToOwn.find(".own-price").text(numberFormat(ownPrice, 2));

                let discountedOwnPrice = ((BigInt(amounts[0]) * BigInt(8)) / BigInt(10)).toString();

                $("#discounted-own-price").text(numberFormat(web3Bsc.utils.fromWei(discountedOwnPrice, "ether"), 2));
                $("#discounted-own-price").attr("data-price", discountedOwnPrice);

                buyingPriceContainerBnbToOwn.removeClass("d-none");
            });
    } else if(currency === "BNB" && token === "BNB") {
        $("#bnb-price").text(numberFormat(web3Bsc.utils.fromWei(price, "ether"), 2));
        $(".buying-price-container[data-currency='BNB-BNB']").removeClass("d-none");
    } else if(currency === "OWN" && token === "OWN") {
        $("#own-price").text(numberFormat(web3Bsc.utils.fromWei(price, "ether"), 2));
        $(".buying-price-container[data-currency='OWN-OWN']").removeClass("d-none");
    } else if(currency === "OWN" && token === "BNB") {
        $("#own-price").text(numberFormat(web3Bsc.utils.fromWei(price, "ether"), 2));
        $(".buying-price-container[data-currency='OWN-OWN']").removeClass("d-none");
    }

    buyingPriceLoadingContainer.addClass("d-none");
};
let displayProfilePage = function(profile, page, type) {
    let form_data = new FormData();
    form_data.append('address', profile);

    $.ajax({
        url: ownlyAPI + "api/get-account-settings",
        method: "POST",
        cache: false,
        contentType: false,
        processData: false,
        data: form_data
    }).done(async function(response) {
        let accountSettingsForm = $("#account-settings-form");

        if(response.data) {
            if(response.data.photo) {
                accountSettingsForm.find("#photo-container").css('background-image', 'url(' + response.data.photo + ')');
                $("#profile-photo-container").css("background-image", "url(" + response.data.photo + ")");
            } else {
                let content = ' <svg data-jdenticon-value="" class="jdenticon position-absolute" style="width:100%; height:100%; border-radius:50%; top:0; left:0">';
                content += '        Fallback text or image for browsers not supporting inline svg.';
                content += '    </svg>';

                accountSettingsForm.find("#photo-container").html(content);
                $("#profile-photo-container").html(content);

                jdenticon.update(".jdenticon", profile);
            }

            if(address && web3Bsc.utils.toChecksumAddress(profile) === web3Bsc.utils.toChecksumAddress(address)) {
                accountSettingsForm.find("[name='username']").val(response.data.name);
                accountSettingsForm.find("[name='email_address']").val(response.data.email);
                accountSettingsForm.find("[name='bio']").val(response.data.bio);

                accountSettingsForm.find("input").prop("disabled", false);
                accountSettingsForm.find("[type='submit']").removeClass("d-none");
                accountSettingsForm.find(".action-btn").removeClass("d-none");

                if(type === "owned") {
                    displayOwnedTokens(profile, page);
                } else if(type === "favorited") {
                    displayFavoritedTokens(profile, page);
                }
            } else {
                $("#profile-name").text(response.data.name);
                $("#profile-wallet").text(shortenAddress(profile, 5, 5));
                $("#profile-bio").text(response.data.bio);

                $("#profile-guest-view").removeClass("d-none");

                await updateConnectToWallet();

                $("#pills-account-settings-tab").addClass("d-none");

                if(type === "owned") {
                    $("#pills-owned-tab").addClass("active");
                    $("#pills-account-settings-tab").removeClass("active");
                    $("#owned-container").removeClass("d-none");
                    $("#account-settings-container").addClass("d-none");

                    displayOwnedTokens(profile, page);
                } else if(type === "favorited") {
                    displayFavoritedTokens(profile, page);
                }
            }
        } else {
            let content = ' <svg data-jdenticon-value="" class="jdenticon position-absolute" style="width:100%; height:100%; border-radius:50%; top:0; left:0">';
            content += '        Fallback text or image for browsers not supporting inline svg.';
            content += '    </svg>';

            accountSettingsForm.find("#photo-container").html(content);
            $("#profile-photo-container").html(content);

            jdenticon.update(".jdenticon", profile);

            if(address && web3Bsc.utils.toChecksumAddress(profile) === web3Bsc.utils.toChecksumAddress(address)) {
                accountSettingsForm.find("input").prop("disabled", false);
                accountSettingsForm.find("[type='submit']").removeClass("d-none");
                accountSettingsForm.find(".action-btn").removeClass("d-none");

                await updateConnectToWallet();

                if(type === "owned") {
                    displayOwnedTokens(profile, page);
                } else if(type === "favorited") {
                    displayFavoritedTokens(profile, page);
                }
            } else {
                $("#profile-name").html("<i>Name not set</i>");
                $("#profile-wallet").text(shortenAddress(profile, 5, 5));
                $("#profile-bio").html("<i>Bio not set</i>");

                $("#profile-guest-view").removeClass("d-none");

                await updateConnectToWallet();

                $("#pills-account-settings-tab").addClass("d-none");

                if(type === "owned") {
                    $("#pills-owned-tab").addClass("active");
                    $("#pills-account-settings-tab").removeClass("active");
                    $("#owned-container").removeClass("d-none");
                    $("#account-settings-container").addClass("d-none");

                    displayOwnedTokens(profile, page);
                } else if(type === "favorited") {
                    displayFavoritedTokens(profile, page);
                }
            }
        }

        $("#app").removeClass("d-none");
    }).fail(function(error) {
        console.log(error);
    });
};
let displaySales = function(page) {
    loadNFTSales(page);
};
let loadNFTSales = function(page) {
    $(".sales-date").prop("disabled", true);

    let periodical = $("#periodical").val();

    let salesYear = $("#sales-year");
    let salesQuarter = $("#sales-quarter");
    let salesMonth = $("#sales-month");

    let year = salesYear.val();
    let quarter = salesQuarter.val();
    let month = salesMonth.val();

    salesQuarter.closest("div").addClass("d-none");
    salesMonth.closest("div").addClass("d-none");

    if(periodical === "Quarterly") {
        salesQuarter.closest("div").removeClass("d-none");
    } else if(periodical === "Monthly") {
        salesMonth.closest("div").removeClass("d-none");
    }

    $.get(ownlyAPI + "api/sales" + ((page) ? ("?page=" + page) : ""), {
        periodical: periodical,
        year: year,
        quarter: quarter,
        month: month,
    }, async function(data) {
        $("#sales-year").val(data.date.year);

        if(periodical === "Quarterly") {
            $("#sales-quarter").val(data.date.month);
        } else if(periodical === "Monthly") {
            $("#sales-month").val(data.date.month);
        }

        $("#sales-own").text(numberFormat(data.sales_per_token.own, 2));
        $("#sales-eth").text(numberFormat(data.sales_per_token.eth, 2));
        $("#sales-bnb").text(numberFormat(data.sales_per_token.bnb, 2));

        let sales = data.pagination;

        content = '';

        for(let i = 0; i < sales.data.length; i++) {
            content += '    <tr>';
            content += '        <td class="align-middle" style="min-width:100px">' + sales.data[i].formatted_date + '</td>';
            content += '        <td class="align-middle">';
            content += '            <a class="link-color-4 text-decoration-none" href="' + sales.data[i].collection_url + '">' + sales.data[i].collection + '</a>';
            content += '        </td>';
            content += '        <td class="align-middle">';
            content += '            <a class="link-color-4 text-decoration-none" href="' + sales.data[i].token_url + '">' + sales.data[i].name + '</a>';
            content += '        </td>';
            content += '        <td class="align-middle text-end">' + sales.data[i].token_id + '</td>';
            content += '        <td class="align-middle">';
            content += '            <div class="d-flex justify-content-end align-items-center">';
            content += '                <div class="pe-1">' + numberFormat(parseFloat(sales.data[i].value).toFixed(4), false) + '</div>';
            content += '                <div class="pe-1"><img src="img/tokens/' + sales.data[i].currency + '.png" width="20" alt="' + sales.data[i].currency + '"></div>';
            content += '                <div class="font-size-80">(' + sales.data[i].currency + ')</div>';
            content += '            </div>';
            content += '        </td>';
            content += '        <td class="align-middle">';
            content += '            <a class="link-color-4 text-decoration-none" href="' + sales.data[i].transaction_link + '" target="_blank">' + shortenAddress(sales.data[i].transaction_hash, 5, 5) + '</a>';
            content += '        </td>';
            content += '    </tr>';
        }

        if(sales.data.length === 0) {
            content += '    <tr>';
            content += '        <td class="text-center" colspan="6">No Data</td>';
            content += '    </tr>';
        }

        generatePagination(sales, url + '?sales');

        $("#sales-chart-container").html('<canvas id="sales-chart" class="w-100" style="max-height:400px"></canvas>');

        let labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        // if(periodical === "Quarterly") {
        //     let quarters = [['January', 'February', 'March'], ['April', 'May', 'June'], ['July', 'August', 'September'], ['October', 'November', 'December']];
        //     labels = quarters[parseInt(quarter)-1];
        // } else if(periodical === "Monthly") {
        //
        // }

        let ctx = document.getElementById('sales-chart');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.graph.labels,
                datasets: [{
                    label: 'OWN (per million)',
                    data: data.graph.own,
                    backgroundColor: [
                        'rgba(22,185,154,0.3)'
                    ],
                    borderColor: [
                        '#16b99a'
                    ],
                    fill: true,
                    tension: 0.3,
                    borderWidth: 2
                },{
                    label: 'ETH',
                    data: data.graph.eth,
                    backgroundColor: [
                        'rgba(73,79,124,0.3)'
                    ],
                    borderColor: [
                        '#494f7c'
                    ],
                    fill: true,
                    tension: 0.3,
                    borderWidth: 2
                },{
                    label: 'BNB',
                    data: data.graph.bnb,
                    backgroundColor: [
                        'rgba(243,187,50,0.3)'
                    ],
                    borderColor: [
                        '#f3bb32'
                    ],
                    fill: true,
                    tension: 0.3,
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        $("#sales-row-items").html(content);

        $("#sales-loading").addClass("d-none");
        $("#sales-container").removeClass("d-none");

        $(".sales-date").prop("disabled", false);
    });
};
let pad_zeroes = (number) => {
    number = number.toString();

    while(number.length < 2) {
        number = "0" + number;
    }

    return number;
};
let start_countdown = () => {
    $.ajax({
        url: "https://ownly.tk/api/get-remaining-time/2021-12-03%2007:07:00",
        // url: "http://ownly-api.test/api/get-remaining-time/2021-09-30%2009:00:00",
        method: "GET"
    }).done(function(remaining_time) {
        let countDownDate = new Date().getTime() + (remaining_time * 1000);
        // countDownDate = new Date("Sep 30, 2021 17:00:00").getTime();

        let x = setInterval(function() {
            let now = new Date().getTime();
            let distance = countDownDate - now;

            let days = pad_zeroes(Math.floor(distance / (1000 * 60 * 60 * 24)));
            let hours = pad_zeroes(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            let minutes = pad_zeroes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            let seconds = pad_zeroes(Math.floor((distance % (1000 * 60)) / 1000));

            $("#days").text(days);
            $("#hours").text(hours);
            $("#minutes").text(minutes);
            $("#seconds").text(seconds);

            $("#days").removeClass("invisible");
            $("#hours").removeClass("invisible");
            $("#minutes").removeClass("invisible");
            $("#seconds").removeClass("invisible");

            if (distance < 0) {
                clearInterval(x);
                $("#days").text("00");
                $("#hours").text("00");
                $("#minutes").text("00");
                $("#seconds").text("00");

                clearInterval(x);

                $("#countdown").addClass("invisible");
            }
        }, 500);
    }).fail(function(error) {
        console.log(error);
    });
};
let getCollectionNetwork = (collection) => {
    let network;

    if(collection === "titans-of-industry") {
        network = "bsc"
    } else if(collection === "rewards") {
        network = "matic"
    } else {
        network = "eth"
    }

    return network;
};
let getFilteredTokensByProperties = function() {
    let filters = [];

    $(".property-filter-item:checked").each(function() {
        let property = $(this).attr("data-property");
        let value = $(this).attr("data-value");

        filters.push({
            property: property,
            value: value
        });
    });

    let filterByPropertiess = $("#filter-by-properties");
    let network = filterByPropertiess.attr("data-network");
    let collection = filterByPropertiess.attr("data-collection");
    let page = findGetParameter("page");

    $("#tokens-container").html(tokensContainerInitialContent);
    displayTokens(network, 0, "all", collection, filters, page);
};

let test = function() {
    let web3test = new Web3("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");
    let tokenProxy = new web3test.eth.Contract([{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"result","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_bridgeContract","type":"address"}],"name":"setBridgeContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sender","type":"address"},{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"result","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transferAndCall","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address"}],"name":"claimTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"isBridge","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"nonces","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTokenInterfacesVersion","outputs":[{"name":"major","type":"uint64"},{"name":"minor","type":"uint64"},{"name":"patch","type":"uint64"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_holder","type":"address"},{"name":"_spender","type":"address"},{"name":"_nonce","type":"uint256"},{"name":"_expiry","type":"uint256"},{"name":"_allowed","type":"bool"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"push","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"bridgeContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_amount","type":"uint256"}],"name":"pull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"expirations","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"},{"name":"_chainId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"data","type":"bytes"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}], "0xa620684728565E902830035cDaA309cfFC495086");

    tokenProxy.methods.name().call()
        .then(async function(data) {
            console.log(data);
        });
};

window.onerror = function(message, url, lineNumber) {
    return false;
};

initializeEnvVariables();

$(document).ready(async function() {
    initiate_loading_page();
});

$(window).on("load", async () => {
    initializeWeb3();
    initializeContracts();
    initializeListingPrice();
    updateConnectToWallet();
    initializePage();
    close_loading_page();
});

$(document).on("click", "#install-metamask", () => {
    $("#modal-no-metamask-installed").modal("hide");
});

$(document).on("click", "#connect-wallet", async () => {
    await connectWallet();
});

$(document).on("click", ".create-market-item-confirmation", function() {
    let button = $(this);
    button.prop("disabled", true);

    let tokenID = button.attr("data-token-id");

    titansContract.methods.isApprovedForAll(address, marketplaceBinanceContractAddress).call()
        .then(function(isApprovedForAll) {
            button.prop("disabled", false);

            if(isApprovedForAll) {
                $("#create-market-item").val(tokenID);
                $("#modal-create-market-item").modal("show");
            } else {
                $("#approve").val(tokenID);
                $("#modal-approve").modal("show");
            }
        });
});

$(document).on("click", "#approve", async function() {
    approveButton = $("#approveButton");
    approveButton.prop("disabled", true);

    let tokenID = $(this).val();

    $("#modal-approve").modal("hide");

    // isConnectedToMetamask = await connectToMetamask();
    await connectWallet();
    if(provider) {
        let _chainID = await web3.eth.getChainId();

        if(_chainID !== chainIDBsc) {
            $("#modal-wrong-network").modal("show");
            return 0;
        }
    } else {
        return 0;
    }

    titansContract.methods.setApprovalForAll(marketplaceBinanceContractAddress, true)
        .send({
            from: web3Bsc.utils.toChecksumAddress(address)
        }).on('transactionHash', function(hash){
            $("#modal-processing").modal("show");
        }).on('error', function(error){
            $("#modal-processing").modal("hide");

            $("#modal-error .message").text(error.code + ": " + error.message);
            $("#modal-error").modal("show");
        }).then(function(receipt) {
            $("#modal-processing").modal("hide");

            $("#create-market-item").val(tokenID);
            $("#modal-create-market-item").modal("show");
        });
});

$(document).on("click", "#create-market-item", async function() {
    let price = $("#price").val();

    if(price > 0) {
        $("#modal-create-market-item").modal("hide");

        isConnectedToMetamask = await connectToMetamask();
        if(isConnectedToMetamask) {
            let _chainID = await web3Bsc.eth.getChainId();

            if(_chainID !== chainIDBsc) {
                $("#modal-wrong-network").modal("show");
                return 0;
            }
        } else {
            return 0;
        }

        marketplaceBinanceContract.methods.createMarketItem(titansContractAddress, $(this).val(), web3Bsc.utils.toWei(price, 'ether'), $("#price-currency").val())
            .send({
                from: web3Bsc.utils.toChecksumAddress(address),
                value: listingPrice
            }).on('transactionHash', function(transactionHash){
                $("#modal-processing").modal("show");
            }).on('error', function(error){
                $("#modal-processing").modal("hide");

                $("#modal-error .message").text(error.code + ": " + error.message);
                $("#modal-error").modal("show");
            }).then(function(receipt) {
                $("#modal-processing").modal("hide");

                $("#modal-success .message").text("You have successfully posted your item for sale.");
                $("#modal-success").modal("show");

                initializePage();
            });
    }
});

$(document).on("click", ".cancel-market-item-confirmation", function() {
    let itemID = $(this).attr("data-item-id");

    $("#cancel-market-item").val(itemID);
    $("#modal-cancel-market-item").modal("show");
});

$(document).on("click", "#cancel-market-item", async function() {
    $("#modal-cancel-market-item").modal("hide");

    isConnectedToMetamask = await connectToMetamask();
    if(isConnectedToMetamask) {
        let _chainID = await web3Bsc.eth.getChainId();

        if(_chainID !== chainIDBsc) {
            $("#modal-wrong-network").modal("show");
            return 0;
        }
    } else {
        return 0;
    }

    marketplaceBinanceContract.methods.cancelMarketItem($(this).val())
        .send({
            from: web3Bsc.utils.toChecksumAddress(address)
        }).on('transactionHash', function(transactionHash){
            $("#modal-processing").modal("show");
        }).on('error', function(error){
            $("#modal-processing").modal("hide");

            $("#modal-error .message").text(error.code + ": " + error.message);
            $("#modal-error").modal("show");
        }).then(function(receipt) {
            $("#modal-processing").modal("hide");
            initializePage();
        });
});

$(document).on("click", ".create-market-sale-confirmation", function() {
    let createMarketSale = $(".create-market-sale");

    createMarketSale.attr("data-price", $(this).attr("data-price"));
    createMarketSale.attr("data-item-id", $(this).attr("data-item-id"));
    createMarketSale.attr("data-currency", $(this).attr("data-currency"));

    update_buying_token();

    $("#modal-buy-select-currency").modal("show");
});

$(document).on("change", "input[name='buy_through_token']", function() {
    let token = $("input[name='buy_through_token']:checked").val();
    $(".buy-through-token-label").removeClass("active");
    $(".buy-through-token-label[data-token='" + token + "']").addClass("active");
    $(".buy-through-token-image").addClass("d-none");
    $(".buy-through-token-image[data-token='" + token + "']").removeClass("d-none");

    update_buying_token();
});

$(document).on("click", ".create-market-sale", function() {
    if(!address) {
        connectToMetamask();
    } else {
        if(parseInt(ethereum.networkVersion) === chainIDBsc) {
            let price = $(this).attr("data-price");
            let item_id = $(this).attr("data-item-id");
            let selectedCurrency = $("input[name='buy_through_token']:checked").val();

            let createMarketSaleFunction = async function(_price) {
                isConnectedToMetamask = await connectToMetamask();
                if(isConnectedToMetamask) {
                    let _chainID = await web3Bsc.eth.getChainId();

                    if(_chainID !== chainIDBsc) {
                        $("#modal-wrong-network").modal("show");
                        return 0;
                    }
                } else {
                    return 0;
                }

                marketplaceBinanceContract.methods.createMarketSale(item_id, selectedCurrency)
                    .send({
                        from: web3Bsc.utils.toChecksumAddress(address),
                        value: _price
                    }).on('transactionHash', function(transactionHash){
                        $("#modal-processing").modal("show");
                    }).on('error', function(error) {
                        $("#modal-processing").modal("hide");

                        $("#modal-error .message").text(error.code + ": " + error.message);
                        $("#modal-error").modal("show");
                    }).then(function(receipt) {
                        $("#modal-processing").modal("hide");
                        initializePage();
                    });
            };

            if($(this).attr("data-currency") === "OWN" && selectedCurrency === "OWN") {
                ownContract.methods.allowance(address, marketplaceBinanceContractAddress).call()
                    .then(async function(allowance) {
                        if(allowance !== price) {
                            isConnectedToMetamask = await connectToMetamask();
                            if(isConnectedToMetamask) {
                                let _chainID = await web3Bsc.eth.getChainId();

                                if(_chainID !== chainIDBsc) {
                                    $("#modal-wrong-network").modal("show");
                                    return 0;
                                }
                            } else {
                                return 0;
                            }

                            ownContract.methods.approve(marketplaceBinanceContractAddress, price)
                                .send({
                                    from: web3Bsc.utils.toChecksumAddress(address)
                                }).on('transactionHash', function(transactionHash){
                                    $("#modal-processing").modal("show");
                                }).on('error', function(error){
                                    $("#modal-processing").modal("hide");

                                    $("#modal-error .message").text(error.code + ": " + error.message);
                                    $("#modal-error").modal("show");
                                }).then(function(receipt) {
                                    $("#modal-processing").modal("hide");

                                    createMarketSaleFunction(0);
                                });
                        } else {
                            createMarketSaleFunction(0);
                        }
                    });
            } else if($(this).attr("data-currency") === "BNB" && selectedCurrency === "OWN") {
                ownContract.methods.allowance(address, marketplaceBinanceContractAddress).call()
                    .then(async function(allowance) {
                        let priceWithSlippage = (BigInt($("#discounted-own-price").attr("data-price")) * BigInt(100001) / BigInt(100000)).toString();

                        if(allowance < priceWithSlippage) {
                            isConnectedToMetamask = await connectToMetamask();
                            if(isConnectedToMetamask) {
                                let _chainID = await web3Bsc.eth.getChainId();

                                if(_chainID !== chainIDBsc) {
                                    $("#modal-wrong-network").modal("show");
                                    return 0;
                                }
                            } else {
                                return 0;
                            }

                            ownContract.methods.approve(marketplaceBinanceContractAddress, priceWithSlippage)
                                .send({
                                    from: web3Bsc.utils.toChecksumAddress(address)
                                }).on('transactionHash', function(transactionHash){
                                $("#modal-processing").modal("show");
                            }).on('error', function(error){
                                $("#modal-processing").modal("hide");

                                $("#modal-error .message").text(error.code + ": " + error.message);
                                $("#modal-error").modal("show");
                            }).then(function(receipt) {
                                $("#modal-processing").modal("hide");

                                createMarketSaleFunction(0);
                            });
                        } else {
                            createMarketSaleFunction(0);
                        }
                    });
            } else {
                createMarketSaleFunction(price);
            }
        } else {
            $("#modal-wrong-network").modal("show");
        }
    }

    $("#modal-buy-select-currency").modal("hide");
});

$(document).on("submit", ".newsletter-form", function(e) {
    e.preventDefault();

    let newsletter_form = $(this);
    newsletter_form.find("[type='submit']").prop("disabled", true);

    let data = new FormData(newsletter_form[0]);

    $.ajax({
        url: "https://ownly.tk/api/store-mustachio-subscriber",
        // url: "http://ownly-api.test/api/store-mustachio-subscriber",
        method: "POST",
        cache: false,
        contentType: false,
        processData: false,
        data: data
    }).done(function(response) {
        newsletter_form.find("input").val("");

        $("#modal-subscribe-success").modal("show");
    }).fail(function(error) {
        console.log(error);
    }).always(function() {
        newsletter_form.find("[type='submit']").prop("disabled", false);
    });
});

$(document).on("click", ".add-to-favorites", async function() {
    if(!address) {
        connectToMetamask();
    } else {
        web3Bsc = new Web3(ethereum);

        let message = "I am confirming this action in Ownly Marketplace.";
        let signature = await web3Bsc.eth.personal.sign(message, ethereum.selectedAddress);
        // var signing_address = await web3Bsc.eth.personal.ecRecover(message, signature)

        let button = $(this);
        let contract_address = button.attr("data-contract-address");
        let token_id = button.attr("data-token-id");
        let status = parseInt(button.attr("data-status"));

        if(signature) {
            await $.post(ownlyAPI + "api/store-market-account", {
                address: ethereum.selectedAddress,
                signature: signature
            }, function(data) {
                let new_status = (status) ? 0 : 1;

                let count = parseInt(button.closest(".add-to-favorites-container").find(".favorites-count").text());

                if(new_status === 1) {
                    button.find("i").removeClass("far");
                    button.find("i").addClass("fas");
                    button.closest(".add-to-favorites-container").find(".favorites-count").text(count + 1);
                } else {
                    button.find("i").removeClass("fas");
                    button.find("i").addClass("far");
                    button.closest(".add-to-favorites-container").find(".favorites-count").text(count - 1);
                }

                button.attr("data-status", new_status);

                $.post(ownlyAPI + "api/store-market-item-favorite", {
                    address: ethereum.selectedAddress,
                    contract_address: contract_address,
                    token_id: token_id,
                    status: new_status
                }, function(data) {

                }).fail(function(error) {
                    console.log(error);
                });
            }).fail(function(error) {
                console.log(error);
            });
        }
    }
});

$(document).on("click", ".select-price-current", async function() {
    $("#price-currency img").attr("src", $(this).data("image"));
    $("#price-currency span").text($(this).data("currency"));
    $("#price-currency").val($(this).data("currency"));
});

$(document).on("change", ".sales-date", async function() {
    loadNFTSales();
});

$(document).on("input", "#search-field", function() {
    let search = $(this).val();
    let searchSuggestionsContainer = $("#search-suggestions-container");

    if(search.length > 1) {
        let content = ' <div class="card">';
        content += '        <div class="card-body">';
        content += '            <div class="d-flex justify-content-center align-items-center">';
        content += '                <div class="spinner-grow background-image-cover bg-transparent me-2" style="width:1.5rem; height:1.5rem; background-image:url(\'img/ownly/own-token.png\')" role="status">';
        content += '                    <span class="visually-hidden">Loading...</span>';
        content += '                </div>';
        content += '                <div class="font-size-80">Loading</div>';
        content += '            </div>';
        content += '        </div>';
        content += '    </div>';

        searchSuggestionsContainer.html(content);
        searchSuggestionsContainer.removeClass("d-none");

        clearTimeout(searchTimeout);

        searchTimeout = setTimeout(function() {
            $.get(ownlyAPI + "api/search?value=" + search, async function(result) {
                result = result.data;

                content = '     <div class="list-group overflow-auto" style="max-height:400px">';
                for(let i = 0; i < result.length; i++) {
                    content += '    <a href="' + result[i].token_url + '" class="list-group-item list-group-item-action">';
                    content += '        <div class="d-flex align-items-center">';
                    content += '            <div class="pe-3" style="min-width:55px; width:55px">';
                    content += '                <div class="background-image-contain bg-color-1" style="padding-top:100%; border:1px solid #dddddd; background-image:url(\'' + result[i].thumbnail + '\')"></div>';
                    content += '            </div>';
                    content += '            <div class="flex-fill">';
                    content += '                <div class="text-color-7 font-size-80 mb-1">' + result[i].collection + '</div>';
                    content += '                <div class="d-flex w-100 justify-content-between align-items-center">';
                    content += '                    <div class="font-size-90 pe-4">' + result[i].name + '</div>';
                    content += '                    <div class="text-color-7 font-size-70">ID:&nbsp;' + result[i].id + '</div>';
                    content += '                </div>';
                    content += '            </div>';
                    content += '         </div>';
                    content += '    </a>';
                }
                content += '    </div>';

                if(result.length === 0) {
                    content = '     <div class="card">';
                    content += '        <div class="card-body">';
                    content += '            <div class="text-center">';
                    content += '                <div class="font-size-80">No Result Found</div>';
                    content += '            </div>';
                    content += '        </div>';
                    content += '    </div>';
                }

                searchSuggestionsContainer.html(content);
            });
        }, 1000);
    } else {
        searchSuggestionsContainer.addClass("d-none");
    }
});

$(document).on("click", 'html', function(e) {
    if($(e.target).closest('#search-field').length || $(e.target).closest('#search-suggestions-container').length) {
        if($("#search-field").val().length > 1) {
            $("#search-suggestions-container").removeClass("d-none");
        }
    } else {
        $("#search-suggestions-container").addClass("d-none");
    }
});

$(document).on("click", "#transfer-token-show-modal", async function() {
    $("#modal-transfer-token").modal("show");
});

$(document).on("click", "#transfer-token", async function() {
    let transferRecipientAddress = $("#transfer-recipient-address").val();

    let transferTokenShowModal = $("#transfer-token-show-modal");
    let contractAddress = transferTokenShowModal.attr("data-contract-address");
    let tokenId = transferTokenShowModal.attr("data-token-id");
    let tokenChainId = parseInt(transferTokenShowModal.attr("data-chain-id"));

    isConnectedToMetamask = await connectToMetamask();
    if(isConnectedToMetamask) {
        let _chainID = await web3Bsc.eth.getChainId();

        if(tokenChainId !== _chainID) {
            let message = '';

            if(tokenChainId === 1 || tokenChainId === 4) {
                message = 'You are currently on the wrong network. Please connect to Ethereum Mainnet';
            } else if(tokenChainId === 56 || tokenChainId === 97) {
                message = 'You are currently on the wrong network. Please connect to Binance Smart Chain';
            } else if(tokenChainId === 137 || tokenChainId === 80001) {
                message = 'You are currently on the wrong network. Please connect to Polygon Network';
            }

            $("#modal-transfer-token").modal("hide");

            $("#modal-wrong-network-2 .message").text(message);
            $("#modal-wrong-network-2").modal("show");

            return 0;
        }
    } else {
        return 0;
    }

    if(!web3Bsc.utils.isAddress(transferRecipientAddress)) {
        $("#invalid-recipient-wallet-address-container").removeClass("d-none");

        setTimeout(function() {
            $("#invalid-recipient-wallet-address-container").addClass("d-none");
        }, 5000);

        return 0;
    }

    let nftContract;

    if(contractAddress === titansContractAddress && (tokenChainId === 56 || tokenChainId === 97)) {
        nftContract = titansContract;
    } else if(contractAddress === mustachiosContractAddress && (tokenChainId === 1 || tokenChainId === 4)) {
        nftContract = mustachiosContract;
    } else if(contractAddress === chenInkContractAddress && (tokenChainId === 1 || tokenChainId === 4) && tokenId <= 53) {
        nftContract = chenInkContract;
    } else if(contractAddress === chenInkContractAddress && (tokenChainId === 1 || tokenChainId === 4) && tokenId >= 54) {
        nftContract = chenInkContract;
    } else if(contractAddress === rewardsContractAddress && (tokenChainId === 137 || tokenChainId === 80001)) {
        nftContract = rewardsContract;
    } else if(contractAddress === genesisBlockContractAddress && (tokenChainId === 1 || tokenChainId === 4)) {
        nftContract = genesisBlockContract;
    } else if(contractAddress === sagesRantContractAddress && (tokenChainId === 1 || tokenChainId === 4)) {
        nftContract = sagesRantContract;
    } else if(contractAddress === ownlyHouseOfArtContractAddress && (tokenChainId === 1 || tokenChainId === 4)) {
        nftContract = ownlyHouseOfArtContract;
    }

    $("#modal-transfer-token").modal("hide");

    nftContract.methods.safeTransferFrom(address, transferRecipientAddress, tokenId)
        .send({
            from: web3Bsc.utils.toChecksumAddress(address)
        }).on('transactionHash', function(transactionHash){
            $("#modal-processing").modal("show");
        }).on('error', function(error){
            $("#modal-processing").modal("hide");

            $("#modal-error .message").text(error.code + ": " + error.message);
            $("#modal-error").modal("show");
        }).then(function(receipt) {
            $("#modal-processing").modal("hide");
            location.reload();
        });
});

$(document).on("click", ".change-token-view", function() {
    let view = $(this).val();

    if(localStorage.getItem("view") !== view) {
        localStorage.setItem("view", view);

        $(".change-token-view").removeClass("active");
        $(".change-token-view[value='" + view + "']").addClass("active");

        let collection = findGetParameter("collection");
        let page = findGetParameter("page");

        if(!collection) {
            collection = "oha";
        }

        let network = getCollectionNetwork(collection);

        $("#tokens-container").html(tokensContainerInitialContent);
        displayTokens(network, 0, "all", collection, [], page);
    }
});

$(document).on("change", ".property-filter-item", function() {
    $(".property-filter-item").prop("disabled", true);

    let property = $(this).attr("data-property");
    let value = $(this).attr("data-value");
    let propertyFilterSelectedItems = $("#property-filter-selected-items");

    if($(this).prop("checked")) {
        let content = ' <div class="property-filter-selected-item d-flex align-items-center font-size-90 ps-4 pe-2 py-2 me-2 mb-2">';
        content += '        <div class="pe-2">' + property + ':</div>';
        content += '        <div class="fw-bold">' + value + '</div>';
        content += '        <div class="px-3 cursor-pointer remove-property-filter-selected-item" data-property="' + property + '" data-value="' + value + '">';
        content += '            <i class="fas fa-times font-size-120"></i>';
        content += '        </div>';
        content += '    </div>';

        propertyFilterSelectedItems.append(content);

        $("#no-selected-filters").addClass("d-none");
    } else {
        $(".remove-property-filter-selected-item[data-property='" + property + "'][data-value='" + value + "']").closest(".property-filter-selected-item").remove();
    }

    let propertyFilterCount = $(".property-filter-item:checked").length;

    if(!propertyFilterCount) {
        $("#no-selected-filters").removeClass("d-none");
        $("#reset-property-filters").addClass("d-none");
    } else {
        $("#reset-property-filters").removeClass("d-none");
    }

    let propertyFilterCountElement = $("#property-filter-count");
    propertyFilterCountElement.html(propertyFilterCount);
    if(propertyFilterCount > 0) {
        propertyFilterCountElement.removeClass("d-none");
    } else {
        propertyFilterCountElement.addClass("d-none");
    }

    getFilteredTokensByProperties();
});

$(document).on("click", ".remove-property-filter-selected-item", function() {
    $(".property-filter-item").prop("disabled", true);

    $(this).closest(".property-filter-selected-item").remove();

    let property = $(this).attr("data-property");
    let value = $(this).attr("data-value");

    $(".property-filter-item[data-property='" + property + "'][data-value='" + value + "']").prop("checked", false);

    let propertyFilterCount = $(".property-filter-item:checked").length;

    if(!propertyFilterCount) {
        $("#no-selected-filters").removeClass("d-none");
        $("#reset-property-filters").addClass("d-none");
    } else {
        $("#reset-property-filters").removeClass("d-none");
    }

    let propertyFilterCountElement = $("#property-filter-count");
    propertyFilterCountElement.html(propertyFilterCount);
    if(propertyFilterCount > 0) {
        propertyFilterCountElement.removeClass("d-none");
    } else {
        propertyFilterCountElement.addClass("d-none");
    }

    getFilteredTokensByProperties();
});

$(document).on("click", "#reset-property-filters", function() {
    $(".property-filter-item").prop("disabled", true);

    $(".property-filter-item:checked").each(function() {
        let property = $(this).attr("data-property");
        let value = $(this).attr("data-value");

        $(".property-filter-item[data-property='" + property + "'][data-value='" + value + "']").prop("checked", false);
        $(".remove-property-filter-selected-item[data-property='" + property + "'][data-value='" + value + "']").closest(".property-filter-selected-item").remove();
    });

    $("#no-selected-filters").removeClass("d-none");
    $("#reset-property-filters").addClass("d-none")
    $("#property-filter-count").addClass("d-none");

    getFilteredTokensByProperties();
});

// PROFILE

$(document).on("click", "#select-photo", function() {
    $("input[name='photo']").trigger("click");
});

$(document).on("change", "input[name='photo']", function() {
    let reader = new FileReader();

    reader.onload = function(event) {
        let img = new Image();

        img.onload = function() {
            let photoContainer = $("#photo-container");

            photoContainer.html("");
            photoContainer.css("background-image", "url('" + img.src + "')");
        };

        img.src = event.target.result;
    };

    if($(this)[0].files.length) {
        reader.readAsDataURL($(this)[0].files[0]);
        $(".field-error-message[data-name='asa_certificate']").addClass("d-none");
    } else {
        $("#photo-container").css("background-image", "initial");
    }
});

$(document).on("submit", "#account-settings-form", async function(e) {
    e.preventDefault();

    let button = $(this).find("[type='submit']");

    web3Bsc = new Web3(ethereum);

    let message = "I am confirming this action in Ownly Marketplace.";
    let signature = await web3Bsc.eth.personal.sign(message, ethereum.selectedAddress);

    if(signature) {
        let form_data = new FormData($(this)[0]);
        form_data.append('address', ethereum.selectedAddress);
        form_data.append('signature', signature);

        button.prop("disabled", true);
        button.text("Saving Changes");

        $.ajax({
            url: ownlyAPI + "api/store-account-settings",
            method: "POST",
            cache: false,
            contentType: false,
            processData: false,
            data: form_data
        }).done(function(response) {
            if(response.data.name) {
                let profilePhoto = $("#profile-photo");

                profilePhoto.html("");
                profilePhoto.css("background-image", "url(" + response.data.photo + ")");
            }

            $("#modal-success .message").text("Changes Saved");
            $("#modal-success").modal("show");
        }).fail(function(error) {
            console.log(error);
        }).always(function() {
            button.prop("disabled", false);
            button.text("Save Changes");
        });
    }
});

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider;

// Address of the selected account
let selectedAccount;


/**
 * Setup the orchestra
 */
function init() {

    console.log("Initializing example");
    console.log("WalletConnectProvider is", WalletConnectProvider);
    console.log("Fortmatic is", Fortmatic);
    console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

    // Check that the web page is run in a secure context,
    // as otherwise MetaMask won't be available
    if(location.protocol !== 'https:') {
        // https://ethereum.stackexchange.com/a/62217/620
        // const alert = document.querySelector("#alert-error-https");
        // alert.style.display = "block";
        // document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
        // return;
    }

    // Tell Web3modal what providers we have available.
    // Built-in web browser provider (only one can exist as a time)
    // like MetaMask, Brave or Opera is added automatically by Web3modal
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                // Mikko's test key - don't copy as your mileage may vary
                infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
            }
        },

        fortmatic: {
            package: Fortmatic,
            options: {
                // Mikko's TESTNET api key
                key: "pk_test_391E26A3B43A3350"
            }
        }
    };

    web3Modal = new Web3Modal({
        cacheProvider: false, // optional
        providerOptions, // required
        disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });

    console.log("Web3Modal instance is", web3Modal);
}


/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {

    // Get a Web3 instance for the wallet
    const web3 = new Web3(provider);

    console.log("Web3 instance is", web3);

    // Get connected chain id from Ethereum node
    const chainId = await web3.eth.getChainId();
    // Load chain information over an HTTP API
    const chainData = evmChains.getChain(chainId);
    document.querySelector("#network-name").textContent = chainData.name;

    // Get list of accounts of the connected wallet
    const accounts = await web3.eth.getAccounts();

    // MetaMask does not give you all accounts, only the selected account
    console.log("Got accounts", accounts);
    selectedAccount = accounts[0];

    document.querySelector("#selected-account").textContent = selectedAccount;

    // Get a handl
    const template = document.querySelector("#template-balance");
    const accountContainer = document.querySelector("#accounts");

    // Purge UI elements any previously loaded accounts
    accountContainer.innerHTML = '';

    // Go through all accounts and get their ETH balance
    const rowResolvers = accounts.map(async (address) => {
        const balance = await web3.eth.getBalance(address);
        // ethBalance is a BigNumber instance
        // https://github.com/indutny/bn.js/
        const ethBalance = web3.utils.fromWei(balance, "ether");
        const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
        // Fill in the templated row and put in the document
        const clone = template.content.cloneNode(true);
        clone.querySelector(".address").textContent = address;
        clone.querySelector(".balance").textContent = humanFriendlyBalance;
        accountContainer.appendChild(clone);
    });

    // Because rendering account does its own RPC commucation
    // with Ethereum node, we do not want to display any results
    // until data for all accounts is loaded
    await Promise.all(rowResolvers);

    // Display fully loaded UI for wallet data
    document.querySelector("#prepare").style.display = "none";
    document.querySelector("#connected").style.display = "block";
}



/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */
async function refreshAccountData() {

    // If any current data is displayed when
    // the user is switching acounts in the wallet
    // immediate hide this data
    document.querySelector("#connected").style.display = "none";
    document.querySelector("#prepare").style.display = "block";

    // Disable button while UI is loading.
    // fetchAccountData() will take a while as it communicates
    // with Ethereum node via JSON-RPC and loads chain data
    // over an API call.
    document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
    await fetchAccountData(provider);
    document.querySelector("#btn-connect").removeAttribute("disabled")
}


/**
 * Connect wallet button pressed.
 */
async function connectWallet() {

    console.log("Opening a dialog", web3Modal);
    try {
        provider = await web3Modal.connect();
    } catch(e) {
        console.log("Could not get a wallet connection", e);
        return;
    }

    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
        fetchAccountData();
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
        fetchAccountData();
    });

    // Subscribe to networkId change
    provider.on("networkChanged", (networkId) => {
        fetchAccountData();
    });

    await refreshAccountData();
}

/**
 * Disconnect wallet button pressed.
 */
async function onDisconnect() {

    console.log("Killing the wallet connection", provider);

    // TODO: Which providers have close method?
    if(provider.close) {
        await provider.close();

        // If the cached provider is not cleared,
        // WalletConnect will default to the existing session
        // and does not allow to re-scan the QR code with a new wallet.
        // Depending on your use case you may want or want not his behavir.
        await web3Modal.clearCachedProvider();
        provider = null;
    }

    selectedAccount = null;

    // Set the UI back to the initial state
    document.querySelector("#prepare").style.display = "block";
    document.querySelector("#connected").style.display = "none";
}