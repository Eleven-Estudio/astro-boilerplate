import { actions, isInputError } from "astro:actions";

const form = document.getElementById("contact-form") as HTMLFormElement;
const submit = document.getElementById("submit") as HTMLButtonElement;

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    submit.disabled = true;
    submit.textContent = "Enviando...";

    const formData = new FormData(form);
    const { data, error } = await actions.contact(formData);

    submit.disabled = false;
    submit.textContent = "Enviar";

    if (data?.status) {
      // biome-ignore lint/suspicious/noAlert: User feedback on successful form submission
      alert("Formulario enviado correctamente.");
      form.reset();
      return;
    }

    if (error && isInputError(error)) {
      for (const [field, messages] of Object.entries(error.fields)) {
        console.error(`${field}: ${(messages as string[]).join(", ")}`);
      }
      // biome-ignore lint/suspicious/noAlert: User feedback on validation errors
      alert("Errores de validación, revisa los campos.");
    } else {
      console.error("Error desconocido:", error);
      // biome-ignore lint/suspicious/noAlert: User feedback on unknown errors
      alert("Error al enviar el formulario.");
    }
  });
}
