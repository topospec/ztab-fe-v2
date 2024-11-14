import { ethers } from "ethers";

export default async function handler(req, res) {

  const provider = new ethers.JsonRpcProvider('https://mainnet.base.org');
  const contractAddress = '0x3882ead77d7b5d3b4102bac7413818d6ca1b44bb';
  
  // Basic ERC20 ABI with just totalSupply function
  const abi = [
    "function totalSupply() view returns (uint256)"
  ];

  const contract = new ethers.Contract(contractAddress, abi, provider);
  const data = await contract.totalSupply();

  const parsedData = ethers.formatUnits(data, 18);
  res.status(200).send(parsedData);
}
