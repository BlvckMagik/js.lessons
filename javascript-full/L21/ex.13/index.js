const getSection = num => {
  const parent = document
    .querySelector([`[data-number='${num}']`])
    .closest('.box');
  return parent.dataset.section;
};

console.log(getSection(2));
