from abc import ABC, abstractmethod
from typing import Dict
from .data_transfer import CreateQuestionInputDTO


class FormServicePort(ABC):
    @abstractmethod
    def handle_save_question(self, question_input: CreateQuestionInputDTO) -> int:
        pass

    @abstractmethod
    def handle_create_form(self) -> Dict:
        pass

