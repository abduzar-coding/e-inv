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
            "available",

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

        initializeLanguage();

        initializeNavigation();

        initializeFilters();

        initializeSearch();

        initializeSort();

        renderStats();

        renderTemplates();

    }
);


/* ========================================
   LANGUAGE INITIALIZATION
======================================== */

function initializeLanguage() {

    const savedLanguage =
        localStorage.getItem(
            "einv-language"
        );


    if (
        savedLanguage &&
        translations[savedLanguage]
    ) {

        currentLang =
            savedLanguage;

    }


    applyTranslations();

}


/* ========================================
   LANGUAGE SWITCHER
======================================== */

function switchLanguage(lang) {

    if (!translations[lang]) {
        return;
    }


    currentLang =
        lang;


    localStorage.setItem(
        "einv-language",
        lang
    );


    applyTranslations();

}


/* ========================================
   APPLY TRANSLATIONS
======================================== */

function applyTranslations() {

    const language =
        translations[currentLang];


    /* HTML language */

    document.documentElement
        .setAttribute(
            "lang",
            currentLang
        );


    /* Active language button */

    document
        .querySelectorAll(".lang-btn")
        .forEach(button => {

            const buttonLanguage =
                button.getAttribute(
                    "data-lang"
                );


            /*
             * Fallback for existing HTML
             * buttons that only contain
             * EN / RU / UZ as text.
             */

            const textLanguage =
                button.textContent
                    .trim()
                    .toLowerCase();


            const isActive =
                buttonLanguage
                    ? buttonLanguage ===
                      currentLang
                    : textLanguage ===
                      currentLang;


            button.classList.toggle(
                "active",
                isActive
            );

        });


    /* Translate text */

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.getAttribute(
                    "data-i18n"
                );


            if (
                Object.prototype.hasOwnProperty
                    .call(
                        language,
                        key
                    )
            ) {

                element.textContent =
                    language[key];

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
                Object.prototype.hasOwnProperty
                    .call(
                        language,
                        key
                    )
            ) {

                element.placeholder =
                    language[key];

            }

        });


    /*
     * Update navigation/filter
     * active states after language
     * changes.
     */

    updateNavigationState();

    updateFilterState();

    renderStats();

    renderTemplates();

}


/* ========================================
   NAVIGATION
======================================== */

function initializeNavigation() {

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const key =
                        link.getAttribute(
                            "data-i18n"
                        );


                    if (
                        key ===
                        "navWeddings"
                    ) {

                        filterByCategory(
                            "wedding",
                            event
                        );

                    }


                    else if (
                        key ===
                        "navBirthdays"
                    ) {

                        filterByCategory(
                            "birthday",
                            event
                        );

                    }


                    else if (
                        key ===
                        "navAll"
                    ) {

                        filterByCategory(
                            "all",
                            event
                        );

                    }

                }
            );

        });

}


/* ========================================
   NAVIGATION STATE
======================================== */

function updateNavigationState() {

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
                activeCategory ===
                    "wedding" &&
                key ===
                    "navWeddings"
            ) {

                link.classList.add(
                    "active"
                );

            }


            if (
                activeCategory ===
                    "birthday" &&
                key ===
                    "navBirthdays"
            ) {

                link.classList.add(
                    "active"
                );

            }


            if (
                activeCategory ===
                    "all" &&
                key ===
                    "navAll"
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

}


/* ========================================
   CATEGORY FILTER INITIALIZATION
======================================== */

function initializeFilters() {

    document
        .querySelectorAll(".filter-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    const category =
                        button.getAttribute(
                            "data-filter"
                        );


                    filterByCategory(
                        category,
                        event
                    );

                }
            );

        });

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


    if (
        ![
            "all",
            "wedding",
            "birthday"
        ].includes(category)
    ) {

        category = "all";

    }


    activeCategory =
        category;


    updateFilterState();

    updateNavigationState();

    renderTemplates();

}


/* ========================================
   FILTER STATE
======================================== */

function updateFilterState() {

    document
        .querySelectorAll(".filter-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.getAttribute(
                    "data-filter"
                ) === activeCategory
            );

        });

}


/* ========================================
   SEARCH INITIALIZATION
======================================== */

function initializeSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );


    if (!input) {
        return;
    }


    input.addEventListener(
        "input",
        handleSearch
    );

}


/* ========================================
   SEARCH
======================================== */

function handleSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );


    if (!input) {
        return;
    }


    searchQuery =
        input.value
            .toLowerCase()
            .trim();


    renderTemplates();

}


/* ========================================
   SORT INITIALIZATION
======================================== */

function initializeSort() {

    const select =
        document.getElementById(
            "sortSelect"
        );


    if (!select) {
        return;
    }


    select.addEventListener(
        "change",
        handleSort
    );

}


/* ========================================
   SORT
======================================== */

function handleSort() {

    const select =
        document.getElementById(
            "sortSelect"
        );


    if (!select) {
        return;
    }


    currentSort =
        select.value;


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
        (
            language[
                template.titleKey
            ] || ""
        )
            .toLowerCase();


    const description =
        (
            language[
                template.descKey
            ] || ""
        )
            .toLowerCase();


    const englishTitle =
        (
            translations.en[
                template.titleKey
            ] || ""
        )
            .toLowerCase();


    const englishDescription =
        (
            translations.en[
                template.descKey
            ] || ""
        )
            .toLowerCase();


    const category =
        template.category
            .toLowerCase();


    const tier =
        template.tier
            .toLowerCase();


    const id =
        template.id
            .toLowerCase();


    return (

        title.includes(searchQuery) ||

        description.includes(searchQuery) ||

        englishTitle.includes(searchQuery) ||

        englishDescription.includes(searchQuery) ||

        category.includes(searchQuery) ||

        tier.includes(searchQuery) ||

        id.includes(searchQuery)

    );

}


/* ========================================
   RENDER STATISTICS
======================================== */

function renderStats() {

    const statsRow =
        document.getElementById(
            "statsRow"
        );


    if (!statsRow) {
        return;
    }


    const weddingCount =
        templates.filter(
            template =>
                template.category ===
                "wedding"
        ).length;


    const celebrationCount =
        templates.filter(
            template =>
                template.category ===
                "birthday"
        ).length;


    const t =
        translations[currentLang];


    statsRow.innerHTML = `

        <div class="stat-item">

            <div class="stat-number">
                ${String(
                    weddingCount
                ).padStart(2, "0")}
            </div>

            <div class="stat-label">
                ${t.statWedding}
            </div>

        </div>


        <div class="stat-item">

            <div class="stat-number">
                ${String(
                    celebrationCount
                ).padStart(2, "0")}
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
   TEMPLATE PREVIEW
======================================== */

function createMiniPreview(
    template
) {

    const miniName =
        template.category ===
        "wedding"

            ? "Victoria &amp; Julian"

            : "Sophia Laurent";


    const categoryLabel =
        template.category ===
        "wedding"

            ? "WEDDING"

            : "BIRTHDAY";


    const dateLabel =
        template.category ===
        "wedding"

            ? "10 . 10 . 2026"

            : "15 . 11 . 2026";


    return `

        <div class="mini-invitation">

            <div
                class="mini-inv-border"
            ></div>


            <div class="mini-inv-top">
                ${categoryLabel}
            </div>


            <div class="mini-inv-body">

                <div class="mini-inv-names">
                    ${miniName}
                </div>


                <div class="mini-inv-amp">
                    &amp;
                </div>


                <div class="mini-inv-date">
                    ${dateLabel}
                </div>

            </div>


            <div class="mini-inv-footer">
                ${template.tier.toUpperCase()}
            </div>

        </div>

    `;

}


/* ========================================
   TEMPLATE SORTING
======================================== */

function sortTemplates(
    templateList
) {

    return templateList.sort(
        (a, b) => {

            if (
                currentSort ===
                "newest"
            ) {

                return (
                    new Date(
                        b.dateAdded
                    ) -
                    new Date(
                        a.dateAdded
                    )
                );

            }


            if (
                currentSort ===
                "name"
            ) {

                const nameA =
                    translations.en[
                        a.titleKey
                    ] || "";


                const nameB =
                    translations.en[
                        b.titleKey
                    ] || "";


                return nameA.localeCompare(
                    nameB
                );

            }


            if (
                currentSort ===
                "tier"
            ) {

                const tierOrder = {
                    basic: 1,
                    animated: 2,
                    premium: 3,
                    luxury: 4
                };


                return (
                    (
                        tierOrder[
                            a.tier
                        ] || 99
                    ) -
                    (
                        tierOrder[
                            b.tier
                        ] || 99
                    )
                );

            }


            return 0;

        }
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


    if (!grid || !emptyState) {
        return;
    }


    const t =
        translations[currentLang];


    /* ====================================
       FILTER
    ==================================== */

    let filtered =
        templates.filter(
            template => {

                const matchesCategory =
                    activeCategory ===
                        "all" ||
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


    /* ====================================
       SORT
    ==================================== */

    filtered =
        sortTemplates(
            filtered
        );


    /* ====================================
       REMOVE OLD CARDS
    ==================================== */

    grid
        .querySelectorAll(
            ".template-card"
        )
        .forEach(
            card =>
                card.remove()
        );


    /* ====================================
       EMPTY STATE
    ==================================== */

    if (
        filtered.length ===
        0
    ) {

        emptyState.classList.add(
            "visible"
        );


        return;

    }


    emptyState.classList.remove(
        "visible"
    );


    /* ====================================
       BUILD CARDS
    ==================================== */

    filtered.forEach(
        template => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "template-card";


            const title =
                t[
                    template.titleKey
                ] ||
                template.id;


            const description =
                t[
                    template.descKey
                ] ||
                "";


            const statusText =
                template.status ===
                "available"

                    ? t.statusAvailable

                    : t.statusComingSoon;


            const preview =
                template.status ===
                "available"

                    ? `

                        <a
                            href="${template.path}"
                            class="preview-link"
                            aria-label="${t.previewText}: ${title}"
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


                    ${createMiniPreview(
                        template
                    )}

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