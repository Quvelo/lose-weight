/**
 * this function to send data from form to google sheet
 * @param from - form will get data from it
 */
async function sendData(form) {
    // ger form data
    const currentForm = new FormData(form);


    // set parames
    const parames = new URLSearchParams(currentForm);

    const respnose = await fetch(`https://script.google.com/macros/s/AKfycbyCKMUOOrv-O5JDIAkLpbDla9XZ9cJP2jNbwvoiCRJSvmAIxdxmi3reGkxVSDSWiWD0/exec?${parames}`, {
        method: "POST",
    });
}

export {
    sendData
}