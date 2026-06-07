document.getElementById('generateBtn').addEventListener('click', () => {
  const number = document.getElementById('number').value;
  if (!number) return alert('Please enter your WhatsApp number!');
  const pairCode = Math.floor(Math.random() * 900000) + 100000;
  alert(`Your Pair Code: ${pairCode}`);
});

document.getElementById('howToPair').addEventListener('click', () => {
  alert("Step 1: Open WhatsApp on your phone.\nStep 2: Go to Linked Devices.\nStep 3: Enter the Pair Code here.\nStep 4: Done!");
});
