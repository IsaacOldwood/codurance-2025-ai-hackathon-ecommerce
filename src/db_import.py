import sqlite3

import pandas as pd


def seed_database(csv_file="data/styles.csv", db_file="fashion_items.db"):
    # Load the CSV data into a pandas DataFrame
    df = pd.read_csv(csv_file)

    # Create a SQLite database connection
    conn = sqlite3.connect(db_file)

    # Write the DataFrame to a SQLite table
    table_name = "fashion_items"
    df.to_sql(table_name, conn, if_exists="replace", index=False)

    # Close the database connection
    conn.close()

    print(
        f"Data from {csv_file} has been successfully loaded into the SQLite database '{db_file}' in the table '{table_name}'."
    )


# Run the seed script if executed directly
if __name__ == "__main__":
    seed_database()
