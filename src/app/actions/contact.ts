"use server";

export async function submitContact(formData: FormData) {
  const name = formData.get("name");
  const whatsapp = formData.get("whatsapp");
  const email = formData.get("email");

  // Aqui você conectaria com seu CRM, Banco de Dados, ou enviaria um email.
  // Simulando um delay de rede para o loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Lead Capturado:", { name, whatsapp, email });

  if (!name || !whatsapp) {
    return { error: "Nome e WhatsApp são obrigatórios." };
  }

  return { success: true };
}