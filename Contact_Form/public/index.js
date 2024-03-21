const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const mail = new FormData(form);
    // const plainFormData = Object.fromEntries(mail.entries());
    try {
        await sendMail(mail);
    } catch (error) {
        console.error("Error sending email:", error);
    }
});

const sendMail = async (mail) => {
    try {
        const response = await fetch("/send", {
            method: "POST",
            body: mail,
        });
        const { status } = await response.json();
        alert(status)
    } catch (error) {
        console.log('Error sending form data\n', error);
    }
};