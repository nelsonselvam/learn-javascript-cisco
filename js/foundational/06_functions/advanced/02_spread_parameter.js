/**
 * file to explore `spread` operator in JS
 *
 * helps to unpack an array
 *
 */

function fetchFile(name, url, type) {
  console.log(`Fetching file: ${name}`);
  console.log(`From URL: ${url}`);
  console.log(`File type: ${type}`);
}

names = ["file1.jpeg", "http://localhost/files", "JPEG"];
fetchFile(...names); // spread operator unpacks the array into individual arguments
