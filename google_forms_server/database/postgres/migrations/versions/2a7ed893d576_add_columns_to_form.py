"""add columns to form

Revision ID: 2a7ed893d576
Revises: f1c0a939adef
Create Date: 2023-02-19 11:15:57.143834

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2a7ed893d576'
down_revision = 'f1c0a939adef'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.add_column('form', sa.Column('image', sa.String(150), nullable=True))
    op.add_column('form', sa.Column('date_created', sa.DateTime(timezone=True), server_default=sa.func.now()))
    op.add_column('form', sa.Column('date_last_modified', sa.DateTime(timezone=True), onupdate=sa.func.now()))
    op.alter_column('form', 'name', server_default="Untitled form")


def downgrade() -> None:
    op.drop_column('form', 'image')
    op.drop_column('form', 'date_created')
    op.drop_column('form', 'date_last_modified')
    op.alter_column('form', 'name', server_default=False)
