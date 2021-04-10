module.exports = {
  filter: {
    input: '//*[@data-cu="filter-input"]',
    clearIcon: '//*[@data-cu="clear-icon"]',
  },
  folder: {
    title: title => `//*[@data-cu="folder-title" and text()="${title}"]`
  }
}