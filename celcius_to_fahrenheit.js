document.getElementById('calculatebtn').onclick = () => {
  const celcius = document.getElementById('celcius').value;
  const fahrenheit = celcius * (9 / 5) + 32;

  document.getElementById('result').value = fahrenheit;
}