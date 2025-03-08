# <span style="color: #3498db;">Recipe Book</span>

## Installation

To get started with a project, follow these steps:

### 1. Clone the repository

<div>git clone https://github.com/web-konstanta/recipe-book.git</div>

### 2. Move to the project

<div>cd recipe-book</div>

### 3. Install dependencies

<div>cd frontend</div>
<div>npm install</div>

<div>cd backend</div>
<div>npm install</div>

### 4. Set env variables

<div>cd frontend</div>
<div>cp .env.example .env ( Paste CLIENT_URL=http://localhost:3000 API_URL=https://www.themealdb.com/api/json/v1/1/ )</div>

<div>cd backend</div>
<div>cp .env.example .env ( VITE_API_URL=http://localhost:5000 )</div>

### 5. Run backend & frontend

<div>cd frontend</div>
<div>npm run dev</div>

<div>cd backend</div>
<div>npm run start</div>