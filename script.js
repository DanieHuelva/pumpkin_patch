function showPage(pageNumber) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(`page${pageNumber}`).classList.add('active');
}

function selectTime(time, button) {
  const response = document.getElementById('response');
  const textButton = document.getElementById('textButton');

  if (time === 'next week') {
    response.textContent = 'Next week it is! 🎃💕';
  } else {
    response.textContent = `Yay! ${time} it is! 🎃💕`;
  }

  document.querySelectorAll('.choice').forEach(b => b.classList.remove('selected'));
  button.classList.add('selected');

  // Opens the phone's messaging app with a pre-filled text.
  const message =
    time === 'next week'
      ? `🎃💕 Pumpkin Patch Date Appointment 💕🎃\n\nIt's a date! We're doing the pumpkin patch next week. 🥰\n\nCan't wait to see you! — Love, Sam`
      : `🎃💕 Pumpkin Patch Date Appointment 💕🎃\n\nIt's a date! We're going to the pumpkin patch today at ${time} PM. 🥰\n\nCan't wait to see you! — Love, Sam`;

  textButton.href = `sms:4062238832?&body=${encodeURIComponent(message)}`;
  textButton.classList.add('show');
}
