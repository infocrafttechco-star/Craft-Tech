const { createContactService } = require("../services/Contact.service");

const createContact = async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      projectType,
      projectInfo,
      phoneNumber,
    } = req.body;

    // Required fields
    if (!name || !email || !subject || !projectType || !projectInfo) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Phone validation (optional but if exists)
    if (phoneNumber && phoneNumber.length < 10) {
      return res.status(400).json({
        success: false,
        message: "Phone number must be at least 10 digits",
      });
    }

    const contact = await createContactService({
      name,
      email,
      subject,
      projectType,
      projectInfo,
      phoneNumber,
    });

    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = { createContact };
