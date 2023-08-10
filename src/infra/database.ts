import mongoose from 'mongoose'

export async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://eltonhugo:root@cluster0.etmsmbf.mongodb.net/heroTickets',
    )
    console.log('Connect database success.')
  } catch (error) {
    console.log(' ~ file: database.ts:5 ~ connect ~ error:', error)
  }
}
