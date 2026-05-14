"use server";
const actionRegister = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const resname = formData.get("resname");

  /*EFTER FETCH SKAL DER VÆRE NOGET? FOR DEN REGISTRERE IKKE NOGET SOM SUCESS*/
  try {
    const res = await fetch({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: { resname },
      }),
    });

    if (!res.ok) {
      return { success: false, message: "Please insert mail" };
    }

    const data = await res.json();
    if (!resname) {
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

export default actionRegister;
