```javascript
// ================================
// SEARCH
// ================================

function searchContent() {

    const input = document
        .getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();

    const result = document.getElementById("searchResult");

    if (input === "") {
        result.innerHTML = "Please enter something to search.";
        return;
    }

    const crops = [
        "rice",
        "paddy",
        "maize",
        "corn",
        "chilli",
        "tomato",
        "cotton",
        "groundnut"
    ];

    const topics = [
        "seed",
        "seeds",
        "fertilizer",
        "fertilizers",
        "pesticide",
        "pesticides",
        "disease",
        "crop"
    ];

    if (crops.some(crop => input.includes(crop))) {

        result.innerHTML =
            "🌱 Crop information found. More crop details will be available soon.";

    } else if (topics.some(topic => input.includes(topic))) {

        result.innerHTML =
            "🔎 Farming information found. Explore the sections below.";

    } else {

        result.innerHTML =
            "🔍 No exact result found. Try searching for rice, maize, chilli, tomato, seeds or fertilizer.";
    }
}


// ================================
// CROP INFORMATION
// ================================

function showInfo(crop) {

    const information = {

        Rice:
            "🌾 Rice: Explore suitable varieties, soil requirements, water management and cultivation practices.",

        Maize:
            "🌽 Maize: Explore varieties, sowing information, soil requirements and crop management.",

        Chilli:
            "🌶️ Chilli: Explore varieties, growing conditions, nutrient management and common pests.",

        Tomato:
            "🍅 Tomato: Explore varieties, soil requirements, nutrient management and common diseases."
    };

    alert(information[crop]);
}


// ================================
// PRODUCT INFORMATION
// ================================

function showProductInfo(type) {

    if (type === "fertilizer") {

        alert(
            "🌿 Fertilizers provide nutrients required for crop growth. " +
            "Use soil-test information and crop recommendations where available."
        );

    } else {

        alert(
            "🛡️ Pest management should begin with correct pest identification. " +
            "Integrated pest management can combine monitoring, cultural, biological and chemical methods."
        );
    }
}


// ================================
// IMAGE PREVIEW
// ================================

function previewImage(event) {

    const file = event.target.files[0];

    if (!file) {
        return;
    }

    const preview = document.getElementById("preview");
    const scanButton = document.getElementById("scanButton");

    preview.src = URL.createObjectURL(file);

    preview.style.display = "block";

    scanButton.style.display = "inline-block";
}


// ================================
// CROP SCANNER
// ================================

function scanCrop() {

    const result = document.getElementById("scanResult");

    result.innerHTML =
        "🔄 Analyzing image...";

    setTimeout(() => {

        result.innerHTML =
            "🌿 Image uploaded successfully! AI crop-disease detection will be connected in the next version.";

    }, 1500);
}
```
