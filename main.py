import os

from flask import Flask, render_template, redirect
# from data import db_session
import db_queries, or_tools

app = Flask(__name__)


# app.config['SECRET_KEY'] = '***'


@app.route('/')
def index():
    db_sess = db_session.create_session()
    return render_template('index.html')


def main():
    db_path = os.environ.get("DATABASE_URL", "db/...db")
    db_session.global_init(db_path)

    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)


if __name__ == '__main__':
    main()
