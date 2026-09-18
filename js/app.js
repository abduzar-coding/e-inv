const templates = [
    {
        category: "Weddings",
        items: [
            {
                name: "Wedding Basic 01",
                url: "wedding/wedding-basic-01.html"
            }
        ]
    },

    {
        category: "Birthdays",
        items: [
            {
                name: "Birthday Basic 01",
                url: "birthday/birthday-basic-01.html"
            }
        ]
    }
];


function renderTemplates() {
    const app = document.getElementById("app");

    templates.forEach(category => {
        const section = document.createElement("section");

        const title = document.createElement("h2");
        title.textContent = category.category;

        const links = document.createElement("div");
        links.className = "links";

        category.items.forEach(template => {
            const link = document.createElement("a");

            link.href = template.url;
            link.textContent = template.name;

            const arrow = document.createElement("span");
            arrow.textContent = "↗";

            link.appendChild(arrow);
            links.appendChild(link);
        });

        section.appendChild(title);
        section.appendChild(links);

        app.appendChild(section);
    });
}


document.addEventListener("DOMContentLoaded", renderTemplates);