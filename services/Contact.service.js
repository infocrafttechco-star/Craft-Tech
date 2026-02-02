const Contact = require("../models/Contact.model");

const createContactService = async (data) => {
  const contact = new Contact(data);
  return await contact.save();
};

module.exports = {
  createContactService,
};
