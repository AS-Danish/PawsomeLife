const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/pawsomeDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// User schema and model
const UserSchema = new mongoose.Schema({
  fullName: String,
  contact: String,
  hasPet: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', UserSchema);

// Pet schema and model
const PetSchema = new mongoose.Schema({
  name: String,
  image: String,
  category: String,
  species: String,
  description: String,
  price: Number,
  age: Number,
});

const Pet = mongoose.model('Pet', PetSchema);

// Fetch pets by category
app.get('/pets/:category', async (req, res) => {
  const category = req.params.category;
  try {
    const pets = await Pet.find({ category });
    if (pets.length === 0) {
      return res.status(404).json({ message: 'No pets found in this category' });
    }
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pets' });
  }
});

// Register route
app.post('/register', async (req, res) => {
  const { fullName, contact, hasPet, email, password } = req.body;

  const newUser = new User({
    fullName,
    contact,
    hasPet,
    email,
    password, // Store password as plain text (not recommended for production)
  });

  try {
    await newUser.save();
    res.json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to register user', details: err.message });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check if the password matches (no hashing, just a simple comparison)
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.json({ message: 'Login successful', user: { fullName: user.fullName, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Fetch pet by ID
app.get('/pets/:id', async (req, res) => {
  try {
    const petId = mongoose.Types.ObjectId(req.params.id); // Convert to ObjectId
    const pet = await Pet.findById(petId);
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.json(pet);
  } catch (error) {
    console.error('Error fetching pet:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
