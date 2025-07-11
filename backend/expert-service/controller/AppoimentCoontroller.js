const AppoimentSchema = require('../model/AppoimentSchema');

// Create new appointment
const createAppoiment = async (request, response) => {
  try {
    const { appoimentId, date, reviewId, discription } = request.body;

    const newAppoiment = new AppoimentSchema({
      appoimentId,
      date,
      reviewId,
      discription
    });

    await newAppoiment.save();
    response.status(201).json({ message: 'Appointment created', appoiment: newAppoiment });
  } catch (error) {
    response.status(500).json({ message: 'Error creating appointment', error });
  }
};

// Update appointment by ID
const updateAppoiment = async (request, response) => {
  try {
    const id = request.params.id;
    const updated = await AppoimentSchema.findByIdAndUpdate(id, request.body, { new: true });

    if (!updated) {
      return response.status(404).json({ message: 'Appointment not found' });
    }

    response.json({ message: 'Appointment updated', appoiment: updated });
  } catch (error) {
    response.status(500).json({ message: 'Error updating appointment', error });
  }
};

// Delete appointment by ID
const deleteAppoiment = async (request, response) => {
  try {
    const id = request.params.id;
    const deleted = await AppoimentSchema.findByIdAndDelete(id);

    if (!deleted) {
      return response.status(404).json({ message: 'Appointment not found' });
    }

    response.json({ message: 'Appointment deleted' });
  } catch (error) {
    response.status(500).json({ message: 'Error deleting appointment', error });
  }
};

// Find appointment by ID
const findAppoimentById = async (request, response) => {
  try {
    const id = request.params.id;
    const appoiment = await AppoimentSchema.findById(id);

    if (!appoiment) {
      return response.status(404).json({ message: 'Appointment not found' });
    }

    response.json(appoiment);
  } catch (error) {
    response.status(500).json({ message: 'Error fetching appointment', error });
  }
};

// Find all appointments
const findAllAppoiment = async (request, response) => {
  try {
    const { reviewId } = request.query;
    const query = reviewId ? { reviewId } : {};
    const appoiments = await AppoimentSchema.find(query).sort({ date: 1 });

    response.json(appoiments);
  } catch (error) {
    response.status(500).json({ message: 'Error fetching appointments', error });
  }
};

module.exports = {
  createAppoiment,
  updateAppoiment,
  deleteAppoiment,
  findAppoimentById,
  findAllAppoiment
};
