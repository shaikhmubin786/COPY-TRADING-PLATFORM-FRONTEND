"""
models.py — SQLAlchemy ORM models for the Copy Trading Platform
"""

import uuid
from datetime import datetime, timezone
from enum import Enum as PyEnum

from sqlalchemy import (
    Column, String, DateTime, Enum, UniqueConstraint, Text
)
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column
from typing import Optional

from database import Base


class BrokerEnum(str, PyEnum):
    ZERODHA   = "Zerodha"
    ALICEBLUE = "AliceBlue"
    ZENAM     = "Zenam"


class RoleEnum(str, PyEnum):
    MASTER = "Master"
    CHILD  = "Child"


class StatusEnum(str, PyEnum):
    CONNECTED    = "Connected"
    WARNING      = "Warning"
    DISCONNECTED = "Disconnected"


class Account(Base):
    """
    Represents a broker trading account (master or child).
    API credentials are stored encrypted.
    """
    __tablename__ = "accounts"

    # Primary key
    id: Mapped[str] = mapped_column(
        String(36),
        primary_key=True,
        default=lambda: str(uuid.uuid4()),
        index=True,
    )

    # Broker info
    broker: Mapped[BrokerEnum] = mapped_column(Enum(BrokerEnum), nullable=False)
    client_id: Mapped[str] = mapped_column(String(100), nullable=False)
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    role: Mapped[RoleEnum] = mapped_column(Enum(RoleEnum), nullable=False, default=RoleEnum.CHILD)

    # Encrypted broker credentials (stored as encrypted strings)
    api_key: Mapped[Optional[str]] = mapped_column(Text, nullable=True)   # encrypted
    api_secret: Mapped[Optional[str]] = mapped_column(Text, nullable=True)   # encrypted
    access_token: Mapped[Optional[str]] = mapped_column(Text, nullable=True)   # encrypted

    # Live connection state
    status: Mapped[StatusEnum] = mapped_column(Enum(StatusEnum), nullable=False, default=StatusEnum.DISCONNECTED)
    connection_info: Mapped[Optional[str]] = mapped_column(String(200), nullable=True, default="Not connected")
    session_status: Mapped[Optional[str]] = mapped_column(String(100), nullable=True, default="Unknown")
    last_sync: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)

    # Audit timestamps
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
    )

    # Ensure no duplicate client IDs per broker
    __table_args__ = (
        UniqueConstraint("broker", "client_id", name="uq_broker_client_id"),
    )

    def __repr__(self) -> str:
        return f"<Account {self.broker}:{self.client_id} [{self.status}]>"
