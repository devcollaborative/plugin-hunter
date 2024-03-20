/**
 * This snippet works on the WordFence weekly vulnerability report pages, and will insert a list of the plugins
 * above each of the report tables that can be passed to the Plugin Hunt script.
 *
 * Example page: https://www.wordfence.com/blog/2024/03/wordfence-intelligence-weekly-wordpress-vulnerability-report-february-26-2024-to-march-3-2024/
 *
 * Go to https://make-bookmarklets.com/, copy & paste this code, and follow the instructions.
 */
let tables = document.querySelectorAll(".software-list");

tables.forEach(table => {
  let plugins = [];
  let tbody = table.getElementsByTagName('tbody')[0];

  Array.from(tbody.rows).forEach(row => plugins.push(row.cells[1].innerText));

  plugins.shift(); // Remove column header.

  table.insertAdjacentHTML('beforeBegin', `<code>${plugins.join(' ')}</code>`);
});