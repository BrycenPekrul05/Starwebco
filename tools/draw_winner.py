#!/usr/bin/env python3
"""Select one giveaway winner from a Formspree CSV export.

Usage:
    python draw_winner.py submissions.csv

Review and remove ineligible entries before running. The script de-duplicates by
normalized business name and email, then uses Python's cryptographically secure
`secrets` module to choose one row.
"""
from __future__ import annotations
import csv, secrets, sys
from pathlib import Path


def norm(value: str) -> str:
    return " ".join((value or "").strip().lower().split())


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: python draw_winner.py submissions.csv")
        return 2
    path = Path(sys.argv[1])
    if not path.exists():
        print(f"File not found: {path}")
        return 2
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        rows = list(csv.DictReader(handle))
    if not rows:
        print("No entries found.")
        return 1

    seen_businesses, seen_emails, eligible = set(), set(), []
    for row in rows:
        business = norm(row.get("business_name", ""))
        email = norm(row.get("email", ""))
        if not business or not email:
            continue
        if business in seen_businesses or email in seen_emails:
            continue
        seen_businesses.add(business)
        seen_emails.add(email)
        eligible.append(row)

    if not eligible:
        print("No eligible rows remained after de-duplication.")
        return 1

    winner_index = secrets.randbelow(len(eligible))
    winner = eligible[winner_index]
    print(f"Eligible entries: {len(eligible)}")
    print(f"Selected entry number: {winner_index + 1}")
    for key in ("full_name", "business_name", "email", "phone", "virginia_location"):
        print(f"{key}: {winner.get(key, '')}")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
