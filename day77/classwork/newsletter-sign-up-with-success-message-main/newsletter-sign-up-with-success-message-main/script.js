const form = document.querySelector('form');
const mainPage = document.getElementById('mainPage');   
const successBox = document.getElementById('conteiner2'); 
const emailInput = document.getElementById('email');
const errorText = document.getElementById('inforFalce');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.email.value;

    // მარტივი ვალიდაცია: სიგრძე და "@" არსებობა
    if (email.length < 13 || !email.includes('@') || !email.includes('.')) {
        emailInput.classList.add('error');
        errorText.textContent = "Incorrect email, please try again.";
        errorText.style.display = 'flex';
        form.reset()
    
        return; // გაჩერდეს აქვე
    }

    // თუ სწორი email -> reset error
    errorText.style.display = 'none';

    // დამალე მთავარი გვერდი
    mainPage.style.display = 'none';

    // გამოაჩინე success მესიჯი
    successBox.style.display = 'flex';
    successBox.innerHTML = `
        <div class="information">
            <img src="assets/images/icon-list.svg" alt="">
            <h3>Thanks for subscribing!</h3>
            <p>
                A confirmation email has been sent to <strong>${email}</strong>. <br>
                Please open it and click the button inside to confirm your subscription.
            </p>
            <button id="dismissBtn">Dismiss message</button>
        </div>
    `;

    // Dismiss ღილაკი -> აბრუნებს მთავარ გვერდს
    document.getElementById('dismissBtn').addEventListener('click', () => {
        successBox.style.display = 'none';
        mainPage.style.display = 'flex';
        form.reset();
    });
});
