function Es5Function () {
function add (a, b) {
    return a + b;
  }
  const twoPlusFour = add(2, 4);
  console.log(twoPlusFour);
  return (
    <>
      <h3>Legacy ES5 functions</h3>
      twoPlusFour = { twoPlusFour }<br />
      add(2, 4) = { add(2, 4) }<br />
    </>
  )
} 
export default Es5Function;
