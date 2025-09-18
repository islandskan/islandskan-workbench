# Checklist

> List of dev tasks, what to build

## Milestone 1 - Core writing workflow

### tags and statuses

-   [x] **Todo:** Create a `tags.json` file inside `_data` to store tags and statuses.
~~-   [ ] **Todo:** Set up Obsidian templates to read from `tags.json`.~~
~~-   [ ] **Test:** When adding a tag or status in Obsidian, dropdown suggestions show existing options.~~

### Thought posts

-   [X] **Test:** All posts tagged `thought` are listed as cards on the Thoughts index.
-   [X] **Test:** Each post card displays metadata to its post page.
-   [X] **Test:** Each post card links to its post page.
-   [X] **Test:** A new `.md` post created in Obsidian automatically appears as a card + page.
-   [X] **Test:** Thought posts can be edited in Obsidian.

### Explorations (core)

-   [X] **Todo:** Create `create-logs-folder.js` script to generate `exploration-logs` folders.
-   [X] **Test:** Creating an Exploration post in Obsidian creates the correct subfolder in `posts/`.
-   [ ] **Test:** Logs can be added inside the `-logs` folder and appear on the Exploration page.
-   [ ] **Test:** Logs entries are treated as just content to the parent page (meaning: 11ty doesn't render separate pages for each log entry).
-   [ ] **Test:** Log entries display newest → oldest.
-   [ ] **Test:** The Exploration page stores and displays `latestUpdate` (newest log’s date).
-   [ ] **Test:** The Exploration page stores and displays `status` (newest log’s status).
-   [ ] **Test:** Log entries are displayed on the right parent Exploration page
-   [ ] **Test:** Log entries don't overwrite each other (meaning: the same log entries don't aren't rendered on the wrong page)

---

## Milestron 2 - Collections & data-driven features

### Bookshelf

-   [ ] **Test:** Add a new book entry to `bookshelf.json` from Obsidian.
-   [ ] **Test:** Schema validates each new entry.
-   [X] **Test:** Entries display on the Bookshelf index page.
-   [ ] **Test:** Entries are categorized by type.
-   [ ] **Test:** Entries sort newest → oldest by `dateAdded`.
-   [ ] **Test:** Entries with `relatedThought` link correctly to Thought posts.

### Exploration logs as collections

-   [X] **Todo:** Create collection for `exploration-logs`.
-   [ ] **Test:** Each Exploration page lists its logs.
-   [ ] **Test:** Logs ordered newest → oldest.

---

## Milestron 3 - Dynamic & "What I broke"

### Special exploration: “What I Broke”

-   [ ] **Test:** Log entries tagged `what-i-broke` are added to the `what-i-broke` collection.
-   [X] **Test:** These log entries display with special CSS styling.
-   [X] **Test:** The Exploration page inherits the `what-i-broke` tag when a log entry uses it.
-   [X] **Test:** Exploration index cards with `what-i-broke` are styled differently.
-   [ ] **Test:** If the next log entry is tagged `solved`, the Exploration page removes the `what-i-broke` tag.
-   [X] **Test:** Older log entries tagged `what-i-broke` keep their tag + styling, even after being solved.
-   [ ] **Test:** Exploration page styling for `what-i-broke` is removed after solved.

---

## Milestone 4 - Site UX & pages

### Workbench / Home page

-   [ ] **Todo:** Set up layout template for homepage.
-   [ ] **Todo:** Create layouts for modals:
    -   Latest thought
    -   Latest exploration
    -   What I Broke
    -   Currently reading/watching/learning/listening/playing
    -   Cool tool
    -   Start here
-   [ ] **Test:** Latest Exploration appears in `latestExploration` collection for home page modal.
-   [ ] **Test:** Latest Bookshelf entry appears in `latestBookshelfItem` collection.
-   [ ] **Test:** Home page modal shows correct wording based on type (reading, watching, etc.).
-   [ ] **Test:** Modal links to Bookshelf index.
-   [ ] **Test:** If entry has a linked Thought, modal also links to it.
-   [ ] **Test:** If log entry uses `what-i-broke`, it links from home page.
-   [ ] **Test:** On first visit, “First time? Start here” modal is shown.
-   [ ] **Test:** That modal explains the site, navigation, and expectations.

### Interrupts

-   [ ] **Todo:** Set up template for Interrupts page.
-   [ ] **Todo:** Build contact form (frontend).
-   [ ] **Todo:** Add validation/sanitization and backend storage.
-   [ ] **Test:** Successful submissions are handled.
-   [ ] **Test:** Failed submissions are handled (with retries + messages).
-   [ ] **Test:** Form prevents spam/malicious input.
-   [ ] **Test:** Submissions can be added to guestbook if user checks option.
-   [ ] **Test:** Submissions send me an email.

### About

-   [ ] **Todo:** Set up layout template for About component.
-   [ ] **Todo:** Write content.
-   [ ] **Test:** About drawer is reachable everywhere.
-   [ ] **Test:** Drawer doesn’t block layouts/content.
-   [ ] **Test:** Drawer can be toggled open/closed.

---
