let data = {};

$("#amount").change(function(e) {
  data.amount = e.target.value;
});

$("#currency").change(function(e) {
  data.currency = e.currentTarget.value;
});

$("#giving").change(function(e) {
  data.giving = e.currentTarget.value;
});

$("#name").change(function(e) {
  data.name = e.target.value;
});

$("#email").change(function(e) {
  data.email = e.target.value;
});

$("#telephone").change(function(e) {
  data.telephone = e.target.value;
});

$("#give").submit(function(e) {
	e.preventDefault();
	console.log(data)
	// interact with api to pay
});
