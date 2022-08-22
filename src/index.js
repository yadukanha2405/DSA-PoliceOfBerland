import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

let checkRes = (arr) => {
  let count = 0;
  for (let i = 2; i < arr.length; i++) {
    console.log(arr);
    if (arr[i] == 0 && arr[i - 1] == 1 && arr[i - 2] == 0) {
      count++;
      arr.splice(i, 1, 1);
    }
  }
  return count;
};

let arr = [0, 0, 1, 0, 1, 0];
let result = checkRes(arr);
console.log(result);
