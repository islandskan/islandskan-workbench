<%*
let title = await tp.system.prompt("Post title");

let slugifiedTitle = title
.toLowerCase()
.replace(/[^a-z0-9]+/g, '-')
.replace(/(^-|-$)/g, '');

await tp.file.rename(slugifiedTitle);

let today = tp.date.now("YYYY-MM-DD");

let parentId = (title || "untitled").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")

tR += `---
title: "${title}"
startDate: ${today}
latestUpdate: ${today}
tags: ["exploration"]
status:
layout: layouts/exploration.njk
overview:
unansweredQuestions:
reflections:
references:
tools:
components:
slug: ${parentId}
permalink: "/explorations/${slugifiedTitle}/"

---

`;
%>
