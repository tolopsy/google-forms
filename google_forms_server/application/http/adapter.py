from flask import request, jsonify
from flask.views import View
from core.ports.form_service import FormServicePort
from core.ports.data_transfer import CreateQuestionInputDTO

class FormView(View):
    def __init__(self, form_service: FormServicePort) -> None:
        self.form_service = form_service
    
    def dispatch_request(self):
        data = request.get_json()
        id = self.form_service.handle_save_question(question_input=CreateQuestionInputDTO(text=data["text"]))
        return jsonify({"name": "Tolu", "id": id}), 201