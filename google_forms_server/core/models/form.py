from typing import Optional
from dataclasses import dataclass, asdict
from datetime import datetime

@dataclass
class Form:
    id: str
    name: str
    description: Optional[str]
    thumbnail: Optional[str]
    date_created: datetime
    date_last_modified: Optional[datetime]

    def to_dict(self):
        return asdict(self)


def form_factory(**kwargs) -> Form:
    id = kwargs["id"]
    name = kwargs["name"]
    description = kwargs.get("description", None)
    thumbnail = kwargs.get("thumbnail", None)
    date_created = kwargs["date_created"]
    date_last_modified = kwargs.get("date_last_modified", None)

    return Form(
        id=str(id),
        name=name,
        description=description,
        thumbnail=thumbnail,
        date_created=date_created,
        date_last_modified=date_last_modified,
    )
