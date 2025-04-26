import os
import sqlite3

import db_import
import pandas as pd


# Test for the database seed script
def test_db_seed():
    # Ensure the database file does not exist before the test
    db_file = 'test_fashion_items.db'
    if os.path.exists(db_file):
        os.remove(db_file)

    # Run the seed script with the test database file
    db_import.seed_database(db_file=db_file)

    # Verify the database file was created
    assert os.path.exists(db_file), "Database file was not created."

    # Verify the table and data
    conn = sqlite3.connect(db_file)
    cursor = conn.cursor()

    # Check if the table exists
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='fashion_items';")
    assert cursor.fetchone() is not None, "Table 'fashion_items' was not created."

    # Check if data was inserted
    df = pd.read_sql_query("SELECT * FROM fashion_items;", conn)
    assert not df.empty, "Table 'fashion_items' is empty."

    # Clean up
    conn.close()
    os.remove(db_file)
