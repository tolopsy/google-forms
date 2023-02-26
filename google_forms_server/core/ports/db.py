from abc import ABC, abstractmethod
from typing import Dict
from core.models import Question

class DatabasePort(ABC):
    @abstractmethod
    def save_question(self, question: Question) -> int:
        pass
    
    @abstractmethod
    def create_and_return_new_form(self) -> Dict:
        pass
