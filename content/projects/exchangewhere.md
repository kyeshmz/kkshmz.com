---
title: "Exchangewhere"
description: "Project with SJQ++"
date: 2018-02-13T01:30:28+09:00
draft: true
layout: "single"
ogp: "/img/projects/actfestival18/cover.jpg"
---
{{< youtube xrcHsGHTEdU >}}

{{< img src="/img/projects/exchangewhere/statuetoline.jpg" title="Pictures are shifted into abstract lines" >}}
{{< img src="/img/projects/exchangewhere/droppedagent.jpg" title="Agents are dropped into existence" >}}
{{< img src="/img/projects/exchangewhere/multiagent.jpg" title="Agents give off sound to the atmosphere" >}}


---
### Credit:

* Back End Engineer : [Nao Yonamine](https://mohayonao.github.io/)
* Stage Production : 
* Production : NO ARCHITECTS, [night cruising](http://nightcruising.jp/about/)
* Web programming : [Kye Shimizu]( {{ .Site.BaseURL }})


for file in *.mov; ffmpeg -i $file -crf 20 -filter:v scale=640:640 -c:a copy -tune grain $file.mp4
ffmpeg -i INPUT -crf 14 -filter:v scale=640:640 -c:a copy -tune grain OUTPUT
