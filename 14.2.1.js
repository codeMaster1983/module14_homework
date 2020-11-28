const parser = new DOMParser();

const xmlList = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlList, "text/xml")
// console.log(xmlDOM);

const xmlDOMArray = xmlDOM.querySelectorAll("student")
// console.log(xmlDOMArray)

for (let studentNode of xmlDOMArray) {
  const nameNode = studentNode.querySelector("name");
  const firstNode = nameNode.querySelector("first");
  const secondNode = nameNode.querySelector("second");
  const ageNode = studentNode.querySelector("age");
  const profNode = studentNode.querySelector("prof");
  const langAttr = nameNode.getAttribute("lang");
  
  const result = {
    firstName: firstNode.textContent,
    secondName: secondNode.textContent,
    lang: langAttr,
    age: Number(ageNode.textContent),
    prof: profNode.textContent
  }
  console.log('result', result)
}