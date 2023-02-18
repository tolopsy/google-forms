import os
from dotenv import load_dotenv
from database.postgres.adapter import PostgresDB
from core.services.form_service import BasicFormService
from application.http import run as run_http


def get_db():
    dsn = os.getenv("DB_DSN")
    db = PostgresDB(dsn=dsn)

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
