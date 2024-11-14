
![Bildschirmfoto 2024-11-14 um 15 43 42](https://github.com/user-attachments/assets/da0cbfd2-c6ec-4721-98ed-00cb71c7a2b2)

![ll 10 58 37](https://github.com/n-hadi/BeatStore/assets/77697181/c5a834f4-74a3-45dc-8c92-193bd02ca9bb)
![Bildschirmfoto 2024-11-14 um 15 18 20](https://github.com/user-attachments/assets/a5281ab5-cc40-420a-b748-20a6676e9de8)
![Bildschirmfoto 2024-11-14 um 15 17 20](https://github.com/user-attachments/assets/2f4e68a3-2f8b-45ca-9d2b-50125340f544)

# BeatStore Project

This is a full-stack project for selling beats and licenses using a Django backend and a React frontend. Below are the steps to set up and run the project, along with a detailed explanation of its functionality.

---

## Getting Started

### Backend Setup

1. **Run the Django Project**:

   - Navigate to the `backend/api/` folder.
   - Run the following command to start the backend:
     ```bash
     python manage.py runserver
     ```
     This will start the backend on `http://127.0.0.1:8000`.

2. **Create a Superuser**:

   - Run the following command to create an admin account:
     ```bash
     python manage.py createsuperuser
     ```
   - Follow the prompts to set up the superuser credentials.

3. **Admin Panel**:

   - Access the Django admin panel by navigating to `http://127.0.0.1:8000/admin/`.
   - Log in using the superuser credentials.

4. **Input Beats**:

   - In the `Core` app within the admin panel, you can add beats to your database.
     - **Tags**: Input tags as a comma-separated list. For example, `trap, dark`. Tags will appear on the beat's title on the frontend in the following format:\
       `Dark x Trap Type Beat - *Beat Title*`
     - **Spotlight**: The `Spotlight` boolean determines if a beat is showcased prominently on the main page. If no beat is marked as a spotlight, the app will default to showcasing the most recently added beat.
     - **Licenses**: Only use the licenses `Basic`, `Premium`, and `Unlimited`. The frontend is not configured for other license types.
     - **For Sale**: Turning off the `For Sale` boolean will exclude the beat from being sold on the platform without deleting it from the database (preventing potential issues).

---

### Frontend Setup

1. **Start the Frontend**:
   - Navigate to the `frontend/` folder.
   - Run the following command to start the React app:
     ```bash
     npm start
     ```
     The app should automatically open in your browser, typically running on `http://localhost:3000/`.

---

## Features

1. **Admin Panel Management**:

   - Add beats with WAV/MP3 files, artwork, and tags.
   - Showcase beats on the main page using the `Spotlight` boolean.
   - Manage availability of beats using the `For Sale` boolean.

2. **Frontend Display**:

   - Beats are displayed dynamically with tags and titles.
   - The title format is based on the tags (e.g., `Dark x Trap Type Beat - Beat Title`).

3. **License Support**:

   - The app supports three licenses: `Basic`, `Premium`, and `Unlimited`. Use only these licenses as the frontend is not set up for additional ones.

---

## Notes

- Ensure that the Django backend is running on port `8000` before starting the frontend.

