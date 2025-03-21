const restaurantData = {
    grapevine: {
        name: "Grapevine",
        address: "Lot 1-C 16-17 Katipunan Ave, White Plains, Quezon City, Metro Manila",
        phone: "N/A",
        category: "Western",
        hours: "7AM to 11PM",
        price: "₱₱-₱₱₱",
        description: "They say home is where your heart is. So, when it yearns for where great food, crafted drinks, and a refined ambiance converge, your best bet lies behind a pair of bright red doors. Nestled in White Plains, Quezon City is Grapevine, an intimate space that offers more than just a delectable fare; it promises a unique dining experience–a sanctuary where conversations linger, moments last, and the stresses of life dissipate."
    },
    borro: {
        name: "Borro",
        address: "10 Scout Borromeo, cor Sct. Tobias St, Quezon City, Metro Manila",
        phone: "N/A",
        category: "International",
        hours: "7AM to 12MN",
        price: "₱₱-₱₱₱",
        description: "Like many comfort food spots, Borro’s interior is perfect for your Instagram fix. I like its dark wood and minimalist design, which I think is the newest kid on the comfort food block. It got its name from its location, which is in Scout Borromeo Street, Quezon City. Most of the food are for sharing. So considering the prices, the dishes are value for money."
    },
    incanta: {
        name: "Incanta",
        address: "10 Scout Borromeo cor Scout Tobias, Quezon City, Philippines 1103",
        phone: "N/A",
        category: "Filipino-Japanese",
        hours: "7AM to 12MN",
        price: "₱₱-₱₱₱",
        description: "Welcome to Incanta, Metro Manila’s First Cave Bar: Located in the vibrant neighborhood of Tomas Morato, Quezon City, Incanta is where history meets the future, blending ancient caves with futuristic luxury. More than just a bar or restaurant, it’s a sensory journey designed to transport you to another dimension—all within the hood of the city."
    },
    tablo: {
        name: "Tablo Kitchen x Cafe",
        address: "14a Scout Borromeo St, Diliman, Quezon City, Metro Manila",
        phone: "N/A",
        category: "Asian-Filipino",
        hours: "10AM to 12MN",
        price: "₱₱-₱₱₱",
        description: "As a growing food and beverage industry business, Tablo Kitchen x Cafe strives to offer its clients comfort food, cozy interiors, and a vibrant community space for gathering. Aside from these, Tablo is passionate about ensuring food safety and providing top-notch customer service. While the journey hasn’t always been easy, Tablo’s passion drives them to continually elevate their clients’ dining experience."
    }
};

function openPopup(restaurant) {
    const details = restaurantData[restaurant];
    document.getElementById("popup-details").innerHTML = `
        <h2>${details.name}</h2>
        <p><strong>Address:</strong> ${details.address}</p>
        <p><strong>Category:</strong> ${details.category}</p>
        <p><strong>Hours:</strong> ${details.hours}</p>
        <p><strong>Price:</strong> ${details.price}</p>
        <p>${details.description}</p>
    `;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
