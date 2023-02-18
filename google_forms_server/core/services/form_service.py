from dataclasses import dataclass
from core.models import Question
from core.ports.db import DatabasePort
from core.ports.data_transfer import CreateQuestionInputDTO
from core.ports.form_service import FormServicePort

@dataclass
class BasicFormService(FormServicePort):
    db: DatabasePort

    def handle_save_question(self, question_input: CreateQuestionInputDTO) -> int:
        question = Question(text=question_input.text)
        questionId = self.db.save_question(question)
        return questionId
