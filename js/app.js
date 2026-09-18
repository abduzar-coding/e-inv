const templates = [
    {
        category: "wedding",
        name: "Wedding Basic 01",
        link: "wedding/wedding-basic-01.html"
    },
    {
        category: "birthday",
        name: "Birthday Basic 01",
        link: "birthday/birthday-basic-01.html"
    }
];


const translations = {
    en: {
        weddings: "Weddings",
        birthdays: "Birthdays"
    },

    ru: {
        weddings: "Свадьбы",
        birthdays: "Дни рождения"
    },

    uz: {
        weddings: "To'ylar",
        birthdays: "Tug'ilgan kunlar"
    }
};


let language =
    localStorage.getItem("einv-language") || "en";


function render() {

    document.querySelector("#wedding-links").innerHTML =
        templates
            .filter(item => item.category === "wedding")
            .map(item => `
                <a href="${item.link}">
                    ${item.name}
                </a>
            `)
            .join("");


    document.querySelector("#birthday-links").innerHTML =
        templates
            .filter(item => item.category === "birthday")
            .map(item => `
                <a href="${item.link}">
                    ${item.name}
                </a>
            `)
            .join("");


    document.querySelector(
        '[data-i18n="weddings"]'
    ).textContent =
        translations[language].weddings;


    document.querySelector(
        '[data-i18n="birthdays"]'
    ).textContent =
        translations[language].birthdays;


    document.documentElement.lang =
        language;


    document
        .querySelectorAll("[data-lang]")
        .forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.lang === language
            );
        });
}


document
    .querySelectorAll("[data-lang]")
    .forEach(button => {

        button.addEventListener("click", () => {

            language =
                button.dataset.lang;

            localStorage.setItem(
                "einv-language",
                language
            );

            render();
        });
    });


render();