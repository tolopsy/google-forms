import psycopg2
from typing import Dict
from core.ports.db import DatabasePort


class PostgresDB(DatabasePort):
    def __init__(self, dsn: str):
        self.conn = psycopg2.connect(dsn=dsn)
    
    def create_and_return_new_form(self) -> Dict:
        query = "INSERT INTO form DEFAULT VALUES RETURNING *;"
        with self.conn.cursor() as cursor:
            cursor.execute(query)
            self.conn.commit()
            result = cursor.fetchone()
            columns = cursor.description

        keys = [col[0] for col in columns]
        formData = dict(zip(keys, result))

        print(formData)
        return formData

    # TODO: Remove this fake method
    def save_question(self, question):
        
        query = "INSERT INTO question (text) VALUES (%s) RETURNING id;"
        with self.conn.cursor() as cursor:
            cursor.execute(query, (question.text,))
            self.conn.commit()
            id = cursor.fetchone()[0]
        
        return id
    
    def close(self):
        if self.conn.closed == 0:
            self.conn.close()
    
