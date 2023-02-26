from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

# TODO: secure CORS policy
CORS(app)
