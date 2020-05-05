function toDecimal() {
  var binary = document.getElementById("binary").value;
  if (binary === '') return alert('Please, enter a binary number!');
  var isbin = 0
  binary.split('').map((num) =>{ 
      if(num !== '0' && num !== '1') isbin++ });
  if(isbin !== 0 ) return alert('Please, enter a binary number!');  
  var decimal = parseInt(binary, 2)
  dec = decimal.toString();
  decArray = dec.split('');
  dec = decArray.toString();
  qtdvir = dec.length / 2;
  for(var x = 1 ; x < qtdvir ; x++) {
    dec = dec.replace(',', '</span><span>'); 
  }
  document.getElementById("binary").value = '';
  document.getElementById("decimal").value = '';
  document.getElementById('result').innerHTML = `<span>${dec}</span>`;
};

function toBinary() {
  var decimal = document.getElementById('decimal').value;
  if (decimal < 0) return alert('Please, enter a natural number!')
  result = (decimal >>> 0).toString(2);
  result = result.split('');
  result = result.toString();
  qtdvir = result.length / 2;
  for(var x = 1 ; x < qtdvir ; x++) {
    result = result.replace(',', '</span><span>'); 
  }
  document.getElementById("binary").value = '';
  document.getElementById("decimal").value = '';
  document.getElementById('result').innerHTML = `<span>${result}</span>`;
}