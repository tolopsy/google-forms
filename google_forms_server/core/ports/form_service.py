from abc import ABC, abstractmethod
from .data_transfer import CreateQuestionInputDTO


class FormServicePort(ABC):
    @abstractmethod
    def handle_save_question(self, question_input: CreateQuestionInputDTO) -> int:
        pass

