class Account {
    constructor(email, password, fullname) {
        this.email = email;
        this._password = password;
        this.fullname = fullname;
    }

    // ===============================
    // 1) checkIfExists — ამოწმებს იმეილს
    // ===============================
    static checkIfExists(email) {
        // ვიღებთ accounts მასივს localStorage-დან
        const accounts = Account.getFromStorage("accounts");

        // ვამოწმებთ არის თუ არა იგივე email
        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].email === email) {
                return true; // არსებობს
            }
        }
        return false; // არ არსებობს
    }

    // =====================================
    // 2) addToStorage — ამატებს ახალ ობიექტს
    // =====================================
    static addToStorage(accountObj) {
        // თუ უკვე არსებობს იგივე email → გაჩერდეს
        if (Account.checkIfExists(accountObj.email)) {
            alert("რეგისტრაცია წარუმატებელია! ეს ელფოსტა უკვე რეგისტრირებულია.");
            return; // ფუნქციის გაჩერება
        }

        // ვიღებთ არსებულ accounts მასივს
        const accounts = Account.getFromStorage("accounts");

        // ვამატებთ ახალ Account ობიექტს
        accounts.push(accountObj);

        // ვაბრუნებთ обратно localStorage-ში
        localStorage.setItem("accounts", JSON.stringify(accounts));

        alert("რეგისტრაცია წარმატებით დასრულდა!");
    }

    // ===================================================
    // 3) getFromStorage — localStorage-დან მონაცემის წამოღება
    // ===================================================
    static getFromStorage(key) {
        const data = localStorage.getItem(key); // მონაცემის წამოღება
        const parsed = JSON.parse(data); // JSON → JS ობიექტი/მასივი

        // თუ ცარიელია, ვაბრუნებთ ცარიელ მასივს []
        return parsed === null ? [] : parsed;
    }
}

/*
    JSON (JavaScript Object Notation):
    - ტექსტური ფორმატია მონაცემების შესანახად და გადაცემისთვის
*/

// ============================
// ფორმის დამუშავება
// ============================

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // გვერდი არ გადაიტვირთოს

        const name = document.getElementById("name").value;
        const lastname = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // ვქმნით Account ობიექტს
        const newAccount = new Account(email, password, `${name} ${lastname}`);

        // ვამატებთ localStorage-ში
        Account.addToStorage(newAccount);

        // ფორმის გასუფთავება
        form.reset();
    });
});
