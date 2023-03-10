import os
import sys
from signal import signal, SIGINT, SIGTERM
from dotenv import load_dotenv
from database.postgres.adapter import PostgresDB
from core.services.form_service import BasicFormService
from application.http import run as run_http


# TODO: Clean messy entry point (maybe use a class)

class Server:
    def __init__(self, db_dsn):
        self.db = PostgresDB(dsn=db_dsn)
        self.form_service = BasicFormService(db=self.db)
        signal(SIGINT, self._exit_gracefully)
        signal(SIGTERM, self._exit_gracefully)
    
    def _exit_gracefully(self, *args):
        self.stop()
        sys.stdout.flush()
        sys.stderr.flush()
        sys.exit()
    
    def run(self):
        run_http(form_service=self.form_service)
    
    def stop(self):
        self.db.close()


if __name__ == "__main__":
    load_dotenv()

    dsn = os.getenv("DB_DSN")
    server = Server(db_dsn=dsn)
    server.run()
