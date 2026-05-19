"use server";

const actionReserveTable = async (prevState, formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const tableNumber = formData.get("tableNumber");
  const guests = formData.get("guests");
  const date = formData.get("date");
  const contact = formData.get("contact");
  const eventId = formData.get("eventId");

  // Validation
  if (!name || name.trim().length < 2) {
    return { success: false, field: "name", message: "Name must be at least 2 characters" };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return { success: false, field: "email", message: "Invalid email address" };
  }
  if (!tableNumber) {
    return { success: false, field: "tableNumber", message: "Please select a table from the overview" };
  }
  if (!guests || parseInt(guests) < 1 || parseInt(guests) > 20) {
    return { success: false, field: "guests", message: "Number of guests must be between 1 and 20" };
  }
  if (!date) {
    return { success: false, field: "date", message: "Date is required" };
  }
  const phoneClean = contact?.replace(/\s/g, "");
  if (!phoneClean || phoneClean.length < 8) {
    return { success: false, field: "contact", message: "Phone number must be at least 8 digits" };
  }

  try {
    const body = {
      name: name.trim(),
      email: email.trim(),
      table: tableNumber,
      guests,
      date,
      phone: contact.trim(),
      ...(eventId && { eventId: parseInt(eventId) }),
    };

    const res = await fetch("https://mmd-b7-reservations.netlify.app/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.status === 409) {
      return {
        success: false,
        field: "tableNumber",
        message: `Table ${tableNumber} is already reserved on this date. Please choose another table.`,
        tableConflict: parseInt(tableNumber),
      };
    }

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return {
        success: false,
        message: errorData.message || "Reservation could not be completed. Please try again.",
      };
    }

    return {
      success: true,
      message: `Table ${tableNumber} reserved for ${name.trim()}! We look forward to seeing you.`,
      reservedTable: parseInt(tableNumber),
    };
  } catch (error) {
    return { success: false, message: "Something went wrong. Check your connection and try again." };
  }
};

export default actionReserveTable;
