!function(d) {
  // Prepare template
  var templateSource = d.getElementById('myTemplate').innerHTML;
  var template = Handlebars.compile(templateSource);

  // Data in json
  var data = {
      title: 'Handlebars Test Job',
      body: 'Its a new test case',
      num:5
  };

  // Generate html using template and data
  var html = template(data);

  // Add the result to the DOM
  d.getElementById('renderedContent').innerHTML = html;
}(document);