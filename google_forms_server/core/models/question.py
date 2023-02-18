from dataclasses import dataclass, field

@dataclass
class Question:
    text: str
    ID: str = field(default=None)
