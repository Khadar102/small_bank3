// la soo wareeg all elements
const saveButton = document.getElementById("save-btn");
const clearButton = document.getElementById("clear-btn");
const accountName = document.getElementById("acount-name");
const accountNumber = document.getElementById("acount-number");
const ownerName = document.getElementById("owner-name");
const ownerNumber = document.getElementById("owner-number");
const spanPlace1 = document.getElementById("span-1");
const spanPlace2 = document.getElementById("span-2");
const spanPlace3 = document.getElementById("span-3");
const spanPlace4 = document.getElementById("span-4");

// const form = document.getElementById("form");
// fucntion sumit grynya data-da ama gudbinya data-da
saveButton.addEventListener("click", function (event) {
  event.preventDefault();
  // waligaa validationka ku horee
  if (accountName.value == "") {
    accountName.classList.add("bg", "bg-warning", "text", "text-danger");
    spanPlace1.classList.add("show-error");
    spanPlace1.textContent = "Account name required !";
    return;
  } else {
    accountName.classList.remove("bg", "bg-warning", "text", "text-danger");
    spanPlace1.classList.remove("show-error");
    spanPlace1.textContent = "";
  }
  if (accountNumber.value == "") {
    accountNumber.classList.add("bg", "bg-warning", "text", "text-danger");
    spanPlace2.classList.add("show-error");
    spanPlace2.textContent = "Account number required !";
    return;
  } else {
    accountNumber.classList.remove("bg", "bg-warning", "text", "text-danger");
    spanPlace2.classList.remove("show-error");
    spanPlace2.textContent = "";
  }
  if (ownerName.value == "") {
    ownerName.classList.add("bg", "bg-warning", "text", "text-danger");
    spanPlace3.classList.add("show-error");
    spanPlace3.textContent = "Owner name required !";
    return;
  } else {
    ownerName.classList.remove("bg", "bg-warning", "text", "text-danger");
    spanPlace3.classList.remove("show-error");
    spanPlace3.textContent = "";
  }
  if (ownerNumber.value == "") {
    ownerNumber.classList.add("bg", "bg-warning", "text", "text-danger");
    spanPlace4.classList.add("show-error");
    spanPlace4.textContent = "owner number required !";
    return;
  } else {
    ownerNumber.classList.remove("bg", "bg-warning", "text", "text-danger");
    spanPlace4.classList.remove("show-error");
    spanPlace4.textContent = "";
  }
  checkOwnerNumber();
  checkAcountNumber();
});

// function checkimya acount number iyo owner number

function checkAcountNumber() {
  // validationka ku horee
  if (accountNumber.value.length > 7) {
    accountNumber.classList.add("bg", "bg-warning", "text", "text-danger");
    spanPlace2.innerText = "At list 6  charcter!";
    spanPlace2.classList.add("text-danger");
    return false;
  } else {
    accountNumber.classList.remove("bg", "bg-warning", "text", "text-warning");
    spanPlace2.innerText = "";
    return true;
  }
}

function checkOwnerNumber() {
  if (ownerNumber.value.length > 7) {
    ownerNumber.classList.add("bg", "bg-warning");
    spanPlace4.innerText = "At list 6 character !";
    spanPlace4.classList.add("text-danger");
    return false;
  } else {
    ownerNumber.classList.remove("bg", "bg-warning", "text", "text-danger");
    spanPlace4.innerText = "";
    return true;
  }
}

// fucntion tirtiraya xogta input-ka

function clearInputData() {
  accountName.value = "";
  accountNumber.value = "";
  ownerName.value = "";
  ownerNumber.value = "";
}
