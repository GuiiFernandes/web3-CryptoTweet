import Web3 from 'web3';
import ABI from './ABI.json';

const CONTRACT_ADDRESS = '0x1B50832Acd734933B58607f1AD8d40d546735023';

export const doLogin = async () => {
  if (!window.ethereum) throw new Error('No MetaMask found!');
  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.requestAccounts();
  if (!accounts || !accounts.length) throw new Error('Wallet not found or allowed!');

  localStorage.setItem('wallet', accounts[0]);

  return accounts[0];
};

export const getContract = () => {
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

export const getLastTweets = async (page) => {
  const contract = getContract();
  const tweets = await contract.methods.getLastTweets(page).call();
  console.log(tweets);
  return tweets.map((tweet) => ({ ...tweet }))
    .filter(({ text }) => text.length)
    .sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
};
