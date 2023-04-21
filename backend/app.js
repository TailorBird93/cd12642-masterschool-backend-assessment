const path= require('path')
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const dotenv=require('dotenv').config();
const bodyParser = require('body-parser');
const connectDB= require('./config/db')
const {errorHandler}= require('./middleware/errorMiddleware')

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const photoRoutes = require('./routes/photoRoutes');
const userRoutes= require('./routes/userRoutes');
const favoritesRoutes=require('./routes/favoritesRoutes')
const goalRoutes=require('./routes/goalRoutes')

app.use(express.json());
app.use('/api/photos', photoRoutes);
app.use('/api/user', userRoutes);
app.use('/api/goals', goalRoutes);
app.use('/api/favorites', favoritesRoutes)

// Serve frontend

if(process.env.NODE_ENV==='production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))
  app.get('*', (req,res)=> res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
} else{
  app.get('/',(req, res)=> res.send('Set to production'))
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(errorHandler);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Unsplash API!' });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
