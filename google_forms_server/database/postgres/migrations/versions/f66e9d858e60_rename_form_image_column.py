"""rename form image column

Revision ID: f66e9d858e60
Revises: 2a7ed893d576
Create Date: 2023-02-19 11:37:31.417040

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f66e9d858e60'
down_revision = '2a7ed893d576'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.alter_column('form', 'image', new_column_name='thumbnail')


def downgrade() -> None:
    op.alter_column('form', 'thumbnail', new_column_name='image')
