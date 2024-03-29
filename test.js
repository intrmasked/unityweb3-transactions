

var abi = [
    {
        "type": "constructor",
        "name": "",
        "inputs": [
            {
                "type": "address",
                "name": "_shardsTokenAddress",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "DepositReceived",
        "inputs": [
            {
                "type": "address",
                "name": "depositor",
                "indexed": true,
                "internalType": "address"
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "TransferSuccessful",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true,
                "internalType": "address"
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true,
                "internalType": "address"
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "anonymous": false
    },
    {
        "type": "function",
        "name": "checkBalance",
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "deposit",
        "inputs": [
            {
                "type": "uint256",
                "name": "amount",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "shardsToken",
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "contract IERC20"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "transferTokens",
        "inputs": [
            {
                "type": "address",
                "name": "recipient",
                "internalType": "address"
            },
            {
                "type": "uint256",
                "name": "amount",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    }
];

var shards_abi = [{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimal_","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account_","type":"address"},{"internalType":"uint256","name":"value_","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account_","type":"address"},{"internalType":"uint256","name":"value_","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner_","type":"address"}],"name":"transferOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"}]

var shards_contractaddress = '0xE156987a81A9B841C1deF6f111ea69BF817FB272';

var contractAddress = '0x6912610E3Cd7Da63A92BF7DD305319F6E86f96AB';



let signer;
let shardsContract;

let unity;



function checkUnity()
{
    if(typeof window.unityInstance !== 'undefined')
    {
        unity = window.unityInstance;

    }
    else {
        console.error('unity instance not found');
    }
}




window.car =  async function(shardsToTransact) {

    checkUnity();







    console.log(typeof shardsToTransact);
    try {

        // Get the user's address
        const userAddress = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(userAddress[0]);
        // Create a Web3 instance
        const web3 = new Web3(window.ethereum);


        const networkId = await web3.eth.net.getId();
        if (networkId !== 137) { // 137 is the chain ID for Polygon Mainnet
            try {
                // Try to switch to the Polygon Mainnet
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x89' }], // Hexadecimal chain ID for Polygon Mainnet
                });
            } catch (switchError) {
                // This error code indicates that the chain has not been added to MetaMask
                if (switchError.code === 4902) {
                    try {
                        // Ask the user to add the Polygon Mainnet
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [{
                                chainId: '0x89', // Hexadecimal chain ID for Polygon Mainnet
                                rpcUrls: ['https://polygon-mainnet.infura.io/v3/f8936b2de5e14f08b1d4b952cfd59d59'], // RPC URL for the Polygon Mainnet
                                chainName: 'Polygon Mainnet',
                                nativeCurrency: {
                                    name: 'MATIC',
                                    symbol: 'MATIC', // 2-6 characters long
                                    decimals: 18
                                },
                                blockExplorerUrls: ['https://polygonscan.com/'],
                                // Optionally, you can specify an icon
                                iconUrls: ['https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png'], // URL to an icon for Polygon
                            }],
                        });
                    }
                    catch (addError){}
                } }
        } else {
            console.log('Already on Polygon Mainnet');
        }

        // Create a contract instance for the Shards token
        const shardsContract = new web3.eth.Contract(shards_abi, shards_contractaddress);

        // Create a contract instance for your contract
        const contract = new web3.eth.Contract(abi, contractAddress);

        // Amount to deposit (as an example, using 1 ether)
        const amountToDeposit = shardsToTransact * (1000000);



        async function getAggressiveGasPrice()

        {
            try {
                // Get the current gas price from the network
                const gasPrice = await web3.eth.getGasPrice();

                // Convert the gas price to a BigInt
                const gasPriceBigInt = BigInt(gasPrice);

                // Calculate the aggressive gas price as 120% of the current gas price
                const aggressiveGasPrice = gasPriceBigInt * BigInt(120) / BigInt(100);

                // Return the aggressive gas price as a string to avoid precision issues
                return aggressiveGasPrice.toString();
            } catch (error) {
                console.error('Failed to get aggressive gas price:', error);
                throw error; // Rethrow the error so the caller can handle it
            }
        }

        const gasAgressive = await getAggressiveGasPrice();
        console.log(gasAgressive);







        // Approve the tokens
        shardsContract.methods.approve(contractAddress, amountToDeposit)
            .send({ from: userAddress[0], gas:10n , gasPrice: gasAgressive})
            .then(function(result) {
                // Approval was successful, now we can deposit
                console.log("Token approval successful");

                // Deposit the tokens
                contract.methods.deposit(amountToDeposit)
                    .send({ from: userAddress[0],gas: 10n , gasPrice: gasAgressive})
                    .then(function(depositResult) {
                        console.log("Deposit successful");
                        switch(amountToDeposit) {
                            case 1000000:
                                unity.SendMessage('Manager','goldTextManager',100);
                                break;
                            case 2000000:
                                unity.SendMessage('Manager','goldTextManager',200);
                                break;
                            case 3000000:
                                unity.SendMessage('Manager','goldTextManager',300);
                                break;

                        }

                    })
                    .catch(function(error) {
                        console.error("Deposit failed", error);
                    });
            })
            .catch(function(error) {
                console.error("Approval failed", error);
            });
    } catch (error) {
        console.error('Error connecting to wallet:', error);
    }
};



