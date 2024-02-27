
async function get_data() 
{
  const response = await fetch('test.csv');
  const data = await response.text();
  console.log(data);
  return data;
}
let data = get_data().catch(console.error);
const rows = data.split('\n').slice(1)
console.log(rows[0]);
// function parse_data() {
// }
parse_data(data);
