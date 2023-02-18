import os
from dotenv import load_dotenv
from database.postgres.adapter import PostgresDB
from core.services.form_service import BasicFormService
from application.http import run as run_http


def get_db():
    db_host = os.getenv("DB_HOST")
    db_name = os.getenv("DB_NAME")
    db_user = os.getenv("DB_USER")
    db_user_password = os.getenv("DB_PASSWORD")

    db = PostgresDB(host=db_host, database=db_name, user=db_user, password=db_user_password)
    return db

if __name__ == "__main__":
    load_dotenv()

    try:
        db = get_db()
    except Exception as err:
        print(err)
        exit()

    form_service = BasicFormService(db=db)
    run_http(form_service=form_service)
