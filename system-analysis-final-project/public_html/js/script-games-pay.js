document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submitBtn");
  const paymentForm = document.getElementById("paymentForm");
  const confirmationDiv = document.getElementById("confirmation");
  const submittedDataDiv = document.getElementById("submittedData");

  submitButton.addEventListener("click", function () {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    const paymentData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
    };

    // Store payment data in local storage
    localStorage.setItem("paymentData", JSON.stringify(paymentData));

    // Hide the form and show the confirmation
    paymentForm.classList.add("hidden");
    confirmationDiv.classList.remove("hidden");

    // Display submitted data
    submittedDataDiv.innerHTML = `
      <p><strong>First Name:</strong> ${paymentData.firstName}</p>
      <p><strong>Last Name:</strong> ${paymentData.lastName}</p>
      <p><strong>Email:</strong> ${paymentData.email}</p>
      <p><strong>Phone Number:</strong> ${paymentData.phoneNumber}</p>
    `;
  });
});