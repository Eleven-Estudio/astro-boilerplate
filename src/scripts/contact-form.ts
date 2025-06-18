import { actions, isInputError } from 'astro:actions';

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
            alert("Formulario enviado correctamente.");
            form.reset();
            return;
        }

        if (error && isInputError(error)) {
            Object.entries(error.fields).forEach(([field, messages]) => {
                console.error(`${field}: ${(messages as string[]).join(", ")}`);
            });
            alert("Errores de validación, revisa los campos.");
        } else {
            console.error("Error desconocido:", error);
            alert("Error al enviar el formulario.");
        }
    });
}
