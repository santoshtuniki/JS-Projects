const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const mail = new FormData(form);
    await sendMail(mail);
});

const sendMail = async (mail) => {
    try {
        const response = await fetch("/send", {
            method: "post",
            body: mail,
        });
        const data = await response.json();
    } catch (error) {
        console.log('Error sending form data\n', error);
    }
};