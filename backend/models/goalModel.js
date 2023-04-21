const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
<<<<<<< HEAD
      required: [true, 'Please add a text value'],
=======
      required: [true, 'Please add a goal'],
>>>>>>> main
    },
  },
  {
    timestamps: true,
  }
)

<<<<<<< HEAD
module.exports = mongoose.model('Goal', goalSchema)
=======
module.exports = mongoose.model('Goal', goalSchema)
>>>>>>> main
