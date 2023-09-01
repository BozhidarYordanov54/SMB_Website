let url = "https://script.google.com/macros/s/AKfycbwkB9MqrfkZbI-qpX08qHYBhnrNOm3WsA_VxE4f3YGHf7q7FBKrgsYdS5AxUx9LoCBH/exec";
let file = document.querySelector("#signup-form input[type='file']");
let img = document.querySelector("#signup-form img");

let imageNotification = document.getElementById('imageUploaded');

file.addEventListener('change', () => {
    let fr = new FileReader();
    fr.addEventListener('loadend', () => {
        let result = fr.result;
        img.src = result;
        let spt = result.split("base64,")[1];
        let obj = {
            base64: spt,
            type: file.files[0].type,
            name: file.files[0].name
        }

        fetch(url, {
            method: "POST",
            body: JSON.stringify(obj)
        })
        .then(r => r.text())
        .then(data => {
            console.log(data);

            // Check if the response contains a success message or any indicator that the upload was successful
            if (data.includes("Image uploaded")) {
                imgUploaded.innerHTML = "Image uploaded";
                // You can perform additional actions here after successful upload
            } else {
                console.log("Image upload failed.");
                // You can handle the failed upload scenario here
            }
        })
    })
    fr.readAsDataURL(file.files[0]);
});
