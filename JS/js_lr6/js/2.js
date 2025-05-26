function solve() {

  let text = document.getElementById('text').value.toLowerCase();
  let convention = document.getElementById('naming-convention').value;
  let result = '';

  switch (convention){
    case String('Pascal Case'):
      text.split(' ').forEach(word => {result+=(word[0].toUpperCase() + word.slice(1))});
      break;
    case String('Camel Case'):
      text.split(' ').forEach(word => {result+=(word[0].toUpperCase() + word.slice(1))});
      result = result[0].toLowerCase() + result.slice(1);
      break;
    default:
      result = 'Error!';
      break;
  }

  document.getElementById('result').textContent = result;
}