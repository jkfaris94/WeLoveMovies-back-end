# WeLoveMovies-back-end 

A RESTful backend service for a movie theater application. This API supports retrieving movie information, theater showings, and user reviews.

## 🌐 Live Deployment

- **Backend**: [https://welovemovies-back-end-uhdr.onrender.com](https://welovemovies-back-end-uhdr.onrender.com)

---

## 📦 Technologies Used

- Node.js
- Express.js
- Knex.js
- PostgreSQL
- Render (for deployment)

---

## ⚙️ Setup Instructions (Local)

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jkfaris94/WeLoveMovies-back-end.git
   cd WeLoveMovies-backend

2. **Install dependencies:**

    npm install

3. **Set Up Environment Variables**

    env
    DATABASE_URL=postgresql://username:password@localhost:5432/we_love_movies
    Run database migrations and seeds:

4. **Run Migrations and Seeds**

    npx knex migrate:latest
    npx knex seed:run

5. **Start the server:**

    npm start
    The app will default to http://localhost:5001

## 📖 API Endpoints
## Movies
    GET /movies – List all movies

    GET /movies?is_showing=true – List currently showing movies

    GET /movies/:movieId – Read movie by ID

    GET /movies/:movieId/theaters – Theaters showing a movie

    GET /movies/:movieId/reviews – Reviews for a movie

## Theaters
    GET /theaters – List all theaters and their movies

## Reviews
    PUT /reviews/:reviewId – Update a review

    DELETE /reviews/:reviewId – Delete a review

# 🧪 Scripts
    npm start – Start the server

    npm run dev – Run with nodemon

    npx knex migrate:latest – Apply latest migrations

    npx knex migrate:rollback – Roll back last migration

    npx knex seed:run – Seed the database

# 📄 Environment Variables
    
    DATABASE_URL =	PostgreSQL connection string
    PORT =	Port the server listens on (optional)

# 📬 Contact
    Built by @jkfaris94
    Feel free to open an issue or PR if you'd like to contribute or report a bug.