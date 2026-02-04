---
title: "Projects"
permalink: /projects/
author_profile: true
---

{% include base_path %}

<div class="grid__wrapper">
  {% for post in site.projects reversed %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
