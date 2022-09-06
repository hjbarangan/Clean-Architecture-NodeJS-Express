async function updateSelectedQuestion({ id, ...info }) {
    try {
      const db = await dbs();
      // update
      const sql =
        "UPDATE questions SET time_updated=NOW(), questions=$1, correct_answer=$2, categories_id=$3  WHERE " +
        "id=$4;";
      const params = [
        info.questions,
        info.correct_answer,
        info.categories_id,
        id
      ];
      await db.query(sql, params);
      // delete choices
      const sql2 = "DELETE FROM questions_choices WHERE questions_id=$1;";
      const params2 = [id];
      await db.query(sql2, params2);
      // insert new choices if not true or false
      if (info.correct_answer !== "true" && info.correct_answer !== "false") {
        info.details.forEach(function(e) {
          const sql = "INSERT INTO questions_choices VALUES (DEFAULT,$1,$2)";
          const params = [id, e];
          db.query(sql, params);
        });
      }
      const sql3 =
        "SELECT q.questions,q.correct_answer,q.categories_id,qc.choices_or_imagepath " +
        "FROM questions q LEFT JOIN questions_choices qc ON qc.questions_id = q.id WHERE q.id = $1;";
      const params3 = [id];
      const result3 = await db.query(sql3, params3);
      const msg = {
        msg: "Updated successfully..",
        data: result3.rows
      };
      return msg;
    } catch (e) {
      console.log("Error: ", e);
    }
  }