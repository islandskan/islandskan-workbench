# Acceptance tests

> Tests/acceptance criteras to know when tasks and features are done
> At the moment, they are written in "plain language" acceptance criteras.

---

## Core setup

-   [x] When I run `npm start`, the site builds locally without errors
-   [x] When I run the build on the deployment target, it succeeds without errors

## Layouts & navigation

-   [x] When I open the site, I can navigate between home, thoughts, explorations, bookshelf, and interrupts
-   [ ] When I open the home page, I see modals for latest Thought, latest Exploration, latest Bookshelf item, and About
-   [ ] When I click a modal, I am taken to the correct page
-   [ ] When I click the About modal, the info appears inline (no page change)
-   [x] When I scroll any page, header and footer are displayed consistently

## Posts

-   [x] When I create a new Thought in Obsidian, the frontmatter has correct fields (title, date, tags)
-   [x] When I create a post tagged as "Thought", it uses the right layout
-
-   [x] When I create a new Exploration in Obsidian, a logs folder is created automatically
-   [x] When an Exploration post contains multiple log entries, they are generates
-   [x] When an Exploration post log entries are created the same date, they are automatically numbered
-   [x] When I create a new log entry in the logs folder, the log appears on the correct Exploration page
-   [x] When I create a log entry in a sub folder, they are linked to the parent Exploration through a parentSlug identifier
- [] Log entries in a sub folder should render as part of the main Exploration post page
-   [ ] When I add a status to an Exploration, it appears on the Exploration page
-   [ ] When I cross-reference another post in frontmatter, the link works

## Bookshelf

-   [ ] When I add a new item to `bookshelf.json`, schema validation passes
-   [ ] When I add a new item, it appears on the Bookshelf page
-   [ ] When I add a `relatedThoughtURI`, the link works and points to the correct Thought
-   [ ] When I check the home page, the latest added item appears in the “Currently reading/watching/listening to” modal

## Styles

-   [ ] When I load the site, text is readable and consistent across pages
-   [ ] When I view cards (explorations, thoughts, bookshelf), they display correctly and consistently
-   [ ] When I view modals, they render without overflow or clipping

## Interrupts

-   [ ] When I submit the contact form, I see a confirmation message
-   [ ] When I submit the contact form, I receive the email at the configured address

## Deployment

-   [ ] When I open the deployed site, all pages load without broken links
-   [ ] When I click navigation links in production, they go to the correct pages
-   [ ] When I open the deployed site on mobile, it displays correctly

---
