from abc import ABC, abstractmethod
from core.models import Question

class DatabasePort(ABC):
    @abstractmethod
    def save_question(self, question: Question) -> int:
        pass