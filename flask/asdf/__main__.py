#!/usr/bin/env python3
from flask import request, Flask, jsonify
import json
import psycopg2
import datetime
from flask_cors import CORS


app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False          # 日本語文字列が文字化けしないようにするおまじない

CORS(app)
conn = psycopg2.connect(
    "dbname='EP_CARD' user='jiha' host='localhost' password='2356'")


@app.route("/getList", methods=['GET', 'POST'])
def getList():
    cur = conn.cursor()
    key = request.json
    arr = []
    try:
        cur.execute("select a.em_kan_first, a.em_kan_last, a.em_sex, b.dp_name, b.un_name, a.em_date, a.em_kai_mail from employee a, dp_unit b where a.dp_ID = b.dp_ID and a.un_id = b.un_id")
        rows = cur.fetchall()
    except psycopg2.OperationalError as e:
        if e.pgcode == psycopg2.errorcodes.LOCK_NOT_AVAILABLE:
            locked = True
        else:
            raise
    
    for row in rows:
        date = str(row[5]) 
        print(date)
        arr.append({'name' : row[0]+row[1], 'sex' : row[2], 'dp' : row[3], 'un' : row[4], 'date' : date, 'mail' : row[6]})
    
    cur.close()
    return json.dumps(arr, ensure_ascii=False)




def main():
    app.run(port=3001, debug=True, use_reloader=True)


if __name__ == '__main__':
    main()
