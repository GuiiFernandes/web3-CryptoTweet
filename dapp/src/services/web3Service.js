import Web3 from 'web3';
import ABI from './ABI.json';

const CONTRACT_ADDRESS = '0x1b50832acd734933b58607f1ad8d40d546735023';

export const doLogin = async () => {
  if (!window.ethereum) throw new Error('No MetaMask found!');
  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.requestAccounts();
  if (!accounts || !accounts.length) throw new Error('Wallet not found or allowed!');

  localStorage.setItem('wallet', accounts[0]);

  return accounts[0];
};

const getContract = () => {
  console.log(CONTRACT_ADDRESS);
  if (!window.ethereum) throw new Error('No MetaMask found!');

  const web3 = new Web3(window.ethereum);
  const from = localStorage.getItem('wallet');
  return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from });
};

export const addTweet = async (text) => {
  const contract = getContract();
  return contract.methods.addTweet(text).send();
};

export const changeUserName = (name) => {
  const contract = getContract();
  return contract.methods.changeUsername(name).send();
};
