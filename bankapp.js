"use strict";

//Data

const account1 = {
  owner: "Jonas Smith",
  movements: [
    { amount: 200, date: "1/2/2021" },
    { amount: 450, date: "3/6/2021" },
    { amount: -400, date: "8/20/21" },
    { amount: 3000, date: "1/7/22" },
    { amount: -650, date: "4/9/22" },
    { amount: -130, date: "7/12/22" },
    { amount: 70, date: "12/7/22" },
    { amount: 1300, date: "2/5/23" },
  ],
  interestRate: 1.2,
  pin: "1111",
  username: "jsmith",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [
    { amount: 5000, date: "1/2/2021" },
    { amount: 3400, date: "3/6/2021" },
    { amount: -150, date: "8/20/21" },
    { amount: -790, date: "1/7/22" },
    { amount: -3210, date: "4/9/22" },
    { amount: -1000, date: "7/12/22" },
    { amount: 8500, date: "12/7/22" },
    { amount: -30, date: "2/5/23" },
  ],
  interestRate: 1.5,
  pin: "2222",
  username: "jdavis",
};

const account3 = {
  owner: "Steven Williams",
  movements: [
    { amount: 200, date: "1/2/2021" },
    { amount: -200, date: "3/6/2021" },
    { amount: 340, date: "8/20/21" },
    { amount: -300, date: "1/7/22" },
    { amount: -20, date: "4/9/22" },
    { amount: 50, date: "7/12/22" },
    { amount: 400, date: "12/7/22" },
    { amount: -460, date: "2/5/23" },
  ],
  interestRate: 0.7,
  pin: "3333",
  username: "swilliams",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [
    { amount: 430, date: "1/2/2021" },
    { amount: 1000, date: "3/6/2021" },
    { amount: 700, date: "8/20/21" },
    { amount: 50, date: "1/7/22" },
    { amount: 90, date: "4/9/22" },
  ],
  interestRate: 1,
  pin: "4444",
  username: "ssmith",
};

const accounts = [account1, account2, account3, account4];
sortAccounts();

let currentAccount;
let sortState = 0;
const sort = ["default", "ascending", "decending"];

//Elements
//Main app container
const mainApp = document.querySelector(".app-container");
//CreateAccount Button and UI Global
const bankLogo = document.querySelector(".logo");
const createAccountBtn = document.querySelector(".create-account");
const infoUIDisplay = document.createElement("div");
const createAccountLogo = document.createElement("img");
const createAccountDisplayCloseBtn = document.createElement("button");
const createAccountDisplayNameDiv = document.createElement("div");
const createAccountDisplayFirstName = document.createElement("input");
const createAccountDisplayLastName = document.createElement("input");
const createAccountDisplayUsername = document.createElement("input");
const createAccountDisplayPin = document.createElement("input");
const createAccountDisplayPinVerify = document.createElement("input");
const createAccountDisplayStartBal = document.createElement("input");
const createAccountDisplayCreateBtn = document.createElement("button");
const createAccountDisplayText = document.createElement("div");
//Login Elements
const loginDiv = document.querySelector(".login");
const signOutBtn = document.createElement("button");
const loginBtn = document.querySelector(".login__btn");
const loginUsername = document.querySelector(".login__input--user");
const loginPin = document.querySelector(".login__input--pin");
const welcomeMsg = document.querySelector(".welcome");
const movementsEl = document.querySelector(".movements");
const balanceEl = document.querySelector(".balance");
const summaryInEl = document.querySelector(".summary-in-out-amount-in");
const summaryInOut = document.querySelector(".summary-in-out-amount-out");
const sortBtn = document.querySelector(".btn-sort");
//Operation Elements
const transferBtn = document.querySelector(".transfer-btn");
const transferAccountOwner = document.querySelector(".transfer-account-name");
const loanBtn = document.querySelector(".request-btn");
const closeBtn = document.querySelector(".close-btn");

//UI configs
signOutBtn.innerText = "Sign out";
signOutBtn.classList.add("signout-btn");

//UI Functions

function showBankUserInfo() {
  createUIInfoDisplay();
  const bankInfoText = document.createElement("div");
  let bankInfo = "";
  accounts.forEach(account => (bankInfo += `Username: ${account.username}<br>PIN: ${account.pin}<br>-----<br>`));
  bankInfoText.innerHTML = bankInfo;
  bankInfoText.style.fontSize = "16px";
  infoUIDisplay.append(bankInfoText);
}

function createUIInfoDisplay() {
  infoUIDisplay.innerHTML = "";
  createAccountLogo.src = "banklogo.png";
  createAccountDisplayCloseBtn.innerText = "X";
  createAccountLogo.classList.add("create-account-logo");
  createAccountDisplayCloseBtn.classList.add("create-account-close-btn");
  infoUIDisplay.append(createAccountLogo, createAccountDisplayCloseBtn);
  infoUIDisplay.classList.add("infoUIDisplay");
  document.body.append(infoUIDisplay);
}

function createAccountUIShow() {
  createUIInfoDisplay();
  createAccountDisplayText.innerText = "Create your account today!";
  createAccountDisplayFirstName.placeholder = "First Name";
  createAccountDisplayLastName.placeholder = "Last Name";
  createAccountDisplayUsername.placeholder = "Username";
  createAccountDisplayPin.placeholder = "PIN 4 Digits";
  createAccountDisplayPin.type = "password";
  createAccountDisplayPin.maxLength = "4";
  createAccountDisplayPinVerify.placeholder = "Verify PIN";
  createAccountDisplayPinVerify.type = "password";
  createAccountDisplayPinVerify.maxLength = "4";
  createAccountDisplayStartBal.placeholder = "Starting Balance";
  createAccountDisplayStartBal.type = "number";
  createAccountDisplayStartBal.min = "0";
  createAccountDisplayCreateBtn.innerText = "Create Account";
  //Element Classes
  createAccountDisplayText.classList.add("create-account-text");
  createAccountDisplayNameDiv.classList.add("create-account-name-div");
  createAccountDisplayFirstName.classList.add("create_account_user__input", "user__input", "user_name__input");
  createAccountDisplayLastName.classList.add("create_account_user__input", "user__input", "user_name__input");
  createAccountDisplayUsername.classList.add(
    "create_account_user__input",
    "user__input",
    "user_name__input",
    "user_username_input"
  );
  createAccountDisplayPin.classList.add("create_account_user__input", "user__input", "create-account-pin");
  createAccountDisplayPinVerify.classList.add("create_account_user__input", "user__input", "create-account-pin");
  createAccountDisplayStartBal.classList.add(
    "create_account_user__input",
    "user__input",
    "user_name__input",
    "create-account-start-bal"
  );
  createAccountDisplayCreateBtn.classList.add("create-account", "create-account-display-create-btn");
  //Append Elements
  createAccountDisplayNameDiv.append(createAccountDisplayFirstName, createAccountDisplayLastName);
  infoUIDisplay.append(
    createAccountDisplayText,
    createAccountDisplayNameDiv,
    createAccountDisplayUsername,
    createAccountDisplayPin,
    createAccountDisplayPinVerify,
    createAccountDisplayStartBal,
    createAccountDisplayCreateBtn
  );
}

function createAccountUIRemove() {
  infoUIDisplay.innerHTML = "";
  infoUIDisplay.classList.remove("infoUIDisplay");
}

function createAccountUIInfo(account) {
  document.querySelectorAll(".create_account_user__input").forEach(element => {
    element.remove();
    element.value = "";
  });
  createAccountDisplayCreateBtn.remove();
  createAccountDisplayText.innerHTML = `Here is your account info!<div class="create-account-text-info">Name: <span class="red">${account.owner}</span><br>
                                        Username: <span class="red">${account.username}</span><br>
                                        PIN: <span class="red">${account.pin}</span><br>
                                        Interest Rate: <span class="red">${account.interestRate}</span><br>
                                        Balance: <span class="red">$${account.movements[0].amount}</span></div>`;
}

function createAccountUICheckInputs(firstNameValid, lastNameValid, usernameValid, pinValid, startBalValid) {
  firstNameValid
    ? createAccountDisplayFirstName.classList.remove("create-account-input-error")
    : createAccountDisplayFirstName.classList.add("create-account-input-error");
  lastNameValid
    ? createAccountDisplayLastName.classList.remove("create-account-input-error")
    : createAccountDisplayLastName.classList.add("create-account-input-error");
  usernameValid
    ? createAccountDisplayUsername.classList.remove("create-account-input-error")
    : createAccountDisplayUsername.classList.add("create-account-input-error");
  pinValid
    ? (createAccountDisplayPin.classList.remove("create-account-input-error"),
      createAccountDisplayPinVerify.classList.remove("create-account-input-error"))
    : (createAccountDisplayPin.classList.add("create-account-input-error"),
      createAccountDisplayPinVerify.classList.add("create-account-input-error"));
  startBalValid
    ? createAccountDisplayStartBal.classList.remove("create-account-input-error")
    : createAccountDisplayStartBal.classList.add("create-account-input-error");

  return firstNameValid && lastNameValid && usernameValid && pinValid && startBalValid;
}

function createAccountUIInputUsername() {
  let usernameNum = 1;
  const usernameSug = `${(
    createAccountDisplayFirstName.value.slice(0, 1) + createAccountDisplayLastName.value
  ).toLowerCase()}`;
  let usernameAuto = usernameSug;
  while (!createAccountCheckUsernameUnique(usernameAuto)) {
    usernameAuto = `${usernameSug}${usernameNum}`;
    usernameNum++;
  }
  createAccountDisplayFirstName.value === "" && createAccountDisplayLastName.value === ""
    ? (createAccountDisplayUsername.value = "")
    : (createAccountDisplayUsername.value = usernameAuto);
}

function createAccountCheckUsernameUnique(username) {
  //If unique, returns true
  return !accounts.some(account => account.username === username);
}

function displayUpdateAll(movements) {
  displayBalance(movements);
  displayMovements(movements);
  displaySummary(movements);
}

function displayMovements(movements, sort = "default") {
  const movs =
    sort === "default"
      ? movements
      : sort === "ascending"
      ? movements.slice().sort((a, b) => a.amount - b.amount)
      : movements.slice().sort((a, b) => b.amount - a.amount);
  movementsEl.innerHTML = "";
  movs.forEach(mov => {
    const movementType = mov.amount > 0 ? "deposit" : "withdrawl";
    const html = `<div class="movement-row">
    <div class="movement-type movement-type__${movementType}">${movementType}</div>
    <div class="movement-date">${mov.date}</div>
    <div class="movement-value">$${mov.amount}</div>`;
    movementsEl.insertAdjacentHTML("afterbegin", html);
  });
}

function displayBalance(movements) {
  const balance = movements.reduce((sum, movement) => sum + movement.amount, 0);
  balanceEl.innerText = `$${balance}`;
  return balance;
}

function displaySummary(movements) {
  summaryInEl.innerText = `$${movements.filter(mov => mov.amount > 0).reduce((sum, mov) => sum + mov.amount, 0)}`;
  summaryInOut.innerText = `$${Math.abs(
    movements.filter(mov => mov.amount < 0).reduce((sum, mov) => sum + mov.amount, 0),
    0
  )}`;
}

function displaySort() {
  sortState = ++sortState % sort.length;
  displayMovements(currentAccount.movements, sort[sortState]);
}

function loginAccountUI() {
  currentAccount = accounts.find(account => account.username === loginUsername.value && account.pin === loginPin.value);
  if (currentAccount) {
    welcomeMsg.innerText = `Welcome back, ${currentAccount.owner.split(" ")[0]}!`;
    loginUsername.value = loginPin.value = "";
    displayUpdateAll(currentAccount.movements);
    transferDropDown();
    mainApp.classList.remove("hide");
    loginUsername.remove();
    loginPin.remove();
    loginBtn.remove();
    loginDiv.append(signOutBtn);
  } else {
    createUIInfoDisplay();
    const loginError = document.createElement("div");
    loginError.innerText = "Username or Pin is wrong.";
    loginError.style.fontSize = "32px";
    infoUIDisplay.append(loginError);
  }
}

function transferDropDown() {
  accounts.forEach(account => {
    if (currentAccount.owner != account.owner) {
      const transferOption = document.createElement("option");
      transferOption.value = account.username;
      transferOption.innerText = account.owner;
      transferAccountOwner.append(transferOption);
    }
  });
}

function signOut() {
  mainApp.classList.add("hide");
  currentAccount = "";
  summaryInEl.innerText = summaryInOut.innerText = "$0";
  balanceEl.innerText = "";
  movementsEl.innerHTML = "";
  transferAccountOwner.innerHTML = '<option value="Choose an Account">Choose an Account</option>';
  welcomeMsg.innerText = "Log in to get started";
  signOutBtn.remove();
  loginDiv.append(loginUsername);
  loginDiv.append(loginPin);
  loginDiv.append(loginBtn);
}

//Data Functions

function sortAccounts() {
  accounts.sort((a, b) => {
    if (a.owner > b.owner) return 1;
    if (a.owner < b.owner) return -1;
  });
}

function getDate() {
  const todaysDate = new Date();
  const displayDate = `${todaysDate.getMonth() + 1}/${todaysDate.getDate()}/${String(todaysDate.getFullYear()).slice(
    2
  )}`;
  return displayDate;
}

function createAccount() {
  const firstName = (createAccountDisplayFirstName.value = createAccountDisplayFirstName.value.trim());
  const lastName = (createAccountDisplayLastName.value = createAccountDisplayLastName.value.trim());
  const username = (createAccountDisplayUsername.value = createAccountDisplayUsername.value.trim());
  const pin = createAccountDisplayPin.value;
  const pinVerify = createAccountDisplayPinVerify.value;
  const startBal = Number(createAccountDisplayStartBal.value);
  const firstNameValid = /^[a-zA-Z]+$/.test(firstName) && !/\s+/.test(firstName); //Check characters are not numbers and whitespace
  const lastNameValid = /^[a-zA-Z]+$/.test(lastName) && !/\s+/.test(lastName); //Check characters are not numbers and whitespace
  const usernameValid = createAccountCheckUsernameUnique(username) && username !== ""; //Checks if username is unique and not blank
  const pinValid = /^[0-9]+$/.test(pin) && pin.length === 4 && pinVerify.length === 4 && pin === pinVerify; //check all are numbers and pins match
  const startBalValid = startBal >= 0;
  if (createAccountUICheckInputs(firstNameValid, lastNameValid, usernameValid, pinValid, startBalValid)) {
    accounts.push({
      owner: `${firstName} ${lastName}`,
      movements: [{ amount: startBal, date: getDate() }],
      interestRate: 1.2,
      pin: pin,
      username: username,
    });
    createAccountUIInfo(accounts[accounts.length - 1]);
    sortAccounts();
  }
}

function transferFunds() {
  const transferAmount = document.querySelector(".transfer-amount");
  const transferNum = Number(transferAmount.value);
  const receiveAccount = accounts.find(account => account.username === transferAccountOwner.value);
  if (transferNum > 0 && transferNum <= displayBalance(currentAccount.movements)) {
    receiveAccount.movements.push({ amount: transferNum, date: getDate() });
    currentAccount.movements.push({ amount: -transferNum, date: getDate() });
    displayUpdateAll(currentAccount.movements);
  }
  transferAmount.value = "";
}

function requestLoan() {
  const requestAmount = document.querySelector(".request-amount");
  const requestNum = Number(requestAmount.value);
  if (requestNum > 0) {
    currentAccount.movements.push({ amount: requestNum, date: getDate() });
    displayUpdateAll(currentAccount.movements);
  }
  requestAmount.value = "";
  console.log(currentAccount);
}

function closeAccount() {
  const closeUsername = document.querySelector(".close-username");
  const closePin = document.querySelector(".close-pin");
  console.log(closeUsername.value);
  console.log(closePin.value);
  if (currentAccount.username === closeUsername.value && currentAccount.pin === closePin.value) {
    accounts.splice(
      accounts.findIndex(account => account.username === closeUsername.value && account.pin === closePin.value),
      1
    );
    signOut();
    closeUsername.value = closePin.value = "";
  }
}

//Event Listeners
bankLogo.addEventListener("click", showBankUserInfo);
createAccountBtn.addEventListener("click", createAccountUIShow);
createAccountDisplayCloseBtn.addEventListener("click", createAccountUIRemove);
createAccountDisplayCreateBtn.addEventListener("click", createAccount);
createAccountDisplayFirstName.addEventListener("keyup", createAccountUIInputUsername);
createAccountDisplayLastName.addEventListener("keyup", createAccountUIInputUsername);
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  loginAccountUI();
});
sortBtn.addEventListener("click", displaySort);
transferBtn.addEventListener("click", function (e) {
  e.preventDefault();
  transferFunds();
});
loanBtn.addEventListener("click", function (e) {
  e.preventDefault();
  requestLoan();
});
closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  closeAccount();
});
signOutBtn.addEventListener("click", function (e) {
  e.preventDefault();
  signOut();
});
