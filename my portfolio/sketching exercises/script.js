// 載入作品資料
async function loadProfolio() {
    try {
        const response = await fetch("/profolio");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const profolio = await response.json();

        const container = document.getElementById("gallery");
        profolio.forEach((item) => {
            const div = document.createElement("div");
            div.className = "mb-5";
            div.innerHTML = `
                <h3>>> ${item.name}</h3>
                <img src="${item.imgSrc}" alt="${item.name}" class="d-block" style="width:50%">
            `;
            container.appendChild(div);
        });
    } catch (error) {
        console.error("載入作品資料時出錯：", error);
    }
}

// 處理上傳表單
document.getElementById("uploadForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
        const response = await fetch("/upload", {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        alert("上傳成功！");
        location.reload();
    } catch (error) {
        document.getElementById("error-message").textContent = error.message;
        document.getElementById("error-message").style.display = "block";
    }
});

// 頁面加載時執行
window.onload = loadProfolio;
