const RESULT_REQUEST_OK = 'OK';
const RESULT_REQUEST_KO = 'KO';

//ESEMPIO ESERCITAZIONE 3
function getStudents(oData) {
	try {
		var pStmt,
			instance,
			register = [],
			results = [],
			runSQL = $.db.getConnection(),
			sqlQuery =
			'SELECT "FISCAL_CODE", "NAME", "SURNAME", "BIRTHDAY", "AGE", "BLOCKED" ' +
			'FROM "ACADEMY_1"."com.nttdata.academy::student" ';
			
		// Execute the query and return the results
		pStmt = runSQL.prepareStatement(sqlQuery);

		pStmt.execute();
		instance = pStmt.getResultSet();

		while (instance.next()) {
			register = {
				fiscalCode:     instance.getNString(1),
        name:           instance.getNString(2),
        surname:        instance.getNString(3),
        birthday:       instance.getDate(4),
        age:            instance.getInteger(5),
        blocked:        instance.getNString(6)
			};
			results.push(register);
		}
		pStmt.close();
		runSQL.close();

    results = {
			status: 200,
			message: results
		};
        
		return results;
	} catch (err) {
		return {
			status: 460,
			message: err.message
		};
	}
}