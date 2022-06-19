# PythonPositionVisualizationReport
Python position visualization Report

# Install runtime env
```shell
pip install -r requirements.txt
```

# Init database
```sql
mysql> source python.sql
```

# Configure data connection information - `app.py`
```python
conn = pymysql.connect(
    host='you self mysql host',
    user='you self mysql username',
    password='you self mysql password',
    database='python',
    charset='utf8'
)
```

# Running Project
```shell
[root@localhost ~]# python app.py
 * Serving Flask app 'app_1' (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```
