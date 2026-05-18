"use server";
const actionReserveTable = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const response = formData.get("response");

  /*EFTER FETCH SKAL DER VÆRE NOGET? FOR DEN REGISTRERE IKKE NOGET SOM SUCESS*/
  try {
    const response = await fetch("http://localhost:4000/reservations", {
      method: "GET",
      headers: headersList,
    });

    if (!res.ok) {
      return { success: false, message: "Please insert mail" };
    }

    const data = await res.json();
    if (!response) {
      return {
        success: false,
        message: "Mail missing",
      };
    }
    return { success: true, message: `Mail ${resname} submittet` };
  } catch (error) {
    return { success: false, message: "Somthing went wrong" };
  }
};

export default actionReserveTable;
