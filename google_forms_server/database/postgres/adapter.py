import psycopg2
from core.ports.db import DatabasePort
from core.models import Question


class PostgresDB(DatabasePort):
    def __init__(self, host: str, database: str, user: str, password: str):
        self.conn = psycopg2.connect(host=host, database=database, user=user, password=password)

    def save_question(self, question: Question) -> Question:
        
        query = "INSERT INTO questions (text) VALUES (%s) RETURNING id;"
        with self.conn.cursor() as cursor:
            cursor.execute(query, (question.text,))
            self.conn.commit()
            id = cursor.fetchone()[0]
        
        return id
    
    def close(self):
        if self.conn.closed == 0:
            self.conn.close()
    
