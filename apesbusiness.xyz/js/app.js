// METAMASK CONNECTION
const TIMEOUT = 1000;
const COLLECTION_NAME = 'CodeCats';
let editions = [];
let dots = 1;

window.addEventListener('DOMContentLoaded', () => {
  const onboarding = new MetaMaskOnboarding();
  const onboardButton = document.getElementById('connectWallet');
  let accounts;

  const updateButton = async () => {
    if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
      onboardButton.innerText = 'Install MetaMask!';
      onboardButton.onclick = () => {
        onboardButton.innerText = 'Connecting...';
        onboardButton.disabled = true;
        onboarding.startOnboarding();
      };
    } else if (accounts && accounts.length > 0) {
      onboardButton.innerText = `✔${accounts[0].substr(0,4)}...${accounts[0].slice(-4)}`;
      onboardButton.disabled = true;
      onboarding.stopOnboarding();
    } else {
      onboardButton.innerText = 'Connect MetaMask!';
      onboardButton.onclick = async () => {
        await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        .then(function(accounts) {
          onboardButton.innerText = `✔${accounts[0].substr(0,4)}...${accounts[0].slice(-4)}`;
          onboardButton.disabled = true;
        });
      };
    }
  };

  updateButton();
  if (MetaMaskOnboarding.isMetaMaskInstalled()) {
    window.ethereum.on('accountsChanged', (newAccounts) => {
      accounts = newAccounts;
      updateButton();
    });
  }
});

const addPlus = async() => {
    var value=$('#quantity').val();
    if(value==""){
      $('#quantity').val(1);
	  console.log("AsD");
    }else{
      var finalValue=parseInt(value)+1>10?10:parseInt(value)+1;
	  console.log(finalValue);
      $('#quantity').val(finalValue);
    }
  }
  
const addMinus = async() => {
    var value=$('#quantity').val();
    if(value==""){
      $('#quantity').val(1);
	  console.log("AsD");
    }else{
      var finalValue=parseInt(value)-1<1?1:parseInt(value)-1;
	  console.log(finalValue);
      $('#quantity').val(finalValue);
    }
  }

    function CheckValue() {
		var value=$('#quantity').val();
		if(value >= 10)
		{
			$('#quantity').val(10);
		}
		else if(value <= 0)
		{
			$('#quantity').val(1);
		}
    }
