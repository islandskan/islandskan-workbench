<%*
let title = await tp.system.prompt("Log entry title");

let today = tp.date.now("YYYY-MM-DD");

let parent = tp.file.folder().replace("-logs", "");

await tp.file.rename(today);

tR += `---
title: "${title}"
date: ${today}
tags: ["logs"]
status: "prototyping"
parent: "${parent}"
layout: null
permalink: false
debugMarker: "TEST_FROM_LOG_ENTRY"
---

Start adding log entry content here
`;
%>
