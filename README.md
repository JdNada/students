🚀 Features
✅ Backend (FastAPI)
- Create, update, delete, and retrieve student records
- Department and training assignment for students
- RESTful API structure
- SQLAlchemy ORM for database interaction
- CORS and Pydantic validation
✅ Frontend (Angular)
- List of all students
- Form to add and delete students
- Dropdowns to select departments and formations
- Service-based architecture for API calls
⚙️ Requirements
✅Backend
- Python 3.9+
- FastAPI
- SQLAlchemy
- Uvicorn
- MySQL or PostgreSQL
- XAMPP (for MySQL, if used)
✅Frontend
- Node.js (v18+ recommended)
- Angular CLI (`npm install -g @angular/cli`)
🔧 Installation
 1. Clone the repository
git clone https://github.com/JdNada/students.git
cd students
📁 API Endpoints :
 	GET /students – List all students
 	POST /students – Add a new student
 	DELETE /students/{id} – Delete a student by ID
 	GET /departments – Get list of departments
 	GET /trainings – Get list of trainings
