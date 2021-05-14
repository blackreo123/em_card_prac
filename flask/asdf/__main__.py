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
        cur.execute("select \
                        a.em_kan_first,\
                        a.em_kan_last,\
                        a.em_sex,\
                        a.dp_ID,\
                        a.un_id,\
                        b.dp_name,\
                        b.un_name,\
                        a.em_date,\
                        a.em_kai_mail \
                     from employee a, dp_unit b \
                     where a.dp_ID = b.dp_ID \
                     and a.un_id = b.un_id")
        rows = cur.fetchall()
    except psycopg2.OperationalError as e:
        if e.pgcode == psycopg2.errorcodes.LOCK_NOT_AVAILABLE:
            locked = True
        else:
            raise

    for row in rows:
        date = str(row[7])
        arr.append({'name': row[0]+row[1], 'sex': row[2],
                   'dp_id': row[3], 'un_id': row[4],'dp_name': row[5], 'un_name': row[6], 'date': date, 'mail': row[8]})

    cur.close()
    return json.dumps(arr, ensure_ascii=False)

#部署リストを取得する


@app.route("/getDpList", methods=['GET', 'POST'])
def getDpList():
    cur = conn.cursor()
    key = request.json
    arr = []
    try:
        cur.execute("select \
                        dp_id,\
                        dp_name \
                     from dp")
        rows = cur.fetchall()
    except psycopg2.OperationalError as e:
        if e.pgcode == psycopg2.errorcodes.LOCK_NOT_AVAILABLE:
            locked = True
        else:
            raise

    for row in rows:
        arr.append({'id': row[0], 'name': row[1]})
    # print(arr)
    cur.close()
    return json.dumps(arr, ensure_ascii=False)

#ユニットリストを取得する


@app.route("/getUnList", methods=['GET', 'POST'])
def getUnList():
    cur = conn.cursor()
    key = request.json
    arr = []
    try:
        cur.execute("select \
                        un_id,\
                        un_name \
                     from unit \
                     where dp_id = %s", (key['dp_id']))
        rows = cur.fetchall()
    except psycopg2.OperationalError as e:
        if e.pgcode == psycopg2.errorcodes.LOCK_NOT_AVAILABLE:
            locked = True
        else:
            raise

    for row in rows:
        arr.append({'id': row[0], 'name': row[1]})
    
    cur.close()
    return json.dumps(arr, ensure_ascii=False)

# employee table insert
@app.route("/inputEm", methods=['GET', 'POST'])
def inputEm():
    cur = conn.cursor()
    key = request.json
    arr = []
    try:
        cur.execute("insert into employee values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)",
        (key['em_num'],key['em_date'],key['dp_id'],key['un_id'],key['em_kan_fist'],key['em_kan_last'],key['em_huri_fist'],key['em_huri_last'],key['em_en_first'],key['em_en_last'],key['em_birthday'],key['em_sex'],
         key['em_kai_mail'],key['em_kojin_mail'],key['em_mynum'],key['em_school'],key['em_sotsu'],key['em_major']))
    except psycopg2.OperationalError as e:
        if e.pgcode == psycopg2.errorcodes.LOCK_NOT_AVAILABLE:
            locked = True
        else:
            raise
    conn.commit()        
    cur.close()
    return json.dumps(arr, ensure_ascii=False)

# jp_contact table insert
@app.route("/input_jp_contact", methods=['GET', 'POST'])
def input_jp_contact():
    cur = conn.cursor()
    key = request.json
    arr = []
    try:
        cur.execute("insert into jp_contact values(%s,%s,%s,%s,%s)",
        (key['em_num'],key['jp_contact_post'],key['jp_contact_address'],key['jp_contact_phone'],key['jp_contact_home']))
    except psycopg2.OperationalError as e:
        if e.pgcode == psycopg2.errorcodes.LOCK_NOT_AVAILABLE:
            locked = True
        else:
            raise
    conn.commit()        
    cur.close()
    return json.dumps(arr, ensure_ascii=False)

# motherland table insert
@app.route("/input_motherland", methods=['GET', 'POST'])
def motherland():
    cur = conn.cursor()
    key = request.json
    arr = []
    try:
        cur.execute("insert into motherland values(%s,%s,%s,%s,%s)",
        (key['em_num'],key['motherland_post'],key['motherland_address'],key['motherland_phone'],key['motherland_home']))
    except psycopg2.OperationalError as e:
        if e.pgcode == psycopg2.errorcodes.LOCK_NOT_AVAILABLE:
            locked = True
        else:
            raise
    conn.commit()        
    cur.close()
    return json.dumps(arr, ensure_ascii=False)

# kinkyu table insert
@app.route("/input_kinkyu", methods=['GET', 'POST'])
def input_kinkyu():
    cur = conn.cursor()
    key = request.json
    arr = []
    try:
        cur.execute("insert into kinkyu values(%s,%s,%s,%s)",
        (key['em_num'],key['kinkyu_kankei'],key['kinkyu_num'],key['kinkyu_name']))
    except psycopg2.OperationalError as e:
        if e.pgcode == psycopg2.errorcodes.LOCK_NOT_AVAILABLE:
            locked = True
        else:
            raise
    conn.commit()        
    cur.close()
    return json.dumps(arr, ensure_ascii=False)



def main():
    app.run(port=3001, debug=True, use_reloader=True)


if __name__ == '__main__':
    main()
