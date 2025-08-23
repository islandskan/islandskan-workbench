<%*
let today = tp.date.now("YYYY-MM-DD");
await tp.file.rename(today);

tR += `---
date: ${today}
tags: ["exploration"]
status: 
---
`;
%>