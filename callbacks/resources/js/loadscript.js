function loadScript(src, callback) {
   // creates a <script> tag and append it to the page
  // this causes the script with given src to start loading and run when complete
  console.log("I am in load script");
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback();
  document.head.append(script);
}

// load and execute the script at the given path
loadScript("./vendors/js/myscript1.js", function() {
  loadScript("./vendors/js/myscript2.js", function() {
    loadScript("./vendors/js/myscript3.js", function() {
      myscript1();
      myscript2();
      myscript3();
    })
  })
});

