---
layout: archive
permalink: /log/
title: "Study Log"
author_profile: true
---

{% include base_path %}

{% assign posts = site.posts | where_exp: "post", "post.categories contains 'study-log'" %}

{% for post in posts %}
  {% include archive-single.html %}
{% endfor %}

