/***** LIBRARIES *****/
$.import("srv", "academy");
const ACADEMY = $.srv.academy;

function main() {
	$.response.status = 200;
	$.response.setBody('Failed to execute action: ');
	var sData = "",
		oData = "",
		response = {};

	if ($.request.body.asString()) {

		sData = $.request.body.asString();
		oData = JSON.parse(sData);

		switch (oData.action) {
			case "getStudents":
				response = ACADEMY.getStudents();
				break;
		}
	}

	return response;
}

try {
	switch ($.request.method) {
		case $.net.http.GET:
			//A GET request is made in order to retrieve the token that will be used in the POST request to retrieve the data
			//$.response.status = $.net.http.OK;
			var result1 = main();
			if (result1) {
				$.response.contentType = "application/json; charset=UTF-8";
				$.response.status = 200;
				$.response.setBody(JSON.stringify(result1));
			}
			break;
		case $.net.http.POST:
			var result = main();
			if (result) {
				$.response.contentType = "application/json; charset=UTF-8";
				$.response.status = result.status;
				$.response.setBody(JSON.stringify(result.message));
			}
			break;
		default:
			$.response.status = 405;
			$.response.setBody('Method not allowed.');
	}

} catch (err) {
	$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
	$.response.setBody('Failed to execute action: ' + err.toString());
}