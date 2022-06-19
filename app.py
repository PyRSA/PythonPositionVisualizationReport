import json
import pymysql
import pandas as pd
from flask import Flask
from flask import render_template

app = Flask(__name__)
conn = pymysql.connect(
    host='127.0.0.1',
    user='root',
    password='',
    database='python',
    charset='utf8'
)

df = pd.read_sql('select * from job', con=conn)


@app.route('/get_map_data')
def get_map_data():
    final_year = df["year"].drop_duplicates().tolist()
    final_province = df["province"].drop_duplicates().tolist()
    data_list = []
    for year in final_year:
        data_list.append(df.loc[df['year'] == year, 'number'].tolist())
    playlist_data = {"year": final_year, "province": final_province, "playlist_num": data_list}

    return json.dumps(playlist_data, ensure_ascii=False)


@app.route('/')
def index():
    return render_template("index.html")


if __name__ == '__main__':
    app.run()
