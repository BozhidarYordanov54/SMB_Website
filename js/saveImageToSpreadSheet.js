let url = "https://script.google.com/macros/s/AKfycbxdMqyZTV07INK3N-ggtRF5lRev1a9oXSUZI_E39boU7H9l--FnCKWDS_EW5oowmcM6/exec";
let file = document.querySelector("#signup-form input[type='file']");
let img = document.querySelector("#signup-form img");

let imageStatus = document.getElementById('imageStatus');
imageStatus.style.textAlign = "center";
imageStatus.style.fontWeight = "bold";

let imageNotification = document.getElementById('imageUploaded');

file.addEventListener('change', () => {
    imageStatus.innerHTML = "Снимката се качва...";

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

        if (obj.type.startsWith('image/')) {
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
                    imageStatus.innerHTML = "Снимката качена успешно!";
                    imageStatus.style.color = "rgb(0, 179, 0)";
                    // You can perform additional actions here after successful upload
                } else {
                    console.log("Image upload failed.");
                    // You can handle the failed upload scenario here
                }
            })
        } else {
            imageStatus.innerHTML = "Прикаченият файл не е снимка!";
            imageStatus.style.color = "red";
        }
    })
    fr.readAsDataURL(file.files[0]);
});


