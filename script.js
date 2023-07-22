document.addEventListener('DOMContentLoaded', (event) => {
  const steps = [
    { text: 'Check address for HSI eligibility', subtext: '<a href="https://c2.t-mobile.com/home-internet/address-changes-home-internet" target="_blank">Home Internet Address</a>' },
    { text: 'Position value and benefits of current Voice AAL BOGO', subtext: '<a href="https://c2.t-mobile.com/offers" target="_blank">Voice BOGO Promotion</a>' },
    { text: 'Position benefits of Data with Paired Digits' },
    { text: 'Probing questions: Who is their current internet Provider and how much do they pay?' },
    { text: 'Discuss Home Internet Test Drive and prepaid Masterd rebate' },
    { text: 'Inquire about customers profession' },
    { text: 'Discuss hobbies' },
    { text: 'Inquire about children' },
    { text: 'Ask customer if they run their own business or sell products on eBay and/or Craiglist' },
    { text: 'Review current FREE device promotions with customer', subtext: '<a href="https://c2.t-mobile.com/offers" target="_blank">Free Device Promotions</a>' },
    { text: 'Probing questions: Who is their current internet Provider and how much do they pay?' }
  ];

  const workflowDiv = document.getElementById('workflow');
  const notesDiv = document.getElementById('notes');
  const callsDiv = document.getElementById('calls');
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

    stepDiv.querySelector('input').addEventListener('change', (event) => {
      if (event.target.checked) {
        const note = document.createElement('p');
        note.textContent = step.text;
        notesDiv.appendChild(note);
      } else {
        Array.from(notesDiv.children).forEach((child) => {
          if (child.textContent === step.text) {
            notesDiv.removeChild(child);
          }
        });
      }
    });
  });

  document.getElementById('accept').addEventListener('click', () => handleCall('Accepted'));
  document.getElementById('decline').addEventListener('click', () => handleCall('Declined'));
  document.getElementById('no-offer').addEventListener('click', () => handleCall('No Offer'));

  function handleCall(result) {
    const text = Array.from(notesDiv.children).map((child) => child.textContent).join('\n');
    if (result !== 'No Offer') {
      navigator.clipboard.writeText(text);
    }
    const call = document.createElement('p');
    call.textContent = `${new Date().toLocaleString()}: ${result}`;
    callsDiv.prepend(call);
    notesDiv.innerHTML = '';
    Array.from(workflowDiv.querySelectorAll('input')).forEach((input) => input.checked = false);
  }

  AOS.init();
});

