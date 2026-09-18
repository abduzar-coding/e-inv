/* ========================================
   TRANSLATIONS
======================================== */

const translations = {

    en: {
        brandSubtitle: "Digital Invitations",

        navWeddings: "Weddings",
        navBirthdays: "Birthdays",
        navAll: "All Templates",

        heroEyebrow: "The Invitation Collection",

        heroTitle:
            "Moments worth remembering, beautifully invited.",

        heroDesc:
            "A curated collection of digital invitations designed for weddings, birthdays, and life's most meaningful celebrations.",

        statWedding:
            "Wedding Templates",

        statCelebration:
            "Celebration Templates",

        statMoments:
            "Moments to Celebrate",

        filterAll:
            "All",

        filterWedding:
            "Wedding",

        filterBirthday:
            "Birthday",

        searchPlaceholder:
            "Search collection...",

        sortNewest:
            "Newest",

        sortName:
            "Name",

        sortTier:
            "Tier",

        statusAvailable:
            "Available",

        statusComingSoon:
            "Coming Soon",

        previewText:
            "Preview",

        emptyTitle:
            "Coming Soon",

        emptyDesc:
            "Invitations for this category are currently being crafted for the collection. More beautiful moments are on the way.",

        footerTagline:
            "Digital invitations for meaningful moments.",

        t1Title:
            "Wedding Basic 01",

        t1Desc:
            "A refined and romantic wedding invitation with elegant typography, subtle animation, countdown, RSVP and venue details.",

        t2Title:
            "Birthday Basic 01",

        t2Desc:
            "A joyful yet sophisticated celebration invitation featuring clean layouts, interactive RSVP, and event timing."
    },


    ru: {
        brandSubtitle:
            "Цифровые Приглашения",

        navWeddings:
            "Свадьбы",

        navBirthdays:
            "Дни Рождения",

        navAll:
            "Все Шаблоны",

        heroEyebrow:
            "Коллекция Приглашений",

        heroTitle:
            "Моменты, которые стоит запомнить, с красивым приглашением.",

        heroDesc:
            "Кураторская коллекция цифровых приглашений для свадеб, дней рождения и самых важных жизненных событий.",

        statWedding:
            "Свадебные шаблоны",

        statCelebration:
            "Праздничные шаблоны",

        statMoments:
            "Моменты для праздника",

        filterAll:
            "Все",

        filterWedding:
            "Свадьба",

        filterBirthday:
            "День рождения",

        searchPlaceholder:
            "Поиск по коллекции...",

        sortNewest:
            "Новые",

        sortName:
            "По имени",

        sortTier:
            "По уровню",

        statusAvailable:
            "Доступно",

        statusComingSoon:
            "Скоро",

        previewText:
            "Просмотр",

        emptyTitle:
            "Скоро в продаже",

        emptyDesc:
            "Приглашения для этой категории сейчас создаются для нашей коллекции. Ещё больше прекрасных моментов впереди.",

        footerTagline:
            "Цифровые приглашения для значимых моментов.",

        t1Title:
            "Свадебный Базовый 01",

        t1Desc:
            "Изысканное и романтичное свадебное приглашение с элегантной типографикой, анимацией, таймером, RSVP и деталями площадки.",

        t2Title:
            "Праздничный Базовый 01",

        t2Desc:
            "Яркое, но изысканное приглашение на праздник с чистой версткой, интерактивным RSVP и временем проведения."
    },


    uz: {
        brandSubtitle:
            "Raqamli Taklifnomalar",

        navWeddings:
            "To'ylar",

        navBirthdays:
            "Tug'ilgan kunlar",

        navAll:
            "Barcha Shablonlar",

        heroEyebrow:
            "Taklifnomalar To'plami",

        heroTitle:
            "Esda qoladigan lahzalar uchun go'zal taklifnomalar.",

        heroDesc:
            "To'ylar, tug'ilgan kunlar va hayotning eng mazmunli bayramlari uchun maxsus tayyorlangan raqamli taklifnomalar kolleksiyasi.",

        statWedding:
            "To'y shablonlari",

        statCelebration:
            "Bayram shablonlari",

        statMoments:
            "Nishonlash uchun lahzalar",

        filterAll:
            "Barchasi",

        filterWedding:
            "To'y",

        filterBirthday:
            "Tug'ilgan kun",

        searchPlaceholder:
            "To'plamdan qidirish...",

        sortNewest:
            "Eng yangi",

        sortName:
            "Nomi bo'yicha",

        sortTier:
            "Darajasi",

        statusAvailable:
            "Mavjud",

        statusComingSoon:
            "Tez kunda",

        previewText:
            "Ko'rish",

        emptyTitle:
            "Tez Kunda",

        emptyDesc:
            "Ushbu toifa uchun taklifnomalar hozirda tayyorlanmoqda. Yanada go'zal lahzalar yo'lda.",

        footerTagline:
            "Mazmunli lahzalar uchun raqamli taklifnomalar.",

        t1Title:
            "To'y Basic 01",

        t1Desc:
            "Nafis tipografiya, nozik animatsiya, ortga hisoblash, RSVP va manzil tafsilotlariga ega romantik to'y taklifnomasi.",

        t2Title:
            "Tug'ilgan Kun Basic 01",

        t2Desc:
            "Toza dizayn, interaktiv RSVP va tadbir vaqti bilan jihozlangan quvnoq hamda zamonaviy bayram taklifnomasi."
    }

};


/* ========================================
   APPLICATION STATE
======================================== */

let currentLang = "en";

let activeCategory = "all";

let searchQuery = "";

let currentSort = "newest";


/* ========================================
   TEMPLATE CONFIGURATION
======================================== */

const templates = [

    {
        id: "wedding-basic-01",

        category: "wedding",

        tier: "basic",

        number: "01",

        titleKey: "t1Title",

        descKey: "t1Desc",

        path:
            "wedding/wedding-basic-01.html",

        status:
            "available",

        dateAdded:
            "2026-01-01"
    },


    {
        id: "birthday-basic-01",

        category: "birthday",

        tier: "basic",

        number: "01",

        titleKey: "t2Title",

        descKey: "t2Desc",

        path:
            "birthday/birthday-basic-01.html",

        status:
            "coming-soon",

        dateAdded:
            "2026-02-01"
    }

];


/* ========================================
   INITIALIZATION
======================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderStats();

        renderTemplates();

    }
);


/* ========================================
   LANGUAGE SWITCHER
======================================== */

function switchLanguage(lang) {

    if (!translations[lang]) {
        return;
    }

    currentLang = lang;


    /* Active language button */

    document
        .querySelectorAll(".lang-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.textContent
                    .trim()
                    .toLowerCase() === lang
            );

        });


    /* HTML language */

    document.documentElement
        .setAttribute(
            "lang",
            lang
        );


    /* Translate static elements */

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.getAttribute(
                    "data-i18n"
                );

            if (
                translations[lang][key]
            ) {

                element.textContent =
                    translations[lang][key];

            }

        });


    /* Translate placeholders */

    document
        .querySelectorAll(
            "[data-i18n-placeholder]"
        )
        .forEach(element => {

            const key =
                element.getAttribute(
                    "data-i18n-placeholder"
                );

            if (
                translations[lang][key]
            ) {

                element.placeholder =
                    translations[lang][key];

            }

        });


    renderStats();

    renderTemplates();
}


/* ========================================
   RENDER STATISTICS
======================================== */

function renderStats() {

    const weddingCount =
        templates.filter(
            template =>
                template.category === "wedding"
        ).length;


    const celebrationCount =
        templates.filter(
            template =>
                template.category === "birthday"
        ).length;


    const t =
        translations[currentLang];


    const statsRow =
        document.getElementById(
            "statsRow"
        );


    statsRow.innerHTML = `

        <div class="stat-item">

            <div class="stat-number">
                ${String(weddingCount).padStart(2, "0")}
            </div>

            <div class="stat-label">
                ${t.statWedding}
            </div>

        </div>


        <div class="stat-item">

            <div class="stat-number">
                ${String(celebrationCount).padStart(2, "0")}
            </div>

            <div class="stat-label">
                ${t.statCelebration}
            </div>

        </div>


        <div class="stat-item">

            <div class="stat-number">
                ∞
            </div>

            <div class="stat-label">
                ${t.statMoments}
            </div>

        </div>

    `;
}


/* ========================================
   CATEGORY FILTER
======================================== */

function filterByCategory(
    category,
    event
) {

    if (event) {
        event.preventDefault();
    }


    activeCategory =
        category;


    /* Filter buttons */

    document
        .querySelectorAll(".filter-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.getAttribute(
                    "data-filter"
                ) === category
            );

        });


    /* Navigation */

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.classList.remove(
                "active"
            );


            const key =
                link.getAttribute(
                    "data-i18n"
                );


            if (
                category === "wedding" &&
                key === "navWeddings"
            ) {

                link.classList.add(
                    "active"
                );

            }


            if (
                category === "birthday" &&
                key === "navBirthdays"
            ) {

                link.classList.add(
                    "active"
                );

            }


            if (
                category === "all" &&
                key === "navAll"
            ) {

                link.classList.add(
                    "active"
                );

            }

        });


    renderTemplates();
}


/* ========================================
   SEARCH
======================================== */

function handleSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );


    searchQuery =
        input.value
            .toLowerCase()
            .trim();


    renderTemplates();
}


/* ========================================
   SORT
======================================== */

function handleSort() {

    currentSort =
        document.getElementById(
            "sortSelect"
        ).value;


    renderTemplates();
}


/* ========================================
   TEMPLATE SEARCH
======================================== */

function templateMatchesSearch(
    template
) {

    if (!searchQuery) {
        return true;
    }


    const language =
        translations[currentLang];


    const title =
        language[
            template.titleKey
        ]?.toLowerCase() || "";


    const description =
        language[
            template.descKey
        ]?.toLowerCase() || "";


    const englishTitle =
        translations.en[
            template.titleKey
        ]?.toLowerCase() || "";


    const englishDescription =
        translations.en[
            template.descKey
        ]?.toLowerCase() || "";


    return (

        title.includes(searchQuery) ||

        description.includes(searchQuery) ||

        englishTitle.includes(searchQuery) ||

        englishDescription.includes(searchQuery) ||

        template.category
            .toLowerCase()
            .includes(searchQuery) ||

        template.tier
            .toLowerCase()
            .includes(searchQuery) ||

        template.id
            .toLowerCase()
            .includes(searchQuery)

    );
}


/* ========================================
   RENDER TEMPLATES
======================================== */

function renderTemplates() {

    const grid =
        document.getElementById(
            "templateGrid"
        );


    const emptyState =
        document.getElementById(
            "emptyState"
        );


    const t =
        translations[currentLang];


    /* Filter */

    let filtered =
        templates.filter(
            template => {

                const matchesCategory =
                    activeCategory === "all" ||
                    template.category ===
                        activeCategory;


                const matchesSearch =
                    templateMatchesSearch(
                        template
                    );


                return (
                    matchesCategory &&
                    matchesSearch
                );

            }
        );


    /* Sort */

    filtered.sort(
        (a, b) => {

            if (
                currentSort === "newest"
            ) {

                return (
                    new Date(b.dateAdded) -
                    new Date(a.dateAdded)
                );

            }


            if (
                currentSort === "name"
            ) {

                return translations.en[
                    a.titleKey
                ].localeCompare(
                    translations.en[
                        b.titleKey
                    ]
                );

            }


            if (
                currentSort === "tier"
            ) {

                return a.tier.localeCompare(
                    b.tier
                );

            }


            return 0;

        }
    );


    /* Remove old cards */

    grid
        .querySelectorAll(
            ".template-card"
        )
        .forEach(card =>
            card.remove()
        );


    /* Empty state */

    if (filtered.length === 0) {

        emptyState.classList.add(
            "visible"
        );

        return;

    }


    emptyState.classList.remove(
        "visible"
    );


    /* Build cards */

    filtered.forEach(
        template => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "template-card";


            const title =
                t[
                    template.titleKey
                ];


            const description =
                t[
                    template.descKey
                ];


            const statusText =
                template.status ===
                "available"

                    ? t.statusAvailable

                    : t.statusComingSoon;


            const miniName =
                template.category ===
                "wedding"

                    ? "Victoria &amp; Julian"

                    : "Sophia Laurent";


            const preview =
                template.status ===
                "available"

                    ? `

                        <a
                            href="${template.path}"
                            class="preview-link"
                        >
                            ${t.previewText}

                            <span>
                                &rarr;
                            </span>
                        </a>

                    `

                    : `

                        <span
                            class="coming-soon-link"
                        >
                            ${t.statusComingSoon}
                        </span>

                    `;


            card.innerHTML = `

                <div
                    class="card-preview-container"
                >

                    <div
                        class="card-number-badge"
                    >
                        ${template.number}
                    </div>


                    <div
                        class="mini-invitation"
                    >

                        <div
                            class="mini-inv-border"
                        ></div>


                        <div
                            class="mini-inv-top"
                        >
                            ${template.category.toUpperCase()}
                        </div>


                        <div
                            class="mini-inv-body"
                        >

                            <div
                                class="mini-inv-names"
                            >
                                ${miniName}
                            </div>


                            <div
                                class="mini-inv-amp"
                            >
                                &amp;
                            </div>


                            <div
                                class="mini-inv-date"
                            >
                                10 . 10 . 2026
                            </div>

                        </div>


                        <div
                            class="mini-inv-footer"
                        >
                            ${template.tier.toUpperCase()}
                        </div>

                    </div>

                </div>


                <div
                    class="card-content"
                >

                    <div
                        class="card-meta-row"
                    >

                        <span
                            class="card-category-tier"
                        >
                            ${template.category}
                            &middot;
                            ${template.tier}
                        </span>


                        <span
                            class="card-status"
                        >
                            ${statusText}
                        </span>

                    </div>


                    <h3
                        class="card-title"
                    >
                        ${title}
                    </h3>


                    <p
                        class="card-desc"
                    >
                        ${description}
                    </p>


                    <div
                        class="card-action-row"
                    >

                        <span
                            class="card-category-tier card-id"
                        >
                            ID:
                            ${template.id}
                        </span>


                        ${preview}

                    </div>

                </div>

            `;


            grid.insertBefore(
                card,
                emptyState
            );

        }
    );

}