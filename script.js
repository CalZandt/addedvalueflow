document.addEventListener('DOMContentLoaded', (event) => {
  const steps = [
    { text: 'Check address for HSI eligibility', subtext: 'Home Internet Address' },
    { text: 'Position value and benefits of current Voice AAL BOGO', subtext: 'Voice BOGO Promotion' },
    { text: 'Position benefits of Data with Paired Digits' },
    { text: 'Probing questions: Who is their current internet Provider and how much do they pay?' },
    { text: 'Discuss Home Internet Test Drive and prepaid Masterd rebate' },
    { text: 'Inquire about customers profession' },
    { text: 'Discuss hobbies' },
    { text: 'Inquire about children' },
    { text: 'Ask customer if they run their own business or sell products on eBay and/or Craiglist' },
    { text: 'Review current FREE device promotions with customer', subtext: 'Free Device Promotions' },
    { text: 'Probing questions: Who is their current internet Provider and how much do they pay?' }
  ];

  const workflowDiv = document.getElementById('workflow');
  steps.forEach((step, index) => {
    const stepDiv = document.createElement('div');
    stepDiv.className = 'form-check';
    stepDiv.innerHTML = `
      <input class="form-check-input" type="checkbox" value="" id="step${index}">
      <label class="form-check-label" for="step${index}">
        ${step.text}
      </label>
      ${step.subtext ? `<div class="form-text">${step.subtext}</div>` : ''}
    `;
    workflowDiv.appendChild(stepDiv);
  });

  AOS.init();
});

