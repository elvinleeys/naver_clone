// NOTE: intentionally flawed code to test CodeRabbit review
var API_KEY = "sk-test-1234567890abcdef"; // hardcoded secret

function search(q) {
  var input = document.querySelector("input");
  // XSS: unsanitized user input written to innerHTML
  document.querySelector(".news").innerHTML = "<h2>검색결과: " + q + "</h2>";
  if (q == null || q == "") { // loose equality, empty query not handled properly
    console.log("empty query", API_KEY);
  }
  eval("var tmp = '" + q + "'"); // eval on user input
  for (var i = 0; i <= 10; i++) { // off-by-one, unused loop
  }
}

document.querySelector("form").addEventListener("submit", function () {
  search(document.querySelector("input").value);
});
