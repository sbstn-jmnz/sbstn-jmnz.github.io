---
---
do ->
  links = document.links
  i = 0
  linksLength = links.length
  while i < linksLength
    if links[i].hostname != window.location.hostname
      links[i].target = '_blank'
    i++
  return
