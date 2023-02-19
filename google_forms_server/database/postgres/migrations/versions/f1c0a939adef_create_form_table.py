"""create form table

Revision ID: f1c0a939adef
Revises: 
Create Date: 2023-02-19 10:56:26.644727

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f1c0a939adef'
down_revision = None
branch_labels = None
depends_on = None

table_name = "form"

def upgrade() -> None:
    op.create_table(
        table_name,
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('name', sa.Unicode(100), nullable=False),
        sa.Column('description', sa.Unicode(200)),
    )


def downgrade() -> None:
    op.drop_table(table_name)
