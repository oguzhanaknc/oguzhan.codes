const rules = [
  [/#{2}\s?([^\n]+)\n/g, "<h2 >$1</h2>"],
  [/#{1}\s?([^\n]+)\n/g, "<h1>$1</h1>"],
];

export default {
  bind(el) {
    let html = el.textContent;
    rules.forEach(([rule, template]) => {
      html = html.replace(rule, template);
    });

    el.innerHTML = html;
  },
};
