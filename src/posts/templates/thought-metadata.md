<%*
let title = await tp.system.prompt("Post title");

let slugifiedTitle = title
.toLowerCase()
.replace(/[^a-z0-9]+/g, '-')
.replace(/(^-|-$)/g, '');

await tp.file.rename(slugifiedTitle);

let today = tp.date.now("YYYY-MM-DD");

tR += `---
title: "${title}"
underTitle:
tags: ["thought"]
tone:
date: ${today}
unansweredQuestions:
reflections:
references:
layout: layouts/thought.njk
permalink: "/thoughts/${slugifiedTitle}/"

`;
%>
