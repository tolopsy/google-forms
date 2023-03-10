import psycopg2
from psycopg2.pool import ThreadedConnectionPool, PoolError
from contextlib import contextmanager
from typing import Dict
from core.ports.db import DatabasePort


class PostgresDB(DatabasePort):
    def __init__(self, dsn: str):
        self._connection_pool = ThreadedConnectionPool(minconn=1, maxconn=15, dsn=dsn)
        self._failover_connection = psycopg2.connect(dsn=dsn)
    
    @contextmanager
    def _get_connection(self):
        using_failover = False
        try:
            conn = self._connection_pool.getconn()
        except PoolError:
            # TODO: Log pool error
            conn = self._failover_connection
            using_failover = True

        try:
            yield conn
        finally:
            if not using_failover:
                self._connection_pool.putconn(conn)
    
    @contextmanager
    def _get_cursor(self):
        with self._get_connection() as connection:
            with connection.cursor() as cursor:
                yield cursor
    
    def create_and_return_new_form(self) -> Dict:
        query = "INSERT INTO form DEFAULT VALUES RETURNING *;"

        with self._get_cursor() as cursor:
            cursor.execute(query)
            result = cursor.fetchone()
            columns = cursor.description

        keys = [col[0] for col in columns]
        formData = dict(zip(keys, result))

        return formData

    # TODO: Remove this fake method
    def save_question(self, question):
        
        query = "INSERT INTO question (text) VALUES (%s) RETURNING id;"
        with self._get_cursor() as cursor:
            cursor.execute(query, (question.text,))
            id = cursor.fetchone()[0]
        
        return id
    
    def close(self):
        if self._connection_pool.closed is False:
            self._connection_pool.closeall()
        if self._failover_connection.closed == 0:
            self._failover_connection.close() 
