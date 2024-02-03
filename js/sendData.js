/**
 * this function to send data from form to google sheet
 * @param from - form will get data from it
 */
async function sendData(api, sheet, form) {
    // ger form data
    const currentForm = new FormData(form);


    // set parames
    const parames = new URLSearchParams(currentForm);

    const respnose = await fetch(`${api}?${parames}&sheetName=${sheet}`, {
        method: "POST",
    });
}

export {
    sendData
}